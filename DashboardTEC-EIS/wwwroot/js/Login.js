// Variables Globales
const animation = lottie.loadAnimation({
    container: document.getElementById("Cargando"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "/Resources/Loading.json", // ruta al archivo JSON
});
let Cargando = document.getElementById("Cargando");

// Obtencion de Elementos HTML
let toastnotf = document.getElementById("toastnotf");
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let form = document.getElementById("form");

// Eventos
function login() {
    console.log("usuario", "password");
}

function PruebaN() {
    InvocarCarga();
    NotificacionToast("Exito", "prueba de mensaje de un exito");
    NotificacionToast("Error", "prueba de mensaje de un error");
    NotificacionToast("Adv", "prueba de mensaje de advertencia");
    NotificacionToast("Info", "prueba de mensaje de informacion");
}

// Metodos del BACKEND

// Notificaciones TOAST
function NotificacionToast(Tipo, Mensaje) {
    let Imagen;
    let Titulo;
    switch (Tipo) {
        case "Exito":
            Titulo = "Exito";
            Imagen = "/Resources/OKIcon.svg";
            break;
        case "Error":
            Titulo = "Error";
            Imagen = "/Resources/ErrorIcon.svg";
            break;
        case "Adv":
            Titulo = "Advertencia";
            Imagen = "/Resources/WarningIcon.svg";
            break;
        case "Info":
            Titulo = "Informacion";
            Imagen = "/Resources/InfoIcon.svg";
            break;
        default:
            Imagen = "/Resources/InfoIcon.svg";
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
function InvocarCarga() {
    animation.play();
    Cargando.style.animation = "iniciocargando 1s ease forwards";
    setTimeout(() => {
        Cargando.style.animation = "terminocargando 1s ease forwards";
        animation.stop();
    }, 4000);
}

form.onsubmit = () => {
    InvocarCarga();

    setTimeout(() => {
        form.submit();
    }, 3000);

    return false;
};
