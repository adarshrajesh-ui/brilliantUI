# Finder 16 — Probabilistic / Bayesian Recall Models

**Angle:** Probabilistic / Bayesian models of recall used for scheduling — Ebisu (Bayesian half-life), exponential vs power-law forgetting models, and statistical treatments of retrievability that directly inform scheduler design.

**Swarm context:** This finder explains the *statistical core* underneath modern spaced-repetition schedulers. Anki's classic SM-2 is a hand-tuned heuristic with no explicit probability model; FSRS is a 3-component (Difficulty/Stability/Retrievability) model that assumes an exponential (and later power) forgetting curve and fits parameters to data. The sources below trace where that statistical machinery comes from: the empirical *form* of the forgetting curve (power vs exponential), the rational/Bayesian justification for it, and the family of probabilistic schedulers (Ebisu, half-life regression, DASH, MEMORIZE, ACT-R/Pavlik) that formalize "schedule the review when predicted recall probability hits threshold X."

---

## Sources

### 1. Ebisu: Bayesian spaced repetition (public-domain library + literate docs)
- **Title:** Ebisu — Public-domain Bayesian spaced-repetition scheduling (library + literate documentation)
- **Authors:** Ahmed Fasih (fasiha)
- **Year:** 2017–present (actively maintained)
- **Venue:** Open-source project / self-published technical writeup (GitHub + GitHub Pages)
- **URL:** https://github.com/fasiha/ebisu  • https://fasiha.github.io/ebisu/  • announcement: https://fasiha.github.io/post/ebisu/
- **Relevance (model form / scheduling use / weakness):** Model form — assumes exponential forgetting of recall probability `p = 2^(−Δ/h)` but, crucially, places a **Beta(α, β) prior on the recall probability at one half-life** and treats each quiz as a Bernoulli observation, yielding a closed-form-ish Bayesian posterior update via moment-matching (no Monte Carlo needed). Scheduling use — `predictRecall` gives the current expected recall probability and `updateRecall` refits the model after each pass/fail, so a scheduler reviews the card whose posterior recall probability is lowest / has decayed to a chosen percentile. Weakness — the single-half-life Beta model is a deliberately thin memory model: it does not natively capture the *spacing effect* (that successful spaced reviews should multiplicatively grow stability the way FSRS's stability does), so successive intervals grow more conservatively than empirically optimal, and v2/v3 of the library had to add rescaling/"power-law" tails to fix over-aggressive decay.
- **Relevance score: 10/10** — the canonical, explicitly Bayesian recall-probability scheduler; the most direct probabilistic counterpoint to SM-2/FSRS.

### 2. On the Form of Forgetting
- **Title:** On the Form of Forgetting
- **Authors:** John T. Wixted, Ebbe B. Ebbesen
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 409–415
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00175.x
- **Relevance (model form / scheduling use / weakness):** Model form — across word recall, face recognition, and a pigeon delayed-matching task, the retention curve `R(t)` is fit best by a **power function `R(t) = a·t^(−b)`**, beating exponential, hyperbolic, logarithmic, linear, and exponential-power alternatives (and Ebbinghaus's savings data is re-shown to be power-law). Scheduling use — this is the empirical foundation for *why* a scheduler must model long, fattening intervals: under a power law the instantaneous forgetting rate keeps slowing, justifying ever-expanding review gaps (and directly motivating FSRS's move from a pure exponential to a power forgetting curve). Weakness — the paper analyzes *aggregate/averaged* data, and a power law fit to averaged curves can be an artifact of mixing exponential decays with different rates (see #3, #10), so "power law" may describe the population, not the individual card a scheduler actually needs to predict.
- **Relevance score: 9/10** — defines the functional form debate (power vs exponential) that every modern retrievability model inherits.

### 3. One Hundred Years of Forgetting: A Quantitative Description of Retention
- **Title:** One Hundred Years of Forgetting: A Quantitative Description of Retention
- **Authors:** David C. Rubin, Amy E. Wenzel
- **Year:** 1996
- **Venue:** Psychological Review, 103(4), 734–760
- **URL/DOI:** https://doi.org/10.1037/0033-295X.103.4.734
- **Relevance (model form / scheduling use / weakness):** Model form — a meta-analysis fitting **105 two-parameter retention functions to 210 datasets**, finding four near-tied winners: the logarithmic, power, exponential-in-√t, and hyperbola-in-√t functions. Scheduling use — establishes that no single closed-form retrievability curve is uniquely "correct," which is precisely why schedulers like FSRS treat the forgetting-curve shape as a *fitted hyperparameter* rather than a fixed law, and why Bayesian models put priors over curve parameters. Weakness — the study can only rank functions on goodness-of-fit to historical aggregate data, cannot resolve the power-vs-exponential identifiability problem at the individual level, and excludes autobiographical memory; it warns that data are too coarse to discriminate the survivors, undercutting any scheduler that hard-codes one form.
- **Relevance score: 8/10** — the definitive "which curve?" reference that frames retrievability modeling as model selection under uncertainty.

### 4. Reflections of the Environment in Memory
- **Title:** Reflections of the Environment in Memory
- **Authors:** John R. Anderson, Lael J. Schooler
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 396–408
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00174.x
- **Relevance (model form / scheduling use / weakness):** Model form — a **rational (Bayesian) analysis** arguing memory's availability tracks the *need probability* of an item, which in real environments (NYT headlines, parental speech, email) decays as a power function of recency and rises with frequency/spacing; memory's retention and practice functions mirror these environmental statistics. Scheduling use — provides the normative justification for treating "should I review now?" as estimating the posterior probability that an item will be *needed/recalled*, and is the conceptual ancestor of ACT-R activation (#8) and the DASH study-history features (#7). Weakness — it is a descriptive/optimality argument about why power laws appear, not an operational scheduler; it does not specify per-item parameter estimation, so it cannot be deployed without a downstream statistical model (which is exactly what later work supplies).
- **Relevance score: 8/10** — the Bayesian "memory ≈ optimal need-probability estimation" thesis that legitimizes probabilistic scheduling.

### 5. A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression)
- **Title:** A Trainable Spaced Repetition Model for Language Learning
- **Authors:** Burr Settles, Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of ACL 2016 (54th Annual Meeting of the Association for Computational Linguistics), pp. 1848–1858
- **URL/DOI:** https://aclanthology.org/P16-1174/  • DOI: https://doi.org/10.18653/v1/P16-1174
- **Relevance (model form / scheduling use / weakness):** Model form — **Half-Life Regression (HLR)** models recall as `p = 2^(−Δ/h)` with the half-life `h = exp(θ·x)` a log-linear function of features (history of right/wrong answers + lexeme tags), fit by minimizing squared error on both observed recall *and* an inferred half-life term. Scheduling use — Duolingo's production scheduler reviews items whose predicted `p` has dropped toward a target; HLR cut recall-prediction error 45%+ over Leitner/Pimsleur and lifted daily engagement 12% in a live experiment. Weakness — it is a point-estimate (MAP-ish) regression, not fully Bayesian, so it gives no uncertainty on `h` (unlike Ebisu) and bakes in the exponential form; its half-life target is derived from a single observation per session, making early estimates noisy for new items.
- **Relevance score: 9/10** — the largest-scale deployed statistical recall model; bridges Ebbinghaus-style curves and modern ML schedulers.

### 6. Improving Students' Long-Term Knowledge Retention Through Personalized Review (DASH)
- **Title:** Improving Students' Long-Term Knowledge Retention Through Personalized Review
- **Authors:** Robert V. Lindsey, Jeffery D. Shroyer, Harold Pashler, Michael C. Mozer
- **Year:** 2014
- **Venue:** Psychological Science, 25(3), 639–647
- **URL/DOI:** https://doi.org/10.1177/0956797613504302
- **Relevance (model form / scheduling use / weakness):** Model form — **DASH (Difficulty, Ability, Study-History)** is a hierarchical Bayesian / logistic model: recall probability is a logistic function of an item-difficulty term, a student-ability term, and time-windowed counts of prior study outcomes, fit with statistical inference over individual differences. Scheduling use — the fitted model predicts per-student-per-item recall and the scheduler picks items below a retention threshold; in a semester-long middle-school study it beat massed review by 16.5% and generic spaced review by 10.0%. Weakness — DASH needs substantial historical data to estimate latent ability/difficulty (cold-start problem), is heavier to fit than SM-2/Ebisu, and its windowed study-history features are an engineered approximation to true memory dynamics rather than a mechanistic forgetting curve.
- **Relevance score: 8/10** — shows a Bayesian latent-trait recall model outperforming one-size-fits-all spacing in a real classroom.

### 7. Enhancing Human Learning via Spaced Repetition Optimization (MEMORIZE)
- **Title:** Enhancing Human Learning via Spaced Repetition Optimization
- **Authors:** Behzad Tabibian, Utkarsh Upadhyay, Abir De, Ali Zarezade, Bernhard Schölkopf, Manuel Gomez-Rodriguez
- **Year:** 2019
- **Venue:** Proceedings of the National Academy of Sciences (PNAS), 116(10), 3988–3993
- **URL/DOI:** https://doi.org/10.1073/pnas.1815156116  • code: https://github.com/Networks-Learning/memorize
- **Relevance (model form / scheduling use / weakness):** Model form — represents reviews as a **marked temporal point process** and recall as a stochastic differential equation with jumps; recall probability `m(t)` decays between reviews and jumps on each review. Scheduling use — framed as stochastic optimal control, they *prove* that to maximize recall subject to a review-effort cost, the optimal review **intensity is proportional to the probability of forgetting**, `u*(t) = q^(−1/2)·(1 − m(t))` — i.e., review urgency = how close you are to forgetting; validated on Duolingo data. Weakness — the optimality proof holds only for the specific (exponential-style) memory models assumed; if the true forgetting curve is power-law or mis-specified the "optimal" schedule is no longer optimal, and the continuous-intensity formulation is harder to operationalize than a simple threshold/interval rule.
- **Relevance score: 9/10** — gives the rigorous control-theoretic answer ("review ∝ P(forget)") that underpins all retrievability-threshold schedulers, including FSRS's desired-retention knob.

### 8. Using a Model to Compute the Optimal Schedule of Practice (ACT-R)
- **Title:** Using a Model to Compute the Optimal Schedule of Practice
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** Journal of Experimental Psychology: Applied, 14(2), 101–117
- **URL/DOI:** https://doi.org/10.1037/1076-898X.14.2.101  • PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf
- **Relevance (model form / scheduling use / weakness):** Model form — an **ACT-R activation model** where memory strength = a power-law sum over prior practice events (recency + frequency + spacing), with item difficulty `β` and a sigmoidal activation→recall-probability link. Scheduling use — computes, per item, the spacing interval that maximizes *long-term gain per unit study time* by balancing the spacing effect against time cost, then drills the item with lowest activation; the optimized schedule produced large effect-size gains in recall and latency. Weakness — requires pre-fitting many ACT-R parameters from prior data and assumes the activation/decay equation is correct; the optimization is computationally and data-intensive relative to SM-2, and the spacing-effect parameterization can be brittle across domains.
- **Relevance score: 8/10** — the mechanistic, probability-of-recall-from-activation model that directly inspired data-driven schedulers and FSRS's stability concept.

### 9. Note on the Power Law of Forgetting / Emergence of power forgetting from exponential traces
- **Title:** A note on the power law of forgetting (and the curve-averaging account of power-law forgetting)
- **Authors:** Michael J. Kahana, Mark Adler
- **Year:** 2002 (technical note; builds on Anderson & Tweney 1997)
- **Venue:** University of Pennsylvania Computational Memory Lab technical note
- **URL:** https://memory.psych.upenn.edu/files/pubs/KahaAdle02.pdf
- **Relevance (model form / scheduling use / weakness):** Model form — analyzes whether the population power-law forgetting curve can **emerge from averaging many individual exponential decays** with different rates, and provides proofs/simulations (linear and exponential trace decay) showing aggregate power forgetting arises rapidly even when each trace is exponential. Scheduling use — directly relevant to scheduler design choice: it argues a scheduler should model *individual-item* forgetting (plausibly exponential, as Ebisu/HLR assume) rather than fit the misleading aggregate power curve, informing whether retrievability should be exponential or power. Weakness — it is a short analytic note rather than a large empirical study, and the exponential-vs-power identifiability it raises remains unresolved at the single-item level, so it cautions rather than prescribes.
- **Relevance score: 7/10** — sharpens the central statistical question (is per-card forgetting exponential or power?) that decides a scheduler's retrievability function.

### 10. Artifactual Power Curves in Forgetting
- **Title:** Artifactual Power Curves in Forgetting
- **Authors:** Richard B. Anderson, Ryan D. Tweney
- **Year:** 1997
- **Venue:** Memory & Cognition, 25(5), 724–730
- **URL/DOI:** https://doi.org/10.3758/BF03211315
- **Relevance (model form / scheduling use / weakness):** Model form — demonstrates that **arithmetic averaging of exponential forgetting curves (or noisy data with floor effects) can manufacture a spurious power-law fit**, so the aggregate power function may not reflect the true form of individual forgetting. Scheduling use — a direct caution for retrievability modeling: if a scheduler infers a power-law forgetting curve from pooled review logs, it may schedule sub-optimally for any single card whose real decay is exponential; supports per-user/per-item Bayesian estimation (Ebisu/DASH) over global curve fitting. Weakness — it shows power fits *can* be artifactual but does not prove the exponential is the true form either, leaving the underlying retrievability law empirically underdetermined.
- **Relevance score: 7/10** — the key methodological critique explaining why "the forgetting curve is power-law" must be treated cautiously in scheduler design.

---

## Synthesis for the swarm

- **The statistical core of modern schedulers** reduces to one question: estimate the *probability of recall* `p(t)` for each item and review when it crosses a target (FSRS calls this "desired retention"; MEMORIZE proves review intensity ∝ `1 − p`).
- **Functional form is contested** (Wixted & Ebbesen power law #2; Rubin & Wenzel's 4-way tie #3; Anderson & Tweney / Kahana artifact arguments #9–#10). FSRS pragmatically *fits* the curve; Ebisu/HLR assume exponential per-item.
- **Bayesian treatments** (Ebisu #1, DASH #6, Anderson & Schooler rational analysis #4) add **uncertainty quantification and personalization** that SM-2 entirely lacks and FSRS only partially provides via global parameter fitting.
- **Anki/SM-2 weakness in this lens:** SM-2 has *no* probability model, no per-card uncertainty, and ignores the spacing-effect dynamics that ACT-R (#8) and MEMORIZE (#7) formalize — it is a fixed heuristic approximating a curve it never explicitly represents.
