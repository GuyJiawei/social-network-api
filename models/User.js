const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
    },
    userThoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    userFriends: [
      {
      type:Schema.Types.ObjectId,
      ref: 'User'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
      id: false,
    },
  }
);

userSchema.virtual('friendCount')
.get(function () {
    return this.userFriends.length
});

const User = model('user', userSchema);

module.exports = User;