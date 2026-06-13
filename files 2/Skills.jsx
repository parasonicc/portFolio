import { skills } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Skills.module.css';

/* Official site / docs for each skill — opens in a new tab */
const skillLinks = {
  'Python': 'https://www.python.org/',
  'SQL': 'https://www.w3schools.com/sql/',
  'Tableau': 'https://www.tableau.com/',
  'Scikit-learn': 'https://scikit-learn.org/stable/',
  'NLP / VADER / BERT': 'https://github.com/cjhutto/vaderSentiment',
  'Random Forest': 'https://scikit-learn.org/stable/modules/ensemble.html#random-forests-and-other-randomized-tree-ensembles',
  'K-Means / PCA': 'https://scikit-learn.org/stable/modules/clustering.html#k-means',
  'Pandas / NumPy': 'https://pandas.pydata.org/docs/',
  'Matplotlib / Seaborn': 'https://matplotlib.org/stable/',
  'Spark SQL': 'https://spark.apache.org/sql/',
  'API Integration': 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
  'Excel': 'https://www.microsoft.com/en-us/microsoft-365/excel',
};

const education = [
  {
    degree: 'MSc Business Analytics',
    institution: 'University of Nottingham, UK',
    period: 'Sep 2025 – Sep 2026',
    detail: 'Foundational Business Analytics · Data at Scale · Analytics Specialisations · Machine Learning & Predictive Analytics · Leading Big Data Business Projects · Supply Chain Planning · Advanced Operations Analysis',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Maharaja Surajmal Institute, India',
    period: 'Aug 2022 – Aug 2025',
    detail: 'CGPA: 8.27 (First class equivalent) · Python · Data Structures · SQL · HTML/CSS · JavaScript',
  },
];

const certifications = [
  {
    name: 'Data Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Mar 2025',
    url: 'https://www.credly.com/badges/87cfbfca-87f0-4d75-8848-a746acec6015/linked_in_profile',
  },
  {
    name: 'Getting Started with Data',
    issuer: 'IBM SkillsBuild',
    date: 'Mar 2025',
    url: 'https://www.credly.com/badges/a082ee46-0be0-4dd0-8bf0-ed40a59bb56c/linked_in_profile',
  },
  {
    name: 'Business Analysis & Process Management',
    issuer: 'Coursera',
    date: 'Feb 2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/UFU2Z5ZSZBP7?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.header} ${isVisible ? 'fade-up' : ''}`}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Technical
          </p>
          <h2 className={styles.title}>Skills & Background</h2>
        </div>

        <div className={styles.grid}>
          {/* Skills — each tile opens the official site/docs */}
          <div className={`${styles.block} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h3 className={styles.blockTitle}>Technical skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map(({ name, icon }) => (
                <a
                  key={name}
                  href={skillLinks[name] || `https://www.google.com/search?q=${encodeURIComponent(name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.skillCard} ${styles.skillLink}`}
                  aria-label={`${name} — official site (opens in new tab)`}
                >
                  <span className={styles.skillIcon} aria-hidden>{icon}</span>
                  <span className={styles.skillName}>{name}</span>
                  <span className={styles.skillGo} aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            {/* Education */}
            <div className={`${styles.block} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.15s' }}>
              <h3 className={styles.blockTitle}>Education</h3>
              <div className={styles.timeline}>
                {education.map(({ degree, institution, period, detail }) => (
                  <div key={degree} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <p className={styles.degreeTitle}>{degree}</p>
                      <p className={styles.degreeInst}>{institution}</p>
                      <p className={styles.degreePeriod}>{period}</p>
                      <p className={styles.degreeDetail}>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications — each row links to its verification page */}
            <div className={`${styles.block} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3 className={styles.blockTitle}>Certifications</h3>
              <div className={styles.certs}>
                {certifications.map(({ name, issuer, date, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.cert} ${styles.certLink}`}
                    aria-label={`${name} — verify certificate (opens in new tab)`}
                  >
                    <div className={styles.certLeft}>
                      <span className={styles.certName}>{name}</span>
                      <span className={styles.certIssuer}>{issuer}</span>
                    </div>
                    <span className={styles.certRight}>
                      <span className={styles.certDate}>{date}</span>
                      <span className={styles.certVerify}>Verify ↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
