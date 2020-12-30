import { createRouter, createWebHistory } from 'vue-router';
import { routerGuard } from '@/router/guard';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: []
})

const ROUTER_ITEM = require.context('../router', false, /\.router\.js/);
ROUTER_ITEM.keys().forEach(item => {
  ROUTER_ITEM(item).default.map(ite => {
    router.addRoute(ite);
  })
});

export function setupRouter(app) {
  app.use(router);
  routerGuard(router);
}

export default router;
