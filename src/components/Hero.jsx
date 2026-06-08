import { personalInfo, stats } from '../data/projects';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden />

      <div className={styles.container}>
        <div className={styles.content}>

          {/* Eyebrow */}
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            {personalInfo.subtitle}
          </p>

          {/* Name */}
          <h1 className={styles.name}>
            {personalInfo.name.split(' ')[0]}{' '}
            <em className={styles.nameItalic}>{personalInfo.name.split(' ')[1]}</em>
          </h1>

          {/* Title line */}
          <div className={styles.titleLine}>
            <span className={styles.titleDash} aria-hidden>—</span>
            <span className={styles.titleText}>{personalInfo.title}</span>
          </div>

          {/* Bio */}
          <p className={styles.bio}>{personalInfo.bio}</p>

          {/* Tags */}
          <div className={styles.tags}>
            {['Machine Learning', 'NLP & Text Analytics', 'Customer Analytics', 'Python · SQL · Tableau', personalInfo.location].map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              LinkedIn Profile ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.btnOutline}>
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className={styles.avatarWrap}>
      <div className={styles.avatarRing} aria-hidden />
      <img
       src="/paras.jpg"
       alt="Paras Yadav"
       className={styles.avatar}
           />
      </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        {stats.map(({ value, label }, i) => (
          <div key={label} className={styles.stat} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
