# BotFit — wetenschappelijke onderbouwing

*Gestructureerde notitie van de "wetenschappelijke" achtergronden achter de keuzes in de app. Algemene informatie, geen medisch advies — overleg zwaar trainen en supplementen met je huisarts.*

Laatste update: augustus 2026 · hoort bij app-versie v29

---

## 1. Uitgangspunt: osteopenie en waarom trainen

Osteopenie is een verlaagde botdichtheid (T-score tussen −1,0 en −2,5) die het risico op osteoporose en botbreuken verhoogt, maar nog geen osteoporose is. Bot is levend weefsel dat zich aanpast aan belasting (het principe van Wolff): botcellen bouwen extra bot op waar de mechanische belasting hoog is. Daarom is **progressieve, relatief zware weerstandstraining met impact** de meest onderbouwde niet-medicamenteuze manier om botdichtheid te behouden of te verbeteren — mits veilig opgebouwd.

De rode draad in de app: train de grote spiergroepen zwaar genoeg om bot te prikkelen, bouw geleidelijk en gestructureerd op, en monitor zowel de training als de gezondheidsmaten die er echt toe doen.

## 2. Trainingsprincipes

### 2.1 Zwaar trainen met impact — LIFTMOR en LIFTMOR-M

De belangrijkste bron is de LIFTMOR-onderzoekslijn (Griffith University, Australië):

- **LIFTMOR** (Watson et al., 2018): bij postmenopauzale vrouwen met lage botdichtheid verbeterde een programma van **hoog-intensieve weerstandstraining + impact (HiRIT)** — zware oefeningen zoals squat, deadlift en overhead press rond 80–85% 1RM plus impact — de botdichtheid van heup en wervelkolom, en het was veilig onder begeleiding.
- **LIFTMOR-M** (Harding et al., 2020): dezelfde aanpak, nu bij **mannen van middelbare en oudere leeftijd met osteopenie/osteoporose**. Ook hier verbeterde HiRIT bot en botsterkte meer dan een lichtere, machinegebaseerde variant. Dit is de voor Klaes (man met osteopenie) meest relevante studie.

**Vertaling naar de app:** het programma stuurt naar relatief zwaar trainen van de grote spiergroepen, met techniek- en opbouwuitleg per toestel. De nadruk ligt op progressieve overload in plaats van "veel herhalingen met licht gewicht".

### 2.2 Progressie: van 2-voor-2 naar dubbele progressie

De ACSM-position stand *Progression Models in Resistance Training for Healthy Adults* (2009) formuleert de bekende **2-voor-2-regel**: kun je twee trainingen achter elkaar twee herhalingen méér dan je doel, dan is het tijd om het gewicht te verhogen. Aanbevolen stappen zijn klein (grofweg 2–10%), en nooit te groot ineens.

De app implementeert dit als **dubbele progressie** (v27+):

1. Je doet elke keer een vast aantal sets in een **rep-range** (standaard 3 × 8–12).
2. Je bouwt eerst je herhalingen op tot de bovenkant van de range.
3. Haal je alle sets op de bovenkant, dán pas gaat het gewicht omhoog en zak je terug in reps.

Dit geeft per oefening een rustig stijgende lijn en vermijdt de valkuil van te grote sprongen. De eerdere vaste periodisering (blokken met dalende reps) is losgelaten omdat die in de praktijk niet werd gebruikt.

### 2.3 Realistische gewichtsstappen

Percentagestappen zijn wiskundig netjes maar fysiek niet altijd mogelijk: je kunt alleen verhogen met de gewichten die een toestel écht heeft. Daarom rondt de app elke suggestie af op de **werkelijke stap van dat toestel**:

- Schijfgeladen machines / vrije gewichten: meestal **2,5 kg** (een paar schijven van 1,25 kg), soms fijner met 1,25 kg.
- Kabel-/stackmachines: meestal **5 kg**.

De stap is per oefening instelbaar (1,25 / 2,5 / 5 / 10 kg). De progressiestap is altijd minimaal één toestelstap, en de +/−-knoppen en voorstellen bewegen in die stap.

### 2.4 Grotere "bloksprong"

Na een periode van consistente training met progressie (globaal 4 weken of ≥8 sessies, met de laatste sessie op volle sets en voldoende reps, zonder terugval) biedt de app een grotere sprong aan (standaard +7%, afgerond op de toestelstap). Dit weerspiegelt dat je na een fase van adaptatie een grotere stap aankunt dan de wekelijkse micro-progressie.

## 3. Voortgang en gezondheid meten

### 3.1 Waarom BMI tekortschiet

BMI = gewicht (kg) ÷ lengte (m)². Met een vaste lengte beweegt BMI alleen met je gewicht. De formule maakt **geen onderscheid tussen spier en vet**: wie spiermassa opbouwt ziet gewicht — en dus BMI — stijgen terwijl hij juist gezonder wordt. Voor iemand die gericht spieren opbouwt (recomp) is BMI daarom een slechte maatstaf, en bij osteopenie is te mager zijn zelfs een risicofactor. In de app staat BMI daarom alleen nog als informatief tweede getal.

### 3.2 Taille-tot-lengte (WHtR) als hoofdmaat

De hoofdmaat in de app is de **taille-tot-lengteverhouding** (waist-to-height ratio, WHtR): middelomtrek ÷ lengte.

