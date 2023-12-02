import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import NotFoundVue from "@/views/error/NotFound.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomeVue },
  { path: "/:patchMatch(.*)*", component: NotFoundVue },
];

export const router = createRouter({ routes, history: createWebHistory() });
