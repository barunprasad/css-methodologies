import { ComponentVariants } from '@css-methodologies/shared';
import styles from 'libs/smacss/src/lib/modules/button.module.css';

type ButtonProps = {
  variant?: ComponentVariants;
  onClick?: () => void;
};

export const Button = ({
  variant = 'primary',
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => (
  <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
    {children}
  </button>
);
