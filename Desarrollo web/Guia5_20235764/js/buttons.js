function aviso() {
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion() {
    //Los valores ue puede amacenar la variable confirmacion
    //son true o false
    let confirmacion = confirm("¿Desea salir de la Sesión?");
    /*Para imprimir una varieble en una cadena podemos utilizar las comillas simples inversas `` y luego hacemos el llamado de la variable con ${aqui debera de escribir e nombre de la variable}*/
    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
    let nombre = prompt("¿Cual es su nombre?");
    //Notese que en campo de prompt se mostrara 0 por defecto
    let edad = prompt("¿Cual es su edad?", 0);

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la informacion que desea visualizar en el parrafo"
    );

    /*Utiizaremos la API DOM para acceder al elemento <p id="idParrafo"></p> que hemos creado en uestro documento HTML*/

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}