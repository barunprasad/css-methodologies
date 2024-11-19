import { PropsWithChildren } from 'react';
import styles from './Chip.module.css';
import { ComponentVariants } from '@css-methodologies/shared';

type Props = {
  variant?: ComponentVariants;
};

export const Chip = ({
  children,
  variant = 'primary',
}: PropsWithChildren<Props>) => (
  <span className={`${styles.chip} ${styles[`chip-${variant}`]}`}>
    {children}
  </span>
);
