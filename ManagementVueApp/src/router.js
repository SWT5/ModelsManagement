import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Manager from "./components/Manager.vue";

Vue.use(Router);
export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/Login",
			name: "Login",
			component: Login
		},
		{
			path: "/Manager",
			name: "Manager",
			component: Manager
		}
	]
});