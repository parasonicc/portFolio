import { useEffect, useState } from 'react';
import CategoryBadge from './CategoryBadge';
import styles from './ProjectModal.module.css';

const TABS = [
  { id: 'brief', label: 'The Brief', icon: '🎯' },
  { id: 'approach', label: 'What I Did', icon: '🛠️' },
  { id: 'results', label: 'Results', icon: '📈' },
  { id: 'recommendations', label: 'Recommendations', icon: '💡' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️' },
];

export default function ProjectModal({ project, projects, onClose, onNavigate }) {
  const [activeTab, setActiveTab] = useState('brief');
  const [lightbox, setLightbox] = useState(null); // { src, caption } | null
  const [hiddenImages, setHiddenImages] = useState({}); // auto-hide broken paths

  const index = projects.findIndex((p) => p.id === project?.id);
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  const detail = project?.detail || {};
  const images = (project?.evidence?.images || []).filter((img) => !hiddenImages[img.src]);
  const visibleTabs = TABS.filter((t) => (t.id === 'gallery' ? images.length > 0 : detail[t.id]));

  // Reset to first tab whenever the displayed project changes
  useEffect(() => {
    setActiveTab('brief');
    setLightbox(null);
  }, [project?.id]);

  // Keyboard: Esc closes (lightbox first), ← → navigate between projects
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null);
        else onClose();
      }
      if (lightbox) return;
      if (e.key === 'ArrowLeft' && prevProject) onNavigate(prevProject);
      if (e.key === 'ArrowRight' && nextProject) onNavigate(nextProject);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, onClose, onNavigate, prevProject, nextProject]);

  // Lock background scroll while the modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className={styles.modal} key={project.id}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerText}>
            <div className={styles.badgeRow}>
              <CategoryBadge category={project.category} label={project.categoryLabel} />
              <span className={styles.date}>{project.date}</span>
            </div>
            <h3 id="project-modal-title" className={styles.title}>{project.title}</h3>
            <p className={styles.module}>{project.module}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close project details">
            ✕
          </button>
        </div>

        {/* Metrics strip — always visible */}
        <div className={styles.metrics}>
          {project.metrics.map(({ value, label }) => (
            <div key={label} className={styles.metric}>
              <strong className={styles.metricValue}>{value}</strong>
              <span className={styles.metricLabel}>{label}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className={styles.tabBar} role="tablist" aria-label="Project sections">
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={styles.body} key={activeTab}>
          {activeTab === 'brief' && (
            <p className={styles.brief}>{detail.brief}</p>
          )}

          {activeTab === 'approach' && (
            <ul className={styles.list}>
              {detail.approach?.map((item, i) => (
                <li key={i} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          )}

          {activeTab === 'results' && (
            <ul className={styles.list}>
              {detail.results?.map((item, i) => (
                <li key={i} className={`${styles.listItem} ${styles.resultItem}`}>{item}</li>
              ))}
            </ul>
          )}

          {activeTab === 'recommendations' && (
            <ol className={styles.numberedList}>
              {detail.recommendations?.map((item, i) => (
                <li key={i} className={styles.numberedItem}>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          )}

          {activeTab === 'gallery' && (
            <div className={styles.gallery}>
              {images.map(({ src, caption }) => (
                <figure key={src} className={styles.figure}>
                  <button
                    className={styles.imgBtn}
                    onClick={() => setLightbox({ src, caption })}
                    aria-label={`Enlarge: ${caption}`}
                  >
                    <img
                      src={src}
                      alt={caption}
                      loading="lazy"
                      className={styles.img}
                      onError={() =>
                        setHiddenImages((prev) => ({ ...prev, [src]: true }))
                      }
                    />
                  </button>
                  <figcaption className={styles.caption}>{caption}</figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* Tags pinned under every tab */}
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Footer: prev / next project navigation */}
        <div className={styles.footer}>
          <button
            className={styles.navBtn}
            onClick={() => prevProject && onNavigate(prevProject)}
            disabled={!prevProject}
            aria-label={prevProject ? `Previous project: ${prevProject.title}` : 'No previous project'}
          >
            ← <span className={styles.navLabel}>{prevProject ? prevProject.title : 'First project'}</span>
          </button>
          <span className={styles.navHint}>esc to close · ← → to browse</span>
          <button
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={() => nextProject && onNavigate(nextProject)}
            disabled={!nextProject}
            aria-label={nextProject ? `Next project: ${nextProject.title}` : 'No next project'}
          >
            <span className={styles.navLabel}>{nextProject ? nextProject.title : 'Last project'}</span> →
          </button>
        </div>
      </div>

      {/* Lightbox for enlarged images */}
      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <img src={lightbox.src} alt={lightbox.caption} className={styles.lightboxImg} />
          <p className={styles.lightboxCaption}>{lightbox.caption}</p>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
            aria-label="Close enlarged image"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
