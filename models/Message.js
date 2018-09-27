const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    activityID : {
        type: String,
        required: true
    },
    userID : {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    message : {
        type: String,
        required: true
    }
});

let Message = mongoose.model('Message', MessageSchema);

module.exports = Message;