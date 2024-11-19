export const JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Props = {
  variant?: 'primary' | 'success' | 'info' | 'warning' | 'error';
};

export const Button = ({
  variant = 'primary',
  children,
}: PropsWithChildren<Props>) => (
  <button className={\`\${styles.button} \${styles[\`button--\${variant}\`]}\`}>
    {children}
  </button>
);
`;
export const CSS_Src = `
.button {
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 8px 16px;
}

.button--primary {
  background-color: var(--color-primary);
}

.button--secondary {
  background-color: var(--color-secondary);
}

.button--info {
  background-color: var(--color-info);
}

.button--warning {
  background-color: var(--color-warning);
}

.button--error {
  background-color: var(--color-error);
}
`;
