const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    },
    time: {
        type: Date,
        default: Date.now // This will set the current date and time
    }
})
const message = mongoose.model("Message",MessageSchema);
module.exports = message;
