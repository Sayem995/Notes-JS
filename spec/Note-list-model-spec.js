function noteListIsInitiallyEmpty() {
  var notelist = new NoteList();
  assert.isTrue(notelist.all.length === 0);
};

noteListIsInitiallyEmpty()

function noteListStoresSingleNote(){
  var notelist = new NoteList();
  notelist.create('my favourite language is ruby');
  assert.isTrue(notelist.all.length === 1);
};

noteListStoresSingleNote()
