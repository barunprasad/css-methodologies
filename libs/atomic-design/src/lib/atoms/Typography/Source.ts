export const JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from './typography.module.css';

type Props = {
  variant?: 'heading' | 'subheading' | 'body';
};

export const Typography = ({
  variant = 'body',
  children,
}: PropsWithChildren<Props>) => (
  <p className={\`\${styles.typography} \${styles[\`typography-\${variant}\`]}\`}>
    {children}
  </p>
);

`;
export const CSS_Src = `
/* Typography structure styles */
.typography {
  margin-bottom: 1rem;
}

/* Typography skin styles */
.typography-heading {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-dark);
}

.typography-subheading {
  font-size: 18px;
  font-weight: semi-bold;
  color: var(--color-secondary);
}

.typography-body {
  font-size: 14px;
  font-weight: normal;
  color: var(--color-dark);
}

`;
