'use client';
import Link from 'next/link';
import styles from './Header.module.css';

import { ApproachNames } from 'apps/showcase/src/types';
import { useParams } from 'next/navigation';

export function HeaderLinks() {
  const { approach } = useParams();
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        {Object.keys(ApproachNames).map((key) => (
          <li
            className={`${styles.headerListItem} ${
              (approach as string)?.toLocaleLowerCase() === key
                ? styles.active
                : ''
            } `}
            key={key}
          >
            <Link href={`/${key}`}>{key}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
