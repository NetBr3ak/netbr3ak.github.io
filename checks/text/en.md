Skip to content
# Szymon Jędryczko
Enterprise IT System Analyst at Emitel S.A.
I deploy language models and build tools for document search.
I run the company AI chat in production. I have worked in IT since 2023. I started in penetration testing before building backend services.
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [Email](mailto:szymonjedryczko1@gmail.com)
- [GitHub](https://github.com/NetBr3ak)
## Experience
### Enterprise IT System Analyst
Emitel S.A.
since April 2025
- I am the only AI specialist at the company. I take AI projects from idea to production: language model applications, document search (RAG), MCP servers and local inference.
- I built the company AI chat in Open WebUI and run it in Docker. It uses Gemini in the cloud, a local Qwen model on llama.cpp, search over company documents and 5 MCP servers. Before each update, I test whether I can roll it back.
- On one RTX 5090, I increased Qwen3.8-27B generation speed from 63–75 to 97–122 tokens per second. I used speculative decoding in llama.cpp and chose settings by measuring speed and GPU memory use.
- I built document search for AI assistants. It combines vector search and BM25 in Qdrant. When I found that 74.6% of the measured passages exceeded the 512-token limit, I switched to splitting text by model tokens.
- I ported 4 of the 5 MCP servers from Python to Rust. All 97 reference responses matched byte for byte. Two larger differential test suites found no differences.
- I built an IT service desk assistant that runs in production. It uses Gemini to classify tickets from Polish descriptions and draft them. It submits a ticket only after the user confirms.
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
I wrote a draft paper on models that combine the Mamba architecture with attention. The draft has not been peer reviewed.
I trained the models on one RTX 5090 using PyTorch and Triton kernels. When I checked my results, I found a bug in the training targets. I fixed it in version 5.1.0. The training runs still need to be repeated.
Correction: I retracted the claimed 3.32x speedup. In a repeat measurement, the model reached 0.95x the speed of the compiled dense model.
[HSPMN on GitHub](https://github.com/NetBr3ak/hspmn)

## After hours
In the evenings and at weekends, I work on personal projects. My day job comes first.
### Voxmill: offline transcription on Apple computers
App
I wrote the app in Rust and TypeScript using Tauri 2 and whisper.cpp. It turns speech into text without an internet connection.
Distribution
I sign the code and updates. The app goes through Apple notarisation.
Measurement
In my September 2026 test on FLEURS, the word error rate (WER) was 7.7% on 758 Polish recordings and 6.7% on 647 English recordings.
Availability
I released the app in September 2026. It is free from version 0.4.0.
[Voxmill on tenzanlogic.com](https://tenzanlogic.com/en/voxmill/)
### Other projects and open source contributions
- [BETON](https://github.com/NetBr3ak/beton) · 2026
  I wrote a Claude Code plugin. After each agent edit, it runs linters, type checks and the affected tests. It also blocks skipped tests.
- [hdfour](https://github.com/NetBr3ak/hdfour) · 2026
  I wrote a Rust reader for HDF4 and HDF-EOS2 files, with Python and WebAssembly bindings. In tests, I compare the values it reads with those from the HDF4 C library. Work on it continues.
- [Astro](https://github.com/withastro/astro/pull/18660) · 2026
  My change to Astro was merged. It preloads variable fonts when the file covers the full requested weight range.

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
