# Rendszer specifikáció

## 1. Mit (rendszer):

A felhasználó szemszögéből határozzuk meg az elkészítendő funkciókat a funkcionális specifikáció alapján.

* **Rendszer használati esetek** és lefutásai meghatározzák az oktató oldal funkcióinak meg valósulását.
* **Képernyő tervek**: egyedi jól megkülönböztethető megjelenési stílus,egyszerű áttekinthető elemek: háttér, keret, aktuális cetli jelzése, Dark/Light mode megvalósítása.
* **Fizikai követelmények**: Fizikai környezet: A weboldalnak olyan kialakítása, amely rugalmasan alkalmazkodik a különböző böngészőkhöz, annnak képernyőjének méretéhez. Ennek célja az, hogy egy optimális megjelenítést biztosítson a felhasználónak minden böngészésre alkalmas eszközön. például: desktot, moobil, laptop, tablet, egyéb eszközök. 
* **Prioritás keretrendszer**: A cetlik rendezése fontossági sorrend szerint, szintek megadása.
* Könnyen üzemeltethető rendszer.
* A rendszer **online** formában való kivitelezése.
* A rendszer távolról való elérése, az aktuális információk megjelenítéséhez
* **User Interface** (Felhasználói felület) megvalásítása, annak érdekében, hogy a felhasználó is interrakcióba léphessen.
* **Platformfüggetlen** keretrendszer

## 2. Miért (rendszer célja):

A cél az, hogy a felhasználó egy könnyen kezelhető, átlátható felület segítségével nyomon követhesse az aktív feladatait, illetve, ha szeretné, könnyedén módosíthassa, vagy csoportokra bonthassa azokat. Továbbá, az eddigi megoldott, vagy meg nem oldott feladatokat egyszerűen vissza kereshes

## 3. Hogyan (terv):

### 3.1. Projekt terv:

#### 3.1.1. Projekt szerepkörök, felelősségek:

* **Projekt vezető**: Az a személy, aki a projekt "tulajdonosa". Ez a személy végzi a projekt felülvizsgálatát, mind részfeladatok meghatározása, mind változtatások bekerülése terén.
* **PA** (Program Analyst): Tervezésért, fejlesztésért felelős személy. Optimális megoldások kifejlesztésére is hivatott. Programkódok írása.
* **Tesztelő**: Teszteket biztosít a projekthez, amik a kód helyes működést támasztják alá.

#### 3.1.2. Projekt munkások és felelősségeik:

* **Molnár András Imre** (GitHub: *ZodX*): *Projekt vezető, PA, Tesztelő*
* **Bacsik Mátyás** (GitHub: *bacsikmatyas*): *PA, Tesztelő*
* **Huri Patrik** (GitHub: *Hurip*): *PA*
* **Heinrich László** (GitHub: *heinrichlaszlo*): *PA*

#### 3.1.3. Ütemterv:

* **Új feladat létrehozása** funkció működik
* **Feladat törlése** funkció működik
* **Feladat módosítása** funkció működik
* **Feladat késznek nyilvánítása** funkció működik
* **Feladat prioritásának megadása** funkció működik
* **Feladatok csoportosítása** funkció működik
* **Feladat csoportok külön lekérdezhetősége** funkció működik
* **Oldal kinézetének módosítása(Sötét, világos, színvak mód)** funkció működik
* **Minden kívánt funkció megvalósítva**
* **Funkciók tesztlefedettsége teljes**
* **Weboldal kinézetének tesztlefedettsége teljes**

#### 3.1.4. Mérföldkövek:

* Szerződés aláírás a partnerek által
* Fejlesztés kezdete
* Fejlesztés befejezése
* Kész szoftver átadása
* Szoftver éles működésbe lépése

## 3.2 Funkcionális terv:

- Átláthatóság: Ennek megfelelően, egy olyan program legyen, amely minden programozó számára átlátható kódolással legyen megírva
- Javíthatóság: hibák mindig vannak, lesznek. Legyen lehetőség javítani. A javítás legyen egységes.
- Felhasználóbarát: a program felülete és kezelhetősége legyen a felhasználók életkorának megfelelő. A tervezésnél figyelembe kell venni minden lehetőséget.


### 3.3. Fizikai környezet:

A fejlesztett rendszer, amit el fogunk készíteni egy web applikáció lesz, ahol a frontend fejlesztéséhez,
a következő eszközöket fogjuk használni:

* HTML: A HTML-ről annyit érdemes tudni, hogy ez egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára ez mér internetes szabvánnyá vált. Jelenleg az aktuális változata az 5-ös, tehát a HTML5. Ennek az egyik fő célja, hogy a webes alkalmazásokhoz ne legyen szükségünk pluginokra. A Javascript segítségével lehetőségünk van akár rajzolni, vagy képet beilleszteni is.

