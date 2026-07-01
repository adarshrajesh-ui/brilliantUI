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
