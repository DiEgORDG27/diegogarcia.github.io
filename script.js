document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
    setTimeout(function() {
        document.body.classList.remove('loading');
    }, 1000); 
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const isExternal = this.target === '_blank' || 
                             this.hostname !== window.location.hostname ||
                             href.startsWith('http') ||
                             href.startsWith('mailto:') ||
                             href.startsWith('tel:');
            if (!isExternal) {
                e.preventDefault();
                document.body.classList.add('loading');

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});
