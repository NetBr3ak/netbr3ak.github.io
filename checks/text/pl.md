Przejdź do treści
# Szymon Jędryczko
Enterprise IT System Analyst w Emitelu S.A.
Wdrażam modele językowe i buduję narzędzia do wyszukiwania w dokumentach.
Utrzymuję firmowy czat AI w środowisku produkcyjnym. Pracuję w IT od 2023 roku. Zaczynałem od testów penetracyjnych, a potem tworzyłem usługi backendowe.
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [E-mail](mailto:szymonjedryczko1@gmail.com)
- [GitHub](https://github.com/NetBr3ak)
## Doświadczenie
### Enterprise IT System Analyst
Emitel S.A.
od kwietnia 2025
- Wdrażam aplikacje oparte na modelach językowych. Zbudowałem firmowy czat AI w Open WebUI i utrzymuję go w Dockerze. Przed każdą aktualizacją sprawdzam, czy mogę ją wycofać.
- Na jednej karcie RTX 5090 zwiększyłem szybkość generowania tekstu przez Qwen3.8-27B z 63–75 do 97–122 tokenów na sekundę. Użyłem dekodowania spekulatywnego w llama.cpp. Ustawienia dobrałem na podstawie pomiarów szybkości i użycia pamięci GPU.
- Zbudowałem wyszukiwarkę dokumentów dla asystentów AI. Łączę w niej wyszukiwanie wektorowe z BM25 w Qdrant. Gdy pomiar wykazał, że 74,6% fragmentów przekraczało limit 512 tokenów, zacząłem dzielić tekst według tokenów modelu.
- Przeniosłem część serwerów MCP z Pythona na Rust. W teście wszystkie 97 odpowiedzi referencyjnych zgadzało się bajt w bajt.
### Mid-Level IT Systems and Applications Maintenance Specialist
Emitel S.A.
styczeń–kwiecień 2025
- Utrzymywałem infrastrukturę internetu rzeczy (IoT) i sieci LoRaWAN.
- Stroiłem klastry RabbitMQ i zbudowałem potoki logów i metryk z użyciem ELK i Grafany.
### Financial Risk Specialist
Bank Polskiej Spółdzielczości S.A.
czerwiec–październik 2024
- Pisałem skrypty VBA do przetwarzania danych. W Excelu tworzyłem prognozy przychodów i pulpity wskaźników KPI.
### Software Engineer
Eminus Systems
lipiec 2023 – czerwiec 2024 · Praca na zlecenie
- Budowałem usługi backendowe. Dodałem do CI/CD kontrole bezpieczeństwa i analizę statyczną kodu.
### Penetration Tester
Eminus Systems
styczeń–lipiec 2023 · Praca na zlecenie
- Testowałem bezpieczeństwo aplikacji internetowych, API i infrastruktury.
- Sprawdzałem kod pod kątem bezpieczeństwa. W testach dynamicznych korzystałem z listy OWASP Top 10.

## Badania
### HSPMN: hybrydowe modele językowe, 2026
Napisałem szkic artykułu o modelach, które łączą architekturę Mamba z mechanizmem uwagi. Szkic nie był recenzowany.
Trenowałem modele na jednej karcie RTX 5090 w PyTorchu, używając kerneli Tritona. Podczas sprawdzania wyników znalazłem błąd w celu treningu. Poprawka jest w wersji 5.1.0. Treningi trzeba powtórzyć.
Korekta: Wycofałem deklarowane przyspieszenie 3,32x. W ponownym pomiarze model osiągnął 0,95x szybkości skompilowanego modelu gęstego.
[HSPMN na GitHubie](https://github.com/NetBr3ak/hspmn)

## Po godzinach
Pod nazwą Tenzan Logic rozwijam własne projekty wieczorami i w weekendy. Etat jest dla mnie na pierwszym miejscu.
### Voxmill: transkrypcja offline na komputerach Apple
Program
Napisałem program w Ruście i TypeScripcie, używając Tauri 2 i whisper.cpp. Program zamienia mowę na tekst bez połączenia z internetem.
Dystrybucja
Podpisuję kod i aktualizacje. Program przechodzi notaryzację Apple.
Pomiar
We wrześniu 2026 roku w moim teście na zbiorze FLEURS wskaźnik błędów słów (WER) wyniósł 7,7% na 758 polskich nagraniach i 6,7% na 647 angielskich nagraniach.
Dostępność
Program wydałem we wrześniu 2026 roku. Od wersji 0.4.0 jest bezpłatny i nie wymaga klucza.
[Voxmill na tenzanlogic.com](https://tenzanlogic.com/voxmill/)
### Inne projekty i wkład w open source
- Helio
  Przygotowałem wersję demonstracyjną, która analizuje dane z falowników farm fotowoltaicznych.
- [BETON](https://github.com/NetBr3ak/beton) · 2026
  Napisałem wtyczkę do Claude Code. Po zmianie pliku uruchamia ona lintery, kontrolę typów i testy związane ze zmianą. Blokuje też pomijanie testów.
- [hdfour](https://github.com/NetBr3ak/hdfour) · 2026
  Napisałem czytnik plików HDF4 i HDF-EOS2 w Ruście z interfejsami dla Pythona i WebAssembly. W testach porównuję odczytane wartości z wynikami biblioteki HDF4 w C.
- [Astro](https://github.com/withastro/astro/pull/18660) · 2026
  Moja poprawka do Astro została przyjęta. Pozwala wczytać font zmienny z wyprzedzeniem, gdy plik obejmuje cały żądany zakres grubości.

## Wykształcenie
- Od października 2026 studiuję zarządzanie międzynarodowe na Uniwersytecie Ekonomicznym w Krakowie. To niestacjonarne studia magisterskie.
- W lutym 2025 ukończyłem informatykę i ekonometrię na Uniwersytecie Andrzeja Frycza Modrzewskiego w Krakowie. Uzyskałem tytuł inżyniera ze specjalnością w zakresie bezpieczeństwa informacji.
- W listopadzie 2024 zdobyłem certyfikat Cisco Ethical Hacker.
- W konkursie Proggy-Buggy firmy DataArt napisałem najkrótsze poprawne rozwiązanie w kategorii Superheroes.
- Polski to mój język ojczysty. Swój angielski oceniam na poziom C1.

## Kontakt
Napisz do mnie na LinkedIn lub e-mailem.
[szymonjedryczko1@gmail.com](mailto:szymonjedryczko1@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [GitHub](https://github.com/NetBr3ak)
[Portfolio zawodowe](https://szymonjedryczko.vercel.app/)
