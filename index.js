let perros = document.querySelector("#perros-a");
perros.addEventListener("click", (e) => {
  let inactivos = document.querySelectorAll(".inactive");
  inactivos.forEach((etiqueta) => {
    etiqueta.classList.add("active");
    console.log(etiqueta);
  });
});
