import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";
import Homepage from "../views/index.vue";
import PokemonDetail from "../views/pokemon/[id].vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon Detail",
    component: PokemonDetail,
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
