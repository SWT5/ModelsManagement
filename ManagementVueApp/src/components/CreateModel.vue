<template>
    <div id="CreateModel">
        <div>
            <div>
                <form>
                    <div class="form-group">
                        <label for="FirstName">FirstName</label>
                        <input type="text" v-model="form.FirstName" placeholder="The model's firstname">
                    </div>
                    <div class="form-group">
                        <label for="LastName">LastName</label>
                        <input type="text" v-model="form.LastName" placeholder="The model's lastname">
                    </div>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="text" v-model="form.Email" placeholder="Please enter the model's Email">
                    </div>
                    <div class="form-group">
                        <label for="PhoneNo">PhoneNo</label>
                        <input type="text" v-model="form.PhoneNo" placeholder="Please enter the model's PhoneNo">
                    </div>
                    <div class="form-group">
                        <label for="AddresLine1">AddresLine1</label>
                        <input type="text" v-model="form.AddresLine1" placeholder="Please enter AddresLine1">
                    </div>
                    <div class="form-group">
                        <label for="AddresLine1">AddresLine2</label>
                        <input type="text" v-model="form.AddresLine2" placeholder="Please enter AddresLine2">
                    </div>
                    <div class="form-group">
                        <label for="Zip">Zip</label>
                        <input type="text" v-model="form.Zip" placeholder="Please enter Zip">
                    </div>
                    <div class="form-group">
                        <label for="City">City</label>
                        <input type="text" v-model="form.City" placeholder="Please enter City">
                    </div>
                    <div class="form-group">
                        <label for="Country">Country</label>
                        <input type="text" v-model="form.Country" placeholder="Please enter Country">
                    </div>

                    <div class="form-group">
                        <label for="Nationality">Nationality</label>
                        <input type="text" v-model="form.Nationality" placeholder="Please enter Nationality">
                    </div>
                    <div class="form-group">
                        <label for="Height">Height</label>
                        <input type="text" v-model="form.Height" placeholder="Please enter Height">
                    </div>
                    <div class="form-group">
                        <label for="ShoeSize">ShoeSize</label>
                        <input type="text" v-model="form.ShoeSize" placeholder="Please enter ShoeSize">
                    </div>
                    <div class="form-group">
                        <label for="HairColor">HairColor</label>
                        <input type="text" v-model="form.HairColor" placeholder="Please enter HairColor">
                    </div>
                    <div class="form-group">
                        <label for="EyeColor">EyeColor</label>
                        <input type="text" v-model="form.EyeColor" placeholder="Please enter EyeColor">
                    </div>
                    <div class="form-group">
                        <label for="Comments">Comments</label>
                        <input type="text" v-model="form.Comments" placeholder="Please enter Comments">
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
                    PhoneNo: '',
                    AddresLine1: '',
                    AddresLine2: '',
                    Zip: '',
                    City: '',
                    Country: '',
                    //BirthDate: new Datetime(), //of type Datetime
                    Nationality: '',
                    Height: '',   
                    ShoeSize: '', 
                    HairColor: '',
                    EyeColor: '',
                    Comments: '',
                    //JobModels[]: {},
                    //Expenses[]: {}

                },
                message: ''
            }
        },
        methods: {
            CreateModel: function () {
                var url = "https://localhost:44368/api/Models/";
                let createModel = {};
                createModel.FirstName = this.form.FirstName;
                createModel.LastName = this.form.LastName;
                createModel.Email = this.form.Email;
                createModel.PhoneNo = this.form.PhoneNo;
                createModel.AddresLine1 = this.AddresLine1;
                createModel.Zip = this.Zip;
                createModel.City = this.City;
                createModel.Country = this.Country;
                createModel.BirthDate = this.BirthDate;
                createModel.Nationality = this.Nationality;
                createModel.Height = this.Height;
                createModel.ShoeSize = this.ShoeSize;
                createModel.HairColor = this.HairColor;
                createModel.EyeColor = this.EyeColor;
                createModel.Comments = this.Comments;
                createModel.JobModels = this.JobModels;
                createModel.Expenses = this.Expenses;
                

                fetch(url,
                    {
                        method: 'POST',
                        credentials: 'include',
                        //body: JSON.stringify(createModel),
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(ResponseJson => {
                        var items = JSON.parse(ResponseJson);
                    })
                    //.catch(error => this.setState({
                    //    message: 'Something bad happened ' + error
                    //}));
            }
        }
    }
</script>

<style scoped>
</style>