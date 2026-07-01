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
