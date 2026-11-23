// Clase Tarea
class Tarea {
    constructor(nombre, completada) {
        this.nombre = nombre;
        this.completada = completada;
    }
}

// Clase GestorDeTareas
class GestorDeTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(nombre) {
        let nuevaTarea = new Tarea(nombre, false);
        this.tareas.push(nuevaTarea);
        this.guardarLocal();
    }

    eliminarTarea(index) {
        this.tareas.splice(index, 1);
        this.guardarLocal();
    }

    editarTarea(index, nuevoNombre) {
        this.tareas[index].nombre = nuevoNombre;
        this.guardarLocal();
    }

    guardarLocal() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }

    cargarLocal() {
        let datos = localStorage.getItem("tareas");
        if (datos) {
            this.tareas = JSON.parse(datos);
        }
    }
}

const gestor = new GestorDeTareas();
gestor.cargarLocal();

const input = document.getElementById("tareaInput");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");
const error = document.getElementById("mensajeError");

function mostrarTareas() {
    lista.innerHTML = "";

    gestor.tareas.forEach((tarea, index) => {
        let li = document.createElement("li");
        li.textContent = tarea.nombre;

        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = () => {
            let nuevo = prompt("Editar tarea:", tarea.nombre);
            if (nuevo !== null && nuevo.trim() !== "") {
                gestor.editarTarea(index, nuevo.trim());
                mostrarTareas();
            }
        };

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => {
            gestor.eliminarTarea(index);
            mostrarTareas();
        };

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

boton.addEventListener("click", () => {
    if (input.value.trim() === "") {
        error.textContent = "No puedes agregar una tarea vacía";
        return;
    }

    gestor.agregarTarea(input.value.trim());
    input.value = "";
    error.textContent = "";
    mostrarTareas();
});

mostrarTareas();
