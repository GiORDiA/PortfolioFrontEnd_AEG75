const menu = document.querySelector(".menu"); // seleccionamos el elemento que tiene clase menu. 
const openMenuBtn = document.querySelector(".open-menu"); // seleccionamos el elemento que tiene la clase open-menu.
const closeMenuBtn = document.querySelector(".close-menu"); // seleccionamos el elemento que tiene clase la close-menu.


function toggleMenu() {
  menu.classList.toggle("menu_opened"); // función para que el menu, si esta abierto lo cierre y viceversa.
}

 openMenuBtn.addEventListener("click", toggleMenu) // asignamos el evento "click" a la classe abrir cuando escuche el clickeo.
 closeMenuBtn.addEventListener("click", toggleMenu) // asignamos el evento "click" a la classe cerrar cuando escuche el clickeo.
 