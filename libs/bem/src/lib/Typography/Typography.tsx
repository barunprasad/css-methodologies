import { PropsWithChildren } from 'react';
import styles from './Typography.module.css';

type Props = {
  variant?: 'body' | 'heading';
};

export const Typography = ({
  variant = 'body',
  children,
}: PropsWithChildren<Props>) => (
  <p className={`${styles.typography} ${styles[`typography--${variant}`]}`}>
    {children}
  </p>
);
