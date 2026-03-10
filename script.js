    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.querySelector('.overlay-menu');
    let btnFechar = document.querySelector('.btn-fechar');

    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir');
    });

    btnFechar.addEventListener('click', () => {
        menu.classList.remove('abrir');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir');
    });

function enviar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value
    const mensagem = document.getElementById('mensagem').value;
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    if (nome === "" || email === "" || mensagem === "") {
        alert('Por favor, preencha os campos obrigatórios!');
        return;
    }
    else {
        alert('Mensagem enviada com sucesso!');
        const numero = "5532999702829";
        const texto = `Nome : ${nome}. Email :  ${email}. Telefone : ${telefone}.
        Mensagem : ${mensagem}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');

    }
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Mensagem:', mensagem);

}

function limpar() {
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('mensagem').value = "";
}
