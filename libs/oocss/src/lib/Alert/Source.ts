export const JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from './Alert.module.css';

type Props = {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error';
};

export const Alert = ({
  type = 'error',
  children,
}: PropsWithChildren<Props>) => (
  <div className={\`\${styles.alert} \${styles[\`alert-\${type}\`]}\`}>{children}</div>
);

`;
export const CSS_Src = `
.alert {
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 14px;
}

/* Alert skin styles */
.alert-primary {
  background-color: var(--color-bg-light-primary);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.alert-secondary {
  background-color: var(--color-bg-light-secondary);
  color: var(--color-secondary);
  border-color: var(--color-secondary);
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