* CSS (Bootstrap keretrendszer): A Bootsrap napjainkban a legnépszerűbb front-end keretrendszere. A keretrendszerről érdemes annyit tudni, hogy előre megírt eszközkészlet, viszont ismernünk kell ahhoz, hogy megfelelően használjuk. A Bootstrap egy előre megírt, multifunkcionálisan alkalmazható eszközkészletet kínál, aminek segítségével gyorsabban, átláthatóbban és hatékonyabban dolgozhatunk. Azonban ahhoz, hogy használni tudjuk ismernünk kell a legújabb, webfejlesztésekhez kapcsolódó technikákat, illetve elegendő időt kell fordítanunk a rendszer tanulására.

A weboldal sikeres működéséhez szükségünk lesz backendre is az ehhez szükséges fejlesztői eszközök pedig a
következők:

* JavaScript: A Javascript az ECMAScript szabvány alapján implementált kliens oldali programozási nyelv, 
amelyet minden böngésző támogat. A Javascript alkalmas a webprogramok futtatására kliens oldalon, amely
azt is jelenti, hogy a statikus HTML weboldal dinamikussá tehető különböző interakciók kliens oldalon 
történő lekezelésével.

* Ahhoz, hogy a látogatóinkat tudjuk megfelelően kezelni, ehhez szükségünk van
az adatok könnyű tárolását és elérhetőségét biztosító adatbázisrendszerre.

A Frontend teszteléséhez szükségünk van:

* Java + Selenium WebDriver + Galen keretrendszerre.

Backend teszteléséhez:

* JavaScript.

Az alkalmazás futtatására alkalmas böngészők:

* Firefox.

* Google Chrome.

* Opera.

* Safari(macOS).

### 3.4. Adatbázzis terv

A rendszer IndexedDB-t fog használni, ami kulcs-érték párokat tartalmazó, nem relációs adatbázis.
Az adatokat a böngésző tárolja.
Mivel kulcs-érték párokat tároló adatbázisról beszélünk, ezért egy táblánk lesz, melynek az oszlopai a következők:

* id(szám): ez a generált kulcs
* feladat(szöveg): a feladat leírása
* csoport(szöveg): a feladat csoportja
* prioritás(szám): a feladat prioritása(1-10)
* utolsó módosítás(dátum): hozzáadás vagy későbbi módosítás dátuma
* kész(logikai): azt jelzi, hogy az adott feladat kész (true) vagy aktív (false)
* tábla(szöveg): annak a táblának a neve, amelyikbe az adott feladat felvételre kerül
* határidő(dátum): a feladat határideje

### 3.5. Implementációs terv

A webapplikációnk frontendjét HTML5/CSS segítségével állítjuk össze, míg az ehhez szükséges hátteret javascript segítségével biztosítjuk.
A megfelelő megtódusok egy külön fileban (tegyük fel "Controller.js") implementáljuk, amit a megfelelő módon hivatkozunk a HTML fileokban.
A stíluslapokkal hasonlóképp teszünk, valamint ha Bootstrap használata mellett döntünk, akkor azzal is.
Az adatbázis implemetálása is javascriptben történik majd, IndexedDB használatával(amennyiben nem merül fel előre nem látott probléma a technológiával).
Az implementációval kapcsolatos további problémákkal/kérdésekkel a megvalósítás során foglalkozunk.

### 3.6. Tesztterv:

Ahhoz, hogy tudjuk minden megfelelően működik tesztelnünk kell a weboldalunk minden egyes funkcióját, 
ezzel biztosítani az alkalmazásunk helyes működését.
Ezek a funkciók a következők:

* Új feladat hozzáadása: A cetlik hozzáadása a táblához. A feladatainkat amiket el szeretnénk végezni, 
hozzá kell tudni adni a táblához, a helyes működés érdekében.

* Feladat módosítása: A feladatainkat amiket már korábban felvittünk a táblára, azokat lehessen módosítani, 
kiegészíteni valamivel, ha például valamit kifelejtettünk belőle. 

* Feladat törlése: Azokat a feladatokat amiket már elvégeztünk, vagy ha véletlen rossz cetlit vittünk fel
a táblára a figyelmetlenségünk miatt, akkor ezeket lehessen törölni.

