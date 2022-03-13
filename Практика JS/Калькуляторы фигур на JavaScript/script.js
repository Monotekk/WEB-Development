const btn = document.querySelector('button'),
    storona = document.querySelector('.input-storona');
let div = document.querySelector('.value'),
    S = document.querySelector('.S'),
    P = document.querySelector('.P');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let SVal = +storona.value * +storona.value,
        PVal = 4 * +storona.value;
    S.textContent = `Площадь: ${SVal}`;
    P.textContent = `Периметр: ${PVal}`;
});