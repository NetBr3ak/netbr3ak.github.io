Przejdź do treści
# Szymon Jędryczko
Enterprise IT System Analyst w Emitelu S.A.
Tworzę aplikacje AI dla pracowników i klientów.
W Emitelu łączę modele językowe z systemami firmowymi. Pracownicy mogą wyszukiwać informacje w dokumentach i przygotowywać zgłoszenia do zatwierdzenia. Część modeli uruchamiam na lokalnym sprzęcie.
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [E-mail](mailto:szymonjedryczko1@gmail.com)
- [GitHub](https://github.com/NetBr3ak)
## Doświadczenie
### Enterprise IT System Analyst
Emitel S.A.
od kwietnia 2025
- Zbudowałem wyszukiwarkę dokumentów w Qdrant. Łączę wyszukiwanie po znaczeniu z dopasowaniem słów przez BM25. Przed przekazaniem wyników modelowi ponownie oceniam trafność fragmentów.
- Wdrożyłem asystenta, który z opisu po polsku przygotowuje szkic zgłoszenia. Gemini proponuje kategorię i treść. Aplikacja sprawdza kategorię, priorytet i wymagane pola. Zgłoszenie trafia do systemu po zatwierdzeniu przez użytkownika.
- Zbudowałem i utrzymuję firmowy czat AI w Dockerze z Open WebUI. Czat korzysta z Gemini, lokalnego modelu uruchamianego przez llama.cpp i narzędzi MCP tylko do odczytu. Przed aktualizacją sprawdzam, czy mogę ją wycofać.
- Przeniosłem serwery MCP z Pythona do Rusta. W testach regresji odpowiedzi wersji w Ruście były identyczne bajt po bajcie z odpowiedziami referencyjnymi.
- Porównałem szybkość generowania w llama.cpp na jednej karcie RTX 5090. Qwen3.8-27B osiągał 63–75 tokenów na sekundę bez dekodowania spekulatywnego i 97–122 po jego włączeniu.
### Mid-Level IT Systems and Applications Maintenance Specialist
Emitel S.A.
styczeń–kwiecień 2025
- Utrzymywałem infrastrukturę internetu rzeczy (IoT) i sieci LoRaWAN.
- Stroiłem klastry RabbitMQ i zbudowałem potoki logów i metryk z użyciem ELK i Grafany.
### Financial Risk Specialist
Bank Polskiej Spółdzielczości S.A.
czerwiec–październik 2024
- Pisałem skrypty VBA do przetwarzania danych. W Excelu tworzyłem prognozy przychodów i pulpity KPI.
### Software Engineer
Eminus Systems
lipiec 2023 – czerwiec 2024 · freelance
- Budowałem usługi backendowe. Dodałem do CI/CD kontrole bezpieczeństwa i analizę statyczną kodu.
### Penetration Tester
Eminus Systems
styczeń–lipiec 2023 · freelance
- Testowałem bezpieczeństwo aplikacji internetowych, API i infrastruktury (Burp Suite, Metasploit, Nmap).
- Sprawdzałem kod pod kątem bezpieczeństwa. W testach dynamicznych korzystałem z listy OWASP Top 10.

## Badania
### HSPMN: hybrydowe modele językowe, 2026
W nierecenzowanym szkicu artykułu opisałem model, który kieruje tokeny do Gated DeltaNet lub Native Sparse Attention.
Podczas sprawdzania wyników wykryłem błędne przesunięcie celu treningu i odczyt przyszłych tokenów. Wersja 5.1.0 poprawia kod referencyjny. Nie powtórzyłem jeszcze treningów w pierwotnej skali.
Korekta: wycofałem deklarowane przyspieszenie 3,32x. Dawny opis podawał 0,95x dla HSPMN v3.0 względem skompilowanego modelu gęstego. To nie jest wynik po poprawkach.
[HSPMN na GitHubie](https://github.com/NetBr3ak/hspmn)

## Po godzinach
Po godzinach rozwijam własne oprogramowanie i współtworzę projekty open source.
### Voxmill: transkrypcja offline na komputerach Apple
Program
Napisałem program w Ruście i TypeScripcie, używając Tauri 2 i whisper.cpp. Program zamienia mowę na tekst bez połączenia z internetem.
Dystrybucja
Podpisuję kod i aktualizacje. Program przechodzi notaryzację Apple.
Pomiar
We wrześniu 2026 roku w moim teście na zbiorze FLEURS wskaźnik błędów słów (WER) wyniósł 7,7% na 758 polskich nagraniach i 6,7% na 647 angielskich nagraniach.
Dostępność
Program wydałem we wrześniu 2026 roku. Od wersji 0.4.0 jest bezpłatny.
[Voxmill na tenzanlogic.com](https://tenzanlogic.com/voxmill/)
### Inne projekty i wkład w open source
- [Astro](https://github.com/withastro/astro/pull/18660) · 2026
  Odtworzyłem błąd ładowania fontu zmiennego dla zakresu grubości. Projekt Astro przyjął moją poprawkę i test, który wykrywa powrót błędu.
- [hdfour](https://github.com/NetBr3ak/hdfour) · 2026
  Napisałem w Ruście czytnik plików HDF4 i HDF-EOS2 z interfejsami dla Pythona i WebAssembly. W testach porównuję odczyt z wynikami biblioteki referencyjnej HDF4 w C. Prace trwają.
- [BETON](https://github.com/NetBr3ak/beton) · 2026
  Napisałem wtyczkę do Claude Code. Po edycji uruchamia zainstalowane lintery, kontrolę typów i powiązane testy. W Pythonie śledzi lokalne importy, żeby znaleźć testy związane ze zmianą.

## Wykształcenie
- Od października 2026 studiuję zarządzanie międzynarodowe na Uniwersytecie Ekonomicznym w Krakowie. To niestacjonarne studia magisterskie.
- W lutym 2025 ukończyłem informatykę i ekonometrię na Uniwersytecie Andrzeja Frycza Modrzewskiego w Krakowie. Uzyskałem tytuł inżyniera. Specjalizowałem się w bezpieczeństwie informacji.
- W listopadzie 2024 zdobyłem certyfikat Cisco Ethical Hacker.
- W maju 2024 w konkursie Proggy-Buggy firmy DataArt napisałem najkrótsze poprawne rozwiązanie na poziomie Superheroes.
- Polski to mój język ojczysty. Swój angielski oceniam na poziomie C1.

## Kontakt
Napisz do mnie na LinkedInie lub e-mailem.
[szymonjedryczko1@gmail.com](mailto:szymonjedryczko1@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [GitHub](https://github.com/NetBr3ak)
[szymonjedryczko.vercel.app](https://szymonjedryczko.vercel.app/)
