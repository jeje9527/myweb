var scene=document.getElementById('scene');
var hammer=document.getElementById('hammer');
var hollow1=document.getElementById('hollow1');
var mouse1=hollow1.getElementsByTagName('img')[0];
var input1=document.getElementById('input1');
var input2=document.getElementById('input2');
var result=document.getElementById('result');
var time=60;
timer=setInterval(function(){
    time-=1;
    input2.innerHTML=time;
    if (time==0){
        clearInterval(timer2);
        clearInterval(timer);
        result.style.display="block"
        result.innerHTML="厉害了，您的成绩是一分钟消灭"+input1.innerHTML+"只地鼠";
     }
},2000);
scene.onmousedown=function (){
    hammer.src="hammer2.png";
};
scene.onmouseup=function(){
    hammer.src="hammer1.png";
};
scene.onmousemove=function(e){
    var x=e.clientX;
    var y=e.clientY;
    hammer.style.top=y+"px";
    hammer.style.left=x+"px";
};
var point=0;
scene.onclick=function(e){
    var x=e.clientX;
    var y=e.clientY;
    var x1=mouseAry[mouseID].offsetLeft+hollowAry[mouseID].offsetLeft;
    var x2=x1+hollowAry[mouseID].offsetWidth;
    var y1=mouseAry[mouseID].offsetTop+hollowAry[mouseID].offsetTop;
    var y2=hollowAry[mouseID].offsetTop+hollowAry[mouseID].offsetHeight;
    if(x1<x&x<x2&y1<y&y<y2){
        mouseAry[mouseID].src="mouse2.png";
        point++;
        input1.innerHTML=point;
    }
}
var loopTime=30;
var mouseLoop=setInterval(mouseShow,loopTime);
var initTop=102;
var newTop=0;
var nowTop=102;
var waitTime=0,waitMaxTime=1500;
var mouseAry=[];
var hollowAry=[];
var mouseID=parseInt(Math.random()*9);
for (i=0;i<9;i++){
    hollowAry[i]=document.getElementById("hollow"+(i+1));
    mouseAry[i]=hollowAry[i].getElementsByTagName('img')[0];
}
var timer2=setInterval(function(){
    mouseID=parseInt(Math.random()*9);
    mouseLoop=setInterval(mouseShow,loopTime);
},2000);
function mouseShow(){
if(nowTop>newTop){
    nowTop=nowTop-10;
}
if (nowTop<newTop){
    nowTop=newTop;

}
if(nowTop==newTop){
    if(waitTime<waitMaxTime){
        waitTime+=loopTime;
    }
    if (waitTime>=waitMaxTime){
        nowTop=initTop;
        clearInterval(mouseLoop)
        waitTime=0;
        mouseAry[mouseID].src="mouse1.png";
    }
}
mouseAry[mouseID].style.top=nowTop+"px";

}
//得分
