
<template>
    <div id="CreateModel">
        <div>
            <div>
                <form>
                    <div class="form-group">
                        <label for="firstname">firstname</label>
                        <input type="text" v-model="form.firstname" placeholder="Please enter your lastname">
                    </div>
                    <div class="form-group">
                        <label for="lastname">lastname</label>
                        <input type="text" v-model="form.lastname" placeholder="Please enter your lastname">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="form.email" placeholder="Please enter your email">
                    </div>
                    <div class="form-group">
                        <label for="phoneNo">phoneNo</label>
                        <input type="number" v-model="form.phoneNo" placeholder="Please enter your phoneNo">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="text" v-model="form.password" placeholder="Please enter your password">
                    </div>
                    <div class="form-group">
                        <button type="button" class="button"
                                style="margin-left: 110px;"
                                v-on:click="createmodel">
                            create model
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
        name: 'CreateModel',
        data: function () {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phoneNo:'',
                    password: ''
                },
                message: ''
            }
        },

        methods: {
            createmodel: function () {
                fetch('https://localhost:44368/api/Models',
                    {
                        method: 'POST',
                        credentials: 'include',
                        body: JSON.stringify(this.form),
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        return response.json()
                    }).then((data) => {
                        this.form.createmanager = data
                        //       }).catch(error => { console.log(error); 
                    });    

                   }
        }
    }
</script>

<style scoped>
</style>
