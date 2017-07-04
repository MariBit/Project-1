/*This is the main function that adds all content. It adapts the height and makes the buttons work.*/
$(document).ready(
    function(){
      init();
        $('#button').on('click',addNote);
        $('#list').on('click','.deleteMe',deleteNote);
        $('#imgInp').on('click', readURL(this));

        adaptHeight();

});
/*Universal variables*/
var titles  = [];
var names   = [];
var notepad = [{title:"hello", name:"bye"}];


var listNote=[
	{title:" The Lion and the Mouse",name:"Once when a lion, the king of the jungle, was asleep, a little mouse began running up and down on him. This soon awakened the lion, who placed his huge paw on the mouse, and opened his big jaws to swallow him. Pardon, O King! cried the little mouse. Forgive me this time. I shall never repeat it and I shall never forget your kindness. And who knows, I may be able to do you a good turn one of these days! The lion was so tickled by the idea of the mouse being able to help him that he lifted his paw and let him go. Sometime later, a few hunters captured the lion, and tied him to a tree. After that they went in search of a wagon, to take him to the zoo. Just then the little mouse happened to pass by. On seeing the lion’s plight, he ran up to him and gnawed away the ropes that bound him, the king of the jungle. Was I not right? said the little mouse, very happy to help the lion."},
	]

var titleInput  = document.getElementById("title");
var nameInput   = document.getElementById("name");
var messageBox  = document.getElementById("display");

/*Init function makes the first li (note), without the loop. Default data.*/
function init(){
  var image ="../IMG/phone.jpg";
  var note1= $('ul').append(
    '<li class="drag" draggable="true">'+'<p class="date">'+"2017-07-1"+'</p>' +'<br>' +'<img src =../IMG/cancel-music-2.svg class="deleteMe">'+
        '<br>'+"<p>Title: Ex. Phone Number"+'<br>'+ " Note: Bob Bennett: +(30)6986962631"+'</p>'+'<br>'+
        '<img class="chosen" src='+image +'/>'+'<br>'+
      '<p id="source"> Icon made by <a href="http://www.freepik.com" target="_blank" >Freepik</a> from <a href ="http://www.flaticon.com" target ="_blank"> www.flaticon.com</a></p>'+
    '</li>');

    console.log("Once when a lion, the king of the jungle, was asleep, a little mouse began running up and down on him. This soon awakened the lion, who placed his huge paw on the mouse, and opened his big jaws to swallow him. Pardon, O King! cried the little mouse. Forgive me this time. I shall never repeat it and I shall never forget your kindness. And who knows, I may be able to do you a good turn one of these days! The lion was so tickled by the idea of the mouse being able to help him that he lifted his paw and let him go. Sometime later, a few hunters captured the lion, and tied him to a tree. After that they went in search of a wagon, to take him to the zoo. Just then the little mouse happened to pass by. On seeing the lion’s plight, he ran up to him and gnawed away the ropes that bound him, the king of the jungle. Was I not right? said the little mouse, very happy to help the lion.");
  $('.drag').draggable();
}


/*Saves data to put together. User does not use this, but needed.  */
function insert( ) {
 titles.push( titleInput.value );
 names.push( nameInput.value );
 listNote.push( {title:titleInput.value, name:nameInput.value});

  console.log(listNote[listNote.length -1].title, listNote[listNote.length -1].name);
  notepad.push({title:titleInput.value, name:nameInput.value});
  console.log(notepad);
}


/*Adapts height for li to fit inside background */
function adaptHeight(){
 var height = $(document). height();
  $('body').css('height',height);
 }

/*Puts together all information: title, note, picture, caption, changes background and makes notes draggable.
*/
function addNote(){
  var toAdd = $('input[name=title]').val();
  var toAdd2 =$('input[name=name]').val();
  var color = $('#colorChange').val();
  //var image ="../IMG/example.jpg";
  var date = new Date().toISOString().slice(0,10);
      console.log(color , date);
  var image = "../IMG/" + $('#imgInp').val().replace(/C:\\fakepath\\/i, '');

  var note= $('ul').append(
        '<li class="drag" draggable="true" style="background-color:' + color + '">'+'<p class="date">'+date+'</p>' +'<br>'+'<img src =../IMG/cancel-music-2.svg class="deleteMe">'+
          '<br>'+ "<p>Title: "+ toAdd +'<br>'+" Note: "+ toAdd2 +'<br>'+'<br>'+
          '<img class="chosen" alt="Not Applicable" src='+image +'/>'+'<br>'+
          '</p>'+'<p id="source"> Icon made by <a href="http://www.freepik.com" target="_blank" >Freepik</a> from <a href ="http://www.flaticon.com" target ="_blank"> www.flaticon.com</a></p>'+
        '</li>');

  $('.drag').draggable();
  adaptHeight();
}

/*Imports data from computer*/
function readURL(input) {
   if (input.files && input.files[0]) {
        var reader = new FileReader();
         reader.readAsDataURL(input.files[0]);
       }
}



/*Deletes note*/
function deleteNote(){
      var note = $(this)
      console.log("class class");
      $(this).closest("li").remove();
}

/*Resets form- title, note and file*/
function myFunction() {
document.getElementById("form").reset();
  console.log("reset ");
}
