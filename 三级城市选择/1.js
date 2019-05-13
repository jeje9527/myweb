var province=document.getElementById("province");
var city=document.getElementById('city');
var district=document.getElementById('district');
// var provinceList=[
//     {name:"湖南",cityList:[{name:"长沙",districtList:["长沙1","长沙2"]},{name:"益阳",districtList:["益阳1","益阳2"]}]},
//     {name:"广东",cityList:[{name:"广州",districtList:["广州1","广州2"]},{name:"深圳",districtList:["深圳1","深圳2"]},{name:"中山",districtList:["中山1","中山2","中山3"]}]},
//     {name:"广西",cityList:[{name:"南宁",districtList:["南宁1","南宁2"]},{name:"柳州",districtList:["柳州1","柳州2","柳州3"]}]}];
for (i=0;i<provinceList.length;i++){
     province.options.add(new Option(provinceList[i].name,provinceList[i].name)
     )}
changeProvince();
changeCity();
province.onchange=changeProvince;
function changeProvince(){
    city.length=0;
    district.length=0;    
    cityAry=provinceList[province.selectedIndex].cityList;
   for (i=0;i<cityAry.length;i++){
    city.options.add(new Option(cityAry[i].name,cityAry[i].name)
    )}
    changeCity();
}
city.onchange=changeCity;
function changeCity(){
    district.length=0;
    districtAry=provinceList[province.selectedIndex].cityList[city.selectedIndex].districtList;
    for(i=0;i<districtAry.length;i++){
        district.options.add(new Option(districtAry[i]),districtAry[i])
    }
}

