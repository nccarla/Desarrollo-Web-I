const inputNombre = document.getElementById('idTxtNombre');
const inputApellido = document.getElementById('idTxtApellido');
const inputFechaNacimiento = document.getElementById('idTxtFechaNacimiento');
const inputRdMasculino = document.getElementById('idRdMasculino');
const inputRdFemenino = document.getElementById('idRdFemenino');
const cmbPais = document.getElementById('idCmbPais');
const inputDireccion = document.getElementById('idTxtDireccion');
const inputNombrePais = document.getElementById('idNombrePais');
const buttonAgregarPaciente = document .getElementById('idBtnAgregar');
const buttonLimpiarPaciente = document.getElementById('idBtnLimpiar');
const buttonMostrarPaciente = document.getElementById('idBtnListar');
const buttonAgregarPais = document.getElementById('idBtnAgregarPais');
const notificacion = document.getElementById('idNotificacion');
const mensaje = document.getElementById('idMensaje');
const idTablaPacientes = document.getElementById('idTablaPacientes');
const idPacientesRegistrados = document.getElementById('idPacientesRegistrados');

const toast = new bootstrap.Toast(notificacion);

const idModal = document.getElementById('idModal');

let arrayPaciente = [];

const limpiarFormulario = () => {
    inputNombre.value = '';
    inputApellido.value = '';
    inputFechaNacimiento.value = '';
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = '';
    inputNombrePais.value = '';
    inputNombre.focus();
};

const addPaciente = () => {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = inputRdMasculino.checked ? "Hombre" : inputRdFemenino.checked ? "Mujer" : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (nombre !== "" && apellido !== "" && fechaNacimiento !== "" && sexo !== "" && pais !== "0" && direccion !== "") {       // Agregando información al arreglo paciente
        arrayPaciente.push([nombre, apellido, fechaNacimiento, sexo, labelPais, direccion]);

        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        toast.show();

        limpiarFormulario();

        imprimirPacientes();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

const imprimirFilas = () => {
    let fila = "";
    let contador = 1;

    arrayPaciente.forEach(element => {
        fila += `
            <tr>
                <td class="text-center fw-bold">${contador}</td>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
                <td>${element[3]}</td>
                <td>${element[4]}</td>
                <td>${element[5]}</td>
                <td>
                    <button id="idBtnEditar_${contador}" type="button" class="btn btn-primary" alt="Eliminar">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button id="idBtnEliminar_${contador}" type="button" class="btn btn-danger" alt="Editar">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>
        `;
        contador++;
    });

    return fila;
};

const imprimirPacientes = () => {
    let table = `
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center" style="width: 5%">#</th>
                        <th scope="col" class="text-center" style="width: 15%">Nombre</th>
                        <th scope="col" class="text-center" style="width: 15%">Apellido</th>
                        <th scope="col" class="text-center" style="width: 10%">Fecha nacimiento</th>
                        <th scope="col" class="text-center" style="width: 10%">Sexo</th>
                        <th scope="col" class="text-center" style="width: 10%">Pais</th>
                        <th scope="col" class="text-center" style="width: 25%">Dirección</th>
                        <th scope="col" class="text-center" style="width: 10%">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${imprimirFilas()}
                </tbody>
            </table>
        </div>
    `;

    idTablaPacientes.innerHTML = table;
    idPacientesRegistrados.textContent = arrayPaciente.length;
};

let contadorGlobalOption = cmbPais.children.length;

const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew !== "") {
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;

        cmbPais.appendChild(option);

        mensaje.innerHTML = "Pais agregado correctamente";
        toast.show();

        limpiarFormulario();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

buttonLimpiarPaciente.onclick = limpiarFormulario;
buttonAgregarPaciente.onclick = addPaciente;
buttonMostrarPaciente.onclick = imprimirPacientes;
buttonAgregarPais.onclick = addPais;

idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

limpiarFormulario();