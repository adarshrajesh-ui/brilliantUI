# Evaluator A — The Mechanist

**Judging lens: Mechanism & Fidelity.** I reward sources that precisely specify the *actual mechanics of the algorithm Anki runs* — SM-2's exact ease-factor/interval/grade procedure and FSRS's DSR (Difficulty–Stability–Retrievability) equations and parameter fitting. Primary/canonical specifications outrank secondary commentary. Sources only tangentially about scheduling (forgetting-curve psychology, med-ed efficacy, language-acquisition outcomes, knowledge-tracing variants that never ship in Anki) are penalized regardless of academic prestige, because they do not tell the reader *what the code does*.

Score = mechanistic fidelity (1–10): how directly and canonically the source specifies the exact equations/procedure of the algorithm Anki actually executes.

---

## RANKED BALLOT — TOP 8

### 1. The Algorithm (FSRS wiki) — Score 10
- **URL:** https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm
- **From:** finders/finder-02-fsrs-dsr.md (#1)
- **Round-table argument:** This is the single most direct, version-by-version specification of the equations actually running inside Anki today — the DSR state, the power-law retrievability curve `R = (1 + FACTOR·t/S)^DECAY`, and the named trainable parameters (w0…w20) governing stability-on-success, post-lapse stability, and difficulty updates — making it indispensable for a reader who must know *exactly* how the modern scheduler works.

### 2. SuperMemo 2: Algorithm (Optimization of Learning, §3.2) — Woźniak (1990) — Score 10
- **URL:** http://super-memory.com/english/ol/sm2.htm  (mirror: https://super-memory.org/archive/english/ol/sm2.htm)
- **From:** finders/finder-01-sm2-origins.md (#1); also finders/finder-14-leitner-lineage.md (#5)
- **Round-table argument:** The canonical primary spec of SM-2 — fixed `I(1)=1, I(2)=6, I(n)=I(n-1)·EF`, EF init 2.5 floored at 1.3, the 0–5 grade scale, and the exact update `EF' = EF + (0.1 − (5−q)(0.08 + (5−q)·0.02))` — i.e. the literal formula Anki's classic scheduler is derived from, with no intermediary paraphrase.

### 3. What spaced repetition algorithm does Anki use? (Anki FAQs) — Score 10
- **URL:** https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html
- **From:** finders/finder-01-sm2-origins.md (#4)
- **Round-table argument:** The authoritative bridge from SM-2 to Anki's *actual* implementation — next interval = current × ease × interval-modifier, the 130% ease floor, lapse-on-`Again` −20pp, learning steps, fuzz, late-review crediting — and it points to the real source (`rslib/src/scheduler/states`), so the reader sees precisely where canonical SM-2 ends and Anki's shipped code begins.

### 4. The mechanism of optimization (FSRS wiki) — Score 9
- **URL:** https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-mechanism-of-optimization
- **From:** finders/finder-02-fsrs-dsr.md (#2)
- **Round-table argument:** Specifies *how* FSRS's parameters are fit — the DSR model trained as a recurrent time-series model via Maximum Likelihood Estimation with Backpropagation Through Time over rating/interval histories — answering the "how was it designed/calibrated" half of the mechanism that the equations alone don't convey.

### 5. A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (SSP-MMC) — Ye, Su & Cao, KDD 2022 — Score 9
- **DOI:** https://doi.org/10.1145/3534678.3539081
- **From:** finders/finder-02-fsrs-dsr.md (#3); also finder-06 (#3), finder-07 (#4), finder-10 (#5), finder-17 (#4)
- **Round-table argument:** The peer-reviewed, large-scale (220M logs) DHP memory model and cost-minimizing MDP that is the direct intellectual ancestor of FSRS's DSR state and its "find optimal retention" feature — the canonical academic grounding for *why* the modern algorithm is shaped the way it is.

### 6. free-spaced-repetition-scheduler (FSRS reference algorithm repo) — Score 9
- **URL:** https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler
- **From:** finders/finder-02-fsrs-dsr.md (#4)
- **Round-table argument:** The canonical open-source reference implementation that ties the three memory variables and the stabilization-decay/stabilization-curve laws directly to executable code, letting the reader verify the equations against the actual scheduler logic rather than prose description.

### 7. Issues with Anki SM-2 (Anki SRS Kai documentation) — kuroahna (2024) — Score 8
- **URL:** https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html
- **From:** finders/finder-09-sm2-critiques.md (#1)
- **Round-table argument:** Documents SM-2's failure modes at the formula level — `NewInterval = OldInterval × EaseFactor × IntervalModifier` with `Again −20%, Hard −15%, Good 0, Easy +15%` and the 130% floor producing "ease hell" — so the reader understands the *exact* mechanical reason the algorithm misfires, with in-app diagnostic evidence.

### 8. Stabilization decay (supermemo.guru) — Woźniak (~2019) — Score 8
- **URL:** https://www.supermemo.guru/wiki/Stabilization_decay
- **From:** finders/finder-09-sm2-critiques.md (#5)
- **Round-table argument:** A first-party admission from the algorithm's own author that SM-2's single E-factor conflates difficulty and stability ("both presumed constant"), pinpointing the precise structural flaw in SM-2's mechanism that the two-component DSR model of FSRS was built to resolve.

---

## VARIETY NOTE (for the moderator)

My ballot is deliberately **mechanism-dominant**, as my lens demands, and covers these facets:

- **Exact-mechanics (FSRS):** #1 (equations), #4 (fitting), #6 (reference code) — the deployed modern scheduler.
- **Exact-mechanics (SM-2 / Anki):** #2 (canonical SM-2 formula), #3 (Anki's actual SM-2 derivative + code pointer).
- **Theory-why / design rationale:** #5 (peer-reviewed DHP→DSR lineage and the optimization objective behind FSRS).
- **Empirical/primary weakness:** #7 (formula-level "ease hell") and #8 (author-confirmed difficulty/stability conflation).

**Coverage gaps the final 5 may want to backfill from other evaluators:** I carry *no* **modern-alternative** beyond FSRS (e.g., HLR, MEMORIZE, neural/RL schedulers — finders 06/07/17) and *no* **applied-evidence** (med-ed or language-learning efficacy — finders 11/12), because those are tangential to specifying the exact algorithm Anki runs. If the moderator wants the final 5 to speak to "alternatives" and "real-world proof," one slot each from those facets would round it out — but for *precisely how/why Anki's algorithm works*, my top 6 are the load-bearing sources.
