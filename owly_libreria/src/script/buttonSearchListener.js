//Import richiesta API
import { richiestaLibriAPI } from "./requestBookAPI";
import { showDescription } from "./showDescriptionBook";

export function buttonCerca() {
  // * * * * * * * LOGICA AL CLICK DEL BOTTONE CERCA
  //selezione elementi
  const inputSearchBar = document.getElementById("inputSearch");
  const btnSearch = document.getElementById("btnSearch");

  btnSearch.addEventListener("click", () => {
    let categoria = inputSearchBar.value;
    console.log(inputSearchBar);

    richiestaLibriAPI(categoria);
    showDescription();
  });
}

buttonCerca();
