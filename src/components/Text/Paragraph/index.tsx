import React from "react";
import { Props } from "./interface";
import styles from "./styles.module.css";

export const Paragraph = ({ children, color }: Props): JSX.Element => (
  <>
    {color === "GRAY" ? <p className={styles.gray}>{children}</p> : null}
    {color === "WHITE" ? <p className={styles.paragraph}>{children}</p> : null}
  </>
);
