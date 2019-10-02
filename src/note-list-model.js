(function(exports){
  function NoteList(){
    this.all = [];
  }
  NoteList.prototype.create = function(notetext){
    var note = new Note(notetext);
    this.all.push(note);
  }
  exports.NoteList = NoteList;
})(this);
