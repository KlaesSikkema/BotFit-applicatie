# BotFit — als Claude Project opzetten

Zo zet je BotFit als **Claude Project** klaar (op claude.ai), met vaste instructies en kennisbestanden zodat elke nieuwe chat meteen de juiste context heeft.

## Stap 1 — Nieuw project

Ga in de Claude-app (claude.ai of desktop) naar **Projects → New project**.
- **Naam:** `BotFit`
- **Beschrijving:** `PWA voor krachttraining, voeding en gezondheid bij osteopenie — met dubbele progressie, taille-tot-lengte en lichaamsmaten.`

## Stap 2 — Projectinstructies plakken

Open bij het project **"Set project instructions"** (of de instructie-/knowledge-sectie) en plak onderstaande tekst er integraal in:

---

BotFit is een installeerbare Progressive Web App (één `index.html`, vanilla JS) voor krachttraining met impact, voeding en gezondheidsmonitoring bij osteopenie. Eigenaar/gebruiker: Klaes Sikkema (man, osteopenie, lengte 183–184 cm). Ook gebruikt door familielid Jitse met een eigen sync-sleutel.

Bron van waarheid: privé GitHub-repo `KlaesSikkema/BotFit-applicatie`. Lokale projectmap op Klaes' Mac: `~/Developer/BotFit`.

Werkafspraken (altijd volgen):
1. Bij programmeren bestaat er altijd een privé GitHub-repo.
2. Op elke werkdag committen en pushen (kleine commits mogen).
3. Nooit een sessie afsluiten zonder de laatste broncode én inzichten vast te leggen (de cloud-omgeving is ephemeral). Belangrijke inzichten meteen als document opslaan onder `~/Developer/BotFit/docs/`.
4. Bij een nieuwe sessie eerst de actuele code ophalen vóór wijzigen.

Release-checklist per versie:
1. Wijzig `index.html` (en zo nodig `sw.js`).
2. Bump het versienummer op twee plekken: footer in `index.html` (`BotFit vN`) en cache in `sw.js` (`var CACHE='botfit-vN';`).
3. Syntaxcheck (extraheer inline script, `node --check`).
4. Functionele test met Playwright (headless Chromium) + screenshots.
5. Commit + push (via GitHub Desktop doet Klaes de push).
6. Lever een `botfit-app-vN.zip` (7 bestanden, zonder map-wrapper).
7. Deploy: map naar de Deploys-pagina van de bestaande Netlify-site slepen (zelfde URL). De SW-cachebump ververst geïnstalleerde apps vanzelf.

Architectuur kort: state-object `S` in `localStorage['botfit_v1']` met `fresh()/migrate()/save()/load()` (migrate is additief). Trainingsmodel = dubbele progressie: vast aantal sets × rep-range (`setsTarget/repLow/repHigh`), eerst reps opbouwen dan gewicht; gewicht afgerond op de echte toestelstap (`exStep`: 1,25/2,5/5/10 kg; kabelstacks 5, schijfmachines 2,5). Tabs: Vandaag, Voortgang (per-oefening detail met grafieken + plan vooruit), Beweging, Gezondheid (gewicht, taille-tot-lengte/WHtR als hoofdmaat, BMI informatief, lichaamsmaten met historie, DEXA), Instellingen. Sync: passphrase → PBKDF2 → AES-256-GCM, Supabase RPC; anon key is publiek/veilig. Grafieken: inline SVG, merk-groen #2f7d5b.

Meetkeuzes: taille-tot-lengte (< 0,5) is de hoofdmaat i.p.v. BMI, omdat die spier niet meetelt en beter past bij een recomp-doel. Onderbouwing: LIFTMOR-M (mannen, osteopenie), ACSM 2-voor-2, Ashwell (WHtR), NICE. Alles is algemene informatie, geen medisch advies.

---

## Stap 3 — Kennisbestanden uploaden

Voeg deze bestanden toe als **project knowledge** (sleep ze erin). Ze staan op je Mac onder `~/Developer/BotFit/`:

- `CLAUDE.md` — de werkgids (dubbel met de instructies hierboven, maar handig als naslag).
- `README.md` — overzicht van de app en bestanden.
- `docs/BotFit-wetenschappelijke-onderbouwing.pdf` (of `.md`) — de volledige onderbouwing met bronnen.
- `index.html` — de volledige app als referentie (zodat een chat de code kan lezen zonder de repo).

Tip: `index.html` is groot (~124 KB) maar past prima als kennisbestand. Wil je het licht houden, laat 'm dan weg en verwijs naar de GitHub-repo.

## Klaar

Vanaf dan kun je in het BotFit-project een nieuwe chat starten en meteen zeggen "we gaan verder met v30" — de context (werkafspraken, architectuur, meetkeuzes) is dan al bekend.
