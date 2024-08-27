const mongoose=require('mongoose');
const Schema=mongoose.Schema

const userSchema=new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
    

});

const userModel = new model("User", userSchema);

module.exports = { userModel };
