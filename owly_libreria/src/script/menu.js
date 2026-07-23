export function menuHamburger() {
  const btnMenu = document.querySelector(".header__menu__icon"); //bottone
  const menuLista = document.querySelector(".header__menu");

  btnMenu.addEventListener("click", () => {
    menuLista.classList.toggle("hideMenu");
  });
}

menuHamburger();
