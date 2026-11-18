# Szymon Jędryczko

Founder & Software Engineer

I publish code on GitHub as [NetBr3ak](https://github.com/NetBr3ak).

I build offline speech software for Apple computers and run [language-model experiments](https://github.com/NetBr3ak/HSPMN) on one GPU. I founded Tenzan Logic, which makes Voxmill and Helio.

## Software (closed source)

- [Voxmill](https://tenzanlogic.com/en/): offline transcription for Apple computers, built with Rust, whisper.cpp and Core ML. 7.74% word error rate on the 758 read-speech clips of the Polish FLEURS test set (Voxmill Pro, Whisper large-v3-turbo Q5_0, normalised text, measured by Tenzan Logic, September 2026).
- [Helio](https://tenzanlogic.com/helio/en/): a demo that analyses solar farms from the inverter data they already log.

## Open source

- [BETON](https://github.com/NetBr3ak/beton): a Claude Code plugin. After each `Write`, `Edit` or `MultiEdit`, it runs the installed linters and type checkers, and tests matched by file name. It also blocks shortcuts such as `# noqa` and skipped tests.
- [gba](https://github.com/NetBr3ak/gba): A Game Boy Advance emulator in C++23 and SDL3. I test its graphics and BIOS functions with small programs written for the emulator, without distributing game ROMs.
- [Planetary System Simulation](https://github.com/NetBr3ak/Planetary-System-Simulation): A two-body gravity simulator. SciPy calculates the orbits; the tests check conservation of energy and momentum and compare the period with Kepler’s third law.
- [core-chat](https://github.com/NetBr3ak/core-chat): A chat client in Next.js with a Bun and Hono backend. Replies stream from Gemini on Vertex AI; a stand-in model lets the tests run without a cloud key.
- [Fruitend](https://github.com/NetBr3ak/fruitend): An animated page built with HTML, CSS and JavaScript. The citrus slice is drawn with gradients; the built-in inspector shows the CSS rules behind the element you point at.
- [Cook Book Chronicles](https://github.com/NetBr3ak/Cook-book-Chronicles): A recipe site that recalculates ingredients for the number of servings and runs timers beside the cooking steps. It needs no build step.
- [withastro/astro #18660](https://github.com/withastro/astro/pull/18660), merged: preload variable fonts when the requested weight range is inside the file's range.

## Research

[HSPMN](https://github.com/NetBr3ak/HSPMN) is Python research code for an unpublished manuscript on hybrid language models. It compares a learned per-token gate with a frozen random gate for routing between a Gated DeltaNet recurrent stream and a Native Sparse Attention stream. I trained models on WikiText-103 at two scales, 140M and 350M; these are scale names, not exact parameter counts ([recorded findings](https://github.com/NetBr3ak/HSPMN#recorded-findings)).

A later audit found a bug that shifted the training targets twice, so every recorded run learned to predict the token two places ahead, not the next token. The audit also found future-token access in the predictive-coding gate and automatic NSA block selection, and an incorrect Gated DeltaNet CPU recurrence. Version 5.1.0 fixes these defects; I have not yet run it at training scale ([reproduction status](https://github.com/NetBr3ak/HSPMN#reproduction-status)).

[Manuscript source (LaTeX)](https://github.com/NetBr3ak/HSPMN/blob/main/paper/HSPMN_v5_draft.tex), written before the audit.

## Work experience

I founded Tenzan Logic in March 2026. At Emitel, I moved from IT systems and application maintenance (December 2024 to April 2025) into enterprise IT systems analysis in April 2025.

I worked in financial risk at Bank Polskiej Spółdzielczości from June to October 2024. Before that, I worked freelance for Eminus Systems, first as a penetration tester (January to July 2023), then as a software engineer (July 2023 to June 2024).

## Education

I earned an engineering degree in computer science and econometrics at Andrzej Frycz Modrzewski Krakow University in February 2025, specialising in information security. I was vice president of the university IT club and helped organise the Frycz Cyber Sektor Arena esports tournament.

I earned the Cisco Ethical Hacker certificate in November 2024. In May 2024, I wrote the shortest correct solution in the Superheroes tier of DataArt’s Proggy-Buggy programming contest.

## Links

- [GitHub](https://github.com/NetBr3ak)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [Tenzan Logic](https://tenzanlogic.com/en/)
