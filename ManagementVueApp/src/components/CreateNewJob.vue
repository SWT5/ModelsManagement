<template>
    <div id="CreateJob">
        <div>
            <div>
                <form>
                    <div class="form-group">
                        <label for="Customer">customer</label>
                        <input type="text" v-model="form.customer" placeholder="Please enter your custumer">
                    </div>
                    <div class="form-group">
                        <label for="startDate">startDate</label>
                        <input type="date" v-model="form.startDate" placeholder="Please enter your startDate">
                    </div>
                    <div class="form-group">
                        <label for="days">days</label>
                        <input type="number" v-model.number="form.days" placeholder="how many days">
                    </div>
                    <div class="form-group">
                        <label for="location">location</label>
                        <input type="text" v-model="form.location" placeholder="Please enter your location">
                    </div>
                    <div class="form-group">
                        <label for="comments">comments</label>
                        <input type="text" v-model="form.comments" placeholder="Please enter your comments">
                    </div>

                    <div class="form-group">
                        <button type="button" class="button"
                                style="margin-left: 110px;"
                                v-on:click="createjob">
                            create new job
                        </button> &nbsp;&nbsp;
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateJob',
        data: function () {
            return {
                form: {
                    customer: '',
                    startDate: '',
                    days: 1,
                    location: '',
                    comments: ''
                },
                message:''
            }
        },
        methods: {
            createjob: function () {
                fetch('https://localhost:44368/api/Jobs',
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
                        this.form = data
                    });
            }
        }
    }
</script>

<style scoped>
</style>