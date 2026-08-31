# 🦴 BotFit

Een installeerbare Progressive Web App (PWA) voor krachttraining met impact, voeding en gezondheidsmonitoring bij **osteopenie**. Gebouwd rond de evidence-base voor botopbouw (o.a. LIFTMOR-onderzoek: zware weerstand + impact) en de ACSM-progressierichtlijnen.

De app draait volledig in de browser, is te installeren op je iPhone ("Zet op beginscherm") en synchroniseert optioneel versleuteld tussen je apparaten.

## Functies

**Vandaag** — Train per oefening met gewicht, reps en losse sets (incl. links/rechts/straight waar relevant), rusttimer, en per‑toestel foto's en techniekuitleg met spiergroep‑figuurtje.

**Dubbele progressie** — Geen vaste periodes: je doet een vast aantal sets in een rep‑range (bv. 3 × 8–12), bouwt eerst je reps op en verhoogt dán het gewicht. Voorstellen worden afgerond op de **echte gewichtsstap van elk toestel** (1,25 / 2,5 / 5 / 10 kg — schijfmachines vs. kabelstacks). Na consistente weken verschijnt een grotere "bloksprong".

**Voortgang** — Overzicht per oefening (meest getraind bovenaan), met per oefening een detailscherm: grafiek van gewicht over tijd, gewicht × reps (volume) over tijd, en een vriendelijk **plan vooruit**.

**Beweging** — Activiteiten per week (fitness automatisch + handmatige activiteiten als bokszak, wielrennen, hardlopen, tennis), inklapbaar per week. Stappen optioneel.

**Gezondheid** — Gewicht met trend en advies, **taille‑tot‑lengte (WHtR)** als hoofdmaat (kleurgecodeerd, met BMI als informatief tweede getal), een **lichaamsmaten‑figuur** waarin je negen omtrekken invult en per maat het verloop over tijd bekijkt, DEXA‑T‑scores, en optioneel voeding‑pijlers.

**Cloud‑sync** — Optioneel, met één geheime sleutel. Je data wordt **client‑side versleuteld** (AES‑256‑GCM) vóórdat het naar Supabase gaat; zonder je sleutel is het onleesbaar.

## Bestanden

| Bestand | Rol |
|---|---|
| `index.html` | De volledige app (HTML + CSS + JS in één bestand) |
| `sw.js` | Service worker (offline cache, versiebeheer) |
| `supabase.js` | Gebundelde Supabase‑client (voor offline betrouwbaarheid) |
| `manifest.webmanifest` | PWA‑manifest |
| `icon-180/192/512.png` | App‑iconen |

## Lokaal draaien

```bash
python3 -m http.server 8099
# open http://localhost:8099
```

Cloud‑sync werkt alleen via `https` of `localhost` (versleuteling vereist een secure context).

## Deployen

Sleep de map naar de **Deploys**-pagina van je Netlify‑site (of naar [app.netlify.com/drop](https://app.netlify.com/drop) voor een nieuwe site). Bump bij elke release de cache‑versie boven in `sw.js` zodat geïnstalleerde apps zichzelf verversen.

## Privacy

Je gegevens staan standaard alleen op je eigen toestel (in de browser). Cloud‑sync is optioneel en versleuteld met jouw sleutel. De ingebedde Supabase‑sleutel is een publieke *anon key* en bevat geen geheimen.

## Disclaimer

BotFit geeft algemene informatie, **geen medisch advies**. Overleg zwaar trainen en supplementen met je arts.

---

Huidige versie: **v29**
