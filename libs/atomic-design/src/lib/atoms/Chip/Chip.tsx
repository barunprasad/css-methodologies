import { ComponentVariants } from '@css-methodologies/shared';
import styles from './chip.module.css';

type ChipProps = {
  variant?: ComponentVariants;
};

export const Chip = ({
  variant = 'primary',
  children,
}: React.PropsWithChildren<ChipProps>) => (
  <span className={`${styles.chip} ${styles[variant]}`}>{children}</span>
);
