// Variables Globales
let sesionTema = "oscuro";
let sesionDepartamento = "general";
let sesionDepfiltro = "asc";
let sesionMain = "maincardsGeneral";
let sesiondisplay = "flex";

const animation = lottie.loadAnimation({
    container: document.getElementById("Cargando"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "wwwroot/Resources/Loading.json", // ruta al archivo JSON
});

// Obtencion de Elementos HTML
const root = document.documentElement;
let tema = document.getElementById("theme");
let tema2 = document.getElementById("theme2");
let imgsorteo = document.getElementById("imgsorteo");
let imggrid = document.getElementById("imggrid");
let deplista = document.getElementById("deplista");
let listadep = deplista.querySelectorAll("article");
let listamain = document.getElementById("main");
let graficas = document.querySelectorAll(".grafica");
let filtro1 = document.getElementById("anual");
let filtro2 = document.getElementById("meses");
let filtro3 = document.getElementById("genero");
let perfil = document.getElementById("perfil");

// Eventos especiales
listadep.forEach(function (departamento) {
    departamento.addEventListener("click", () => {
        sesionDepartamento = departamento.id;
        intercambiarDepartamento();
    });
});

filtro1.addEventListener("change", filtrarGraficas);
filtro2.addEventListener("change", filtrarGraficas);
filtro3.addEventListener("change", filtrarGraficas);

function filtrarGraficas() {
    let valorAnual = filtro1.value;
    let valorMes = filtro2.value;
    let valorGenero = filtro3.value;

    graficas.forEach((grafica) => {
        let cumpleFiltroAnual =
            valorAnual === "SinFiltro" ||
            grafica.classList.contains(valorAnual);
        let cumpleFiltroMes =
            valorMes === "SinFiltro" || grafica.classList.contains(valorMes);
        let cumpleFiltroGenero =
            valorGenero === "SinFiltro" ||
            grafica.classList.contains(valorGenero);

        if (
            cumpleFiltroAnual &&
            cumpleFiltroMes &&
            cumpleFiltroGenero &&
            cumpleFiltroGenero
        ) {
            grafica.style.display = "flex";
        } else {
            grafica.style.display = "none";
        }
    });
}

function MostrarPerfil(e) {
    perfil.style.display = "flex";
    perfil.style.animation = "aparecerTargeta 0.8s ease-in-out forwards";
    e.stopPropagation();
}
document.addEventListener("click", (e) => {
    if (!perfil.contains(e.target)) {
        perfil.style.animation = "desaparecerTargeta 0.8s ease-in-out forwards";
        setTimeout(() => {
            perfil.style.display = "none";
        }, 1000);
    }
});

function cambiarModo1() {
    tema2.checked = tema.checked;
    cambiarTema();
}
function cambiarModo2() {
    tema.checked = tema2.checked;
    cambiarTema();
}

function cambiarTema() {
    if (tema.checked || tema2.checked) {
        sesionTema = "oscuro";
        intercambiarColores();
    } else {
        sesionTema = "claro";
        intercambiarColores();
    }
}

function cambiarDisplay() {
    if (sesiondisplay == "flex") {
        sesiondisplay = "grid";
    } else if (sesiondisplay == "grid") {
        sesiondisplay = "flex";
    }
    controlarDisplay();
}

function controlarDisplay() {
    secciones = listamain.querySelectorAll("section");
    secciones.forEach(function (seccion) {
        if (seccion.id == sesionMain) {
            if (sesiondisplay == "grid") {
                seccion.style.display = "grid";
                seccion.classList.add("maingrid");
                imggrid.src = "wwwroot/Resources/Grid.svg";
            } else {
                seccion.style.display = "flex";
                seccion.classList.remove("maingrid");
                imggrid.src = "wwwroot/Resources/Barras.svg";
            }
        } else {
            seccion.style.display = "none";
        }
    });
}

function intercambiarDepartamento() {
    departamentoActual = document.getElementById(sesionDepartamento);
    departamentoActual.classList.add("depselected");

    listadep.forEach((departamento) => {
        if (departamento != departamentoActual) {
            departamento.classList.remove("depselected");
        }
    });

    switch (departamentoActual.id) {
        case "general":
            sesionMain = "maincardsGeneral";
            break;
        case "arquitectura":
            sesionMain = "maincards1";
            break;
        case "ingcivil":
            sesionMain = "maincards2";
            break;
        case "ingelectronica":
            sesionMain = "maincards3";
            break;
        case "ingelectrica":
            sesionMain = "maincards4";
            break;
        case "ingindustrial":
            sesionMain = "maincards5";
            break;
        case "ingmecanica":
            sesionMain = "maincards6";
            break;
        case "ingmecatronica":
            sesionMain = "maincards7";
            break;
        case "ingsistemas":
            sesionMain = "maincards8";
            break;
        case "gestion":
            sesionMain = "maincards9";
            break;
        case "administracion":
            sesionMain = "maincards10";
            break;
        case "contabilidad":
            sesionMain = "maincards11";
            break;
        default:
            sesionMain = "maincardsGeneral";
            break;
    }
    controlarDisplay();
}

function intercambiarColores() {
    if (sesionTema == "claro") {
        root.style.setProperty("--blanco", "white");
        root.style.setProperty("--grisligero", "#e8e8e8");
        root.style.setProperty("--azul", "#2240b0");
        root.style.setProperty("--azulselect", "#4787ff");
        root.style.setProperty("--verdelima", "#8eda8f");
        root.style.setProperty("--verdeselect", "#82d4f5");
        root.style.setProperty("--gris", "#7a7a7a");
        root.style.setProperty("--grishover", "#bebebe");
        root.style.setProperty("--negro", "black");
        root.style.setProperty("--negroA", "#e6e6e6");
        root.style.setProperty("--grisA", "#c5c5c5");
        root.style.setProperty("--grisClaroA", "#818181");
        root.style.setProperty("--grisOscuro", "#dfdfdf");
        root.style.setProperty("--filtro", "invert(0)");
    } else if (sesionTema == "oscuro") {
        root.style.setProperty("--blanco", "#121212");
        root.style.setProperty("--grisligero", "#2f2f2f");
        root.style.setProperty("--azul", "#3d55f6");
        root.style.setProperty("--azulselect", "#2240b0");
        root.style.setProperty("--verdelima", "#8eda8f");
        root.style.setProperty("--verdeselect", "#8ddbff");
        root.style.setProperty("--gris", "#d9d9d9");
        root.style.setProperty("--grishover", "#4b4b4b");
        root.style.setProperty("--negro", "white");
        root.style.setProperty("--negroA", "#111827");
        root.style.setProperty("--grisA", "#1f2937");
        root.style.setProperty("--grisClaroA", "#9ca3af");
        root.style.setProperty("--grisOscuro", "#212121");
        root.style.setProperty("--filtro", "invert(0.5)");
    }
}

function cambiarSorteo() {
    if (sesionDepfiltro == "asc") {
        sesionDepfiltro = "desc";
    } else if (sesionDepfiltro == "desc") {
        sesionDepfiltro = "asc";
    }
    intercambiarSorteo();
}
function intercambiarSorteo() {
    if (sesionDepfiltro == "asc") {
        deplista.style.flexDirection = "column";
        imgsorteo.src = "wwwroot/Resources/SortearDebajo.svg";
    } else {
        deplista.style.flexDirection = "column-reverse";
        imgsorteo.src = "wwwroot/Resources/SortearArriba.svg";
    }
}

function ActualizarFechas() {
    let Opcion1 = document.getElementById("anoactual");
    let Opcion2 = document.getElementById("anopasado");

    let fechaActual = new Date();
    let fechaPasada = new Date();
    fechaPasada.setFullYear(fechaActual.getFullYear() - 1);

    Opcion1.innerText = fechaActual.getFullYear();
    Opcion2.innerText = "⭠" + fechaPasada.getFullYear();
}

// Metodos del Backend

window.addEventListener("beforeunload", () => {
    let data = {
        sesionTema: sesionTema,
        sesionDepfiltro: sesionDepfiltro,
        sesionDepartamento: sesionDepartamento,
        sesiondisplay: sesiondisplay,
        sesionMain: sesionMain,
    };
    localStorage.setItem("sesion", JSON.stringify(data));
});

document.addEventListener("DOMContentLoaded", () => {
    InvocarCarga(2000);
    ActualizarFechas();

    let sesionGuardada = localStorage.getItem("sesion");

    if (sesionGuardada) {
        let sesion = JSON.parse(sesionGuardada);
        sesionTema = sesion.sesionTema;
        sesionDepfiltro = sesion.sesionDepfiltro;
        sesionDepartamento = sesion.sesionDepartamento;
        sesiondisplay = sesion.sesiondisplay;
        sesionMain = sesion.sesionMain;

        intercambiarSorteo();
        intercambiarDepartamento();
        controlarDisplay();

        if (sesionTema === "oscuro") {
            intercambiarColores();
            tema.checked = true;
        } else {
            intercambiarColores();
            tema.checked = false;
        }
    }

    generalGrafica1();
    generalGrafica2();
    generalGrafica3();
    generalGrafica4();
    generalGrafica5();
    generalGrafica6();
    generalGrafica7();
});

// Notificaciones TOAST
function NotificacionToast(Tipo, Mensaje) {
    let Imagen;
    let Titulo;
    switch (Tipo) {
        case "Exito":
            Titulo = "Exito";
            Imagen = "wwwroot/Resources/OKIcon.svg";
            break;
        case "Error":
            Titulo = "Error";
            Imagen = "wwwroot/Resources/ErrorIcon.svg";
            break;
        case "Adv":
            Titulo = "Advertencia";
            Imagen = "wwwroot/Resources/WarningIcon.svg";
            break;
        case "Info":
            Titulo = "Informacion";
            Imagen = "wwwroot/Resources/InfoIcon.svg";
            break;
        default:
            Imagen = "wwwroot/Resources/InfoIcon.svg";
            break;
    }

    let toast = document.createElement("dialog");
    toast.innerHTML = `
            <figure>
                <img src="${Imagen}" />
            </figure>
            <summary>
                <h3>${Titulo}</h3>
                <label>${Mensaje}</label>
            </summary>
        `;

    toastnotf.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = "desaparecer 1s ease-in-out";
        setTimeout(() => {
            toast.remove();
        }, 1000);
    }, 4000);
}
// Cargando asincrono
function InvocarCarga(tiempo) {
    animation.play();
    Cargando.style.animation = "iniciocargando 1s ease forwards";
    setTimeout(() => {
        Cargando.style.animation = "terminocargando 1s ease forwards";
        setTimeout(() => {
            animation.stop();
        }, 1000);
    }, tiempo);
}
