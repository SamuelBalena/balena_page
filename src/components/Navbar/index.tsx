import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import logo from "../../../public/logo.jpeg";

export const Navbar = (): JSX.Element => (
  <nav className={styles.container}>
    <Image src={logo} alt="Logo" height={100} width={100} />

    <ul className={styles.list}>
      <li>
        <Link className={styles.link} href={"#"}>
          Lorem
        </Link>
      </li>
      <li>
        <Link className={styles.link} href={"#"}>
          Lorem
        </Link>
      </li>
      <li>
        <Link className={styles.link} href={"#"}>
          Lorem
        </Link>
      </li>
    </ul>
  </nav>
);
