import { useEffect, useState } from 'react';
import CategoryBadge from './CategoryBadge';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  const [lightbox, setLightbox] = useState(null); // { src, caption } | null
  const [hiddenImages, setHiddenImages] = useState({}); // hide broken image paths

  // Close on Escape — closes lightbox first if open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (lightbox) setLightbox(null);
      else onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, onClose]);

  // Lock background scroll while the modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!project) return null;

  const evidence = project.evidence || {};
  const reports = evidence.reports || [];
  const images = (evidence.images || []).filter((img) => !hiddenImages[img.src]);
  const hasEvidence = reports.length > 0 || images.length > 0;

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
      <div className={styles.modal}>
        {/* Sticky header */}
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

        <div className={styles.body}>
          {/* Overview */}
          <p className={styles.desc}>{project.description}</p>

          {/* Metrics */}
          <div className={styles.metrics}>
            {project.metrics.map(({ value, label }) => (
              <div key={label} className={styles.metric}>
                <strong className={styles.metricValue}>{value}</strong>
                <span className={styles.metricLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className={styles.block}>
            <p className={styles.blockTitle}>Key highlights</p>
            <ul className={styles.highlights}>
              {project.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Evidence */}
          {hasEvidence && (
            <div className={styles.block}>
              <p className={styles.blockTitle}>Evidence & artefacts</p>

              {images.length > 0 && (
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

              {reports.length > 0 && (
                <div className={styles.reports}>
                  {reports.map(({ label, file }) => (
                    <a
                      key={file}
                      href={file}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.reportBtn}
                    >
                      📄 {label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
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
