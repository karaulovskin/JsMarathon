const character = {
    name: '',
    defaultHP: 100,
    damageHP: 90,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: '',
    defaultHP: 100,
    damageHP: 80,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

const $btn = document.getElementById('btn-kick');

function init() {
    $btn.addEventListener('click', function () {
        console.log('click');
    });

    renderHP(character);
    renderHP(enemy);
}
init();

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person)
}

function renderHPLife(person) {
    person.elHP.innerText = `${person.defaultHP} / ${person.damageHP}`;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

