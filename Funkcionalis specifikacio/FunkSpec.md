# Funkcionális specifikáció


## 3. Vágyálom rendszer

A projektünk célja egy könnyen átlátható, és kezelhető weboldal létrehozása,
amivel el szeretnénk érni azt, hogy a hétköznapi feladatainkat leegyszerűsítsük.
A weboldalunknak továbbá célja az, hogy el tudjuk adni a cetlik által nyújtott szolgáltatást.
A csapat azt álmodta meg, hogy az oldal egyszerűen szerkeszthető legyen, és ennek középpontjában az áll,
hogy felhasználóbarát is legyen egyben. A felhasználói élménynek a minősége úgy gondoljuk, hogy a weboldal 
készítésének az alapvető része, ezért a felhasználók igényeivel szeretnénk folyamatosan lépést tartani, az igényeiket
felmérni.Ahhoz, hogy a folyamatos fejlődésben ne maradjunk le, fontos az, hogy keresnünk kell fejlődési lehetőségeket
is a weboldalban. Azért szeretnénk a "cetliket" weboldalra vinni, hogy sok időt takarítsunk meg a látogatóink számára.
A weboldalnak áttekinthetőnek kell lennie, valamint a funkciók is könnyen elérhető kell hogy legyen, ez kulcsfontosságú 
ahhoz, hogy a felhasználónak az élménye jó legyen, a zavaró tényezőket ki kell zárni. A mai világban már elvárható az,
hogy minden háztartásban legyen internet-hozzáférés, aminek a segítségével könnyen lehet weboldalakat elérni. A legtöbb 
embernek már mobil internet hozzáférés is újabb lehetőséget nyújt a tartalomfogyasztásra. A célunk így tehát az, hogy 
a weboldal amit megalkotunk online is kezelhető legyen, ezáltal ez kényelmesebbé teszi az átlagos ember mindennapjait. Manapság
már könnyen el tudjuk érni a weboldalakat a telefonról vagy a tabletről, a munkahelyi laptopról vagy esetleg a PC-ről, ami 
megkönnyíti az életünket, és elérhetjük a weboldalt a nap bármelyik pillanatában.A cél egy jó weblap létrehozása amivel
felhasználókat be szeretnénk vonzani, valamint a meglévőket megtartani.
Biztosítanunk kell azt, hogy ne legyen semmi olyan, ami akadályozná a felhasználót a weboldalt tartalmának könnyű 
elérésében. Ebben a szemléletben a design kiemelkedően fontos hiszen a vizuális elemeket le kell egyszerűsíteni, és egy olyan
weboldalt kell kialakítani, ami segíti a tartalom kiemelkedését.
Amint már említettem kiemelt fontosságú a csapat számára az, hogy az oldal felhasználóbarát legyen, ezért az első benyomás 
nagyon fontos, hisz akár a mindennapokban, ott sem elengedhetetlen az, hogy ha például bemutatnak minket valakinek, számít a
megjelenés és a gesztus, ez ugyan úgy meghatározó szerepet tölt be a weboldalnál is.
A weboldalak designjának fontos tulajdonsága az egyszerű megjelenés. Hiszen a honlap elsődleges feladata a 
tartalom átadása, a jó design pedig ezt segíti. Befogadhatóbbá, vonzóbbá, könnyebbé teszi a tartalom megértését.
A jól felépített design nem csupán az esztétikumról, hanem a helyes tipográfia megválasztásáról, a funkcionalitásról
és az ergonómiáról is szól.

## 4. Jelenlegi üzleti folyamatok
 
* Új feladat hozzáadása: (írás cetlire/telefonba/füzetbe)
<p align="center">
<img src="src/uj_feladat_hozzaadasa.png" title="Task Manager új feladat hozzáadása">
</p>

* Feladat törlése: (Az adott feladat lehúzása)
<p align="center">
<img src="src/feladat_torlese.png" title="Task Manager feladat törlése">
</p>

* Feladat módosítása: (Az adott feladatot lehúzása és a helyére új írása.)
<p align="center">
<img src="src/feladat_csoportositasa.png" title="Task Manager  feladat csoportosítása">
</p>

* Feladatok csoportosítása: (A cetliket egy adott helyre csoportosítása vagy a füzetben egy adott oldalra írása)
<p align="center">
<img src="src/feladat_kesznek_nyilvanitasa.png" title="Task Manager feladat késznek nyilvánítása">
</p>

* Feladat késznek nyilvánítása: (Az adott cetlin a feladat mögé egy pipa helyezése)
<p align="center">
<img src="src/feladat_modositasa.png" title="Task Manager feladat frissítése/módosítása">
</p>

## 5. Igényelt üzleti folyamatok
- Feladat módosítása: (Feladat kiválasztása, majd új modosítótt érték megadása)
- Felhasználóbarát UI: (Dark/Light mode és Színvak mode)
- Feladatok prioritásának megadása: (Feladat kiválasztása és a fontossági sorrend eldöntése)
- Reszponzív design: (A felhasználó bármely készülékén a legoptimálisabb módon tudja megtekinteni a feladatait)
- Feladatok hozzáadása és törlése: (A felhasználó tudjon feladatokat hozzáadni és a nem kívánt feladatokat eltávolítani)

## 9. Képernyőtervek

- Legyen teljes , a felhasználó a felhasználói felületen keresztül a program minden funkciója elérhető legyen.
- A felhasználói felület legyen szellős és átlátható, jól különüljenek el egymástól az egyes funkciók, funkció csoportok.
- A felületnek olyan kifejezéseket kell használnia, amelyek megfelelnek a rendszert legtöbbet használók tapasztalatainak.
- A felületnek konzisztensnek kell lennie, azaz lehetőség szerint hasonló műveleteket hasonló módon kell realizálnia.
- Legyen visszaállíható , a felületnek rendelkeznie kell olyan mechanizmusokkal , amelyek lehetővé teszik a felhasználók számára a hiba után történő visszaállítást.
- A felületnek megfelelő interakciós lehetőségekkel kell rendelkeznie a rendszer különféle felhasználói számára.

## 10. Forgatókönyvek
Móka Mikinek a minden napok során egyre több és több feladata lett. Feladatait észben tartani már nem bírta. Ennek orvoslására sok mindent számításba vett és legjobb lehetőségnek azt tartotta, hogy feladatait cetlikre felírva tartsa.
De a cetlire felírás nem volt hatékony, mert a cetlik hamar beteltek, drágák voltak, sok szemét keletkezett. Ráadásul a cetliket mindig magával kellett cipelnie, ami nehéz volt és sok helyet foglalt. 
Ekkor váltott át füzetre, amiben már könnyebben tudta vezetni a feladatait, de ez se volt a legoptimálisabb. Ekkor barátja Béka Réka mutatott neki egy weboldalt, ahol bármilyen eszközön saját szájíze szerint rendezheti a feladatait. 
Bármikor hozzáadhat, módosíthat, törölhet. Nincs több cetlizés vagy nehéz cipekedés, mostmár az összes feladata elfér akár a zsebében. Védje a fákat, használjon webalkalmazást!

## 11. Fogalomszótár:

* UI: Felhasználói felület (User Interface). A felhasználó számára megjelenített felület, amivel interakcióba lép.

* Reszponzív design: Az oldal bármilyen eszközről megtekintve olvashatóan jelenik meg, nem marad le semmi az oldalról. (Mobil, Tablet, Desktop)

* Konzisztens: Ellentmondásoktól mentes, egységes.
