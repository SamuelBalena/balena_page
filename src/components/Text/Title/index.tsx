import { Props } from "./interface";
import styles from "./styles.module.css";

export const Title = ({ children }: Props): JSX.Element => (
  <h1 className={styles.title}>{children}</h1>
);
