function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            mainContent.innerHTML = data; // Load the content into the main section
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            mainContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
}

// Load the home section by default
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html');
});
