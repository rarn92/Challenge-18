const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: true,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
    // reactions: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'reactions',
    //   },
    //   reactionBody: {
    //     type: String,
    //     required: true,
    //     maxlength: 280,
    //   },
    //   username: {
    //     type: String,
    //     required: true,
    //   },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    // ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
