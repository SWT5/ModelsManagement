<template>
    <div id="Account">
        <form>
            <p v-for="account in form.account">
                Name: {{account.firstName}} {{account.lastName}} <br />
                Email: {{account.email}}
            </p>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'Account',
        data: function () {
            return {
                form: {
                    account: []
                    //role: '',
                    //modelId: ''
                },
                credentials: {
                }
            }
        },
        created() {
            let self = this;

            this.validateAccount();

        },
        methods: {
            getManagerAccount: function () {
                let url = 'https://localhost:44368/api/Managers';
                let account = {};
                account.account = this.form.account;
                fetch(url,
                    {
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then((response) => {
                        return response.json()
                    }).then((data) => {
                        this.form.account = data;
                        //this.credentials = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
                    }).catch(error => alert('Error:', error));

            },
            getModelAccount: function () {
                let url = 'https://localhost:44368/api/Models/' + this.credentials.ModelId;
                let account = {};
                account.account = this.form.account;

                fetch(url,
                    {
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then((response) => {
                        return response.json();
                    }).then((data) => {
                        this.form.account = data;
                    }).catch(error => alert('Error:', error));
            },
            validateAccount: function () {
                this.credentials = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
                let role = this.credentials['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

                if (role == "Manager")
                    this.getManagerAccount();
                else {
                    this.getModelAccount();
                }
            }

        }


    }
</script>

<style scoped>
</style>

