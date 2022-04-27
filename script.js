const dados = [];



function insereDados() {
    let n = document.querySelector('.nome');
    let s = document.querySelector('.sobrenome');
    let t = document.querySelector('.telefone');
    let e = document.querySelector('.email');

    dados.push({
        'nome': n.value,
        'sobrenome': s.value,
        'telefone': t.value,
        'email': e.value
    })
    n.value = ''
    s.value = ''
    t.value = ''
    e.value = ''

    console.log(dados)

}

const confirma = document.querySelector('.confirma');
confirma.addEventListener('click', insereDados)