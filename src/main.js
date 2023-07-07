import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import FAQ from './components/Faq.vue';
import BloodType from './components/BloodType.vue';
import Eligibility from './components/Eligibility.vue';
import Perks from './components/Perks.vue';
import Campaign from './components/Campaign.vue';
import Education from './Education.vue';
import Home from './components/Home.vue';
import Organization from './components/Organization.vue';
import Discover from './components/Discover.vue';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes: [
      { path: '/home', component: Home },
      { path: '/home/organization', component: Organization },
      { path: '/highlight', component: Discover },
      { path: '/education', component: Education },
      { path: '/education/bloodtype', component: BloodType },
      { path: '/education/faq', component: FAQ },
      { path: '/education/eligibility', component: Eligibility },
      { path: '/education/perks', component: Perks },
      { path: '/campaign', component: Campaign },
    ]
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');