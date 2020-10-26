# Követelmény specifikáció

## 1. Jelenlegi helyzet

Feladataimat rendezetlenül tartom számon, hol egy-egy cetlire írom fel, hol a telefonomba, vagy egyszerűen csak próbálom fejben tartani.
Ez a helyzet nem a legoptimálisabb, hiszen több különböző helyen 'tárolom' teendőim éppen rövidebb vagy hosszabb listáját.
Az észben tartós módszer a legkevésbé hatékony, ugyanis helyette másra is koncentrálhatnám figyelmem, hasznosabb dolgokra.
Mindemellett egy feladat nagyon könnyen elfejelthető, esetleg egyes részleteire rosszul emlékezhetünk.
A füzetre vagy cetlire való felírás már egy fokkal hatékonyabb.
Itt a probléma inkább abban merül ki, hogy rengeteg papírt használok ezzel, amik ráadásul elkeveredhetnek, ha sokfelé tárolom őket.
Sok szemetet is generál ez a megoldás, főleg, ha sokszor 'módosítom' a feladatomat, betelik a cetli és írhatok egy újat, megintcsak sok szemetet generálva.
Ezt egy fokkal hatékonyabban oldotta meg az, amikor a füzetbe felírogatást elhagytam és csak cetliket használtam, egy táblára ragasztgatva.
A telefonos applikáció használata is megfelelő volt, de a piacon elérhető opciók nem feleltek meg nekem maradéktalanul.
Úgy gondolom egy weballkalmazás lenne számomra a legalkalmasabb, kombinálva a fentebbi két módszert.

## 2. Vágyálom rendszer

A projektünk célja egy könnyen átlátható, és kezelhető weboldal létrehozása,
amivel el szeretnénk érni azt, hogy a hétköznapi feladatainkat leegyszerűsítsük.
A tervünk szerint, egy egyszerűen szerkeszthető weboldalt álmodtunk meg, ami felhasználóbarát,
ezzel segítve a felület egyszerű használatát időseknek és fiataloknak egyaránt.
A mai világban már elvárható az, hogy minden háztartásban legyen internet-hozzáférés, 
sőt már a legtöbb embernek már a mobil internet is adott. A célunk így tehát az, hogy a weboldal amit megalkotunk online is kezelhető legyen, ezáltal ez kényelmesebbé teszi az átlagos ember mindennapjait, mivel,
a telefonról vagy a tabletről, a munkahelyi laptopról vagy esetleg 
PC-ről könnyedén elérhető legyen a nap bármelyik pillanatában.
A cél egy jó weblap létrehozása amivel felhasználókat be szeretnénk vonzani, valamint a meglévőket megtartani.
Kiemelt fontosságú a csapat számára az, hogy az oldal felhasználóbarát legyen, ezért az első benyomás fontos, hisz akár a mindennapokban, ott sem elengedhetetlen az, hogy ha bemutatnak minket valakinek, számít a megjelenés és a gesztus, ez meghatározó lehet a weboldalnál is. Az oldalnak a megjelenése is nagyon fontos tényező ezért szeretnénk odafigyelni arra, hogy a megfelelő színeket, betűméretet, betűtípust alkalmazzuk. Szeretnénk a felületet különböző módokkal is feldobni az oldalt, mint például: a színvak mód, vagy a manapság egyre jobban elterjedt Dark/Light mód. 
A platformfüggetlenség elvárt a weboldallal szemben, biztosítanunk kell azt, hogy több platformon, valamint
böngészőn is elérhető legyen mint például a Google Chrome, Mozzila, Opera, Safari, Microsoft Edge és stb...
Ma már 2020-at írunk, ahol már nem csak a PC-ről használjuk a weboldalakat, hanem elterjedtek a laptopok, 
tabletek, és az okostelefonok is egyaránt. Manapság már gyakorlatilag minden harmadik ember okostelefonnal a 
zsebében rohangál, ezért foglalkoznunk kell a reszponzív designal is.
Fontos a reszponzív design, mert szebbek a képek, és kényelmesebb a weboldal használata,
így csökken a visszafordulási arány, tehát kevesebben hagyják el azonnal a weboldalt.
Fontos a használhatóság az oldalunkban, de legalább annyira fontos, hogy megfogjuk a látogatóinkat a designnal, amikor megtekintik először a weboldalt. A cél tehát az, hogy tudjuk megmutatni azt, hogy mit kínálunk az embereknek, és a cetlik által okozott kellemetlenségekre tudjunk egy olyan megoldást nyújtani, ami megbízható, és kényelmesen használható is.

