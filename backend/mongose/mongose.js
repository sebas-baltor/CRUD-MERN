const mongoose=require("mongoose");
const tasksSchema= new mongoose.Schema(
    {
        id:{type:Number, default:0},
        title:{type:String,default:"You didn´t add the title before"},
        description:{type:String,default:"You didn´t add the description before"}
    }
)
const tasksModel = mongoose.model("tasksModel",tasksSchema);
module.exports = tasksModel
