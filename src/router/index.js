import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AnimationWrapper from '../views/animation/wrapper.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/about/AboutView.vue"),
    },
    {
      path: "/canvas-one",
      name: "canvasOne",
      component: () => import("../views/canvas/CanvasOne.vue"),
    },
    {
      path: "/animations",
      redirect: '/animations/a-ball',
      component: AnimationWrapper,
      children: [
        {
          path: 'a-ball',
          name: 'aball',
          component: () => import('../views/animation/ABall.vue')
        },
        {
          path: 'image-data',
          name: 'imageData',
          component: () => import('../views/animation/ImageData.vue')
        }
      ]
    },
  ],
});

export default router;
