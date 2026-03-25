document.addEventListener('DOMContentLoaded', function() {
    const indexBtn = document.getElementById('indexTopBtn');
    if (indexBtn) {
        indexBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const allInternalLinks = document.querySelectorAll('a[href^="#"]');
    allInternalLinks.forEach(link => {
        const rawHref = link.getAttribute('href');
        if (rawHref === '#') return;
        const targetId = rawHref.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement && link.id !== 'moreSoonNav' && link.id !== 'heroMoreSoon') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            }
        }
    });

    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '24px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#1a1a20e6';
        toast.style.backdropFilter = 'blur(16px)';
        toast.style.color = '#e0e0ec';
        toast.style.padding = '12px 28px';
        toast.style.borderRadius = '60px';
        toast.style.fontSize = '0.85rem';
        toast.style.fontWeight = '500';
        toast.style.zIndex = '9999';
        toast.style.border = '1px solid #4a4a58';
        toast.style.boxShadow = '0 12px 24px rgba(0,0,0,0.6)';
        toast.style.fontFamily = 'inherit';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(() => toast.remove(), 400);
        }, 2800);
    }

    const moreNavBtn = document.getElementById('moreSoonNav');
    const moreHeroBtn = document.getElementById('heroMoreSoon');

    if (moreNavBtn) {
        moreNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast("✨ More coming soon!");
        });
    }
    if (moreHeroBtn) {
        moreHeroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast("🌍 More coming soon... Stay tuned!");
        });
    }
});