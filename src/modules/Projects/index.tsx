import { Subtitle } from "@/components/Text/Subtitle";
import { Title } from "@/components/Text/Title";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.css";
import image1 from "../../../public/banner1.jpeg";
import image2 from "../../../public/banner2.jpeg";
import image3 from "../../../public/banner3.jpeg";
import Image from "next/image";

export const Projects = (): JSX.Element => (
  <section className={styles.container}>
    <span className={styles.span}>
      <Title>Projetos em Destaque</Title>
      <Subtitle>Veja os nossos projetos e empreendimentos.</Subtitle>
    </span>
    <main className={styles.main}>
      <Carousel>
        <div
          onClick={() =>
            window.open("https://www.orulo.com.br/a/balenacatenaimoveis/19092")
          }
        >
          <Image src={image1} alt="Ita Conceição" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.orulo.com.br/a/balenacatenaimoveis/14540")
          }
        >
          <Image src={image2} alt="Alto da Boa Vista" />
        </div>
        <div>
          <Image src={image3} alt="Conquiste o seu lar!" />
        </div>
      </Carousel>
    </main>
  </section>
);
