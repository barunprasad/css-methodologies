export const JSX_Src = `
import { ComponentVariants } from '@css-methodologies/shared';
import styles from './button.module.css';

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
/* Button styles */
.button {
  display: inline-block;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.primary {
  background-color: var(--color-primary);
  color: white;
}

.secondary {
  background-color: var(--color-secondary);
  color: white;
}

.success {
  background-color: var(--color-success);
  color: white;
}

.info {
  background-color: var(--color-info);
  color: white;
}

.warning {
  background-color: var(--color-warning);
  color: white;
}

.error {
  background-color: var(--color-error);
  color: white;
}


`;
