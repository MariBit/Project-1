var titles  = [];
var names   = [];

var listNote=[
	{title:"jhjhjhjhj",name:"fgd"},
	]

var titleInput  = document.getElementById("title");
var nameInput   = document.getElementById("name");

var messageBox  = document.getElementById("display");

function insert( ) {
 titles.push( titleInput.value );
 names.push( nameInput.value );
 listNote.push( {title:titleInput.value, name:nameInput.value});

console.log(listNote[listNote.length -1].title, listNote[listNote.length -1].name);

}

function clearAndShow( ) {
 /* // Clear our fields
  titleInput.value = "";
  nameInput.value = "";

  // Show our output
  messageBox.innerHTML = "";
  messageBox.innerHTML += "Title: " + titles.join(", ") + "<br/>";
  messageBox.innerHTML += "Story: " + names.join(", ") + "<br/>";*/

var display= document.getElementById("list")
var checkbox = document.createElement('input');
checkbox.type= 'checkbox';
checkbox.name='list'
var li=document.createElement("li");
var t1= document.createTextNode(titleInput.value +"," +nameInput.value);
li.appendChild(checkbox);
li.appendChild(t1);
display.appendChild(li);

}

function delBoxes(){
    var ul = document.getElementById('list');
    var boxes = document.getElementsByTagName('input');
    var texts = document.getElementsByTagName('li');
    for(var i = 0; i<boxes.length; i++){
        var box = boxes[i];
        var text= texts[i];
        console.log(text);
        //var text= ul.childNodes[i];
        if(box.checked){
            box.parentNode.removeChild(text);
            box.parentNode.removeChild(box);
            //ul.removeChild(text);
            ////ul.removeChild(text);
            //ul.removeChild(ul.childNodes[0]);
        }
    }
}
/*
var title=new Array();
var name=new Array();

function insert(){
    var titleValue = document.getElementById('title').value;
    var storyValue = document.getElementById('name').value;

    title[title.length]=titleValue;
    names[names.length]=storyValue;
          }

function show() {
  var content="<b>All Elements of the Arrays :</b><br>";
  for(var i = 0; i < title.length; i++) {
     content +=title[i]+"<br>";
  }
  for(var i = 0; i < names.length; i++) {
     content +=names[i]+"<br>";
  }
  document.getElementById('display').innerHTML = content;
}
*/
