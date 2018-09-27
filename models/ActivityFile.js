const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActivitySchema = new Schema({
    activityID : {
        type: String, 
        required: true
    },
    users : [{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }],
    message: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }]

});

let Activity = mongoose.model('Activities', ActivitySchema);

module.exports = Activity;