$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
});
const scrollSpeed = 50;
const scrollText = document.querySelector('.scroll-text');
const textContent = scrollText.innerHTML;

scrollText.innerHTML = textContent + '&nbsp;&nbsp;';
function scrollTextToLeft() {
    if (scrollText.scrollLeft > scrollText.scrollWidth - scrollText.clientWidth) {
        scrollText.scrollLeft = 0;
    } else {
        scrollText.scrollLeft += 1;
    }
}

setInterval(scrollTextToLeft, scrollSpeed);
