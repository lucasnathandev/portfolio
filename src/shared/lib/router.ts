import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeVue from "../../views/Home.vue";

const routes: RouteRecordRaw[] = [{ path: "/", component: HomeVue }];

export const router = createRouter({ routes, history: createWebHistory() });
