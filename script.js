// Collapsible course tracks
document.addEventListener('DOMContentLoaded', function() {
    const trackToggles = document.querySelectorAll('.track-header-toggle');

    // Initialize all tracks as collapsed
    trackToggles.forEach(toggle => {
        const content = toggle.nextElementSibling;
        if (content && content.classList.contains('collapse-content')) {
            content.style.maxHeight = '0';
            content.style.padding = '0';
        }
    });

    trackToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            if (isExpanded) {
                // Collapse
                this.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = '0';
                content.style.padding = '0';
                content.classList.remove('expanded');
                icon.textContent = '+';
                this.classList.remove('expanded');
            } else {
                // Expand
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '0 2rem 2rem 2rem';
                content.classList.add('expanded');
                icon.textContent = '−';
                this.classList.add('expanded');
            }
        });
    });
});



