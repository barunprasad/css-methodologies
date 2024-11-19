export const JSX_Src = `
import { ComponentVariants } from '@css-methodologies/shared';
import styles from 'libs/smacss/src/lib/modules/button.module.css';

type ButtonProps = {
  variant?: ComponentVariants;
  onClick?: () => void;
};

export const Button = ({
  variant = 'primary',
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => (
  <button className={\`\${styles.button} \${styles[variant]}\`} onClick={onClick}>
    {children}
  </button>
);


`;
export const CSS_Src = `
/* libs/smacss/src/lib/modules/button.module.css */

/* Module styles for Button */
.button {
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
}

.primary {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.secondary {
  background-color: var(--color-secondary);
  color: white;
  border-color: var(--color-secondary);
}

.success {
  background-color: var(--color-success);
  color: white;
  border-color: var(--color-success);
}

.info {
  background-color: var(--color-info);
  color: white;
  border-color: var(--color-info);
}

.warning {
  background-color: var(--color-warning);
  color: white;
  border-color: var(--color-warning);
}

.error {
  background-color: var(--color-error);
  color: white;
  border-color: var(--color-error);
}


`;
