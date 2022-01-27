export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: { showModal: true, layout: "AppLayoutMain" },
      },
    ],
  },
  // {
  //   path: '/tasks/create',
  //   name: 'TaskCreate',
  //   component: () => import('../views/TaskCreate.vue'),
  //   meta: { layout: 'AppLayoutDefault' }
  // },
  // {
  //   path: '/tasks/edit/:id',
  //   name: 'TaskEdit',
  //   component: () => import('../views/TaskEdit.vue'),
  //   meta: { layout: 'AppLayoutDefault' }
  // }
];
