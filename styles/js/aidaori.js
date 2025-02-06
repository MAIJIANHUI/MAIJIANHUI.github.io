// 将固定日期数组提取为常量，避免重复创建，并使用 Set 提高查找效率
const AIDAORI_DATES = new Set(["0108", "0206", "0219", "0403", "0404", "0405", "0406", "0414", "0512", "0522", "0807", "0909", "1027", "1102", "1103", "1130", "1213"]);

function aidaori() {
    const now = new Date();
    // 使用 padStart 简化日期格式化，修复月份补零错误
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const dateStr = mm + dd;
    // Set.has() 的时间复杂度为 O(1)，更高效
    return AIDAORI_DATES.has(dateStr) ? 1 : 0;
}

// 合并 CSS 滤镜属性，避免重复定义（注意：IE 滤镜可能需要单独处理）
if (aidaori()) {
    $("html").css({
        "-webkit-filter": "grayscale(100%)",
        "-moz-filter": "grayscale(100%)",
        "-ms-filter": "grayscale(100%)",
        "-o-filter": "grayscale(100%)",
        "filter": "grayscale(100%)"
    });
};
