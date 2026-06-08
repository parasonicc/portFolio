import styles from './CategoryBadge.module.css';

export default function CategoryBadge({ category, label }) {
  return (
    <span className={`${styles.badge} ${styles[category]}`}>
      {label}
    </span>
  );
}
