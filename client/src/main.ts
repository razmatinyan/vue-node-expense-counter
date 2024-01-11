import './assets/main.css';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PrimeVue, {
	ripple: true,
	inputStyle: 'filled',
});
app.use(ToastService);

app.use(createPinia());
app.use(router);

app.mount('#app');
