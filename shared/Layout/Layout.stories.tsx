import type { Meta, StoryObj } from "@storybook/react";

import { Placeholder } from "utils/storybook";

import { Layout } from "./Layout";

const meta: Meta<typeof Layout> = {
  title: "Components/Layout/Layout",
  component: Layout,
  tags: ["docsPage"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: <Placeholder />,
  },
};
