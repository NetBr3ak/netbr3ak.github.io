# Szymon Jędryczko

Founder & Software Engineer

I publish code on GitHub as [NetBr3ak](https://github.com/NetBr3ak).

I build offline speech software for Apple computers and run [language-model experiments](https://github.com/NetBr3ak/HSPMN) on one GPU. I founded Tenzan Logic, which makes Voxmill and Helio.

## Software (closed source)

- [Voxmill](https://tenzanlogic.com/en/): offline transcription for Apple computers, built with Rust, whisper.cpp and Core ML. 7.74% word error rate on the 758 read-speech clips of the Polish FLEURS test set (Voxmill Pro, Whisper large-v3-turbo Q5_0, normalised text, measured by Tenzan Logic, September 2026).
- [Helio](https://tenzanlogic.com/helio/en/): a demo that analyses solar farms from the inverter data they already log.

## Open source

- [BETON](https://github.com/NetBr3ak/beton): a Claude Code plugin. After each `Write`, `Edit` or `MultiEdit`, it runs the installed linters and type checkers, and tests matched by file name. It also blocks shortcuts such as `# noqa` and skipped tests.
- [withastro/astro #18660](https://github.com/withastro/astro/pull/18660), merged: preload variable fonts when the requested weight range is inside the file's range.

## Research

[HSPMN](https://github.com/NetBr3ak/HSPMN) is Python research code for an unpublished manuscript on hybrid language models. It compares a learned per-token gate with a frozen random gate for routing between a Gated DeltaNet recurrent stream and a Native Sparse Attention stream. I trained models on WikiText-103 at two scales, 140M and 350M; these are scale names, not exact parameter counts ([recorded findings](https://github.com/NetBr3ak/HSPMN#recorded-findings)).

A later audit found a bug that shifted the training targets twice, so every recorded run learned to predict the token two places ahead, not the next token. The audit also found future-token access in the predictive-coding gate and automatic NSA block selection, and an incorrect Gated DeltaNet CPU recurrence. Version 5.1.0 fixes these defects; I have not yet run it at training scale ([reproduction status](https://github.com/NetBr3ak/HSPMN#reproduction-status)).

[Manuscript source (LaTeX)](https://github.com/NetBr3ak/HSPMN/blob/main/paper/HSPMN_v5_draft.tex), written before the audit.

## Links

- [GitHub](https://github.com/NetBr3ak)
- [LinkedIn](https://www.linkedin.com/in/szymon-jedryczko)
- [Tenzan Logic](https://tenzanlogic.com/en/)
