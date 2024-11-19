import { explaination } from 'apps/showcase/src/data/explaination';
import { ApproachExplaination } from './ApproachExplaination';
import styles from './page.module.css';
import { LivePreviewButton } from './LivePreviewButton';
export default function Page() {
  return (
    <div className={`${styles.container} markdown`}>
      <ApproachExplaination data={explaination} />
      <LivePreviewButton />
    </div>
  );
}
