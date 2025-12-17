// دالة لمحاكاة تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // هنا في الواقع يتم الاتصال بالباك اند للتحقق
    
    // محاكاة خطوة الـ 2FA
    const twoFactorDiv = document.getElementById('2fa-input');
    if (twoFactorDiv.style.display === 'none') {
        alert('تم إرسال رمز التحقق إلى هاتفك (محاكاة)');
        twoFactorDiv.style.display = 'block';
        return;
    }

    // بعد إدخال الرمز والموافقة
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
});

// دالة التبديل بين الصفحات في القائمة الجانبية
function showPage(pageId) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // إزالة التفعيل من القائمة الجانبية
    const navItems = document.querySelectorAll('.sidebar nav ul li');
    navItems.forEach(item => item.classList.remove('active'));

    // إظهار الصفحة المطلوبة
    document.getElementById('page-' + pageId).classList.add('active');
    
    // تفعيل الزر في القائمة (بشكل تقريبي عبر الـ event target في تطبيق حقيقي)
}

// دالة تسجيل الخروج
function logout() {
    if(confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        document.getElementById('main-app').style.display = 'none';
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('2fa-input').style.display = 'none';
        document.getElementById('loginForm').reset();
    }
}

// دوال النافذة المنبثقة (Modal)
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// إغلاق المودال عند النقر خارجه
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}