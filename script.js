function mostrar(seccion) {
  
  document.querySelectorAll("section").forEach(s => s.classList.remove("activo"));
  
  document.getElementById(seccion).classList.add("activo");

  
  document.getElementById("Portfolio").checked = false;
}
