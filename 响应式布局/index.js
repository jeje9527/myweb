var more=document.getElementsByClassName('more')[0];
var list=document.getElementsByClassName('list')[0];
var info=document.getElementsByClassName('info')[0];
more.onclick=function(){
    if(document.getElementsByClassName('show').length>0){
        list.classList.remove('show');
        info.style.top=44+"px";
    }
    else{
        list.classList.add('show');
        info.style.top=223+"px";
    }
};