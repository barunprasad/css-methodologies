export const JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from 'libs/smacss/src/lib/modules/alert.module.css';
import { ComponentVariants } from '@css-methodologies/shared';

type Props = {
  type?: ComponentVariants;
};

export const Alert = ({
  type = 'error',
  children,
}: PropsWithChildren<Props>) => (
  <div className={\`\${styles.alert} \${styles[type]}\`}>{children}</div>
);

`;
export const CSS_Src = `
/* libs/smacss/src/lib/modules/alert.module.css */

.alert {
  padding: 12px 16px;
  background-color: var(--color-bg-light-error);
  color: var(--color-error);
  border-radius: 4px;
  border: 1px solid var(--color-error);
  font-size: 14px;
}

.primary {
  background-color: var(--color-bg-light-primary);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.secondary {
  background-color: var(--color-bg-light-secondary);
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.success {
  background-color: var(--color-bg-light-success);
  color: var(--color-success);
  border-color: var(--color-success);
}

.info {
  background-color: var(--color-bg-light-info);
  color: var(--color-info);
  border-color: var(--color-info);
}

.warning {
  background-color: var(--color-bg-light-warning);
  color: var(--color-warning);
  border-color: var(--color-warning);
}

.error {
  background-color: var(--color-bg-light-error);
  color: var(--color-error);
  border-color: var(--color-error);
}

`;
