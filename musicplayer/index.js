var oAudio=document.getElementById('audio'),
    oCurrentTime=document.getElementsByClassName('current-time')[0],
    oAllTime=document.getElementsByClassName('all-time')[0],
    oBtn=document.getElementsByClassName('btn')[0],
    oBtnIcon=oBtn.getElementsByClassName('iconfont')[0],
    oActive=document.getElementsByClassName('pro-active')[0],
    timer,
    duration,
    allWidth=232;
    oAudio.src="music/3.mp3";
oAudio.onloadedmetadata=function (){
    console.log('hhh');
    duration=this.duration;
    oCurrentTime.innerHTML=conversion(0);
    oAllTime.innerHTML=conversion(duration);
};
function conversion(time){
    var sec=parseInt(time%60) < 10 ? "0" + parseInt(time%60):parseInt(time%60);
    var min=parseInt(time/60) < 10 ? "0" + parseInt(time/60):parseInt(time/60);
    return min+":"+sec;
}
oBtn.onmouseup=function (){
    if(oAudio.paused){
        oAudio.play();
        oBtnIcon.classList.remove('icon-bofang');
        oBtnIcon.classList.add('icon-iconset0482');
        timer=setInterval(run,100);
    }
    else{
        oAudio.pause();
        oBtnIcon.classList.remove('icon-iconset0482');
        oBtnIcon.classList.add('icon-bofang');
        clearInterval(timer);
    }
};
function run(){
    oActive.style.width=(oAudio.currentTime/duration)*allWidth+'px';
}