function Utilities(){
    this.Locate = function(searchString, toBesearched) {
        var location;
        var index = 0;
        var ans = [];
        while((location = searchString.toLowerCase().indexOf(toBesearched, index)) > -1 ){
              ans.push(location);
              index++;
        }
        return ans;
    };
}