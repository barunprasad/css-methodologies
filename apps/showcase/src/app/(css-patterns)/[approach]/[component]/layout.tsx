import { SidebarComponents } from 'apps/showcase/src/ui/components/Sidebar/SidebarComponents';
import { SidebarLoading } from 'apps/showcase/src/ui/components/Sidebar/SidebarLoading';
import { Suspense } from 'react';
import styles from './layout.module.css';

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<SidebarLoading />}>
        <SidebarComponents />
      </Suspense>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
