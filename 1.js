let lastScrollTop = 0; // 上次滾動位置
const resumeSection = document.getElementById('resume');
const scrollDownIcon = document.querySelector('.scroll-down');

window.addEventListener('scroll', function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // 向下滾動
        const resumePosition = resumeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (resumePosition < screenPosition) {
            resumeSection.classList.add('active');
            scrollDownIcon.classList.add('hidden');
        }
    } else {
        // 向上滾動
        resumeSection.classList.remove('active');
        scrollDownIcon.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});
