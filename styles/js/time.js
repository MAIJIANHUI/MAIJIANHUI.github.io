// 版权声明
(function () {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.textContent = `COPYRIGHT ${new Date().getFullYear()} MAI.AC.CN`;
    }
})();

// 浏览器兼容性检测与提示
(function () {
    // 特性检测方案
    const isLegacy = !window.Promise || !window.fetch;

    // 或 IE 精确检测方案
    const ieVersion = (() => {
        const ua = navigator.userAgent;
        const msie = ua.indexOf('MSIE ');
        const trident = ua.indexOf('Trident/');
        return msie > 0 ? parseInt(ua.substr(msie+5, ua.indexOf('.', msie)), 10) :
               trident > 0 ? 11 : -1;
    })();

    if (isLegacy || ieVersion > 0) {
        const warning = document.createElement('div');
        warning.className = 'browser-warning';
        warning.innerHTML = `
            <div class="browser-warning-title">浏览器不支持</div>
            <br/>
            抱歉，您的浏览器版本过旧<br/>
            建议使用最新版 Edge、Chrome 或 Firefox
        `;
        document.body.prepend(warning);
    }
})();
