import { PropsWithChildren } from 'react';
import styles from './typography.module.css';

type Props = {
  variant?: 'heading' | 'subheading' | 'body';
};

export const Typography = ({
  variant = 'body',
  children,
}: PropsWithChildren<Props>) => (
  <p className={`${styles.typography} ${styles[`typography-${variant}`]}`}>
    {children}
  </p>
);
