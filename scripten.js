const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle(`active`);
});



let typedEffect = new Typed(".buscando", {
    strings: [`the perfection`, `the best`],
    loop: true,
    typeSpeed: 300
})

var boton = document.getElementById("switch");

// Agrega un evento click al botón
boton.addEventListener("click", function () {
    // Redirige a la página deseada cuando se hace clic en el botón
    window.location.href = "index.html";
});

