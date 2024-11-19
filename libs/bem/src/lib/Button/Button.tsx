import { PropsWithChildren } from 'react';
import styles from './Button.module.css';
import { ComponentVariants } from '@css-methodologies/shared';

type Props = {
  variant?: ComponentVariants;
};

export const Button = ({
  variant = 'primary',
  children,
}: PropsWithChildren<Props>) => (
  <button className={`${styles.button} ${styles[`button--${variant}`]}`}>
    {children}
  </button>
);
