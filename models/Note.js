const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  // content of the note
  content: String,
  // when the note was created
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  // user schema reference for user id associated with this task
  user: [{
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the User model
    ref: "User",
    // an employee has to create a note
    required: true
  }],
});

// This creates our model from the above schema, using mongoose's model method
const Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
