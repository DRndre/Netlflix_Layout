document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll('.wrapper section .item');

    items.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.2)';
        });

        item.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
