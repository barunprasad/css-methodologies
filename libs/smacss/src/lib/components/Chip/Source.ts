export const JSX_Src = `
import { ComponentVariants } from '@css-methodologies/shared';
import styles from 'libs/smacss/src/lib/modules/chip.module.css';

type ChipProps = {
  variant?: ComponentVariants;
};

export const Chip = ({
  variant = 'primary',
  children,
}: React.PropsWithChildren<ChipProps>) => (
  <span className={\`\${styles.chip} \${styles[variant]}\`}>{children}</span>
);


`;
export const CSS_Src = `
/* libs/smacss/src/lib/modules/chip.module.css */
/* Module styles for Chip */
.chip {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 16px;
  text-transform: uppercase;
  font-weight: bold;
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
