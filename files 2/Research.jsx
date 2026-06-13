import { useState } from 'react';
import { publication } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Research.module.css';

/* Structured abstract — rendered as labelled sections inside the expander */
const abstract = [
  {
    heading: 'Introduction',
    text: "Social media refers to the online digital platforms that are used by the general public to communicate, share, and express their thoughts. Social media is a word that describes online websites and digital platforms that an individual uses to interact with other individuals to share, create, and express ideas, photos, messages, videos, and various other things over the Internet.",
  },
  {
    heading: 'Objective',
    text: "Through research studies, we have attempted to analyze the overall effect of social media on the country's younger generation. Many observations can be made about these impacts. We aim to study these effects and the perception of the youth towards social media and suggest some useful countermeasures to tackle this ever-growing problem.",
  },
  {
    heading: 'Methodology',
    text: 'To collect the required data, a Google Forms questionnaire was provided to 550 students of age groups 13-25, out of which 507 responses were collected. After the complete collection process, the data was analyzed, and meaningful insights were derived from it through proper graphical and diagrammatical representations.',
  },
  {
    heading: 'Results',
    text: 'This study will help gain a deeper understanding of the impact of social media on the younger generation in the context of various aspects like education, mental health, sleep schedule, etc. It also helps to understand the perception of the youth towards the social media platforms.',
  },
  {
    heading: 'Conclusion',
    text: "Concluding the paper, we can say that social media dependence is growing at an alarming pace, which needs to be countered at the earliest possible opportunity. It has many ill effects, which are hazardous for the younger generation. It is advisable to reduce the usage of social media to ensure an individual's well-being.",
  },
];

export default function Research() {
  const { ref, isVisible } = useScrollAnimation();
  const [showAbstract, setShowAbstract] = useState(false);

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

            {/* Abstract expander */}
            <button
              type="button"
              className={styles.absToggle}
              onClick={() => setShowAbstract((v) => !v)}
              aria-expanded={showAbstract}
              aria-controls="pub-abstract"
            >
              {showAbstract ? 'Hide abstract' : 'Read abstract'}
              <span className={`${styles.absChevron} ${showAbstract ? styles.absChevronOpen : ''}`} aria-hidden>
                ▾
              </span>
            </button>

            {showAbstract && (
              <div id="pub-abstract" className={styles.absBox}>
                {abstract.map(({ heading, text }) => (
                  <p key={heading} className={styles.absPara}>
                    <strong className={styles.absHeading}>{heading}:</strong> {text}
                  </p>
                ))}
              </div>
            )}

            <div className={styles.tags}>
              {publication.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div className={styles.pubStats}>
              <div className={styles.pubStat}>
                <strong>507</strong>
                <span>Survey responses</span>
              </div>
              <div className={styles.pubStat}>
                <strong>92%</strong>
                <span>Response rate</span>
              </div>
              <div className={styles.pubStat}>
                <strong>13–25</strong>
                <span>Age group studied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
