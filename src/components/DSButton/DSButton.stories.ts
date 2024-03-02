import { StoryFn, Meta } from '@storybook/vue3';
import DSButton from './DSButton.vue';

export default {
	title: 'DSButton',
	component: DSButton,
	argTypes: {
		disabled: {
			control: { type: 'boolean' },
			defaultValue: false,
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			defaultValue: 'medium',
		},
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary'],
			defaultValue: 'primary',
		},
		className: {
			defaultValue: '',
		},
	},
} as Meta<typeof DSButton>;

const Template: StoryFn<typeof DSButton> = (args) => ({
	components: { DSButton },
	setup() {
		return { args };
	},
	template: `
      <div style="display: flex; flex-direction: row; gap: 12px; align-items: flex-end">
        <DSButton v-bind="args" size="large">Button</DSButton>
        <DSButton v-bind="args" size="medium">Button</DSButton>
        <DSButton v-bind="args" size="small">Button</DSButton>
      </div>
    `,
});

export const DefaultButton: StoryFn<typeof DSButton> = (args) => ({
	components: { DSButton },
	setup() {
		return { args };
	},
	template: '<DSButton v-bind="args">Button</DSButton>',
});

export const DisabledButton = Template.bind({});
DisabledButton.args = { disabled: true };

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { color: 'primary' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { color: 'secondary' };
