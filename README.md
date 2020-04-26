# warsawjs-workshop-2-blog

Testowa aplikacja stworzona na potrzeby `WarsawJS Workshop #2`

<img
    src="https://warsawjs.com/static/images/logos/logo-warsawjs.svg"
    width="400"
    alt="WarsawJS"
/>

## Features

### v1 [ [demo](https://piecioshka.github.io/warsawjs-workshop-2-blog/v1/) ]

* :white_check_mark: Posty: Dodawanie pojedynczego posta (C)
* :white_check_mark: Posty: Prezentacja wielu postów (R)
* :white_check_mark: Posty: Prezentacja pojedynczego posta (R)
* :white_check_mark: Posty: Usuwanie pojedynczego posta (D)
* :no_entry: Posty: Edycja pojedynczego posta (U)
* :white_check_mark: Komentarze: Dodawanie pojedynczego komentarza (C)
* :white_check_mark: Komentarze: Prezentacja wielu komentarzy (R)
* :white_check_mark: Komentarze: Usuwanie pojedynczego komentarza (D)
* :white_check_mark: Komentarze: Prezentacja fikcyjnych awatarów
* :white_check_mark: Komentarze: Licznik komentarzy
* :no_entry: Komentarze: Edycja pojedynczego komentarza (U)
* :white_check_mark: Misc: Potwierdzenie usuwania posta i komentarza
* :white_check_mark: Misc: Zabezpieczenie przed wpisaniem jednego długiego string-a

### v2 [ [demo](https://piecioshka.github.io/warsawjs-workshop-2-blog/v2/) ]

* :white_check_mark: Posty: Dodawanie pojedynczego posta (C)
* :white_check_mark: Posty: Prezentacja wielu postów (R)
* :white_check_mark: Posty: Prezentacja pojedynczego posta (R)
* :white_check_mark: Posty: Usuwanie pojedynczego posta (D)
* :white_check_mark: Posty: Edycja pojedynczego posta (U)
* :no_entry: Komentarze: Dodawanie pojedynczego komentarza (C)
* :no_entry: Komentarze: Prezentacja wielu komentarzy (R)
* :no_entry: Komentarze: Licznik komentarzy
* :no_entry: Komentarze: Prezentacja fikcyjnych awatarów
* :no_entry: Komentarze: Usuwanie pojedynczego komentarza (D)
* :no_entry: Komentarze: Edycja pojedynczego komentarza (U)
* :no_entry: Komentarze: Wykorzystanie captcha przy dodawaniu komentarzy
* :no_entry: Misc: Potwierdzenie usuwania posta i komentarza
* :white_check_mark: Misc: Zabezpieczenie przed wpisaniem jednego długiego string-a
* :no_entry: Misc: Wpisywanie wyrazów komendami głosowymi (speech recognition)
* :no_entry: Misc: Filtry na brzydkie wyrazy

### v3 [ [demo](https://piecioshka.github.io/warsawjs-workshop-2-blog/v3/) ]

* :no_entry: Posty: Prezentacja wielu postów (R)
* :no_entry: Posty: Dodawanie pojedynczego posta (C)
* :no_entry: Posty: Usuwanie pojedynczego posta (D)
* :no_entry: Posty: Edycja pojedynczego posta (U)
* :no_entry: Komentarze: Prezentacja wielu komentarzy (R)
* :no_entry: Komentarze: Dodawanie pojedynczego komentarza (C)
* :no_entry: Komentarze: Usuwanie pojedynczego komentarza (D)
* :no_entry: Misc: Zabezpieczenie przed wpisaniem jednego długiego string-a
* :no_entry: Komentarze: Licznik komentarzy
* :no_entry: Komentarze: Edycja pojedynczego komentarza (U)
* :no_entry: Misc: Potwierdzenie usuwania posta i komentarza
* :no_entry: Komentarze: Prezentacja fikcyjnych awatarów
* :no_entry: Posty: Prezentacja czasu stworzenia posta
* :no_entry: Posty: Prezentacja pojedynczego posta (R)
* :no_entry: Misc: Stworzenie routing.js
* :no_entry: Misc: Przekierowanie na stronę główną po usunięciu posta na jego widoku
* :no_entry: Error handling: Obsługa 404 (not found page)
* :no_entry: Error handling: Obsługa 404 (brak danych posta do wyświetlenia)
* :no_entry: Error handling: Zablokowane requesty

