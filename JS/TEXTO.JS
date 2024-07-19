let texto = document.getElementById('letras')
let seleccionNumero = document.getElementById('musica')
let boton = document.getElementById('boton-texto')
let resultado = document.getElementById('resultado')

boton.addEventListener('click', function () {
    let textosecundario = texto.value
    let vecesRepetir = seleccionNumero.value

        resultado.textContent = '' 

    for (let i = 0; i < vecesRepetir; i++) {
        resultado.textContent += textosecundario + '\n';
    }           
})