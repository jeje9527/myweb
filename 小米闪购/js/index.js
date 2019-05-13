//鼠标移动到“下载APP”事件
var app=document.getElementById('app');
var box=document.getElementById('box');
var em=document.getElementsByTagName('em')[0];
var show=true;
app.onmouseover=function(){
   box.style.display="block";
   app.style.color="#fff";
};
box.onmouseover=function(){
    show=false;
    app.style.color="#fff";
};
em.onmouseover=function(event){
    event.cancelBubble=true;
    show=false;
};
em.onmouseleave=function(event){
    event.cancelBubble=true;
show=true;
};  
app.onmouseleave=function(){
    setTimeout(function() {if(show==true){
        box.style.display="none";
    app.style.color="#B0B0B0";   
    }
   },1);
};
box.onmouseleave=function(){
    box.style.display="none";
    show=true; 
    app.style.color="#B0B0B0"; 
};
// 购物车鼠标事件
var cart=document.getElementsByClassName('topbar-cart')[0];
var msg=document.getElementsByClassName('msg')[0];
cart.onmouseover=function(){
    msg.style.display="block";
};
cart.onmouseleave=function(){
    msg.style.display="none";
};
//秒杀栏点击事件
var banner=document.getElementById("banner");
var bannerLIst=banner.getElementsByTagName("li");
var goodsList=document.getElementById('goodsList').getElementsByTagName('ul');
var showList=function (){
    for(var i=0;i<bannerLIst.length;i++){
        bannerLIst[i].className="";
        goodsList[i].className="";
    }
    this.className="active";
    goodsList[this._index].className="goodsBox";
};
for(var i=0;i<bannerLIst.length;i++){
    bannerLIst[i].onclick= showList;
    bannerLIst[i]._index=i;
}
//窗口滚动到一定值时，秒杀栏固定
function pageChange(){
    if(window.pageYOffset>261){
        banner.className="fixed";
    }
    else{
        banner.className="";
    }
}
window.addEventListener("scroll",pageChange,false);
//“全部商品分类”鼠标事件
var navCategory=document.getElementsByClassName('navCategory')[0];
var siteCategory=document.getElementsByClassName('site-category')[0];
navCategory.onmouseover=function (){
    siteCategory.style.display="block";
};
navCategory.onmouseleave=function(){
   setTimeout(function (){
        if(show==true){
    siteCategory.style.display="";}
    
    },1);
};
siteCategory.onmouseover=function(){
    show=false;

};
siteCategory.onmouseleave=function(){
    show=true;
    siteCategory.style.display="";
};
//“全部商品分类”二级菜单
var categoryItem=document.getElementsByClassName('category-item');
var children=document.getElementsByClassName('children');
console.log(children);
var showItem=function (){
    for ( var i=0;i<children.length;i++){
        children[i].style.display="none";
    }
    console.log(this._index);
    children[this._index].style.display="block";
};
for (var i=0;i<categoryItem.length;i++){
    categoryItem[i].onmouseover=showItem;
    categoryItem[i]._index=i;

}
