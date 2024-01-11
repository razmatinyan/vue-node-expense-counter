<template>
	<component
		:is="tag"
		class="text"
		:class="[`text-${tag}`, center ? 'text-center' : '', margin ? 'margin' : '']"
	>
		{{ text }}
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MyText',
	props: {
		tag: {
			type: String,
			default: 'div',
		},
		text: {
			type: String,
			required: true,
		},
		center: {
			type: Boolean,
			default: false,
		},
		margin: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style scoped>
.text {
	display: flex;
}
.text-center {
	justify-content: center;
}
.margin {
	margin-bottom: 30px;
}
</style>