* Prioritási sorrend: Szeretnénk megadni a felhasználóink számára a prioritás lehetőségét. A mindennapokban is előfordul,
hogy egy nap több teendőnk is van, és van olyan köztük, ami elsőbbséget élvez, ami fontosabb mint a többi. 
Ezt a lehetőséget szeretnénk a cetliknél is a felhasználóknak átadni, hisz fontos az, hogy 
kényelmesebbé tegyük a weboldal használatát ezzel a lehetőséggel.

Tesztelnünk kell továbbá az oldal megjelenését, hogy minden láthatóan és olvashatóan jelenik-e meg a felhasználó
számára:

* Az oldalnak reszponzívan kell megjelenniük a különböző eszközökön: Manapság már gyakorlatilag minden harmadik ember okostelefonnal a zsebében rohangál, ezért foglalkoznunk kell a reszponzív designal is.
Fontos a reszponzív design, mert szebbek a képek, és kényelmesebb a weboldal használata,
így csökken a visszafordulási arány, tehát kevesebben hagyják el azonnal a weboldalt.

* A weboldal legyen egyszerűen átlátható: Nagyon fontos, hogy egyszerű, átlátható menürendszerünk, táblánk legyen és az 
egész weboldal használata, mondhatni kézenfekvő legyen a felhasználóink számára. A honlap elsődleges feladata a tartalom átadása, ehhez pedig elengedhetetlen a jó design megálmodása, hisz a design befogadhatóbbá, vonzóbbá, könnyebbé teszi a tartalom megértését.

* Az alkalmazás könnyen kezelhető legyen az átlagfelhasználók számára: A weboldalt a látogatóinknak készítjük, ezért nekik kell, hogy egyértelmű legyen, könnyen megtalálják azt amit keresnek. Ha könnyen és gyorsan hozzáférnek az adott információhoz, akkor szeretni fogják, ezáltal visszatérnek és másnak is ajánlhatják. 

* Az oldal legyen felhasználóbarát: A csapat számára fontos az, hogy az oldal felhasználóbarát legyen, ezért az első benyomás nagyon fontos, hisz akár a mindennapokban, ott sem elengedhetetlen az, hogy ha például bemutatnak minket valakinek, számít a megjelenés és a gesztus, ez ugyan úgy meghatározó szerepet tölt be a weboldalnál is.

### 3.7. Telepítési terv: 

A felhasználó szemszögéből a telepítés a következőképp néz ki:
- Internetelérésre alkalmas eszköz megléte, használatra kész állapotban.
- Internetelérés.
- Böngésző használata.
- Az oldal URL-jének címsorba történő begépelése.

### 3.8. Követelmények:

