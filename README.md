# warsawjs-workshop-blog

> Testowa aplikacja stworzona na potrzeby WarsawJS Workshop #2

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## TODO LIST

Kolejność realizacji aplikacji:

1. [x] Posty: Dodawanie pojedynczego posta (C)
2. [x] Posty: Prezentacja wielu postów (R)
3. [ ] Posty: Prezentacja pojedynczego posta (R)
4. [ ] Komentarze: Dodawanie pojedynczego komentarza (C)
5. [ ] Komentarze: Prezentacja wielu komentarzy (R)
6. [ ] Posty: Edycja pojedynczego posta (U)
7. [ ] Posty: Usuwanie pojedynczego posta (D)
8. [ ] Komentarze: Edycja pojedynczego komentarza (U)
9. [ ] Komentarze: Usuwanie pojedynczego komentarza (D)

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
* Wpisywanie wyrazów komendami głosowymi (speech recognition)
* Filtry na brzydkie wyrazy

## Przydatne linki

* http://materializecss.com/
* https://cdnjs.com/
* https://codeshare.io/
* https://www.codewars.com/users/sign_in

### Biblioteki

* https://mustache.github.io/
* https://github.com/Olical/EventEmitter
