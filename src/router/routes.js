const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
    ],
  },
  {
    path: "/requests",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "new",
        component: () => import("pages/Student/NewRequest_STU.vue"),
      },
      { path: "all", component: () => import("pages/AO/AllRequests_AO.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