A weboldalnál fontos a könnyen üzemelhető rendszer. Mielőtt belekezdünk a weboldal elkészítésébe át kell tekintenünk azt, hogy milyen módon valósítható meg az üzemeltetés. Fontos az, hogy a weboldal készítési módszer kiválasztása során hosszútávon kezdjünk el gondolkodni, tehát nem azt kell néznünk, hogy most mire van szükségünk, hanem gondolni kell arra is, hogy 2-3 év múlva mire lesz szükségünk, milyen honlapot szeretnénk üzemeltetni.
Semmiképp sem nevezhetjük hátránynak az egyszerű weboldalt, sőt, sok esetben éppen ez az, ami előny,
ami a különbséget jelenti a különböző felesleges funkciókkal telezsúfolt oldalakkal szemben.
Érdemes elgondolkodni az egyszerű weblap kialakításán, az extrák helyett a valódi mondanivaló,
a pontos, konkrét ismertetők megjelenítéséről.
Természetesen az egyszerű honlap nem jelenti azt, hogy a weblapnak mellőznie kell a hasznos és fontos funkciókat.
Inkább azt kell átgondolni, valóban szükségesek-e a honlapon azok a bizonyos alkalmazások.
Sokszor a legegyszerűbb megoldások a legcélravezetőbbek. Például ha azt szeretnénk,
hogy árajánlatot kérjenek tőlünk, akkor nyugodtan berakhatunk az oldalba egy ajánlatkérő űrlapot,
hiszen a látogatónak ez a legkényelmesebb.
Az egyszerű honlapnak sem kell unalmasnak lennie. Esztétikus elrendezéssel, átgondolt és jól megfogalmazott mondanivalóval
egy egyszerű honlapból is lehet megnyerő weboldalt készíteni. Viszont ne alkalmazzunk olyan felesleges elemeket,
mely elvonja látogatóink figyelmét a legfontosabb üzenetünktől.
Az oldalnak könnyen olvashatónak és könnyen áttekinthetőnek kell lennie, azért, hogy ez egyszerű felhasználó is 
bármikor tudja kezelni. Fontos, hogy a tábla az legyen egyszerű, és átlátható, mert ez határozza meg azt, hogy a 
weboldal mennyire lesz kézenfekvő a látogatóink számára. A honlap elsődleges feladata tartalom átadása, ehhez pedig elengedhetetlen a jó design megvalósítása, hisz a design segít a weboldalnak abban, hogy befogadhatóbb, és vonzóbb legyen. 
A weboldal legyen a felhasználó számára letisztult, hisz fontos az, hogy az oldalt gördülékenyen tudja használni.
Szeretnénk, hogy az oldalt egyszerűen lehessen kezelni, egyértelművé tenni mik a lehetőségeik a felhasználóinak. 
és ezeket a folyamatokat egyszerűen megjeleníteni a weboldalon.
A cél az, hogy legyen vonzó a célcsoportba tartozóknak. A design azonban nem az esztétikáról,
hanem a funkcionalitásról szól. Nem az a lényege, hogy tetsszen, hanem az, hogy elérje a célját.
A felhasználó célja az, hogy minél gyorsabban és minél egyszerűbben szeretné elvégezni
azt a feladatot, vagy megtalálni az információt, amiért a weboldalunkra ellátogatnak. 
Ha egy weboldal túl bonyolult, vagy ha túl nagy kreativitásnak adtunk teret a weblapnak a készítése során,
akkor valószínüleg ezek a megoldások a látogatóink jelentős részét akár el is riaszthatják,
amit mi semmiképpen sem szeretnénk. Bármely internet hozzáféréssel rendelkező eszközről elérhető kell, hogy legyen a weboldal. A platformfüggetlen megjelenés egy mai modern weboldal esetében nem extra funkció, hanem már-már követelmény. 
Tény az, hogy azon felhasználók száma folyamatosan növekszik, akik okostelefonról, tabletről, 
vagy más mobil eszközről interneteznek, a hagyományos asztali gépek mellett (PC).
Így egyre inkább elengedhetetlenné válik, hogy a weboldal alkalmazkodjon ezekhez a felületekhez, hogy a felhasználók ugyanazt a honlapot, ugyanolyan minőségben élvezhessék más-más eszköz esetén is.
A webes felhasználók elvárják, hogy a webhelyünk villámgyorsan, még mobil eszközökön is betöltődjön.
A látogatók körülbelül fele azt mondja, elvárja, hogy egy webhely két másodpercen belül betöltődjön,
és legtöbben elhagyják azt, ami nem töltődik be három másodperc után.
Így a sebesség igencsak számít a látogatók megtartására.
A weboldalunknak nagyon fontos része, hogy felhasználóbarát legyen a látogató számára. Ez azt jelenti, hogy a hozzád betérő,
könnyen megtalálja rajta amit keres, ne keljen az átláthatatlanság sűrűjében bolyongania,
 mert így az első kijáratnál lelép. Könnyű legyen a navigáció, logikus felépítésű,
egyszerű, követhető menüelemekkel. Mindig tudja, hogy pont hol tartózkodik, merre tud vissza, vagy előre lépni.
A felhasználóbarát weboldal része az is, hogy a logóra kattintva mindig a főoldalra kerül vissza.
 Így ha el is téved, az egy biztos támpont lesz számára.
A weboldal legyen áttekinthető, a releváns tartalom könnyen megtalálható rajta. 
A megfelelően strukturált és könnyen elérhető tartalom kulcsfontosságú ahhoz, hogy a felhasználók élménye jó legyen.
Minden zavaró tényezőt ki kell zárni, és a felhasználó figyelmét arra kell irányítani, ami valóban hasznos a számára: a releváns tartalomra.
A fő cél az, hogy biztosítsuk, hogy nincs semmi, ami akadályozná a felhasználót a weboldal tartalmának könnyű elérésében.
 Az ilyen szemléletben a dizájnerek jellemzően minden vizuális elemet leegyszerűsítenek,
