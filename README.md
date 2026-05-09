# EFREI Computer Science Department — Showcase Website

A static, multi-page showcase website for the EFREI Computer Science Department,
developed as part of the TI402 Web Development course (2025-2026).

The site is built exclusively with HTML5, CSS3 and vanilla JavaScript. No
framework or external library is used, in compliance with the project
specifications.

## Authors

- Briot Erwann
- Houari Houssam

## Course

- Subject: TI402 / TI402P / TI402Bdx — Web Development Project
- Instructor: Amir Chachoui
- Academic year: 2025-2026

## Features

- Login page with two professor accounts and persistent session
  (`localStorage`)
- Personal home page per user with mini-planning, video feed and quick
  navigation
- Full weekly planning page rendered as an HTML table
- Professors directory with interactive flip cards (i took css 3D transform from the web)
- Grade-management page: student search, dynamic form, scrollable grade list
- Card-collection mini-game (gacha) with three rarity tiers, animated
  reveal and 3D card-flip animation (also from web animation) + You can export you deck
  to the project of Tom Hausmann to use your cards
- Personal collection page with persistent storage, JSON export and reset
- "Talk to us" chatbot driven by an intent-matching JSON dataset
- About-us page presenting the project members
- Responsive header, navigation bar and footer shared across all pages

## Tech Stack

- HTML5 (semantic structure, forms, tables)
- CSS3 (Flexbox, Grid, custom animations, 3D transforms, media queries)
- JavaScript ES6+ (DOM manipulation, `fetch`, `localStorage`, Blob API)
- JSON (data sources for professors and chatbot intents)

## Project Structure

```
.
├── css/
│   ├── style1.css         Global stylesheet (shared across pages)
│   └── home.css           Styles specific to the home page
├── js/
│   ├── script.js          Authentication, gacha, collection, grades
│   └── chatbot.js         Intent-based chatbot logic
├── html/
│   ├── connexion.html     Login page (entry point)
│   ├── prof1/             Pages for the first professor (Houari Houssam)
│   └── prof2/             Pages for the second professor (Briot Erwann)
├── img/                   General images (avatars, logos, card art)
├── img-prof/              Photos used in the professors directory
└── jsons/
    ├── professors.json    Card data for the gacha feature
    └── intents.json       Chatbot intents and responses
```

Each profile folder (`prof1`, `prof2`) contains the same set of pages:
`home.html`, `planning.html`, `prof.html`, `notes.html`, `gacha.html`,
`collection.html`, `contact.html`, `aboutus.html`.

## Getting Started

The project is fully static and requires no build step.

1. Clone the repository.
2. Open `html/connexion.html` directly in a modern browser, or serve the
   project root with any static HTTP server, for example:

   ```
   python3 -m http.server 8000
   ```

   The site will then be available at
   `http://localhost:8000/html/connexion.html`.

A local server is recommended so that `fetch` calls to the JSON files are
not blocked by the browser's `file://` security policy.

## Test Credentials

| Username | Password | Profile               |
|----------|----------|-----------------------|
| houss    | lpb      | Houari Houssam (prof1)|
| erwann   | lpb      | Briot Erwann (prof2)  |

## Notes on Persistence

User-specific data (collected cards) is stored in the browser's
`localStorage` under per-user keys (`collection_houss`,
`collection_erwann`). Clearing browser data will reset the collection.

## Compliance with Project Requirements

- HTML5, CSS3 and vanilla JavaScript only — no framework or library
- All required pages (home, content pages, contact, about) are present
- Header and footer included on every page, with a footer link to the
  About page
- Forms (login, grade entry, chatbot) and tables (planning, grades) are
  used and manipulated
- Dynamic features implemented in JavaScript: authentication, gacha
  draw, card flip, persistent collection, chatbot, dynamic grade list
- Site directory structure does not exceed two levels below `html/`

## Use of AI

We use some ia for the css part we cannot find any ressources on the web,
or we had no idea about some args.
