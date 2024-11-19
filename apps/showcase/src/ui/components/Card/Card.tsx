import { NavigateButton } from '../NavigateButton';
import styles from './Card.module.css';
export function Card({
  title,
  href,
  hrefLabel,
  description,
}: {
  title: string;
  description?: string;
  href: string;
  hrefLabel: string;
}) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <NavigateButton href={href} label={hrefLabel} variant="text" />
    </div>
  );
}
