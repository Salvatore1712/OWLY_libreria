//import funzione per la gestione della visualizzazione descrizione
import { showDescription } from "./showDescriptionBook";

//API = "https://openlibrary.org/subjects/ + cat + .json";

//*****  FUNZIONE RICHIESTA LIBRI API *****

export async function richiestaLibriAPI(categoria) {
  // fetch a openLibrary
  try {
    let risposta = await fetch(
      `https://openlibrary.org/subjects/${categoria}.json`,
    );
    if (!risposta.ok) {
      throw new Error(`Errore HTTP richiesta:${risposta.status}`);
    }
    let libreria = await risposta.json();
    const libri = libreria.works; //array di libri

    // const titoli = libri.map((lib) => lib.title); //array di titoli libri
    // const copertine = libri.map((lib) => lib.cover_id); //array di id copertine

    // console.log(titoli, copertine);

    // API COPERTINE =`https://covers.openlibrary.org/b/id/10527843-S.jpg`;
    const cardHTML = libri
      .map(
        (lib) => `
        <div class="cards">
          <h4 class="cards__title">${lib.title}</h4>
          <span class="arrow">▷</span>
          <div class="cards__descriprion">
              <img src="https://covers.openlibrary.org/b/id/${lib.cover_id}-M.jpg" class="cards__image">
              <p class="cards__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dolorem reprehenderit dolores minus itaque ipsum officiis ut repudiandae ipsam.</p>
          </div>
        </div>`,
      )
      .join("");
    const divBooks = document.querySelector(".books");

    //reset contenuto div per i libri!
    divBooks.innerHTML = "";

    //inserisci card nel div "books"
    divBooks.insertAdjacentHTML("beforeend", cardHTML);
    showDescription();
  } catch (error) {
    console.log(error);
  }
}