## 3. Jelenlegi üzleti folyamatok

* Új feladat hozzáadása: Cetli kiválasztása -> Cetlire írás -> Cetli táblára ragasztása
![Task Manager új feladat hozzáadása](src/uj_feladat_hozzaadasa.png)
* Feladat törlése: Cetli levétele a tábláról -> Cetli kukába dobása
![Task Manager feladat törlése](src/feladat_torlese.png)
* Feladatok csoportosítása: Táblán csoport helyének kijelölése -> Meglévő cetlik letépése -> Cetlik felragasztása a megfelelő pozícióra
![Task Manager  feladat csoportosítása](src/feladat_csoportositasa.png)
* Feladat késznek nyilvánítása: Cetli levétele -> Cetli ‘kész’ csoporthoz való felragasztása
![Task Manager feladat késznek nyilvánítása](src/feladat_kesznek_nyilvanitasa.png)
* Feladat frissítése/módosítása: Meglévő cetli levétele a tábláról -> Cetli kidobása -> Új cetli kiválasztása -> Cetlire írás -> Cetli táblára ragasztása
![Task Manager feladat frissítése/módosítása](src/feladat_modositasa.png)

## 4. Igényelt üzleti folyamatok

* Új feladat hozzáadása
* Feladat törlése
* Feladatok csoportosítása
* Feladat módosítása
* Feladat késznek nyilvánítása
* Felhasználóbarát UI: Sötét és világos színsémák elkészítése a kellemes felhasználói élményért + Színvak mód
* Feladatok prioritásának megadása: (Prioritizing tasks)

## 5. A rendszerre vonatkozó szabályok
- A web felület szabványos eszközökkel készüljön.
- Javascript és HTML/CSS alkalmazása.
- Reszponziv design megvalósítása.

## 6. Követelménylista

* K01 Könnyen üzemeltethető rendszer. Mielőtt belekezdünk a weboldal elkészítésébe át kell tekintenünk azt, hogy milyen módon valósítható meg az üzemeltetés. Fontos az, hogy a weboldal készítési módszer kiválasztása során hosszútávon kezdjünk el gondolkodni, tehát nem azt kell néznünk, hogy most mire van szükségünk, hanem gondolni kell arra is, hogy 2-3 év múlvamire lesz szükségünk, milyen honlapot szeretnénk üzemeltetni.

* K02 A weboldal felülete legyen a felhasználó számára letisztult, hiszen fontos az, hogy gördülékenyen tudja használni a látogató az oldalunkat. Szeretnénk, hogy az oldalt egyszerűen lehessen kezelni, egyértelművé tenni mik a lehetőségeik a felhasználóinak, és ezeket a folyamatokat egyszerűen megjeleníteni a weboldalon.

* K03 A reszponzív design megalkotása. A weboldal rugalmason alkalmazkodjon az adott készüléken használt böngészőhöz, ezáltal egy optimális megjelenést biztosít a felhasználó számára.

* K04 Böngésző-függetlenség. A weboldalunknál elvárt a böngésző-függetlenség, hiszen manapság már számos lehetőségeik vannak a felhasználóknak.
Van olyan felhasználó aki egyik böngészőt jobban preferálja a másiknál, ezért számunkra fontos az, hogy valamennyi böngészőn megjeleníthető legyen a weboldal ilyenek például: Google Chrome, Mozzila, Safari, Opera, Microsoft Edge és stb..

* K05 Prioritás biztosítása a felhasználó számára. A mindennapokban is előfordul, hogy egy nap több teendőnk is van, és van olyan köztük, ami elsőbbséget élvez, ami fontosabb mint a többi. Ezt a lehetőséget szeretnénk a cetliknél is a felhasználóknak átadni, hisz fontos az, hogy kényelmesebbé tegyük a weboldal használatát ezzel a lehetőséggel.

