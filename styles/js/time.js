copyright=new Date();
update=copyright.getFullYear();
document.write("COPYRIGHT "+ update + " MAI");

function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if(fIEVersion == 7) {
        return 7;
      } else if(fIEVersion == 8) {
        return 8;
      } else if(fIEVersion == 9) {
        return 9;
      } else if(fIEVersion == 10) {
        return 10;
      } else {
        return 6;//IE版本<=7
      }
    } else if(isEdge) {
      return 20;//edge
    } else if(isIE11) {
      return 11; //IE11
    }else{
      return -1;//不是ie浏览器
    }
  }
  var version = IEVersion();
  if(version !== -1 && version <= 10){
    setTimeout(function () {
      document.body.innerHTML = '<div style="text-center: center;padding-top: 20%;font-size:1.8rem;f"><div style="font-size:2.5rem;font-weight: bold">浏览器不支持</div><br/>抱歉，您的浏览器不支持访问<br/>我们建议您使用最新版本的 Safari、Firefox、Microsoft Edge 或 Chrome 浏览器</div>'
    },0)
  }else if(version == 11) {
       setTimeout(function () {
      document.body.innerHTML = '<div style="text-center: center;padding-top: 20%;font-size:1.8rem;f"><div style="font-size:2.5rem;font-weight: bold">浏览器不支持</div><br/>抱歉，您的浏览器不支持访问<br/>我们建议您使用最新版本的 Safari、Firefox、Microsoft Edge 或 Chrome 浏览器</div>'
    },0)
};

 

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
}

function aidaori(){
    var aidaoriarr=new Array("0108","0219","0403","0404","0405","0406","0414","0512","0522","0807","0909","1130","1213");
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
