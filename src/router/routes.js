const routes = [
  {
    path: "/",
    component: () => import("pages/MainPage.vue"),
    name: "Main",
  },
  {
    path: "/products",
    component: () => import("pages/Products.vue"),
    name: "Products",
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
