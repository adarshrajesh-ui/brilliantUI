# ANKI ALGORITHM RESEARCH CORPUS

Consolidated output of 17 finder agents. Total ~150 sources across distinct angles.


==================================================
SOURCE FILE: finders/finder-01-sm2-origins.md
==================================================
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


==================================================
SOURCE FILE: finders/finder-02-fsrs-dsr.md
==================================================
# Finder 02 — FSRS / DSR Model

**Angle:** FSRS (Free Spaced Repetition Scheduler) and the DSR (Difficulty, Stability, Retrievability) memory model by Jarrett Ye / `open-spaced-repetition`. This file collects the primary papers, the canonical algorithm documentation, the optimization/training mechanics, and the benchmark evidence showing how/why FSRS improves on SM-2 — i.e. the actual mechanics of Anki's *modern* scheduler.

**Scoring key:** 1–10 = how directly the source explains the EXACT mechanics of Anki's modern algorithm (FSRS). 10 = canonical equations/training of the deployed algorithm; lower = supporting theory or context.

## Summary Table

| # | Title | Authors | Year | Venue | URL / DOI | Score |
|---|-------|---------|------|-------|-----------|-------|
| 1 | The Algorithm (FSRS wiki) | Jarrett Ye & open-spaced-repetition contributors | 2022–2026 | GitHub Wiki | https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm | 10 |
| 2 | The mechanism of optimization (FSRS wiki) | Jarrett Ye | 2022–2026 | GitHub Wiki | https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-mechanism-of-optimization | 10 |
| 3 | A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (SSP-MMC) | Junyao (Jarrett) Ye, Jingyong Su, Yilong Cao | 2022 | ACM SIGKDD (KDD '22), pp. 4381–4390 | https://doi.org/10.1145/3534678.3539081 | 9 |
| 4 | free-spaced-repetition-scheduler (FSRS reference algorithm repo) | open-spaced-repetition / Jarrett Ye | 2022–2026 | GitHub | https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler | 9 |
| 5 | ABC of FSRS (FSRS wiki) | Jarrett Ye | 2022–2026 | GitHub Wiki | https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS | 8 |
| 6 | SRS Benchmark (srs-benchmark) | open-spaced-repetition / Jarrett Ye, Expertium et al. | 2023–2026 | GitHub | https://github.com/open-spaced-repetition/srs-benchmark | 8 |
| 7 | Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory (SSP-MMC-Plus / DHP) | Jingyong Su, Junyao Ye, Liqiang Nie, Yilong Cao, Yongyong Chen | 2023 | IEEE TKDE 35(10) | https://doi.org/10.1109/TKDE.2023.3251721 | 8 |
| 8 | SSP-MMC-FSRS (optimal-retention scheduler on top of FSRS) | open-spaced-repetition | 2023–2026 | GitHub | https://github.com/open-spaced-repetition/SSP-MMC-FSRS | 7 |
| 9 | FSRS vs SM-17 / Benchmark of Spaced Repetition Algorithms (Expertium blog) | Expertium, Jarrett Ye et al. | 2023–2026 | GitHub + blog | https://github.com/open-spaced-repetition/fsrs-vs-sm17 · https://expertium.github.io/Benchmark.html | 7 |

## Notes & Relevance (3-sentence: what / why-how / weaknesses)

### 1. The Algorithm — FSRS wiki — Score 10
URL: https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm
(a) **What:** This is the canonical, version-by-version specification of the exact equations that run inside Anki — the DSR state (Difficulty 1–10, Stability in days, Retrievability via a power-law forgetting curve `R = (1 + FACTOR·t/S)^DECAY`), plus the stability-on-success, stability-on-failure (post-lapse), and difficulty-update formulas with their named trainable parameters (w0…w20). (b) **Why/how:** It documents how each rating (Again/Hard/Good/Easy) transitions the memory state and how the scheduler picks the next interval to hit a user-set desired retention, codifying memory laws (more complex material → smaller stability gain; higher stability → smaller gain = stabilization decay; lower retrievability → larger gain = the spacing/desirable-difficulty effect). (c) **Weaknesses:** It is engineering documentation rather than peer-reviewed research, mixes multiple FSRS versions (v1→FSRS-6) so the reader must track which formula is current, and assumes binary recall + same-day-collapsing simplifications that the wiki itself flags as approximations.

### 2. The mechanism of optimization — FSRS wiki — Score 10
URL: https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-mechanism-of-optimization
(a) **What:** Explains exactly how FSRS *fits* its parameters: the DSR model is implemented as a time-series (recurrent) model in PyTorch whose inputs are the rating-history and interval-history and whose outputs are Stability and Difficulty. (b) **Why/how:** It trains via Maximum Likelihood Estimation over observed recall outcomes with Backpropagation Through Time (BPTT), because raw logs only record ratings (not latent S/D), and then uses the stochastic shortest path idea to choose the optimal retention that minimizes total repetitions. (c) **Weaknesses:** It is a conceptual writeup (no formal convergence/identifiability proofs), relies on having enough per-user reviews before personalized parameters beat the pretrained defaults, and the MLE objective optimizes recall prediction rather than directly optimizing real-world study efficiency.

### 3. A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (SSP-MMC) — KDD 2022 — Score 9
DOI: https://doi.org/10.1145/3534678.3539081 · Code: https://github.com/maimemo/SSP-MMC
(a) **What:** The foundational peer-reviewed paper (Ye, Su, Cao; ACM SIGKDD 2022) that builds a Markov-property long-term memory model from 220 million MaiMemo review logs and frames optimal scheduling as a stochastic shortest path / MDP that minimizes review cost. (b) **Why/how:** It learns memory dynamics (the DHP/DSR-style stability & difficulty) directly from time-series data and computes the policy that pushes memory stability past a target with the fewest reviews, reporting a 12.6% improvement over prior state-of-the-art and deployment to millions of MaiMemo users. (c) **Weaknesses:** It targets MaiMemo's DHP formulation (half-life based) rather than the later FSRS parameterization shipped in Anki, was validated on vocabulary cards from one app (limited domain generality), and uses an explicit "remembered forever past a stability threshold" assumption that is a modeling simplification.

### 4. free-spaced-repetition-scheduler (reference repo) — Score 9
URL: https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler
(a) **What:** The canonical open-source reference implementation/spec of FSRS, stating plainly that "FSRS springs from MaiMemo's DHP model, which is a variant of the DSR model proposed by Piotr Woźniak," and enumerating the three memory variables and the memory laws used. (b) **Why/how:** It links theory to code — difficulty (intrinsic complexity), stability (storage strength / forgetting rate), retrievability (retrieval strength) — and codifies stabilization decay and the stabilization curve as the rules governing stability increases. (c) **Weaknesses:** As a library/spec it is terse on derivations, points elsewhere (the Algorithm wiki) for the actual formulas, and inherits the DSR model's untestable latent-variable assumptions.

### 5. ABC of FSRS — FSRS wiki — Score 8
URL: https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS
(a) **What:** The accessible overview defining FSRS, its origin (Jarrett Ye, MaiMemo), the Three-Component Model of Memory, and that FSRS-6 uses 21 parameters across the D/S/R equations. (b) **Why/how:** It explains that R changes daily while D and S change only on review, how default parameters were fit on hundreds of millions of reviews from ~10k users, and why even default FSRS beats SM-2. (c) **Weaknesses:** It is introductory (light on math), version-coupled (parameter counts shift between FSRS-5/6), and presents FSRS's superiority claims without the statistical caveats covered in the benchmark sources.

### 6. SRS Benchmark (srs-benchmark) — Score 8
URL: https://github.com/open-spaced-repetition/srs-benchmark
(a) **What:** The large-scale open benchmark (700M+ reviews, ~10k+ collections) ranking dozens of algorithms (FSRS v1→FSRS-7, SM-2, HLR, Ebisu, LSTM, RWKV, etc.) on predictive accuracy. (b) **Why/how:** It uses Log Loss, AUC, and a custom RMSE(bins) to measure how well each algorithm predicts probability of recall, quantifying FSRS's accuracy advantage over SM-2 and showing where heavyweight ML models (RWKV) can edge out hand-crafted FSRS. (c) **Weaknesses:** It measures *prediction* accuracy, not real-world retention/efficiency; SM-2 is disadvantaged because extra formulas are bolted on to make it output probabilities; and results reflect Anki-style review data that may not generalize to other domains.

### 7. Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory (SSP-MMC-Plus) — IEEE TKDE 2023 — Score 8
DOI: https://doi.org/10.1109/TKDE.2023.3251721 · Code: https://github.com/maimemo/SSP-MMC-Plus
(a) **What:** The extended, journal-grade version of the KDD work (Su, Ye, Nie, Cao, Chen) presenting a unified framework that alternates memory prediction and schedule optimization, formalizing the DHP memory model that underlies FSRS's DSR. (b) **Why/how:** It builds Markov memory models from time-series logs and solves the stochastic shortest path via value iteration, reporting 64% lower recall-prediction error and 17% lower cost vs baselines, and releases the first time-series spaced-repetition dataset (220M rows). (c) **Weaknesses:** Like its predecessor it is grounded in MaiMemo's half-life parameterization rather than the deployed FSRS-5/6 formulas, focuses on language vocabulary, and the value-iteration scheduler is heavier than the closed-form interval rule Anki actually ships.

### 8. SSP-MMC-FSRS — Score 7
URL: https://github.com/open-spaced-repetition/SSP-MMC-FSRS
(a) **What:** An extension that ports the SSP-MMC cost-minimization idea onto FSRS's memory-state transition functions to find optimal review intervals (and underpins FSRS's "find optimal retention" feature). (b) **Why/how:** Using FSRS's stability/difficulty transitions and the hypothesis that a card is effectively permanent once stability exceeds a threshold, it formulates scheduling as a stochastic shortest path / MDP and computes, for each (stability, difficulty) state, the next interval minimizing study minutes. (c) **Weaknesses:** It is a research/experimental repo (not the exact runtime in Anki), depends entirely on FSRS's parameters being well-fit, and the "remembered forever above a threshold" hypothesis is an idealization.

### 9. FSRS vs SM-17 + Benchmark of Spaced Repetition Algorithms (Expertium) — Score 7
URLs: https://github.com/open-spaced-repetition/fsrs-vs-sm17 · https://expertium.github.io/Benchmark.html
(a) **What:** A direct comparison of FSRS against SuperMemo's SM-16/SM-17 plus a detailed methodological blog explaining the benchmark metrics and FSRS's design rationale. (b) **Why/how:** Using SuperMemo's "Universal Metric" and Log Loss/AUC/RMSE, it shows FSRS-6 is more accurate than SM-17 for a large majority of collections, and the blog explains *why* (FSRS learns parameters from data; SM-2 and even SM-17 are partly heuristic). (c) **Weaknesses:** SuperMemo's true workflow differs from Anki so comparisons require approximations the authors openly caveat; the analysis is partly informal (blog, not peer-reviewed); and "superiority %" reflects prediction fit on held-out logs, not guaranteed better learning outcomes.

## Cross-cutting takeaways
- **Lineage:** SuperMemo's Three-Component (DSR) model → MaiMemo's DHP model (KDD'22 / TKDE'23, Ye et al.) → FSRS (FSRS v1 … FSRS-6), the algorithm now built into Anki as an alternative to SM-2.
- **Mechanics in one line:** each card holds Difficulty, Stability, Retrievability; R decays on a power-law forgetting curve; ratings update S (via stabilization decay + stabilization curve) and D (with mean reversion that avoids SM-2's "ease hell"); ~17–21 parameters are fit per-user via MLE + BPTT; intervals are chosen to hit a target retention, optionally optimized for minimum cost via SSP-MMC.
- **Why it beats SM-2:** SM-2 has one heuristic ease factor and no explicit recall-probability model; FSRS explicitly models forgetting and is trained on data, yielding lower Log Loss/RMSE for ~99% of collections in the benchmark.
- **Shared weaknesses:** binary recall assumption, reliance on enough review history for personalization, prediction-accuracy ≠ proven real-world efficiency, and validation skewed toward language/vocabulary-style cards.


==================================================
SOURCE FILE: finders/finder-03-forgetting-curve.md
==================================================
# Finder 03 — Forgetting Curve Foundations

**Agent:** Finder 03 of 17 (research swarm)
**Angle:** The forgetting-curve foundations — Ebbinghaus's original work and the modern replications / quantifications of memory decay that explain *why* spaced-repetition scheduling (Anki's SM-2 / FSRS) works at all.
**Collective goal:** Find papers explaining EXACTLY what Anki's algorithm does, WHY/HOW, and its WEAKNESSES.

## Why this angle matters for Anki

Anki's schedulers (SM-2 and FSRS) are, at heart, attempts to *predict the forgetting curve* for each individual card and then schedule the next review at the moment recall probability drops to a target retention threshold. Every assumption baked into those algorithms — that memory decays as a smooth, negatively-accelerated function of time; that each successful review flattens (lengthens) the curve; that an optimal review gap exists; that retrievability can be modeled with one or two parameters — descends directly from the empirical forgetting-curve literature below. The weaknesses of Anki's algorithms are largely the weaknesses of these underlying models (wrong functional form, averaging artifacts, ignoring item-level variance, asymptotic "permastore" effects, etc.).

---

## Sources

### 1. Memory: A Contribution to Experimental Psychology
- **Authors:** Hermann Ebbinghaus (trans. Henry A. Ruger & Clara E. Bussenius)
- **Year:** 1885 (German, *Über das Gedächtnis*) / 1913 (English translation, Teachers College, Columbia University)
- **Venue:** Monograph; English edition Teachers College, Columbia University (Dover reprint 1964)
- **URL:** https://archive.org/details/memorycontributi00ebbiuoft (full text) · Online Books Page: https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp16360
- **Relevance:** *What* — This is the founding experiment: Ebbinghaus learned and relearned lists of nonsense syllables on himself and used the "method of savings" (time saved on relearning) to quantify retention over delays from 20 min to 31 days, producing the original forgetting curve. *Why/how it relates to scheduling* — He was the first to fit an equation to forgetting data and to demonstrate that repeated relearning ("repetitions") slows the decay, the empirical seed of every spaced-repetition algorithm including Anki's notion that each review lengthens the next interval. *Weakness* — N=1 (himself), artificial nonsense-syllable material, and he fit two different functions (power in 1880, logarithmic in 1885) while explicitly downplaying the equation's theoretical meaning, so the *form* of the curve Anki must model was left unresolved from the start.
- **Relevance score (theoretical basis of Anki's algorithm): 9/10**

### 2. Replication and Analysis of Ebbinghaus' Forgetting Curve
- **Authors:** Jaap M. J. Murre & Joeri Dros
- **Year:** 2015
- **Venue:** PLOS ONE, 10(7): e0120644
- **URL/DOI:** https://doi.org/10.1371/journal.pone.0120644 · PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC4492928/ (data: osf.io/6kfrp)
- **Relevance:** *What* — A careful modern replication (one subject, 70 hours of learning/relearning, intervals 20 min → 31 days) confirming Ebbinghaus's savings curve in a non-German language for the first time. *Why/how it relates to scheduling* — It validates that the forgetting curve is a real, reproducible phenomenon and compares candidate equations (power, logarithmic, exponential, and a new model), directly informing which decay function a scheduler should assume. *Weakness* — It finds the curve is *not* perfectly smooth (an upward "jump" beginning at the 24-hour point, plausibly a sleep/consolidation effect), which schedulers like SM-2 ignore by assuming clean monotonic decay; it is also still effectively N=1.
- **Relevance score: 10/10**

### 3. One Hundred Years of Forgetting: A Quantitative Description of Retention
- **Authors:** David C. Rubin & Amy E. Wenzel
- **Year:** 1996
- **Venue:** Psychological Review, 103(4), 734–760
- **URL/DOI:** https://doi.org/10.1037/0033-295X.103.4.734 · PDF: https://cenl.ucsd.edu/Jclub/Rubin_Wenzel_1996.pdf
- **Relevance:** *What* — A meta-analysis fitting 210 published retention data sets against 105 two-parameter mathematical functions to find which best describes forgetting. *Why/how it relates to scheduling* — It establishes that only four functions (logarithmic, power, exponential-in-√t, hyperbola-in-√t) reliably fit human forgetting, constraining the math any retention-prediction engine (SM-2's heuristics, FSRS's power-function memory model) should use. *Weakness* — The data could not distinguish among the four best functions, meaning the exact decay law underlying Anki's interval math is empirically underdetermined; autobiographical memory was a notable exception that fits none of them.
- **Relevance score: 9/10**

### 4. On the Form of Forgetting
- **Authors:** John T. Wixted & Ebbe B. Ebbesen
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 409–415
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00175.x
- **Relevance:** *What* — Across three experiments (word recall, face recognition, pigeon delayed-matching) the authors show forgetting is best fit by a simple power function of time, beating exponential, hyperbolic, logarithmic, and linear alternatives, and they re-derive a power fit even for Ebbinghaus's savings data. *Why/how it relates to scheduling* — The power-law claim is the explicit modeling backbone of modern schedulers (FSRS uses a power forgetting curve for retrievability), justifying why intervals can expand multiplicatively. *Weakness* — The power-law result was derived from data *averaged across subjects/items*, which (see #8/#9) can manufacture a spurious power law even when individuals forget exponentially — a foundational caveat for any algorithm that schedules a single card from population-derived curves.
- **Relevance score: 9/10**

### 5. The Form of the Forgetting Curve and the Fate of Memories
- **Authors:** Lee Averell & Andrew Heathcote
- **Year:** 2011
- **Venue:** Journal of Mathematical Psychology, 55(1), 25–35
- **URL/DOI:** https://doi.org/10.1016/j.jmp.2010.08.009 · PDF: https://www.ampl-psych.com/wp-content/uploads/2021/05/Averell-and-Heathcote-2011-The-form-of-the-forgetting-curve-and-the-fate-of-m.pdf
- **Relevance:** *What* — Using a longitudinal design (1 min → 28 days), hierarchical models to avoid averaging artifacts, and Bayesian model selection, they separate the "function" question (power vs. exponential vs. Pareto) from the "fate" question (does retention decay to zero?). *Why/how it relates to scheduling* — They find strong evidence for an **above-chance asymptote** — some memories become effectively permanent after brief study — which is exactly the long-term "stability"/permastore behavior a good scheduler should exploit by pushing intervals toward effectively infinite. *Weakness* — Individual data actually fit *exponential* best while model selection favored power, exposing that the curve form Anki relies on is sensitive to analysis method and individual variation, not a settled constant.
- **Relevance score: 8/10**

### 6. Spacing Effects in Learning: A Temporal Ridgeline of Optimal Retention
- **Authors:** Nicholas J. Cepeda, Edward Vul, Doug Rohrer, John T. Wixted & Harold Pashler
- **Year:** 2008
- **Venue:** Psychological Science, 19(11), 1095–1102
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.2008.02209.x · PDF: https://www.yorku.ca/ncepeda/publications/CVRWP2008.pdf
- **Relevance:** *What* — Over 1,350 participants learned facts, reviewed after a gap of up to 3.5 months, and were tested after delays up to 1 year, mapping how the inter-study gap interacts with the retention interval. *Why/how it relates to scheduling* — It demonstrates an *optimal* review gap for any target retention horizon (≈20–40% of delay for short horizons, dropping to ≈5–10% for a 1-year horizon) — the empirical justification for expanding-interval schedules and for FSRS's idea of scheduling at a chosen desired-retention level. *Weakness* — It shows the optimal gap is **not** a fixed multiplier of the previous interval (SM-2's core assumption), since the optimal gap-to-delay ratio shrinks as the horizon grows, implying SM-2's constant ease-factor expansion is systematically suboptimal.
- **Relevance score: 8/10**

### 7. Semantic Memory Content in Permastore: Fifty Years of Memory for Spanish Learned in School
- **Authors:** Harry P. Bahrick
- **Year:** 1984
- **Venue:** Journal of Experimental Psychology: General, 113(1), 1–29
- **URL/DOI:** https://doi.org/10.1037/0096-3445.113.1.1 · PubMed: https://pubmed.ncbi.nlm.nih.gov/6242406/
- **Relevance:** *What* — Tested retention of school Spanish in 733 people over 50 years, finding an exponential decline for the first 3–6 years followed by a long, stable "permastore" plateau lasting up to 30 years, largely independent of rehearsal. *Why/how it relates to scheduling* — It is the empirical basis for the idea that sufficiently well-learned/over-learned items reach near-permanent stability — the long-tail behavior schedulers aim to reach so reviews can stop, and a real-world counterpart to FSRS's high-stability states. *Weakness* — The discontinuous "permastore" transition (no items with 6–25-year lifespans) is not captured by the smooth single-curve models Anki uses, suggesting algorithms may misestimate very-long intervals where memory either vanishes early or becomes permanent.
- **Relevance score: 7/10**

### 8. Power Laws from Individual Differences in Learning and Forgetting: Mathematical Analyses
- **Authors:** Jaap M. J. Murre & Antonio G. Chessa
- **Year:** 2011
- **Venue:** Psychonomic Bulletin & Review, 18(3), 592–597
- **URL/DOI:** https://doi.org/10.3758/s13423-011-0076-y
- **Relevance:** *What* — A mathematical proof that averaging *exponential* individual forgetting curves over a population whose decay rates follow a gamma/uniform/half-normal distribution produces an aggregate curve that looks like a *power* function. *Why/how it relates to scheduling* — It directly challenges the "memory decays as a power law" premise that schedulers inherit from averaged data (#3, #4): the population-level curve a scheduler is tuned on may not describe any individual card's true (exponential) decay. *Weakness* — Implication for Anki: a one-size-fits-all curve fit to aggregate data can systematically mis-time reviews for individual users/cards — the motivation for FSRS's per-card parameterization and for skepticism toward population-derived constants.
- **Relevance score: 8/10**

### 9. How Averaging Individual Curves Transforms Their Shape: Mathematical Analyses with Application to Learning and Forgetting Curves
- **Authors:** Jaap M. J. Murre & Antonio G. Chessa
- **Year:** 2023
- **Venue:** Journal of Mathematical Psychology, 116, 102816
- **URL/DOI:** https://doi.org/10.1016/j.jmp.2023.102816
- **Relevance:** *What* — Extends the 2011 result, proving more generally how averaging transforms curve shape (exponential→power, power→log-power, log→log) and discussing remedies, while revisiting Ebbinghaus's own 1880/1885 differential-equation derivation of the forgetting law. *Why/how it relates to scheduling* — It clarifies *which* functional form a scheduler should fit at the individual vs. group level — essential for correctly estimating per-card retrievability/stability rather than fitting an artifact. *Weakness* — Reinforces that the canonical forgetting-curve shape used to justify interval growth is partly a statistical artifact of aggregation, so naive curve-fitting (as in SM-2's fixed heuristics) rests on shaky theoretical ground.
- **Relevance score: 8/10**

---

## Synthesis for the swarm

The forgetting curve is the *raison d'être* of spaced repetition: memory decays in a negatively-accelerated way over time (Ebbinghaus 1885; replicated by Murre & Dros 2015), and well-timed reviews reset/flatten that decay (Cepeda et al. 2008). Anki's SM-2 encodes this crudely with a fixed ease-factor multiplier; FSRS encodes it more faithfully with an explicit power forgetting curve and per-card stability/retrievability. The strongest *theoretical critiques* of Anki's foundations also come from this literature: (a) the true functional form (power vs. exponential vs. log) is empirically underdetermined (Rubin & Wenzel 1996; Averell & Heathcote 2011); (b) the population "power law" may be an averaging artifact masking individual exponential decay (Murre & Chessa 2011, 2023), undermining one-size-fits-all schedules; (c) optimal gaps are not a constant multiplier of the prior interval (Cepeda et al. 2008), so SM-2's constant expansion is suboptimal; and (d) real memory has discontinuous permastore plateaus (Bahrick 1984) that smooth single-curve models miss.

---

## RETURN — Top 3 (title | URL | score)

1. Murre & Dros 2015, Replication and Analysis of Ebbinghaus' Forgetting Curve | https://doi.org/10.1371/journal.pone.0120644 | 10/10
2. Rubin & Wenzel 1996, One Hundred Years of Forgetting | https://doi.org/10.1037/0033-295X.103.4.734 | 9/10
3. Ebbinghaus 1885/1913, Memory: A Contribution to Experimental Psychology | https://archive.org/details/memorycontributi00ebbiuoft | 9/10


==================================================
SOURCE FILE: finders/finder-04-spacing-effect.md
==================================================
# Finder 04 — Spacing Effect

**Angle:** The spacing effect & distributed practice in cognitive psychology — the empirical phenomenon that Anki's SM-2 / FSRS schedulers exploit, including the optimal-spacing and expanding- vs. equal-interval retrieval literature.

**Core claim this evidence base supports:** Anki's defining behavior — repeatedly presenting a card at *growing* time gaps rather than massing reviews — is justified by a century of memory research showing that (a) distributed practice beats massed practice for durable retention, and (b) the *best* gap is not fixed but scales with how long you want to remember. The weaknesses below show where the simple "always expand the interval" heuristic that SM-2 hard-codes diverges from what the data actually say.

---

## Sources

### 1. Cepeda, Pashler, Vul, Wixted & Rohrer (2006) — Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis
- **Authors:** Nicholas J. Cepeda, Harold Pashler, Edward Vul, John T. Wixted, Doug Rohrer
- **Year:** 2006
- **Venue:** *Psychological Bulletin*, 132(3), 354–380
- **DOI / URL:** https://doi.org/10.1037/0033-2909.132.3.354 (open PDF: https://www.yorku.ca/ncepeda/publications/CPVWR2006.pdf)
- **Relevance (what / why-how / weakness):** WHAT — A meta-analysis of 839 assessments across 317 experiments establishing the distributed-practice effect as one of the largest, most robust findings in memory research, and the canonical empirical foundation for any spaced-repetition tool. WHY/HOW — It shows the effect of spacing is not a simple constant: inter-study interval (ISI) and retention interval interact, such that the ISI producing maximal retention *increases* as the desired retention interval increases — exactly the "expand the gap over time" behavior Anki implements. WEAKNESS re scheduling — It demonstrates that short/massed gaps are actively harmful for long-term goals and that no single multiplier is optimal across retention horizons, exposing the limitation of SM-2's one-size-fits-all ease-factor expansion that ignores the learner's target retention window.
- **Relevance score: 10/10**

### 2. Cepeda, Vul, Rohrer, Wixted & Pashler (2008) — Spacing Effects in Learning: A Temporal Ridgeline of Optimal Retention
- **Authors:** Nicholas J. Cepeda, Edward Vul, Doug Rohrer, John T. Wixted, Harold Pashler
- **Year:** 2008
- **Venue:** *Psychological Science*, 19(11), 1095–1102
- **DOI / URL:** https://doi.org/10.1111/j.1467-9280.2008.02209.x (open PDF: https://www.yorku.ca/ncepeda/publications/CVRWP2008.pdf)
- **Relevance (what / why-how / weakness):** WHAT — A large (>1,350 participant) study mapping a 3-D performance surface of study-gap × test-delay over durations up to a year, producing the famous "temporal ridgeline" of the single optimal gap for each retention interval. WHY/HOW — It quantifies the rule a scheduler should follow: the optimal absolute gap grows as the test delay grows, while the optimal gap *as a proportion* of the retention interval shrinks from ~20–40% (1-week goal) to ~5–10% (1-year goal), explaining why review intervals should lengthen but at a decelerating ratio. WEAKNESS re scheduling — It shows "many educational practices are highly inefficient" and that overly short OR overly long gaps both cost retention; SM-2's fixed geometric growth cannot track this ridgeline, motivating FSRS's retention-target-driven scheduling.
- **Relevance score: 10/10**

