var target2=document.getElementsByClassName('target2')[0]
var val=document.getElementsByClassName('val')[0];
var text=document.getElementsByClassName('text')[0];
var flie;
var step=1024*500;
var reader=new FileReader();
var loaded;
var total;
target2.addEventListener("dragover",function(e){
    e.preventDefault();
})
target2.addEventListener("drop",function(e){
    e.preventDefault();   
        file=e.dataTransfer.files;
        total=file.size;
        readBlob();
        bindFile()
})
function readBlob(){
    if(file.slice){
        var blob=file.slice(start,start+step);
    }
    else{
        var blob=file;
    }
        reader.readAsText(blob);
}
function bindFile(){
    reader.onprogress=function(e){
        onprogress(e.loaded)

    }
    reader.onload=function (){

    }
}
bindFile()
function onprogress(num){
    loaded+=num;
    var per=Math.round(loaded/total*100);
    val.style.width=per*250+"px";
    text.innerHTML=per+"%"; 
    
}
