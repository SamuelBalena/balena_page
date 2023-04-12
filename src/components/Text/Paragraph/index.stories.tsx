import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from ".";

export default {
  title: "Components/Text/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Template: ComponentStory<typeof Paragraph> = () => (
  <Paragraph>Parágrafo aqui</Paragraph>
);
