# Iteration 4 · A5 — Frontier ACADEMIC / Learning-Engineering Collector: "Diamond Among Diamonds" Hunt

> Blunt, evidence-first dossier. Mission: scour the rigorous learning-engineering / psychometrics
> frontier (IRT/CAT, knowledge tracing, model-based optimal scheduling, spacing-for-a-deadline,
> prerequisite knowledge graphs, error-specific remediation, 2023–2026 results) for a candidate that
> would **DOMINATE** the three banked diamonds (D1 memory-vs-performance honesty engine + deadline queue;
> D2 ethics contrastive minimal-pairs; D3 worked-example adaptive fading) — including the specific
> hypothesis that **unifying D1+D3's memory & performance signals under an IRT-calibrated readiness
> estimate** is the real upgrade.
>
> For every candidate: (1) evidence grade A–D with verbatim source; (2) IS IT ACTUALLY NEW for a study
> product?; (3) IF good, WHY HASN'T A COMPETITOR SHIPPED IT? (moat classification); (4) 4-day buildability
> on forked Anki; (5) demo draw. Grade key: **A** = meta / large deployed RCT, adult+applied, effect+CI,
> replicated · **B** = solid design but lab-leaning / proxy population · **C** = single small / undergrad
> / correlational / observational · **D** = anecdote. Nothing fabricated; gaps marked **UNVERIFIED**.

---

## BOTTOM LINE UP FRONT (verdict)

**No candidate dominates the three diamonds. Do NOT crown a winner.**

The frontier scan produced exactly one grade-A empirical result that is directly on-point (Lindsey et al.
2014, *Psych Science*, d=0.88–1.42) — but it **VALIDATES Diamond #1's deadline-aware personalized-review
engine, it does not beat it**. The single most intellectually attractive "diamond among diamonds" — an
**IRT/Rasch-calibrated readiness estimate that fuses FSRS memory + Diamond-#1 performance into one
psychometrically honest number, the way the real CFA is scored** — is genuine whitespace for a
spaced-repetition product, but it collapses on **buildability and data**: a *calibrated* readiness estimate
needs longitudinal student→exam-outcome data the fork does not have, and IRT's precision advantage over an
honest % / two-score dashboard is **marginal** in a non-adaptive, item-rich setting (θ ↔ number-correct
r ≈ 0.95). Building the *number* without the data reproduces the exact "data-starved readiness leap" trap
the ledger already flagged (candidate #4). Knowledge tracing (DKT/SAKT), model-based optimal scheduling
(MEMORIZE, Pavlik-ACT-R), and prerequisite knowledge graphs each fail on at least one of {evidence,
independence-from-FSRS, 4-day-buildability, data-they-lack}.

**The honest upgrade that survives:** fold a *deliberately uncalibrated, uncertainty-first* readiness band
into Diamond #1's honesty dashboard (Rasch scale from expert-judged difficulties, always shown with a wide
CI and an explicit "not validated against real exam outcomes" label). That is an **enhancement to D1, not a
fourth diamond**, and it must be pitched as honesty, never as a validated P(pass).

---

## CANDIDATE 1 — IRT / CAT-calibrated readiness estimate (the intended "diamond among diamonds": fuse memory + performance the way the real exam scores you)

**The pitch:** replace D1's honest-but-flat two-score gap with a single latent-ability estimate θ on a
CFA-like scale, with a pass-probability and an uncertainty band, that *consumes* both signals — FSRS
retrievability as a prior/covariate and Diamond-#1 MCQ performance as the item responses — mirroring how
real high-stakes exams (and NCLEX/DET/UWorld self-assessments) compute readiness.

### 1A — Does IRT actually beat naive (%-correct) scoring? (the core claim)

> "While scoring is much more sophisticated with IRT, for most tests, the correlation between the theta
> estimate and a traditional score is very high; often it is 0.95 or more. A graph of IRT scores against
> traditional scores shows an ogive shape implying that the IRT estimates separate individuals at the
> borders of the range more than in the middle."
> — *Item Response Theory*, Wikipedia (summarizing standard psychometrics; Embretson & Reise 2000; Lord 1980).

> "We concluded that possible score changes caused by the use of different proficiency estimators will be
> nonnegligible, **particularly for low- and high-performing examinees.**"
> — Yi, Zhang & Lu / ETS, *Effectiveness of IRT Proficiency Estimation Methods Under Adaptive Multistage
> Testing*, ETS RR (doi:10.1002/ets2.12057), Conclusions.