és olyan weboldalt alakítanak ki, ami segíti a tartalom kiemelkedését. 
A weboldalunk legyen testreszabott. Mindenkinek azt adja, amire szüksége van. A személyreszabottság párhuzamos a fent említett időtakarékossággal. Az elmozdulás az általános megoldásoktól a személyre szabott felhasználói élmény felé egy fontos aspektus.
A marketing egyre inkább a kisebb csoportok, végső soron egyes vásárlók megcélzása irányába mozdul el.
Egyre fontosabbá válik a vásárlók igényeinek és preferenciáinak minél mélyebb megismerése.
Egy webdesign akkor jó, ha nem okoz problémát a használata. Természetesen egy designnak jól is kell kinéznie.
A színeket például célszerű azok hatása alapján kiválasztani, és nem azt figyelembe venni, hogy neked melyik a kedvenc színed. 
Elengedhetetlen a színhasználat: Egy igényes és elegáns színpaletta általában 2-3 főbb színből áll,
amik jól illenek egymáshoz és a cég hangulatát és jellegét is megtestesítik. Nem érdemes túlzásba vinni a színek használatát,
mert elvonhatja a figyelmet a főbb tartalomról, ami általában a szöveg.
ontos még a könnyedén olvasható szöveg: A legegyszerűbben olvasható kombináció általában a fehér alapon fekete szöveg,
de más színvariációk is működhetnek, egy bizonyos kontraszt-tartományon belül.
Ügyeljünk rá, hogy az oldalon használt betűkészletek jól látható karaktereket tartalmazzanak és hogy a legtöbb modern
rendszer képes legyen megfelelően megjeleníteni azokat.
Terjedelem és rendezettség: A törzsszöveget (főleg hosszabb tartalmak esetén) mindig válasszuk rövidebb bekezdésekre,
amelyeket a tartalmukra utaló beszédes, rövid alcímekkel lássunk el. Az ömlesztett szövegfalak untatni kezdik az olvasókat,
akiknek a megnyerésére viszonylag kevés időnk van.
Figyeljünk oda rá, hogy a funkciók, és minden más interaktív funkció is tökéletesen működjön.
Figyeljünk a minimális görgetésre: Ez különösen a kezdőlapon fontos. A kezdőlap, vagy főoldal a tartalma legtetején tartalmazza
a legfontosabb hivatkozásokat, hogy a felhasználó rögtön láthassa azokat.
A weboldal legyen reszponzív, rugalmasan alkalmazkodjon a különböző böngészők méreteihez.
Felejtsük el a vég nélkül lefele gördítehtő weboldalakat! 
Egy oldal ne tartalmazzon 10-nél több menüelemet – fontos, hogy a látogatók mindent könnyedén és gyorsan megtaláljanak.
Platform- és böngészőkompatibilitás: A különböző böngészőszoftverek más és más módon jeleníthetnek meg bizonyos tartalmakat.
 Ez a lehetőség egy optimális megjelenést biztosít a felhasználó számára. Az ilyen eszközök pl: mobil, tablet, laptop, pc stb.. 
Elvárt, hogy az alkamazásunk az böngészőfüggetlen legyen. A weboldalunknál elvárt a böngésző-függetlenség, hiszen manapság már számos lehetőségeik vannak a felhasználóknak.
Van olyan felhasználó aki egyik böngészőt jobban preferálja a másiknál, ezért számunkra fontos az, hogy valamennyi böngészőn megjeleníthető legyen a weboldal ilyenek például: Google Chrome, Mozzila, Safari, Opera, Microsoft Edge és stb.. A látogatóinknak szeretnénk megadni a prioritás lehetőségét is, hiszen előfordulhat olyan szituáció, amikor a feladatok között felállítunk egy fontossági sorrendet, ezt szeretnénk a weboldalon is lehetővé tenni ezt a funkciót.

Törvényi előírás: 

* Jogszabály előírásait a weboldal impresszum kötelező tartalma tekintetében: 2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szabályozza.

* Egyszerűsített ellenőrző lista, kötelező honlap elemek Szolgáltató név Szolgáltató székhely, telephely,
 ennek hiányában lakcím Szolgáltató elérhetőségei, így pl. a felhasználókkal való kapcsolattartásra 
 használható e-mail cím. Amennyiben a szolgáltató létrejöttét vagy tevékenysége gyakorlásának megkezdése nyilvántartásba való bejegyzéstől függ, a szolgáltatót a nyilvántartásba bejegyző bíróság vagy hatóság megnevezése és a nyilvántartásba vételi szám. Amennyiben a szolgáltató tevékenységének gyakorlása engedélyköteles, akkor ez a tény és az engedélyező hatóság megnevezése és elérhetőségi adatai, valamint az engedély száma.

## 4. Mikor:
- Legkésőbb az osztályzásig véglegesíteni kell a rendszert.

## 5. Miből:

A projekt elkészítéséhez a csapat saját erőforrásait fogjuk használni.
A kódolást mindenki a saját számítógépén/notebookján oldja meg, vagy esetleg egyéb általa megvalósítható módszerrel.
A fejlesztéshez szükséges kommunikációt, valamint a feladatok nyomonkövetésére használt Trello használatát is hasonlójéppen oldjuk meg.
Maga a TaskManager-v2 egy böngésző futtatását fogja igényleni, ami alkalmas az IndexedDB használatára.
Mivel maga a kód lokálisan fut és az adatok eltárolása is a böngészőben történik, így szerverre sincs szükség.