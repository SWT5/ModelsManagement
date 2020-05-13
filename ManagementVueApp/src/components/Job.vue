<template>
    <div id="Job">
        <form>
            <div class="form-group">
                <button type="button" class="button"
                        style="margin-left: 110px;"
                        v-on:click="getJobs">
                    Get Jobs
                </button> &nbsp;&nbsp;
            </div>
            <div>
                <ul>
                    <li v-for="job in jobs">{{job}}</li>
                </ul>
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
                    firstName: '',
                    lastName: '',
                    email: '',
                    isManager: false,
                    jobs: []
                },

            }
        },
        methods: {
            getJobs: function () {
                var url = "https://localhost:44368/api/Jobs";
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
                    })
                    .catch(error => this.setState({
                        isLoading: false,
                        message: 'Something bad happened ' + error
                    }));
            }
        }
    }
</script>

<style scoped>
</style>