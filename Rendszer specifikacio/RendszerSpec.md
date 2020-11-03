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

* SQL (flask-sqlalchemy csomag): Ahhoz, hogy a látogatóinkat tudjuk megfelelően kezelni, ehhez szükségünk van
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

### 3.6. Tesztterv:


### 3.7. Telepítési terv: 

A felhasználó szemszögéből a telepítés a következőképp néz ki:
- Internetelérésre alkalmas eszköz megléte, használatra kész állapotban.
- Internetelérés.
- Böngésző használata.
- Az oldal URL-jének címsorba történő begépelése.

## 4. Mikor:
- Legkésőbb az osztályzásig véglegesíteni kell a rendszert.