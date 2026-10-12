const secciones = [
  { texto: "Home", url: "index.html" },
  { texto: "Modificar contenido HTML", url: "contenido.html" },
];

const menu = document.getElementById("menu");
const paginaActual = location.pathname.split("/").pop() || "index.html";

secciones.forEach(function (seccion) {
  const enlace = document.createElement("a");
  enlace.href = seccion.url;
  enlace.textContent = seccion.texto;
  if (seccion.url === paginaActual) {
    enlace.classList.add("activo");
  }
  menu.appendChild(enlace);
});