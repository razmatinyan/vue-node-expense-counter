<script setup lang="ts">
import axios from 'axios';

import { ref } from 'vue';
import type { Ref } from 'vue';
import router from '@/router';

import Container from '@/components/Container.vue';
import Text from '@/components/Text.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Password from 'primevue/password';
import Toast from 'primevue/toast';

import { useToast } from 'primevue/usetoast';

const username: Ref = ref<String>('');
const password: Ref = ref<String>('');
const toast = useToast();

const signIn = async () => {
	if (!username.value || !password.value) {
		toast.add({
			severity: 'error',
			summary: 'Error',
			detail: 'Username and Password must be completed!',
		});
		return false;
	}

	try {
		const { data } = await axios.post('/api/login', {
			params: {
				username: username.value as string,
				password: password.value as string,
			},
		});

		if (data.status === 200) {
			router.push({
				path: '/dashboard',
			});
		}
	} catch (error: any) {
		toast.add({
			severity: 'error',
			summary: 'Error',
			detail: error.response.data.message,
		});
		return false;
	}
};
</script>

<template>
	<Container hCenter vCenter>
		<div id="login">
			<Text tag="h1" text="Sign In" margin center />

			<InputGroup class="input-group">
				<InputGroupAddon>
					<i class="pi pi-user"></i>
				</InputGroupAddon>
				<span class="p-float-label">
					<InputText type="text" id="username" v-model="username" />
					<label for="username">Username</label>
				</span>
			</InputGroup>
			<InputGroup class="input-group">
				<InputGroupAddon>
					<i class="pi pi-unlock"></i>
				</InputGroupAddon>
				<Password v-model="password" placeholder="Password" :feedback="false" />
			</InputGroup>

			<Button label="Submit" @click="signIn" />
		</div>
	</Container>

	<Toast />
</template>

<style lang="scss" scoped>
#login {
	display: flex;
	flex-direction: column;

	.input-group {
		margin-bottom: 1em;
	}
}
</style>
