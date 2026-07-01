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
