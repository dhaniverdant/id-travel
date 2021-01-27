import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/yogyakarta",
    name: "Yogyakarta",
    component: () =>
      import(/* webpackChunkName: "yogyakarta" */ "../views/Yogyakarta")
  },
  {
    path: "/malang",
    name: "Malang",
    component: () => import(/* webpackChunkName: "malang" */ "../views/Malang")
  },
  {
    path: "/bali",
    name: "Bali",
    component: () => import(/* webpackChunkName: "bali" */ "../views/Bali")
  },
  {
    path: "/sumbawa",
    name: "Sumbawa",
    component: () =>
      import(/* webpackChunkName: "sumbawa" */ "../views/Sumbawa")
  },
  {
    path: "/details",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
