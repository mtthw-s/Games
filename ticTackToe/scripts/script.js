$(document).ready(function(){
  var board = new Board();
  var winner = null;
  var pMarker = null;
  var cMarker = null;
  var cells = [new Cell("a1"), new Cell("a2"), new Cell("a3"),
    new Cell("b1"), new Cell("b2"), new Cell("b3"), new Cell("c1"),
    new Cell("c2"), new Cell("c3")];
  /*var board = [["a1","a2","a3"],["b1","b2","b3"],["c1","c2","c3"],["a1","b1","c1"],
    ["a2","b2","c2"],["a3","b3","c3"],["a1","b2","c3"],["a3","b2","c1"]];*/

  (function( $ ){
     $.fn.myfunction = function() {
        alert('hello world');
     };
   })( jQuery );

  $(".select").click(function(){
    var playerVal = $('input[type="radio"]:checked').val();
    if(playerVal === "X"){
      pMarker = playerVal
      cMarker = "O";
    }else{
      pMarker = "O";
      cMarker = "X";
    }
  });

  /*var SetCell = function(id, marker){
    for(var i = 0; i < cells.length; i++){
      if(cells[i].id == id){
        cells[i].SetPhoto(marker);
        return;
      }
    }
  };*/

  /*var compTurn = function(){
    var cellgroup = [];
    var valGroup = [];
    var tmpMove = null;
    for(var i = 0; i < board.length; i++){
      for(var j = 0; j < board[i].length; j++){
        for(var k = 0; k < cells.length; k++){
          if(cells[k].id === board[i][j]){
            cells.ind = k;
            cellGroup.add(cells[k]);
          }
        }
        for(var l = 0; l < 3; l++){

        }
      }
      if(win === "XXX"){
        return "X";
      }
      else if(win === "OOO"){
        return "O";
      }
      else{
        win = "";
      }
    }
    return null;
  }*/

  $("img").click(function(){
    if(pMarker === null){
      alert("You must select a marker!");
      return;
    }
    if($(this).attr('src').indexOf("quest") < 0){
      return;
    }
    board.SetCell($(this).attr('id'), pMarker);
    var position = $(this).attr('id');
    winner = board.CheckWin();
    if(winner != null){
      alert("Game over!\n" + winner + " Won!");
    }else{
      //compTurn();
    }
  });
});



/*var checkWin = function(){
  var win = "";
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board[i].length; j++){
      for(var k = 0; k < cells.length; k++){
        if(cells[k].id === board[i][j]){
          win += cells[k].val;
          break;
        }
      }
    }
    if(win === "XXX"){
      return "X";
    }
    else if(win === "OOO"){
      return "O";
    }
    else{
      win = "";
    }
  }
  return null;
};*/
