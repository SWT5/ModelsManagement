<template>
    <div>
        <h1>Add expenses to job</h1>
        <form>
            <div class="form-group">
                <label for="jobid">Job id: </label>
                <input type="number" v-model.number="form.jobid" placeholder="Job id" />
            </div>
            <div class="form-group">
                <label for="modelid">Model id: </label>
                <input type="number" v-model.number="form.modelid" placeholder="Model id" />
            </div>
            <div class="form-group">
                <label for="date">Date: </label>
                <input type="date" v-model="form.date" />
            </div>
            <div class="form-group">
                <label for="text">Text: </label>
                <input type="text" v-model="form.text" placeholder="Text" />
            </div>
            <div class="form-group">
                <label for="amount">Amount: $</label>
                <input type="number" step="10" v-model.number="form.amount" placeholder="Enter the amount" />

            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="AddExpense">Add expense</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddExpense',
        data: function () {
            return {
                form: {
                    jobid: '',
                    modelid: '',
                    date: '',
                    text: '',
                    amount: 0
                },
            }
        },
        methods: {
            AddExpense() {
                fetch('https://localhost:44368/api/Expenses', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(this.form),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    var items = responseJson;
                })
                    .catch(error => alert('Error: ' + error));
            }
        }
    }
</script>

<style scoped>
</style>