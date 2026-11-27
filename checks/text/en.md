Skip to content
# Szymon Jędryczko
Enterprise IT System Analyst at Emitel S.A.
I build AI applications for employees and customers.
At Emitel, I connect language models to company systems. Employees can search documents and prepare tickets for review. I run some models on local hardware.
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [Email](mailto:szymonjedryczko1@gmail.com)
- [GitHub](https://github.com/NetBr3ak)
## Experience
### Enterprise IT System Analyst
Emitel S.A.
since April 2025
- I built a document search engine in Qdrant. I combine search by meaning with BM25 keyword matching, then rerank the passages before passing them to the language model.
- I deployed an assistant that drafts a ticket from a description in Polish. Gemini suggests the category and writes the draft. The application checks the category, priority and required fields. It submits the ticket only after the user confirms.
- I built and maintain the company AI chat using Open WebUI and Docker. It uses Gemini, a local model served by llama.cpp and read-only MCP tools. Before an update, I check that I can roll it back.
- I ported MCP servers from Python to Rust. In regression tests, the Rust responses matched the reference responses byte for byte.
- I compared generation speed in llama.cpp on one RTX 5090. Qwen3.8-27B ran at 63–75 tokens per second without speculative decoding and 97–122 with it enabled.
### Mid-Level IT Systems and Applications Maintenance Specialist
Emitel S.A.
January to April 2025
- I maintained Internet of Things (IoT) infrastructure and LoRaWAN networks.
- I tuned RabbitMQ clusters and built pipelines for logs and metrics using ELK and Grafana.
### Financial Risk Specialist
Bank Polskiej Spółdzielczości S.A.
June to October 2024
- I wrote VBA scripts to process data. In Excel, I built revenue forecasts and KPI dashboards.
### Software Engineer
Eminus Systems
July 2023 to June 2024 · Freelance
- I built backend services and added security checks and static analysis to CI/CD.
### Penetration Tester
Eminus Systems
January to July 2023 · Freelance
- I tested the security of web applications, APIs and infrastructure (Burp Suite, Metasploit, Nmap).
- I reviewed code for security issues and used the OWASP Top 10 in dynamic tests.

## Research
### HSPMN: hybrid language models, 2026
In an unreviewed draft paper, I described a model that routes tokens to Gated DeltaNet or Native Sparse Attention.
When reviewing the results, I found incorrectly shifted training targets and access to future tokens. Version 5.1.0 fixes the reference code. I have not repeated training at the original scale.
Correction: I retracted the claimed 3.32x speedup. An earlier report listed 0.95x for HSPMN v3.0 against a compiled dense model. That comparison predates the fixes.
[HSPMN on GitHub](https://github.com/NetBr3ak/hspmn)

## After hours
Outside work, I build my own software and contribute to open source projects.
### Voxmill: offline transcription on Apple computers
App
I wrote the app in Rust and TypeScript using Tauri 2 and whisper.cpp. It turns speech into text without an internet connection.
Distribution
I sign the code and updates. The app goes through Apple notarisation.
Measurement
In my September 2026 test on FLEURS, the word error rate (WER) was 7.7% on 758 Polish recordings and 6.7% on 647 English recordings.
Availability
I released the app in September 2026.
[Voxmill on tenzanlogic.com](https://tenzanlogic.com/en/voxmill/)
### Other projects and open source contributions
- [Astro](https://github.com/withastro/astro/pull/18660) · 2026
  I reproduced a bug in how Astro preloads a variable font for a range of weights. Astro merged my fix and a regression test.
- [hdfour](https://github.com/NetBr3ak/hdfour) · 2026
  I wrote a Rust reader for HDF4 and HDF-EOS2 files, with Python and WebAssembly bindings. Tests compare its output with the reference HDF4 C library. Work is ongoing.
- [BETON](https://github.com/NetBr3ak/beton) · 2026
  I wrote a Claude Code plugin that runs installed linters, type checks and related tests after an edit. It follows local Python imports to find tests affected by the change.

## Education
- I started a part-time master’s programme in International Management at Krakow University of Economics in October 2026.
- I graduated in Computer Science and Econometrics from Andrzej Frycz Modrzewski Krakow University in February 2025. I earned an engineering degree with a specialisation in information security.
- I earned the Cisco Ethical Hacker certificate in November 2024.
- In May 2024, I wrote the shortest correct solution in the Superheroes tier of DataArt’s Proggy-Buggy contest.
- Polish is my first language. I rate my English at C1.

## Contact
Write to me on LinkedIn or by email.
[szymonjedryczko1@gmail.com](mailto:szymonjedryczko1@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [GitHub](https://github.com/NetBr3ak)
[szymonjedryczko.vercel.app](https://szymonjedryczko.vercel.app/en)
