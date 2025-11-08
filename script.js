// Botón que lleva a la galería
document.getElementById("ver-productos").addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

// Efecto interactivo al comprar
const botones = document.querySelectorAll(".btn-comprar");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    alert("Gracias por tu interés 💖 Próximamente disponible en tienda!");
  });
});
