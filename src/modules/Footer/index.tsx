import styles from "./styles.module.css";
import { Paragraph } from "@/components/Text/Paragraph";
import { Subtitle } from "@/components/Text/Subtitle";
import Link from "next/link";

export const Footer = (): JSX.Element => (
  <footer className={styles.container}>
    <main className={styles.main}>
      <header className={styles.header}>
        <Paragraph color="WHITE">
          Consultoria imobiliária atuando em Avaliação de imóveis, negociações
          de vendas com construtora e terceiros.
        </Paragraph>
      </header>
      <span className={styles.span}>
        <ul>
          <li>
            <Subtitle>Redes Sociais</Subtitle>
          </li>
          <li>
            <Link href={"#"}>Whatsapp</Link>
          </li>
          <li>
            <Link href={"#"}>Linkedin</Link>
          </li>
          <li>
            <Link href={"#"}>Facebook</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Subtitle>Contatos</Subtitle>
          </li>
          <li>
            <Paragraph color="WHITE">imoveisbalena@gmail.com</Paragraph>
          </li>
          <li>
            <Paragraph color="WHITE">(11) 99999-9999</Paragraph>
          </li>
        </ul>
      </span>
    </main>
  </footer>
);
