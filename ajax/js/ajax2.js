function ajax(method,url,callback,data,flag){
    var xml = null;
    if(window.XMLHttpRequest){
    xml = new XMLHttpRequest();
    }else{
        xml = new ActiveXObject('Microsoft.XmlHttp');
    }
    method=method.toUpperCase();    
    if (method == 'GET'){
        var date=new Date();
        var timer= date.getTime();
        xml.open(method,url+'?'+data+'&timer='+timer,flag);
        xml.send();
    }else if(method == 'POST'){
        xml.open(method,url,flag);
        xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xml.send(data);        
    }  
    xml.onreadystatechange=function (){
        if(xml.readyState == 4){
            if(xml.status == 200){

                callback(xml.responseText);
            }
        }
    };
}

