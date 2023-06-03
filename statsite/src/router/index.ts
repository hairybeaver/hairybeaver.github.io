// Composables
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Dev from "@/views/Dev.vue";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "dev",
        name: "Dev",
        component: Dev,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
