(function(exports) {
  function NoteListView() {

  }

  NoteListView.prototype.returnHtml = function(notelist) {
    var notearray = notelist.all
    var htmlArray = ["<ul>"]
    for (let i = 0; i < notearray.length; i++) {
      htmlArray.push("<li><div>" + notearray[i].text + "</div></li>")
    }
    htmlArray.push("</ul>")
    return htmlArray.join("")
  }

  exports.NoteListView = NoteListView;
})(this);
