import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { HeaderLinks } from './HeaderLinks';
import { GithubIcon } from '@arctic-kit/icons';
export function Header() {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.menu}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo-c.png"
                width={48}
                height={48}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className={styles.tabs}>
            <HeaderLinks />
          </div>
          <div className={styles.controls}>
            <Link
              href={'https://github.com/barunprasad/css-methodologies'}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
