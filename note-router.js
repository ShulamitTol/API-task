const express = require("express");
const noteController = require("./note-controller");


const NoteRouter = express.Router();

NoteRouter.route("/")
.get(noteController.getAllnotes);

NoteRouter.route("/:note_id")
.get(noteController.getNote)
.post(noteController.postNote)
.put(noteController.updateNote)
.delete(noteController.deleteNote);



module.exports = NoteRouter;