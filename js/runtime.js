// 网站运行时间计算
function updateRuntime() {
    const startTime = new Date('2024-09-19T00:50:00');
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;

    // 计算天数、小时、分钟和秒数
    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

    // 更新显示
    const runtimeElement = document.getElementById('runTime');
    runtimeElement.textContent = `${days}天${hours}小时${minutes}分${seconds}秒`;
}

export { updateRuntime }; 