import { Props } from "./interface";
import styles from "./styles.module.css";

export const Subtitle = ({ children }: Props): JSX.Element => (
  <h2 className={styles.subtitle}>{children}</h2>
);
