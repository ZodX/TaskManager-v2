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

## 3.2 Funkcionális terv

 - átláthatóság: Ennek megfelelően, egy olyan program legyen, amely minden programozó számára átlátható kódolással legyen megírva
- javíthatóság: hibák mindig vannak, lesznek. Legyen lehetőség javítani. A javítás legyen egységes.
- felhasználóbarát: a program felülete és kezelhetősége legyen a felhasználók életkorának megfelelő. A tervezésnél figyelembe kell venni minden lehetőséget.