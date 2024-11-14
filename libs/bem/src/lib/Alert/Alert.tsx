import { PropsWithChildren } from 'react';
import styles from './Alert.module.css';

type Props = {
  type?: 'error' | 'success';
};

export const Alert = ({
  type = 'error',
  children,
}: PropsWithChildren<Props>) => (
  <div className={`${styles.alert} ${styles[`alert--${type}`]}`}>
    {children}
  </div>
);
