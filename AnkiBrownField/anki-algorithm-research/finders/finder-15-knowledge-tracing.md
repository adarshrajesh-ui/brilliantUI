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
