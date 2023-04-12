import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Components/Buttons/Default",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = () => (
  <Button value="DEFAULT" href="#">
    Botão
  </Button>
);
