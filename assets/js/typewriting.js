var typed;

function initializeTypewriter() {
    typed = new Typed('#text-utama', {
        strings: [
            'Welcome to My Portfolio!',
            '欢迎来到我的投资组合！',
            '¡Bienvenido a Mi Portafolio!',
            '私のポートフォリオへようこそ!',
            'Bem-vindo ao Meu Portfólio!',
            'Willkommen in meinem Portfolio!',
            'Добро пожаловать в Мое Портфолио!',
            'Bienvenue sur Mon Portfolio !',
            'Selamat datang di Portofolio Saya!',

        ],
        typeSpeed: 80,
        backSpeed: 20,
        backDelay: 1500,
        smartBackspace: true,
        shuffle: false,
        loop: true
    });
}


function startTypewriter() {
    if (typed) {
        typed.start();
    } else {
        initializeTypewriter();
    }
}