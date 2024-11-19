import { ComponentSizes } from '@css-methodologies/shared';
import styles from './Avatar.module.css';
export type AvatarProps = {
  src: string;
  alt: string;
  size?: ComponentSizes;
};
export const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => (
  <img
    className={`${styles.avatar} ${styles[`avatar--${size}`]}`}
    src={src}
    alt={alt}
  />
);
