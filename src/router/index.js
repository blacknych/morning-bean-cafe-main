import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import DashboardView from "../views/DashboardView.vue";
import Home from "../components/Home.vue";
import Coffee from "../components/Coffee.vue";
import Frappe from "../components/Frappe.vue";
import Tea from "../components/Tea.vue";
import Dessert from "../components/Dessert.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landingpage",
            component: LandingPage,
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardView,
            children: [
                {
                    path: "/home",
                    component: Home,
                },
                {
                    path: "/coffee",
                    component: Coffee,
                },
                {
                    path: "/frappe",
                    component: Frappe,
                },
                {
                    path: "/tea",
                    component: Tea,
                },
                {
                    path: "/dessert",
                    component: Dessert,
                },
            ]
        },
        {
            path: "/product",
            name: "product",
            component: ProductView,
        },
    ],
});

export default router;
