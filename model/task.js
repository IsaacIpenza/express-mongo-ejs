// Paso #1
var mongoose = require("mongoose")
var Schema = mongoose.Schema;

// Paso #2
var TaskSchema = Schema ({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

// Paso #3
module.exports = mongoose.model('tasks', TaskSchema);