### 3. Cepeda, Coburn, Rohrer, Wixted, Mozer & Pashler (2009) — Optimizing Distributed Practice: Theoretical Analysis and Practical Implications
- **Authors:** Nicholas J. Cepeda, Noriko Coburn, Doug Rohrer, John T. Wixted, Michael C. Mozer, Harold Pashler
- **Year:** 2009
- **Venue:** *Experimental Psychology*, 56(4), 236–246
- **DOI / URL:** https://doi.org/10.1027/1618-3169.56.4.236 (open PDF: https://escholarship.org/content/qt1n15d7xr/qt1n15d7xr.pdf)
- **Relevance (what / why-how / weakness):** WHAT — Two multi-session lab studies (foreign vocabulary, facts, object names) with test delays up to 6 months showing an optimal gap can improve final recall by up to 150%. WHY/HOW — It confirms the spacing benefit is *nonmonotonic*: accuracy rises sharply then gradually declines as the gap grows, and the optimal gap exceeds one day only when the test delay is long — directly validating cumulative, lengthening reviews of the kind Anki schedules. WEAKNESS re scheduling — The sharp-rise/slow-decline asymmetry means under-spacing is far more costly than mild over-spacing, a nuance SM-2 cannot represent; it also shows optimal gaps depend on item type and delay, which a single ease factor ignores.
- **Relevance score: 9/10**

