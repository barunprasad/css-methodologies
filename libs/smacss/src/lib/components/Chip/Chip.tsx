import { ComponentVariants } from '@css-methodologies/shared';
import styles from 'libs/smacss/src/lib/modules/chip.module.css';

type ChipProps = {
  variant?: ComponentVariants;
};

export const Chip = ({
  variant = 'primary',
  children,
}: React.PropsWithChildren<ChipProps>) => (
  <span className={`${styles.chip} ${styles[variant]}`}>{children}</span>
);
