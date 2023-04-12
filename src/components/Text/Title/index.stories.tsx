import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from ".";

export default {
  title: "Components/Text/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Template: ComponentStory<typeof Title> = () => (
  <Title>Título aqui</Title>
);
