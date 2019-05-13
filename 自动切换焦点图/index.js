var leftImg=document.getElementById('left').getElementsByTagName('img');
var rightImg=document.getElementById('right').getElementsByTagName('img');
var pointer=document.getElementById('pointer');
var left=document.getElementById('left');
// left.onmouseleave=function(){
//     console.log("out")
// if(stop==true){setTimeout(function(){
//    clearInterval(timer2);
// clearTimeout(timer3)
// timer2=setInterval(moveLoop,10)
//  },1000)}
// };
var n=0;
var stop=false;
var go=false;
for (var i=0;i<leftImg.length;i++){
    leftImg[i].onmouseover=show;
  
    leftImg[i].index=i;
}
function show(){
    clearInterval(timer2);
    clearTimeout(timer3)
    if(stop==true&go==false){
        clearInterval(timer);
        stop=false;
        return ;
    }
    if(stop==false){
        stop=true
    thisTop=this.offsetTop;
    for(var i=0;i<rightImg.length;i++){
        rightImg[i].className="";
    }
    rightImg[this.index].className="show";
    timer=setInterval(move,10);
    }
}
function move(){
    go=true;
    if(thisTop>pointer.offsetTop){
        pointer.style.top=pointer.offsetTop+1+"px";
    }
    if(thisTop<pointer.offsetTop){
        pointer.style.top=pointer.offsetTop-1+"px";
    }
    if(thisTop==pointer.offsetTop){
        pointer.style.top=thisTop;
        go=false;
        show();
    };
    n++;
 }
 var speed=1;

 function moveLoop(){
    pointer.style.top=pointer.offsetTop+speed+"px";
    if(pointer.offsetTop==leftImg[1].offsetTop){
        clearInterval(timer2);
        timer3=setTimeout(toMove,2000);
    }
    if(pointer.offsetTop==leftImg[2].offsetTop){
        clearInterval(timer2);
        speed=-1;
        timer3=setTimeout(toMove,2000);
    }
    if(pointer.offsetTop==leftImg[0].offsetTop){
        clearInterval(timer2);
        speed=1;
        timer3=setTimeout(toMove,2000);
    }
 }
 function toMove(){
     if(stop==false){
         console.log("jj")
    timer2=setInterval(moveLoop,10)
     }
 }
 timer2=setInterval(moveLoop,10)


