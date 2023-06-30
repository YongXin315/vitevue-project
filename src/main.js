import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import FAQ from './components/Faq.vue';
import BloodType from './components/BloodType.vue';
import Eligibility from './components/Eligibility.vue';
import Perks from './components/Perks.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/faq', component: FAQ },
      { path: '/bloodtype', component: BloodType },
      { path: '/eligibility', component: Eligibility },
      { path: '/perks', component: Perks },
    ]
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');