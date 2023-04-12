import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Subtitle } from ".";

export default {
  title: "Components/Text/Subtitle",
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

export const Template: ComponentStory<typeof Subtitle> = () => (
  <Subtitle>Subtítulo aqui</Subtitle>
);
