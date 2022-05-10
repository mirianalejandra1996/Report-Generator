import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "tkambioLayout",
    component: () =>
      import(/* webpackChunkName: "tkambioLayout"*/ "../layout/TkambioLayout"),
    children: [
      //  ! In case you want to add some routes, use Lazy Load to import your pages
      {
        path: "reports",
        name: "reportsPage",
        component: () =>
          import(/* webpackChunkName: "ReportsPage"*/ "@/pages/ReportsPage"),
      },
      {
        path: "",
        redirect: { name: "reportsPage" },
      },
    ],
  },
  // !  If path doesn't match with anything
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "reportsPage" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
