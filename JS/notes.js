var titles  = [];
var names   = [];
var notepad = [{title:"hello", name:"bye"}];

function init(){
  var note1= $('ul').append(
    '<li class="drag" draggable="true">' +'<img src =../IMG/cancel-music-2.svg class="deleteMe">'+
      "<p>Title: Ex. Phone Number"+'<br>'+ " Note:Bob Bennett:+(30)6986962631"+'</p>'+'<p id="source"> Icon made by <a href="http://www.freepik.com" target="_blank" >Freepik</a> from <a href ="http://www.flaticon.com" target ="_blank"> www.flaticon.com</a></p>'+
    '</li>');
  console.log("Once when a lion, the king of the jungle, was asleep, a little mouse began running up and down on him. This soon awakened the lion, who placed his huge paw on the mouse, and opened his big jaws to swallow him. Pardon, O King! cried the little mouse. Forgive me this time. I shall never repeat it and I shall never forget your kindness. And who knows, I may be able to do you a good turn one of these days! The lion was so tickled by the idea of the mouse being able to help him that he lifted his paw and let him go. Sometime later, a few hunters captured the lion, and tied him to a tree. After that they went in search of a wagon, to take him to the zoo. Just then the little mouse happened to pass by. On seeing the lion’s plight, he ran up to him and gnawed away the ropes that bound him, the king of the jungle. Was I not right? said the little mouse, very happy to help the lion.");
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

$(document).ready(
    function(){

      init();
          /*  $("input[name=ListItem]").keyup(function(event){
                      if(event.keyCode == 13){
                        $("#button").click();
                      }
                  });

                  $(document).on('dblclick','li', function(){
                    $(this).toggleClass('strike').fadeOut('slow');
                  });

                  $('input').focus(function() {
                    $(this).val('');
                  });

                    $('ol').sortable();*/
        $('#button').on('click',addNote);
        $('#list').on('click','.deleteMe',deleteNote);
  });

    function addNote(){
      var toAdd = $('input[name=title]').val();
      var toAdd2 =$('input[name=name]').val();

      console.log("I am the 1 loop");
      var note= $('ul').append(
        '<li class="drag" draggable="true">' +'<img src =../IMG/cancel-music-2.svg class="deleteMe">'+
          "<p>Title: "+ toAdd +'<br>'+" Note: "+ toAdd2 +'</p>'+'<p id="source"> Icon made by <a href="http://www.freepik.com" target="_blank" >Freepik</a> from <a href ="http://www.flaticon.com" target ="_blank"> www.flaticon.com</a></p>'+
        '</li>');
      console.log("I am the  2 loop");

    }

    function deleteNote(){
      var note = $(this)
      console.log("class class");
      $(this).closest("li").remove();
    }

    function drag() {
      //var note = $(this)
      console.log("drag drag drag");
      $( "li" ).draggable();
       $( "#droppable" ).droppable();
        }



function myFunction() {
document.getElementById("form").reset();
}

var importance = document.getElementById('myList');
importance.onchange = runBackgroundChange;

function runBackgroundChange(first){
    var value = first.srcElement.options[first.srcElement.selectedIndex].value;
    if (value != 2) {
        document.getElementById('myList').style.backgroundColor="orange";
    } else {
        document.getElementById('myList').style.backgroundColor="orange";
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
