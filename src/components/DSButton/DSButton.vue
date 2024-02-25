<script lang="ts">
import { PropType, defineComponent } from 'vue';

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
	},
	data() {
		return {};
	},
});
</script>

<template>
	<button class="button" :class="[size, color]" :disabled="disabled">
		<slot />
	</button>
</template>

<style scoped>
.button {
	color: #ffffff;
	outline: none;
	border: none;
	padding: 0 16px;
	cursor: pointer;
	transition: opacity 0.2s ease-in;
}

.button:hover {
	opacity: 0.9;
}

.small {
	height: 32px;
	border-radius: 8px;
}

.medium {
	height: 36px;
	border-radius: 10px;
}

.large {
	height: 40px;
	border-radius: 12px;
}

.primary {
	background: green;
}

.secondary {
	background: #a7a7a7;
}
</style>
