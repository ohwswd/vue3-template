import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Hello from "../components/Hello.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "hello",
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
