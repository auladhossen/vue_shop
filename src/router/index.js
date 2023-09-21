import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Products from "../components/Products.vue";
import Product from "../components/Product.vue";
import Sidebar from "../components/Sidebar.vue";
import Blog from "../components/Blog.vue";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      SideBar: Sidebar,
    },
  },
  {
    path: "/about",
    components: {
      default: About,
      SideBar: Sidebar,
    },
  },
  {
    path: "/contact",
    components: {
      default: Contact,
      SideBar: Sidebar,
    },
  },
  {
    path: "/products",
    components: {
      default: Products,
      SideBar: Sidebar,
    },
  },
  {
    path: "/product/:id",
    components: {
      default: Product,
      SideBar: Sidebar,
    },
    name: "product",
  },
  {
    path: "/blog",
    components: {
      default: Blog,
      SideBar: Sidebar,
    },
    name: "blog",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
