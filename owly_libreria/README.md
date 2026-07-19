# Owly Libreria

Progetto realizzato nell'ambito del percorso formativo **start2impact**.

Al momento il progetto è nella sua fase iniziale: la struttura è quella generata da [Vite](https://vite.dev/) (template vanilla JS), a cui sono già stati aggiunti il branding e gli assets grafici del progetto (logo "Owly", hero image, icone), mentre la logica applicativa vera e propria è ancora da sviluppare.

## Stack tecnologico

- **[Vite](https://vite.dev/)** — build tool e dev server
- **JavaScript** (vanilla, ES Modules)
- **[Sass/SCSS](https://sass-lang.com/)** — preprocessore CSS, organizzato in partial (`base/`, `layout/`)
- **HTML5**

## Struttura del progetto

```
owly_libreria/
├── index.html              # entry point HTML
├── public/
│   ├── favicon.svg
│   └── icons.svg           # sprite SVG con le icone (social, documentazione, ecc.)
├── src/
│   ├── main.js              # entry point JS, monta il markup nell'#app
│   ├── counter.js           # componente di esempio (contatore)
│   ├── style.css            # stile globale (CSS variables, tema chiaro/scuro)
│   ├── assets/               # immagini e loghi (hero, logo Owly, ecc.)
│   └── styles/                # architettura SCSS
│       ├── main.scss          # entry point SCSS
│       ├── base/
│       │   ├── _index.scss    # forward dei partial base
│       │   └── _reset.scss    # CSS reset
│       └── layout/
│           └── _index.scss    # regole di layout (attualmente vuoto)
├── package.json
└── .gitignore
```

## Requisiti

- [Node.js](https://nodejs.org/) (consigliata l'ultima LTS)
- npm

## Installazione

```bash
npm install
```

## Script disponibili

| Comando           | Descrizione                                          |
| ------------------ | ----------------------------------------------------- |
| `npm run dev`     | Avvia il dev server di Vite con hot reload            |
| `npm run build`   | Crea la build di produzione nella cartella `dist/`    |
| `npm run preview` | Serve in locale la build di produzione già generata   |

## Stato del progetto

🚧 **In sviluppo** — il progetto è appena stato inizializzato. I contenuti presenti in `src/main.js` sono ancora quelli di esempio forniti dallo scaffolding di Vite e verranno sostituiti con le funzionalità reali della libreria (Owly).

## Autore

Salvatore De Roma
