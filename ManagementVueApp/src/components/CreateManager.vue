<template>
    <v-container>
        <v-layout column>
            <form>
                <div class="form-group">
                    <label for="firstName">FirstName </label>
                    <input type="text" v-model="form.firstName" placeholder="Please enter your firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">LastName </label>
                    <input type="text" v-model="form.lastName" placeholder="Please enter your lastName">
                </div>
                <div class="form-group">
                    <label for="email">Email </label>
                    <input type="email" v-model="form.email" placeholder="Please enter your email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="text" v-model="form.password" placeholder="Please enter your password">
                </div>
                <div class="form-group">
                    <button type="button" class="button"
                            style="margin-left: 110px;"
                            v-on:click="CreateManager">
                        Create Manager
                    </button> 
                </div>

            </form>
        </v-layout>
    </v-container>
</template>

<script>
  
export default {
    name: 'CreateManager',
        data: function () {
            return {
                form:
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password:'',
                   
                }
            }
        },
        method: {
            CreateManager: function () {
                let createManager = {};
                createManager.firstName = this.form.firstName;
                createManager.lastName = this.form.lastName;
                createManager.password = this.form.password;
                createManager.email = this.form.email;
                fetch('https://localhost:44368/api/Managers',
                    {
                        method: 'POST',
                        body: JSON.stringify(createManager),
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then(res => res.json().then((token) => {
                        localStorage.setItem("token", token.jwt);
                    }
                    ).catch(error => alert('Error:', error)));
            }
        }
        
};
</script>

<style scoped>
    
</style>