import { Meta, StoryFn } from "@storybook/react";
import Sidebar from "../components/Sidebar";
import React from "react";

export default {
  title: "Navigation/Sidebar",
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => {
  return <Sidebar {...args} />;
};

export const ComponentSidebar = Template.bind({});
ComponentSidebar.args = {
  username: "Vitória Fusco",
  profile: "Administrador",
  itemsSidebar: [{ link: "www.google.com.br", name: "Fluxo de caixa" }],
};
