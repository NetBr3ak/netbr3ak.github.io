# Szymon Jędryczko

Założyciel i inżynier oprogramowania

Kod publikuję na GitHubie jako [NetBr3ak](https://github.com/NetBr3ak).

Piszę oprogramowanie do transkrypcji mowy offline na komputery Apple i prowadzę [eksperymenty z modelami językowymi](https://github.com/NetBr3ak/HSPMN) na jednej karcie graficznej. Założyłem Tenzan Logic, gdzie powstają Voxmill i Helio.

## Oprogramowanie (kod zamknięty)

- [Voxmill](https://tenzanlogic.com/): transkrypcja offline na komputerach Apple. Technologie: Rust, whisper.cpp i Core ML. Współczynnik błędów słów (WER) wynosi 7,74% na 758 nagraniach mowy czytanej z polskiego zbioru testowego FLEURS (Voxmill Pro, Whisper large-v3-turbo Q5_0, tekst znormalizowany, pomiar Tenzan Logic, wrzesień 2026).
- [Helio](https://tenzanlogic.com/helio/pl/): demo, które analizuje farmy fotowoltaiczne na podstawie danych zapisywanych już przez ich falowniki.

## Otwarty kod

- [BETON](https://github.com/NetBr3ak/beton): wtyczka do Claude Code. Po każdym wywołaniu `Write`, `Edit` lub `MultiEdit` uruchamia zainstalowane w projekcie lintery, sprawdzanie typów i testy dobrane według nazwy pliku. Blokuje też obejścia, takie jak `# noqa` czy pomijanie testów.
- [withastro/astro #18660](https://github.com/withastro/astro/pull/18660), scalony: wstępne ładowanie fontów zmiennych, gdy żądany zakres grubości mieści się w zakresie pliku.

## Badania

[HSPMN](https://github.com/NetBr3ak/HSPMN) to kod badawczy w języku Python do nieopublikowanego artykułu o hybrydowych modelach językowych. Sprawdzam w nim routing między rekurencyjnym strumieniem Gated DeltaNet a strumieniem Native Sparse Attention. Porównuję wyuczoną bramkę decydującą osobno o każdym tokenie z zamrożoną bramką losową. Modele trenowałem na WikiText-103 w dwóch skalach nazwanych 140M i 350M. To nazwy skal, a nie dokładne liczby parametrów ([zapisane wyniki](https://github.com/NetBr3ak/HSPMN#recorded-findings)).

Późniejszy audyt wykazał błąd, który dwa razy przesuwał etykiety treningowe. Każdy zapisany przebieg uczył się więc przewidywać token o dwie pozycje dalej, a nie następny. Audyt wykazał też dostęp do przyszłych tokenów w bramce z kodowaniem predykcyjnym i w automatycznym wyborze bloków NSA oraz błędną rekurencję Gated DeltaNet na CPU. Wersja 5.1.0 poprawia te błędy, ale nie uruchomiłem jej jeszcze w pełnym treningu ([stan odtwarzalności](https://github.com/NetBr3ak/HSPMN#reproduction-status)).

[Źródło artykułu (LaTeX)](https://github.com/NetBr3ak/HSPMN/blob/main/paper/HSPMN_v5_draft.tex), napisanego przed audytem.

## Linki

- [GitHub](https://github.com/NetBr3ak)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [Tenzan Logic](https://tenzanlogic.com/)
