import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Components/Layout/Navbar",
  component: Navbar,
  tags: ["docsPage"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
