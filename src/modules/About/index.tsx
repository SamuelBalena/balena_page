import { Paragraph } from "@/components/Text/Paragraph";
import { Title } from "@/components/Text/Title";
import Image from "next/image";
import styles from "./styles.module.css";
import about from "../../../public/about.jpeg";

export const About = (): JSX.Element => (
  <section className={styles.container}>
    <Image src={about} alt="" width={350} height={500} />

    <span className={styles.span}>
      <Title>Sobre mim</Title>
      <Paragraph color="GRAY">
        Consultora e Avaliadora de imovéis há 10 anos, especializado na Região
        da Zona Sul (Jabaquara, Saúde, Vila Mariana).
      </Paragraph>
      <Paragraph color="GRAY">
        Priozirando o atendimento personalizado e assertivo, assim oferecendo o
        máximo de conforto e segurança na conquista do seu imovel.
      </Paragraph>
    </span>
  </section>
);
