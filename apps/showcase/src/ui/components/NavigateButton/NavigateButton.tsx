import Link from 'next/link';
import styles from './NavigateButton.module.css';
import { ArrowRightIcon } from '@arctic-kit/icons';

export function NavigateButton({
  href,
  label,
  variant = 'contained',
}: {
  href: string;
  label: string;
  variant?: 'contained' | 'text';
}) {
  return (
    <Link
      href={`${href}`}
      className={`${styles.navigateTo} ${styles[`navigateTo--${variant}`]}`}
    >
      <span>{label}</span>
      <ArrowRightIcon />
    </Link>
  );
}
