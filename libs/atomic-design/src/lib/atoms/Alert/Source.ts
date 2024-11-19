export const JSX_Src = `
import { ComponentVariants } from '@css-methodologies/shared';
import styles from './alert.module.css';

type AlertProps = {
  variant?: ComponentVariants;
  children: React.ReactNode;
};

export const Alert = ({ variant = 'error', children }: AlertProps) => (
  <div className={\`\${styles.alert} \${styles[\`alert-\${variant}\`]}]=\`}>
    {children}
  </div>
);


`;
export const CSS_Src = `
/* Atomic Design - Alert styles */

.alert {
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: bold;
}

.alert-primary {
  background-color: var(--color-bg-light-primary);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.alert-success {
  background-color: var(--color-bg-light-success);
  color: var(--color-success);
  border-color: var(--color-success);
}

.alert-info {
  background-color: var(--color-bg-light-info);
  color: var(--color-info);
  border-color: var(--color-info);
}

.alert-warning {
  background-color: var(--color-bg-light-warning);
  color: var(--color-warning);
  border-color: var(--color-warning);
}

.alert-error {
  background-color: var(--color-bg-light-error);
  color: var(--color-error);
  border-color: var(--color-error);
}
`;
