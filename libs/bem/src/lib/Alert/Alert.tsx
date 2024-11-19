import { PropsWithChildren } from 'react';
import styles from './Alert.module.css';
import { ComponentVariants } from '@css-methodologies/shared';

type Props = {
  type?: ComponentVariants;
};

export const Alert = ({
  type = 'error',
  children,
}: PropsWithChildren<Props>) => (
  <div className={`${styles.alert} ${styles[`alert--${type}`]}`}>
    {children}
  </div>
);
