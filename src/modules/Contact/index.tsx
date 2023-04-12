import { Card } from "@/components/Cards/Contact";
import styles from "./styles.module.css";

export const Contact = (): JSX.Element => (
  <section className={styles.container}>
    <Card
      title="Entre em contato comigo!"
      paragraph="Se você está cansado na procura do seu imóvel dos sonhos, deixe-me te ajudar!"
      firstButton="Ver mais projetos"
      secondButton="Contato"
    />
  </section>
);
