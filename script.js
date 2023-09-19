const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle(`active`);
});



let typedEffect = new Typed(".buscando", {
    strings: [`la perfección`, `lo mejor`],
    loop: true,
    typeSpeed: 300
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}