var target2=document.getElementsByClassName('target2')[0]
var val=document.getElementsByClassName('val')[0];
var text=document.getElementsByClassName('text')[0];
var flie;
var step=1024*1024;
var reader=new FileReader();
var loaded=0;
var total;
var start=0;
target2.addEventListener("dragover",function(e){
    e.preventDefault();
})
target2.addEventListener("drop",function(e){
    e.preventDefault();   
        file=e.dataTransfer.files[0];
        total=file.size;
        readBlob(reader,0,start+step);
        bindFile()
})
function readBlob(reader,start,step){
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

         if(loaded<total){
         readBlob(reader,loaded,step);
         }
        //  if(loaded==total){
        //     setTimeout(alert("上传成功"), 10000); 
        //  }
  }
}
bindFile()
function onprogress(num){
    loaded+=num;
    var per=loaded/total;
    val.style.width=per*250+"px";
    text.innerHTML=Math.round(per*100)+"%";

    
}
