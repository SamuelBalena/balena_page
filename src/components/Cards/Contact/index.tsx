import styles from "./styles.module.css";
import { Button } from "@/components/Buttons/Default";
import { Paragraph } from "@/components/Text/Paragraph";
import { Title } from "@/components/Text/Title";
import { Props } from "./interface";

export const Card = ({
  title,
  paragraph,
  firstButton,
  secondButton,
}: Props): JSX.Element => (
  <div className={styles.container}>
    <header>
      <Title>{title}</Title>
    </header>
    <main className={styles.main}>
      <Paragraph>{paragraph}</Paragraph>
    </main>
    <div>
      <Button value="DEFAULT" href="#">
        {firstButton}
      </Button>
      <Button value="CONTACT" href="#">
        {secondButton}
      </Button>
    </div>
  </div>
);
