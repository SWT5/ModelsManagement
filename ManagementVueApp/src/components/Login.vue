<template>
    <div id="loginVue">
        <div>
            <div>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="email" placeholder="Please enter your email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="text" v-model="password" placeholder="Please enter your password">
                    </div>
                    <div class="form-group">
                        <button type="button" class="button"
                                style="margin-left: 110px;"
                                v-on:click="loginApplication">
                            Login In
                        </button> &nbsp;&nbsp;
                    </div>
                </form>
                <span class="text-danger" style="margin-left: 110px;">{{message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            email: email, 
            password: Text
        },
        methods: {

        }
    }
    //vm = new Vue({
    //    el: '#loginApp',
    //    data: {
    //        email: '',
    //        password: '',
    //        message: ''
    //    },
    //    methods: {
    //        loginApplication() {
    //            let login = {};
    //            login.email = this.email;
    //            login.password = this.password;
    //            fetch('/api/Account/login',
    //                {
    //                    method: 'POST',
    //                    body: JSON.stringify(login),
    //                    headers: new Headers({
    //                        'Content-Type': 'application/json'
    //                    })
    //                }).then(res => res.json().then((token) => {
    //                    localStorage.setItem("token", token.jwt);
    //                }
    //                ).catch(error => console.error('Error:', error)));
    //        }
    //    }
    //})
</script>

<style scoped>
</style>