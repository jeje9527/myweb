function ajax(){
    var xml = null;
    if(window.XMLHttpRequest){
    xml = new XMLHttpRequest();
    }else{
        xml = new ActiveXObject('Microsoft.XmlHttp');
    }
    console.log(xml);
    xml.open('GET','data.json',true);
    xml.send();
    xml.onreadystatechange=function (){
        console.log(xml.readyState);
    }
}
ajax();