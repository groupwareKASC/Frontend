import type { Meta, StoryObj } from '@storybook/react';
import { Side } from './Side';

const meta: Meta<typeof Side> = {
  title: 'Component/Side',
  component: Side,
};

export default meta;

type Story = StoryObj<typeof Side>;

export const Default: Story = {
    args: {
      buttons: [
        { label: '근태검증', path: '/Attendence' },
        { label: '변동비 (특별근무)', path: '/VariableCost' },
        { label: '변동비 (대체근무)', path: '/SubstituteCost' },
      ],
    },
};
