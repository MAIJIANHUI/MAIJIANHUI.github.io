 var time = 60
    var divLabel = document.getElementById("countdown")
    var label = "秒后将返回首页"
    divLabel.innerHTML = time.toString() + label
    function updateTime(){
        time = time-1
        if(time>=0){ divLabel.innerHTML = time.toString() + label }
        else{ divLabel.innerHTML = "正在跳转，任何问题请联系我！<br/><br/>contact@maijianhui.com<br/><br/>请稍后！" }
    }
    setInterval("updateTime()",1000);
    setTimeout("javascript:location.href='https://www.maijianhui.com'", time*1000);


   
