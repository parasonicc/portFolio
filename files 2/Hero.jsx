import { useEffect, useRef, useState } from 'react';
import { personalInfo, projects } from '../data/projects';
import styles from './Hero.module.css';

/* Animated count-up number — respects prefers-reduced-motion */
function CountUp({ end, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(end);
      return;
    }
    let raf;
    let started = false;

    const run = () => {
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        setValue(Math.round(end * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Hero() {
  /* Impact highlights — each card scrolls to the section that proves it */
  const highlights = [
    {
      end: projects.length,
      suffix: '',
      label: 'Analytics projects',
      detail: 'ML · NLP · segmentation · big data',
      href: '#projects',
    },
    {
      end: 83,
      suffix: '%',
      label: 'At-risk customers caught',
      detail: 'Churn model · 88.1% AUC',
      href: '#projects',
    },
    {
      end: 26,
      suffix: 'K+',
      label: 'Records analysed',
      detail: 'Across real business datasets',
      href: '#projects',
    },
    {
      end: 507,
      suffix: '',
      label: 'Survey responses',
      detail: 'Peer-reviewed publication',
      href: '#research',
    },
  ];

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

          {/* Name — single colour, no italic accent */}
          <h1 className={styles.name}>{personalInfo.name}</h1>

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
            src="/paras.JPG"
            alt="Paras Yadav"
            className={styles.avatar}
          />
        </div>
      </div>

      {/* Impact highlights — animated, clickable proof points */}
      <div className={styles.hlRow}>
        {highlights.map(({ end, suffix, label, detail, href }, i) => (
          <a
            key={label}
            href={href}
            className={styles.hlCard}
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            aria-label={`${end}${suffix} ${label} — view details`}
          >
            <span className={styles.hlValue}>
              <CountUp end={end} suffix={suffix} />
            </span>
            <span className={styles.hlLabel}>{label}</span>
            <span className={styles.hlDetail}>{detail}</span>
            <span className={styles.hlArrow} aria-hidden>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
