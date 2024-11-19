import { Spinner } from '../Spinner';
import styles from './ComponentUsage.module.scss';

export function Loading() {
  return (
    <div className={styles.container}>
      <div className={`${styles.codeContainer} ${styles.loading}`}>
        <Spinner />
      </div>
      <div className={`${styles.propsContainer} ${styles.loading}`}>
        <Spinner />
      </div>
    </div>
  );
}
