(function(exports) {
  function NoteController(NoteList) {
    console.log(NoteList);

    var notelist = new NoteList;
    notelist.create("Favourite drink: seltzer");
    console.log(notelist);

    var notelistview = new NoteListView;
    notelistview.returnHtml(notelist);

    console.log(notelistview.returnHtml(notelist));

console.log(document.getElementById("app").innerHTML = notelistview.returnHtml(notelist));
};
exports.NoteController = NoteController;
})(this);
NoteController(NoteList);
