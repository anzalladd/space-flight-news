import Vue from "vue";
import VueRouter from "vue-router";
import { middlewareHandle, auth, common } from "./middlewares";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      meta: { middlewares: [auth] },
    },
    {
      path: "/news/:id",
      name: "detailNews",
      component: () =>
        import(/* webpackChunkName: "detailNews" */ "@/views/DetailNews.vue"),
      meta: { middlewares: [auth] },
    },
    {
      path: "/auth",
      name: "auth",
      component: () =>
        import(/* webpackChunkName: "auth" */ "@/views/Auth.vue"),
      meta: { middlewares: [common] },
    },
    {
      path: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "notFound"*/ "@/views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  return middlewareHandle(to, from, next);
});

export default router;
