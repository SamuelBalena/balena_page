import styles from "./styles.module.css";
import { Title } from "@/components/Text/Title";
import { Input } from "@/components/Inputs/Input";
import { TextArea } from "@/components/Inputs/TextArea";
import { Button } from "@/components/Buttons/Forms";

export const Form = (): JSX.Element => (
  <section className={styles.container}>
    <Title>Entre em contato</Title>
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <Input type="text" placeholder="Nome" />
        <Input type="number" placeholder="11 95374-8908" />
      </fieldset>
      <TextArea placeholder="Sua dúvida...." />
      <Button value="Enviar" />
    </form>
  </section>
);
