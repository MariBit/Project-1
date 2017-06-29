var titles  = [];
var names   = [];
var notepad = [{title:"hello", name:"bye"}];

function init(){
  console.log("Once when a lion, the king of the jungle, was asleep, a little mouse began running up and down on him. This soon awakened the lion, who placed his huge paw on the mouse, and opened his big jaws to swallow him. Pardon, O King! cried the little mouse. Forgive me this time. I shall never repeat it and I shall never forget your kindness. And who knows, I may be able to do you a good turn one of these days! The lion was so tickled by the idea of the mouse being able to help him that he lifted his paw and let him go. Sometime later, a few hunters captured the lion, and tied him to a tree. After that they went in search of a wagon, to take him to the zoo. Just then the little mouse happened to pass by. On seeing the lion’s plight, he ran up to him and gnawed away the ropes that bound him, the king of the jungle. Was I not right? said the little mouse, very happy to help the lion.");
}
init();
var listNote=[
	{title:" The Lion and the Mouse",name:"Once when a lion, the king of the jungle, was asleep, a little mouse began running up and down on him. This soon awakened the lion, who placed his huge paw on the mouse, and opened his big jaws to swallow him. Pardon, O King! cried the little mouse. Forgive me this time. I shall never repeat it and I shall never forget your kindness. And who knows, I may be able to do you a good turn one of these days! The lion was so tickled by the idea of the mouse being able to help him that he lifted his paw and let him go. Sometime later, a few hunters captured the lion, and tied him to a tree. After that they went in search of a wagon, to take him to the zoo. Just then the little mouse happened to pass by. On seeing the lion’s plight, he ran up to him and gnawed away the ropes that bound him, the king of the jungle. Was I not right? said the little mouse, very happy to help the lion."},
	]

var titleInput  = document.getElementById("title");
var nameInput   = document.getElementById("name");

var messageBox  = document.getElementById("display");

function insert( ) {
 titles.push( titleInput.value );
 names.push( nameInput.value );
 listNote.push( {title:titleInput.value, name:nameInput.value});

console.log(listNote[listNote.length -1].title, listNote[listNote.length -1].name);
notepad.push({title:titleInput.value, name:nameInput.value});
console.log(notepad);
}

function clearAndShow( ) {
var display= document.getElementById("list")
var checkbox = document.createElement('input');
checkbox.setAttribute('type','checkbox');
checkbox.setAttribute('class','check');
var li=document.createElement("li");
var t1= document.createTextNode("Title: "+titleInput.value +",    \nNote: " +nameInput.value);
li.appendChild(checkbox);
li.appendChild(t1);
display.appendChild(li);

}

function delBoxes(){
    var ul = document.getElementById('list');
    var boxes = document.getElementsByClassName('check');
    var texts = document.getElementsByTagName('li');
    for(var i = 0; i<boxes.length; i++){
        var box = boxes[i];
        var text= texts[i];
        console.log(text);
        if(box.checked){
            text.parentNode.removeChild(text);
            notepad=notepad.slice(i,1);
            console.log(notepad);

        }
    }

}
function myFunction() {
document.getElementById("form").reset();
}
