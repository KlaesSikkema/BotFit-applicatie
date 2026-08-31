# CLAUDE.md — werkgids & plan voor BotFit

Dit bestand is mijn (Claude's) eigen leidraad bij dit project. Ik lees het aan
het begin van elke sessie waarin we aan BotFit werken en houd het actueel.

## 1. Wat BotFit is

Een installeerbare PWA (één `index.html`, vanilla JS) voor krachttraining met
impact, voeding en gezondheidsmonitoring bij **osteopenie**. Draait offline via
een service worker; optionele, client-side versleutelde cloud-sync via Supabase.
Gebruiker/eigenaar: **Klaes Sikkema** (man, osteopenie, lengte 183–184 cm).
Ook gebruikt door een familielid (Jitse) met een eigen sync-sleutel.

## 2. Werkafspraken met Klaes (vast — niet afwijken)

1. **Altijd een GitHub-repo.** Zodra we iets programmeren bestaat er een repo
   (privé, tenzij anders afgesproken). Repo: `KlaesSikkema/botfit`.
2. **Dagelijks bijwerken op werkdagen.** Elke dag dat we aan de code werken:
   commit + push naar GitHub. Liever meerdere kleine commits dan niets.
3. **Nooit werk verliezen bij afsluiten.** De cloud-omgeving is *ephemeral* en
   kan tussentijds gewist worden. Dus: aan het einde van elke werksessie de
   laatste broncode vastleggen (commit + push) én belangrijke inzichten
   opslaan (zie punt 4). Nooit een sessie afsluiten met alleen lokale (cloud)
   bestanden.
4. **Inzichten documenteren op de Mac.** Alle belangrijke inzichten, keuzes en
   onderbouwingen meteen opslaan op Klaes' Mac onder
   `~/Developer/BotFit/docs/`. Dit staat los van de code en overleeft alles.
5. **Broncode ophalen aan het begin.** Bij een nieuwe sessie eerst de actuele
   code uit de GitHub-repo (of de gekoppelde projectmap) halen vóór ik wijzig.

## 3. Vaste release-checklist (elke uitgebrachte versie)

1. Wijzig `index.html` (en zo nodig `sw.js`).
2. **Bump het versienummer** op twee plekken:
   - footer in `index.html`: `BotFit <b>vN</b>`
   - cache in `sw.js`: `var CACHE='botfit-vN';`
3. Syntaxcheck: extraheer het inline script en `node --check`.
4. Functionele test met Playwright (headless Chromium) + screenshots.
5. Commit + push naar GitHub.
6. Lever een `botfit-app-vN.zip` (7 bestanden, zonder map-wrapper) aan Klaes.
7. Deploy: map naar de **Deploys**-pagina van de bestaande Netlify-site slepen
   (zelfde URL houden), niet naar /drop. SW-cachebump ververst geïnstalleerde
   apps vanzelf.

## 4. Architectuur in het kort

- **State**: object `S`, opgeslagen in `localStorage['botfit_v1']`.
  `fresh()` / `migrate()` / `save()` / `load()`. `migrate()` is additief — nooit
  bestaande data breken; nieuwe velden defensief toevoegen.
- **Trainingsmodel**: dubbele progressie. Vast aantal sets × rep-range
  (`setsTarget`, `repLow`, `repHigh`); eerst reps opbouwen, dan gewicht. Gewicht
  wordt afgerond op de **echte toestelstap** (`exStep`: 1,25/2,5/5/10 kg;
  kabelstacks default 5, schijfmachines 2,5). Percentage-stap via `progPct`;
  grotere "bloksprong" na consistente weken via `blockReady`/`blockPct`.
- **Tabs**: Vandaag (`renderToday`), Voortgang (`renderHist` + per-oefening
  detail met grafieken en plan), Beweging (`renderMove`), Gezondheid
  (`renderFood` + `bmiView` WHtR/BMI + `renderBody` lichaamsmaten), Instellingen.
- **Gezondheidsmaten**: gewicht (`S.measure`), taille (`S.waist`), overige
  omtrekken met historie (`S.bodyHist`). WHtR is de hoofdmaat.
- **Sync**: passphrase → PBKDF2 → AES-256-GCM, rij-id = SHA-256 van passphrase.
  Supabase RPC `sync_get`/`sync_set`. Anon key is publiek/veilig.
- **Grafieken**: inline SVG-helpers (`bigLine`, `weightChart`, `stepChart`), merk-
  groen `#2f7d5b`.

## 5. Backlog / ideeën (bijwerken naar behoefte)

- Optionele "bijwerken?"-hint bij maten die lang niet zijn gelogd.
- Slimme default-toestelstap op basis van Klaes' specifieke toestellen (foto's).
- Netlify continuous deploy vanuit GitHub i.p.v. handmatige drop.
- Eventueel taille-tot-lengte doellijn ook in de gewicht/DEXA-context.

## 6. Wetenschappelijke basis

Zie `docs/BotFit-wetenschappelijke-onderbouwing.md` (en de kopie op de Mac onder
`~/Developer/BotFit/docs/`). Kernpijlers: LIFTMOR-M (mannen, osteopenie:
hoog-intensieve weerstand + impact), ACSM-progressie (2-voor-2), taille-tot-
lengte (WHtR < 0,5) als betere maat dan BMI, en Nederlandse richtlijnen voor
calcium, vitamine D en eiwit. Geen medisch advies — bij twijfel de huisarts.
