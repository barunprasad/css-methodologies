export const JSX_Src = `
import { PropsWithChildren } from 'react';
import styles from './Chip.module.css';

type Props = {
  variant?: 'primary' | 'success' | 'info' | 'warning' | 'error';
};

export const Chip = ({
  children,
  variant = 'primary',
}: PropsWithChildren<Props>) => (
  <span className={\`\${styles.chip} \${styles[\`chip--\${variant}\`]}\`}>
    {children}
  </span>
);


`;
export const CSS_Src = `
.chip {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #e0e0e0;
  border-radius: 999px;
  color: var(--color-dark);
  font-size: 0.875rem;
}

.chip--primary,
.chip--secondary {
  color: #fff;
}

.chip--primary {
  background-color: var(--color-primary);
}

.chip--secondary {
  background-color: var(--color-secondary);
}
`;
