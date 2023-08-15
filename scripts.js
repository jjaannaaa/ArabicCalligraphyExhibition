
const modalOverlay = document.getElementById('modalOverlay');
const closeButton = document.getElementById('closeButton');
const modalContentInner = document.getElementById('modalContentInner');
const artworkItems = document.querySelectorAll('.artwork-item');

artworkItems.forEach(item => {
    item.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
        modalContentInner.innerHTML = item.innerHTML;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

closeButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
});

window.addEventListener('load', function () {
    const loadingPage = document.getElementById('loadingPage');
    const content = document.getElementById('content');
    const visitorsCountElement = document.getElementById('visitorsCount');

    let visitorsCount = localStorage.getItem('visitorsCount') || 0;
    visitorsCount = parseInt(visitorsCount);
    visitorsCount += 1;
    localStorage.setItem('visitorsCount', visitorsCount);

    visitorsCountElement.textContent = `Total visitors: ${visitorsCount}`;

    setTimeout(function () {
        loadingPage.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 2000); // Simulate a 2-second loading time
});






