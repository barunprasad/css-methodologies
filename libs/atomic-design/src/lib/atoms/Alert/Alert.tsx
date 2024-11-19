import { ComponentVariants } from '@css-methodologies/shared';
import styles from './alert.module.css';

type AlertProps = {
  variant?: ComponentVariants;
  children: React.ReactNode;
};

export const Alert = ({ variant = 'error', children }: AlertProps) => (
  <div className={`${styles.alert} ${styles[`alert-${variant}`]}`}>
    {children}
  </div>
);
