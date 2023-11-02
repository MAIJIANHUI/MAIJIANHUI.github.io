
function aidaori(){
    var aidaoriarr=new Array("0108","0219","0403","0404","0405","0406","0414","0512","0522","0807","0909","1027","1102","1130","1213");
    var skydate = new Date();
    var str = "";// + skydate.getFullYear();
    var mm = skydate.getMonth()+1;
    if(skydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(skydate.getDate()>9){
      str += skydate.getDate();
    }else{
      str += "0" + skydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}
if(aidaori()){
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)" 
    });
};
/***
 * 愚人节彩蛋 - 你屏幕上有根毛
 */
function AprilFoolsDay(){
    var aidaoriarr=new Array("0401");
    var skydate = new Date();
    var str = "";// + skydate.getFullYear();
    var mm = skydate.getMonth()+1;
    if(skydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(skydate.getDate()>9){
      str += skydate.getDate();
    }else{
      str += "0" + skydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}
if(AprilFoolsDay()){
   var bottom = Math.floor(60 * Math.random()),
       right = Math.floor(50 * Math.random()),
       rotate = Math.floor(360 * Math.random());
    var foolsEgg = document.createElement("img");
    foolsEgg.src = "https://mai.ac.cn/styles/img/AprilFoolsDay.png";
    foolsEgg.style.position = "fixed"; 
    foolsEgg.style.bottom = "".concat(bottom, "%");
    foolsEgg.style.right = "".concat(right, "%"); 
    foolsEgg.style.zIndex = "9999"; 
    foolsEgg.style.pointerEvents = "none";
    foolsEgg.style.width = "40%";
    foolsEgg.style.maxWidth = "190px";
    foolsEgg.style.transform = "".concat("rotate(", rotate, "deg)"); 
    document.body.append(foolsEgg);
}

