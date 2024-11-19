export const JSX_Src = `
import { Button } from '../atoms/Button/Button';
import styles from './form.module.css';

export const Form = () => (
  <form className={styles.form}>
    <input type="text" placeholder="Enter text" />
    <Button>Submit</Button>
  </form>
);

`;
export const CSS_Src = `
/* Form styles */
.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

`;
