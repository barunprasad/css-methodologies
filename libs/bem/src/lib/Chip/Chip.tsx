import { PropsWithChildren } from 'react';
import styles from './Chip.module.css';

type Props = {
  variant?: 'primary' | 'secondary';
};

export const Chip = ({
  children,
  variant = 'primary',
}: PropsWithChildren<Props>) => (
  <span className={`${styles.chip} ${styles[`chip--${variant}`]}`}>
    {children}
  </span>
);
