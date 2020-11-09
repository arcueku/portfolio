import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Skills", component: Skills },
  { path: "/Contact", component: Contact },
];

const router = new VueRouter({
  routes: routes,
});

export default router;
