var aList=document.getElementsByClassName('container')[0].getElementsByTagName('a');
var showList=function (){
        this.className="show";
        var liList=this.getElementsByTagName('li');
        if (liList.length>5){
            this.className="bigger";
        }
        if(liList.length>10){
            this.className="biggest";
        }
    };
var hidenList=function (){
    this.className="";
};
for (var i=0;i<aList.length;i++){
    aList[i].onmouseover=showList;
    aList[i].onmouseout=hidenList;
}