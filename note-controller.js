
var noteDB = [];

class NoteController {

//just for this toy task - the note is only id;
    
      getAllnotes= (req,res)=>  { res.send(noteDB)};
      getNote = (req,res)=>{const id=req.params.note_id;
      res.send(noteDB.find(id))}
      postNote= (req,res)=>{noteDB.push(req.body);res.send("ok")}
      updateNote=(req,res)=>{id=req.params.note_id; noteInd=noteDB.indexOf(id); noteDB[noteInd]=id};
      deleteNote=  getNote = (req,res)=>{const id=req.params.note_id;
      noteDB.filter((note)=>note=id); res.send("ok")}}
      
      

const noteController = new NoteController();

module.exports = noteController;