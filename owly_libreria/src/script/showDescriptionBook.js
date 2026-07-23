export function showDescription() {
  const btnArrow = document.querySelectorAll(".arrow"); //array lista tag freccia

  //listener al click di ogni freccia
  btnArrow.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const card = arrow.closest(".cards");
      const boxDescription = card.querySelector(
        ".cards__descriprion",
      ); //div descrizione
      const textCard = card.querySelector(".cards__text"); //testo card

      //mostra id div desc nella sua altezza
      boxDescription.classList.toggle("showDescription");

      //mostra il testo della descrizione
      textCard.classList.toggle("showDescription");

      //cambia la direzione della freccia
      arrow.textContent = arrow.textContent === "▷" ? "▽" : "▷";
    });
  });
}

showDescription();
