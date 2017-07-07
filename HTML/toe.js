/*Global Variables*/
var turn = 0;
var titles  = [];
var boxs = [];
var game = [];
var moves =0;
var isWinner=0;

/*Initializes game- and sets boxes equal to zero*/
function init(){
  console.log("Init function");
  var title = " ";
  game = [[0,0,0],[0,0,0],[0,0,0]];
  isWinner = 0;
  myFunction();
  $('.message').text("");
  $('.col').text("");
  turn=0;
  moves=0;
}

/*Assigns player and turns*/
function startGame(){
  if(moves>0){
    init();
  }
 console.log("Hello",$('#player1').val(),$('#player1').val());
  var player1= $('#player1').val();
  var player2 = $('#player2').val();
  var number = Math.floor(Math.random() * 10) + 1;
  var player ="";
    if ( player1  == ""){
        alert('Please assign players');
        console.log("if -1");
     }
     else if ( player2  == ""){
        alert('Please assign players');
        console.log("else if -1");
     }
        if ( player1 && player2 !="" && number <=3){
          var player = "player's 1";
          $('.message').text("It is "+ player + " turn");
          console.log("if-2");
          turn = 1;
        }
        else if (  player1 && player2 !="" && number> 3){
          var player = "player's 2";
          $('.message').text("It is "+ player + " turn");
          console.log("else if-2");
          turn = 2;
        }
}

/*Main function. Changes turns, puts value according to player, states result(win/draw).*/
$(document).ready(
  function(){
    init();
    $('.col').on('click',function(){

      var player1= $('#player1').val();
      var player2 = $('#player2').val();

        if((player1 && player2) == ""){
          alert("Please assign players and press Start Game");
          return;
        }
      var row = $(this).closest('.row').index();
      var column=$(this).index();

        if(game[row][column]!=0){
          alert("This spot has been chosen, please choose another one.");
          return ;
          }

        if(isWinner==1){
          $('.message').text("Play again");
          return;
            }
        if (turn == 1){
          $(this).text("X");
          game[row][column]=turn;
          moves++;
          isWinner=win(turn);
          console.log("is winner value:",isWinner);
            if(isWinner==0){
              if (moves < 9){
                console.log("enters here");
                turn=2;
                $('.message').text("It is Player 2's turn");
                console.log("check to win");
              }
              else{
              $('.message').text("Draw! Play Again. ");
              }
            }
        }
        else{
            $(this).text("O");
            game[row][column]=turn;
            moves++;
            isWinner=win(turn);
            console.log("is winner value:",isWinner);
            if(isWinner==0){
             if (moves < 9){
                  console.log("enters here 2");
                  turn=1;
                  $('.message').text("It is Player 1's turn");
                  console.log("check to win");
              }
            else{
              $('.message').text("Draw! Play Again. ");
              }
            }
        }

    });

});

/*States winner,*/
function win(turn){
  if( (game[0][0]==turn && game[0][1]==turn && game[0][2]) == turn||
      (game[1][0]==turn && game[1][1]==turn && game[1][2]) == turn||
      (game[2][0]==turn && game[2][1]==turn && game[2][2]) == turn||
      (game[0][0]==turn && game[1][0]==turn && game[2][0]) == turn||
      (game[0][1]==turn && game[1][1]==turn && game[2][1]) == turn||
      (game[0][2]==turn && game[1][2]==turn && game[2][2]) == turn||
      (game[0][0]==turn && game[1][1]==turn && game[2][2]) == turn||
      (game[0][2]==turn && game[1][1]==turn && game[2][0]) == turn){
        var player=turn;
        console.log(player);
        $('.message').text("Winner is Player "+ player);
        return 1;
      }
      else{
        return 0;
      }
}

/*Relates boxes to javascript*/
function playGame(){
  var column=$(this).index();
  var row = $(this).parent.index();
}

/*Resets function*/
function myFunction() {
document.getElementById("form").reset();
var player1= $('#player1').val();
var player2 = $('#player2').val();
}
