# MADAVIT Web - Astro + Decap CMS

Moderný web pre spoločnosť MADAVIT postavaný na Astro s Decap CMS pre správu obsahu.

## Funkcionality

- ✅ Multi-language (SK/CZ/EN/DE)
- ✅ Decap CMS admin panel na editovanie obsahu
- ✅ Modulárna štruktúra - ľahko sa rozšíri
- ✅ Professional, čistý dizajn
- ✅ Responsive design
- ✅ Optimalizovaný na Netlify deployment

## Sekcie

- **Home** - Titulka so sliderom a CTA
- **O nás** - Popis procesu a výhod
- **Galéria** - Fotky realizácií
- **Kontakt** - Formulár a informácie
- **Recenzie** - Hodnotenia zákazníkov
- **FAQ** - Otázky a odpovede
- **Katalóg** - Produkty (neskôr)

## Lokálny vývoj

```bash
npm install
npm run dev
```

Stránka bude dostupná na http://localhost:3000

## Admin panel

Decap CMS je dostupný na `/admin/` - umožňuje editovať obsah bez kódovania.

## Deployment na Netlify

1. Push na GitHub (repozitár: `madavit-web`)
2. Pripoja sa na Netlify
3. Netlify automaticky builduje a deployuje

## Štruktúra projektu

```
src/
├── layouts/       # HTML šablóny (Layout.astro)
├── pages/         # Stránky (sk, cz, en, de)
├── components/    # Reusable komponenty
├── styles/        # CSS štýly
└── content/       # Obsah spravovaný cez CMS
public/
└── admin/         # Decap CMS config
```

## Úpravy a rozšírenia

Kód je štruktúrovaný na modulárny prístup - ľahko sa dajú:
- Pridať nové sekcie
- Zmeniť dizajn
- Pridať nové jazyky
- Integrovať formuláre a API

## Kontakt

info@madavit.sk
+421 948 677 881
