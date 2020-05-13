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
                },

            }
        },
        created() {
            let self = this;
            this.getManagerAccount();
            //this.getModelAccount();
        },
        methods: {
            getManagerAccount: function () {
                var url = "https://localhost:44368/api/Managers";
                let account = {};
                account.account = this.form.account;
                //Account.isManager = this.form.isManager;
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
                    }).catch(error => { console.log(error); });

            },
            getModelAccount: function () {
                var url = "https://localhost:44368/api/Models";
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
                    }).catch(error => { console.log(error); });
            }

        }
            
    }


</script>

<style scoped>
</style>

