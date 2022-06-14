const btnAbrirpopup = document.getElementById("btn-abrir-popup");

const overlay = document.getElementById("overlay");

const popup = document.getElementById("popup");

const btnCerrarpopup = document.getElementById('btn-cerrar-popup');

if (btnAbrirpopup) {
abrirIngresar = () => {
    overlay.classList.add("active")
    popup.classList.add("active")
};
}


btnAbrirpopup.addEventListener("click", abrirIngresar);



cerrarIngresar = () => {
    overlay.classList.remove("active")
    popup.classList.remove("active")
};

btnCerrarpopup.addEventListener("click", cerrarIngresar);