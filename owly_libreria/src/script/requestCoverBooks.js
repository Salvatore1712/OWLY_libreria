//COPERTINE https://covers.openlibrary.org/b/$key/$value-$size.jpg

export async function requestCoverBooks(id) {
  const img = document.querySelector(".cards__image_1");

  let rispostaCopertine = await fetch(
    `https://covers.openlibrary.org/b/id/240727-S.jpg`,
  );
  if (!rispostaCopertine.ok) {
    throw new Error("Errore rete" + rispostaCopertine.status);
  }
  let copertina;
}
