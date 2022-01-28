import { getView } from "@/router/helper";
export default [
  {
    path: "/",
    name: "IndexHome",
    component: getView("Index.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "/login",
        name: "Login",
        component: getView("Login.vue"),
        meta: { layout: "AppLayoutMain" },
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: getView("Cart.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/orders",
    name: "Orders",
    component: getView("Orders.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: getView("Profile.vue"),
    meta: { layout: "AppLayoutMain" },
  },
];
