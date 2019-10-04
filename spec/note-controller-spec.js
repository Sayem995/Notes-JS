// debugger;
function testNoteControllerInnerHTML(){
  let innerHTML = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";

  try {
    let notelist = new NoteList;
    let notecontroller = new NoteController;
    let body = document.getElementByTagName("body");
    let dummyElement = document.createElement("div");
    dummyElement.id = "app";
    body.item(0).appendChild(dummyElement);

    notecontroller.insertHTMLToApp();
console.log(document.getElementById("app"));
    assert.isTrue(document.getElementById("app").innerHTML === innerHTML)
    body.item(0).removeChild(dummyElement);
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}
