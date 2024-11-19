export const JSX_Src = `
import styles from 'libs/smacss/src/lib/modules/typography.module.css';

type TypographyProps = {
  variant?: 'heading' | 'subheading' | 'body';
};

export const Typography = ({
  variant = 'body',
  children,
}: React.PropsWithChildren<TypographyProps>) => (
  <p className={\`\${styles.typography} \${styles[variant]}\`}>{children}</p>
);
`;
export const CSS_Src = `
/* libs/smacss/src/lib/modules/typography.module.css */

/* Module styles for Typography */
.typography {
  margin-bottom: 1rem;
}

.heading {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-dark);
}

.subheading {
  font-size: 18px;
  font-weight: semi-bold;
  color: var(--color-secondary);
}

.body {
  font-size: 14px;
  color: var(--color-dark);
}


`;
