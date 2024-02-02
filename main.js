function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        throw console.error("Elemento invalido");
    }

};

const listaTecla = document.querySelectorAll('.tecla');

for (i = 0; i < listaTecla.length; i++) {
    const tecla = listaTecla[i];
    const teclaSom = `#som_${tecla.classList[1]}`
    tecla.onclick = function () {
        tocaSom(teclaSom);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa')
        } else {
            tecla.classList.remove('ativa');
        }
    }

    tecla.onkeyup = function () {
        setTimeout(function () {
            tecla.classList.remove('ativa');
        }, 100)
    }
}
