import styles from "./styles.module.css";
import { Props } from "./interface";

export const TextArea = ({ placeholder }: Props): JSX.Element => (
  <textarea
    className={styles.textarea}
    placeholder={`${placeholder}`}
  ></textarea>
);
