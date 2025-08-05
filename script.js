// Scroll suave para los enlaces del header
document.addEventListener('DOMContentLoaded', function() {
    // Filtro de etiquetas
    const searchInput = document.getElementById('tag-search');
    const tagsList = document.getElementById('tags-list');
    const tagItems = Array.from(tagsList.getElementsByClassName('tag-item'));

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim().toLowerCase();
        tagItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Scroll suave para los enlaces del header
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
// Filtro de etiquetas para la wiki de Balatro
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('tag-search');
    const tagsList = document.getElementById('tags-list');
    const tagItems = Array.from(tagsList.getElementsByClassName('tag-item'));

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim().toLowerCase();
        tagItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
