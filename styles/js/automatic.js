// 使用 IIFE 隔离作用域，避免全局变量污染
(function () {
    let time = 30;
    const divLabel = document.getElementById("countdown");
    const label = "秒后将返回首页";
    
    // 初始化倒计时文本（textContent 比 innerHTML 更高效）
    divLabel.textContent = `${time}${label}`;

    // 定义定时器更新函数
    const updateTime = () => {
        time--;
        if (time >= 0) {
            // 使用模板字符串提升可读性
            divLabel.textContent = `${time}${label}`;
        } else {
            // 倒计时结束逻辑
            clearInterval(intervalId); // 清除定时器
            divLabel.innerHTML = "正在跳转，任何问题请联系我！<br/><br/>web@mai.ac.cn<br/><br/>请稍后！";
            // 显示提示后延迟 2 秒跳转
            setTimeout(() => {
                window.location.href = "https://mai.ac.cn";
            }, 2000);
        }
    };

    // 启动定时器（直接传递函数引用）
    const intervalId = setInterval(updateTime, 1000);
})();

// Typed.js 初始化（确保元素 #text404 存在）
new Typed("#text404", {
    strings: ["知不可乎骤得，托遗响于悲风"],
    cursorChar: "",
    typeSpeed: 200
});

// 添加手动停止跳转逻辑（如点击按钮）
document.getElementById("cancelJump").addEventListener("click", () => {
    clearInterval(intervalId);
    divLabel.textContent = "跳转已取消";
});

// 跳转前弹出确认对话框
setTimeout(() => {
    if (confirm("确定要跳转至首页吗？")) {
        window.location.href = "https://mai.ac.cn";
    }
}, 2000);
