
<template>
    <div id="app">
        <h1>App test</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/Login">Login</router-link> |
            <router-link to="/CreateModel">Create Model</router-link> | 
            <router-link to="/Manager">Manager</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
    //import Router from "vue-router";
    //import Home from './components/Home.vue';
    //import Login from './components/Login.vue';

    export default {
        name: 'app',
    };
</script>

<style>
</style>

