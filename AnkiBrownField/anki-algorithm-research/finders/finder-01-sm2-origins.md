# Finder 01 — SM-2 Origins

**Agent:** Finder 01 of 17 | **Angle:** Original SuperMemo SM-2 algorithm and its predecessors (SM-0, SM-2, SM-5) by Piotr Woźniak — foundational source material on the exact SM-2 procedure (ease factor, intervals, quality grades 0–5), the rationale, and how Anki adopted it.

## Summary Table

| # | Title | Authors | Year | Venue / Publisher | URL / DOI | Directness (1–10) |
|---|-------|---------|------|-------------------|-----------|:----------------:|
| 1 | SuperMemo 2: Algorithm (Optimization of Learning, §3.2) | Piotr A. Woźniak | 1990 (web 1998) | super-memory.org / SuperMemo World | http://super-memory.com/english/ol/sm2.htm | 10 |
| 2 | Application of a computer to improve the results obtained in working with the SuperMemo method | Piotr A. Woźniak | 1990 (web 1998) | SuperMemo.com (blog/archive) | https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method | 9 |
| 3 | Optimization of Learning (Master's Thesis — full table of contents/text) | Piotr A. Woźniak (supervisor Z. Kierzkowski) | 1990 | University of Technology in Poznań | https://super-memory.org/archive/english/ol.htm | 9 |
| 4 | What spaced repetition algorithm does Anki use? | Anki / Damien Elmes & contributors | 2023–present | AnkiWeb FAQs (official) | https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html | 10 |
| 5 | First fast-converging spaced repetition algorithm: Algorithm SM-5 | Piotr A. Woźniak | 1989 (wiki 2018) | supermemo.guru | https://www.supermemo.guru/wiki/Algorithm_SM-5 | 7 |
| 6 | Optimization of repetition spacing in the practice of learning | P. A. Woźniak, E. J. Gorzelańczyk | 1994 | Acta Neurobiologiae Experimentalis 54(1):59–62 | https://doi.org/10.55782/ane-1994-1003 | 7 |
| 7 | SuperMemo Algorithm (history/timeline of SM-0 → SM-18) | SuperMemo Help wiki contributors | 2023 (rev.) | help.supermemo.org | https://help.supermemo.org/wiki/SuperMemo_Algorithm | 6 |
| 8 | Account of research leading to the SuperMemo method (Algorithm SM-0 / the beginning) | Piotr A. Woźniak | 1990 (web) | SuperMemo.com (blog/archive) | https://www.supermemo.com/en/blog/account-of-research-leading-to-the-supermemo-method-3 | 6 |
| 9 | Two components of long-term memory | P. A. Woźniak, E. J. Gorzelańczyk, J. A. Murakowski | 1995 | Acta Neurobiologiae Experimentalis 55:301–305 | https://super-memory.org/archive/english/2vm.htm | 5 |

## Notes (3-sentence relevance: (a) what the algorithm does, (b) why/how, (c) weaknesses)

### 1. SuperMemo 2: Algorithm — Woźniak (1990) — Score 10/10
(a) This is the canonical, primary specification of SM-2: items start at fixed intervals I(1)=1 day, I(2)=6 days, then I(n)=I(n-1)·EF, with each item carrying an E-Factor (easiness factor) initialized at 2.5 and bounded below at 1.3. (b) After each repetition the learner grades recall on a 0–5 quality scale and the EF is updated via `EF' = EF + (0.1 − (5−q)·(0.08 + (5−q)·0.02))`; grades below 3 reset the repetition count so the item is re-learned from I(1), tightly coupling spacing to per-item difficulty. (c) Woźniak notes SM-2 was built by trial-and-error with the EF formula and starting intervals essentially hand-tuned/intuitive (not adaptive), so the universal multipliers do not personalize to a learner and lack an explicit retention target — limitations that later motivated SM-4/SM-5.

### 2. Application of a computer to improve the results… — Woźniak (1990) — Score 9/10
(a) The official SuperMemo.com reproduction of the same SM-2 chapter, giving identical intervals, the 0–5 grade definitions, and the EF update formula, plus the historical note that SM-2 ran in SuperMemo 1.0–3.0 (Dec 1987–Mar 1989). (b) It explains the rationale: separating items previously grouped into "pages" and introducing per-item E-Factors were the two key advances over SM-0, letting each item be spaced according to its own measured difficulty. (c) It candidly reports SM-2's empirical performance (89.3%/92% retention; 10,255 items/year) and frames its quantitative gains over SM-0 as modest, acknowledging it was a trial-and-error construct rather than a derived optimum.

### 3. Optimization of Learning (Master's Thesis ToC/full text) — Woźniak (1990) — Score 9/10
(a) The foundational dissertation that defines the whole SuperMemo lineage SM-0 → SM-5, situating SM-2 as the first computer algorithm using E-Factors. (b) It documents the 1985 experiments establishing the "optimum repetition spacing principle" and the evolution from paper tables to computed factors, supplying the why/how behind the exact mechanics. (c) As an unpublished thesis (only adapted web versions are public), some figures/forgetting-rate estimates were later corrected, and it predates the adaptivity fixes, so it records SM-2's rigidity as the motivation for subsequent versions.

### 4. What spaced repetition algorithm does Anki use? — Anki FAQs (2023+) — Score 10/10
(a) The authoritative description of how Anki actually implements an SM-2 *derivative*: graduated cards get an ease factor (default 2.5 = 250%), next interval = current interval × ease × interval modifier, with relearning lapses subtracting 20 percentage points of ease. (b) It explains Anki's deliberate deviations and why: configurable learning steps (vs fixed 1/6 days), four buttons instead of six grades, "fuzz" to decluster, and crediting late reviews — all to fix practical SM-2 pain points. (c) It explicitly names SM-2 weaknesses Anki patches: the 130% ease floor (because lower eases cause "ease hell"/over-frequent reviews) and the lack of credit for early/late answers, pointing to `rslib/src/scheduler/states` for the exact code.

### 5. Algorithm SM-5 — Woźniak (1989/2018) — Score 7/10
(a) Describes the successor that replaced SM-2's fixed EF-times-interval rule with a matrix of optimal factors (O-Factors) indexed by repetition number and difficulty. (b) It explains why this was needed: SM-2's multipliers were static and could not self-correct, whereas the OF matrix updates from user data and converges quickly, roughly doubling acquisition rate vs combined SM-2/SM-4. (c) It is direct evidence of SM-2's core weakness — non-adaptivity and reliance on preconceived constants — and Woźniak warns the first peer-reviewed write-up was "emasculated by peer review," foreshadowing source #6.

### 6. Optimization of repetition spacing in the practice of learning — Woźniak & Gorzelańczyk (1994) — Score 7/10
(a) The first peer-reviewed spaced-repetition algorithm paper, presenting a universal formula for inter-repetition intervals targeting 95% retention using an OF matrix and EF (1.3–2.8) plus the q≥3 pass / q<3 forget rule. (b) It provides the academic, citable rationale for why optimum intervals exist and how the E-Factor/grade procedure (essentially the SM-2/SM-5 family) yields them across subjects and learners. (c) Indexed in Europe PMC (PMID 8023714) with DOI; the authors note the heavy peer-review distortion, and the 95%-retention universal formula assumes homogeneity that does not adapt per individual — a known limitation.

### 7. SuperMemo Algorithm (history/timeline) — SuperMemo Help wiki — Score 6/10
(a) A concise timeline placing SM-2 (1987, E-Factor-based, per-difficulty spacing) within the SM-0→SM-18 progression. (b) It explains how/why each version improved: SM-4 made the interval function adaptable, SM-5 introduced optimal factors, SM-6 added forgetting-curve regression — clarifying what SM-2 lacked. (c) Useful for context and cross-linking primary SM-2 sources, but it is a secondary/encyclopedic overview rather than a mechanics specification, so it is less directly about the exact SM-2 formulas.

### 8. Account of research leading to the SuperMemo method (Algorithm SM-0) — Woźniak — Score 6/10
(a) Documents SM-0, the 1985 paper-and-pencil predecessor that repeated whole pages on a fixed interval table (1, 7, 16, 35 days, then doubling). (b) It gives the experimental origin story (the two 1985 experiments and the "optimum repetition spacing principle") that motivated SM-2's move to per-item E-Factors. (c) It openly states the post-fifth-repetition doubling was "based on intuition rather than on experiment," exposing the heuristic, non-personalized roots that SM-2 inherited and only partly addressed.

### 9. Two components of long-term memory — Woźniak, Gorzelańczyk & Murakowski (1995) — Score 5/10
(a) Proposes the stability/retrievability two-component memory model that retroactively explains why optimum spacing (and thus the SM-2 interval growth) works. (b) It supplies the theoretical "why" beneath the empirical SM-2 multipliers, linking spacing effects to independent memory variables. (c) Published in Acta Neurobiologiae Experimentalis (55:301–305); it is more theory than SM-2 mechanics and implicitly highlights SM-2's weakness — it never models retrievability, which modern FSRS/SM-17+ do.

## Cross-references for the swarm
- Primary SM-2 spec lives at sources #1/#2 (identical text, two hosts) — cite these for the exact formula.
- Source #4 is the definitive bridge "SM-2 → Anki" and lists Anki's concrete deviations (use for the "how Anki adopted it" question).
- Sources #5, #6, #9 carry the strongest explicit **weaknesses/limitations** material (non-adaptivity, no retention target, no retrievability modeling).
