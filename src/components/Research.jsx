import { publication } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Research.module.css';

export default function Research() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="research" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.header} ${isVisible ? 'fade-up' : ''}`}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Publication
          </p>
          <h2 className={styles.title}>Research</h2>
        </div>

        <div className={`${styles.card} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.15s' }}>
          <div className={styles.iconCol}>
            <div className={styles.icon}>📄</div>
            <div className={styles.iconLine} />
          </div>

          <div className={styles.body}>
            <div className={styles.topRow}>
              <h3 className={styles.pubTitle}>{publication.title}</h3>
              <span className={styles.badge}>Conference paper</span>
            </div>

            <p className={styles.conference}>
              {publication.conference}
            </p>
            <p className={styles.institution}>
              {publication.institution} · {publication.date}
            </p>

            <p className={styles.desc}>{publication.description}</p>

            <div className={styles.tags}>
              {publication.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div className={styles.pubStats}>
              <div className={styles.pubStat}>
                <strong>600+</strong>
                <span>Survey respondents</span>
              </div>
              <div className={styles.pubStat}>
                <strong>95%</strong>
                <span>Response rate</span>
              </div>
              <div className={styles.pubStat}>
                <strong>+20%</strong>
                <span>Data accuracy improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
