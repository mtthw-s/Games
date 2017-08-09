function Utilities(){
    this.Locate = function(searchString, toBesearched) {
        var location;
        var index = 0;
        var ans = [];
        while((location = searchString[index].toLowerCase().indexOf(toBesearched, index)) > -1 ){
            if(index == location){
                ans.push(location);
            }
              index++;
        }
        return ans;
    };
}