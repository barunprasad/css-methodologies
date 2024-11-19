export const JSX_Src = `
import { ComponentVariants } from '@css-methodologies/shared';
import styles from 'libs/smacss/src/lib/modules/avatar.module.css';

type AvatarProps = {
  variant?: ComponentVariants;
  src?: string;
  alt?: string;
};

export const Avatar = ({ variant = 'primary', src, alt }: AvatarProps) => (
  <div className={\`\${styles.avatar} \${styles[variant]}\`}>
    {src ? (
      <img src={src} alt={alt} className={styles.avatar} />
    ) : (
      alt?.[0] || 'A'
    )}
  </div>
);

`;
export const CSS_Src = `
/* libs/smacss/src/lib/modules/avatar.module.css */

/* Module styles for Avatar */
.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  line-height: 40px;
}

.primary {
  background-color: var(--color-bg-light-primary);
  color: var(--color-primary);
}

.secondary {
  background-color: var(--color-bg-light-secondary);
  color: var(--color-secondary);
}

.success {
  background-color: var(--color-bg-light-success);
  color: var(--color-success);
}

.info {
  background-color: var(--color-bg-light-info);
  color: var(--color-info);
}

.warning {
  background-color: var(--color-bg-light-warning);
  color: var(--color-warning);
}

.error {
  background-color: var(--color-bg-light-error);
  color: var(--color-error);
}

`;
