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
});

// This creates our model from the above schema, using mongoose's model method
const Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
