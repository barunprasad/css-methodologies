export const JSX_Src = `
import { Avatar } from '../atoms/Avatar/Avatar';
import { Typography } from '../atoms/Typography/Typography';
import { Button } from '../atoms/Button/Button';
import styles from './card.module.css';

type CardProps = {
  avatarSrc?: string;
  avatarAlt?: string;
  title: string;
  description: string;
  actions?: { label: string; onClick: () => void }[];
};

export const Card = ({
  avatarSrc,
  avatarAlt,
  title,
  description,
  actions,
}: CardProps) => (
  <div className={styles.card}>
    {/* Card Header */}
    <div className={styles.cardHeader}>
      <Avatar src={avatarSrc} alt={avatarAlt} variant="primary" />
      <Typography variant="heading">{title}</Typography>
    </div>

    {/* Card Body */}
    <div className={styles.cardBody}>
      <Typography variant="body">{description}</Typography>
    </div>

    {/* Card Actions */}
    {actions && (
      <div className={styles.cardActions}>
        {actions.map((action, index) => (
          <Button key={index} variant="primary" onClick={action.onClick}>
            {action.label}
          </Button>
        ))}
      </div>
    )}
  </div>
);


`;
export const CSS_Src = `
/* Card styles */
.card {
  padding: 16px;
  border: 1px solid var(--color-bg-light-secondary);
  border-radius: 8px;
  background-color: var(--color-bg-light-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-body {
  font-size: 14px;
  color: var(--color-dark);
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}


`;
