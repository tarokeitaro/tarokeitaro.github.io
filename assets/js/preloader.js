window.onload = function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');

    AOS.init();
    startTypewriter();
}