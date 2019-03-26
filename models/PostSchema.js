var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        userId: Number,
        id: Number,
        title: String,
        body: String,
    });

//Export model
module.exports = mongoose.model('Post', PostSchema);