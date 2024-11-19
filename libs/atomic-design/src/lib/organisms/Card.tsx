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
