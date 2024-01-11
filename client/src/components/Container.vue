<template>
	<component
		:is="tag"
		class="container"
		:class="[
			`container-${size}`,
			paddingTop ? 'padding-top' : '',
			hCenter ? 'justify-center' : '',
			vCenter ? 'align-center' : '',
		]"
	>
		<slot />
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Container',
	props: {
		tag: {
			type: String,
			default: 'div',
		},
		size: {
			type: String,
			default: 'm',
		},
		paddingTop: {
			type: Boolean,
			default: true,
		},
		hCenter: {
			type: Boolean,
			default: false,
		},
		vCenter: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style scoped>
.container {
	display: block;
	margin: 0 auto;
	padding: 0 30px;
}
.container-s {
	max-width: 800px;
}
.container-m {
	max-width: 1024px;
}
.container-l {
	max-width: 1440px;
}
.padding-top {
	padding-top: 80px;
}
.justify-center {
	display: flex;
	justify-content: center;
}
.align-center {
	display: flex;
	align-items: center;
	height: 100vh;
	padding-top: 0;
}
</style>
