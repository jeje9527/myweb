var oDiv=document.getElementsByClassName("container")[0]
    .getElementsByTagName('div')
console.log(oDiv)
var step=500,
    semi=0,
    speed=0,
    up,
    down;
    flag=true;

for (var i = 0;i<oDiv.length;i++){
    step-=1;
    semi=0;
   var w=step,
       h=step;
    oDiv[i].style.width=w+"px";
    oDiv[i].style.height=h+"px";
    oDiv[i].style.marginLeft=-(w/2)+"px";
    oDiv[i].style.marginTop=-(h/2)+"px";
    if (flag){
            semi++;
            up=speed
        oDiv[i].style.transform = "translateZ("+up+"px)";
        speed+=1;
        flag=!flag;
        console.log("up="+up)
        console.log("flag="+flag)

    }
    else{
        down=-(speed)
        oDiv[i].style.transform = "translateZ("+down+"px)";
        speed+=1;
        flag=!flag;
        console.log("down="+down)

    }
   

}