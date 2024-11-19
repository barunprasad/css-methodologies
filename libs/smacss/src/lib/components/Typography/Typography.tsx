import styles from 'libs/smacss/src/lib/modules/typography.module.css';

type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'body';
};

export const Typography = ({
  variant = 'body',
  children,
}: React.PropsWithChildren<TypographyProps>) => (
  <p className={`${styles.typography} ${styles[variant]}`}>{children}</p>
);
