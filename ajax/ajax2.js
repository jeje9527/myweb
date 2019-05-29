function ajax(method,url,callback,data,flag){
    var xml = null;

    if(window.XMLHttpRequest){
    xml = new XMLHttpRequest();
    }else{
        xml = new ActiveXObject('Microsoft.XmlHttp');
    }
    if (method == 'GET'){
        xml.open(method,url,flag);
        console.log(url);

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

