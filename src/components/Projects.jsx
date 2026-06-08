import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, filterOptions } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation();

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container} ref={ref}>
        {/* Section header */}
        <div className={`${styles.header} ${isVisible ? 'fade-up' : ''}`}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Work
          </p>
          <h2 className={styles.title}>Projects</h2>
        </div>

        {/* Filter tabs */}
        <div className={`${styles.filters} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          {filterOptions.map(({ value, label }) => (
            <button
              key={value}
              className={`${styles.filter} ${activeFilter === value ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(value)}
            >
              {label}
              {value !== 'all' && (
                <span className={styles.filterCount}>
                  {projects.filter((p) => p.category === value).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.07}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