## Bonus

* :zap: Misc: Upload obrazka
* :zap: Misc: Lajki np. nieskończone serduszka
* :zap: Misc: Użytkownik (logowanie, rejestracja, uprawnienia)
* :zap: TypeScript (tsconfig.json + ts-loader)
* :zap: Webpack (moduły, klasy)
* :zap: Redux
* :zap: RxJS
* :zap: React
* :zap: Angular / inny framework
* :zap: Testy (jednostkowe & integracyjne & end-to-end)
* :zap: Storybook
* :zap: Panel administracyjny

## Krok po kroku 👣

* Stworzenie pliku `index.html`

### HTML

* Wykorzystać skrót Emmet-a do zbudowania podstawowej struktury HTML.
* Ustawić tytuł aplikacji
* Dołączyć framework Materialize (tylko plik CSS) wraz ikonami
    korzystając ze strony: <https://materializecss.com/getting-started.html>
* Stworzyć kontener do całej aplikacji.
* Dodać nagłówek pierwszego poziomu.
* Stworzyć markup do formularza do dodawania posta. Formularz powinien
    zawierać pola:

    + tytuł (pole wymagane)
    + opis (pole wymagane)
    + wyślij (przycisk)

    Warto wykorzystać klasy z Materialize:

    + container
    + section
    + btn

* Stworzyć markup do listy postów. Zrobić przykładowe 2 posty. Tekst zabity
    na sztywno w markupie.
* Dołączyć następujące biblioteki jak:
    + <https://github.com/janl/mustache.js>
    + <https://github.com/kelektiv/node-uuid>
    + <https://github.com/visionmedia/page.js>
    + <https://github.com/piecioshka/super-event-emitter>
* Stworzyć główny pliku projektu: `main.js` i dołączenie go do strony.

### JavaScript

* Stworzyć funkcję `setup` oraz uruchomić ją po załadowaniu DOMa.
* Przechwytywać wysłanie formularza (zdarzenie `submit`).
* Wyłączyć domyślne zachowanie tego zdarzenia za pomocą `preventDefault`.
* Pobrać dane z formularza za pomocą obiektu `FormData`. Jeśli pomimo wypełnienia
    formularza nie ma danych to zweryfikuj 2 rzeczy:
    + czy na pewno przekazuje referencję do formularza jako argument?
    + czy każdy z inputów posiada atrybut `name`?
* Wyświetlić za pomocą pętli `for..of` dane wpisane do formularza dodawania
    posta.
* Wykorzystać kolekcją `Map` które `FormData` na zwykły obiekt.
* Zbudować funkcję, która na podstawie danych przekazanych w parametrze
    skompiluje te dane i wygeneruje prosty markup HTML.
* Przenieść markup pojedynczego posta do nowo stworzonego kontenera z
    szablonami.
* Ukryć kontener zawierający listę szablonów. Warto wykorzystać klasę `hide`
* Wyczyścić zawartość kontenera zawierającego listę postów.
* Stworzyć funkcję `render`, która będzie dodawała do kontenera z listą
    postów wynik funkcji kompilującej dane z szablonem.
* Po wykorzystaniu danych z formularza wyczyścić zawartość pól. Wykorzystać
    do tego funkcję `reset`.

### JavaScript: Stworzenie architektury modeli

* Stworzyć tablicę postów, która będzie uzupełniana formularzem do
    dodawania postów.
* Po dodaniu posta zebrane dane dodać do tablicy.
* Stworzyć model listy postów.
* Przenieść jego definicję do osobnego pliku (dołączyć w pliku HTML).
* Stworzyć model obiekt postu, który będzie posiadał unikalny identyfikator
    tworzony podczas konstrukcji obiektu.
* Przenieść jego definicję do osobnego pliku (dołączyć w pliku HTML).
* Przenieść renderowanie proces renderowania listy postów do modelu listy
    postów.
* Stworzyć funkcję `toJSON` w modelu posta, która będzie zwracała obiekt z
    właściwościami.

