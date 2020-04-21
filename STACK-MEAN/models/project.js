const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const projectSchema = Schema({
    name:{type:String},
    description:{type:String},
    category:{type:String},
    year:Number,
    langs: {type:String},
    image: String
});

module.exports = mongoose.model("Project",projectSchema);