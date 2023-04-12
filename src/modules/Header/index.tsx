import { Button } from "@/components/Buttons/Default";
import { Paragraph } from "@/components/Text/Paragraph";
import { Title } from "@/components/Text/Title";
import Image from "next/image";
import styles from "./styles.module.css";
import header from "../../../public/header.jpeg";

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <span className={styles.span}>
      <Title>
        Nós somos especializados em consultoria de imóveis na zona Sul
      </Title>
      <Paragraph color="GRAY">
        Consultoria imobiliária atuando em Avaliação de imóveis, negociações de
        vendas com construtora e terceiros. Regularização de imóveis no âmbito
        Judicial e extra Judicial.
      </Paragraph>
      <div className={styles.buttons}>
        <Button value="DEFAULT" href="#">
          Sobre
        </Button>
        <Button value="CONTACT" href="#">
          Contato
        </Button>
      </div>
    </span>
    <div>
      <Image
        className={styles.image}
        src={header}
        alt=""
        width={450}
        height={450}
      />
    </div>
  </header>
);
