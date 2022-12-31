import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Modules/Demo/Counter",
  component: Counter,
  tags: ["docsPage"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {};

export const StartWithOne: Story = {
  args: {
    startFrom: 1,
  },
};

export const Interactive: Story = {};
Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const incrementButton = canvas.getByText(/count is/);

  await userEvent.click(incrementButton);

  await expect(incrementButton).toHaveTextContent("count is 1");
};
