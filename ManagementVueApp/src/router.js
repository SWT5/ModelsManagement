import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Account from "./components/Account.vue";
import Job from "./components/Job.vue";
import CreateModel from "./components/CreateModel.vue";
import CreateManager from "./components/CreateManager.vue";
import CreateNewJob from "./components/CreateNewJob.vue";

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
			path: "/Account",
			name: "Account",
			component: Account
		},
		{
			path: "/Job",
			name: "Job",
			component: Job
		},
        {
			path: "/CreateModel",
			name: "CreateModel",
			component: CreateModel
        },
		{
			path: "/CreateManager",
			name: "CreateManager",
			component: CreateManager
		},
		{
			path: "/CreateNewJob",
			name: "CreateNewJob",
			component: CreateNewJob
		}
	]
});