**Methodology:** psychometric first principles + ETS simulation study of number-correct vs item-pattern
(IRT) scoring and Bayesian vs non-Bayesian estimators under multistage adaptive assembly.
**GRADE: A− (for the measurement fact).** The finding is robust and consensus: **IRT θ and plain
number-correct correlate ≈0.95**, and IRT's advantage concentrates *(a) at the tails and (b) under adaptive
item selection or short tests (<~30 items).* Two blunt consequences for us:
- The pass cut IS at a tail-ish region (readiness ≈ "are you above the MPS?"), so IRT *could* add real
  precision **exactly where it matters** — this is the one genuinely attractive part.
- But a study product is **not adaptively selecting items to minimize SE**, and it has abundant items, so
  most of IRT's ecological advantage (fewer items for equal precision) does not accrue. Against an *honest*
  %/two-score dashboard the marginal gain is small.

### 1B — Can it be calibrated in a 4-day forked-Anki build? (the killer)

> "Estimation-based CATs using item response theory … offer high accuracy and adapt efficiently to the
> pupil's personal ability, but have a complex technical implementation due to the permanent need to
> estimate the pupil's personal ability after each response and **also require a large pool of questions in
> order to function optimally.**"
> — Ebenbeck & Gebhardt 2024, *Duration versus accuracy — what matters for CAT in schools?*, *J. Computer
> Assisted Learning* (epub.ub.uni-muenchen.de/125829).

