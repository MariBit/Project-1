var titles  = [];
var names   = [];
var notepad = [{title:"hello", name:"bye"}];

function init(){
  var image ="../IMG/phone.jpg";
  var note1= $('ul').append(
    '<li class="drag" draggable="true">' +'<img src =../IMG/cancel-music-2.svg class="deleteMe">'+
      "<p>Title: Ex. Phone Number"+'<br>'+ " Note: Bob Bennett:+(30)6986962631"+'</p>'+'<br>'+
        '<img class="chosen" src='+image +'/>'+'<br>'+
      '<p id="source"> Icon made by <a href="http://www.freepik.com" target="_blank" >Freepik</a> from <a href ="http://www.flaticon.com" target ="_blank"> www.flaticon.com</a></p>'+
    '</li>');

  console.log("Once when a lion, the king of the jungle, was asleep, a little mouse began running up and down on him. This soon awakened the lion, who placed his huge paw on the mouse, and opened his big jaws to swallow him. Pardon, O King! cried the little mouse. Forgive me this time. I shall never repeat it and I shall never forget your kindness. And who knows, I may be able to do you a good turn one of these days! The lion was so tickled by the idea of the mouse being able to help him that he lifted his paw and let him go. Sometime later, a few hunters captured the lion, and tied him to a tree. After that they went in search of a wagon, to take him to the zoo. Just then the little mouse happened to pass by. On seeing the lion’s plight, he ran up to him and gnawed away the ropes that bound him, the king of the jungle. Was I not right? said the little mouse, very happy to help the lion.");
    $('.drag').draggable();
}



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

//$( drag );


$(document).ready(
    function(){
      //drag();
      init();
        $('#button').on('click',addNote);
        $('#list').on('click','.deleteMe',deleteNote);
        $('#imgInp').on('click', readURL(this));

        adaptHeight();

  });


 function adaptHeight(){
   //console.log($(document). height());
   var height = $(document). height();
   $('body').css('height',height);
   //console.log($('body').height());

 }

    function addNote(){
      var toAdd = $('input[name=title]').val();
      var toAdd2 =$('input[name=name]').val();
      //var image ="../IMG/example.jpg";

      var image = "../IMG/" + $('#imgInp').val().replace(/C:\\fakepath\\/i, '');





      console.log("I am the 1 loop");
      var note= $('ul').append(
        '<li class="drag" draggable="true">' +'<img src =../IMG/cancel-music-2.svg class="deleteMe">'+
          "<p>Title: "+ toAdd +'<br>'+" Note: "+ toAdd2 +'<br>'+
          '<img class="chosen" src='+image +'/>'+'<br>'+
          //alt="not available"
          '</p>'+'<p id="source"> Icon made by <a href="http://www.freepik.com" target="_blank" >Freepik</a> from <a href ="http://www.flaticon.com" target ="_blank"> www.flaticon.com</a></p>'+
        '</li>');
      console.log("I am the  2 loop");
        $('.drag').draggable();

        adaptHeight();
    }

    function readURL(input) {
           if (input.files && input.files[0]) {
               var reader = new FileReader();

               reader.readAsDataURL(input.files[0]);
           }
       }

    function deleteNote(){
      var note = $(this)
      console.log("class class");
      $(this).closest("li").remove();
    }




function myFunction() {
document.getElementById("form").reset();
}

var importance = document.getElementById('myList');
importance.onchange = runBackgroundChange;

function runBackgroundChange(first){
    var value = first.srcElement.options[first.srcElement.selectedIndex].value;
    if (value != 1) {
        document.getElementById('myList').style.backgroundColor="orange";
        console.log("option1");
    } else {
        document.getElementById('myList').style.backgroundColor="red";
        console.log("option2");
    };
}




/*
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
$(document).ready(function(){
$(function() {
    var counter = 0;
    var toAdd = $('input[name=title]').val();
    var toAdd2 =$('input[name=name]').val();
    $('#button').click(function() {
        var noteBox= $('ul').append('<li>' +"Title: "+ toAdd +" Note: \n"+toAdd2+ '</li>'),
            removeButton = $('<input type="button" value="delete" id="removebtn' + (counter)+'"/>'),
           containerLi = $("<li/>");
            removeButton.click(function(e) {
            e.preventDefault();
            containerLi.remove();
        });
        containerDiv
            .append(noteBox)
            .append(removeButton);
        counter++;
        $("li").append(containerLi);
    });
  });
});
*/
