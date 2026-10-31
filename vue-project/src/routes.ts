import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/pages/Dashboard.vue"
import ProductManage from "./views/pages/product/ProductManage.vue"
import UserManage from "./views/pages/user/UserManage.vue"
import HelloWorld from "./components/HelloWorld.vue";
import ProductCreate from "./views/pages/product/ProductCreate.vue";
import ProductDetails from "./views/pages/product/ProductDetails.vue";
import ProductEdit from "./views/pages/product/ProductEdit.vue";
import Count from "./views/pages/pinia/Count.vue";
import UpdateID from "./views/pages/pinia/UpdateID.vue";
import Error404 from "./views/pages/errors/404.vue";
import Login from "./views/pages/auth/Login.vue";

const routes = [
  { path: '/', component: Dashboard },
  { path: '/users', component: UserManage },
  { path: '/users-create', component: HelloWorld },
  { path: '/products', component: ProductManage },
  { path: '/products/create', component: ProductCreate },
  { path: '/products/:id', component: ProductDetails },
  { path: '/products/update/:id', component: ProductEdit },
  { path: '/count', component: Count },
  { path: '/update-id', component: UpdateID },
  { path: '/login', component: Login, meta: { noLayout: true } },
  { path: '/:pathMatch(.*)*', component: Error404, meta: { noLayout: true } },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});