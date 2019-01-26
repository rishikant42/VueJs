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
    }
  ]
});
