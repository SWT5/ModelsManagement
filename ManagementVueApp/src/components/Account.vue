<template>
    <div id="Account">
        <h4>Account</h4>
        <p >
            <ul>
                <li>
                    Name: {{firstName}} {{lastName}}  
                </li>
                <li>
                    Email: {{Email}}
                </li>
                <!--<li>
                    <div class="form-group">
                        <button type="button" class="button"
                                style="margin-left: 110px;"
                                v-on:click="changePasswordApplication">
                            Change password
                        </button> &nbsp;&nbsp;
                    </div>
                </li>-->
            </ul>
            <div v-if="isManager">
                <ul>
                    <li v-for="job in jobs">{{job}}</li>
                </ul>

            </div>
        </p>
    </div>
</template>

<script>
import LoginVue from "./Login.vue";

    export default {
        name: 'Account',
        data: function () {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    isManager: false,
                    jobs: []
                },

            }
        },
        methods: {
            getAccount: function () {
                var url = "https://localhost:44368/api/Account/login";
                fetch(url,
                    {
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(responseJson => {
                        var items = JSON.parse(responseJson);
                    }).catch(error => this.setState({
                        isLoading: false,
                        message: 'Something bad happend ' + error
                    }));

            },

        }
            
    }


</script>

<style scoped>
</style>

