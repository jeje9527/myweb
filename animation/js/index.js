var oLi = document.getElementsByClassName('item');
var oImg = document.getElementsByTagName('img');
var delay = 0;
//为图片绑定css
for (var i = 0;i < oImg.length;i++){
        delay += 0.2;
        oImg[i].style.animationDelay = delay+"s"
}
//为li绑定事件
for(var i = 0;i < oLi.length;i++){
    oLi[i].onmouseenter = inLi;
    oLi[i].onmouseleave=outLi;
}
//进入Li
function inLi(e) {
    var dir = getDir(e,this);
var oDes = this.getElementsByClassName('des')[0];
    oDes.className = "des";
    switch(dir){
        case 0:
            oDes.classList.add('in-top');
            break;
        case 1:
            oDes.classList.add('in-right');
            break;
        case 2:
            oDes.classList.add('in-bottom');
            break;
        case 3:
            oDes.classList.add('in-left');
            break;
    }

}
//离开Li
function outLi (e){
    var dir = getDir(e,this);
    var oDes=this.getElementsByClassName('des')[0];
    oDes.className="des";
    switch(dir){
        case 0:
            oDes.classList.add('out-top');
            break;
        case 1:
            oDes.classList.add('out-right');
            break;
        case 2:
            oDes.classList.add('out-bottom');
            break;
        case 3:
            oDes.classList.add('out-left');
            break;

    }

}
//获取进入/离开Li的方向
function getDir(e,ele) {
    var w = ele.offsetWidth, 
        h = ele.offsetHeight;
    var x = (e.offsetX - w/2)*(w > h ? h/w :1),
        y = (e.offsetY - h/2)*(h > w ? w/h :1);
    var d = Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90+3)%4  ;
    return d;
}
