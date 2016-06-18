function Cell(id) {
  this.id = id;
  this._val = ";";

  this.SetValue = function(value) {
    this._val = value;
    $("#" + this.id).attr("src", "res/"+ value + ".jpg");
  };
  
  this.GetValue = function(){
    return this._val;
  };
}


/*var ttt = ttt || {};
ttt.cell = function(ID){
  this.val = "";
  this.ind = "";
  this.id = ID;
  this.GetPhoto = function(){
    return this.photo;
  };
  this.SetValue = function(val){
    this.val = val;
    $("#" + this.id).attr("src", "res/"+ val + ".jpg";);
  };
};*/
