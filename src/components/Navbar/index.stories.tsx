import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Template: ComponentStory<typeof Navbar> = () => <Navbar />;
