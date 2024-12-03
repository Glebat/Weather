//сделать замену череез две функции 

window.addEventListener('resize', function() {
    var largeContainer = document.getElementById('large-container');
    var smallContainer = document.getElementById('small-container');
    var windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        largeContainer.style.display = 'none';
        smallContainer.style.display = 'block';
    } else {
        largeContainer.style.display = 'block';
        smallContainer.style.display = 'none';
    }
});


window.addEventListener('load', function() {
    var largeContainer = document.getElementById('large-container');
    var smallContainer = document.getElementById('small-container');
    var windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        largeContainer.style.display = 'none';
        smallContainer.style.display = 'block';
    } else {
        largeContainer.style.display = 'block';
        smallContainer.style.display = 'none';
    }
});