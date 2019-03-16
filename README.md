# warsawjs-workshop-2-blog

Testowa aplikacja stworzona na potrzeby `WarsawJS Workshop #2`

<img
    src="https://warsawjs.com/static/images/logos/logo-warsawjs-with-white-text.svg"
    alt=""
    width="300"
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

## Krok po kroku 👣

1. Stworzenie pliku `index.html`

### HTML

2. Wykorzystać skrót Emmet-a do zbudowania podstawowej struktury HTML.
3. Ustawić tytuł aplikacji
4. Dołączyć framework Materialize (tylko plik CSS) wraz ikonami
    korzystając ze strony: <https://materializecss.com/getting-started.html>
5. Stworzyć kontener do całej aplikacji.
6. Dodać nagłówek pierwszego poziomu.
7. Stworzyć markup do formularza do dodawania posta. Formularz powinien
    zawierać pola:

    - tytuł (pole wymagane)
    - opis (pole wymagane)
    - wyślij (przycisk)

    Warto wykorzystać klasy z Materialize:

    - container
    - section
    - btn

8. Stworzyć markup do listy postów. Zrobić przykładowe 2 posty. Tekst zabity
    na sztywno w markupie.
9. Dołączyć następujące biblioteki jak:

    - <https://github.com/janl/mustache.js>
    - <https://github.com/kelektiv/node-uuid>
    - <https://github.com/visionmedia/page.js>
    - <https://github.com/piecioshka/super-event-emitter>

10. Stworzyć główny pliku projektu: `main.js` i dołączenie go do strony.

### JavaScript

11. Stworzyć funkcję `setup` oraz uruchomić ją po załadowaniu DOMa.
12. Przechwytywać wysłanie formularza (zdarzenie `submit`).
13. Wyłączyć domyślne zachowanie tego zdarzenia za pomocą `preventDefault`.
14. Pobrać dane z formularza za pomocą obiektu `FormData`.
    Jeśli pomimo wypełnienia formularza nie ma danych to zweryfikuj 2 rzeczy:

    - czy na pewno przekazuje referencję do formularza jako argument?
    - czy każdy z inputów posiada atrybut `name`?

15. Wyświetlić za pomocą pętli `for..of` dane wpisane do formularza dodawania
    posta.
16. Stworzyć funkcję, która przekonwertuje obiekt `FormData` na zwykły obiekt.
17. Zbudować funkcję, która na podstawie danych przekazanych w parametrze
    skompiluje te dane i wygeneruje prosty markup HTML.
18. Przenieść markup pojedynczego posta do nowo stworzonego kontenera z
    szablonami.
19. Ukryć kontener zawierający listę szablonów.

    Warto wykorzystać klasę z Materialize:

    - hide

20. Wyczyścić zawartość kontenera zawierającego listę postów.
21. Stworzyć funkcję `render`, która będzie dodawała do kontenera z listą
    postów wynik funkcji kompilującej dane z szablonem.
22. Po wykorzystaniu danych z formularza wyczyścić zawartość pól. Wykorzystać
    do tego funkcję `reset`.

### JavaScript: Stworzenie architektury modeli

23. Stworzyć tablicę postów, która będzie uzupełniana formularzem do
    dodawania postów.
24. Po dodaniu posta zebrane dane dodać do tablicy.
25. Stworzyć model listy postów.
26. Przenieść jego definicję do osobnego pliku (dołączyć w pliku HTML).
27. Stworzyć model obiekt postu, który będzie posiadał unikalny identyfikator
    tworzony podczas konstrukcji obiektu.
28. Przenieść jego definicję do osobnego pliku (dołączyć w pliku HTML).
29. Przenieść renderowanie proces renderowania listy postów do modelu listy
    postów.
30. Stworzyć funkcję `toJSON` w modelu posta, która będzie zwracała obiekt z
    właściwościami.

### JavaScript: LocalStorage

31. Zrobić funkcję `save` w modelu listy postów.
32. Funkcja `save` powinna zserializować obiekt postów i zapisywać go do
    `LocalStorage`.
33. Napisać funkcję `restore` w modelu posta. Funkcja powinna zawracać
    instancję posta, wraz z ustawionym unikalnym identyfikatorem.
36. Napisać funkcję `load`, która pobierała z `localStorage` zserializowaną
    listę postów oraz przywracała modele postów.
34. Uruchomić `restore` zaraz po stworzeniu modelu listy postów.
35. Uruchomić `render` list postów zaraz po załadowaniu list postów.
37. Przenieść do stałej klucz, pod którym zapisywana jest lista postów w
    `localStorage`.

### JavaScript: Routing

38. Stworzyć `router` wykorzystując narzędzie Grepnel.
39. Dodać ścieżki:

    - dla listy postów
    - dla pojedynczego posta

40. Dołączyć `router` do pliku HTML.
41. Zamienić tytuł posta w link definiując odpowiedni URL.
42. Zamienić tytuł strony w link, kierujący do głównej strony.
43. Konfigurujemy Grepnel-a, aby korzystał z `hashbang`.
44. Stworzyć katalog na modele i przenieść do niego aktualne 2 modele:

    - model listy postów
    - model pojedynczego posta

### JavaScript: Komponenty

45. Stworzenie komponentu pojedynczego posta i przeniesienie procesu
    renderowanie.
46. Stworzyć mechanizm wyszukiwania modelu posta po jego identyfikatorze.
47. Napisać funkcję, która konwertuje string do dokumentu HTML.
48. Rozszerzyć formularze do dodawania posta o zdarzenia.
49. Nasłuchiwać na w routerze na `*`, aby czyścić za każdym razem zawartość
    kontenera, w których zmieniają się komponenty.
50. Dodać domyślne przekierowanie na stronę z listą postów. Dodać tutaj
    sprawdzenie, czy już nie jest jakiś ustawiony `hash`.
51. Przerobić na komponent formularz do dodawania posta.
52. Dodać plik z formularzem do pliku HTML.
53. Przenieść przechwytywanie wysłania formularza do komponentu.
54. Emitować zdarzenie, gdy użytkownik doda nowy post.
55. Nasłuchiwać na zdarzenie dodania nowego posta i stworzyć nowy komponent.
56. Dodać wyświetlanie czasu stworzenia posta.

    Warto wykorzystać klasę z Materialize:

    - grey-text

### JavaScript: Feature: Usuwanie posta

57. Dodać link do usuwania posta (obok tytułu).

    Warto wykorzystać klasę z Materialize:

    - red-text

58. Stworzyć funkcję, która usuwa model postu z listy.
59. Zapisywać zserializowaną listę postów.
60. Przekierowywać użytkownika na listę postów.

### CSS

61. Dodać zabezpieczenie przed długimi ciągami znaków, które przekraczają
    szerokość kontenera.

### JavaScript: Feature: Edycja posta

62. Dodać link do edycji posta obok jego tytułu (w HTML)
63. Stworzyć markup formularza do edycji posta na podstawie formularza do
    dodawania posta.
64. Umieścić pola do interpolacji w polach formularza.
65. Stworzyć nowy komponent na bazie formularza do edycji.
66. Dołączyć nowy plik do HTMLa.
67. Dodać nową ścieżkę w routingu dla edycji posta.
68. W handlerze tej ścieżki stworzyć komponent edycji posta.
69. Nasłuchiwać na pomyślną edycję posta i przekierować użytkownika na listę
    postów.

---

## Linki

* <https://materializecss.com/>
* <https://cdnjs.com/>
* <https://unpkg.com/>
* <https://wzrd.in/>
* <https://avatars.adorable.io/>
