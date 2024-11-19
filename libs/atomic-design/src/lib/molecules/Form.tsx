import { ComponentVariants } from '@css-methodologies/shared';
import { Button } from '../atoms/Button/Button';
import styles from './form.module.css';

type FormProps = {
  buttonVariant?: ComponentVariants;
  submitLabel?: string;
};

export const Form = ({ buttonVariant, submitLabel = 'Submit' }: FormProps) => (
  <form className={styles.form}>
    <input type="text" placeholder="Enter text" />
    <Button variant={buttonVariant}>{submitLabel}</Button>
  </form>
);
