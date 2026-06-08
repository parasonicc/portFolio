import { skills } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Skills.module.css';

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
  { name: 'Data Fundamentals', issuer: 'IBM SkillsBuild', date: 'Mar 2025' },
  { name: 'Getting Started with Data', issuer: 'IBM SkillsBuild', date: 'Mar 2025' },
  { name: 'Business Analysis & Process Management', issuer: 'Coursera', date: 'Feb 2024' },
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
          {/* Skills */}
          <div className={`${styles.block} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h3 className={styles.blockTitle}>Technical skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map(({ name, icon }) => (
                <div key={name} className={styles.skillCard}>
                  <span className={styles.skillIcon} aria-hidden>{icon}</span>
                  <span className={styles.skillName}>{name}</span>
                </div>
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

            {/* Certifications */}
            <div className={`${styles.block} ${isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3 className={styles.blockTitle}>Certifications</h3>
              <div className={styles.certs}>
                {certifications.map(({ name, issuer, date }) => (
                  <div key={name} className={styles.cert}>
                    <div className={styles.certLeft}>
                      <span className={styles.certName}>{name}</span>
                      <span className={styles.certIssuer}>{issuer}</span>
                    </div>
                    <span className={styles.certDate}>{date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
