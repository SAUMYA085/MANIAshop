document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const searchTerm = document.querySelector('.search-bar input').value;
        alert(`Searching for: ${searchTerm}`);
    });

    const profileIcon = document.getElementById('profile-icon');
    const modal = document.getElementById('login-modal');
    const closeButton = document.querySelector('.close-button');

    profileIcon.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const wishlistButtons = document.querySelectorAll('.wishlist-button');
    const bagButtons = document.querySelectorAll('.bag-button');

    wishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to Wishlist');
        });
    });

    bagButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to Bag');
        });
    });
});
