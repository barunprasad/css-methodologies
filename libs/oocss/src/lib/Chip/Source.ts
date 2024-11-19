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
  <span className={\`\${styles.chip} \${styles[\`chip-\${variant}\`]}\`}>
    {children}
  </span>
);


`;
export const CSS_Src = `
/* Chip structure styles */
.chip {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

/* Chip skin styles */
.chip-primary {
  background-color: var(--color-bg-light-primary);
  color: var(--color-primary);
}

.chip-secondary {
  background-color: var(--color-bg-light-secondary);
  color: var(--color-secondary);
}

.chip-success {
  background-color: var(--color-bg-light-success);
  color: var(--color-success);
}

.chip-info {
  background-color: var(--color-bg-light-info);
  color: var(--color-info);
}

.chip-warning {
  background-color: var(--color-bg-light-warning);
  color: var(--color-warning);
}

.chip-error {
  background-color: var(--color-bg-light-error);
  color: var(--color-error);
}

`;
