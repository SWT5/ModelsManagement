<template>
    <div id="CreateModel">
        <div>
            <div>
                <form>
                    <div class="form-group">
                        <label for="FirstName">FirstName</label>
                        <input type="text" v-model="form.FirstName" placeholder="Please enter your firstname">
                    </div>
                    <div class="form-group">
                        <label for="LastName">LastName</label>
                        <input type="text" v-model="form.LastName" placeholder="Please enter your LastName">
                    </div>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="text" v-model="form.Email" placeholder="Please enter your Email">
                    </div>
                    <div class="form-group">
                        <label for="PhoneNo">PhoneNo</label>
                        <input type="text" v-model="form.PhoneNo" placeholder="Please enter your PhoneNo">
                    </div>
                    <div class="form-group">
                        <button type="button" class="button"
                                style="margin-left: 110px;"
                                v-on:click="CreateModel">
                            Create Model
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
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    PhoneNo: ''
                },
                message: ''
            }
        },
        methods: {
            CreateModel: function () {
                let createModel = {};
                createModel.FirstName = this.form.FirstName;
                createModel.LastName = this.form.LastName;
                createModel.Email = this.form.Email;
                createModel.PhoneNo = this.form.PhoneNo;

                fetch('https://localhost:44368/api/Models',
                    {
                        method: 'POST',
                        body: JSON.stringify(createModel),
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