### JavaScript: LocalStorage

* Zrobić funkcję `save` w modelu listy postów.
* Funkcja `save` powinna zserializować obiekt postów i zapisywać go do
    `LocalStorage`.
* Napisać funkcję `restore` w modelu posta. Funkcja powinna zawracać
    instancję posta, wraz z ustawionym unikalnym identyfikatorem.
* Napisać funkcję `load`, która pobierała z `localStorage` zserializowaną
    listę postów oraz przywracała modele postów.
* Uruchomić `restore` zaraz po stworzeniu modelu listy postów.
* Uruchomić `render` list postów zaraz po załadowaniu list postów.
* Przenieść do stałej klucz, pod którym zapisywana jest lista postów w
    `localStorage`.

### JavaScript: Routing

* Stworzyć `router` wykorzystując narzędzie Grepnel.
* Dodać ścieżki:
    + dla listy postów
    + dla pojedynczego posta
* Dołączyć `router` do pliku HTML.
* Zamienić tytuł posta w link definiując odpowiedni URL.
* Zamienić tytuł strony w link, kierujący do głównej strony.
* Konfigurujemy Grepnel-a, aby korzystał z `hashbang`.
* Stworzyć katalog na modele i przenieść do niego aktualne 2 modele:
    + model listy postów
    + model pojedynczego posta

### JavaScript: Komponenty

* Stworzenie komponentu pojedynczego posta i przeniesienie procesu
    renderowanie.
* Stworzyć mechanizm wyszukiwania modelu posta po jego identyfikatorze.
* Napisać funkcję, która konwertuje string do dokumentu HTML.
* Rozszerzyć formularze do dodawania posta o zdarzenia.
* Nasłuchiwać na w routerze na `*`, aby czyścić za każdym razem zawartość
    kontenera, w których zmieniają się komponenty.
* Dodać domyślne przekierowanie na stronę z listą postów. Dodać tutaj
    sprawdzenie, czy już nie jest jakiś ustawiony `hash`.
* Przerobić na komponent formularz do dodawania posta.
* Dodać plik z formularzem do pliku HTML.
* Przenieść przechwytywanie wysłania formularza do komponentu.
* Emitować zdarzenie, gdy użytkownik doda nowy post.
* Nasłuchiwać na zdarzenie dodania nowego posta i stworzyć nowy komponent.
* Dodać wyświetlanie czasu stworzenia posta. Warto wykorzystać klasę: `grey-text`

### JavaScript: Feature: Usuwanie posta

* Dodać link do usuwania posta (obok tytułu). Warto wykorzystać klasę: `red-text`
* Stworzyć funkcję, która usuwa model postu z listy.
* Zapisywać zserializowaną listę postów.
* Przekierowywać użytkownika na listę postów.

### CSS

* Dodać zabezpieczenie przed długimi ciągami znaków, które przekraczają
    szerokość kontenera.

### JavaScript: Feature: Edycja posta

* Dodać link do edycji posta obok jego tytułu (w HTML)
* Stworzyć markup formularza do edycji posta na podstawie formularza do
    dodawania posta.
* Umieścić pola do interpolacji w polach formularza.
* Stworzyć nowy komponent na bazie formularza do edycji.
* Dołączyć nowy plik do HTMLa.
* Dodać nową ścieżkę w routingu dla edycji posta.
* W handlerze tej ścieżki stworzyć komponent edycji posta.
* Nasłuchiwać na pomyślną edycję posta i przekierować użytkownika na listę
    postów.

## Czego można się nauczyć podczas realizacji tego zadania?

<details><summary>JavaScript</summary>

* Asynchroniczność
    + Callback
    + Promise
* Wzorce projektowe:
    + MVC
    + Obserwator
    + Metoda szablonowa
    + Dependency Injection
* Mechanizm systemu szablonów
* Rejestr paczek `npm` albo serwery CDN
* Routing
* Rendering
* Walidacja formularza (zabezpieczenie przed XSS)
* Przestrzeń nazw _(en. Namespace)_

</details>

## Linki

* <https://materializecss.com/>
* <https://cdnjs.com/>
* <https://unpkg.com/>
* <https://wzrd.in/>
* <http://placeskull.com/200/200>
