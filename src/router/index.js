import Vue from "vue";
import VueRouter from "vue-router";
import UserLayout from "../layouts/UserLayout";
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    // component: { render: h => h("router-view") },
    component: UserLayout,
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register")
      }
    ]
  },
  {
    path: "/",
    name: "index",
    redirect: "/dashboard/analysis",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      // {
      //   path: "/",
      //   redirect: "/dashboard/analysis"
      // },
      // dashboard
      // {
      //   path: "/dashboard",
      //   name: "dashboard",
      //   redirect: "/dashboard/analysis",
      //   component: {
      //     render: h => h("router-views")
      //   },
      //   // component: () =>
      //   //   import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
      //   children: [
      //     {
      //       path: "/dashboard/analysis",
      //       name: "analysis",
      //       component: () =>
      //         import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue")
      //     }
      //   ]
      // },
      {
        path: "/dashboard/analysis",
        name: "analysis",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue")
      },
      // forms
      {
        path: "/form",
        name: "form",
        // redirect: "/form/basic-form",
        // component: { render: h => h("router-views") },
        component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm"),
        children: [
          // {
          //   path: "/form/basic-form",
          //   name: "basicform",
          //   component: () =>
          //     import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm")
          // },
          {
            path: "/form/step-form",
            name: "StepForm",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1"
                  )
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2"
                  )
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3"
                  )
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
