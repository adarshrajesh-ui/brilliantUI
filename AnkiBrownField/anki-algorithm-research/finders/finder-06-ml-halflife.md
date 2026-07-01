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
