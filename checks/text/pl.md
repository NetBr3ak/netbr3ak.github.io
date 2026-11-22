# Szymon Jędryczko

Założyciel i inżynier oprogramowania

Kod publikuję na GitHubie jako [NetBr3ak](https://github.com/NetBr3ak).

Piszę oprogramowanie do transkrypcji mowy offline na komputery Apple i prowadzę [eksperymenty z modelami językowymi](https://github.com/NetBr3ak/hspmn) na jednej karcie graficznej. Założyłem Tenzan Logic, gdzie powstają Voxmill i Helio.

## Oprogramowanie (kod zamknięty)

- [Voxmill](https://tenzanlogic.com/): transkrypcja offline na komputerach Apple. Technologie: Rust, whisper.cpp i Core ML. Współczynnik błędów słów (WER) wynosi 7,74% na 758 nagraniach mowy czytanej z polskiego zbioru testowego FLEURS (Voxmill Pro, Whisper large-v3-turbo Q5_0, tekst znormalizowany, pomiar Tenzan Logic, wrzesień 2026).
- [Helio](https://tenzanlogic.com/helio/pl/): demo, które analizuje farmy fotowoltaiczne na podstawie danych zapisywanych już przez ich falowniki.

## Otwarty kod

- [BETON](https://github.com/NetBr3ak/beton): wtyczka do Claude Code. Po każdym wywołaniu `Write`, `Edit` lub `MultiEdit` uruchamia zainstalowane lintery, sprawdzanie typów i testy dobrane według nazwy pliku. Blokuje też obejścia, takie jak `# noqa` czy pomijanie testów.
- [HDFour](https://github.com/NetBr3ak/hdfour): Czytnik plików HDF4 i HDF-EOS2 napisany w języku Rust. Te same dane można odczytać z Pythona lub w przeglądarce przez WebAssembly. Wyniki porównuję z odczytem referencyjnej biblioteki HDF4 w C.
- [Fruitend](https://github.com/NetBr3ak/fruitend): Animowana strona napisana w HTML, CSS i JavaScript. Plaster cytrusa tworzą gradienty. Wbudowany inspektor pokazuje reguły CSS wskazanego elementu.
- [Cook Book Chronicles](https://github.com/NetBr3ak/Cook-book-Chronicles): Strona z przepisami, która przelicza składniki na wybraną liczbę porcji i uruchamia minutniki przy krokach gotowania. Nie wymaga procesu budowania.
- [withastro/astro #18660](https://github.com/withastro/astro/pull/18660), scalony: wstępne ładowanie fontów zmiennych, gdy żądany zakres grubości mieści się w zakresie pliku.

## Badania

[HSPMN](https://github.com/NetBr3ak/hspmn) to kod badawczy w języku Python do nieopublikowanego artykułu o hybrydowych modelach językowych. Sprawdzam w nim routing między rekurencyjnym strumieniem Gated DeltaNet a strumieniem Native Sparse Attention. Porównuję wyuczoną bramkę decydującą osobno o każdym tokenie z zamrożoną bramką losową. Modele trenowałem na WikiText-103 w dwóch skalach nazwanych 140M i 350M. To nazwy skal, a nie dokładne liczby parametrów ([zapisane wyniki](https://github.com/NetBr3ak/hspmn#recorded-findings)).

Późniejszy audyt wykazał błąd, który dwa razy przesuwał etykiety treningowe. Każdy zapisany przebieg uczył się więc przewidywać token o dwie pozycje dalej, a nie następny. Audyt wykazał też dostęp do przyszłych tokenów w bramce z kodowaniem predykcyjnym i w automatycznym wyborze bloków NSA oraz błędną rekurencję Gated DeltaNet na CPU. Wersja 5.1.0 poprawia te błędy, ale nie uruchomiłem jej jeszcze w pełnym treningu ([stan odtwarzalności](https://github.com/NetBr3ak/hspmn#reproduction-status)).

[Źródło artykułu (LaTeX)](https://github.com/NetBr3ak/hspmn/blob/main/paper/HSPMN_v5_draft.tex), napisanego przed audytem.

## Doświadczenie zawodowe

W marcu 2026 roku założyłem Tenzan Logic. W Emitelu zajmowałem się utrzymaniem systemów i aplikacji IT od grudnia 2024 do kwietnia 2025 roku. W kwietniu 2025 przeszedłem do analizy systemów IT.

Od czerwca do października 2024 roku pracowałem w obszarze ryzyka finansowego w Banku Polskiej Spółdzielczości. Wcześniej współpracowałem z Eminus Systems: od stycznia do lipca 2023 jako tester bezpieczeństwa, a od lipca 2023 do czerwca 2024 jako inżynier oprogramowania.

## Wykształcenie

W lutym 2025 roku ukończyłem studia inżynierskie z informatyki i ekonometrii na Uniwersytecie Andrzeja Frycza Modrzewskiego w Krakowie, ze specjalnością bezpieczeństwo informacji. Byłem wiceprezesem uczelnianego koła informatycznego i współorganizowałem turniej e-sportowy Frycz Cyber Sektor Arena.

W listopadzie 2024 roku zdobyłem certyfikat Cisco Ethical Hacker. W maju 2024 napisałem najkrótsze poprawne rozwiązanie w kategorii Superheroes w konkursie programistycznym Proggy-Buggy organizowanym przez DataArt.

## Linki

- [GitHub](https://github.com/NetBr3ak)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [Tenzan Logic](https://tenzanlogic.com/)
