import { PropsWithChildren } from 'react';
import styles from './RootContent.module.css';
export function RootContent({ children }: PropsWithChildren) {
  return <main className={styles.container}>{children}</main>;
}
