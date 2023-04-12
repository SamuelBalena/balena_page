import styles from "./styles.module.css";
import { Props } from "./interface";

export const Input = ({ type, placeholder }: Props): JSX.Element => (
  <input
    className={styles.input}
    type={`${type}`}
    placeholder={`${placeholder}`}
  />
);
