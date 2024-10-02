// تابع برای اسکرول نرم به بخش‌های مختلف
function smoothScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

// اضافه کردن رویداد کلیک به منو
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScroll(targetId);
    });
});

// پیام خوش‌آمدگویی
window.onload = function() {
    alert("به PythonKids.ir خوش آمدید! از یادگیری پایتون لذت ببرید.");
};



