import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Foo from "./views/Foo.vue";
import Bar from "./views/Bar.vue";
import Abc from "./views/Abc.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/foo/:id/:username/",
      name: "foolink",
      component: Foo
    },
    {
      path: "/bar",
      component: Bar,
      children: [
        {
          path: "abc",
          component: Abc
        }
      ]
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
