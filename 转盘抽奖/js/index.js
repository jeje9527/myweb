var start=document.getElementById('start');
var tdAry=document.getElementById('table').getElementsByTagName('td');
var result=document.getElementById('result');
var tdID=0;
var idAry=[0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5];
var or=false; 
var runNum=0;
var up=0;
//取随机数函数
function random(min,max){
    return parseInt(Math.random()*(max-min)+min);
}
//抽奖概率,即取中id
function resultNum(){
    array1=[1,3,5,14,15,24];
    array2=[0,4,19,21];
    array3=[2,10,23];
    array4=[20,9];
    array5=[22];
    //连中6次谢谢，下次必中奖
    if(random(0,1000)<900&up<6){
        return array1[parseInt(Math.random()*array1.length)];
    }
    else if(random(0,1000)<990){
        return array2[parseInt(Math.random()*array2.length)]; 
    }
    else if(random(0,1000)<997){
        return arra3[parseInt(Math.random()*array3.length)]; 
    }
    else if(random(0,1000)<999){
        return array4[parseInt(Math.random()*array4.length)]; 
    }
    else if(random(0,1000)==999){
        return array5[parseInt(Math.random()*array5.length)]; 
    }
}
//开始抽奖
start.onclick=function (){
    if(or==false){
       result.style.display="none";
        start.innerHTML="开奖中";
    tdAry[idAry[tdID]].className="";
    tdID=0;
    tdAry[idAry[tdID]].className="selected";
   maxNum=16*3+idAry.indexOf(resultNum());//中奖id在数组中的位置
    timer=setInterval(run,200);
    or=true;
    }
};
//用于循环的函数
function run(){
    tdAry[idAry[tdID]].className="";
    if (tdID+1>=idAry.length){
        tdID=0;
    }
    else{tdID++;}
    tdAry[idAry[tdID]].className="selected";
    runNum++;
    if (runNum>=maxNum){
        start.innerHTML="开始";
       result.style.display="block";
       if(tdAry[idAry[tdID]].innerHTML=="谢谢"){
        result.innerHTML="感谢您的参与，再接再厉";
        up++;
       }
       else{ result.innerHTML="恭喜你中了"+tdAry[idAry[tdID]].innerHTML;
          up=0;
    }
       clearInterval(timer);
        runNum=0;
       or=false;
    }
    if(runNum==6){
        clearInterval(timer);
        timer=setInterval(run,20);
    }
    if(runNum>48){
        clearInterval(timer);
        timer=setInterval(run,200);
    }
}