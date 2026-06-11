import CategoryBadge from './CategoryBadge';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, delay = 0, onOpen }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      style={{ animationDelay: `${delay}s` }}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open full details for ${project.title}`}
    >
      {/* Header */}
      <div className={styles.head}>
        <h3 className={styles.title}>{project.title}</h3>
        <CategoryBadge category={project.category} label={project.categoryLabel} />
      </div>

      {/* Meta */}
      <p className={styles.meta}>
        <span className={styles.metaModule}>{project.module}</span>
        <span className={styles.metaSep}>·</span>
        <span className={styles.metaDate}>{project.date}</span>
      </p>

      {/* Description */}
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

      {/* Tags */}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {/* Open-modal CTA */}
      <span className={styles.viewBtn}>View full project →</span>
    </article>
  );
}
