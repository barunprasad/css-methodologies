export const JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Props = {
  variant?: 'primary' | 'success' | 'info' | 'warning' | 'error';
  onClick?: () => void;
};

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: PropsWithChildren<Props>) => (
  <button 
    className={\`\${styles.button} \${styles[\`button--\${variant}\`]}\`}
    onClick={onClick}
  >
    {children}
  </button>
);
`;
export const CSS_Src = `
/* Button structure styles */
.button {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

/* Button skin styles */
.button-primary {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.button-secondary {
  background-color: var(--color-secondary);
  color: white;
  border-color: var(--color-secondary);
}

.button-success {
  background-color: var(--color-success);
  color: white;
  border-color: var(--color-success);
}

.button-info {
  background-color: var(--color-info);
  color: white;
  border-color: var(--color-info);
}

.button-warning {
  background-color: var(--color-warning);
  color: white;
  border-color: var(--color-warning);
}

.button-error {
  background-color: var(--color-error);
  color: white;
  border-color: var(--color-error);
}
`;