### 4. Landauer & Bjork (1978) — Optimum Rehearsal Patterns and Name Learning
- **Authors:** Thomas K. Landauer, Robert A. Bjork
- **Year:** 1978
- **Venue:** In Gruneberg, Morris & Sykes (Eds.), *Practical Aspects of Memory* (pp. 625–632), Academic Press
- **DOI / URL:** https://gwern.net/doc/psychology/spaced-repetition/1978-landauer.pdf (citation record: https://link.springer.com/article/10.3758/s13423-014-0636-z)
- **Relevance (what / why-how / weakness):** WHAT — The seminal demonstration of *expanding retrieval practice*: for test-type rehearsal (a fact presented once, then re-tested), a pattern of increasing intervals between successive tests beat uniform spacing. WHY/HOW — It supplies the original mechanistic rationale Anki embodies — a near-immediate first test succeeds and strengthens the item enough to survive a slightly longer gap, whose later (harder) retrieval is a more potent learning event, justifying the expanding interval ladder. WEAKNESS re scheduling — Its expanding advantage was strongest at short total durations and for test-type (not repeated-presentation) practice, foreshadowing that the "always expand" rule SM-2 generalizes does not hold universally across timescales (see #5).
- **Relevance score: 9/10**

### 5. Karpicke & Roediger (2007) — Expanding Retrieval Practice Promotes Short-Term Retention, but Equally Spaced Retrieval Enhances Long-Term Retention
- **Authors:** Jeffrey D. Karpicke, Henry L. Roediger III
- **Year:** 2007
- **Venue:** *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 33(4), 704–719
- **DOI / URL:** https://doi.org/10.1037/0278-7393.33.4.704 (open PDF: https://learninglab.psych.purdue.edu/downloads/2007/2007_Karpicke_Roediger_JEPLMC.pdf)
- **Relevance (what / why-how / weakness):** WHAT — A direct test of expanding vs. equal-interval retrieval finding expanding wins at ~10 minutes but *equal* spacing wins after 2 days. WHY/HOW — It reframes the driver of long-term gains as the *difficulty of the first retrieval*: delaying (and thus making harder) the initial test, not the expansion of later gaps per se, is what builds durable memory — a crucial correction to the naive expanding-ladder logic. WEAKNESS re scheduling — It is the strongest evidence *against* assuming expanding intervals are inherently optimal, exposing a theoretical hole in SM-2's expand-on-success design and arguing for schedulers that target a desired retrieval difficulty (low success probability) rather than blindly multiplying intervals.
- **Relevance score: 9/10**

### 6. Bjork & Bjork (1992) — A New Theory of Disuse and an Old Theory of Stimulus Fluctuation
- **Authors:** Robert A. Bjork, Elizabeth L. Bjork
- **Year:** 1992
- **Venue:** In Healy, Kosslyn & Shiffrin (Eds.), *From Learning Processes to Cognitive Processes: Essays in Honor of William K. Estes* (Vol. 2, pp. 35–67), Erlbaum
- **DOI / URL:** https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/07/RBjork_EBjork_1992.pdf (modern restatement: Bjork & Bjork 2020, https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2021/01/RABjorkELBjorkJARMAC2020ForPostingSingleSpaced.pdf)
- **Relevance (what / why-how / weakness):** WHAT — The "New Theory of Disuse" distinguishing *storage strength* (durable, ever-growing) from *retrieval strength* (volatile, current accessibility), the theoretical backbone of "desirable difficulties." WHY/HOW — It explains *why* spacing works: gains in storage strength are largest when retrieval strength is *low*, so letting a card partly fade before review (an expanding interval) maximizes durable learning — the precise mechanism Anki exploits by reviewing near the edge of forgetting. WEAKNESS re scheduling — Because storage gains require *low* retrieval strength, scheduling reviews too early (high desired retention / short intervals, as SM-2 often does for mature cards) wastes effort; the theory implies an optimal "forgetting allowance" that simple ease-factor scheduling does not explicitly target.
- **Relevance score: 8/10**

### 7. Pavlik & Anderson (2008) — Using a Model to Compute the Optimal Schedule of Practice
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** *Journal of Experimental Psychology: Applied*, 14(2), 101–117
- **DOI / URL:** https://doi.org/10.1037/1076-898X.14.2.101 (open PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf)
- **Relevance (what / why-how / weakness):** WHAT — An ACT-R-based computational model that turns the spacing effect into an explicit optimization, scheduling each item at the gap where long-term gain per unit study time is maximized. WHY/HOW — It is the conceptual bridge from psychology to algorithm: by balancing spacing (helps long-term recall) against recency/frequency and the time cost of failures, it derives that optimal intervals should *grow as repetitions accumulate and the item stabilizes* — formalizing the lengthening-interval idea that SM-2 approximates with heuristics and that FSRS pursues with fitted memory models. WEAKNESS re scheduling — It shows that doing this *well* requires per-item parameters and a fitted forgetting model, highlighting that SM-2's fixed formulas leave large efficiency gains (large effect sizes for optimized schedules) on the table.
- **Relevance score: 9/10**

### 8. Bahrick, Bahrick, Bahrick & Bahrick (1993) — Maintenance of Foreign Language Vocabulary and the Spacing Effect
- **Authors:** Harry P. Bahrick, Lorraine E. Bahrick, Audrey S. Bahrick, Phyllis E. Bahrick
- **Year:** 1993
- **Venue:** *Psychological Science*, 4(5), 316–321
- **DOI / URL:** https://doi.org/10.1111/j.1467-9280.1993.tb00571.x (record: https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.1993.tb00571.x/)
- **Relevance (what / why-how / weakness):** WHAT — A rare 9-year longitudinal study of relearning 300 word pairs at 14-, 28-, or 56-day intersession intervals, with retention tested 1–5 years later. WHY/HOW — It provides real-world, long-horizon proof that *wider* spacing yields dramatically better durable retention — 13 sessions at 56 days matched 26 sessions at 14 days — validating Anki's premise that long, expanding gaps are worth the slower initial acquisition. WEAKNESS re scheduling — The result that longer gaps slow acquisition but pay off only over years implies the "right" interval depends on the learner's true retention horizon (often unknown to the app), a parameter SM-2 never asks for and FSRS only approximates via a desired-retention setting.
- **Relevance score: 8/10**

### 9. Roediger & Karpicke (2006) — Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention
- **Authors:** Henry L. Roediger III, Jeffrey D. Karpicke
- **Year:** 2006
- **Venue:** *Psychological Science*, 17(3), 249–255
- **DOI / URL:** https://doi.org/10.1111/j.1467-9280.2006.01693.x (related/open: https://pubmed.ncbi.nlm.nih.gov/16507066/)
- **Relevance (what / why-how / weakness):** WHAT — The flagship demonstration of the *testing (retrieval-practice) effect*: repeated retrieval produces far better long-term retention than repeated restudy, even though restudy feels more effective in the short term. WHY/HOW — It justifies the *active-recall* half of Anki's design (cards are tested, not reread) that interacts with spacing: each spaced review is a retrieval event, and the combination of retrieval + spacing is what drives durable memory. WEAKNESS re scheduling — It shows learners' metacognition is miscalibrated (massed restudy feels best but isn't), implying schedulers should not rely on subjective ease judgments alone — yet SM-2's interval growth is driven almost entirely by the learner's self-rated grade, a known noise source FSRS tries to de-emphasize.
- **Relevance score: 7/10**

---

## Synthesis for the swarm

The spacing effect (distributed practice) is the empirical phenomenon Anki monetizes: across lab, longitudinal, and computational evidence, **memory is most durably strengthened when reviews occur at lengthening gaps timed near the edge of forgetting**, and the optimal gap *scales with the desired retention interval* (Cepeda 2006/2008/2009). The mechanism is captured by Bjork & Bjork's storage-vs-retrieval-strength distinction (gains are largest when retrieval strength is low) and operationalized by Pavlik & Anderson's optimization model. The key tension for SM-2/FSRS: the literature says the *expanding* schedule is good but **not because expansion itself is magic** — Karpicke & Roediger (2007) show the real driver is making each retrieval suitably *difficult* (a target success probability), and the optimal gap is a *ridgeline*, not a fixed multiplier. SM-2's grade-driven geometric expansion is a crude approximation of this ridgeline; FSRS's explicit desired-retention + fitted forgetting curve is the literature-aligned correction.


==================================================
SOURCE FILE: finders/finder-05-retrieval-practice.md
==================================================
# Finder 05 — Retrieval Practice

**Swarm angle:** The testing effect / retrieval practice — why *active recall* (the engine of every flashcard) physically strengthens memory, and how that benefit compounds with *spacing*. This is the "WHY Anki works" half of the story; the spacing/SM-2/FSRS scheduling literature is the "WHEN" half that sister finders cover.

**Why this matters for Anki/SM-2/FSRS:** Anki is fundamentally a *retrieval* machine. Every card forces you to generate an answer from memory *before* flipping it — that act of effortful, successful recall is what the testing-effect literature shows to be a learning event, not merely an assessment. SM-2 and FSRS only schedule *when* the retrieval happens; the retrieval itself is the causal mechanism. The sources below establish (a) that testing beats restudy for durable retention, (b) the size/robustness of the effect, (c) the mechanisms (effortful retrieval, "desirable difficulty," consolidation), and (d) the key interaction: retrieval is most powerful when *spaced and effortful but still successful* — which is precisely the regime a good scheduler tries to keep cards in (the ~80–90% target retention idea). Weaknesses for flashcard design are noted per source.

---

## Sources

### 1. Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention
- **Authors:** Henry L. Roediger III; Jeffrey D. Karpicke
- **Year:** 2006
- **Venue:** *Psychological Science*, 17(3), 249–255
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.2006.01693.x
- **Relevance (what / why-how / weakness):** *What:* The foundational modern demonstration of the testing effect with educationally realistic prose — students who repeatedly tested recalled ~61% after a week vs ~40% for repeated rereading. *Why-how:* Crucially, repeated *studying* won at a 5-minute delay but lost badly at 2-day and 1-week delays, proving the test produces *durable* learning, not just short-term fluency — exactly the long-delay regime Anki operates in, and why "rereading feels better but recall sticks better." *Weakness re scheduling:* It also shows the metacognitive trap baked into flashcard use — restudy *raised confidence* while lowering retention, so learners (and naive schedulers) can be fooled by short-term performance; the study used free recall of passages, not Q→A cards, so transfer to atomized flashcards is by extension.
- **Relevance score (WHY Anki works): 10/10**

### 2. The Critical Importance of Retrieval for Learning
- **Authors:** Jeffrey D. Karpicke; Henry L. Roediger III
- **Year:** 2008
- **Venue:** *Science*, 319(5865), 966–968
- **URL/DOI:** https://doi.org/10.1126/science.1152408
- **Relevance (what / why-how / weakness):** *What:* Foreign-language vocab pairs (the canonical flashcard task) learned to one correct recall, then items were either repeatedly studied or repeatedly tested; repeated testing produced large gains (up to >150% better one-week retention) while repeated study after the first success did essentially *nothing*. *Why-how:* This directly justifies Anki's core design decision — once you can recall a card, *re-reading it is wasted effort; re-testing it is the whole point* — i.e., retrieval, not re-exposure, is the active ingredient the scheduler should keep delivering. *Weakness re scheduling:* Students' predictions of their own performance were uncorrelated with reality, showing humans cannot self-schedule reliably — motivating algorithmic scheduling, but also implying users may resist or "leech-mismanage" hard cards because the effort feels unproductive.
- **Relevance score (WHY Anki works): 10/10**

### 3. Rethinking the Use of Tests: A Meta-Analysis of Practice Testing
- **Authors:** Olusola O. Adesope; Dominic A. Trevisan; Narayankripa Sundararajan
- **Year:** 2017
- **Venue:** *Review of Educational Research*, 87(3), 659–701
- **URL/DOI:** https://doi.org/10.3102/0034654316689306
- **Relevance (what / why-how / weakness):** *What:* Large meta-analysis (118 articles, 272 effect sizes, ~15,427 participants) finding practice testing beats restudy (g ≈ 0.51) and beats filler/no-activity controls (g ≈ 0.93). *Why-how:* Establishes the *generality and robustness* of the testing effect across formats and populations — the empirical warrant that Anki's recall-based method isn't a niche lab curiosity, and notably found *production* formats (recall/short-answer, like Anki cards) and *feedback* (Anki's answer flip) moderate the effect upward. *Weakness re scheduling:* Effects are moderated by format and retention interval, so a poorly designed card (recognition-style, ambiguous cue) captures far less benefit — card *quality* gates the algorithm's payoff, something neither SM-2 nor FSRS can fix.
- **Relevance score (WHY Anki works): 9/10**

### 4. The Critical Role of Retrieval Practice in Long-Term Retention
- **Authors:** Henry L. Roediger III; Andrew C. Butler
- **Year:** 2011
- **Venue:** *Trends in Cognitive Sciences*, 15(1), 20–27
- **URL/DOI:** https://doi.org/10.1016/j.tics.2010.09.003
- **Relevance (what / why-how / weakness):** *What:* Authoritative review synthesizing the conditions under which retrieval practice works best and the mechanisms behind it. *Why-how:* Names the two levers Anki actually pulls — retrieval works even *without* feedback but feedback enhances it (Anki always shows the answer), and retrieval promotes *transferable, flexibly retrievable* knowledge, addressing the "Anki only teaches rote facts" critique. *Weakness re scheduling:* Emphasizes that benefits depend on retrieval *succeeding* — failed retrievals without feedback can entrench errors, and the review's transfer claims are stronger for richly encoded material than for isolated cue-target pairs, a real limit for minimalist flashcards.
- **Relevance score (WHY Anki works): 9/10**

### 5. Retrieval Practice Produces More Learning than Elaborative Studying with Concept Mapping
- **Authors:** Jeffrey D. Karpicke; Janell R. Blunt
- **Year:** 2011
- **Venue:** *Science*, 331(6018), 772–775
- **URL/DOI:** https://doi.org/10.1126/science.1199327
- **Relevance (what / why-how / weakness):** *What:* Retrieval practice beat elaborative concept mapping (a "deep," active study technique) on *both* verbatim and inference questions, even when the final test was itself concept-map creation. *Why-how:* Refutes the strongest objection to flashcards — that recall is shallow — by showing the *act of retrieval itself* drives meaningful, inference-supporting learning more than elaborative encoding, supporting Anki's bet on recall over re-organizing notes. *Weakness re scheduling:* The retrieval condition here used a single delayed free-recall episode rather than spaced multi-trial scheduling, and results are for coherent science texts; how much inference-level benefit survives when content is shredded into thousands of tiny independent cards is untested.
- **Relevance score (WHY Anki works): 8/10**

### 6. The Effect of Testing Versus Restudy on Retention: A Meta-Analytic Review of the Testing Effect
- **Authors:** Christopher A. Rowland
- **Year:** 2014
- **Venue:** *Psychological Bulletin*, 140(6), 1432–1463
- **URL/DOI:** https://doi.org/10.1037/a0037559
- **Relevance (what / why-how / weakness):** *What:* Meta-analysis (61 studies) confirming testing > restudy and probing *why*. *Why-how:* Finds the strongest mechanistic support for *effortful processing* — recall tests beat recognition tests, and harder-but-successful retrieval yields bigger gains; this is the theoretical bridge to spacing, because spacing is what *creates* retrieval difficulty in Anki. *Weakness re scheduling:* Support for the popular "semantic elaboration" account was weak (Rowland points to episodic/context mechanisms and the bifurcation model), meaning the field still lacks a unified theory — so FSRS's success is empirical curve-fitting, not derived from a settled mechanism of *why* a given interval is optimal.
- **Relevance score (WHY Anki works): 8/10**

### 7. Testing the Retrieval Effort Hypothesis: Does Greater Difficulty Correctly Recalling Information Lead to Higher Levels of Memory?
- **Authors:** Mary A. Pyc; Katherine A. Rawson
- **Year:** 2009
- **Venue:** *Journal of Memory and Language*, 60(4), 437–447
- **URL/DOI:** https://doi.org/10.1016/j.jml.2009.01.004 — (full text: https://www.sciencedirect.com/science/article/abs/pii/S0749596X09000138)
- **Relevance (what / why-how / weakness):** *What:* Directly tests the *retrieval effort hypothesis* — that difficult-but-successful retrievals beat easy ones — by varying inter-stimulus interval and recall criterion. *Why-how:* This is the single best mechanistic justification for *why spacing amplifies retrieval*: longer intervals make each recall harder, and harder successful recalls produced better final memory — i.e., Anki's expanding intervals aren't just convenient, the difficulty *is* the benefit (the rationale behind FSRS targeting a sub-100% retention rate rather than reviewing too early). *Weakness re scheduling:* The benefit holds only for *successful* retrievals — push the interval too far and recall fails, capturing little; defining the sweet spot of "hard but still recallable" is exactly the unsolved optimization SM-2 approximates crudely and FSRS approximates better.
- **Relevance score (WHY Anki works): 9/10**

### 8. Spaced Retrieval: Absolute Spacing Enhances Learning Regardless of Relative Spacing
- **Authors:** Jeffrey D. Karpicke; Althea Bauernschmidt
- **Year:** 2011
- **Venue:** *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 37(5), 1250–1257
- **URL/DOI:** https://doi.org/10.1037/a0023436
- **Relevance (what / why-how / weakness):** *What:* Crosses retrieval practice with spacing schedules — massed vs spaced, and expanding vs equal vs contracting intervals. *Why-how:* The clearest evidence on the retrieval×spacing interaction Anki depends on: long *absolute* spacing of repeated retrievals gave a ~200% retention gain over massed retrieval, so the combination — not retrieval alone — is what produces Anki-scale results. *Weakness re scheduling:* Strikingly, the *relative* schedule (expanding vs equal vs contracting) made *no* difference, despite expanding schedules being the intuitive basis of SM-2's growing intervals — implying Anki's signature expanding-interval design may be over-engineered, and that simply spacing reviews far apart matters more than the exact growth curve.
- **Relevance score (WHY Anki works): 9/10**

### 9. Making Things Hard on Yourself, But in a Good Way: Creating Desirable Difficulties to Enhance Learning
- **Authors:** Elizabeth L. Bjork; Robert A. Bjork
- **Year:** 2011
- **Venue:** Chapter in *Psychology and the Real World* (M. A. Gernsbacher et al., Eds.), FABBS / Worth Publishers, pp. 56–64
- **URL/DOI:** https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/11/Making-Things-Hard-on-Yourself-but-in-a-Good-Way-20111.pdf
- **Relevance (what / why-how / weakness):** *What:* The framing chapter that unifies testing, spacing, interleaving, and variation as "desirable difficulties," built on the *storage strength vs retrieval strength* distinction. *Why-how:* Provides the overarching theory for Anki: letting retrieval strength *drop* before reviewing (spacing) makes the subsequent successful recall boost *storage strength* more — so the forgetting Anki deliberately allows is a feature, and the "test, don't reread" rule is one named desirable difficulty among several. *Weakness re scheduling:* The framework stresses difficulties are only *desirable* if the learner can still succeed — too-long intervals or too-hard cards flip into *undesirable* difficulties, exposing the core scheduling risk SM-2/FSRS must manage and the reason "ease hell" / leech cards are genuine failure modes, not user error.
- **Relevance score (WHY Anki works): 8/10**

---

## Cross-cutting synthesis (for the swarm)

1. **Retrieval is the cause; scheduling is the delivery.** (#1, #2, #4) Active recall — not re-exposure — is the learning event. Anki's value lives in the moment you try to answer before flipping; SM-2/FSRS just decide when that moment recurs.
2. **The effect is large and robust.** (#3, #6) Meta-analytic g ≈ 0.5 vs restudy, ≈ 0.9 vs nothing, strongest for *recall/production with feedback* — i.e., the exact Anki card format.
3. **Effort is the mechanism, spacing is the amplifier.** (#6, #7, #8, #9) Harder-but-successful retrievals help more; spacing manufactures that difficulty; the retrieval×spacing combination (not either alone) drives the biggest gains. This is the theoretical heart of FSRS targeting an optimal (sub-100%) retention probability.
4. **Open weaknesses Anki inherits:** no settled mechanistic theory (#6); *relative* interval shape may not matter, questioning SM-2's expanding-interval dogma (#8); benefits require *successful* retrieval, so mis-scheduling or bad cards convert desirable into undesirable difficulty (#7, #9); and lab evidence is strongest for coherent material, leaving transfer/inference from atomized cards partly extrapolated (#4, #5).


==================================================
SOURCE FILE: finders/finder-06-ml-halflife.md
==================================================
# Finder 06 — ML / Half-Life Regression

**Angle:** Data-driven / machine-learning scheduling — trace-based forgetting models learned from large-scale review logs, anchored by Duolingo's Half-Life Regression (HLR) and its descendants/critiques. The unifying question: instead of hand-tuning interval multipliers like SM-2 (and even FSRS's fixed functional form), what happens when you *learn* the forgetting curve directly from millions of real review events?

**Context for the swarm.** Anki's classic engine is SM-2: a deterministic rule with per-card ease factors and hard-coded interval multipliers, fit to *one* person's data (Wozniak) in 1987 and never trained on population logs. FSRS (the modern Anki default) is a major step up — it fits the DSR (Difficulty-Stability-Retrievability) memory model's ~21 parameters to a user's logs via gradient descent — but it still imposes a *fixed functional form* (a power-law forgetting curve) and uses only coarse features (interval, grade, difficulty). The literature below represents the more aggressive, "let the data pick the model" tradition: log-linear regression on rich features (HLR), optimal-control scheduling (MEMORIZE), Markov-decision-process cost minimization (SSP-MMC, which is literally FSRS's scheduling cousin), multi-skill knowledge tracing with forgetting (DASH/DAS3H), and fully neural sequence models (DKT, neural HLR+). Collectively they show both the *upside* (population-trained models predict recall far better than SM-2 heuristics) and the recurring *weaknesses* of the data-driven approach (questionable recall labels, poor calibration, opacity, the "cold-start" problem, and objective-mismatch between *predicting* recall and *scheduling* reviews).

---

## Source 1 — Half-Life Regression (the canonical paper)

- **Title:** A Trainable Spaced Repetition Model for Language Learning
- **Authors:** Burr Settles; Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of the 54th Annual Meeting of the ACL (Volume 1: Long Papers), pp. 1848–1858 (ACL 2016)
- **URL/DOI:** https://aclanthology.org/P16-1174/ — DOI: 10.18653/v1/P16-1174 (PDF: https://aclanthology.org/P16-1174.pdf ; code/data: https://github.com/duolingo/halflife-regression)
- **Relevance (what / why-how / weakness):** *What:* HLR models the "half-life" h of an item in memory as ĥ = 2^(Θ·x), where x is a feature vector (counts of past correct/incorrect attempts, the lexeme/word identity, etc.) and Θ is fit to 13M Duolingo review logs by minimizing a loss over both observed recall p and an implied half-life term plus L2 regularization. *Why/how it beats SM-2:* unlike SM-2's fixed ease multipliers or Leitner/Pimsleur's fixed boxes (which HLR shows are special cases of its equation with hand-picked weights), HLR *learns* feature weights from population data, cutting recall-prediction error 45%+ vs. baselines and lifting daily engagement 12% in a live A/B test. *Weakness vs. SM-2/FSRS:* it still assumes purely exponential decay (FSRS later argued power-law fits better), the half-life target is a noisy heuristic derived from a single session's recall rate, and the model is tuned to short gamified vocabulary drills rather than general flashcards.
- **Relevance score: 10/10**

## Source 2 — MEMORIZE: optimal scheduling as stochastic control

- **Title:** Enhancing human learning via spaced repetition optimization
- **Authors:** Behzad Tabibian; Utkarsh Upadhyay; Abir De; Ali Zarezade; Bernhard Schölkopf; Manuel Gomez-Rodriguez
- **Year:** 2019
- **Venue:** Proceedings of the National Academy of Sciences (PNAS), 116(10):3988–3993
- **URL/DOI:** https://doi.org/10.1073/pnas.1815156116 (open: https://pmc.ncbi.nlm.nih.gov/articles/PMC6410796/ ; code: https://github.com/Networks-Learning/memorize)
- **Relevance (what / why-how / weakness):** *What:* casts spaced repetition as a marked temporal point process and solves the scheduling problem as stochastic optimal control, proving that under common memory models the optimal review *intensity* is proportional to the current probability of forgetting (review urgency ∝ (1 − recall)). *Why/how it advances on SM-2:* this gives a *provably optimal* policy with explicit guarantees rather than SM-2's ad-hoc multipliers, and a large natural experiment on Duolingo data showed MEMORIZE-aligned learners retained more per unit of review effort. *Weakness vs. SM-2/FSRS:* the optimality result is only as good as the assumed memory model (it presumes a known exponential recall function and a single tunable cost parameter q), it does not itself *learn* rich item features the way HLR/FSRS do, and the "natural experiment" is observational rather than a controlled deployment.
- **Relevance score: 9/10**

## Source 3 — SSP-MMC / DHP: the MaiMemo model behind FSRS's scheduler

- **Title:** A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling
- **Authors:** Junyao (Jarrett) Ye; Jingyong Su; Yilong Cao
- **Year:** 2022
- **Venue:** Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '22), pp. 4381–4390
- **URL/DOI:** https://doi.org/10.1145/3534678.3539081 (code/data: https://github.com/maimemo/SSP-MMC)
- **Relevance (what / why-how / weakness):** *What:* trains a DHP (Difficulty–Half-life–Probability) memory model with the Markov property on 220M MaiMemo review logs, then frames scheduling as a stochastic-shortest-path / MDP that minimizes total review *cost* (study minutes) to drive an item's memory stability past a retention threshold. *Why/how it matters for Anki:* this is the direct intellectual ancestor of FSRS — the DHP "stability/difficulty/retrievability" state variables became FSRS's DSR model, and the SSP cost-minimization logic reappears in the open-source SSP-MMC-FSRS scheduler — showing 12.6% efficiency gains over threshold heuristics. *Weakness vs. SM-2/FSRS:* it deliberately trades neural expressiveness for an explainable Markov model (a GRU could fit better but isn't used), assumes the strong "remembered forever once stability exceeds a threshold" hypothesis, and is trained on cloze vocabulary reviews that may not generalize to arbitrary Anki content.
- **Relevance score: 9/10**

## Source 4 — DAS3H: knowledge tracing that actually models forgetting

- **Title:** DAS3H: Modeling Student Learning and Forgetting for Optimally Scheduling Distributed Practice of Skills
- **Authors:** Benoît Choffin; Fabrice Popineau; Yolaine Bourda; Jill-Jênn Vie
- **Year:** 2019
- **Venue:** Proceedings of the 12th International Conference on Educational Data Mining (EDM 2019)
- **URL/DOI:** https://arxiv.org/abs/1905.06873 — DOI: 10.48550/arXiv.1905.06873 (ERIC PDF: https://files.eric.ed.gov/fulltext/ED599174.pdf ; code: https://github.com/BenoitChoffin/das3h)
- **Relevance (what / why-how / weakness):** *What:* extends Lindsey's DASH with multi-skill (q-matrix) items and per-skill learning/forgetting rates, embedding time-window counts of past wins/attempts inside a Knowledge-Tracing-Machines (factorization-machine) logistic model. *Why/how it advances on SM-2:* it shows that explicitly encoding *when and how often* past practice happened (a forgetting term) on top of item difficulty and student ability significantly raises AUC over IRT/PFA/DKT baselines — i.e., trace-based time features beat both static IRT and forgetting-blind deep models. *Weakness vs. SM-2/FSRS:* DAS3H predicts performance but stops short of an actual scheduler, relies on expert-labeled skill tags (a cost SM-2/FSRS avoid), and its time-window binning is a coarser memory representation than HLR's continuous half-life or FSRS's stability.
- **Relevance score: 8/10**

## Source 5 — DASH: the foundational "learn the forgetting curve + schedule" study

- **Title:** Improving Students' Long-Term Knowledge Retention Through Personalized Review
- **Authors:** Robert V. Lindsey; Jeffery D. Shroyer; Harold Pashler; Michael C. Mozer
- **Year:** 2014
- **Venue:** Psychological Science, 25(3):639–647
- **URL/DOI:** https://doi.org/10.1177/0956797613504302 (open PDF: https://laplab.ucsd.edu/articles/LindseyShroyerPashlerMozer2014.pdf)
- **Relevance (what / why-how / weakness):** *What:* introduces DASH (Difficulty, Ability, Study History), a Bayesian model fusing IRT-style latent difficulty/ability with a psychological memory (MCM-style) component, and deploys it as a *scheduler* in a real middle-school Spanish course. *Why/how it advances on SM-2:* it is the seminal demonstration that a population-fit, personalized model beats both massed study (+16.5% cumulative-exam retention) and a generic one-size-fits-all spacing schedule (+10.0%) — empirical proof that data-driven personalization outperforms fixed heuristics like SM-2. *Weakness vs. SM-2/FSRS:* the model is heavier and less transparent than SM-2, requires fitting individual/item parameters (cold-start data), and its memory component still bakes in specific psychological assumptions rather than learning the curve shape freely.
- **Relevance score: 8/10**

## Source 6 — Neural HLR+: when a network beats log-linear HLR

- **Title:** Adaptive Forgetting Curves for Spaced Repetition Language Learning
- **Authors:** Ahmed Zaidi; Andrew Caines; Russell Moore; Paula Buttery; Andrew Rice
- **Year:** 2020
- **Venue:** Artificial Intelligence in Education (AIED 2020), LNCS vol. 12164, pp. 358–363 (Springer)
- **URL/DOI:** https://doi.org/10.1007/978-3-030-52240-7_65 (open PDF: https://arxiv.org/pdf/2004.11327)
- **Relevance (what / why-how / weakness):** *What:* augments HLR ("HLR+") with linguistic/psychological features (word complexity, concreteness, SUBTLEX frequency, user IDs) and replaces the log-linear core with a neural network, trained on ~4.28M English-learner datapoints from the Duolingo dataset. *Why/how it advances on HLR/SM-2:* it demonstrates that item-intrinsic *content* features — especially word complexity — carry real predictive signal that plain HLR's simple weighting cannot exploit, and that a neural model captures these interactions, pointing toward richer-feature successors to both HLR and FSRS. *Weakness vs. SM-2/FSRS:* gains come at the cost of interpretability and more feature engineering, the approach is specific to language vocabulary (content features don't exist for arbitrary Anki cards), and it inherits the noisy session-level recall labels of the underlying Duolingo data.
- **Relevance score: 8/10**

## Source 7 — Deep Knowledge Tracing: the RNN baseline the field measures against

- **Title:** Deep Knowledge Tracing
- **Authors:** Chris Piech; Jonathan Bassen; Jonathan Huang; Surya Ganguli; Mehran Sahami; Leonidas Guibas; Jascha Sohl-Dickstein
- **Year:** 2015
- **Venue:** Advances in Neural Information Processing Systems 28 (NeurIPS/NIPS 2015)
- **URL/DOI:** https://proceedings.neurips.cc/paper/2015/file/bac9162b47c56fc8a4d2a519803d51b3-Paper.pdf — arXiv DOI: 10.48550/arXiv.1506.05908
- **Relevance (what / why-how / weakness):** *What:* uses an LSTM/RNN to model a student's evolving knowledge state purely from the sequence of (item, correct/incorrect) interactions, with no hand-coded skill structure. *Why/how it advances on SM-2:* it shows recurrent nets capture complex temporal dependencies far better than Bayesian Knowledge Tracing (e.g., AUC 0.85 vs 0.68 on Khan), establishing the "learn everything from the interaction trace" paradigm that motivates modern neural schedulers (and the GRU-P baseline that still edges out FSRS-6 on log loss). *Weakness vs. SM-2/FSRS:* vanilla DKT does *not* model elapsed time / forgetting (its key gap, which DAS3H and HLR address), is a black box, and predicts correctness rather than producing review intervals — so it informs but does not replace a scheduler.
- **Relevance score: 7/10**

## Source 8 — Empirical critique: HLR's recall labels and predictive power

- **Title:** Analysis of Half-life Regression Model Made by Duolingo
- **Authors:** Jan Papoušek (Adaptive Learning group, Masaryk University)
- **Year:** 2017
- **Venue:** Technical blog / replication analysis (papousek.github.io), building on the author's peer-reviewed student-model-evaluation work
- **URL/DOI:** https://papousek.github.io/analysis-of-half-life-regression-model-made-by-duolingo.html
- **Relevance (what / why-how / weakness):** *What:* a hands-on reanalysis of the released Duolingo HLR data and model, probing its recall definition and predictive calibration. *Why/how it matters:* it surfaces concrete *weaknesses* of the data-driven approach — recall probability is non-monotonic in lag (lowest at *very short* lags because items aren't yet learned, a regime HLR's design ignores), and a trivial "average recall per item" baseline reportedly matches or beats HLR on predictive accuracy, implying HLR's true value is the half-life parameter (for skill-meter decay) more than raw prediction. *Weakness vs. SM-2/FSRS:* it also critiques the use of MAE as an evaluation metric (a methodological caution that applies to FSRS benchmarking too), highlighting that "lower error on logs" does not guarantee better *scheduling* — the core objective-mismatch problem of all trace-trained models.
- **Relevance score: 6/10**

## Source 9 — Synthesis/survey: situating HLR among SM-2 → FSRS lineage

- **Title:** Spaced Repetition Algorithms: From SM-2 to FSRS
- **Authors:** Mindomax (technical survey article)
- **Year:** 2024–2025 (continuously updated)
- **Venue:** Mindomax technical blog / survey
- **URL/DOI:** https://www.mindomax.com/spaced-repetition-algorithms
- **Relevance (what / why-how / weakness):** *What:* a narrative survey tracing the algorithmic lineage from SM-2's fixed ease factors, through Duolingo's HLR, to MaiMemo's DHP/SSP-MMC and Anki's FSRS, including version-by-version FSRS evolution (exponential → Wickelgren power-law curve → per-user decay parameter). *Why/how it matters:* it explicitly connects the data-driven threads — noting HLR was production-proven (-45% error, +12% engagement) but *never released as a general scheduler*, while FSRS generalized the trainable-parameter idea and beat SM-17 on ~99% of users across ~700M reviews. *Weakness vs. SM-2/FSRS it documents:* HLR was over-specialized to gamified vocab; SM-2 can't personalize the curve shape; and even FSRS-6 is beaten on raw log loss by a neural GRU-P baseline — concrete evidence that the data-driven frontier still has headroom. (Non-peer-reviewed secondary source; use for orientation and citation-chaining, not as primary evidence.)
- **Relevance score: 5/10**

---

## Cross-cutting takeaways (for the synthesis agent)

1. **Two distinct subproblems.** Every model here separates (a) a *memory/recall model* (HLR's half-life, DASH/DAS3H's logistic memory term, DKT's hidden state, DHP/FSRS's stability) from (b) a *scheduling policy* (threshold on recall, MEMORIZE's optimal intensity, SSP-MMC's MDP cost-minimization). SM-2 conflates the two into one rule; the data-driven tradition's main contribution is decoupling and *training* (a), then optimizing (b).
2. **The recurring weaknesses of trace-based ML scheduling** (the swarm should hammer these): (i) **label noise** — "recall probability" from a single session is a noisy target (Papoušek); (ii) **objective mismatch** — lower MAE/log-loss on review logs ≠ better long-term retention or better *schedules*; (iii) **cold-start / survivorship bias** — models train on items users chose to review, and need history before personalizing; (iv) **fixed functional forms** — HLR assumes exponential decay, FSRS power-law, each a modeling bias; (v) **opacity** — neural variants (DKT, HLR+, GRU-P) predict better but resist interpretation and are hard to ship as transparent schedulers; (vi) **domain narrowness** — most gains are demonstrated on short L2-vocabulary drills (Duolingo/MaiMemo), not arbitrary Anki decks.
3. **Direct line to Anki/FSRS:** MaiMemo's DHP (Source 3) → FSRS's DSR model; HLR (Source 1) and DASH (Source 5) are the conceptual parents; GRU-P (referenced in Sources 3 & 9) is the neural ceiling FSRS is still measured against.


==================================================
SOURCE FILE: finders/finder-07-rl-optimal-control.md
==================================================
# Finder 07 — RL / Optimal Control

**Swarm role:** Finder Agent 07 of 17. **Angle:** Reinforcement learning, optimal control, and deep learning approaches to spaced repetition scheduling — i.e., treating review scheduling as a stochastic optimal control / Markov Decision Process (MDP) problem, in contrast to Anki's hand-tuned SM-2 heuristic and the regression/DSR-based FSRS.

## Framing: why this angle matters for understanding Anki

Anki's SM-2 (and to a large extent FSRS) are **prediction-first heuristics**: they estimate a memory state and then apply fixed rules (multiply the interval by an ease factor; or pick the interval that hits a target retention). The literature below reframes scheduling as a **sequential decision / control problem**: given a stochastic model of human memory (forgetting curve), find the *policy* (when to review, what to review) that optimizes a long-horizon objective (maximize recall / knowledge subject to a cost on review effort). This exposes exactly what SM-2 leaves on the table — it is a static, myopic, per-card rule with no explicit objective function, no notion of review-budget allocation across a deck, and no optimality guarantee. The sources span three sub-families: (a) **continuous-time optimal control** (MEMORIZE), (b) **MDP / RL policy learning** (Reddy, Upadhyay, Yang/TADS, Xiao DRL-SRS, KARL), and (c) **dynamic-programming / shortest-path control** (Ye SSP-MMC, which directly underlies FSRS's optimal-retention computation).

---

## Sources

### 1. Enhancing human learning via spaced repetition optimization (MEMORIZE)
- **Authors:** Behzad Tabibian, Utkarsh Upadhyay, Abir De, Ali Zarezade, Bernhard Schölkopf, Manuel Gomez-Rodriguez
- **Year:** 2019
- **Venue:** Proceedings of the National Academy of Sciences (PNAS), 116(10):3988–3993
- **URL/DOI:** https://doi.org/10.1073/pnas.1815156116 · PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC6410796/ · Code: https://github.com/Networks-Learning/memorize
- **Relevance (what / why-how / weakness):** *What:* Formalizes spaced repetition as a **stochastic optimal control problem** over marked temporal point processes with jumps, solving for the optimal continuous-time *reviewing intensity* rather than a discrete next-interval. *Why/how:* Solving the resulting Hamilton-Jacobi-Bellman PDE yields an elegant closed-form optimal policy — review intensity ∝ q^(−1/2)·(1 − m(t)), i.e. urgency is proportional to the probability of forgetting; validated on Duolingo data showing learners on the MEMORIZE schedule recall more than heuristic schedules. *Weakness:* Relies on a specific exponential forgetting-curve memory model and a single tunable cost parameter q, assumes the learner is available exactly when the (stochastic) policy fires, and optimizes per-item intensity rather than allocating a fixed daily review budget across a whole deck the way Anki users actually study.
- **Relevance score: 10/10**

### 2. Unbounded Human Learning: Optimal Scheduling for Spaced Repetition
- **Authors:** Siddharth Reddy, Igor Labutov, Siddhartha Banerjee, Thorsten Joachims
- **Year:** 2016
- **Venue:** ACM SIGKDD (KDD '16)
- **URL/DOI:** https://doi.org/10.1145/2939672.2939850 · arXiv: https://arxiv.org/abs/1602.07032 · PDF: https://www.kdd.org/kdd2016/papers/files/rpp0744-reddyAT3.pdf
- **Relevance (what / why-how / weakness):** *What:* Models the Leitner system as a **queueing network** and casts review scheduling as a tractable optimization over per-deck review rates, directly addressing the novelty-vs-reinforcement trade-off Anki finesses with its "new cards/day" cap. *Why/how:* Mines log data to fit an empirical forgetting model, derives a mean-recall approximation that makes the rate-allocation problem convex, and predicts (then experimentally confirms via Mechanical Turk) a sharp **phase transition** in learning when the new-item introduction rate exceeds a threshold. *Weakness:* The clean theory hinges on steady-state queueing assumptions and a homogeneous-deck approximation; it optimizes aggregate review *rates* rather than item-level timing, so it is more a principled diagnosis of the trade-off than a drop-in scheduler.
- **Relevance score: 9/10**

### 3. Accelerating Human Learning with Deep Reinforcement Learning (DeepTutor)
- **Authors:** Siddharth Reddy, Sergey Levine, Anca Dragan
- **Year:** 2017
- **Venue:** NeurIPS 2017 Workshop on Teaching Machines, Robots, and Humans (preprint)
- **URL/DOI:** https://siddharth.io/files/deep-tutor.pdf · Code: https://github.com/rddy/deeptutor
- **Relevance (what / why-how / weakness):** *What:* Treats review scheduling as an explicit **RL problem** and learns a *model-free* teaching policy with a neural network that operates directly on raw study-history observations, requiring no hand-built memory model. *Why/how:* Uses policy-gradient / TRPO over a POMDP formulation, training against cognitive-model student simulators, and shows the learned policy is competitive with or beats SuperMemo and Leitner across several learning objectives. *Weakness:* Evaluated only on *simulated* students (no human deployment), is sample-inefficient and sensitive to the simulator's memory model, and as a black-box policy gives none of the interpretability or guarantees of SM-2 or the control-theoretic methods.
- **Relevance score: 9/10**

### 4. A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (SSP-MMC)
- **Authors:** Junyao (Jarrett) Ye, Jingyong Su, Yilong Cao
- **Year:** 2022
- **Venue:** ACM SIGKDD (KDD '22), pp. 4381–4390
- **URL/DOI:** https://doi.org/10.1145/3534678.3539081 · Code/data: https://github.com/maimemo/SSP-MMC
- **Relevance (what / why-how / weakness):** *What:* Builds a **DHP (Difficulty-Halflife-Probability) Markov memory model** from 220M MaiMemo review logs and frames scheduling as a **stochastic shortest path** problem that minimizes the expected number of reviews to reach a memory target. *Why/how:* Solves the SSP via dynamic programming over the discretized memory-state space to produce a provably cost-minimizing review policy, deployed in production with a 12.6% improvement over prior methods. *Weakness:* The MMC objective (minimize repetitions to a fixed target) is a different goal than maximizing retention under a daily budget; the state discretization and the assumption of a stationary, well-specified memory model limit transfer to messy real-world Anki decks with irregular intervals and lapses. **Directly underlies FSRS's optimal-retention computation, making it the bridge between this RL/control literature and the algorithm Anki users actually run.**
- **Relevance score: 10/10**

### 5. Deep Reinforcement Learning of Marked Temporal Point Processes
- **Authors:** Utkarsh Upadhyay, Abir De, Manuel Gomez-Rodriguez
- **Year:** 2018
- **Venue:** NeurIPS 2018 (Advances in Neural Information Processing Systems 31)
- **URL/DOI:** https://proceedings.neurips.cc/paper/2018/hash/71a58e8cb75904f24cde464161c3e766-Abstract.html · arXiv: https://arxiv.org/abs/1805.09360 · Code: https://github.com/Human-Centric-Machine-Learning/tpprl
- **Relevance (what / why-how / weakness):** *What:* Generalizes MEMORIZE from a fixed analytic memory model to a **deep RL framework where the policy is itself a learned point-process intensity** parameterized by an RNN, jointly choosing review *timing* and *content*. *Why/how:* Derives a policy-gradient method for the continuous-time setting that makes no assumptions on the functional form of the environment's intensity/mark distribution and allows arbitrary reward functions; applied to personalized teaching on Duolingo data. *Weakness:* Inherits the "learner available exactly when the policy fires" assumption, is harder to train and less interpretable than the closed-form MEMORIZE solution, and was not validated in a live human study for the teaching application.
- **Relevance score: 9/10**

### 6. TADS: Learning Time-Aware Scheduling Policy with Dyna-Style Planning for Spaced Repetition
- **Authors:** Zhengyu Yang, Jian Shen, Yunfei Liu, Yang Yang, Weinan Zhang, Yong Yu
- **Year:** 2020
- **Venue:** ACM SIGIR 2020, pp. 1917–1920
- **URL/DOI:** https://doi.org/10.1145/3397271.3401316 · https://dl.acm.org/doi/10.1145/3397271.3401316
- **Relevance (what / why-how / weakness):** *What:* An RL scheduler that explicitly models the **varying real-world time intervals** between learning events — a factor prior RL schedulers (which assumed uniform steps) ignored, and exactly the variable SM-2/FSRS center on. *Why/how:* Uses a **Time-LSTM policy** to encode the full learning history plus elapsed time, and integrates **Dyna-style model-based planning** to dramatically improve sample efficiency over pure model-free RL. *Weakness:* Evaluated on synthetic and cognitive-model-based simulated environments rather than real learners, and the short workshop-length treatment leaves scalability to large item pools and robustness to model misspecification underexplored.
- **Relevance score: 8/10**

### 7. DRL-SRS: A Deep Reinforcement Learning Approach for Optimizing Spaced Repetition Scheduling
- **Authors:** Qing Xiao, Jing Wang
- **Year:** 2024
- **Venue:** Applied Sciences (MDPI), 14(13):5591
- **URL/DOI:** https://doi.org/10.3390/app14135591 · https://www.mdpi.com/2076-3417/14/13/5591
- **Relevance (what / why-how / weakness):** *What:* A recent end-to-end **deep RL** scheduler that pairs a Transformer-based memory/student model with an RL agent (Tianshou) to optimize review timing, and provides a clean survey of the RL-for-SRS lineage (Reddy → Sinha → Upadhyay → Yang). *Why/how:* Trains a recall-prediction model on review logs, uses it as a differentiable simulator environment, and learns a policy that the paper reports outperforms existing spaced-repetition optimization baselines. *Weakness:* Published in a lower-tier venue with limited independent replication; like its predecessors it optimizes against a learned simulator, so gains may partly reflect the simulator rather than real human memory, and it lacks a large-scale live deployment comparison.
- **Relevance score: 7/10**

### 8. KARL / KAR3L: Knowledge-Aware Retrieval and Representations aid Retention and Learning in Students
- **Authors:** Matthew Shu, Nishant Balepur, Shi Feng, Jordan Lee Boyd-Graber
- **Year:** 2024
- **Venue:** EMNLP 2024 (Main), pp. 14161–14178
- **URL/DOI:** https://doi.org/10.18653/v1/2024.emnlp-main.784 · https://aclanthology.org/2024.emnlp-main.784/ · arXiv: https://arxiv.org/abs/2402.12291
- **Relevance (what / why-how / weakness):** *What:* Introduces **content-aware scheduling** — the first scheduler whose student model reads the *text* on the flashcard, a dimension SM-2/FSRS/MEMORIZE entirely ignore (they see only card IDs and timestamps). *Why/how:* Combines **Deep Knowledge Tracing**, a BERT retriever over semantically similar past cards, and a novel **delta-based teaching policy** that picks the card whose review most improves predicted future recall; deployed live to 500+ learners with measured efficiency gains over SOTA schedulers. *Weakness:* The online learning-efficiency evidence rests on a small sample (27 users, 32 study paths) over a medium-term horizon, and the BERT/DKT pipeline is far heavier and less transparent than Anki's arithmetic scheduler.
- **Relevance score: 8/10**

### 9. Using a model to compute the optimal schedule of practice
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** Journal of Experimental Psychology: Applied, 14(2):101–117
- **URL/DOI:** https://doi.org/10.1037/1076-898x.14.2.101 · PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf
- **Relevance (what / why-how / weakness):** *What:* The foundational **model-based optimal-scheduling** work: uses the ACT-R activation memory equations to compute, per item, the spacing that maximizes long-term gain *per unit of study time* — an explicit optimization objective absent from SM-2. *Why/how:* Balances the spacing effect against recency/frequency and the time cost of retrieval failures, dynamically lengthening intervals as items stabilize, and shows large-effect-size gains in recall and latency in a controlled experiment. *Weakness:* It is a greedy, per-item heuristic derived from one cognitive architecture (ACT-R) rather than a true long-horizon optimal-control solution, and its "contracting spacing is best" prediction is model-dependent and contested by competing memory models (e.g., Mozer/Pashler).
- **Relevance score: 8/10**

---

## Supporting / context sources (real, used for framing)

- **A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression).** Burr Settles, Brendan Meeder. ACL 2016, pp. 1848–1858. https://doi.org/10.18653/v1/P16-1174 · Code: https://github.com/duolingo/halflife-regression. *Not a control/RL method but the key ML-regression bridge between heuristics (Leitner/Pimsleur) and learned student models that the RL schedulers build their environments on; reduced recall-prediction error 45%+ on Duolingo. Score: 6/10 on this angle.*
- **FSRS — Free Spaced Repetition Scheduler (DSR / DHP model).** Jarrett Ye et al., open-spaced-repetition. https://github.com/open-spaced-repetition/fsrs4anki · optimizer mechanism (MLE + Backpropagation-Through-Time, then SSP for optimal retention): https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-mechanism-of-optimization. *The production system that actually carried this research into Anki: its optimizer trains a DSR memory model via BPTT and uses Ye's SSP-MMC (source #4) to pick the optimal retention. Score: 7/10 — the concrete RL/control-influenced replacement for SM-2.*

---

## Synthesis for the swarm: what this angle says about Anki's weaknesses

1. **No objective function.** SM-2 is a fixed rule with no optimization target; every paper here starts by *writing down* an objective (maximize recall / minimize reviews / maximize gain-per-time). Anki's heuristic is provably suboptimal because it never optimizes anything.
2. **Myopic and per-card.** SM-2 schedules each card in isolation and ignores the **budget-allocation / novelty-vs-reinforcement trade-off** that Reddy (#2) formalizes and that produces a phase transition in learning outcomes.
3. **Content-blind.** SM-2, FSRS, and even MEMORIZE see only IDs and timestamps; KARL (#8) shows the text of the card carries predictive signal they all discard.
4. **The control framing already won in practice.** Ye's SSP-MMC (#4) is the dynamic-programming control method that FSRS uses to compute optimal retention — so the modern Anki replacement (FSRS) is itself a descendant of this RL/optimal-control lineage, while SM-2 remains a 1980s hand-tuned heuristic.
5. **Open gap.** Every learned/RL method is validated mostly against *simulators or short studies*; none has SM-2's decades of robustness at billions-of-reviews scale, which is the honest counter-weakness of the RL angle.


==================================================
SOURCE FILE: finders/finder-08-memory-models.md
==================================================
# Finder 08 — Computational Memory Models

**Swarm angle:** Computational/cognitive memory models that quantify retention and motivate scheduling — ACT-R declarative memory, the Multiscale Context Model (MCM), and Pavlik & Anderson's ACT-R–based optimal spacing. These are the *theoretical ancestors* of the algorithms inside Anki (SM-2 / FSRS): they formalize *why* a forgetting curve exists, *how* spacing changes it, and *when* a review maximizes long-term gain. FSRS in particular is a direct descendant of this lineage (its "stability/retrievability" formulation echoes Pavlik–Anderson activation and the DASH/MCM family), whereas SM-2 is a hand-tuned heuristic with no underlying memory model — a key weakness this body of work exposes.

All URLs/DOIs below were retrieved and verified via web search on 2026-06-29.

---

## Source 1 — Pavlik & Anderson (2005), Activation-Based Model of the Spacing Effect
- **Title:** Practice and Forgetting Effects on Vocabulary Memory: An Activation-Based Model of the Spacing Effect
- **Authors:** Philip I. Pavlik Jr.; John R. Anderson
- **Year:** 2005
- **Venue:** Cognitive Science, 29, 559–586
- **URL/DOI:** https://doi.org/10.1207/s15516709cog0000_14 (open PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/409s15516709cog0000_14.pdf)
- **Relevance (what / why-how / weakness):** *What:* Extends ACT-R declarative memory so each practice adds a strength increment that decays as a power function of time; memory activation is the log-sum of those decaying traces. *Why/how:* The decay rate of a *new* trace depends on the item's *current* activation — high activation (massed) → faster decay, low activation (spaced) → slower decay — which mechanistically *produces* the spacing effect and its interactions with practice count and retention interval. This is the formal precursor to the "stability grows with successful spaced review" idea later operationalized in FSRS. *Weakness re scheduling:* Fit to Japanese–English paired associates over lab timescales; it explains spacing but does not by itself prescribe *when* to review (that is the 2008 paper), and it struggles at very long retention intervals.
- **Relevance score: 10/10**

## Source 2 — Pavlik & Anderson (2008), Computing the Optimal Schedule of Practice
- **Title:** Using a Model to Compute the Optimal Schedule of Practice
- **Authors:** Philip I. Pavlik Jr.; John R. Anderson
- **Year:** 2008
- **Venue:** Journal of Experimental Psychology: Applied, 14(2), 101–117
- **URL/DOI:** https://doi.org/10.1037/1076-898X.14.2.101 (open PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf)
- **Relevance (what / why-how / weakness):** *What:* Turns the 2005 activation model into an explicit *scheduling algorithm* that, before each drill trial, picks the item whose expected long-term learning gain per unit of study time is maximal. *Why/how:* It balances the spacing effect (more spacing → better long-term recall) against recency/frequency and the time cost of failed retrievals, choosing the moment when the trade-off is optimal; as repetitions accumulate, items stabilize and the optimal interval grows — the exact behavior Anki/FSRS try to approximate with expanding intervals. *Weakness re scheduling:* Requires fitting model parameters from prior data and is computationally heavier than a simple heuristic like SM-2; the optimality is "gain per unit time," which may not match a learner's true exam deadline or target retention.
- **Relevance score: 10/10**

## Source 3 — Mozer, Pashler, Cepeda, Lindsey & Vul (2009), Multiscale Context Model (MCM)
- **Title:** Predicting the Optimal Spacing of Study: A Multiscale Context Model of Memory
- **Authors:** Michael C. Mozer; Harold Pashler; Nicholas Cepeda; Robert Lindsey; Ed Vul
- **Year:** 2009
- **Venue:** Advances in Neural Information Processing Systems 22 (NIPS 2009), 1321–1329
- **URL/DOI:** https://proceedings.neurips.cc/paper_files/paper/2009/file/6bc24fc1ab650b25b4114e93a98f1eba-Paper.pdf
- **Relevance (what / why-how / weakness):** *What:* Introduces MCM, which predicts how a *specific study schedule* affects retention of *specific material*, using only forgetting data from a single study session. *Why/how:* Models memory as a cascade of leaky integrators / context units operating at multiple timescales (a synthesis of Staddon and Raaijmakers models), giving a mechanistic basis for power-law forgetting and the *nonmonotonic* spacing curve — short and long gaps both hurt, an intermediate gap is optimal. This is the theoretical justification for why a scheduler must *expand* intervals rather than use a fixed gap. *Weakness re scheduling:* It is a predictive/descriptive memory model, not a deployed scheduler; parameter estimation per material is needed, and it was validated on lab-scale data rather than thousands of heterogeneous Anki cards.
- **Relevance score: 10/10**

## Source 4 — Anderson & Schooler (1991), Reflections of the Environment in Memory
- **Title:** Reflections of the Environment in Memory
- **Authors:** John R. Anderson; Lael J. Schooler
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 396–408
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00174.x (open PDF: https://users.cs.northwestern.edu/~paritosh/papers/KIP/AndersonSchooler1991ReflectionsOfEnvironmentOnMemory.pdf)
- **Relevance (what / why-how / weakness):** *What:* The rational-analysis foundation showing memory availability tracks frequency, recency, and spacing of past exposures — and that these mirror the statistical structure of the environment (New York Times, parental speech, email). *Why/how:* It justifies *why* memory decays as a power law and why activation should encode log-odds that an item is needed now, supplying the principled basis for ACT-R's base-level learning equation that all later schedulers build on. *Weakness re scheduling:* It is a foundational rational account, not a practice-scheduling model; notably the original formulation does **not** capture the spacing effect (the motivation for Pavlik & Anderson's later decay-rate extension).
- **Relevance score: 8/10**

## Source 5 — Anderson, Bothell, Lebiere & Matessa (1998), Integrated Theory of List Memory
- **Title:** An Integrated Theory of List Memory
- **Authors:** John R. Anderson; Dan Bothell; Christian Lebiere; Michael Matessa
- **Year:** 1998
- **Venue:** Journal of Memory and Language, 38(4), 341–380
- **URL/DOI:** https://doi.org/10.1006/jmla.1997.2553 (summary: http://act-r.psy.cmu.edu/book/Chapter7/list_memory.html)
- **Relevance (what / why-how / weakness):** *What:* Defines the ACT-R **base-level learning equation**, B_i = ln(Σ_j t_j^(−d)), the core quantitative formula for declarative-memory activation from frequency and recency of practice. *Why/how:* This equation is the literal mathematical engine that retention-based schedulers compute over: probability of recall is a logistic function of activation, so a scheduler can convert "time since each review" into a recall probability and act on it — conceptually identical to FSRS estimating retrievability. *Weakness re scheduling:* Calibrated on list-memory lab paradigms (serial/free recall, recognition) rather than long-interval flashcard review, and the bare base-level equation again lacks an intrinsic spacing-effect mechanism (decay d is fixed, not activation-dependent).
- **Relevance score: 8/10**

## Source 6 — Anderson, Bothell, Byrne, Douglass, Lebiere & Qin (2004), An Integrated Theory of the Mind
- **Title:** An Integrated Theory of the Mind
- **Authors:** John R. Anderson; Daniel Bothell; Michael D. Byrne; Scott Douglass; Christian Lebiere; Yulin Qin
- **Year:** 2004
- **Venue:** Psychological Review, 111(4), 1036–1060
- **URL/DOI:** https://doi.org/10.1037/0033-295X.111.4.1036 (open PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/themes/ACT-R/workshops/2004/IntegratedTheory.pdf)
- **Relevance (what / why-how / weakness):** *What:* The canonical specification of ACT-R 5.0, situating declarative memory (and its activation/base-level equations) within a complete cognitive architecture. *Why/how:* Establishes the subsymbolic activation, noise, and retrieval-threshold machinery that determine whether and how fast a chunk is retrieved — the principled "recall probability vs. activation" mapping that scheduling models inherit and that motivates targeting a fixed recall probability at review time. *Weakness re scheduling:* It is an architecture paper, not a spacing/scheduling study; its memory predictions are demonstrated on short-timescale tasks and require the spacing-specific extensions of Pavlik & Anderson to be useful for review scheduling.
- **Relevance score: 7/10**

## Source 7 — Cepeda, Vul, Rohrer, Wixted & Pashler (2008), Temporal Ridgeline of Optimal Retention
- **Title:** Spacing Effects in Learning: A Temporal Ridgeline of Optimal Retention
- **Authors:** Nicholas J. Cepeda; Edward Vul; Doug Rohrer; John T. Wixted; Harold Pashler
- **Year:** 2008
- **Venue:** Psychological Science, 19(11), 1095–1102
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.2008.02209.x (open PDF: https://www.yorku.ca/ncepeda/publications/CVRWP2008.pdf)
- **Relevance (what / why-how / weakness):** *What:* Large-scale (>1,350 participants) empirical study mapping retention as a function of inter-study gap and test delay, revealing a "ridgeline" of optimal gaps. *Why/how:* Shows the optimal gap *grows* with desired retention interval but *shrinks as a proportion* of it (≈20–40% of a 1-week delay down to ≈5–10% of a 1-year delay) — the quantitative target any expanding-interval scheduler (SM-2's ×2.5, FSRS's stability growth) is implicitly chasing. *Weakness re scheduling:* It is descriptive data, not a model; the authors note that contemporary models (Pavlik & Anderson 2005; Raaijmakers 2003) struggled to fit the full surface, exposing a gap between memory theory and observed optimal scheduling.
- **Relevance score: 9/10**

## Source 8 — Lindsey, Shroyer, Pashler & Mozer (2014), Personalized Review (DASH)
- **Title:** Improving Students' Long-Term Knowledge Retention Through Personalized Review
- **Authors:** Robert V. Lindsey; Jeffery D. Shroyer; Harold Pashler; Michael C. Mozer
- **Year:** 2014
- **Venue:** Psychological Science, 25(3), 639–647
- **URL/DOI:** https://doi.org/10.1177/0956797613504302 (open PDF: https://library.scottbarrykaufman.com/uploads/2014/01/Lindsey-et-al.-2014.pdf)
- **Relevance (what / why-how / weakness):** *What:* Deploys the **DASH** (Difficulty, Ability, Study History) model in a real semester-long middle-school course, scheduling reviews via retrieval-practice software. *Why/how:* DASH fuses a psychological memory model with Bayesian per-student/per-item parameter inference to predict recall probability and pick items near a target probability — the direct conceptual bridge from ACT-R/MCM theory to FSRS-style personalized scheduling; personalized review beat massed study by 16.5% and one-size-fits-all spacing by 10.0%. *Weakness re scheduling:* Needs substantial historical interaction data to fit individual differences (cold-start problem), and the gains, while real, depend on accurate parameter estimation that simpler heuristics (SM-2) avoid by ignoring it.
- **Relevance score: 9/10**

## Source 9 — Khajah, Lindsey & Mozer (2014), Practical Guidance from ACT-R and MCM
- **Title:** Maximizing Students' Retention via Spaced Review: Practical Guidance From Computational Models of Memory
- **Authors:** Mohammad M. Khajah; Robert V. Lindsey; Michael C. Mozer
- **Year:** 2014
- **Venue:** Topics in Cognitive Science, 6(1), 157–169
- **URL/DOI:** https://doi.org/10.1111/tops.12077 (open PDF: https://home.cs.colorado.edu/~mozer/Research/Selected%20Publications/reprints/KhajahLindseyMozer2014.pdf)
- **Relevance (what / why-how / weakness):** *What:* Uses ACT-R and MCM as simulators to derive simple, deployable review-scheduling heuristics over a semester of blocked material. *Why/how:* Identifies the **μ-back** heuristic (review material from μ weeks ago) and the **θ-threshold** heuristic (review the item whose predicted recall probability is nearest θ ≈ 0.4) — the latter being exactly the "review when retrievability hits a target" logic FSRS implements, grounded here in converging predictions of two independent memory models. *Weakness re scheduling:* Conclusions come from model-as-proxy *simulation* rather than a human trial; the optimal heuristic depends on the assumed model and on a fixed weekly review-time budget that may not match self-paced Anki use.
- **Relevance score: 9/10**

## Source 10 — Walsh, Gluck, Gunzelmann, Jastrzembski & Krusmark (2018), Evaluating Spacing Models (PPE)
- **Title:** Evaluating the Theoretic Adequacy and Applied Potential of Computational Models of the Spacing Effect
- **Authors:** Matthew M. Walsh; Kevin A. Gluck; Glenn Gunzelmann; Tiffany S. Jastrzembski; Michael Krusmark
- **Year:** 2018
- **Venue:** Cognitive Science, 42(S3), 644–691
- **URL/DOI:** https://doi.org/10.1111/cogs.12602
- **Relevance (what / why-how / weakness):** *What:* Proposes evaluation criteria and benchmarks three spacing models — the Predictive Performance Equation (PPE), an ACT-R extension (Pavlik & Anderson 2005), and a SAM-based model — for both theoretic adequacy and applied scheduling potential. *Why/how:* PPE extends the General Performance Equation with a *stability term* that lowers the decay rate as a function of the full history of lags (spaced → slower decay), explicitly quantifying how a review history maps to future retention — the same "stability accumulates with good spacing" principle that underpins FSRS's two-component (stability/retrievability) design. *Weakness re scheduling:* The paper shows that *no single model* captures the full range of spacing phenomena equally well, and that most models (including the ACT-R extension) are rarely evaluated against applied scheduling criteria — a direct caution that the theory behind SM-2/FSRS is still imperfect and model-dependent.
- **Relevance score: 8/10**

---

## Synthesis for the swarm
- **The theoretical chain:** Anderson & Schooler (1991) → ACT-R base-level activation (Anderson et al. 1998, 2004) → Pavlik & Anderson (2005) activation-dependent decay that *generates* the spacing effect → Pavlik & Anderson (2008) optimal scheduling algorithm. In parallel, Mozer et al. (2009) MCM gives a multiscale mechanistic basis for the same forgetting/spacing curves; Cepeda et al. (2008) supplies the empirical "ridgeline" target; Lindsey et al. (2014) and Khajah et al. (2014) operationalize all of it into deployed personalized scheduling (DASH, θ-threshold); Walsh et al. (2018) audits the whole model family (PPE).
- **Connection to Anki:** FSRS's stability/retrievability formulation and its "review when predicted recall ≈ target" policy are recognizable descendants of activation-based decay (Pavlik–Anderson), the PPE stability term, and the θ-threshold/DASH heuristics. SM-2, by contrast, is a fixed-multiplier heuristic with *no* underlying memory model — these papers collectively expose that as its central weakness.
- **Shared weakness across the literature:** every quantitative model needs parameter fitting (per item, per learner) and was validated mostly on lab/classroom scales; none perfectly fits the full empirical spacing surface, so the "optimal schedule" is always model-dependent and only as good as its calibration data.


==================================================
SOURCE FILE: finders/finder-09-sm2-critiques.md
==================================================
# Finder 09 — SM-2 Critiques & Weaknesses

**Agent role:** Finder 09 in a 17-agent research swarm.
**Angle:** Direct critiques and documented weaknesses of SM-2 / Anki's default scheduler — fixed ease factor, "ease hell", conflation of difficulty and stability, no per-user calibration of forgetting rates, and poor interval calibration.

**Collective goal:** Explain exactly what Anki's algorithm does, why/how, and especially its weaknesses (SM-2 / FSRS spaced repetition).

---

## Summary of the documented weaknesses (synthesis)

Across technical, community, and academic sources, the criticisms of Anki's default SM-2 scheduler cluster into a handful of well-evidenced failure modes:

1. **"Ease hell" (one-way ratchet on ease factor).** In Anki's SM-2 implementation, `Again` drops ease by 20%, `Hard` by 15%, `Good` does nothing, and only `Easy` raises it (by ~15%). Ease is floored at 130%. Because the only upward lever is the rarely-pressed `Easy` button, a card that lapses a handful of times gets pinned at minimum ease and its interval barely grows — it resurfaces every few days forever even after it is genuinely learned. ([1], [2], [3], [4])
2. **Conflation of difficulty and stability into one number.** SM-2's single E-factor stands in for *both* item difficulty and memory stability, which the two-component model of memory treats as independent variables. Wozniak himself documents that "Algorithm SM-2 did not provide for stabilization decay due to the fact that E-factor stood for both stabilization and difficulty." ([5], [6])
3. **No per-user / per-item calibration of forgetting rates.** Every card starts at EF = 2.5 for every learner; SM-2 is a heuristic hand-calibrated to Wozniak's own 1987 data and never adaptively fits an individual's measured forgetting curve. New items don't benefit from the experience of old items — a flaw Wozniak flagged as early as SM-4. ([5], [7], [8])
4. **No explicit retention target / poor interval calibration.** SM-2 has no notion of a target recall probability; intervals are a fixed multiplicative formula. The multiplier doesn't shrink as intervals lengthen, so mature cards get intervals that are too long (forgotten before review), while ease-floored cards get intervals that are too short (over-reviewed). ([1], [9])
5. **Quantified inferiority in benchmarks.** On the open-source SRS benchmark (~10k Anki users / collections), FSRS-6 has lower log loss than probability-converted SM-2 for ~99.6% of users; academic comparisons (Duolingo HLR, SuperMemo LSTM study) place SM-2 well below trainable/two-component models on recall-prediction error. ([10], [11], [3], [12])

A recurring caveat (noted for honesty): SM-2 was never designed to output recall probabilities, so probability-based benchmark comparisons require converting its intervals via added assumptions — there is "no truly fair, no-caveats comparison." This is a methodological weakness of the *comparison*, not a defense of SM-2's scheduling. ([10], [11])

---

## Sources

### 1. Issues with Anki SM-2 (Anki SRS Kai documentation)
- **Authors:** kuroahna (Anki SRS Kai project)
- **Year:** 2024 (living doc)
- **Venue:** Project documentation site (GitHub Pages)
- **URL:** https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html
- **Relevance:** Lays out three concrete SM-2 defects with the actual formula `NewInterval = OldInterval × EaseFactor × IntervalModifier` and the button effects (Again −20%, Hard −15%, Good 0, Easy +15%), showing why ease can only ratchet down to the 130% floor ("ease hell"). It also documents the *opposite* problems — new-card intervals too short and mature-card intervals too long because the multiplier doesn't shrink as intervals grow, so a card jumps from ~1000 to ~2500 days and is forgotten. Crucially it points to in-app evidence: the Card Ease statistics graph shows a deck "stuck in ease hell" with a large mass of cards pinned at 130%.
- **Weakness-documentation rating:** **9/10** — formula-level, quantitative, names multiple distinct weaknesses with in-app diagnostic evidence.

### 2. Spaced Repetition Algorithm Benchmark (Expertium's Blog)
- **Authors:** Expertium (FSRS contributor) and the open-spaced-repetition team
- **Year:** 2024–2025 (continuously updated)
- **Venue:** Technical blog / GitHub Pages companion to the SRS benchmark
- **URL:** https://expertium.github.io/Benchmark.html
- **Relevance:** Provides the headline quantitative critique: across the benchmark, FSRS-6 (with recency weighting) shows **99.6% superiority over Anki SM-2** in log loss, meaning lower calibration error for almost every user. It explains the metrics (log loss, RMSE-bins, AUC) that expose SM-2's poor probability calibration. It is also intellectually honest about the central caveat — SM-2 was not designed to output probabilities, so its scores depend on an interval→probability conversion — which strengthens rather than weakens the critique's credibility.
- **Weakness-documentation rating:** **9/10** — large-N quantitative evidence with transparent methodology and caveats.

### 3. srs-benchmark (open-spaced-repetition) README
- **Authors:** open-spaced-repetition contributors (Jarrett Ye et al.)
- **Year:** 2024–2025 (living repo)
- **Venue:** GitHub repository
- **URL:** https://github.com/open-spaced-repetition/srs-benchmark
- **Relevance:** The reproducible benchmark itself, ranking ~20 algorithms (including SM-2) on ~10k collections using Log Loss, RMSE(bins), and AUC; SM-2 sits near the bottom of the calibration table while FSRS variants and neural models lead. It defines RMSE(bins) (grouping by interval length, review count, and lapse count), which directly surfaces *where* SM-2 mis-predicts. As open data + code, it is the primary evidentiary basis behind most "FSRS beats SM-2" claims elsewhere.
- **Weakness-documentation rating:** **9/10** — primary, reproducible, quantitative source of SM-2's measured inferiority.

### 4. SM-2 vs. FSRS: How Anki's Scheduling Algorithms Work (J-Compass)
- **Authors:** J-Compass (editorial)
- **Year:** 2025
- **Venue:** Product documentation / explainer
- **URL:** https://j-compass.com/docs/japanese-learning/study-methodology/spaced-repetition/sm2-fsrs-algorithms
- **Relevance:** Frames SM-2 as "a fixed arithmetic formula… calculated without an underlying model of how memory works" and explains precisely why ease hell is irreversible: "the SM-2 formula has no mechanism to raise [E-Factor] back once it has fallen," with the 1.3 floor pinning lapsed cards. It cites the official Anki FAQ (#3616) acknowledging FSRS's superiority and notes the nuance that FSRS gives *longer* first intervals but *more conservative* mature-card intervals — i.e., it identifies that SM-2 mis-calibrates intervals in both directions. It also fairly bounds the critique (FSRS needs review history to optimize).
- **Weakness-documentation rating:** **8/10** — mechanistic and cites the official acknowledgement.

### 5. Stabilization decay (supermemo.guru, Wozniak)
- **Authors:** Piotr Wozniak (SuperMemo)
- **Year:** ~2019 (wiki, periodically updated)
- **Venue:** supermemo.guru wiki
- **URL:** https://www.supermemo.guru/wiki/Stabilization_decay
- **Relevance:** A first-party admission of SM-2's core modeling flaw: "Algorithm SM-2 did not provide for stabilization decay due to the fact that E-factor stood for **both stabilization and difficulty**, which were both presumed constant." This directly documents the conflation critique — SM-2 cannot separate how hard an item is from how durable its memory trace is, so it cannot model the spacing effect or stability growth. Coming from the algorithm's own author, it is unusually authoritative.
- **Weakness-documentation rating:** **8/10** — author-confirmed structural limitation, though terse.

### 6. First adaptable spaced repetition algorithm: Algorithm SM-4 (supermemo.guru, Wozniak)
- **Authors:** Piotr Wozniak (SuperMemo)
- **Year:** ~2019 (wiki)
- **Venue:** supermemo.guru wiki
- **URL:** https://www.supermemo.guru/wiki/Algorithm_SM-4
- **Relevance:** Wozniak's own retrospective stating "The main flaw was that, in Algorithm SM-2, **new items would not benefit from the experience of old items**" — i.e., SM-2 is non-adaptive and cannot transfer learned difficulty/forgetting information across a collection. It also documents related interval-consistency problems (intervals occasionally computed shorter than their predecessors) that motivated SM-4/SM-5. This is the canonical primary-source articulation of SM-2's lack of personalization/learning.
- **Weakness-documentation rating:** **8/10** — primary-source critique of SM-2's non-adaptivity.

### 7. SM-2 (SuperMemo 2 Algorithm) glossary entry (Mikey Does)
- **Authors:** Mikey Does (editorial glossary)
- **Year:** 2024–2025
- **Venue:** Glossary / reference site
- **URL:** https://mikeydoes.com/glossary/sm-2/
- **Relevance:** Has an explicit "Criticisms" section enumerating distinct weaknesses: EF "has no principled calibration to actual forgetting curves — it is a heuristic"; "no concept of per-user calibration: every new card starts with EF = 2.5"; hard cards near the 1.3 floor get inefficiently short intervals ("grinding"); and SM-2 "does not account for the actual time elapsed since last review." It captures the "death spiral" (ease hell) and the item-difficulty-heterogeneity blindspot concisely. Useful as a compact catalogue of independent critiques.
- **Weakness-documentation rating:** **8/10** — broad, well-organized list of weaknesses (secondary source).

### 8. Why FSRS Is Better Than SM-2 (Words on Repeat)
- **Authors:** Words on Repeat (editorial)
- **Year:** 2024
- **Venue:** Technical blog
- **URL:** https://wordsonrepeat.com/blog/fsrs-vs-sm2-algorithm
- **Relevance:** Coins the SM-2 ease dynamic as a "one-way ratchet": failures subtract ≥0.2 while success adds at most 0.1 and only on `Easy`, so EF collapses to 1.3 and stays there. It articulates the difficulty/stability-independence critique well: "a hard card you've successfully reviewed 50 times can still have very high stability — FSRS can represent this. SM-2 cannot." It adds an adoption/UX critique: even after Anki added FSRS, SM-2 remained the de-facto default that most users never change.
- **Weakness-documentation rating:** **8/10** — clear mechanistic framing of the ratchet and stability-vs-difficulty gap.

### 9. A Trainable Spaced Repetition Model for Language Learning (Settles & Meeder, Duolingo)
- **Authors:** Burr Settles, Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of the ACL (ACL 2016), pp. 1848–1858
- **URL / DOI:** https://aclanthology.org/P16-1174.pdf — DOI: 10.18653/v1/P16-1174
- **Relevance:** The foundational academic argument that fixed-rule heuristic schedulers (Leitner, and by extension SM-2-style hand-tuned formulas) under-predict recall compared to a *trainable* model fit to real student data — Half-Life Regression reduces recall-prediction error by 45%+ over baselines. It establishes the principle that effective scheduling must *learn* per-item/per-user forgetting rates rather than apply a universal multiplier, which is precisely SM-2's deficiency. As peer-reviewed work with public code/data, it grounds the "SM-2 doesn't personalize forgetting rates" critique in academic evidence.
- **Weakness-documentation rating:** **7/10** — strong academic backing, but critiques heuristic SR generally (SM-2 as the canonical example) rather than Anki specifically.

### 10. Modeling Spaced Repetition with LSTMs (SuperMemo R&D)
- **Authors:** SuperMemo research team (with P. Wozniak's two-component model)
- **Year:** 2021
- **Venue:** SuperMemo technical paper (PDF)
- **URL:** https://www.supermemo.com/wp-content/uploads/SuperMemo_AI.pdf
- **Relevance:** Provides a head-to-head benchmark table where **SM-2 scores markedly worse than SM-17, logistic regression, and HLR** on likelihood and MAE for recall prediction (e.g., SM-2 likelihood ≈ 0.143 / MAE ≈ 0.411 vs. SM-17 ≈ 0.614 / 0.220). It explicitly contrasts SM-2's static formula with two-component / machine-learned models that adapt to individually measured retention. Independent of the FSRS team, it corroborates SM-2's poor calibration from the SuperMemo side.
- **Weakness-documentation rating:** **7/10** — quantitative cross-model evidence, though from an interested (SuperMemo) party.

### 11. What Makes a Spaced Repetition Algorithm Effective (Mindomax)
- **Authors:** Mindomax (editorial)
- **Year:** 2025
- **Venue:** Explainer / blog
- **URL:** https://www.mindomax.com/what-makes-a-spaced-repetition-algorithm-effective
- **Relevance:** Situates SM-2's weakness within memory theory: it lacks the two-component (stability + retrievability) separation formalized by Wozniak & Gorzelanczyk (1994–1995), so it cannot represent item-difficulty heterogeneity or distinct decay rates. It also adds healthy meta-critique of the *evidence base* — small-sample SM-17 comparisons (18 collections) and the fact that proprietary SuperMemo algorithms can't be openly benchmarked — which contextualizes how strong the anti-SM-2 evidence actually is. Useful for separating well-supported claims (FSRS≫SM-2 on ~10k collections) from weaker ones.
- **Weakness-documentation rating:** **7/10** — good theoretical framing plus rare critical scrutiny of the comparison methodology.

---

## Notes on rigor / anti-fabrication

- All URLs are real and were retrieved during this search session; the academic HLR paper carries a verifiable DOI (10.18653/v1/P16-1174).
- Sources 5 and 6 are **primary** (the algorithm's own author, Wozniak) admitting SM-2's structural limits; sources 2, 3, 10 are **quantitative benchmarks**; source 9 is **peer-reviewed**. The remaining are secondary explainers used for clear mechanistic framing.
- The strongest, most-cited weakness is **"ease hell"** (irreversible ease-factor decay → over-review of known cards), corroborated by independent sources and even acknowledged in Anki's own FAQ/manual (referenced via source 4 and the Anki manual's Deck Options page).


==================================================
SOURCE FILE: finders/finder-10-benchmarks.md
==================================================
# Finder 10 — Algorithm Benchmarks

**Angle:** Head-to-head benchmarks and evaluations comparing spaced-repetition scheduling algorithms (SM-2 vs FSRS vs HLR vs DASH vs ACT-R vs neural nets) on real review-log datasets, judged by recall-prediction metrics (log-loss, RMSE-in-bins, AUC, MAE).

> Scope note: This file focuses on *empirical comparisons* — who was measured against whom, on what data, with which metric, and who won. It deliberately leans on the open-source SRS Benchmark (the single largest head-to-head) plus the peer-reviewed memory-model papers that introduced the competing algorithms and reported their own comparisons.

---

## Key cross-source findings (the "scoreboard")

- On the largest public dataset (`anki-revlogs-10k`, ~10k Anki users, ~350M evaluation reviews), the ranking by **log loss** is roughly: neural nets (RWKV-P/LSTM/GRU) ≳ FSRS-7/6 > DASH variants > FSRS v4/v3 > **HLR** > Ebisu, with plain SM-2 sitting near the bottom (SM-2 is only included in the runnable benchmark code, not the headline tables, because it was never designed to output probabilities).
- **FSRS-6 beats SM-2 (trainable variant) for ~97.4% of users; FSRS-6 w/ recency weighting beats Anki SM-2 for ~99.6% of users by log loss** (per Expertium / benchmark maintainers).
- **HLR (Duolingo) loses to FSRS** on Anki data (HLR log loss ≈ 0.4694 vs FSRS-7 ≈ 0.3437) but **beat Leitner/Pimsleur/logistic-regression by ~45%+ on Duolingo's own data** — illustrating that "who wins" is dataset-dependent.
- **Methodological weakness exposed across the board:** SM-2 and other interval-only schedulers don't natively predict P(recall), so comparisons require bolting on extra formulas — meaning a "truly fair, no-caveats" SM-2-vs-FSRS comparison is impossible. Calibration metrics (RMSE-bins, calibration graphs) are also *gameable* (see `RMSE-BINS-EXPLOIT`), which is why log loss + AUC are used alongside.

---

## Sources

### 1. SRS Benchmark (README + results tables)
- **Title:** SRS Benchmark — A benchmark for spaced repetition schedulers/algorithms
- **Authors:** Jarrett Ye (L-M-Sherlock) & open-spaced-repetition contributors
- **Year:** 2023–present (continuously updated)
- **Venue:** GitHub (open-source repo)
- **URL:** https://github.com/open-spaced-repetition/srs-benchmark
- **Relevance:** This is the single most important head-to-head artifact for the angle: it evaluates ~30 algorithms — FSRS v1→v7, FSRS-rs, HLR, Ebisu v2, DASH/DASH[MCM]/DASH[ACT-R], ACT-R, GRU/LSTM/RWKV neural nets, Logistic Regression, SM-2 (trainable), plus AVG/MOVING-AVG baselines — on `anki-revlogs-10k` (9,999 collections, 349,923,850 evaluation reviews) using Log Loss, RMSE(bins), and AUC with `TimeSeriesSplit`. Headline "without same-day" log-loss results: RWKV-P 0.2773 (best) → FSRS-7 recency 0.3414 → FSRS-7 0.3437 → FSRS-6 0.3460 → DASH ~0.368 → FSRS v4 0.3726 → HLR 0.4694 → Ebisu v2 0.4989; neural nets win on raw accuracy but FSRS wins on parameter-efficiency/deployability. It exposes that calibration metrics are gameable (the deliberately adversarial `RMSE-BINS-EXPLOIT` posts a near-zero RMSE while having a terrible log loss of 4.6), and that SM-2 cannot be compared without added probability formulas.
- **Quality of empirical comparison: 10/10** — largest dataset in the world, time-series split (no leakage), multiple complementary metrics, confidence intervals, reproducible code, per-user "superiority" matrices.

### 2. The Metric (SRS Benchmark methodology wiki)
- **Title:** The Metric (RMSE(bins), Log Loss, AUC; why not the Universal Metric)
- **Authors:** open-spaced-repetition (awesome-fsrs / fsrs4anki wiki)
- **Year:** 2024 (updated)
- **Venue:** GitHub Wiki
- **URL:** https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Metric
- **Relevance:** Defines exactly how the benchmark scores recall prediction: Log Loss (binary cross-entropy on individual reviews), RMSE(bins) (calibration error after binning by interval length / review count / lapse count, weighted by bin size), and AUC (discrimination). It explains the crucial weakness that simpler calibration graphs and even RMSE(bins) can be *gamed* by an adversary that mirrors measured bin averages, which is why log loss/AUC are read alongside. It also argues against SuperMemo's "Universal Metric," because letting each algorithm bin reviews using its own predictions makes an open, comparable benchmark impossible.
- **Quality of empirical comparison: 8/10** — not a comparison itself, but the rigorous metric foundation that makes the other comparisons trustworthy; docks points only because it's methodology rather than results.

### 3. Expertium — "Benchmark of Spaced Repetition Algorithms" (blog writeup)
- **Title:** Benchmark of Spaced Repetition Algorithms
- **Authors:** Expertium (FSRS core contributor)
- **Year:** 2024–2025 (updated alongside FSRS-6)
- **Venue:** Personal blog (expertium.github.io)
- **URL:** https://expertium.github.io/Benchmark.html
- **Relevance:** The narrative companion to the benchmark, comparing FSRS v3→v6, HLR, DASH, ACT-R, SM-2, and neural baselines on the `anki-revlogs-10k` dataset (~727M reviews, stated as ~3× the MaiMemo dataset and ~56× the Duolingo dataset). It reports headline superiority numbers — e.g., FSRS-6 with recency weighting has lower log loss than Anki SM-2 for **99.6% of users**, and FSRS-5 beats SM-2-trainable for ~97.4% — while explicitly cautioning that SM-2 was never designed to output probabilities, so its inclusion needs bolt-on conversion formulas and there is "no truly fair, no-caveats" SM-2-vs-FSRS comparison. It also explains why log loss (not RMSE-bins) is the optimizer's actual objective.
- **Quality of empirical comparison: 9/10** — same gold-standard data and metrics as the repo, with clear interpretation of who wins and the honest caveats; slightly subjective/blog format.

### 4. A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression)
- **Title:** A Trainable Spaced Repetition Model for Language Learning
- **Authors:** Burr Settles, Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of the Association for Computational Linguistics (ACL), pp. 1848–1858
- **URL / DOI:** https://doi.org/10.18653/v1/P16-1174 · PDF: https://research.duolingo.com/papers/settles.acl16.pdf · code/data: https://github.com/duolingo/halflife-regression
- **Relevance:** Introduces HLR and benchmarks it against Leitner, Pimsleur, and logistic regression on ~12.9M Duolingo practice sessions using MAE (recall-rate error), AUC, and Spearman correlation of estimated half-life. HLR **reduces recall-prediction error by 45%+ over the baselines** and improved daily Duolingo engagement by 12% in a live A/B test — the canonical "ML beats fixed-interval heuristics" result. Its weakness, exposed later by the Anki benchmark, is that HLR's log-linear half-life model underperforms FSRS's two/three-component memory model on Anki data (HLR log loss ≈ 0.469 vs FSRS ≈ 0.344).
- **Quality of empirical comparison: 8/10** — large real dataset, multiple metrics, live deployment test; loses points because baselines are weak (no SM-2/FSRS) and metric (MAE on recall rate) differs from the now-standard log loss.

### 5. A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (DHP / SSP-MMC)
- **Title:** A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling
- **Authors:** Junyao Ye, Jingyong Su, Yilong Cao
- **Year:** 2022
- **Venue:** Proceedings of the 28th ACM SIGKDD Conference (KDD '22), pp. 4381–4390
- **URL / DOI:** https://doi.org/10.1145/3534678.3539081 · code/data: https://github.com/maimemo/SSP-MMC
- **Relevance:** Introduces the **DHP (Difficulty-Half-life-P(recall)) memory model** — a direct ancestor of FSRS's stability/retrievability formulation — fit on 220M MaiMemo review logs, and the SSP-MMC scheduler that minimizes long-run review cost. It benchmarks DHP-based scheduling against state-of-the-art (including HLR-style and earlier MaiMemo methods) and reports a **12.6% improvement** over prior methods, validated in a deployed app serving millions. Relevance to the angle: it shows the memory-model lineage that FSRS later adopted and provides an independent (non-Anki) large-scale comparison point on recall prediction + cost.
- **Quality of empirical comparison: 9/10** — peer-reviewed, huge real dataset (220M), released data+code, both prediction and downstream-cost metrics; slightly less directly SM-2/FSRS-comparable since it uses MaiMemo's own baselines.

### 6. Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory (GRU-HLR / SSP-MMC-Plus)
- **Title:** Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory
- **Authors:** Jingyong Su, Junyao Ye, Liqiang Nie, Yilong Cao, Yongyong Chen
- **Year:** 2023
- **Venue:** IEEE Transactions on Knowledge and Data Engineering (TKDE), vol. 35(10), pp. 10085–10097
- **URL / DOI:** https://doi.org/10.1109/TKDE.2023.3251721 · code/data: https://github.com/maimemo/SSP-MMC-Plus
- **Relevance:** The journal extension of the KDD paper; it head-to-head compares memory models — HLR, DHP-HLR, and several **GRU-HLR** variants — on recall-prediction accuracy (MAE on P(recall), sMAPE on half-life). GRU-HLR with full history features wins, cutting MAE by **at least 64% vs HLR**, and the integrated predict-then-optimize framework reduces review cost by 17% over baselines. It contributes the first public spaced-repetition benchmark dataset *with time-series features* (220M rows), the same data philosophy that enabled the Anki benchmark, and demonstrates that recurrent models beat the log-linear HLR on calibration.
- **Quality of empirical comparison: 9/10** — peer-reviewed (TKDE), large dataset, multiple memory models compared on standard regression metrics, open data+code; main caveat is MAE/sMAPE rather than log loss.

### 7. Improving Students' Long-Term Knowledge Retention Through Personalized Review (DASH)
- **Title:** Improving Students' Long-Term Knowledge Retention Through Personalized Review
- **Authors:** Robert V. Lindsey, Jeffery D. Shroyer, Harold Pashler, Michael C. Mozer
- **Year:** 2014
- **Venue:** Psychological Science, 25(3), pp. 639–647
- **URL / DOI:** https://doi.org/10.1177/0956797613504302 · PDF: https://laplab.ucsd.edu/articles/LindseyShroyerPashlerMozer2014.pdf
- **Relevance:** Introduces the **DASH (Difficulty, Ability, Study History)** model — included as a competing family in the Anki SRS Benchmark — combining item-response theory with ACT-R/MCM forgetting curves. On ~600k middle-school review records, DASH variants beat baseline, IRT-only, and ACT-R-only ablations at predicting recall, showing both the difficulty/ability latent factors *and* the study-history dynamics are necessary. In a live semester-long classroom study, personalized DASH review yielded a **16.5% boost in retention over massed study and 10.0% over one-size-fits-all spacing** — strong evidence that personalized scheduling beats fixed schedules.
- **Quality of empirical comparison: 8/10** — rigorous ablations plus a real randomized classroom deployment; smaller/older dataset and not benchmarked against SM-2/FSRS directly (that happens later in the SRS Benchmark, where DASH lands mid-pack: log loss ~0.368).

### 8. Predicting and Improving Memory Retention: Psychological Theory Matters in the Big Data Era
- **Title:** Predicting and Improving Memory Retention: Psychological Theory Matters in the Big Data Era
- **Authors:** Michael C. Mozer, Robert V. Lindsey
- **Year:** 2016
- **Venue:** In M. N. Jones (Ed.), *Big Data in Cognitive Science* (Psychology Press), pp. 34–64
- **URL:** http://rob-lindsey.com/papers/2016/bigdata.pdf
- **Relevance:** The fuller exposition of the DASH model and its variants (DASH[ACT-R], DASH[MCM]), directly comparing data-driven (IRT/collaborative-filtering) vs theory-driven (ACT-R, Multiscale Context Model) approaches to recall prediction on large educational datasets. It establishes the central thesis relevant to the whole swarm — that purely data-driven models and purely theory-driven models each underperform a synthesis — which is precisely the design philosophy FSRS embodies. Useful for explaining *why* the mid-pack DASH results in the Anki benchmark look the way they do.
- **Quality of empirical comparison: 7/10** — thorough model-family comparison and clear ablation logic, but a book chapter rather than a fresh competitive benchmark, and not measured against SM-2/FSRS.

### 9. DRL-SRS: A Deep Reinforcement Learning Approach for Optimizing Spaced Repetition Scheduling
- **Title:** DRL-SRS: A Deep Reinforcement Learning Approach for Optimizing Spaced Repetition Scheduling
- **Authors:** Qinfeng Xiao, Jiani Wang, et al.
- **Year:** 2024
- **Venue:** Applied Sciences, 14(13), 5591 (MDPI)
- **URL / DOI:** https://doi.org/10.3390/app14135591 · https://www.mdpi.com/2076-3417/14/13/5591
- **Relevance:** A recent independent paper that proposes a transformer-based memory predictor (THLR) plus a deep-RL scheduler and benchmarks it against the MaiMemo/SSP-MMC lineage, HLR, and DHP on the public 220M-row MaiMemo dataset, reporting lower recall-prediction error and review cost. It is a useful "outside the FSRS ecosystem" data point showing the same trend — learned/recurrent memory models beat HLR and fixed heuristics — and that scheduling-as-optimal-control (SSP/RL) is the active research frontier. Its weakness is that, like the MaiMemo papers, it evaluates on language-vocabulary data rather than Anki's heterogeneous decks, limiting direct transfer to the SM-2/FSRS Anki comparison.
- **Quality of empirical comparison: 6/10** — peer-reviewed and uses a real large dataset with proper baselines, but narrower venue, single-domain data, and reproducibility is weaker than the open SRS Benchmark.

### 10. The History of FSRS for Anki (methodology / benchmark evolution)
- **Title:** The History of FSRS for Anki
- **Authors:** Jarrett Ye (L-M-Sherlock)
- **Year:** 2024
- **Venue:** LessWrong (long-form writeup)
- **URL:** https://www.lesswrong.com/posts/G7fpGCi8r7nCKXsQk/the-history-of-fsrs-for-anki
- **Relevance:** First-hand account of how the benchmark and its metrics evolved, documenting the key methodological insight that **calibration graphs are gameable, so log loss became the gold-standard metric**, and that RMSE(bins) was redesigned around an R-Matrix binning to be "hard to cheat, easy to read." It traces the empirical lineage from MaiMemo's DHP through FSRS v1→v4 and the first SRS Benchmark commit, and notes diminishing returns ("low-hanging fruit" exhausted) as later versions converge. Valuable context for *why* the benchmark is structured the way it is and how to read the head-to-head numbers honestly.
- **Quality of empirical comparison: 6/10** — not a comparison study itself, but the definitive primary-source narrative on benchmark methodology and its known weaknesses.

---

## Weaknesses exposed by the benchmarks (synthesis for the swarm)

1. **SM-2 isn't a predictor.** SM-2 outputs intervals, not P(recall); every benchmark must add conversion formulas to score it, so SM-2's poor benchmark numbers partly reflect this retrofit, not just algorithm quality. There is no fully fair SM-2-vs-FSRS comparison.
2. **Calibration metrics are gameable.** `RMSE-BINS-EXPLOIT` achieves a near-perfect RMSE(bins) (~0.013) with a catastrophic log loss (~4.6), proving why no single calibration metric can be trusted alone.
3. **Dataset dependence.** HLR "wins big" on Duolingo data but loses to FSRS on Anki data; MaiMemo models win on vocabulary data. Domain (single-language vocab vs heterogeneous Anki decks) strongly shapes rankings.
4. **Diminishing returns + accuracy-vs-deployability tradeoff.** Large neural nets (RWKV-P, log loss ~0.277) beat FSRS-7 (~0.344) on raw accuracy, but FSRS's ~21–35 trainable parameters are what make it deployable per-user inside Anki; the "best benchmark score" is not the shipped algorithm.
5. **No leakage ≠ no overfitting.** TimeSeriesSplit prevents future leakage, but per-user optimization on short histories and default-vs-optimized gaps (FSRS-7 default log loss 0.3629 vs optimized 0.3437) show personalization quality varies with data volume.


==================================================
SOURCE FILE: finders/finder-11-medical-education.md
==================================================
# Finder 11 — Anki in Medical Education

**Angle:** Empirical studies of Anki specifically in medical education (med students, USMLE, residency) — efficacy, retention outcomes, and observed limitations of its spaced-repetition algorithm in real-world use.

**Bottom line up front:** Anki's algorithm (a modified SM-2 in the period these studies cover) is one of the most widely adopted study tools in medical training. The empirical literature consistently shows a *positive, dose-dependent association* between Anki use and standardized exam scores (especially USMLE Step 1 and specialty in-service exams), but almost all of it is observational/cross-sectional and self-selected — so it demonstrates that *spaced retrieval works*, not that Anki's specific scheduling algorithm is optimal. Real-world weaknesses repeatedly surface: no benefit shown for clinically-reasoning-heavy exams (Step 2 CK), null results in short-duration or low-N cohorts, heavy review burden / "Anki treadmill," and confounding by motivation and total study time.

---

## Sources

### 1. Lu, Farhat & Beck Dallaghan (2021) — the canonical Anki–Step 1 study
- **Title:** Enhanced Learning and Retention of Medical Knowledge Using the Mobile Flash Card Application Anki
- **Authors:** Marvin Lu; Joseph H. Farhat; Gary L. Beck Dallaghan
- **Year:** 2021
- **Venue:** Medical Science Educator, 31(6):1975–1981
- **URL/DOI:** https://pubmed.ncbi.nlm.nih.gov/34956708/ · https://doi.org/10.1007/s40670-021-01386-9
- **Relevance:** Surveyed MS2–MS4 students who had taken Step 1 and found Anki users scored significantly higher than non-users (241.1 ± 13.2 vs. 235.5 ± 17.7; p = 0.012), with the most consistent users reaching ~248.7 (p < 0.001). Users also self-reported better retention and less relearning during dedicated study (χ² = 38.7, p < 0.001), showing the spaced-retrieval schedule "held" knowledge across months. Weakness in practice: purely cross-sectional and self-reported, so the dose-response likely reflects self-selection (more motivated / more study time) rather than proof the algorithm itself caused the gains.

### 2. Deng, Gluckstein & Larsen (2015) — the dose-response "1,700 cards = 1 point" study
- **Title:** Student-directed retrieval practice is a predictor of medical licensing examination performance
- **Authors:** Francis Deng; Jeffrey A. Gluckstein; Douglas P. Larsen
- **Year:** 2015 (erratum 2016)
- **Venue:** Perspectives on Medical Education, 4(6):308–313
- **URL/DOI:** https://pmc.ncbi.nlm.nih.gov/articles/PMC4673073/ · https://doi.org/10.1007/s40037-015-0220-x
- **Relevance:** In a 72-student multivariate model, *unique Anki flashcards seen* independently predicted Step 1 score (B = 5.9 × 10⁻⁴, p = 0.024) — roughly each additional 1,700 unique cards = +1 point — even after controlling for MCAT, grades, and test anxiety. Notably, commercial Firecracker flashcards did *not* predict Step 1, suggesting the benefit tracks with self-directed spaced retrieval volume rather than flashcards per se. Weakness: single institution, small N, observational; cannot separate the scheduling algorithm from sheer retrieval volume or learner motivation.

### 3. Wothe et al. / Satin group (2023) — Step 1 yes, Step 2 no, plus wellness
- **Title:** Academic and Wellness Outcomes Associated with Use of Anki Spaced Repetition Software in Medical School
- **Authors:** Jacob K. Wothe et al. (corresponding: David Satin), University of Minnesota
- **Year:** 2023
- **Venue:** Journal of Medical Education and Curricular Development, vol. 10
- **URL/DOI:** https://doi.org/10.1177/23821205231173289
- **Relevance:** Among 165 students, daily Anki use was associated with higher USMLE Step 1 scores (median 238 vs. 233.5; p = 0.039) and better self-reported sleep quality, but showed **no association with Step 2 CK** scores. This is a key real-world limitation signal: the algorithm's fact-retention strength maps onto fact-dense Step 1 but not the clinical-reasoning-heavy Step 2. The authors explicitly caution daily users may simply study more, and conclude Anki is beneficial but "not crucial."

### 4. Gilbert / Frommeyer et al. (2023) — objective embedded-stats cohort
- **Title:** A Cohort Study Assessing the Impact of Anki as a Spaced Repetition Tool on Academic Performance in Medical School
- **Authors:** Michael M. Gilbert; Timothy C. Frommeyer; Grant V. Brittain; et al.
- **Year:** 2023
- **Venue:** Medical Science Educator, 33:955–962
- **URL/DOI:** https://doi.org/10.1007/s40670-023-01826-8
- **Relevance:** Used Anki's own embedded usage statistics (not just self-report) for ~58% of a first-year class against in-house, NBME, and CBSE exams, finding significantly higher in-house (6.2–7.0%) and CBSE (~12.9%) scores among users. Strengthens the evidence base by tying objective review behavior to objective outcomes during the preclinical phase where the algorithm is most heavily used. Weakness: still observational within one institution and one academic year, with confounding by baseline ability and study time.

### 5. Maye et al. (2026) — systematic review & meta-analysis (strongest aggregate evidence)
- **Title:** The Effectiveness of Spaced Repetition in Medical Education: A Systematic Review and Meta-Analysis
- **Authors:** Maye et al.
- **Year:** 2026 (search conducted Feb 2025)
- **Venue:** The Clinical Teacher (ASME/Wiley), tct.70353
- **URL/DOI:** https://pubmed.ncbi.nlm.nih.gov/41601436/ · https://doi.org/10.1111/tct.70353
- **Relevance:** PRISMA meta-analysis of 13 studies / 21,415 learners found a large, significant pooled effect favoring spaced repetition over standard studying (SMD = 0.78; 95% CI 0.56–0.99; p < 0.0001), spanning Anki, emailed MCQs, and spaced classroom quizzes. This is the highest-quality quantitative confirmation that the *spacing principle underlying Anki's algorithm* improves objective test performance. Weakness it flags: included studies vary widely in design, and there is little evidence on optimal interval design or long-term/clinical-behavior outcomes — i.e., the spacing effect is proven but the specific scheduling parameters are not validated.

### 6. Anki Use and Academic Performance: Systematic Review (2026) — Anki-specific synthesis
- **Title:** Anki Use and Academic Performance in Medical Education: A Systematic Review of Evidence and Learning Theory
- **Authors:** (Med Sci Educ review team, 2026)
- **Year:** 2026
- **Venue:** Medical Science Educator
- **URL/DOI:** https://doi.org/10.1007/s40670-026-02643-5
- **Relevance:** Synthesizes 11 studies on Anki and UME performance, concluding regular use yields modest but consistent, dose-dependent gains (notably Step 1), while evidence for Step 2 CK and course exams is mixed. Crucially names the central methodological weakness: because Anki use was never randomized, the dose-response may reflect *self-selection* (higher baseline ability/motivation/time). It extends the picture across the training continuum (residency in-service, a 26,000-physician spaced-repetition RCT) to argue spaced retrieval has enduring value beyond board prep.

### 7. Kuperstock, Horný & Platt (2019) — residency in-service, with adjusted estimates
- **Title:** Mobile app technology is associated with improved otolaryngology resident in-service performance
- **Authors:** Jacob E. Kuperstock; Michal Horný; Michael P. Platt
- **Year:** 2019
- **Venue:** The Laryngoscope, 129(1):E15–E20
- **URL/DOI:** https://pubmed.ncbi.nlm.nih.gov/30151970/ · https://doi.org/10.1002/lary.27299
- **Relevance:** Tracked 11–12 ENT residents using a spaced-repetition question app for ~6 months; controlling for PGY and prior performance, usage improved overall in-service score by 2.92 pp (95% CI 0.14–5.70) and ~0.008 pp per minute of use, with large gains in allergy/pediatrics subsections. One of the few studies to *adjust for prior performance*, making the association more credible than raw cross-sectional comparisons. Weakness: tiny N and huge usage variance (3 to 1,020 minutes), so estimates are imprecise (level-4 evidence).

### 8. UNLV preclinical CBSE study (2025) — objective "matured cards" metric
- **Title:** Exploring the Impact of Spaced Repetition Through Anki Usage on Preclinical Exam Performance
- **Authors:** (Kirk Kerkorian School of Medicine, UNLV team)
- **Year:** 2025
- **Venue:** (PMC) PMC12357012
- **URL/DOI:** https://pmc.ncbi.nlm.nih.gov/articles/PMC12357012/
- **Relevance:** Used the Stat Scraper add-on to extract objective Anki metrics (matured cards >21-day interval, study hours, unsuspended cards) from 36 students and correlated them with CBSE scores; students with ≥9,390 matured cards scored 71.5 ± 10.7 vs. 60.0 ± 9.7 (p = 0.002). Directly ties the algorithm's *interval-maturation mechanic* (cards surviving to >21-day intervals = durable memory) to a standardized outcome. Weakness: very small, self-selected sample collected post-Step-1-pass/fail change, limiting generalizability.

### 9. Rocky Vista cohort / IJMS (2023) — a NULL result (important counter-evidence)
- **Title:** The Effect of Spaced Repetition Learning Through Anki on Medical Board Exam Performance
- **Authors:** (Rocky Vista University, Class of 2023 cohort)
- **Year:** 2023
- **Venue:** International Journal of Medical Students
- **URL/DOI:** https://ijms.info/IJMS/article/view/1549
- **Relevance:** Retrospective cohort (35 Anki vs. 268 non-Anki) found the Anki group had numerically higher mean Step 1 (223.7 vs. 222.6) and COMLEX Level 1 (569.5 vs. 560.0) and fewer Step 1 failures, but **none of the licensing-exam differences were statistically significant** — and the non-Anki group actually had a higher GPA (p < 0.01). A valuable corrective: when N is modest and confounders aren't controlled, the much-touted Anki advantage can vanish, suggesting reported effects elsewhere may be inflated by selection and publication bias.

### 10. Phillips et al. (2020) — scoping review situating Anki in spacing theory
- **Title:** Conceptualising spaced learning in health professions education: A scoping review
- **Authors:** Phillips et al. (HPE scoping-review team)
- **Year:** 2020
- **Venue:** Medical Education, 54(3)
- **URL/DOI:** https://doi.org/10.1111/medu.14025
- **Relevance:** Maps how "spaced learning" is defined and applied across health-professions education, grounding Anki-style tools in the Ebbinghaus spacing effect — "one of the most robust phenomena in the science of learning." Useful for the swarm because it separates the well-established *principle* (spacing/expanding intervals improve retention) from the under-studied *implementation details* (optimal interval length, algorithm parameters). Its weakness-relevant point: the field lacks consensus on optimal inter-study intervals, which is exactly the gap SM-2's fixed heuristics and FSRS's data-driven scheduling try to fill.

---

## Strength of real-world evidence about Anki's algorithm: **6 / 10**

**Why not higher:** The evidence that *spaced retrieval* improves medical-exam performance is strong and convergent (large meta-analytic SMD = 0.78; multiple positive cohorts; dose-response in Lu and Deng). For Anki *as a tool* in medical education, the evidence is consistent and multi-setting (UME, residency in-service).

**Why not lower / capped at 6:** Almost every Anki-specific study is observational, cross-sectional, single-institution, small-N, and reliant on self-report, with heavy confounding by motivation and total study time. There are explicit null results (Rocky Vista/IJMS; Step 2 CK across studies; Sun et al. psychiatry). Critically, *no study isolates Anki's scheduling algorithm itself* — they measure cards seen or minutes used, so they validate the spacing principle, not SM-2's (or FSRS's) specific interval math. Real-world weaknesses (review-burden "treadmill," no Step 2/clinical-reasoning benefit, self-selection) are well documented but rarely quantified rigorously.

---

## 5-LINE SUMMARY — TOP 3

1. Lu, Farhat & Beck Dallaghan (2021), *Enhanced Learning and Retention…Anki* — https://doi.org/10.1007/s40670-021-01386-9 — Score: 7/10
2. Maye et al. (2026), *Effectiveness of Spaced Repetition in Medical Education: Systematic Review & Meta-Analysis* (21,415 learners, SMD 0.78) — https://doi.org/10.1111/tct.70353 — Score: 8/10
3. Deng, Gluckstein & Larsen (2015), *Student-directed retrieval practice predicts licensing exam performance* (1,700 cards ≈ +1 Step 1 point) — https://doi.org/10.1007/s40037-015-0220-x — Score: 7/10


==================================================
SOURCE FILE: finders/finder-12-language-learning.md
==================================================
# Finder 12 — SRS in Language Learning

**Agent:** Finder 12 of 17 | **Angle:** Spaced repetition systems (SRS) in language/vocabulary learning — empirical efficacy studies of Anki, SuperMemo, Duolingo, Quizlet for vocabulary acquisition & retention, including limitations.

**Scope note:** This angle evaluates the SM-2 / FSRS / half-life-regression scheduling logic *as applied* to real vocabulary learners. The headline finding across the literature: spacing/SRS reliably beats massed practice for long-term retention (moderate-to-large effect sizes), but the *specific* scheduling algorithm matters less than (a) introducing spacing at all and (b) whether learners actually adhere to the schedule. Adherence, motivation, "review debt," and card-quality problems are the dominant real-world weaknesses, not the math.

---

## Sources

### 1. Enhancing L2 learning through a mobile assisted spaced-repetition tool: an effective but bitter pill?
- **Authors:** (Lin / Sun et al.) — published in *Computer Assisted Language Learning (CALL)*
- **Year:** 2019 (online 2018)
- **Venue:** Computer Assisted Language Learning (Taylor & Francis)
- **URL/DOI:** https://doi.org/10.1080/09588221.2018.1552975
- **Relevance (3 sentences):** A semester-long study of 62 university beginning-Spanish learners found a positive, dose-dependent relationship between days studied with Anki and end-of-semester L2 performance, even after controlling for baseline ability, motivation, and self-efficacy. The spaced-repetition scheduling helped by converting study time into durable long-term retention rather than short-term cramming gains. Crucial weakness: students were *reluctant* to use Anki and reported low enjoyment, exposing the central applied limitation that algorithmic optimality is undermined by poor adherence/affect.
- **Relevance rating:** 9/10

### 2. A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression / HLR)
- **Authors:** Burr Settles; Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of the Association for Computational Linguistics (ACL), pp. 1848–1858
- **URL/DOI:** https://doi.org/10.18653/v1/P16-1174 (PDF: https://aclanthology.org/P16-1174.pdf)
- **Relevance (3 sentences):** Introduces half-life regression, a trainable SRS that fits an exponential forgetting model `p = 2^(−Δ/h)` to 12M+ Duolingo sessions, reducing recall-prediction error 45%+ over Leitner/Pimsleur and lifting daily engagement 12% in a live experiment. It directly demonstrates *why* the hand-tuned heuristics behind SM-2 (1980s constants) are improvable: learned, data-driven half-lives schedule reviews better than fixed multipliers. Weakness noted by the authors and follow-ups: lexeme-tag features overfit difficult words and suffered cold-start problems, so the richer model had to be simplified for production — a caution that more complex scheduling does not automatically transfer.
- **Relevance rating:** 10/10

### 3. Effects of Expanding and Equal Spacing on Second Language Vocabulary Learning
- **Authors:** Tatsuya Nakata
- **Year:** 2015
- **Venue:** Studies in Second Language Acquisition (SSLA) 37(4), 677–711
- **URL/DOI:** https://doi.org/10.1017/S0272263114000825
- **Relevance (3 sentences):** 128 Japanese college students studied 20 English–Japanese word pairs under manipulated spacing *type* (expanding vs. equal) and *amount* (massed/short/medium/long), the first L2 study to find a statistically significant advantage for expanding spacing. The benefit of expanding intervals (the core assumption behind SM-2/FSRS-style growing intervals) was real but *small*, whereas simply introducing any spacing produced large effect sizes. Weakness for algorithm design: it suggests Anki's elaborate expanding-interval scheduling captures only marginal gains over much simpler equal spacing, questioning the payoff of scheduler complexity.
- **Relevance rating:** 9/10

### 4. A Meta-analysis Examining Technology-assisted L2 Vocabulary Learning
- **Authors:** (Lee, Warschauer & Lee / and colleagues)
- **Year:** 2022 (online 2021)
- **Venue:** ReCALL (Cambridge University Press)
- **URL/DOI:** https://doi.org/10.1017/S0958344021000239
- **Relevance (3 sentences):** Aggregating 34 studies (2,511 participants, 49 effect sizes), technology-assisted L2 vocabulary learning yielded a moderate overall effect (d = 0.64), with mobile-assisted (d = 0.85) outperforming computer-assisted (d = 0.46) delivery. Spacing/SRS-equipped tools helped most when target and first language were close and for college (vs. K-12) learners, indicating scheduling gains interact with learner and linguistic factors. Weakness: significant heterogeneity and the finding that *incidental* beat *intentional* instruction imply SRS flashcard drilling is not uniformly optimal across contexts.
- **Relevance rating:** 8/10

### 5. A Meta-analysis on Mobile-assisted Vocabulary Learning: Do Mobile Applications Help?
- **Authors:** (Bayesian meta-analysis team) — published in ReCALL
- **Year:** 2025
- **Venue:** ReCALL (Cambridge University Press)
- **URL/DOI:** https://doi.org/10.1017/S0958344025100335
- **Relevance (3 sentences):** A Bayesian synthesis of 65 (quasi-)experimental studies (2010–2024) found a large effect (≈1.28) for mobile vocabulary apps when treatment lasted 10+ weeks, with a sustained advantage in *delayed* retention versus conventional methods. This supports the SRS premise that repeated, spaced mobile exposure consolidates vocabulary into long-term memory over time. Weakness: the large effect was conditional on long treatment duration and only a few moderators were significant, implying short-term or low-adherence use yields much weaker, less reliable benefits.
- **Relevance rating:** 8/10

### 6. The Influence of Practice Distribution (1-day vs 7-day Spacing) on L2 Vocabulary Learning with Quizlet
- **Authors:** Muqaibal; Kasprowicz; Tissot
- **Year:** 2022 (University of Reading / CALL)
- **Venue:** Computer Assisted Language Learning (author final version, CentAUR repository)
- **URL/DOI:** https://centaur.reading.ac.uk/109724/1/Muqaibal_Kasprowicz_Tissot_AuthorFinal%20version.pdf
- **Relevance (3 sentences):** A high-ecological-validity classroom study of 96 low-proficiency Omani learners compared 1-day vs 7-day spacing of Quizlet practice against a test-only control on 34 target nouns. Both spaced groups significantly beat the control, but the 1-day and 7-day schedules performed *equally*, so the spacing *interval* did not mediate success. Weakness for adaptive schedulers: this null result for interval length suggests the precise inter-session gap (the variable FSRS/SM-2 optimize) may not matter much, and Quizlet's task-design features may drive gains more than the schedule.
- **Relevance rating:** 8/10

### 7. Effectiveness of Spaced Repetition Techniques for Vocabulary Acquisition for English Language Learners in the Maritime Industry
- **Authors:** (ESP/maritime English research team)
- **Year:** 2023
- **Venue:** (Maritime English / applied linguistics journal)
- **URL/DOI:** https://doi.org/10.54389/goja3394
- **Relevance (3 sentences):** A mixed-method pre/post/delayed-post design with 20 adult ESL maritime learners compared an Anki SRS group against a rote-memorization group. Rote learners matched or beat Anki on *immediate* exact-definition recall, but at the one-month delayed test the Anki group retained far more and showed deeper conceptual understanding, demonstrating spacing's transfer of words into long-term memory. Weakness: very small convenience sample limits generalizability, and rote's immediate-recall parity warns that SRS's advantage only emerges over delay, not for imminent tests.
- **Relevance rating:** 7/10

### 8. Recent Developments in Mobile-assisted Vocabulary Learning: A Mini Review of Studies Focusing on Digital Flashcards
- **Authors:** (MAVL review authors)
- **Year:** 2024
- **Venue:** Frontiers in Education
- **URL/DOI:** https://doi.org/10.3389/feduc.2024.1496578
- **Relevance (3 sentences):** This synthesis of recent EFL studies argues digital flashcards (with spaced repetition + gamification) promote learner autonomy, engagement, and long-term retention beyond paper flashcards and word lists. It frames the scheduling algorithm as one of several reinforcing features (alongside multimedia and gamification) that drive MAVL gains. Weakness explicitly flagged: a research gap on *productive* vocabulary use and true long-term retention, since most evidence concerns receptive recognition under short treatments.
- **Relevance rating:** 7/10

### 9. Investigating the Impact of Mobile-assisted Language Learning on Vocabulary Retention among Saudi EFL High School Students
- **Authors:** (Saudi EFL MALL research team)
- **Year:** 2024
- **Venue:** (peer-reviewed MALL journal)
- **URL/DOI:** https://doi.org/10.52710/cfs.323
- **Relevance (3 sentences):** A post-test-only randomized design with 120 students found the mobile vocabulary-app (spaced-repetition) group outscored a conventional-teaching control on both immediate and delayed post-tests, with a ~38% pre-to-post gain. The spaced-repetition scheduling is credited with revisiting terms at intervals that counter the forgetting curve, plus higher reported motivation. Weakness: post-test-only design (no pre-test equivalence check on the outcome) and self-reported motivation limit causal strength about the scheduler specifically.
- **Relevance rating:** 6/10

### 10. Spaced Repetition and Virtual Flashcards: MALL for English Vocabulary and Grammar (Anki, ESP)
- **Authors:** (ESP software-engineering EFL study)
- **Year:** 2025
- **Venue:** Pakistan Journal of Life and Social Sciences (PJLSS)
- **URL/DOI:** https://doi.org/10.57239/pjlss-2025-23.2.00188
- **Relevance (3 sentences):** A 6-week quasi-experiment (n=40) had an Anki group study daily vs a note-based control, with the Anki group gaining significantly more on low-frequency academic vocabulary, grammar accuracy, and immediate retention. Daily spaced reviews are credited with prioritizing rarely-seen specialist terms that conventional note-taking under-rehearses. Weakness explicitly admitted: *no delayed retention test* was administered, so the study measures only end-of-treatment retention — the weakest test of an SRS whose whole value is durability.
- **Relevance rating:** 6/10

---

## Cross-cutting weaknesses for the algorithm (applied-learning lens)
- **Adherence > optimality:** Source 1's "bitter pill" result and the well-known "review debt"/"Anki jail" phenomenon show the scheduler's theoretical efficiency is routinely defeated by learners abandoning the app. An algorithm that maximizes retention-per-review but maximizes drop-out is a net loss.
- **Interval precision is often marginal:** Sources 3 and 6 find expanding vs equal (and 1-day vs 7-day) spacing differences are small or null — questioning how much SM-2/FSRS's interval-tuning actually buys over naive spacing in real classrooms.
- **Receptive bias & card quality:** Sources 8 (and the broader literature) note most gains are for receptive recognition of isolated word-pairs; SRS does little for productive use, collocation, or context, and rewards "easy" recognition cards.
- **Delay-dependence:** Sources 7, 5, and 10 show SRS's advantage appears only at delayed testing and long treatment durations; for imminent exams, rote/massed practice can match it, and short studies (like #10, no delayed test) can't even detect the benefit.

---

## Return — Top 3 Summary
1. A Trainable Spaced Repetition Model for Language Learning (Settles & Meeder, 2016) — https://doi.org/10.18653/v1/P16-1174 — Score 10/10
2. Enhancing L2 learning through a mobile assisted spaced-repetition tool: an effective but bitter pill? — https://doi.org/10.1080/09588221.2018.1552975 — Score 9/10
3. Effects of Expanding and Equal Spacing on L2 Vocabulary Learning (Nakata, 2015) — https://doi.org/10.1017/S0272263114000825 — Score 9/10


==================================================
SOURCE FILE: finders/finder-13-neuroscience.md
==================================================
# Finder 13 — Memory Consolidation Neuroscience

**Swarm role:** Finder Agent 13 of 17. **Angle:** The neuroscience of memory consolidation that explains *why spacing works* — synaptic consolidation, sleep-dependent consolidation, and the spacing effect at the neural/cellular level.

**Why this matters for Anki:** Anki's schedulers (SM-2 and FSRS) are statistical curve-fitters: they model the *forgetting curve* and time each review to catch a memory just before it decays, then push the next interval out. They say nothing about the biology. This file documents the *mechanistic substrate* the algorithms are implicitly exploiting — the molecular, synaptic, systems-level, and sleep-dependent processes that make spaced, expanding-interval review biologically superior to massed cramming. This is the "WHY/HOW" at the level of neurons, and it also exposes biological constraints (protein-synthesis time windows, sleep dependence, consolidation timescales) that a purely behavioral algorithm ignores.

---

## Core mechanistic story (synthesis)

1. **Synaptic consolidation (minutes–hours).** A single learning event triggers early-phase LTP that decays within ~1–3 h unless it is converted to late-phase LTP via new gene transcription and protein synthesis, gated by the transcription factor **CREB** and the **MAPK/ERK** and **PKA** signaling cascades. These cascades have their own kinetics and refractory periods.
2. **The spacing rationale at the molecular level.** Massed repetition arrives while these cascades are still saturated/refractory (and while the CREB repressor still dominates), so extra trials add little. Spacing repetitions to match the cascade dynamics lets each trial re-engage CREB/ERK from a recovered baseline, crossing the threshold for protein-synthesis-dependent, structural (new-synapse) plasticity. Computational models even predict *irregular* optimal intervals — a direct mechanistic argument that fixed/naively-expanding schedules are not optimal.
3. **Synaptic tagging and capture (STC).** Induction sets a transient, protein-synthesis-independent "tag" at active synapses; plasticity-related proteins (PRPs) made cell-wide are then captured by tagged synapses to stabilize them. The tag decays in <~3 h, defining a biological time window in which a later (or earlier) strong event can rescue an otherwise-fading trace — a cellular basis for why repetitions must be timed, not just repeated.
4. **Systems consolidation (days–years).** Memories initially depend on the hippocampus, which gradually "trains" the neocortex via repeated reactivation until the trace becomes hippocampus-independent. Each successful spaced retrieval is another reactivation that advances this transfer.
5. **Sleep-dependent consolidation.** During slow-wave sleep, coupled slow oscillations, thalamocortical spindles, and hippocampal sharp-wave ripples replay and redistribute memories to cortex; REM supports synaptic consolidation. Sleep between spaced sessions is a major reason overnight gaps beat same-day repetition — a variable Anki's interval math does not explicitly represent.

---

## Sources

### 1. Smolen, Zhang & Byrne (2016) — "The right time to learn: mechanisms and optimization of spaced learning"
- **Authors:** Paul Smolen, Yili Zhang, John H. Byrne
- **Year / Venue:** 2016 — *Nature Reviews Neuroscience* 17(2):77–88
- **URL/DOI:** https://doi.org/10.1038/nrn.2015.18 (PMID: 26806627)
- **Relevance (mechanism / why spacing helps / caveats):** The single most on-target review — it dissects the cellular and molecular mechanisms of the spacing effect, showing that long inter-trial intervals outperform massed training because they synchronize with the dynamics of PKA/ERK→CREB signaling cascades that drive long-term synaptic change. It demonstrates via computational modeling that optimal inter-trial intervals are often *irregular* and cascade-dependent, predicting protocols that empirically enhance LTP and memory. **Caveat for scheduling:** it argues the brain's biochemistry implies non-uniform optimal spacing, which neither SM-2's simple multipliers nor FSRS's forgetting-curve fit explicitly model, and the optimal intervals are derived largely from cellular/animal systems that may not map cleanly onto multi-week human review.
- **Relevance score: 10/10**

### 2. Diekelmann & Born (2010) — "The memory function of sleep"
- **Authors:** Susanne Diekelmann, Jan Born
- **Year / Venue:** 2010 — *Nature Reviews Neuroscience* 11(2):114–126
- **URL/DOI:** https://doi.org/10.1038/nrn2762 (PMID: 20046194)
- **Relevance:** The canonical review of how sleep consolidates memory: SWS slow oscillations, spindles, and hippocampal ripples coordinate reactivation and redistribution of hippocampal memories to neocortex (systems consolidation), while REM supports synaptic consolidation. Explains *why spacing across days/nights helps* — the offline replay that stabilizes a trace happens preferentially during sleep, so inserting sleep between repetitions is mechanistically advantageous. **Caveat for scheduling:** consolidation gains depend on sleep quality/timing and are selective (reward- and future-relevant memories are prioritized), a biological dependency invisible to Anki, which assumes review timing alone governs retention.
- **Relevance score: 9/10**

### 3. Squire, Genzel, Wixted & Morris (2015) — "Memory Consolidation"
- **Authors:** Larry R. Squire, Lisa Genzel, John T. Wixted, Richard G. M. Morris
- **Year / Venue:** 2015 — *Cold Spring Harbor Perspectives in Biology* 7(8):a021766
- **URL/DOI:** https://doi.org/10.1101/cshperspect.a021766
- **Relevance:** Authoritative overview distinguishing fast synaptic consolidation from slow systems consolidation, in which the hippocampus guides gradual neocortical reorganization until memories become hippocampus-independent. Crucially notes that the *rate* of consolidation depends on preexisting knowledge ("schemas") and on neural replay during sharp-wave ripples — explaining why repeated spaced retrievals progressively stabilize a trace. **Caveat for scheduling:** systems consolidation unfolds over weeks-to-years and is content-dependent, so a one-size interval-growth rule cannot match the true, material-specific consolidation timescale.
- **Relevance score: 9/10**

### 4. Frey & Morris (1997) — "Synaptic tagging and long-term potentiation"
- **Authors:** Uwe Frey, Richard G. M. Morris
- **Year / Venue:** 1997 — *Nature* 385(6616):533–536
- **URL/DOI:** https://doi.org/10.1038/385533a0
- **Relevance:** Foundational experiment showing that weak stimulation (normally only early LTP) becomes lasting late LTP if a strong tetanus is applied to an independent input within a time window — evidence for a transient "synaptic tag" that captures cell-wide plasticity proteins. This gives a synapse-level mechanism for *why timing between events matters*: a fading trace can be rescued/stabilized if a later activation lands within the tag's lifetime. **Caveat for scheduling:** the tag decays in under ~3 hours in slices, a far shorter window than Anki's day-to-month intervals, so STC explains within-session/within-day dynamics more directly than long inter-review gaps.
- **Relevance score: 8/10**

### 5. Redondo & Morris (2011) — "Making memories last: the synaptic tagging and capture hypothesis"
- **Authors:** Roger L. Redondo, Richard G. M. Morris
- **Year / Venue:** 2011 — *Nature Reviews Neuroscience* 12(1):17–30
- **URL/DOI:** https://doi.org/10.1038/nrn2963
- **Relevance:** Updated review of STC, formalizing that potentiation creates only the *potential* for lasting change; persistence requires tag-setting plus availability of plasticity-related proteins, and these can be set by activity before or after induction ("late associativity"). Translates the cellular hypothesis to behavioral learning and memory persistence, bridging synapse-level timing to whole-organism retention. **Caveat for scheduling:** the framework is largely in-vitro/animal and the molecular identity of the tag remains uncertain, so it constrains *how* timing helps but does not yield concrete human review intervals.
- **Relevance score: 8/10**

### 6. Diekelmann, Wilhelm & Born (2009) — "The whats and whens of sleep-dependent memory consolidation"
- **Authors:** Susanne Diekelmann, Ines Wilhelm, Jan Born
- **Year / Venue:** 2009 — *Sleep Medicine Reviews* 13(5):309–321
- **URL/DOI:** https://doi.org/10.1016/j.smrv.2008.08.002
- **Relevance:** Reviews the conditions under which sleep aids memory: SWS especially benefits *declarative* memory (the kind most Anki users target), the benefit is larger for *weakly* encoded and explicitly encoded items, and even short sleep (1–2 h) helps declarative recall. Directly supports interleaving sleep between spaced repetitions and predicts that newly learned, fragile cards gain the most from a post-study sleep. **Caveat for scheduling:** benefits are modulated by learning type, retrieval test, reward expectation, and population (impaired in elderly/psychiatric groups), so sleep-driven gains are not a uniform constant the algorithm can assume.
- **Relevance score: 8/10**

### 7. Callan & Schweighofer (2010) — "Neural correlates of the spacing effect in explicit verbal semantic encoding support the deficient-processing theory"
- **Authors:** Daniel E. Callan, Nicolas Schweighofer
- **Year / Venue:** 2010 — *Human Brain Mapping* 31(4):645–659
- **URL/DOI:** https://doi.org/10.1002/hbm.20894
- **Relevance:** Human fMRI vocabulary-learning study (paired-associate, spaced vs. massed) showing spaced presentations recruit greater encoding-related activity in the left frontal operculum, while massed presentations show *repetition suppression* (declining activity across repeats). Provides a human, neuroimaging mechanism — "deficient processing" of massed repetitions — for why cramming under-encodes, exactly the failure mode spaced review avoids. **Caveat for scheduling:** it addresses short-timescale encoding effects within a session, not the multi-day interval optimization that Anki actually performs.
- **Relevance score: 8/10**

### 8. Li & Yang (2020) — "Role of the hippocampus in the spacing effect during memory retrieval"
- **Authors:** Cuihong Li, Jiongjiong Yang
- **Year / Venue:** 2020 — *Hippocampus* 30(8) (first published 5 Feb 2020)
- **URL/DOI:** https://doi.org/10.1002/hipo.23193 (PMID: 32022387)
- **Relevance:** fMRI study with realistic Anki-like timing (face–scene pairs repeated 6× massed vs. distributed; tested at 20 min, 1 day, and 1 month) showing the left/posterior hippocampus is more strongly engaged during successful retrieval after distributed than massed learning, especially at the 1-month interval. Demonstrates at the systems level that the spacing advantage is hippocampally mediated and *grows with retention interval* — supporting expanding-interval scheduling. **Caveat for scheduling:** correlational neuroimaging in healthy adults; it shows hippocampal involvement but does not pin down the *optimal* interval function.
- **Relevance score: 8/10**

### 9. Yang, Huang, Yang, Fan & Yin (2025) — "Time-dependent consolidation mechanisms of durable memory in spaced learning"
- **Authors:** Yifeixue Yang, Ziyi Huang, Yun Yang, Mingxia Fan, Dazhi Yin
- **Year / Venue:** 2025 — *Communications Biology* 8(1):535
- **URL/DOI:** https://doi.org/10.1038/s42003-025-07964-6 (PMID: 40169798)
- **Relevance:** Recent fMRI study (48 participants, 3-day spaced vs. 1-day massed; tested immediate, 1-week, 1-month) using representational-similarity analysis to show spaced learning raises neural pattern similarity and *replay* in default-mode-network subsystems, and that DMN (not hippocampal) integration predicts which memories survive to 1 month. Mechanistically links durable, long-interval retention to time-dependent cortical integration/replay — the exact "durability" Anki's long intervals aim to produce. **Caveat for scheduling:** emphasizes that *delay timescale* drives durability via cortical reorganization, implying fixed multiplicative interval rules may misalign with the nonlinear consolidation trajectory.
- **Relevance score: 8/10**

---

## Bottom line for the swarm
The biology gives a coherent four-tier "why" for spacing that SM-2/FSRS exploit blindly: (a) molecular cascades (CREB/ERK/PKA) need recovery time between trials, (b) synaptic tags create finite windows for stabilization, (c) hippocampus→neocortex systems consolidation needs repeated reactivations over days–years, and (d) sleep-dependent replay does much of the stabilization offline. **Key weaknesses this exposes in Anki's algorithms:** they model only behavioral forgetting curves and ignore (1) that biologically optimal intervals may be *irregular* rather than smoothly expanding (Smolen 2016), (2) sleep as a first-class scheduling variable (Diekelmann & Born), and (3) material- and schema-dependent consolidation rates (Squire 2015) — i.e., the curve fit is a useful proxy for, but not a model of, the underlying neural consolidation machinery.


==================================================
SOURCE FILE: finders/finder-14-leitner-lineage.md
==================================================
# Finder 14 — Leitner & Scheduling Lineage

**Agent:** Finder 14 of 17 | **Angle:** The historical & algorithmic lineage of flashcard scheduling — the Leitner system, expanding retrieval scheduling, and early algorithmic SRS that preceded/inspired SM-2 and Anki.

**Scope:** This document traces the intellectual ancestry of Anki's scheduler. Anki implements a modified SM-2 (Wozniak, 1987) and, since 2021, optionally FSRS. SM-2 did not appear from nowhere: it sits at the end of a ~100-year chain — Ebbinghaus's forgetting curve (1885) → the spacing/distributed-practice effect → Pimsleur's "graduated interval recall" (1967) → Leitner's physical box system (1972) → Landauer & Bjork's expanding-retrieval evidence (1978) → Wozniak's computerized optimal-interval algorithms (1985–1994). Later work (Cepeda 2006 meta-analysis; Pavlik & Anderson 2005 ACT-R model; Karpicke & Roediger 2007 critique) both validates and complicates the "expanding interval" assumption baked into SM-2/Leitner, which is why FSRS exists.

---

## Sources

### 1. Ebbinghaus, H. — *Memory: A Contribution to Experimental Psychology* (Über das Gedächtnis)
- **Authors:** Hermann Ebbinghaus (trans. Ruger & Bussenius, 1913)
- **Year:** 1885 (English translation 1913)
- **Venue:** Monograph, Leipzig: Duncker & Humblot; English ed. Teachers College, Columbia University
- **URL/DOI:** https://psycnet.apa.org/fulltext/2004-16275-000-FRM.pdf | Classics introduction: https://www.yorku.ca/pclassic/Ebbinghaus/wozniak.htm
- **Relevance (mechanism / SM-2 link / weakness):** Using nonsense syllables and the "savings method," Ebbinghaus established the *forgetting curve* (retention decays sharply then levels off) and the *distributed-practice effect* (spacing repetitions beats massing them). This is the root assumption every later scheduler encodes: review just before forgetting. The work is the empirical bedrock SM-2 optimizes against — but its weakness is that it is a single-subject self-experiment on meaningless material, so the exact curve shape and parameters don't transfer cleanly to real flashcards, a gap SM-2's fixed formula inherits.
- **Relevance score:** 7/10

### 2. Pimsleur, P. — "A Memory Schedule"
- **Authors:** Paul Pimsleur (Ohio State University)
- **Year:** 1967
- **Venue:** *The Modern Language Journal*, Vol. 51, No. 2, pp. 73–75
- **URL/DOI:** https://doi.org/10.1111/j.1540-4781.1967.tb06700.x | ERIC: https://eric.ed.gov/?id=ED012150 | PDF: https://files.eric.ed.gov/fulltext/ED012150.pdf
- **Relevance (mechanism / SM-2 link / weakness):** Pimsleur proposed "graduated interval recall," an explicitly *exponential* review schedule (e.g., intervals multiplying by ~5: 5s, 25s, 2min, 10min, … days, months, years) designed to re-expose an item just as recall probability drops toward ~60%. This is arguably the first published *algorithmic* (formula-driven) spacing schedule and a direct conceptual predecessor of SM-2's geometric interval growth `I(n)=I(n-1)·EF`. Its weakness is that the schedule is fixed and item-agnostic — every item follows the same curve regardless of difficulty or the learner's actual performance, exactly the rigidity SM-2 later softened with the per-item E-Factor.
- **Relevance score:** 9/10

### 3. Leitner, S. — *So lernt man lernen: Der Weg zum Erfolg* (How to Learn to Learn)
- **Authors:** Sebastian Leitner
- **Year:** 1972 (Herder Verlag, Freiburg; ISBN 3-451-05060-9)
- **Venue:** Popular non-fiction book; system documented in English at the Leitner-system encyclopedia entry
- **URL/DOI:** https://en.wikipedia.org/wiki/Leitner_system | Author: https://en.wikipedia.org/wiki/Sebastian_Leitner
- **Relevance (mechanism / SM-2 link / weakness):** Leitner formalized spaced repetition as a *physical box algorithm*: cards live in numbered compartments; a correct answer promotes a card to a less-frequently-reviewed box, an incorrect answer demotes it to Box 1, so review effort concentrates on weak items. This box-promotion logic is the direct conceptual ancestor of SM-2/Anki — Anki's "learning steps" and graduated/ease behavior are a continuous-valued generalization of discrete Leitner boxes. Its weaknesses are coarse, discrete intervals (originally governed by physical partition sizes 1/2/5/8/14 cm rather than a memory model), no per-item difficulty estimate, and binary correct/incorrect grading — limitations SM-2 addressed with the 0–5 quality grade and E-Factor.
- **Relevance score:** 10/10

### 4. Landauer, T. K., & Bjork, R. A. — "Optimum Rehearsal Patterns and Name Learning"
- **Authors:** Thomas K. Landauer, Robert A. Bjork
- **Year:** 1978
- **Venue:** In Gruneberg, Morris & Sykes (Eds.), *Practical Aspects of Memory*, pp. 625–632. London: Academic Press
- **URL/DOI:** Scanned original: https://gwern.net/doc/psychology/spaced-repetition/1978-landauer.pdf | Citation: https://link.springer.com/article/10.3758/s13423-014-0636-z
- **Relevance (mechanism / SM-2 link / weakness):** This is the canonical experimental demonstration that an *expanding* retrieval schedule (immediate first test, then successively longer gaps) beats uniform spacing for test-type practice, with a single presentation + four expanding tests outperforming five massed presentations. It provided the cognitive-science justification for the increasing intervals that Pimsleur, Leitner, and SM-2 all use. Its weakness — later exposed by Karpicke & Roediger (#9) — is that the "expanding is optimal" finding was short-retention-interval and lab-bound; over longer intervals equal spacing can match or beat it, undermining a core SM-2/Leitner assumption.
- **Relevance score:** 9/10

### 5. Woźniak, P. — "SuperMemo 2: Algorithm" (Algorithm SM-2)
- **Authors:** Piotr A. Woźniak
- **Year:** 1987 (program); algorithm description published 1990 / archived online
- **Venue:** SuperMemo / super-memory.org technical documentation
- **URL/DOI:** https://www.super-memory.org/archive/english/ol/sm2.htm | Blog: https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method
- **Relevance (mechanism / SM-2 link / weakness):** The primary-source specification of the exact algorithm Anki adopted: per-item E-Factor updated by a 0–5 self-graded quality `EF' = EF + (0.1 − (5−q)(0.08 + (5−q)0.02))` (floored at 1.3), intervals `I(1)=1, I(2)=6, I(n)=I(n−1)·EF`, and a full reset on lapse (q<3). This is the bridge document — it shows precisely how Leitner-style promotion plus Pimsleur-style geometric growth were merged into a computable per-item rule. Its acknowledged weaknesses (constructed by trial-and-error, no true forgetting-curve fit, harsh lapse reset, hand-tuned constants) are exactly the deficiencies FSRS was built to fix.
- **Relevance score:** 10/10

### 6. Woźniak, P. A., & Gorzelańczyk, E. J. — "Optimization of Repetition Spacing in the Practice of Learning"
- **Authors:** Piotr A. Woźniak, Edward J. Gorzelańczyk
- **Year:** 1994
- **Venue:** *Acta Neurobiologiae Experimentalis*, 54(1), 59–62 (PMID: 8023714)
- **URL/DOI:** https://doi.org/10.55782/ane-1994-1003 | Journal: https://ane.pl/index.php/ane/article/view/1003 | Europe PMC: https://europepmc.org/article/med/8023714
- **Relevance (mechanism / SM-2 link / weakness):** The first *peer-reviewed* spaced-repetition algorithm publication; it formalizes the Optimal Factor (OF) matrix indexed by easiness factor and repetition number, optimized to hold knowledge retention at ~95%. It is the scientific maturation of SM-2 (toward SM-5/SM-6) and demonstrates the move from a static EF formula to a *data-driven, adaptive* interval table — the same direction FSRS later took with machine learning. Its weakness is the strong paired-associate, single-target-retention (95%) framing and reliance on self-reported grades, which limits generality and remains a quality-of-input problem in all SM-2 descendants including Anki.
- **Relevance score:** 8/10

### 7. Pavlik, P. I., Jr., & Anderson, J. R. — "Practice and Forgetting Effects on Vocabulary Memory: An Activation-Based Model of the Spacing Effect"
- **Authors:** Philip I. Pavlik Jr., John R. Anderson (Carnegie Mellon)
- **Year:** 2005
- **Venue:** *Cognitive Science*, 29(4), 559–586
- **URL/DOI:** https://doi.org/10.1207/s15516709cog0000_14 | PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/409s15516709cog0000_14.pdf
- **Relevance (mechanism / SM-2 link / weakness):** Embeds the spacing effect in the ACT-R declarative-memory architecture: each practice lays a trace that decays as a power function of time, and crucially the *decay rate depends on the item's activation at the moment of practice* — explaining why widely spaced practice produces more durable memory. This is the principled, mechanistic memory model SM-2 lacks, and its descendants (Pavlik & Anderson 2008's optimal-schedule algorithm; later half-life regression and FSRS's DSR model) are what eventually displaced SM-2's hand-tuned heuristics. Its "weakness" relative to the lineage is that it predicts *contracting* (not expanding) optimal spacing under some parameters, directly challenging the expanding-interval orthodoxy SM-2 inherited from Leitner/Landauer-Bjork.
- **Relevance score:** 8/10

### 8. Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. — "Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis"
- **Authors:** Nicholas J. Cepeda, Harold Pashler, Edward Vul, John T. Wixted, Doug Rohrer
- **Year:** 2006
- **Venue:** *Psychological Bulletin*, 132(3), 354–380
- **URL/DOI:** https://doi.org/10.1037/0033-2909.132.3.354 | PDF: https://www.yorku.ca/ncepeda/publications/CPVWR2006.pdf
- **Relevance (mechanism / SM-2 link / weakness):** A meta-analysis of 839 assessments across 317 experiments establishing that the spacing/lag benefit is real and large, and that the *optimal inter-study interval scales with the desired retention interval* (the optimal gap grows the longer you want to remember). This quantifies the relationship SM-2 only approximates with its fixed multiplier and gives FSRS its empirical target (interval as a function of desired retention). Its caution for the lineage: it shows no single fixed schedule (Pimsleur/Leitner/SM-2 style) can be optimal across retention goals, since the best gap depends on how long you need to retain — a fundamental limit of SM-2's one-size interval growth.
- **Relevance score:** 8/10

### 9. Karpicke, J. D., & Roediger, H. L., III — "Expanding Retrieval Practice Promotes Short-Term Retention, but Equally Spaced Retrieval Enhances Long-Term Retention"
- **Authors:** Jeffrey D. Karpicke, Henry L. Roediger III
- **Year:** 2007
- **Venue:** *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 33(4), 704–719
- **URL/DOI:** https://learninglab.psych.purdue.edu/downloads/2007/2007_Karpicke_Roediger_JEPLMC.pdf
- **Relevance (mechanism / SM-2 link / weakness):** Directly tests the Landauer & Bjork (1978) expanding-retrieval claim and finds that expanding schedules help short-term (10-min) retention but *equal spacing wins at 2 days*; what matters most is delaying the first test to make initial retrieval difficult ("desirable difficulty"). This is the key *weakness paper* for the whole lineage: it shows the expanding-interval principle baked into Leitner boxes and SM-2 is not universally optimal, and that retrieval difficulty/timing of the first test matters more than the expanding pattern itself. It motivates adaptive, retrievability-targeting schedulers (FSRS) over fixed-multiplier expansion.
- **Relevance score:** 8/10

---

## Lineage summary (how it feeds SM-2 / Anki)

```
Ebbinghaus 1885 (forgetting curve, spacing effect)
        │
        ├─ Pimsleur 1967 (graduated interval recall: first exponential formula)
        ├─ Leitner 1972 (physical box promotion/demotion algorithm)
        ├─ Landauer & Bjork 1978 (evidence: expanding retrieval is optimal)
        │
        ▼
Wozniak SM-0 (1985, paper) → SM-2 (1987, computerized; E-Factor + geometric intervals)  ← ADOPTED BY ANKI
        │
        ├─ Wozniak & Gorzelanczyk 1994 (peer-reviewed OF matrix, adaptive intervals → SM-5/6/17)
        │
        ▼
Modern critiques / models that expose SM-2 weaknesses and motivate FSRS:
        ├─ Pavlik & Anderson 2005 (ACT-R activation model; mechanistic, sometimes contracting spacing)
        ├─ Cepeda et al. 2006 (optimal gap depends on target retention interval)
        └─ Karpicke & Roediger 2007 (equal spacing > expanding for long-term; first-test difficulty matters)
```

**Key weaknesses of the inherited lineage that Anki/SM-2 carry forward:** (1) fixed multiplicative interval growth assumes one expansion pattern fits all items and all retention goals (contradicted by Cepeda 2006); (2) the "expanding is best" axiom from Landauer & Bjork is only short-term true (Karpicke & Roediger 2007); (3) SM-2 has no real forgetting-curve/memory model and uses hand-tuned constants and a harsh full-reset-on-lapse (Wozniak 1987), whereas principled models (Pavlik & Anderson 2005; later DSR/FSRS) fit memory dynamics from data; (4) all of these depend on noisy self-graded recall as input.


==================================================
SOURCE FILE: finders/finder-15-knowledge-tracing.md
==================================================
# Finder 15 — Knowledge Tracing & Adaptive Learning

**Swarm role:** Finder Agent 15 of 17. Collective goal: explain exactly what Anki's algorithm (SM-2 / FSRS spaced repetition) does, why/how, and its weaknesses.

**My angle:** Intelligent tutoring systems (ITS), adaptive learning, and knowledge tracing (KT) that schedule practice — Bayesian Knowledge Tracing (BKT), Deep Knowledge Tracing (DKT), and their descendants — and how each models *learning* and *forgetting* relative to spaced-repetition scheduling (SRS).

---

## Framing: how this literature relates to Anki / SM-2 / FSRS

Anki's schedulers are **memory models with a control policy bolted on**: SM-2 is a hand-tuned heuristic (ease factor × interval), and FSRS is a fitted model of memory stability/retrievability (DSR) that picks the next interval to hit a target retention probability. The knowledge-tracing / ITS literature attacks the *same two sub-problems* from a different research tradition:

1. **Estimation** — infer a latent "do they know it / will they recall it" state from a history of graded attempts (BKT's `P(L)`, DKT's hidden state, logistic models' recall probability). This is the analogue of FSRS's retrievability estimate.
2. **Control / scheduling** — decide *what* and *when* to practice next (mastery thresholds in ITS; optimal-interval computation in spacing models). This is the analogue of Anki picking the next due date.

The key contrast: **classic ITS/KT (BKT, DKT) optimizes *mastery within a session/course* and historically ignored the time axis and forgetting**, whereas **SRS (SM-2/FSRS) is built entirely around the forgetting curve and elapsed time**. The most relevant papers below are exactly the ones that try to *re-inject forgetting and time-gaps* into knowledge tracing (DKT-Forget, DASH, DAS3H, HLR) — these are the conceptual bridge between knowledge tracing and Anki-style scheduling.

---

## Sources

### 1. Knowledge Tracing: Modeling the Acquisition of Procedural Knowledge (canonical BKT)
- **Authors:** Albert T. Corbett, John R. Anderson
- **Year:** 1994
- **Venue:** *User Modeling and User-Adapted Interaction*, 4(4), 253–278
- **URL/DOI:** https://doi.org/10.1007/BF01099821
- **Relevance (3 sentences):** Introduces Bayesian Knowledge Tracing, a two-state hidden Markov model that tracks a latent binary "mastered / not-mastered" state per skill and updates the posterior probability of mastery after each correct/incorrect response using four parameters (prior knowledge `P(L0)`, learn `P(T)`, guess `P(G)`, slip `P(S)`); the ACT Programming Tutor then keeps presenting exercises until estimated mastery crosses a threshold (~0.95), making this an *estimation + mastery-threshold scheduling* engine. Relative to SRS, BKT decides *whether to keep drilling now* rather than *when to review later*: its transition matrix is constrained so mastery is effectively one-way, meaning **the standard model has no forgetting term and no notion of elapsed time** — the opposite of Anki's forgetting-curve core. Weakness: no decay/time-gap modeling, parameter "identifiability" problems (different parameter sets fit equally well, some psychologically implausible), and a single binary skill state that cannot represent partial or graded memory strength the way FSRS's continuous stability does.
- **Relevance to algorithmic scheduling of practice: 8/10**

### 2. Deep Knowledge Tracing (DKT)
- **Authors:** Chris Piech, Jonathan Bassen, Jonathan Huang, Surya Ganguli, Mehran Sahami, Leonidas Guibas, Jascha Sohl-Dickstein
- **Year:** 2015
- **Venue:** *Advances in Neural Information Processing Systems (NeurIPS/NIPS) 28*
- **URL/DOI:** https://proceedings.neurips.cc/paper/2015/file/bac9162b47c56fc8a4d2a519803d51b3-Paper.pdf (arXiv: https://doi.org/10.48550/arXiv.1506.05908)
- **Relevance (3 sentences):** Replaces BKT's hand-specified HMM with a recurrent neural network (LSTM) whose hidden state is a distributed, high-dimensional summary of the entire interaction sequence, predicting the probability of a correct answer on each next exercise without requiring human-annotated skill tags. For scheduling, the paper explicitly proposes using the learned model for *intelligent curriculum design* — choosing the next item to maximize expected knowledge gain — which is the same "what to practice next" decision Anki/FSRS make, though DKT operates over exercise sequences rather than wall-clock review intervals. Weaknesses: vanilla DKT consumes only the *order* of interactions and ignores real elapsed time, so it does not natively model forgetting between sessions; it is also a black box (poor interpretability) and was later shown to sometimes produce inconsistent/non-monotonic predictions, motivating the forgetting-aware and attentive variants below.
- **Relevance to algorithmic scheduling of practice: 8/10**

### 3. How Deep is Knowledge Tracing? (critical BKT-vs-DKT analysis)
- **Authors:** Mohammad Khajah, Robert V. Lindsey, Michael C. Mozer
- **Year:** 2016
- **Venue:** *Proceedings of the 9th International Conference on Educational Data Mining (EDM 2016)*, 94–101 (Best Paper)
- **URL/DOI:** https://www.educationaldatamining.org/EDM2016/proceedings/paper_144.pdf (arXiv: https://arxiv.org/abs/1604.02416)
- **Relevance (3 sentences):** Dissects *why* DKT beats BKT and identifies four statistical regularities DKT exploits — **recency effects, contextualized trial sequence, inter-skill similarity, and individual student ability** — then shows that adding these (including a **forgetting/recency term**) to BKT closes the gap, so DKT's edge is flexibility, not "deep" representation discovery. This directly informs SRS design: it isolates recency/forgetting and per-learner ability as the highest-value signals for predicting recall, which are precisely the levers FSRS adds on top of SM-2. Weakness it exposes: pure mastery-style KT models systematically *under-use the time/forgetting dimension*, and gains from "deep" models can be matched by interpretable models — a caution against over-engineering schedulers when a well-specified memory model suffices.
- **Relevance to algorithmic scheduling of practice: 7/10**

### 4. Augmenting Knowledge Tracing by Considering Forgetting Behavior (DKT-Forget)
- **Authors:** Koki Nagatani, Qian Zhang, Masahiro Sato, Yan-Ying Chen, Francine Chen, Tomoko Ohkuma
- **Year:** 2019
- **Venue:** *The World Wide Web Conference (WWW '19)*, 3101–3107
- **URL/DOI:** https://doi.org/10.1145/3308558.3313565
- **Relevance (3 sentences):** Extends DKT by feeding it explicit forgetting features — the **lag time since the previous interaction, the lag time since the last interaction with the same skill, and the number of past attempts** — so the network can lower its recall estimate as time passes, directly importing the forgetting curve into a neural KT model. This is the closest KT analogue to Anki's core mechanic: recall probability decays with elapsed time and is reset/strengthened by repetition, which is exactly what determines an SRS interval. Weakness: it improves *prediction* of recall but stops short of deriving an optimal review schedule (no explicit interval-optimization or target-retention policy), and like DKT it remains a black box whose decay behavior is learned implicitly rather than as an interpretable stability/half-life parameter.
- **Relevance to algorithmic scheduling of practice: 8/10**

### 5. Using a Model to Compute the Optimal Schedule of Practice (ACT-R spacing optimizer)
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** *Journal of Experimental Psychology: Applied*, 14(2), 101–117
- **URL/DOI:** https://doi.org/10.1037/1076-898X.14.2.101
- **Relevance (3 sentences):** Uses the ACT-R declarative-memory activation equations (which model the spacing effect, recency, and frequency) to compute, item by item, the spacing interval that **maximizes long-term memory gain per unit of study time** — an explicit, model-derived scheduling algorithm rather than a heuristic. This is the cognitive-science twin of FSRS: a fitted forgetting model used to choose review timing, and it formalizes the same trade-off Anki faces (space too soon = wasted time; space too late = lapse), even showing the optimal interval should expand as an item stabilizes (the expanding-interval principle behind SM-2). Weakness: it requires fitting ACT-R parameters and assumes a particular activation/decay functional form, is computationally heavier than SM-2's arithmetic, and was validated on lab vocabulary rather than the long, heterogeneous decks Anki users maintain.
- **Relevance to algorithmic scheduling of practice: 9/10**

### 6. Improving Students' Long-Term Knowledge Retention Through Personalized Review (DASH)
- **Authors:** Robert V. Lindsey, Jeffery D. Shroyer, Harold Pashler, Michael C. Mozer
- **Year:** 2014
- **Venue:** *Psychological Science*, 25(3), 639–647
- **URL/DOI:** https://doi.org/10.1177/0956797613504302
- **Relevance (3 sentences):** Introduces **DASH (Difficulty, Ability, Study History)**, a model that combines a psychological theory of memory/forgetting with Bayesian inference of per-student and per-item differences to produce a *personalized* spaced-review schedule, then proves it in a real semester-long middle-school language course. It is a direct empirical demonstration that model-driven, individualized scheduling beats one-size-fits-all spacing (a +10% retention gain over a generic spaced scheduler, +16.5% over massed study) — strong external validation of the premise behind FSRS's per-user/per-card fitting versus SM-2's fixed formula. Weakness relative to Anki: DASH (in this form) models flashcard-style memorization and per-item history, and was later shown to need extension to handle items that exercise *multiple* skills (addressed by DAS3H below).
- **Relevance to algorithmic scheduling of practice: 9/10**

### 7. DAS3H: Modeling Student Learning and Forgetting for Optimally Scheduling Distributed Practice of Skills
- **Authors:** Benoît Choffin, Fabrice Popineau, Yolaine Bourda, Jill-Jênn Vie
- **Year:** 2019
- **Venue:** *Proceedings of the 12th International Conference on Educational Data Mining (EDM 2019)*
- **URL/DOI:** https://arxiv.org/abs/1905.06873 (EDM: https://files.eric.ed.gov/fulltext/ED599174.pdf)
- **Relevance (3 sentences):** Generalizes DASH into a logistic "Knowledge Tracing Machines" model (item difficulty, student ability, skill easiness, plus time-window counts of prior wins/attempts) that lets **learning and forgetting curves differ per skill** and handles items tagged with multiple skills — explicitly framed as building an adaptive, personalized *distributed-practice (spaced-repetition) scheduler*. It is arguably the tightest fusion of knowledge tracing and SRS in this list: it keeps the interpretability of logistic memory models while modeling decay through time-windowed practice features, the same information FSRS encodes as stability. Weakness: it predicts recall well but, as the authors note, the *item-selection/scheduling policy* on top of the model is left as future work, and binning practice into time windows is a coarser representation of forgetting than a continuous stability/half-life function.
- **Relevance to algorithmic scheduling of practice: 9/10**

### 8. A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression, Duolingo)
- **Authors:** Burr Settles, Brendan Meeder
- **Year:** 2016
- **Venue:** *Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (ACL 2016)*, 1848–1858
- **URL/DOI:** https://doi.org/10.18653/v1/P16-1174 (PDF: https://aclanthology.org/P16-1174.pdf)
- **Relevance (3 sentences):** Proposes **Half-Life Regression (HLR)**, which directly estimates the *half-life* of an item in memory (recall probability = 2^(−Δ/half-life)) and learns the half-life as a log-linear function of practice-history and lexical features via gradient descent — a trainable, data-driven generalization of Leitner/Pimsleur spacing deployed in Duolingo's production scheduler. This is the industrial SRS counterpart to FSRS: an explicit, fitted forgetting-curve model (exponential decay with elapsed time) used to schedule reviews, validated at scale (45%+ lower recall-prediction error and +12% daily engagement). Weakness: HLR assumes a single exponential forgetting form and a half-life that is monotone in practice, which can misfit items with complex interference or non-exponential decay, and it models recall probability rather than choosing the *optimal* next interval against a tunable target-retention objective the way FSRS does.
- **Relevance to algorithmic scheduling of practice: 9/10**

### 9. Context-Aware Attentive Knowledge Tracing (AKT)
- **Authors:** Aritra Ghosh, Neil Heffernan, Andrew S. Lan
- **Year:** 2020
- **Venue:** *Proceedings of the 26th ACM SIGKDD Conference on Knowledge Discovery & Data Mining (KDD '20)*, 2330–2339
- **URL/DOI:** https://doi.org/10.1145/3394486.3403282 (arXiv: https://arxiv.org/abs/2007.12324)
- **Relevance (3 sentences):** Couples attention-based neural KT with cognitively-motivated components: a **monotonic attention mechanism whose weights decay exponentially with the context-aware distance between past and current questions** (an explicit forgetting/recency prior), plus Rasch-model embeddings to capture item difficulty. The exponential-decay attention is essentially a learned, content-aware forgetting curve, tying modern KT back to the same time-decay assumption underlying Anki's intervals while improving interpretability over vanilla DKT. Weakness: AKT optimizes next-response prediction accuracy (AUC) on interaction sequences and, like most KT work, does not output a calendar review schedule or target-retention interval; its "distance" decay is over interaction steps and question context, not raw days, so applying it to long-horizon Anki-style scheduling needs adaptation.
- **Relevance to algorithmic scheduling of practice: 6/10**

### 10. Bayesian Knowledge Tracing, Logistic Models, and Beyond: An Overview of Learner Modeling Techniques
- **Authors:** Radek Pelánek
- **Year:** 2017
- **Venue:** *User Modeling and User-Adapted Interaction*, 27(3–5), 313–350
- **URL/DOI:** https://doi.org/10.1007/s11257-017-9193-2 (PDF: https://www.fi.muni.cz/~xpelanek/publications/umuai-overview.pdf)
- **Relevance (3 sentences):** A systematic survey contrasting the two dominant learner-modeling families — BKT (discrete latent state, abrupt unknown→known transition) versus logistic/IRT-style models like AFM, PFA, and DASH (continuous skill that changes gradually and can decay) — and crucially argues the right model depends on the *learning-process context* (sense-making vs. memory building vs. declarative recall). For SRS, it situates Anki/FSRS within the "memory building" context where forgetting and time-gaps dominate, clarifying why memory-decay logistic models (PFA-with-time, DASH/DAS3H) are a better fit than vanilla BKT for scheduling reviews. Weakness it documents across the field: most KT models were built for mastery/prediction within tutoring and either omit forgetting or evaluate only on next-step prediction (AUC/RMSE) rather than on the long-term *retention* objective that actually matters for spaced-repetition scheduling — a measurement gap that also clouds SM-2-vs-FSRS comparisons.
- **Relevance to algorithmic scheduling of practice: 7/10**

---

## Cross-cutting synthesis for the swarm

- **Two communities, one problem:** SRS (SM-2/FSRS) and knowledge tracing (BKT/DKT) both estimate a latent "will they recall it" state and act on it, but they were optimized for different objectives — SRS for *long-term retention over wall-clock time*, classic KT for *mastery within a tutoring session*. The papers that matter most for explaining Anki are the ones that merge the two: **Pavlik & Anderson 2008, DASH 2014, DKT-Forget 2019, DAS3H 2019, and HLR 2016**.
- **Forgetting is the dividing line.** Vanilla BKT and vanilla DKT essentially assume no forgetting / ignore elapsed time — their biggest weakness for SRS purposes. Every model that performs well for *scheduling* re-introduces a time-decay term (exponential forgetting / half-life / time-window features). This validates FSRS's central design choice (modeling stability & retrievability) and exposes SM-2's weakness (fixed, hand-tuned decay assumptions not fit to data).
- **Fit-to-data beats heuristics, and personalization beats one-size-fits-all.** HLR (45%+ error reduction over Leitner/Pimsleur) and DASH (+10% retention over generic spacing) are the strongest empirical evidence that *trained, individualized* memory models outperform fixed formulas — the core argument for FSRS over SM-2.
- **Open weakness across both fields:** most models are validated on *next-attempt prediction accuracy* (AUC/RMSE), not on the *long-term retention-per-unit-time* objective that actually defines good scheduling (Pelánek 2017; Pavlik & Anderson 2008 being a notable exception that optimizes the right objective). This evaluation gap is a fair criticism to level at SM-2, FSRS, and KT models alike.

## Source quality note
All 10 sources are real, peer-reviewed (or arXiv/preprint with a published venue) papers with working DOIs/URLs verified via web search on 2026-06-29. No fabricated citations.


==================================================
SOURCE FILE: finders/finder-16-bayesian-recall.md
==================================================
# Finder 16 — Probabilistic / Bayesian Recall Models

**Angle:** Probabilistic / Bayesian models of recall used for scheduling — Ebisu (Bayesian half-life), exponential vs power-law forgetting models, and statistical treatments of retrievability that directly inform scheduler design.

**Swarm context:** This finder explains the *statistical core* underneath modern spaced-repetition schedulers. Anki's classic SM-2 is a hand-tuned heuristic with no explicit probability model; FSRS is a 3-component (Difficulty/Stability/Retrievability) model that assumes an exponential (and later power) forgetting curve and fits parameters to data. The sources below trace where that statistical machinery comes from: the empirical *form* of the forgetting curve (power vs exponential), the rational/Bayesian justification for it, and the family of probabilistic schedulers (Ebisu, half-life regression, DASH, MEMORIZE, ACT-R/Pavlik) that formalize "schedule the review when predicted recall probability hits threshold X."

---

## Sources

### 1. Ebisu: Bayesian spaced repetition (public-domain library + literate docs)
- **Title:** Ebisu — Public-domain Bayesian spaced-repetition scheduling (library + literate documentation)
- **Authors:** Ahmed Fasih (fasiha)
- **Year:** 2017–present (actively maintained)
- **Venue:** Open-source project / self-published technical writeup (GitHub + GitHub Pages)
- **URL:** https://github.com/fasiha/ebisu  • https://fasiha.github.io/ebisu/  • announcement: https://fasiha.github.io/post/ebisu/
- **Relevance (model form / scheduling use / weakness):** Model form — assumes exponential forgetting of recall probability `p = 2^(−Δ/h)` but, crucially, places a **Beta(α, β) prior on the recall probability at one half-life** and treats each quiz as a Bernoulli observation, yielding a closed-form-ish Bayesian posterior update via moment-matching (no Monte Carlo needed). Scheduling use — `predictRecall` gives the current expected recall probability and `updateRecall` refits the model after each pass/fail, so a scheduler reviews the card whose posterior recall probability is lowest / has decayed to a chosen percentile. Weakness — the single-half-life Beta model is a deliberately thin memory model: it does not natively capture the *spacing effect* (that successful spaced reviews should multiplicatively grow stability the way FSRS's stability does), so successive intervals grow more conservatively than empirically optimal, and v2/v3 of the library had to add rescaling/"power-law" tails to fix over-aggressive decay.
- **Relevance score: 10/10** — the canonical, explicitly Bayesian recall-probability scheduler; the most direct probabilistic counterpoint to SM-2/FSRS.

### 2. On the Form of Forgetting
- **Title:** On the Form of Forgetting
- **Authors:** John T. Wixted, Ebbe B. Ebbesen
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 409–415
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00175.x
- **Relevance (model form / scheduling use / weakness):** Model form — across word recall, face recognition, and a pigeon delayed-matching task, the retention curve `R(t)` is fit best by a **power function `R(t) = a·t^(−b)`**, beating exponential, hyperbolic, logarithmic, linear, and exponential-power alternatives (and Ebbinghaus's savings data is re-shown to be power-law). Scheduling use — this is the empirical foundation for *why* a scheduler must model long, fattening intervals: under a power law the instantaneous forgetting rate keeps slowing, justifying ever-expanding review gaps (and directly motivating FSRS's move from a pure exponential to a power forgetting curve). Weakness — the paper analyzes *aggregate/averaged* data, and a power law fit to averaged curves can be an artifact of mixing exponential decays with different rates (see #3, #10), so "power law" may describe the population, not the individual card a scheduler actually needs to predict.
- **Relevance score: 9/10** — defines the functional form debate (power vs exponential) that every modern retrievability model inherits.

### 3. One Hundred Years of Forgetting: A Quantitative Description of Retention
- **Title:** One Hundred Years of Forgetting: A Quantitative Description of Retention
- **Authors:** David C. Rubin, Amy E. Wenzel
- **Year:** 1996
- **Venue:** Psychological Review, 103(4), 734–760
- **URL/DOI:** https://doi.org/10.1037/0033-295X.103.4.734
- **Relevance (model form / scheduling use / weakness):** Model form — a meta-analysis fitting **105 two-parameter retention functions to 210 datasets**, finding four near-tied winners: the logarithmic, power, exponential-in-√t, and hyperbola-in-√t functions. Scheduling use — establishes that no single closed-form retrievability curve is uniquely "correct," which is precisely why schedulers like FSRS treat the forgetting-curve shape as a *fitted hyperparameter* rather than a fixed law, and why Bayesian models put priors over curve parameters. Weakness — the study can only rank functions on goodness-of-fit to historical aggregate data, cannot resolve the power-vs-exponential identifiability problem at the individual level, and excludes autobiographical memory; it warns that data are too coarse to discriminate the survivors, undercutting any scheduler that hard-codes one form.
- **Relevance score: 8/10** — the definitive "which curve?" reference that frames retrievability modeling as model selection under uncertainty.

### 4. Reflections of the Environment in Memory
- **Title:** Reflections of the Environment in Memory
- **Authors:** John R. Anderson, Lael J. Schooler
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 396–408
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00174.x
- **Relevance (model form / scheduling use / weakness):** Model form — a **rational (Bayesian) analysis** arguing memory's availability tracks the *need probability* of an item, which in real environments (NYT headlines, parental speech, email) decays as a power function of recency and rises with frequency/spacing; memory's retention and practice functions mirror these environmental statistics. Scheduling use — provides the normative justification for treating "should I review now?" as estimating the posterior probability that an item will be *needed/recalled*, and is the conceptual ancestor of ACT-R activation (#8) and the DASH study-history features (#7). Weakness — it is a descriptive/optimality argument about why power laws appear, not an operational scheduler; it does not specify per-item parameter estimation, so it cannot be deployed without a downstream statistical model (which is exactly what later work supplies).
- **Relevance score: 8/10** — the Bayesian "memory ≈ optimal need-probability estimation" thesis that legitimizes probabilistic scheduling.

### 5. A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression)
- **Title:** A Trainable Spaced Repetition Model for Language Learning
- **Authors:** Burr Settles, Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of ACL 2016 (54th Annual Meeting of the Association for Computational Linguistics), pp. 1848–1858
- **URL/DOI:** https://aclanthology.org/P16-1174/  • DOI: https://doi.org/10.18653/v1/P16-1174
- **Relevance (model form / scheduling use / weakness):** Model form — **Half-Life Regression (HLR)** models recall as `p = 2^(−Δ/h)` with the half-life `h = exp(θ·x)` a log-linear function of features (history of right/wrong answers + lexeme tags), fit by minimizing squared error on both observed recall *and* an inferred half-life term. Scheduling use — Duolingo's production scheduler reviews items whose predicted `p` has dropped toward a target; HLR cut recall-prediction error 45%+ over Leitner/Pimsleur and lifted daily engagement 12% in a live experiment. Weakness — it is a point-estimate (MAP-ish) regression, not fully Bayesian, so it gives no uncertainty on `h` (unlike Ebisu) and bakes in the exponential form; its half-life target is derived from a single observation per session, making early estimates noisy for new items.
- **Relevance score: 9/10** — the largest-scale deployed statistical recall model; bridges Ebbinghaus-style curves and modern ML schedulers.

### 6. Improving Students' Long-Term Knowledge Retention Through Personalized Review (DASH)
- **Title:** Improving Students' Long-Term Knowledge Retention Through Personalized Review
- **Authors:** Robert V. Lindsey, Jeffery D. Shroyer, Harold Pashler, Michael C. Mozer
- **Year:** 2014
- **Venue:** Psychological Science, 25(3), 639–647
- **URL/DOI:** https://doi.org/10.1177/0956797613504302
- **Relevance (model form / scheduling use / weakness):** Model form — **DASH (Difficulty, Ability, Study-History)** is a hierarchical Bayesian / logistic model: recall probability is a logistic function of an item-difficulty term, a student-ability term, and time-windowed counts of prior study outcomes, fit with statistical inference over individual differences. Scheduling use — the fitted model predicts per-student-per-item recall and the scheduler picks items below a retention threshold; in a semester-long middle-school study it beat massed review by 16.5% and generic spaced review by 10.0%. Weakness — DASH needs substantial historical data to estimate latent ability/difficulty (cold-start problem), is heavier to fit than SM-2/Ebisu, and its windowed study-history features are an engineered approximation to true memory dynamics rather than a mechanistic forgetting curve.
- **Relevance score: 8/10** — shows a Bayesian latent-trait recall model outperforming one-size-fits-all spacing in a real classroom.

### 7. Enhancing Human Learning via Spaced Repetition Optimization (MEMORIZE)
- **Title:** Enhancing Human Learning via Spaced Repetition Optimization
- **Authors:** Behzad Tabibian, Utkarsh Upadhyay, Abir De, Ali Zarezade, Bernhard Schölkopf, Manuel Gomez-Rodriguez
- **Year:** 2019
- **Venue:** Proceedings of the National Academy of Sciences (PNAS), 116(10), 3988–3993
- **URL/DOI:** https://doi.org/10.1073/pnas.1815156116  • code: https://github.com/Networks-Learning/memorize
- **Relevance (model form / scheduling use / weakness):** Model form — represents reviews as a **marked temporal point process** and recall as a stochastic differential equation with jumps; recall probability `m(t)` decays between reviews and jumps on each review. Scheduling use — framed as stochastic optimal control, they *prove* that to maximize recall subject to a review-effort cost, the optimal review **intensity is proportional to the probability of forgetting**, `u*(t) = q^(−1/2)·(1 − m(t))` — i.e., review urgency = how close you are to forgetting; validated on Duolingo data. Weakness — the optimality proof holds only for the specific (exponential-style) memory models assumed; if the true forgetting curve is power-law or mis-specified the "optimal" schedule is no longer optimal, and the continuous-intensity formulation is harder to operationalize than a simple threshold/interval rule.
- **Relevance score: 9/10** — gives the rigorous control-theoretic answer ("review ∝ P(forget)") that underpins all retrievability-threshold schedulers, including FSRS's desired-retention knob.

### 8. Using a Model to Compute the Optimal Schedule of Practice (ACT-R)
- **Title:** Using a Model to Compute the Optimal Schedule of Practice
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** Journal of Experimental Psychology: Applied, 14(2), 101–117
- **URL/DOI:** https://doi.org/10.1037/1076-898X.14.2.101  • PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf
- **Relevance (model form / scheduling use / weakness):** Model form — an **ACT-R activation model** where memory strength = a power-law sum over prior practice events (recency + frequency + spacing), with item difficulty `β` and a sigmoidal activation→recall-probability link. Scheduling use — computes, per item, the spacing interval that maximizes *long-term gain per unit study time* by balancing the spacing effect against time cost, then drills the item with lowest activation; the optimized schedule produced large effect-size gains in recall and latency. Weakness — requires pre-fitting many ACT-R parameters from prior data and assumes the activation/decay equation is correct; the optimization is computationally and data-intensive relative to SM-2, and the spacing-effect parameterization can be brittle across domains.
- **Relevance score: 8/10** — the mechanistic, probability-of-recall-from-activation model that directly inspired data-driven schedulers and FSRS's stability concept.

### 9. Note on the Power Law of Forgetting / Emergence of power forgetting from exponential traces
- **Title:** A note on the power law of forgetting (and the curve-averaging account of power-law forgetting)
- **Authors:** Michael J. Kahana, Mark Adler
- **Year:** 2002 (technical note; builds on Anderson & Tweney 1997)
- **Venue:** University of Pennsylvania Computational Memory Lab technical note
- **URL:** https://memory.psych.upenn.edu/files/pubs/KahaAdle02.pdf
- **Relevance (model form / scheduling use / weakness):** Model form — analyzes whether the population power-law forgetting curve can **emerge from averaging many individual exponential decays** with different rates, and provides proofs/simulations (linear and exponential trace decay) showing aggregate power forgetting arises rapidly even when each trace is exponential. Scheduling use — directly relevant to scheduler design choice: it argues a scheduler should model *individual-item* forgetting (plausibly exponential, as Ebisu/HLR assume) rather than fit the misleading aggregate power curve, informing whether retrievability should be exponential or power. Weakness — it is a short analytic note rather than a large empirical study, and the exponential-vs-power identifiability it raises remains unresolved at the single-item level, so it cautions rather than prescribes.
- **Relevance score: 7/10** — sharpens the central statistical question (is per-card forgetting exponential or power?) that decides a scheduler's retrievability function.

### 10. Artifactual Power Curves in Forgetting
- **Title:** Artifactual Power Curves in Forgetting
- **Authors:** Richard B. Anderson, Ryan D. Tweney
- **Year:** 1997
- **Venue:** Memory & Cognition, 25(5), 724–730
- **URL/DOI:** https://doi.org/10.3758/BF03211315
- **Relevance (model form / scheduling use / weakness):** Model form — demonstrates that **arithmetic averaging of exponential forgetting curves (or noisy data with floor effects) can manufacture a spurious power-law fit**, so the aggregate power function may not reflect the true form of individual forgetting. Scheduling use — a direct caution for retrievability modeling: if a scheduler infers a power-law forgetting curve from pooled review logs, it may schedule sub-optimally for any single card whose real decay is exponential; supports per-user/per-item Bayesian estimation (Ebisu/DASH) over global curve fitting. Weakness — it shows power fits *can* be artifactual but does not prove the exponential is the true form either, leaving the underlying retrievability law empirically underdetermined.
- **Relevance score: 7/10** — the key methodological critique explaining why "the forgetting curve is power-law" must be treated cautiously in scheduler design.

---

## Synthesis for the swarm

- **The statistical core of modern schedulers** reduces to one question: estimate the *probability of recall* `p(t)` for each item and review when it crosses a target (FSRS calls this "desired retention"; MEMORIZE proves review intensity ∝ `1 − p`).
- **Functional form is contested** (Wixted & Ebbesen power law #2; Rubin & Wenzel's 4-way tie #3; Anderson & Tweney / Kahana artifact arguments #9–#10). FSRS pragmatically *fits* the curve; Ebisu/HLR assume exponential per-item.
- **Bayesian treatments** (Ebisu #1, DASH #6, Anderson & Schooler rational analysis #4) add **uncertainty quantification and personalization** that SM-2 entirely lacks and FSRS only partially provides via global parameter fitting.
- **Anki/SM-2 weakness in this lens:** SM-2 has *no* probability model, no per-card uncertainty, and ignores the spacing-effect dynamics that ACT-R (#8) and MEMORIZE (#7) formalize — it is a fixed heuristic approximating a curve it never explicitly represents.


==================================================
SOURCE FILE: finders/finder-17-recent-advances.md
==================================================
# Finder 17 — Recent Advances (2023-2026)

**Angle:** The most recent (2023–2026) advances in spaced-repetition scheduling — large-scale FSRS evaluations, neural/transformer forgetting models, content-aware schedulers, deep-RL interval optimizers, and forgetting-aware knowledge tracing — i.e., the state of the art *beyond* Anki's SM-2 and the frontier *around/past* FSRS.

**Context for the swarm:** Anki historically shipped a hand-tuned SM-2 variant (fixed ease-factor heuristics, no per-user memory model, no probabilistic recall prediction). Since late 2023 Anki ships **FSRS** (Free Spaced Repetition Scheduler), which fits a per-user DSR (Difficulty–Stability–Retrievability) memory model and schedules to hit a target retention. The papers below represent the frontier that FSRS itself is benchmarked against and the research directions that aim to beat it.

---

## Source 1 — The SRS Benchmark (open-spaced-repetition)

- **Title:** SRS Benchmark: A Benchmark for Spaced Repetition Schedulers/Algorithms (FSRS-Anki-20k / anki-revlogs-10k dataset)
- **Authors:** Jarrett Ye, Expertium, and the open-spaced-repetition community
- **Year:** continuously updated (2023–2026)
- **Venue:** Open-source project (GitHub) + Hugging Face Datasets
- **URL:** https://github.com/open-spaced-repetition/srs-benchmark — dataset: https://huggingface.co/datasets/open-spaced-repetition/anki-revlogs-10k
- **Relevance:** This is the largest public head-to-head evaluation of spaced-repetition algorithms, scoring FSRS (v3 → v7), SM-2, HLR, Ebisu, and neural baselines (LSTM, GRU, RWKV, Transformer) on ~350M real Anki reviews from ~10k users using Log Loss, RMSE(bins), and AUC. It improves on Anki's SM-2 framing by treating scheduling as a *probabilistic recall-prediction* problem and showing FSRS-6 has ~99.6% per-user superiority over SM-2 in calibration. Remaining weakness: it ranks predictive accuracy on logged reviews, not *causal* learning efficiency — a better calibrated predictor does not provably produce an optimal *schedule*, and same-day/short-interval behaviour and selection bias in user-chosen review times remain confounders.
- **Novelty:** 7/10 — **Frontier relevance:** 10/10

## Source 2 — KARL: content-aware flashcard scheduling

- **Title:** KARL: Knowledge-Aware Retrieval and Representations aid Retention and Learning in Students
- **Authors:** Matthew Shu, Nishant Balepur, Shi Feng, Jordan Lee Boyd-Graber
- **Year:** 2024
- **Venue:** EMNLP 2024 (also arXiv:2402.12291)
- **URL:** https://aclanthology.org/2024.emnlp-main.784/ — DOI: 10.18653/v1/2024.emnlp-main.784 — https://arxiv.org/abs/2402.12291
- **Relevance:** KARL proposes the first *content-aware* scheduler: it uses deep knowledge tracing (DKT) plus a BERT retriever over semantically similar past cards to predict recall, rather than relying only on review timing/response history. This directly fixes a structural blind spot in FSRS and SM-2 — they treat each card as an opaque ID and cannot generalize to *unseen* cards or model semantic interference between related cards. Remaining weakness: the online learning-efficiency evidence is small-scale (32 study paths from 27 users on trivia QA), it needs card text plus a trained encoder (heavier than FSRS's local fit), and it does not yet output an optimal interval policy.
- **Novelty:** 9/10 — **Frontier relevance:** 9/10

## Source 3 — DRL-SRS: Transformer half-life + Deep-RL interval optimization

- **Title:** DRL-SRS: A Deep Reinforcement Learning Approach for Optimizing Spaced Repetition Scheduling
- **Authors:** Qinfeng Xiao, Jiazhen Wang
- **Year:** 2024
- **Venue:** Applied Sciences, 14(13):5591
- **URL:** https://www.mdpi.com/2076-3417/14/13/5591 — DOI: 10.3390/app14135591
- **Relevance:** DRL-SRS pairs a Transformer-based Half-Life Regression (THLR) memory predictor with a DQN+LSTM agent that learns the optimal *review interval* (not just which item to show), reporting an 11% lower memory-prediction MAE than the prior best. It improves on Anki/FSRS by replacing hand-designed stability-update formulas with a learned temporal encoder and by explicitly optimizing long-term retention via reinforcement learning instead of a fixed target-retention heuristic. Remaining weakness: the RL policy is trained in a simulator built from its own memory model, so gains can be optimistic and may not transfer to real students; it is also far heavier and less interpretable than FSRS.
- **Novelty:** 8/10 — **Frontier relevance:** 8/10

## Source 4 — SSP-MMC / capturing the dynamics of memory (FSRS's research lineage)

- **Title:** Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory
- **Authors:** Jingyong Su, Junyao Ye, Liqiang Nie, Yilong Cao, Yongyong Chen
- **Year:** 2023
- **Venue:** IEEE Transactions on Knowledge and Data Engineering (TKDE) — extends the KDD 2022 SSP-MMC paper
- **URL:** https://dl.acm.org/doi/10.1109/TKDE.2023.3251721 — DOI: 10.1109/TKDE.2023.3251721 — code/data: https://github.com/maimemo/SSP-MMC-Plus
- **Relevance:** This is the MaiMemo DHP line of work that FSRS's DSR memory model is descended from; it alternates a Markov-property memory model with a stochastic-shortest-path schedule optimizer to *minimize review cost* for a retention target, validated on 220M time-series review logs. It improves on SM-2 by jointly solving recall prediction *and* cost-optimal scheduling (reporting 64% lower recall-prediction error and 17% lower review cost vs. baselines), giving a principled objective that Anki's fixed multipliers lack. Remaining weakness: the optimization assumes a stationary memory model per user/item and discretized states, and was tuned for language-vocabulary review (MaiMemo) rather than Anki's heterogeneous, arbitrary-content decks.
- **Novelty:** 8/10 — **Frontier relevance:** 9/10

## Source 5 — LefoKT: relative forgetting attention

- **Title:** Rethinking and Improving Student Learning and Forgetting Processes for Attention-based Knowledge Tracing Models
- **Authors:** Yongbiao Bai, Xiang Li, Zhi Liu, Yan Huang, Mengqi Tian, Wei Luo
- **Year:** 2025
- **Venue:** AAAI 2025 (Proceedings of the AAAI Conference on Artificial Intelligence, 39(27):27822–27830)
- **URL:** https://ojs.aaai.org/index.php/AAAI/article/view/34998 — DOI: 10.1609/aaai.v39i27.34998
- **Relevance:** LefoKT introduces a *relative forgetting attention* that decouples forgetting from problem relevance and adds length-extrapolation so the model handles ever-growing review sequences. This addresses a limitation shared by FSRS and prior KT models: forgetting is handled by a single uniform time-decay term, which conflates "time since review" with "topic similarity" and degrades on very long histories (exactly the regime of long-term Anki users). Remaining weakness: it is a *recall-prediction* (knowledge-tracing) advance benchmarked on offline EdTech datasets, not a deployed scheduler, so it improves the memory model but not yet the interval policy.
- **Novelty:** 8/10 — **Frontier relevance:** 8/10

## Source 6 — MemoryKT: encoding–storage–retrieval via temporal VAE

- **Title:** MemoryKT: An Integrative Memory-and-Forgetting Method for Knowledge Tracing
- **Authors:** Min-Yin Lin, Ke Deng, Zhengyang Wu, Zetao Zheng, Jie Li
- **Year:** 2025
- **Venue:** arXiv preprint (arXiv:2508.08122)
- **URL:** https://arxiv.org/abs/2508.08122 — https://arxiv.org/pdf/2508.08122
- **Relevance:** MemoryKT uses a novel temporal variational autoencoder to model the full encoding → storage → retrieval cycle with a *personalized* forgetting module that dynamically modulates storage strength per student. It improves on FSRS's three-scalar DSR state by representing memory as a learned latent distribution that captures individual differences across all three memory stages rather than only a difficulty/stability pair. Remaining weakness: it is an unreviewed preprint evaluated only on offline public KT datasets for prediction AUC, with no scheduling deployment, no large-scale Anki-style validation, and added complexity/opacity over FSRS.
- **Novelty:** 7/10 — **Frontier relevance:** 7/10

## Source 7 — CPF: concept-driven personalized forgetting

- **Title:** Personalized Forgetting Mechanism with Concept-Driven Knowledge Tracing
- **Authors:** Shanshan Wang, Ying Hu, Xun Yang, Zhongzhou Zhang, Keyang Wang, Xingyi Zhang
- **Year:** 2024
- **Venue:** arXiv preprint (arXiv:2404.12127)
- **URL:** https://arxiv.org/abs/2404.12127 — https://arxiv.org/pdf/2404.12127
- **Relevance:** CPF integrates hierarchical precursor–successor relationships between knowledge concepts and per-student cognitive ability into both the learning and forgetting processes, so forgetting rate varies by student *and* by concept dependency. This targets a real FSRS/SM-2 gap: they assume cards forget independently, ignoring that reviewing a prerequisite concept can reinforce dependent ones (and vice versa). Remaining weakness: it requires a concept graph / skill tags that generic Anki decks rarely have, and like other KT work it predicts performance rather than emitting an optimal review schedule.
- **Novelty:** 7/10 — **Frontier relevance:** 7/10

## Source 8 — KVFKT: attention embedding + forgetting-curve integration

- **Title:** KVFKT: A New Horizon in Knowledge Tracing with Attention-Based Embedding and Forgetting Curve Integration
- **Authors:** Zhiyi Duan, Xiaoxiao Dong, Hengnian Gu, Xiong Wu, Zhibin Li, Dongdai Zhou
- **Year:** 2025
- **Venue:** COLING 2025 (Proceedings of the 31st International Conference on Computational Linguistics)
- **URL:** https://aclanthology.org/2025.coling-main.297/
- **Relevance:** KVFKT couples attention-based question/knowledge-concept embeddings with an explicit forgetting-quantification module (interval-time-based forgetting rate following the forgetting curve) plus guess/difficulty coefficients, aiming for an *interpretable* yet accurate recall predictor. It improves on SM-2 by combining a classical forgetting-curve prior with learned attention, and on black-box neural KT by keeping the forgetting term explicit and human-readable — bridging FSRS-style interpretability with deep models. Remaining weakness: still an offline prediction model on standard KT benchmarks; the forgetting curve is integrated heuristically rather than derived from a memory-stability dynamics model like FSRS's DSR.
- **Novelty:** 6/10 — **Frontier relevance:** 7/10

## Source 9 — Fast and Forgetful Memory (forgetting as inductive prior)

- **Title:** Reinforcement Learning with Fast and Forgetful Memory
- **Authors:** Steven Morad, Ryan Kortvelesy, Stephan Liwicki, Amanda Prorok
- **Year:** 2023
- **Venue:** NeurIPS 2023 (also arXiv:2310.04128)
- **URL:** https://arxiv.org/abs/2310.04128 — https://proceedings.neurips.cc/paper_files/paper/2023/file/e3bf2f0f10774c474de22a12cb060e2c-Paper-Conference.pdf
- **Relevance:** FFM is a memory architecture for RL whose key finding — drawn from computational psychology — is that an explicit *forgetting* inductive prior (context drift + composite memory) is the single most important component, outperforming GRUs while training ~2 orders of magnitude faster. Though not a spaced-repetition scheduler, it is direct, recent evidence that hard-coding human-style forgetting dynamics into a sequence model beats generic RNNs/Transformers — the same bet FSRS makes against neural baselines, and a candidate backbone for future memory-state schedulers. Remaining weakness (as a scheduling source): it is applied to POMDP control tasks, not learner memory, so its relevance is methodological/transferable rather than a deployable SRS algorithm.
- **Novelty:** 8/10 — **Frontier relevance:** 6/10

---

## Cross-cutting takeaways for the swarm

1. **FSRS is now the public baseline-to-beat**, not SM-2. The SRS Benchmark (Source 1) is the canonical large-scale evidence; SM-2 loses to FSRS-6 for ~99.6% of users on calibration.
2. **Two distinct frontiers** are advancing past FSRS: (a) better *memory/recall predictors* — content-aware (KARL), forgetting-aware attention/KT (LefoKT, MemoryKT, CPF, KVFKT); and (b) better *schedule optimizers* — deep-RL and stochastic-shortest-path interval optimization (DRL-SRS, SSP-MMC).
3. **The shared weakness of the whole field:** nearly all gains are measured as offline recall-*prediction* accuracy on logged reviews, not as *causal* improvement in learning efficiency from controlled deployment. KARL is a rare attempt at online evaluation, but tiny-scale. Content/semantic structure between cards (interference, prerequisites) is the biggest modeling gap FSRS and SM-2 both ignore.

