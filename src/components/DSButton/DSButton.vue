<script lang="ts">
import { PropType, defineComponent } from 'vue';
import '../../style.css';

type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonColors = 'primary' | 'secondary';

export default defineComponent({
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String as PropType<ButtonSizes>,
			default: 'medium',
		},
		color: {
			type: String as PropType<ButtonColors>,
			default: 'primary',
		},
		className: {
			type: String,
		},
	},
	data() {
		return {};
	},
});
</script>

<template>
	<button
		class="button"
		:class="[size, color, disabled && 'disabled', className && className]"
		:disabled="disabled"
	>
		<slot />
	</button>
</template>

<style scoped>
.button {
	color: #ffffff;
	outline: none;
	border: none;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	font-style: normal;
	border-radius: 12px;
	cursor: pointer;
	transition: opacity 0.2s ease-in;
}

.button:hover {
	opacity: 0.8;
}
.primary {
	background: var(--primary-500);
	border: 1px solid var(--primary-500);
}

.secondary {
	color: var(--gray-700);
	border: 1px solid var(--gray-300);
	background-color: #fff;
}

.disabled {
	color: #fff;
	background-color: var(--gray-300);
	border-color: var(--gray-300);
	opacity: 0.8;
	pointer-events: none;
}

.small {
	padding: 8px 16px;
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
}

.medium {
	padding: 12px 20px;
	font-size: 16px;
	line-height: 20px;
}

.large {
	padding: 14px 26px;
	font-size: 18px;
	line-height: 22px;
}
</style>
