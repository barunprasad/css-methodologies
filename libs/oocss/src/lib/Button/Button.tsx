import { PropsWithChildren } from 'react';
import styles from './Button.module.css';
import { ComponentVariants } from '@css-methodologies/shared';

type Props = {
  variant?: ComponentVariants;
  onClick?: () => void;
};

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: PropsWithChildren<Props>) => (
  <button
    className={`${styles.button} ${styles[`button-${variant}`]}`}
    onClick={onClick}
  >
    {children}
  </button>
);
