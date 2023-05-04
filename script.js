const altura = document.getElementById("altura");

const peso = document.getElementById("peso");

const btn = document.getElementById("btn");

const resultado = document.getElementById("resultado");

const sexo = document.getElementById("sexo");

const imagemResultado = document.getElementById("imagem-resultado");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const imc = peso.value / (altura.value * altura.value);
    resultado.innerHTML = "Seu IMC é " + imc.toFixed(2);
    if (sexo.value == "masculino") {
        if (imc = 0){
            resultado.innerHTML = "Insira os Valores";
        } else if (imc < 18.5) {
            imagemResultado.innerHTML = `<img src="imagens/1.png" alt="">`;
        } else if (imc > 18.5 && imc <= 24.9) {
            imagemResultado.innerHTML = `<img src="imagens/2.png" alt="">`;
        } else if (imc > 24.9 && imc <= 29.9) {
            imagemResultado.innerHTML = `<img src="imagens/3.png" alt="">`;
        } else if (imc > 29.9 && imc <= 39.9) {
            imagemResultado.innerHTML = `<img src="imagens/4.png" alt="">`;
        } else if (imc => 40) {
            imagemResultado.innerHTML = `<img src="imagens/5.png" alt="">`;
        }
    } else {

        if (sexo.value == "feminino") {
            if (imc = 0){
                resultado.innerHTML = "Insira Valores";
            } else if (imc < 18.5) {
                imagemResultado.innerHTML = `<img src="imagens/6.png" alt="">`;
            } else if (imc > 18.6 && imc <= 24.9) {
                imagemResultado.innerHTML = `<img src="imagens/7.png" alt="">`;
            } else if (imc > 25 && imc <= 29.9) {
                imagemResultado.innerHTML = `<img src="imagens/8.png" alt="">`;
            } else if (imc > 30 && imc <= 34.9) {
                imagemResultado.innerHTML = `<img src="imagens/9.png" alt="">`;
            } else if (imc > 35 && imc <= 39.9) {
                imagemResultado.innerHTML = `<img src="imagens/10.png" alt="">`;
            } else if (imc => 40) {
                imagemResultado.innerHTML = `<img src="imagens/11.png" alt="">`;
            }
        }
    }
})