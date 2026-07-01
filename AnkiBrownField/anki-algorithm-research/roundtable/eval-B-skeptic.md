# Evaluator B — The Skeptic

**Judging lens:** Evidence quality & weakness-illumination. I reward large datasets, peer review, head-to-head benchmarks, meta-analyses, and sources that *document the algorithm's failure modes* (ease hell, difficulty/stability conflation, no per-user calibration, benchmark inferiority to FSRS). I discount marketing, anecdote, and prediction-accuracy claims dressed up as proof of better learning.

**Method:** Read all 17 finder reports in `corpus.md`. Scored each candidate on a single 1–10 axis combining (a) empirical rigor and (b) how clearly it exposes what Anki's algorithm gets wrong and why. Each source is cited once even where it appears in multiple finder files; I name the finder I drew it from.

---

## RANKED BALLOT — TOP 8

### 1. SRS Benchmark (`srs-benchmark`) — Score 10/10
- **URL:** https://github.com/open-spaced-repetition/srs-benchmark
- **Finder:** finder-10 (#1); also finder-02 (#6), finder-09 (#3), finder-17 (#1)
- **Facet:** empirical-weakness / modern-alternative
- **Round-table argument:** This is the single largest, reproducible head-to-head in existence (~350M reviews, ~10k collections, TimeSeriesSplit, Log Loss + RMSE-bins + AUC), it quantifies SM-2's calibration inferiority directly (FSRS-6 beats SM-2 for ~99.6% of users), *and* it is intellectually honest about its own limits — exposing that RMSE-bins is gameable and that SM-2 was never built to emit probabilities, so no comparison is fully fair. For a skeptic that combination of scale and self-criticism is the gold standard.

### 2. Karpicke & Roediger (2007) — Expanding vs. Equal Spaced Retrieval — Score 9/10
- **DOI:** https://doi.org/10.1037/0278-7393.33.4.704
- **Finder:** finder-04 (#5); also finder-14 (#9)
- **Facet:** empirical-weakness / theory-why
- **Round-table argument:** This is the sharpest experimental knife aimed at SM-2's foundational assumption: expanding intervals win only at ~10 minutes, while *equal* spacing wins at 2 days, and the real driver is first-retrieval difficulty — directly undermining the grade-driven geometric expansion baked into SM-2/Leitner.

### 3. Cepeda, Pashler, Vul, Wixted & Rohrer (2006) — Distributed Practice: Review & Quantitative Synthesis — Score 9/10
- **DOI:** https://doi.org/10.1037/0033-2909.132.3.354
- **Finder:** finder-04 (#1); also finder-14 (#8)
- **Facet:** theory-why / empirical-weakness
- **Round-table argument:** A 317-experiment / 839-assessment meta-analysis establishing the spacing effect as one of memory's most robust findings, while proving the optimal gap *scales with the desired retention interval* — so SM-2's one-size fixed multiplier is provably suboptimal across retention horizons.

### 4. Settles & Meeder (2016) — A Trainable Spaced Repetition Model (Half-Life Regression) — Score 9/10
- **DOI:** https://doi.org/10.18653/v1/P16-1174
- **Finder:** finder-06 (#1); also finder-09 (#9), finder-10 (#4), finder-12, finder-15, finder-16
- **Facet:** modern-alternative / applied-empirical
- **Round-table argument:** The canonical peer-reviewed proof that *trainable* models fit to population logs (13M Duolingo reviews, 45%+ lower error, +12% live engagement) beat fixed hand-tuned heuristics — i.e. it shows SM-2's 1987 constants are improvable on real data, not just in principle.

### 5. Rubin & Wenzel (1996) — One Hundred Years of Forgetting — Score 8/10
- **DOI:** https://doi.org/10.1037/0033-295X.103.4.734
- **Finder:** finder-03 (#3); also finder-16 (#3)
- **Facet:** theory-why / empirical-weakness
- **Round-table argument:** Fitting 105 functions to 210 retention datasets, it shows the decay law is empirically *underdetermined* (four functions tie) — exposing that any scheduler hard-coding a single forgetting form (SM-2's implicit curve; FSRS's power law) rests on shaky, unresolved foundations.

### 6. Woźniak — "Stabilization decay" (supermemo.guru) — Score 8/10
- **URL:** https://www.supermemo.guru/wiki/Stabilization_decay
- **Finder:** finder-09 (#5); related primary source finder-09 (#6) "Algorithm SM-4"
- **Facet:** exact-mechanics / empirical-weakness
- **Round-table argument:** A first-party confession from the algorithm's own author that "E-factor stood for both stabilization and difficulty," documenting SM-2's core structural flaw — the conflation of item difficulty with memory stability — from the most authoritative possible witness.

### 7. Issues with Anki SM-2 (Anki SRS Kai docs) — Score 8/10
- **URL:** https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html
- **Finder:** finder-09 (#1)
- **Facet:** exact-mechanics / empirical-weakness
- **Round-table argument:** The most concrete, formula-level dissection of "ease hell" — `NewInterval = OldInterval × EaseFactor × IntervalModifier`, the one-way ratchet to the 130% floor, and intervals that are simultaneously too short (over-review) and too long (forgetting) — with in-app diagnostic evidence; I dock it only because it is project documentation rather than peer-reviewed.

### 8. Lindsey, Shroyer, Pashler & Mozer (2014) — Personalized Review (DASH) — Score 7/10
- **DOI:** https://doi.org/10.1177/0956797613504302
- **Finder:** finder-08 (#8); also finder-06 (#5), finder-10 (#7), finder-15 (#6), finder-16 (#6)
- **Facet:** applied-evidence / modern-alternative
- **Round-table argument:** A rare real-world, semester-long deployment showing personalized model-driven scheduling beats one-size-fits-all spacing by 10% (and massed by 16.5%) — causal-leaning evidence (not just log-loss) that directly indicts SM-2's "no per-user calibration" weakness.

---

## VARIETY NOTE

My ballot spans all five facets: **exact-mechanics** (#6 Woźniak stabilization decay, #7 ease-hell formula doc), **theory-why** (#2 Karpicke & Roediger, #3 Cepeda, #5 Rubin & Wenzel), **empirical-weakness** (#1 SRS Benchmark, plus #2/#3/#5/#6/#7), **modern-alternative** (#1 benchmark, #4 HLR, #8 DASH), and **applied-evidence** (#4 HLR live deployment, #8 DASH classroom trial). The center of gravity is deliberately tilted toward rigorous benchmarks/meta-analyses and primary-source weakness documentation, with marketing/anecdote excluded.

---

## RETURN — Top 8 (rank | title | score)

1. SRS Benchmark (`srs-benchmark`) — 10
2. Karpicke & Roediger (2007), Expanding vs. Equal Spaced Retrieval — 9
3. Cepeda et al. (2006), Distributed Practice: Review & Quantitative Synthesis — 9
4. Settles & Meeder (2016), A Trainable Spaced Repetition Model (HLR) — 9
5. Rubin & Wenzel (1996), One Hundred Years of Forgetting — 8
6. Woźniak, "Stabilization decay" (supermemo.guru) — 8
7. Issues with Anki SM-2 (Anki SRS Kai docs) — 8
8. Lindsey et al. (2014), Personalized Review (DASH) — 7

**Variety note:** Ballot spans all five facets — exact-mechanics (#6, #7), theory-why (#2, #3, #5), empirical-weakness (#1 + several), modern-alternative (#1, #4, #8), and applied-evidence (#4, #8) — weighted toward large-scale benchmarks/meta-analyses and primary-source weakness documentation.
