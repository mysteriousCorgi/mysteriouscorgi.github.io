import { updateRuntime } from './runtime.js';
import { initThemeToggle } from './theme.js';

// 初始化右键菜单
function initContextMenu() {
    // 创建右键菜单元素
    const menu = document.createElement('div');
    menu.id = 'contextMenu';
    menu.innerHTML = '<div class="menu-option" onclick="window.location.reload()">刷新</div>';
    document.body.appendChild(menu);

    // 添加菜单样式
    const style = document.createElement('style');
    style.textContent = `
        #contextMenu {
            display: none;
            position: fixed;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
            z-index: 1000;
            min-width: 100px;
            padding: 3px;
        }

        #contextMenu .menu-option {
            padding: 6px 10px;
            cursor: pointer;
            font-size: 12px;
            color: #000000;
            text-align: center;
            font-weight: normal;
            transition: all 0.2s ease;
        }

        #contextMenu .menu-option:hover {
            background: rgba(0, 102, 255, 0.1);
            color: #0066FF;
            border-radius: 4px;
            font-weight: 500;
        }

        /* 暗黑模式 */
        body.dark-mode #contextMenu {
            background: rgba(45, 45, 45, 0.98);
        }
        body.dark-mode #contextMenu .menu-option {
            color: #ffffff;
        }
        body.dark-mode #contextMenu .menu-option:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            font-weight: normal;
        }
    `;
    document.head.appendChild(style);

    // 显示右键菜单
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        menu.style.display = 'block';
        menu.style.left = e.pageX + 'px';
        menu.style.top = e.pageY + 'px';
    });

    // 点击其他地方隐藏菜单
    document.addEventListener('click', function() {
        menu.style.display = 'none';
    });
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    // 初始化运行时间
    updateRuntime();
    setInterval(updateRuntime, 1000);
    
    // 初始化主题切换
    initThemeToggle();

    // 初始化右键菜单
    initContextMenu();
});




