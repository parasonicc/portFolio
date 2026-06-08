import { useState } from 'react';
import CategoryBadge from './CategoryBadge';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, delay = 0 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      style={{ animationDelay: `${delay}s` }}
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

      {/* Expandable highlights */}
      <button
        className={styles.toggleBtn}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? 'Hide details ↑' : 'Show details ↓'}
      </button>

      {expanded && (
        <ul className={styles.highlights}>
          {project.highlights.map((h, i) => (
            <li key={i} className={styles.highlight}>{h}</li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
