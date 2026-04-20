// 🌟 EFECTO LUZ QUE SIGUE EL MOUSE
document.addEventListener("mousemove", e => {
    document.body.style.backgroundPosition =
        (e.clientX / 50) + "px " + (e.clientY / 50) + "px";
});


// 💬 MENSAJES DINÁMICOS
const mensajes = [
    "🌿 Adopta una plantita hoy",
    "💚 Dale vida a tu espacio",
    "🌱 Verde es felicidad",
    "✨ Tu mini jardín te espera"
];

let i = 0;
setInterval(() => {
    const p = document.querySelector("header p");
    if (p) {
        p.textContent = mensajes[i];
        i = (i + 1) % mensajes.length;
    }
}, 3000);


// 🚪 TRANSICIÓN SUAVE ENTRE VISTAS
function verProducto(nombre, desc, precio, img) {
    const lista = document.getElementById("lista");
    const detalle = document.getElementById("detalle");

    lista.style.opacity = "0";

    setTimeout(() => {
        lista.style.display = "none";
        detalle.style.display = "block";

        document.getElementById("nombre").textContent = nombre;
        document.getElementById("desc").textContent = desc;
        document.getElementById("precio").textContent = precio;
        document.getElementById("imagen").src = img;

        detalle.style.opacity = "0";
        setTimeout(() => {
            detalle.style.opacity = "1";
        }, 50);

    }, 300);
}


// 🔙 VOLVER CON ANIMACIÓN
function volver() {
    const lista = document.getElementById("lista");
    const detalle = document.getElementById("detalle");

    detalle.style.opacity = "0";

    setTimeout(() => {
        detalle.style.display = "none";
        lista.style.display = "flex";

        lista.style.opacity = "0";
        setTimeout(() => {
            lista.style.opacity = "1";
        }, 50);

    }, 300);
}


// 🛒 COMPRA
function comprar() {
    alert("🌱 ¡Gracias por tu compra!");
}