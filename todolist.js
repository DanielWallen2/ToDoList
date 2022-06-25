
let output = document.querySelector('#output');
const addBtn = document.querySelector('#addItem');
const ctrl = document.querySelector('#item');

addBtn.addEventListener('click', e => {

    if(ctrl.value === '') return;
    output.innerHTML += `<li>${ctrl.value}</li>`;
    ctrl.value = '';
    
});

output.addEventListener('click', e => {

    if(e.target.getAttribute('id') === 'striketrough') { e.target.setAttribute('id', ''); }
    else { e.target.setAttribute('id', 'striketrough'); }
    // console.log(e.target);
});

output.addEventListener('dblclick', e => {

    e.target.remove();

});