**Methodology:** review + comparison of CAT implementation classes (IRT-estimation, item-score, fixed-branch).
**GRADE: B+ (implementation reality).** To produce a *calibrated* θ you must estimate item parameters
(2PL: discrimination a, difficulty b; 3PL adds guessing c). Reliable a/b/c estimation needs **hundreds of
examinee responses per item**; validating that θ predicts actual **CFA pass/fail** needs a longitudinal
cohort who used the app *and then sat the real exam and reported the result.* A forked Anki on day 1 has
**neither.** Options that ARE buildable — a 1PL/**Rasch** model with **expert-assigned** difficulties, or a
tiny-sample fit — yield parameters of **UNVERIFIED** quality; the resulting "readiness number" is a
psychometric costume, not a calibrated estimate.

### Verdict on Candidate 1
- **NEW for a study product?** *Partly.* IRT-based readiness + predicted score + pass-probability is
  **standard in test prep** (see Candidate 6 below: UWorld/Kaplan predicted scores, Duolingo English Test is
  a full IRT-CAT). It is **NOT new** as "a readiness number from IRT." What is genuine whitespace: **fusing a
  spaced-repetition memory model (FSRS) with an item-response ability estimate into one readiness state** —
  no Anki-ecosystem / SRS product does this. So the novelty is the *fusion*, narrowly.
- **Why hasn't a competitor shipped the fusion?** Classification: **NEEDS LONGITUDINAL STUDENT→EXAM DATA THEY
  LACK (dominant)** + partly **technically non-trivial.** Not a weak moat — but also not one a 4-day fork can
  cross; the fork is on the *wrong side* of the same data moat. → **MOAT is real but we can't cross it in 4
  days either.**
- **Evidence:** core measurement claim A−; but the load-bearing claim we'd actually ship ("*our* θ is a
  calibrated, validated readiness estimate for CFA") is **D / UNVERIFIED** without cohort data.
- **4-day buildability:** *Calibrated version: NO.* *Uncalibrated Rasch band (expert b's, wide CI, honest
  disclaimer): YES* — but that is a D1 enhancement, deterministic math, no ML, no new data.
- **Demo draw:** HIGH (a single "exam-day readiness θ with confidence band" is the flashiest possible
  screen) — which is exactly why it's dangerous: high draw + uncalibrated number = the honesty-rule
  violation the pipeline exists to prevent.
- **DOMINATES THE 3? NO.** It does not add an independent A-tier *learning* mechanism; it re-scores D1's
  signals with marginal precision gain and maximal data risk. Best case: a future unifying **layer** on D1,
  shipped only as an uncertainty-first honesty feature. Matches ledger candidate #4 (7.0, "memory→readiness
  leap is data-starved — the spec itself concedes this").

---

## CANDIDATE 2 — Model-based personalized review to a deadline (Lindsey et al. 2014 — the strongest real result found)

> "personalized review yielded a **16.5% boost in course retention over current educational practice
> (massed study) and a 10.0% improvement over a one-size-fits-all strategy for spaced study.** … On the
> second exam, personalized review boosted retention by 16.5% over massed review, t(175)=1.11, p<.001,
> **Cohen's d = 1.42**, and by 10.0% over generic review, t(175)=6.59, p<.001, **Cohen's d = 0.88**."
> — Lindsey, Shroyer, Pashler & Mozer 2014, *Improving Students' Long-Term Knowledge Retention Through
> Personalized Review*, *Psychological Science* 25(3) (doi:10.1177/0956797613504302).

**Methodology:** semester-long, **deployed in a real middle-school foreign-language course**; retrieval-
practice software (COLT) drove one of three time-matched schedulers (massed / generic-spaced /
personalized-spaced from a psychological memory model + statistical individual-difference inference); two
**proctored cumulative exams** (end-of-semester and +28 days), items balanced across chapters/schedulers.
**GRADE: A−.** Deployed, real curriculum, delayed cumulative-exam outcome, large effects with CIs, benefit
*grows* over the 28-day gap. Held below A only for population (middle-schoolers) and domain (Spanish vocab).

**This is the crown empirical jewel of the frontier scan — and it argues FOR Diamond #1, not against it.**
"A memory model + individual-difference inference + time-matched personalized scheduling to a cumulative
exam" **is Diamond #1** (FSRS = the memory model + per-item difficulty/stability; `BuildExamQueue` = the
deadline-matched scheduler). So:
- **NEW for a study product?** No — and that's the point: it's the *evidence base* D1 was missing an
  adult/applied anchor for. Add it as a **load-bearing A− pillar under D1.**
- **Why hasn't a competitor done it?** Anki/SuperMemo already do personalized spaced review; the *deadline-
  matched* twist is D1's contribution and remains rare (incumbents optimize infinite retention). Moat =
  execution + the honest deadline reframe, not novelty.
- **Buildability:** already inside D1's GO-WITH-CUTS plan.
- **DOMINATES THE 3? NO — it's D1's evidence, not an independent mechanism.** **Action: promote to D1's
  pillar table.**

---

## CANDIDATE 3 — Model-based OPTIMAL review scheduling (MEMORIZE / Tabibian PNAS 2019; Pavlik–Anderson ACT-R)

> "for two well-known human memory models, we show that, if the learner aims to maximize recall probability
> … subject to a cost on the reviewing frequency, **the optimal reviewing schedule is given by the recall
> probability itself.** … learners who follow a reviewing schedule determined by our algorithm memorize more
> effectively than learners who follow alternative schedules determined by several heuristics."
> — Tabibian, Upadhyay, De, Zarezade, Schölkopf & Gomez-Rodriguez 2019, *Enhancing human learning via spaced
> repetition optimization*, *PNAS* 116(10):3988–3993 (doi:10.1073/pnas.1815156116).

**Methodology:** marked temporal point-process / stochastic-optimal-control derivation, then a **large-scale
NATURAL (observational) experiment on Duolingo** — for each learner, correlate how closely their actual
review sequence matched MEMORIZE against their empirical forgetting rate.
**GRADE: B− for the empirical claim / A for the math.** The theorem is elegant and correct; but the human
evidence is **observational and confounded** — "users who happened to review closer to MEMORIZE forgot less"
conflates the algorithm with engagement/motivation/ability (no randomization, no controlled A/B). Not an RCT.

> "the optimized condition showed **significant benefits with large effect sizes for both improved recall and
> recall latency.**" — Pavlik & Anderson 2008, *Using a model to compute the optimal schedule of practice*,
> *J. Exp. Psychol.: Applied* 14(2):101 (doi:10.1037/1076-898x.14.2.101).
> BUT: "the improvement was **not significant compared with even spacing** … the optimization … has the
> desirable property of automatically identifying difficult items and giving them more practice."
> — Pavlik & Anderson, CMU tech report version (doi:10.1184/r1/6613415).
> AND the models disagree: "The Pavlik and Anderson model robustly predicts that **contracting spacing** is
> best … the Mozer et al. model predicts **equal or expanding spacing** … The limited experimental data …
> appear to be consistent with the **latter**." — Cepeda-lab / Mozer, *Optimizing Memory Retention with
> Cognitive Models* (yorku.ca/ncepeda LMCP2009).

**GRADE: B (contested).** Two grade-B model families make **opposite** optimal-schedule predictions and the
sparse data mildly favor the *other* one from ACT-R; Pavlik's own advantage over plain even spacing was
sometimes non-significant.
- **NEW for a study product?** No. **FSRS (already shipped in Anki) is itself a model-based, recall-
  probability-driven scheduler** — the exact family MEMORIZE formalizes ("review intensity ∝ probability of
  forgetting" ≈ FSRS's retrievability-threshold logic). Adopting MEMORIZE/Pavlik would be **reimplementing
  what the fork already has.**
- **Why hasn't a competitor "done it"?** They effectively have (FSRS/SuperMemo/Duolingo Half-Life
  Regression). No moat.
- **Buildability:** N/A — redundant with FSRS.
- **DOMINATES THE 3? NO.** Elegant theory, contested/observational evidence, already embodied by FSRS.
  **Keep as a design citation for D1's scheduler, not a diamond.**

---

## CANDIDATE 4 — Knowledge tracing (DKT / SAKT / BKT) as the readiness/scheduling brain

> "The authors of Deep Knowledge Tracing (DKT …) reported a massive 25% gain in AUC … over BKT … Since then,
> some authors have shown that the performance gain of DKT over BKT is not as substantial … Logistic
> regression is less susceptible to overfitting than DKT on smaller datasets. But given enough data, DKT
> takes the lead … **In our experiments, SAKT underperforms DKT on all datasets.** This observation
> contradicts results from Pandey and Karypis (2019)."
> — Gervet, Koedinger, Schneider & Mitchell, *When is Deep Learning the Best Approach to Knowledge Tracing?*,
> *JEDM* (jedm.educationaldatamining.org/…/451).

> "SAKT underperformed DKT in all of the datasets, which is contrary to prior results … Evidence that even
> simple baselines with little to no predictive value may outperform DLKT models, especially in terms of
> accuracy — highlighting importance of selecting proper baselines."
> — Sarsa et al. 2022 / JEDM replication studies (juholeinonen.com sarsa2022empirical; JEDM 553).

**Methodology:** multiple empirical benchmark comparisons across 9+ real tutoring datasets (ASSISTments,
EdNet, KDDCup); metric = AUC of next-response prediction.
**GRADE: A− (for the negative/blunt finding).** The KT literature has **eaten its own hype**: DKT's headline
gain doesn't replicate; **logistic regression (PFA/DASH/BestLR) matches or beats DKT on realistic data**;
SAKT's advantage is dataset-dependent and often reverses; typical AUC clusters ~0.72–0.80 regardless.
Three fatal problems for us:
1. **AUC is next-question *prediction*, NOT a learning-outcome gain.** There is **no RCT** showing a
   DKT/SAKT-driven schedule raises *exam scores* over FSRS. (UNVERIFIED that any exists.)
2. **Data-hungry:** deep KT needs large per-learner interaction logs the fork lacks at launch.
3. **FSRS is already a competitive knowledge-tracing model.** Swapping it for DKT trades a validated,
   shipped scheduler for an unvalidated, heavier one.
- **NEW for a study product?** The models aren't new; a *DKT-driven Anki* would be novel-ish but pointless
  given (1)–(3).
- **Why hasn't a competitor shipped DKT scheduling?** **NEEDS LONGITUDINAL DATA + no proven outcome benefit**
  — a legitimate reason, not a weak moat.
- **Buildability:** NO (data + ML training blow the 4-day budget; ledger's standing "research-project" veto).
- **DOMINATES THE 3? NO. REJECT.**

---

## CANDIDATE 5 — Prerequisite knowledge graph / learning map (mastery-gated DAG)

> "Results showed the experimental group significantly outperformed the control group in final exam scores
> (**68.7 vs. 61.8, p=0.007**), with a notable 11.25-point advantage at the 25th percentile."
> — Atlantis Press 2026, *Knowledge Graph-Driven Intelligent Teaching …* (Probability Theory course, Ordos
> Institute; quasi-experimental, two cohorts).

> "96 undergraduate students … randomly divided into two groups of 48 … the experimental group used the
> knowledge graph mode … the control group used the list mode … students who learned with the … knowledge
> graph-based system outperformed those who used the conventional learning system."
> — Ijmlo 2024 (Hong Kong, English academic-reading task; N=96 RCT).

**Methodology:** small single-course quasi-/randomized studies, mostly 2024–2026, mostly China/HK, mixed
outcomes (some report satisfaction/experience more than hard transfer).
**GRADE: C (as an intervention claim).** Small N, single-course, **confounded** (KG *interface* vs plain list
= novelty/engagement confound), no adult-professional high-stakes replication, no meta-analysis with tight
CI. The 2026 Frontiers CLIL study even reports a persistent "**knowledge-action gap** … additional immersive
simulations are required to cultivate high-order procedural knowledge" — i.e., the graph helps *conceptual
scaffolding* but not the applied performance CFA actually tests.
- **NEW for a study product?** Prereq gating exists (Khan Academy, ALEKS knowledge-space theory). Not novel;
  and ledger already logged "knowledge-graph mastery gating (anecdotal evidence, heavy DAG build)" as an
  also-ran.
- **Why hasn't a CFA competitor shipped a validated DAG?** **Technically/content hard** (authoring +
  validating a correct CFA prerequisite DAG across ~10 topics × LOS is a large content project) with **thin
  outcome evidence** — reasonable reason, not a strong-moat whitespace.
- **Buildability:** NO for a *validated* CFA DAG in 4 days (heavy authoring). A toy DAG is buildable but
  unproven.
- **DOMINATES THE 3? NO. REJECT as diamond;** at most a future structural layer over D1's LOS tags.

---

## CANDIDATE 6 — Competitor reality check: is "IRT readiness / predicted score" already table stakes?

> "Duolingo English Test (DET) is an AI-driven, computer-adaptive language proficiency exam … It uses item
> response theory (IRT) to efficiently estimate ability by adjusting item difficulty based on test-taker
> performance." · "UWorld … self-assessments … provide a **predicted Step 1 score** … considered highly
> accurate in estimating final exam performance." · Kaplan NCLEX: "Two **'Readiness Tests' that predict your
> probability of passing**" + "full-length CAT simulations."
> — synthesis of Kaplan-vs-UWorld 2026 teardown, UWorld MCAT/USMLE pages, DET IRT documentation.

**GRADE: A (market fact).** IRT-CAT and predicted-score/pass-probability are **mature, shipped** features in
adjacent high-stakes prep (DET, UWorld, Kaplan). Implication for the "diamond among diamonds":
- The **readiness number itself is not novel** — it's table stakes in test prep.
- Every incumbent computes it on a **discrete mock-exam event**, calibrated on **years of examinee→official-
  score data**. That data is precisely the moat, and it's **earned over exam cycles**, echoing the
  pipeline's Iteration-1 meta-finding ("most of the moat is trust/calibration earned over exam cycles, not
  tech").
- The **only** unclaimed whitespace is fusing an SRS memory model with the item-response ability estimate —
  Candidate 1's narrow novelty — which dies on the same data moat for a 4-day fork.

---

## CANDIDATE 7 — Error-specific / elaborated remediation feedback (frontier check on the ledger's #5)

> "elaborated feedback (EF; e.g., providing an explanation) produced larger effect sizes (**0.49**) than
> feedback regarding the correctness of the answer (KR; **0.05**) or providing the correct answer (KCR;
> **0.32**). EF was particularly more effective … for **higher order learning outcomes.**"
> — Van der Kleij, Feskens & Eggen 2015, *Review of Educational Research* 85(4) (doi:10.3102/0034654314564881).

**GRADE: B+.** Robust meta-analytic support that *elaborated* > *correctness-only* feedback, strongest for
higher-order outcomes and in mathematics (relevant to CFA quant).
- **NEW?** No — and it is **already inside** D1/D2/D3 (elaborated explanations, reveal-the-Standard, targeted
  principle-prompts at the faded step). The genuinely *new* sub-idea — an **auto error-type classifier**
  (concept/method/execution/misread/timing) routing remediation — has **UNVERIFIED classification
  reliability** (ledger #5, 6.5) and is a workflow, not a studied mechanism.
- **DOMINATES THE 3? NO.** Confirms a design choice already made; not an independent diamond. Keep the
  *elaborated-feedback* principle as a shared A/B− design pillar; keep the *classifier* as an unproven
  garnish.

---

## RANKED SUMMARY (top 5 + verdict)

| # | Candidate | Best evidence | New for a study product? | Why no competitor? (moat) | 4-day build | Dominates the 3? |
|---|-----------|---------------|--------------------------|---------------------------|-------------|------------------|
| 1 | **IRT/Rasch readiness fusing memory+performance** (the intended DoD) | Measurement fact A− (θ↔NC r≈0.95, gain only at tails/adaptive); *our* validated readiness = **D/UNVERIFIED** | Readiness# = NO (table stakes); **SRS+IRT fusion = narrow YES** | **Needs longitudinal student→exam data they lack** (+ tech) — real moat the fork also can't cross | Calibrated **NO**; uncalibrated honesty-band **YES** (= D1 enhancement) | **NO** |
| 2 | **Lindsey 2014 personalized review to a deadline** | **A−, d=0.88–1.42, deployed cumulative exam** | No — it **IS** D1 | Incumbents chase infinite retention, not deadline peak | Already in D1 | **NO — it's D1's evidence** (promote to pillar) |
| 3 | **Model-based optimal scheduling (MEMORIZE / Pavlik-ACT-R)** | Math A; human evidence **B−/B, observational + models contradict** | No — **FSRS already is this** | None (already commoditized) | Redundant w/ FSRS | **NO** |
| 4 | **Knowledge tracing (DKT/SAKT/BKT)** | **A− negative finding**: doesn't beat LR/BKT; AUC≠learning gain; no outcome RCT | Novel-ish but pointless | Needs data + no proven benefit | **NO** (ML/data) | **NO — reject** |
| 5 | **Prerequisite knowledge graph / learning map** | **C** (small, confounded, China/HK, "knowledge-action gap") | No (ALEKS/Khan gate already) | Content-hard DAG + thin evidence | **NO** (validated DAG) | **NO — reject** |
| (6) | Error-specific/elaborated remediation | B+ (0.49 vs 0.05) | No — already in D1/D2/D3 | — | Already shipped | **NO** (classifier unproven) |

### VERDICT
**Nothing on the academic/learning-engineering frontier dominates D1–D3, and no winner is being invented.**
The frontier's contribution is **defensive and consolidating, not disruptive:**

1. **Lindsey et al. 2014 (A−, d up to 1.42, deployed, cumulative exam) should be promoted to a load-bearing
   pillar under Diamond #1** — it is the adult-ish, applied, deployed evidence that "personalized memory-model
   scheduling to a cumulative exam" produces large real retention gains. This *strengthens* the existing
   diamond stack.
2. The **IRT-calibrated readiness fusion is the right long-term frame and genuine SRS whitespace, but it is
   NOT a 4-day diamond**: calibrating and validating θ against real CFA outcomes needs longitudinal data the
   fork lacks, and IRT's precision edge over an honest two-score/% dashboard is marginal without adaptive
   selection. Shipping the *number* without the data = the ledger's already-diagnosed "data-starved readiness
   leap" (candidate #4) and a direct threat to the pipeline's honesty rule.
3. **The only buildable, honest upgrade** is to add a **deliberately uncalibrated, uncertainty-first Rasch
   readiness band** to D1's dashboard — expert-judged item difficulties, always shown with a wide CI and an
   explicit "not validated against real exam results" disclaimer. This is an **enhancement to Diamond #1, not
   a fourth diamond**, and its whole value is *honesty about uncertainty*, never a flashy P(pass).
4. **Reject as diamonds:** knowledge tracing (data-hungry, AUC≠learning, no outcome RCT, FSRS already
   competitive), model-based optimal scheduling (contested/observational, already = FSRS), prerequisite
   knowledge graphs (weak confounded evidence, heavy content build), error-type classifier (unproven
   reliability).

**Blunt one-liner:** the real "diamond among diamonds" the user hoped for — a calibrated exam-readiness brain
— is gated behind **longitudinal student→exam data**, which is exactly the moat competitors spent years and
exam cycles buying. A 4-day fork cannot manufacture that data, so the honest move is to *ship D1's separated
memory/performance scores + an explicitly-uncertain readiness band*, cite Lindsey 2014 as the deployed proof
that the scheduling half works, and refuse to print a confident readiness number we cannot back.
