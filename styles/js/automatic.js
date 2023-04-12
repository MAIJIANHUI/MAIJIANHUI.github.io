 var time = 30
    var divLabel = document.getElementById("countdown")
    var label = "秒后将返回首页"
    divLabel.innerHTML = time.toString() + label
    function updateTime(){
        time = time-1
        if(time>=0){ divLabel.innerHTML = time.toString() + label }
        else{ divLabel.innerHTML = "正在跳转，任何问题请联系我！<br/><br/>a@mai.ac.cn<br/><br/>请稍后！" }
    }
    setInterval("updateTime()",1000);
    setTimeout("javascript:location.href='https://mai.ac.cn'", time*1000);

var typed = new Typed('#text404', {
    strings: ["知不可乎骤得，托遗响于悲风"],
    cursorChar: '',
    typeSpeed: 200
    });
