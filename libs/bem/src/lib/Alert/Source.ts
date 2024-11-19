export const Alert_JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from './Alert.module.css';

type Props = {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error';
};

export const Alert = ({
  type = 'error',
  children,
}: PropsWithChildren<Props>) => (
  <div className={\`\${styles.alert} \${styles[\`alert--\${type}\`]}\`}>
    {children}
  </div>
);

`;
export const Alert_CSS_Src = `
.alert {
  padding: 16px;
  background-color: var(--color-bg-light-error);
  color: var(--color-error);
  border-radius: 4px;
}

.alert--success {
  background-color: var(--color-bg-light-success);
  color: var(--color-success);
}
`;
