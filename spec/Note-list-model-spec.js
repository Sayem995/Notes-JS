function noteListIsInitiallyEmpty() {
  var notelist = new NoteList();
  assert.isTrue(notelist.all.length === 0);
};

noteListIsInitiallyEmpty()
