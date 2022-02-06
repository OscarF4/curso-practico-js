//Variables para las figuras
//cuadrado
const inputCuadrado = document.getElementById('inputCuadrado');
const resultadoCuadrado = document.getElementById('resultadoCuadrado');
//Triángulo Isósceles
const input1TrianguloIsosceles = document.getElementById('lado1TrianguloIsosceles');
const input2TrianguloIsosceles = document.getElementById('lado2TrianguloIsosceles');
const input3TrianguloIsosceles = document.getElementById('baseTrianguloIsosceles');
const resultadoIsosceles = document.getElementById('resultadoIsoceles');

//Código del Cuadrado
function calcularAreaCuadrado() {
    const ladoCuadrado = inputCuadrado.value;

    if (!!ladoCuadrado) {
        const area = ladoCuadrado * ladoCuadrado;
        resultadoCuadrado.innerHTML = `El 'área' es de <strong>${area}</strong>cm2`;
    } else {
        resultadoCuadrado.innerHTML = '';
    }
}

function calcularPerimetroCuadrado() {
    const ladoCuadrado = inputCuadrado.value;

    if (!!ladoCuadrado) {
        const perimetro = ladoCuadrado * 4;
        resultadoCuadrado.innerHTML = `El 'perímetro' es de <strong>${perimetro}</strong>cm2`;
    } else {
        resultadoCuadrado.innerHTML = '';
    }
}

// //Código del triángulo
// function perimetroTriangulo(lado1, lado2, base) {
//     return lado1 + lado2 + base;
// }

// function areaTriangulo(base, altura) {
//     return (base * altura) / 2
// }

// //Código del círculo
// function diametroCirculo(radio) {
//     return radio * 2;
// }

// function perimetroCirculo(radio) {
//     const diametro = diametroCirculo(radio);
//     return diametro * Math.PI;
// }

// function areaCirculo(radio) {
//     return Math.PI * Math.pow(radio, 2);
// }

//Código del Triangulo Isósceles
function calcularAreaTrianguloIsosceles() {
    lado1 = input1TrianguloIsosceles.value;
    lado2 = input2TrianguloIsosceles.value;
    base = input3TrianguloIsosceles.value;

    if (lado1 === lado2 && lado1 !== base) {
        const altura = Math.sqrt(lado1**2 - base**2/ 4);
        const area = (base * altura) / 2;
        resultadoIsosceles.innerHTML = `El 'area' es de <strong>${area}</strong>cm2`;
    }
}

function calcularPerimetroTrianguloIsosceles() {
    lado1 = Number(input1TrianguloIsosceles.value);
    lado2 = Number(input2TrianguloIsosceles.value);
    base = Number(input3TrianguloIsosceles.value);

    if (lado1 === lado2 && lado1 !== base) {
        const perimetro = lado1 + lado2 + base;
        resultadoIsosceles.innerHTML = `El 'perímetro' es de <strong>${perimetro}</strong>cm2`;
    }
}