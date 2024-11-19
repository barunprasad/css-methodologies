'use client';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { useParams } from 'next/navigation';
export function Sidebar({
  items,
  urlPrefix,
}: {
  items: string[];
  urlPrefix: string;
}) {
  const { component } = useParams();
  return (
    <div className={styles.sidebarContainer}>
      {items.map((item) => (
        <Link
          key={item}
          href={`/${urlPrefix}/${item}`}
          className={`${styles.sidebarItem} ${
            component === item ? styles.active : ''
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
