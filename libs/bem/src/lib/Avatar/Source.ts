export const JSX_Src = `
import styles from './Avatar.module.css';
export type AvatarProps = {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
};
export const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => (
  <img
    className={\`\${styles.avatar} \${styles[\`avatar--\${size}\`]}\`}
    src={src}
    alt={alt}
  />
);

`;
export const CSS_Src = `
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
}

.avatar--small {
  width: 32px;
  height: 32px;
}

.avatar--medium {
  width: 40px;
  height: 40px;
}

.avatar--large {
  width: 48px;
  height: 48px;
}

`;
