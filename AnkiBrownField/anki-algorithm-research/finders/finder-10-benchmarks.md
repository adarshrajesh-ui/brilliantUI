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
