import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Props = {
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  variant = 'primary',
  children,
}: PropsWithChildren<Props>) => (
  <button className={`${styles.button} ${styles[`button--${variant}`]}`}>
    {children}
  </button>
);
