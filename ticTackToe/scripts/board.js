function Board(){
  this._a1 = new Cell("a1");
  this._a2 = new Cell("a2");
  this._a3 = new Cell("a3");
  this._b1 = new Cell("b1");
  this._b2 = new Cell("b2");
  this._b3 = new Cell("b3");
  this._c1 = new Cell("c1");
  this._c2 = new Cell("c2");
  this._c3 = new Cell("c3");

  this._cells = [this._a1, this._a2, this._a3, this._b1, this._b2, this._b3,
    this._c1, this._c2, this._c3];

  this.combos = [
    [this._a1, this._a2, this._a3],
    [this._b1, this._b2, this._b3],
    [this._c1, this._c2, this._c3],
    [this._a1, this._b1, this._c1],
    [this._a2, this._b2, this._c2],
    [this._a3, this._b3, this._c3],
    [this._a1, this._b2, this._c3],
    [this._a3, this._b2, this._c3]
  ];

  this.SetCell = function(id, value) {
    for (let i = 0; i < this._cells.length; i++) {
      if(this._cells[i].id === id){
        this._cells[i].SetValue(value);
        return;
      }
    }
  };
  
  this.CheckWin = function(){
    var check = "";
    var strToCheck;
    var currentCombo;
    for(var i = 0; i < this.combos.length; i++){
      for(var j = 0; j < this.combos[i].length; j++){
        check += this.combos[i][j].GetValue();
      }
      strToCheck = "x";
      currentCombo = new Utilities().Locate(check, strToCheck);
      if(currentCombo.length == 3){
        return "X";
      }
      strToCheck = "o";
      currentCombo = new Utilities().Locate(check, strToCheck);
      if(currentCombo.length == 3){
        return "O";
      }
      strToCheck = ";";
      currentCombo = new Utilities().Locate(check, strToCheck);
      return null;
    }
    
  };

};
