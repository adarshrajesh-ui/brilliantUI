# Anki's Famous Algorithm — Final Top 5 (Round-Table Verdict)

**Pipeline:** 17 finder agents gathered ~150 verified sources across distinct angles → consolidated into `corpus.md` → 3 evaluator agents (Mechanist / Skeptic / Curator) produced independent ranked ballots → moderator reconciliation below.

**Reader goal:** know *exactly* what Anki's algorithm does, *why* and *how* it was designed, and its *weaknesses* — with variety across the top 5.

---

## Cross-ballot vote tally (appearances in the 3 ballots)

| Source | Mechanist (A) | Skeptic (B) | Curator (C) | Notes |
|---|:--:|:--:|:--:|---|
| Issues with Anki SM-2 (Anki SRS Kai) | #7 | #7 | #3 | **Unanimous** — weakness facet |
| FSRS wiki — "The Algorithm" (DSR) | #1 | — | #1 | Modern engine spec |
| Woźniak 1990 — SuperMemo 2: Algorithm | #2 | — | #6 | Classic engine spec |
| Cepeda et al. 2006 — spacing meta-analysis | — | #3 | #4 | Theory / why |
| SRS Benchmark (open-spaced-repetition) | — | #1 | (held) | Empirical head-to-head |
| SSP-MMC, KDD 2022 (DHP→DSR) | #5 | — | #8 | Peer-reviewed FSRS lineage |
| Woźniak — "Stabilization decay" | #8 | #6 | — | Primary-source weakness |
| Anki FAQ — algorithm Anki uses | #3 | — | #2 | Official pointer |
| Maye et al. 2026 — med-ed meta-analysis | — | — | #5 | Applied evidence |

---

## FINAL TOP 5 (balanced for variety — one core facet each)

### 1. SM-2 — the classic "famous" algorithm (EXACT mechanics)
**SuperMemo 2: Algorithm — P. Woźniak (1990).** http://super-memory.com/english/ol/sm2.htm
- **What:** The exact procedure Anki was built on — per-card *ease factor* (E-Factor, start 2.5), interval growth `I(n)=I(n-1)×EF`, and a 0–5 recall-quality grade that updates EF (`EF' = EF + (0.1 − (5−q)(0.08 + (5−q)0.02))`), floored at 1.3.
- **Why/how:** First algorithm to make intervals adapt per item from grade history; geometric interval growth approximates the forgetting curve.
- **Weakness:** EF conflates difficulty and stability, doesn't learn forgetting rates from population data, and resets harshly on lapses.
- *Facet: classic engine mechanics. (Pair with the Anki FAQ — https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html — for Anki's exact deviations from SM-2.)*

### 2. FSRS / DSR — the modern engine Anki now ships (EXACT mechanics)
**"The Algorithm" — FSRS wiki, open-spaced-repetition (Jarrett Ye et al.).** https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm
- **What:** The Difficulty–Stability–Retrievability (DSR) model with ~19–21 fitted weights; retrievability `R = (1 + FACTOR·t/S)^DECAY`; stability/difficulty update equations after each review.
- **Why/how:** Replaces SM-2's hand-tuned heuristics with parameters fit to *your* review log (MLE + backprop-through-time), scheduling each card at a target retention.
- **Weakness:** Needs review history to personalize; treats cards as independent (ignores semantic/prerequisite links).
- *Facet: modern engine mechanics.*

### 3. Why spacing works (THEORY / cognitive science)
**Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis — Cepeda, Pashler, Vul, Wixted & Rohrer (2006).** https://doi.org/10.1037/0033-2909.132.3.354
- **What:** Meta-analysis (>250 studies) establishing the spacing effect and an optimal-gap relationship that depends on the retention interval.
- **Why/how:** This is the empirical phenomenon SM-2/FSRS exploit — spreading reviews beats massing them.
- **Weakness it exposes:** Optimal gap scales with target delay (the "temporal ridgeline," Cepeda 2008) — SM-2's fixed multipliers don't capture this.
- *Facet: theoretical why.*

### 4. Documented weaknesses of Anki's default scheduler (CRITIQUE)
**"Issues with Anki SM-2" — Anki SRS Kai documentation.** https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html
- **What:** Formula-level walkthrough of SM-2's failure modes: "ease hell" (ease ratchets down and never recovers), no per-user calibration, difficulty/stability conflation, and poorly calibrated intervals.
- **Why it matters:** The single clearest, mechanism-grounded catalog of *why* Anki's classic scheduler underperforms. **Unanimous pick across all three judges.**
- *Facet: weaknesses.*

### 5. Hard empirical proof (BENCHMARK / evidence)
**SRS Benchmark — open-spaced-repetition.** https://github.com/open-spaced-repetition/srs-benchmark
- **What:** Reproducible head-to-head of ~30 algorithms on ~350M real Anki reviews, scored by log-loss / RMSE(bins) / AUC.
- **Why/how:** Quantifies the SM-2 vs FSRS gap — FSRS predicts recall better for ~97–99%+ of users — turning the qualitative critique (#4) into numbers.
- **Weakness it exposes:** SM-2 isn't even a probability predictor; also flags that calibration metrics are gameable and rankings are dataset-dependent.
- *Facet: empirical head-to-head.*

---

## Variety check
| # | Source | Facet |
|---|---|---|
| 1 | Woźniak 1990 SM-2 | Classic engine mechanics |
| 2 | FSRS wiki DSR | Modern engine mechanics |
| 3 | Cepeda 2006 | Cognitive-science why |
| 4 | Anki SRS Kai critique | Qualitative weaknesses |
| 5 | SRS Benchmark | Empirical proof |

Five distinct facets; together they answer *what / why / how / weaknesses* end-to-end.

## Round-table swaps (if you want a different flavor)
- **Want peer-reviewed academic weight instead of a benchmark repo at #5?** Swap in **SSP-MMC, Ye/Su/Cao, KDD 2022** (https://doi.org/10.1145/3534678.3539081) — the peer-reviewed memory-modeling foundation behind FSRS.
- **Want real-world applied evidence?** Swap in **Maye et al. 2026** med-ed meta-analysis (21,415 learners, SMD 0.78) — https://doi.org/10.1111/tct.70353.
- **Want the "active recall" why instead of spacing?** Swap #3 for **Roediger & Karpicke 2006, Test-Enhanced Learning** — https://doi.org/10.1111/j.1467-9280.2006.01693.x.
