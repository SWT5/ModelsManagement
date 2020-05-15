<template>
    <div id="Job">
        <form>
            <div class="row">
                <div class="column">
                    <div class="form-group">
                        <br/>
                        <label for="jobid">Job id: </label>
                        <input type="text" v-model="form.jobId" placeholder="Enter job id" />
                    </div>
                    <div class="form-group">
                        <br/>
                        <label for="modelid">Model id: </label>
                        <input type="text" v-model="form.modelId" placeholder="Enter model id" />
                    </div>
                </div>
                <div class="column">
                    <div class="form-group">
                        <br />
                        <button type="button" class="button" v-on:click="addModel">Add model to job</button>
                    </div>
                    <div class="form-group">
                        <br />
                        <button type="button" class="button" v-on:click="deleteModel">Delete model from job</button>
                        <br /><br />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <ul>
                        <h3>All Jobs</h3>
                        <li v-for="job in form.jobs">
                            <div>
                                Customer: {{job.customer}} <br />
                                Location: {{job.location}} <br />
                                StartDate: {{job.startDate}} <br />
                                Durations: {{job.days}} days <br />
                                JobID: {{job.efJobId}} <br />
                                Comments: {{job.comments}} <br />
                                <br />
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <div class="form-group">
                        <h3>All Models </h3>
                        <ul>
                            <li v-for="model in form.models">
                                <div>
                                    ModelId: {{model.efModelId}} <br />
                                    Model: {{model.firstName}} {{model.lastName}} <br /><br/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Job',
        data: function () {
            return {
                form: {
                    jobs: [],
                    models: [],
                    JobId: '',
                    modelId: ''
                },

            }
        },
        created() {
            let self = this;
            this.getJobs();
            this.getModels();
        },
        methods: {
            getJobs: function () {
                var url = "https://localhost:44368/api/Jobs";
                let jobs = {};
                jobs.jobs = this.form.jobs;
                
                fetch   (url,
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
                        this.form.jobs = data
                    }).catch(error => { console.log(error); });
                    
            },
            addModel: function () {
                var url = 'https://localhost:44368/api/Jobs/' + this.form.jobId + '/model/' + this.form.modelId;
                fetch(url,
                    {
                        method: 'POST',
                        credentials: 'include',
                        body: JSON.stringify(this.form),
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then((response) => {
                        var items = response.json()
                    }).then((data) => {
                        this.form.jobs = data
                    }).catch(error => { console.log(error); });

            },
            getModels: function () {
                var url = 'https://localhost:44368/api/Models'; 
                let models = {}; 
                models.models = this.form.models;
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
                        this.form.models = data
                    }).catch(error => { console.log(error); });
            },
            deleteModel: function () {
                var url = 'https://localhost:44368/api/Jobs/' + this.form.jobId + '/model/' + this.form.modelId;
                fetch(url,
                    {
                        method: 'DELETE',
                        credentials: 'include',
                        body: JSON.stringify(this.form),
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then((response) => {
                        var items = response.json();
                    }).then((data) => {
                        this.form.jobs = data
                    })
                    .catch(error => { console.log(error); });

            }

        }
    }
</script>

<style scoped>
    .column {
        float: left; 
        width: 50%;
    }

    .row:after {
        content: ""; 
        display: table; 
        clear: both;
    }
</style>