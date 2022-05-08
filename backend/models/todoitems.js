const mongoose = require('mongoose');

const TodoitemSchema = new mongoose.Schema({
    item: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('todo', TodoitemSchema);