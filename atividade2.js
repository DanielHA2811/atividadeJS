let BotoesEl = document.querySelectorAll('.botao-expandir-retrair');
for(let i=0; i < BotoesEl.length; i++) {
    BotoesEl[i].addEventListener('click', function() {
        alert('oloco');
        BotoesEl.parentNode.classList.toggle('selecionado');
        if (BotoesEl.innerHTML = '+') {
            BotoesEl.innerHTML = '-';
        }
        else {
            BotoesEl.innerHTML = '+';
        }
    })
}
