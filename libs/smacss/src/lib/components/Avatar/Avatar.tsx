import { ComponentVariants } from '@css-methodologies/shared';
import styles from 'libs/smacss/src/lib/modules/avatar.module.css';

type AvatarProps = {
  variant?: ComponentVariants;
  src?: string;
  alt?: string;
};

export const Avatar = ({ variant = 'primary', src, alt }: AvatarProps) => (
  <div className={`${styles.avatar} ${styles[variant]}`}>
    {src ? (
      <img src={src} alt={alt} className={styles.avatar} />
    ) : (
      alt?.[0] || 'A'
    )}
  </div>
);
