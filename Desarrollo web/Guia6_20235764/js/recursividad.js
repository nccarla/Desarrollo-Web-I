const campo = document.getElementById("idTxtNumero");

const validarNumero = function (e) {
  let validar = /^[0-9]+$/;
  let tecla = e.key;

  if (!validar.test(tecla)) e.preventDefault();
}

campo.addEventListener("keypress", validarNumero);

const boton = document.getElementById("idBtnCalcular");

function calcularFactorial(numero) {
  return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
}

const imprimir = (numero, resultado) => {
  const contenedor = document.getElementById("idDivResultado");
  contenedor.innerHTML = `El factorial de  numero ${numero}! es ${resultado}`;
};

function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != "") {
    
        let resultado = calcularFactorial(numero);

        imprimir(numero, resultado);
    } else {
        alert("Por favor ingresar un número valido");
    }
}


boton.addEventListener("click", calcular);
