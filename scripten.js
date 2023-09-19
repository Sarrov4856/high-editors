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



