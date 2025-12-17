// دالة تسجيل الدخول (محاكاة)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const twoFactorDiv = document.getElementById('2fa-input');
    if (twoFactorDiv.style.display === 'none') {
        alert('تم إرسال رمز التحقق إلى جوالك');
        twoFactorDiv.style.display = 'block';
        return;
    }
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
});

// دالة التبديل بين الصفحات
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar nav ul li').forEach(i => i.classList.remove('active'));
    
    document.getElementById('page-' + pageId).classList.add('active');
    // إضافة كلاس active للزر في القائمة (اختياري، يحتاج تحديد العنصر بدقة)
}

// دالة فتح/إغلاق القائمة الجانبية (للجوال)
function toggleSidebar() {
    // فقط إذا كانت الشاشة صغيرة (أقل من 768 بكسل) ننفذ هذا الكود لتجنب المشاكل في الكمبيوتر
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// إغلاق القائمة عند تغيير حجم الشاشة للأكبر (إصلاح مشكلة الانتقال من جوال لكمبيوتر)
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('sidebar').classList.remove('active');
        document.querySelector('.sidebar-overlay').classList.remove('active');
    }
});

function logout() {
    if(confirm('تسجيل خروج؟')) {
        location.reload(); // إعادة تحميل الصفحة للعودة للبداية
    }
}

// Modal Functions
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) { event.target.style.display = "none"; }
}