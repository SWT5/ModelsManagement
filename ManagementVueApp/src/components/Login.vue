<template>
    <div id="Login">
        <div>
            <div>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="form.email" placeholder="Please enter your email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="text" v-model="form.password" placeholder="Please enter your password">
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
        name: 'Login',
        data: function () {
            return {
                form: {
                    email: '',
                    password: ''
                },
                message: ''
            }
        },
        methods: {
            loginApplication: function() {
                let login = {};
                login.email = this.form.email;
                login.password = this.form.password;
                fetch('https://localhost:44368/api/Account/login',
                    {
                        method: 'POST',
                        body: JSON.stringify(login),
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then(res => res.json().then((token) => {
                        localStorage.setItem("token", token.jwt);
                    }
                    ).catch(error => alert('Error:', error)));
            }
        }
    }
</script>

<style scoped>
</style>