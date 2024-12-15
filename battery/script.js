document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('batteryChart').getContext('2d');
    
    // iOS 版本数据 - 从旧到新排序
    const iosVersions = [
        'iOS 15.4.1', 'iOS 15.5', 'iOS 15.6', 'iOS 15.6.1', 'iOS 15.7',
        'iOS 16.0', 'iOS 16.0.2', 'iOS 16.0.3', 'iOS 16.1', 'iOS 16.1.1',
        'iOS 16.2', 'iOS 16.3', 'iOS 16.3.1', 'iOS 16.4', 'iOS 16.4.1',
        'iOS 16.5', 'iOS 16.5.1', 'iOS 16.6', 'iOS 16.6.1', 'iOS 16.7',
        'iOS 17.0', 'iOS 17.0.1', 'iOS 17.0.2', 'iOS 17.0.3', 'iOS 17.1',
        'iOS 17.1.1', 'iOS 17.1.2', 'iOS 17.2', 'iOS 17.2.1', 'iOS 17.3',
        'iOS 17.3.1', 'iOS 17.4', 'iOS 17.4.1', 'iOS 17.4.2', 'iOS 17.5',
        'iOS 17.5.1', 'iOS 17.6', 'iOS 17.6.1', 'iOS 17.7', 'iOS 17.7.1',
        'iOS 17.7.2', 'iOS 18.0', 'iOS 18.0.1', 'iOS 18.1', 'iOS 18.1.1',
        'iOS 18.2'
    ];

    const data = {
        labels: iosVersions,
        datasets: [
            {
                label: 'iPhone SE 2020',
                data: [2185, 2182, 2125, 1956, 1983, 2234, 2085, 2113, 2090, 2131, 2163, 2238, 2163, 1960, 1994, 1963, 2095, 2215, 2143, 2025, 2032, 1932, 1984, 2109, 2198, 1991, 2112, 2092, 1988, 2020, 1942, 1982, 2118, 1972, 2011, 1952, 1952, 2004, 2042, 2153, 2223, 2239, 1926, 2049, 2080, 2022],
                borderColor: '#168bf7',
                backgroundColor: '#168bf7',
                pointRadius: 3,
                tension: 0.4
            },
            {
                label: 'iPhone XR',
                data: [2933, 3073, 2946, 2812, 2874, 3455, 3312, 3251, 3298, 3155, 3337, 3403, 3139, 3004, 3085, 2992, 3119, 3247, 3060, 2993, 2528, 2767, 2488, 3287, 3046, 2882, 3125, 3024, 2735, 2873, 2784, 2822, 3086, 2803, 2778, 2707, 3038, 2816, 2784, 3146, 3153, 3231, 2894, 2749, 2714, 2716],
                borderColor: '#15229d',
                backgroundColor: '#15229d',
                pointRadius: 3,
                tension: 0.4
            },
            {
                label: 'iPhone 11',
                data: [3150, 3182, 3025, 3071, 3161, 3457, 3492, 3518, 3442, 3382, 3488, 3609, 3466, 3274, 3281, 3153, 3496, 3317, 3506, 3308, 3237, 3239, 3255, 3353, 2930, 3113, 2892, 2933, 3129, 3208, 3215, 3245, 2951, 3322, 3277, 3261, 2971, 3306, 3288, 2931, 2914, 3003, 3261, 3301, 3305, 3253],
                borderColor: '#e66b3d',
                backgroundColor: '#e66b3d',
                pointRadius: 3,
                tension: 0.4
            },
            {
                label: 'iPhone 12',
                data: [3893, 3919, 3774, 3576, 3469, 4279, 4256, 4368, 4050, 4178, 3876, 4307, 4194, 3686, 3544, 3647, 3565, 3706, 3887, 3546, 3385, 3304, 3156, 3306, 3545, 3412, 3521, 3585, 3433, 3346, 3363, 3579, 3486, 3518, 3606, 3385, 3528, 3426, 3404, 3507, 3485, 3505, 3509, 3386, 3437, 3389],
                borderColor: '#6a027a',
                backgroundColor: '#6a027a',
                pointRadius: 3,
                tension: 0.4
            },
            {
                label: 'iPhone 13',
                data: [4790, 5080, 4720, 4520, 4480, 5440, 5550, 5590, 5520, 5400, 4990, 5410, 5260, 4680, 4740, 5000, 4600, 4820, 4890, 4380, 4100, 4100, 4250, 4260, 4680, 4160, 4550, 4460, 4180, 4100, 4020, 3480, 3990, 3530, 3500, 3990, 3750, 4070, 4080, 3830, 3990, 3910, 3260, 3910, 3650, 3620],
                borderColor: '#df44a8',
                backgroundColor: '#df44a8',
                pointRadius: 3,
                tension: 0.4
            },
            {
                label: 'iPhone 15',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6660, null, null, null, null, 6690, 6610, 6470, 6220, 6360, 6520, 6140, 6320, 6400, 6310, 6400, 6380, 6090, 6380, 6210, 6290, 6470],
                borderColor: '#734ec2',
                backgroundColor: '#734ec2',
                pointRadius: 3,
                tension: 0.4
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
                axis: 'x'
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'x'
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'x'
                    }
                },
                tooltip: {
                    position: 'nearest',
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y;
                        }
                    },
                    axis: 'x',
                    enabled: true,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    titleColor: '#1d1d1f',
                    bodyColor: '#1d1d1f',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    boxPadding: 3,
                    usePointStyle: true,
                    crossAlign: 'far',
                },
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 20
                    }
                },
                crosshair: {
                    line: {
                        color: 'rgba(0, 0, 0, 0.2)',
                        width: 1,
                        dashPattern: [5, 5]
                    },
                    sync: {
                        enabled: true,
                        group: 1,
                    },
                    zoom: {
                        enabled: true
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'GEEKBENCH POINTS'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    const myChart = new Chart(ctx, config);

    // 添加查询功能相关代码
    const deviceSelect = document.getElementById('deviceSelect');
    const currentVersion = document.getElementById('currentVersion');
    const targetVersion = document.getElementById('targetVersion');
    const queryBtn = document.getElementById('queryBtn');
    const queryResult = document.getElementById('queryResult');

    // 填充版本选择器
    function populateVersionSelects() {
        // 创建一个新数组用于下拉选择框,从新版本到旧版本排序
        const selectVersions = [...iosVersions].reverse();
        
        currentVersion.innerHTML = '<option value="">请选择当前iOS版本</option>';
        targetVersion.innerHTML = '<option value="">请选择目标iOS版本</option>';
        
        selectVersions.forEach(version => {
            currentVersion.innerHTML += `<option value="${version}">${version}</option>`;
            targetVersion.innerHTML += `<option value="${version}">${version}</option>`;
        });
    }

    // 获取特定设备和版本的分数
    function getScore(device, version) {
        const deviceData = data.datasets.find(d => d.label === device);
        const versionIndex = iosVersions.indexOf(version);
        return deviceData ? deviceData.data[versionIndex] : null;
    }

    // 查询按钮点击事件
    queryBtn.addEventListener('click', function() {
        const device = deviceSelect.value;
        const currentVer = currentVersion.value;
        const targetVer = targetVersion.value;

        if (!device || !currentVer || !targetVer) {
            alert('请选择完整的查询条件');
            return;
        }

        const currentScore = getScore(device, currentVer);
        const targetScore = getScore(device, targetVer);
        const scoreDiff = targetScore - currentScore;
        const percentChange = ((scoreDiff / currentScore) * 100).toFixed(1);

        queryResult.innerHTML = `
            <div class="result-content">
                <div class="score-card">
                    <div class="score-label">${currentVer}</div>
                    <div class="score-value">${currentScore}</div>
                </div>
                <div class="score-card">
                    <div class="score-label">${targetVer}</div>
                    <div class="score-value">${targetScore}</div>
                    <div class="score-diff ${scoreDiff >= 0 ? 'positive' : 'negative'}">
                        ${scoreDiff >= 0 ? '+' : ''}${percentChange}%
                    </div>
                </div>
            </div>
        `;
        queryResult.classList.add('active');
    });

    // 初始化版本选择器
    populateVersionSelects();

    // 横屏提示相关代码
    function checkOrientation() {
        const orientationTip = document.querySelector('.orientation-tip');
        const tipBtn = document.querySelector('.tip-btn');
        
        // 检查是否是移动设备
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            // 检查是否已经显示过提示
            const hasShownTip = sessionStorage.getItem('hasShownOrientationTip');
            
            // 只在首次加载时检查一次
            if (window.innerHeight > window.innerWidth && !hasShownTip) {
                orientationTip.classList.add('show');
            }
            
            // 关闭按钮事件
            tipBtn.addEventListener('click', () => {
                orientationTip.classList.remove('show');
                // 记录已经显示过提示
                sessionStorage.setItem('hasShownOrientationTip', 'true');
            });
        }
    }

    // 添加横屏检测
    checkOrientation();
}); 