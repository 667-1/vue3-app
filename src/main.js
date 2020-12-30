import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupVant } from '@/config/vant';
import { setupComponent } from '@/components/common';

import '@/config/styles/index.scss';

const app = createApp(App);

setupStore(app);

setupRouter(app);

setupVant(app);

setupComponent(app);

app.mount('#app');
