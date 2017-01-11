# warsawjs-workshop-blog

> Testowa aplikacja stworzona na potrzeby WarsawJS Workshop #2

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Założenia projektu

* Wykorzystać system szablonów
* Zapisywać posty do `LocalStorage`
* Wykorzystać zmienną globalną jako agregatu modułów
* Wykorzystać jak najwięcej składni ES2015+ 
    * `class`
    * `arrow function`
    * `method shorthand definition`
    * `property shorthand definition`
    * `let`, `const`
    * `default parameters`
    * `template strings`
    * `Map`, `Set`
    * `Promise`
* Dodać walidacją formularza oraz zabezpieczenie przed XSS

## TODO LIST

### Posty

* [x] Prezentacja wielu postów
* [ ] Prezentacja pojedynczego posta
* [x] Dodawanie pojedynczego posta
* [ ] Edycja pojedynczego posta

### Komentarze

* [ ] Prezentacja wielu komentarzy
* [ ] Dodawanie pojedynczego komentarza
* [ ] Edycja pojedynczego komentarza

### Systemowe

* Stworzenie routingu: `routy.js`
* Wykorzystanie Firebase jako bazy danych

## Uwagi

* Można wykorzystać helpery: jQuery, Underscore
* Wsparcie dla nowoczesnych przeglądarek: Chrome, Firefox, Opera
* Dodawanie bibliotek za pomocą `npm` albo CDN
* Serwowanie plików: `http-server` albo `live-server` (w rejestrze `npm`)

## Etapy tworzenia od podstaw (do wykorzystania podczas workshopu)

<details>

1. HTML: Stworzenie głównego pliku
2. HTML: Stworzenie:
    * listy postów
    * formularza dodawania posta
    * przycisku z dodawania posta
3. Opcjonalne. CSS: Wykorzystanie frameworka CSS do budowy ładnego widoku
4. HTML: Przenieść template dla jednego posta do template-u, a kontener 
zawierający listę postów powinien być pusty.
5. Ukryć formularz z dodawaniem posta.
6. JS: Stworzyć plik `main.js`, w którym zdefiniować namespace.
7. JS: Stworzyć plik `setup.js`, w którym stworzyć obiekty:
    - modele:
        - listy postów
        - pojedynczego posta
    - usługi
        - save / read do postów
    - widoku
        - formularza dodawania
    - kontroler
        - podstawowy
a potem wyodrębnić te obiekty (klasy) do osobnych plików.
8. JS: Nasłuchiwać na kliknięcie przycisku dodaj post i pokazać formularz.
9. JS: Nasłuchiwać na wysłanie formularza i zapisać obiekt posta w 
`LocalStorage` oraz wysłać event z widoku do modelu.
10. JS: Lista nasłuchuje na event dodania nowego posta i tworzy obiekt `Post` 
oraz go renderuje.
11. JS: Dopisać do usługi odczytywanie postów.

</details>

## Zadania dodatkowe

* Uprawnienia:
    * czytelnik:
        * nie dodaje artykułów
        * dodaje komentarze
        * edytuje swoje komentarze
    * redaktor (admin)
        * dodaje artykuły
        * dodaje komentarze
        * edytuje wszystkie komentarze
* Wykorzystanie transpilera, np. babel
* Wykorzystanie bundlera, np. webpack
* Wykorzystanie captcha przy dodawaniu komentarzy

## Przydatne linki

* http://materializecss.com/
* https://cdnjs.com/
* https://mustache.github.io/
* https://github.com/Olical/EventEmitter
