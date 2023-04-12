import Link from "next/link";
import { Props } from "./interface";
import styles from "./styles.module.css";

export const Button = ({ children, href, value }: Props): JSX.Element => {
  return (
    <>
      {value === "DEFAULT" ? (
        <button className={styles.default}>
          <Link className={styles.link_default} href={href}>
            {children}
          </Link>
        </button>
      ) : null}
      {value === "CONTACT" ? (
        <button className={styles.contact}>
          <Link className={styles.link_contact} href={href}>
            {children}
          </Link>
        </button>
      ) : null}
    </>
  );
};