- **Onderbouwing:** een grote meta-analyse (Ashwell et al., 2012) laat zien dat WHtR cardiometabool risico beter voorspelt dan zowel middelomtrek alleen als BMI. NICE (Britse richtlijn) adviseert WHtR expliciet naast BMI, met de simpele vuistregel: **houd je taille onder de helft van je lengte** (ratio < 0,5).
- **Categorieën:** 0,4–0,5 gezond; 0,5–0,6 verhoogd; > 0,6 hoog.
- **Voordeel bij spieropbouw:** de maat gebruikt geen gewicht en negeert je heup- en frame-omvang — spier in armen, benen en borst vervuilt het getal niet. Alleen buikvet telt mee. Je taille kan dus dalen terwijl je gewicht (en BMI) gelijk blijft of stijgt.
- **Meten:** op blote huid, midden tussen de onderste rib en het heupbot (ongeveer ter hoogte van de navel), ontspannen na een normale uitademing; meetlint strak maar niet knellend, bij voorkeur 's ochtends.

### 3.3 Waarom niet waist-to-hip voor deze bouw

Waist-to-hip ratio (WHR) gebruikt de heup als noemer. Bij een brede, gespierde bovenbouw met relatief smalle heupen (zoals bij Klaes: schouders ~125, borst ~112, heup ~100 cm) geeft WHR een vertekend hoog getal — deels door de smalle heup, niet door buikvet. Bovendien: als de bilspieren groeien door squat- en heupwerk, "verbetert" de WHR om de verkeerde reden. WHtR kijkt puur naar de buik ten opzichte van de (vaste) lengte en is voor deze bouw de zuiverdere maat. Er bestaat ook een geavanceerdere index (ABSI) die losstaat van BMI; die is sterk voor sterftevoorspelling in cohorten maar vergt referentietabellen en is voor dagelijks zelf bijhouden minder praktisch.

### 3.4 Lichaamsmaten volgen (recomp)

De app laat je negen omtrekken bijhouden (nek, schouders, borst, boven- en onderarm, taille, heup, bovenbeen, kuit) met historie per maat. Zo zie je de recomp-signatuur direct: **taille omlaag (goede richting, groen) terwijl arm-, been- en borstomtrek toenemen (spiergroei, groen)** — óók als de weegschaal nauwelijks beweegt. Dit is betrouwbaarder dan gewicht of BMI om vooruitgang bij gelijktijdig vet verliezen en spier opbouwen te zien.

### 3.5 DEXA en T-scores

Botdichtheid verandert traag. DEXA-metingen (per meetplek, met T-scores) horen doorgaans elke 1–2 jaar herhaald te worden. De app bewaart de T-scores per plek en kleurt ze: groen = normaal (> −1,0), oranje = osteopenie (−1,0 tot −2,5), rood = osteoporose (≤ −2,5). De laagste T-score bepaalt de classificatie.

## 4. Voeding

Ondersteunend aan botopbouw, op basis van Nederlandse richtlijnen (Gezondheidsraad/Voedingscentrum) — stem supplementen af met je huisarts:

- **Calcium:** ~1000–1200 mg/dag (zuivel, groene groenten, noten, vis met graat).
- **Vitamine D:** ~20 µg (800 IE)/dag, vooral via supplement en vette vis; belangrijk voor calciumopname en bot.
- **Eiwit:** ~1,0–1,2 g per kg lichaamsgewicht per dag (bij intensieve krachttraining en op oudere leeftijd eerder aan de bovenkant), verdeeld over de dag, ter ondersteuning van spier- en botbehoud.
- **Gewichtsdoel:** bij osteopenie is behoud van spier- en botmassa belangrijk; niet onnodig afvallen. De app koppelt het gewenste doel (behouden/aankomen/afvallen) aan de gewichtstrend en geeft bijstuur-advies.

## 5. Veiligheid

- Techniek vóór gewicht; volledige, gecontroleerde bewegingsuitslag.
- Rustig opbouwen (2-voor-2, kleine stappen, max ~10% per week).
- Zwaar trainen bij osteopenie/osteoporose bij voorkeur (aanvankelijk) onder begeleiding; overleg met arts of fysiotherapeut, zeker bij bestaande wervelinzakkingen.
- De app geeft **algemene informatie, geen medisch advies**.

## 6. Bronnen

- Watson SL et al. *High-Intensity Resistance and Impact Training Improves Bone Mineral Density and Physical Function in Postmenopausal Women With Osteopenia and Osteoporosis: The LIFTMOR Randomized Controlled Trial.* J Bone Miner Res, 2018. https://pubmed.ncbi.nlm.nih.gov/28975661/
- Harding AT et al. *A Comparison of Bone-Targeted Exercise Strategies to Reduce Fracture Risk in Middle-Aged and Older Men with Osteopenia and Osteoporosis: LIFTMOR-M Semi-Randomized Controlled Trial.* J Bone Miner Res, 2020. https://pubmed.ncbi.nlm.nih.gov/32176813/
- American College of Sports Medicine. *Progression Models in Resistance Training for Healthy Adults* (position stand), 2009. https://pubmed.ncbi.nlm.nih.gov/19204579/
- Ashwell M, Gunn P, Gibson S. *Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis.* Obes Rev, 2012. https://pubmed.ncbi.nlm.nih.gov/22106927/
- NICE. *Overweight and obesity management — identifying and assessing central adiposity (waist-to-height ratio).* https://www.nice.org.uk/guidance/ng246
- Krakauer NY & Krakauer JC. *A New Body Shape Index Predicts Mortality Hazard Independently of Body Mass Index (ABSI).* PLOS ONE, 2012. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0039504
- Voedingscentrum / Gezondheidsraad — richtlijnen calcium, vitamine D en eiwit. https://www.voedingscentrum.nl
