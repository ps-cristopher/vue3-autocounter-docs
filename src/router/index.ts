import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  trickle: false,
});

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Demo.vue'),
  },
  {
    path: '/docs',
    name: 'Docs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Docs.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

export default router;
