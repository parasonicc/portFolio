import { personalInfo } from '../data/projects';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>PY</span>
            <div>
              <p className={styles.brandName}>{personalInfo.name}</p>
              <p className={styles.brandSub}>{personalInfo.subtitle}</p>
            </div>
          </div>

          <div className={styles.links}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
              LinkedIn ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.link}>
              Email ↗
            </a>
            <a href={`tel:${personalInfo.phone}`} className={styles.link}>
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} {personalInfo.name}</p>
          <p className={styles.copy}>{personalInfo.location}</p>
        </div>
      </div>
    </footer>
  );
}
