// 切换侧边栏展开/收起状态
function toggleClasses(button) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('closed');
}

// 显示指定的内容区域
function showSection(sectionId) {
    // 隐藏所有内容区域
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示指定的内容区域
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// 默认显示主頁内容
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
