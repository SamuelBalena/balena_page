import styles from "./styles.module.css";
import { Props } from "./interface";

export const Button = ({ value }: Props): JSX.Element => (
  <input className={styles.input} type="button" value={`${value}`} />
);
