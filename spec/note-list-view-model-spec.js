function noteListViewAcceptsNoteListObject() {
  var notelist = new NoteList();
  notelist.create('Note1');
  notelist.create('Note2');
  var notelistview = new NoteListView();
  assert.isTrue(notelistview.returnHtml(notelist) ===
    "<ul><li><div>Note1</div></li><li><div>Note2</div></li></ul>")
}

noteListViewAcceptsNoteListObject()
