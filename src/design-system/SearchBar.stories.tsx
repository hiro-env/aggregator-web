import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'DesignSystem/SearchBar',
  argTypes: {
    onSearch: { action: 'searched' },
    placeholder: { control: 'text' },
    buttonText : {
      control: { type: "radio" },
      options: ["検索", "検索する", "Search"],
    }
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const JapaneseVersion: Story = {
  args: {
    placeholder: 'キーワードを入力',
    buttonText: '検索'
  },
};

export const EnglishVersion: Story = {
  args: {
    placeholder: 'Type keyword',
    buttonText: 'Search'
  },
};