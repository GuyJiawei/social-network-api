const { Schema, model, Types } = require('mongoose');
const reactionsSchema = require('./Reactions');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => {
                let theDate = new Date(time);
            
                let dateAsString = theDate.toDateString();
            
                return dateAsString;
            }
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reactions: [reactionsSchema],
    },
    {
        toJSON: {
            getters: true,
            id: false,
        },
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;