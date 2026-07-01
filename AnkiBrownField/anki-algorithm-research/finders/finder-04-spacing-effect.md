# Finder 04 — Spacing Effect

**Angle:** The spacing effect & distributed practice in cognitive psychology — the empirical phenomenon that Anki's SM-2 / FSRS schedulers exploit, including the optimal-spacing and expanding- vs. equal-interval retrieval literature.

**Core claim this evidence base supports:** Anki's defining behavior — repeatedly presenting a card at *growing* time gaps rather than massing reviews — is justified by a century of memory research showing that (a) distributed practice beats massed practice for durable retention, and (b) the *best* gap is not fixed but scales with how long you want to remember. The weaknesses below show where the simple "always expand the interval" heuristic that SM-2 hard-codes diverges from what the data actually say.

---

## Sources

### 1. Cepeda, Pashler, Vul, Wixted & Rohrer (2006) — Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis
- **Authors:** Nicholas J. Cepeda, Harold Pashler, Edward Vul, John T. Wixted, Doug Rohrer
- **Year:** 2006
- **Venue:** *Psychological Bulletin*, 132(3), 354–380
- **DOI / URL:** https://doi.org/10.1037/0033-2909.132.3.354 (open PDF: https://www.yorku.ca/ncepeda/publications/CPVWR2006.pdf)
- **Relevance (what / why-how / weakness):** WHAT — A meta-analysis of 839 assessments across 317 experiments establishing the distributed-practice effect as one of the largest, most robust findings in memory research, and the canonical empirical foundation for any spaced-repetition tool. WHY/HOW — It shows the effect of spacing is not a simple constant: inter-study interval (ISI) and retention interval interact, such that the ISI producing maximal retention *increases* as the desired retention interval increases — exactly the "expand the gap over time" behavior Anki implements. WEAKNESS re scheduling — It demonstrates that short/massed gaps are actively harmful for long-term goals and that no single multiplier is optimal across retention horizons, exposing the limitation of SM-2's one-size-fits-all ease-factor expansion that ignores the learner's target retention window.
- **Relevance score: 10/10**

### 2. Cepeda, Vul, Rohrer, Wixted & Pashler (2008) — Spacing Effects in Learning: A Temporal Ridgeline of Optimal Retention
- **Authors:** Nicholas J. Cepeda, Edward Vul, Doug Rohrer, John T. Wixted, Harold Pashler
- **Year:** 2008
- **Venue:** *Psychological Science*, 19(11), 1095–1102
- **DOI / URL:** https://doi.org/10.1111/j.1467-9280.2008.02209.x (open PDF: https://www.yorku.ca/ncepeda/publications/CVRWP2008.pdf)
- **Relevance (what / why-how / weakness):** WHAT — A large (>1,350 participant) study mapping a 3-D performance surface of study-gap × test-delay over durations up to a year, producing the famous "temporal ridgeline" of the single optimal gap for each retention interval. WHY/HOW — It quantifies the rule a scheduler should follow: the optimal absolute gap grows as the test delay grows, while the optimal gap *as a proportion* of the retention interval shrinks from ~20–40% (1-week goal) to ~5–10% (1-year goal), explaining why review intervals should lengthen but at a decelerating ratio. WEAKNESS re scheduling — It shows "many educational practices are highly inefficient" and that overly short OR overly long gaps both cost retention; SM-2's fixed geometric growth cannot track this ridgeline, motivating FSRS's retention-target-driven scheduling.
- **Relevance score: 10/10**

### 3. Cepeda, Coburn, Rohrer, Wixted, Mozer & Pashler (2009) — Optimizing Distributed Practice: Theoretical Analysis and Practical Implications
- **Authors:** Nicholas J. Cepeda, Noriko Coburn, Doug Rohrer, John T. Wixted, Michael C. Mozer, Harold Pashler
- **Year:** 2009
- **Venue:** *Experimental Psychology*, 56(4), 236–246
- **DOI / URL:** https://doi.org/10.1027/1618-3169.56.4.236 (open PDF: https://escholarship.org/content/qt1n15d7xr/qt1n15d7xr.pdf)
- **Relevance (what / why-how / weakness):** WHAT — Two multi-session lab studies (foreign vocabulary, facts, object names) with test delays up to 6 months showing an optimal gap can improve final recall by up to 150%. WHY/HOW — It confirms the spacing benefit is *nonmonotonic*: accuracy rises sharply then gradually declines as the gap grows, and the optimal gap exceeds one day only when the test delay is long — directly validating cumulative, lengthening reviews of the kind Anki schedules. WEAKNESS re scheduling — The sharp-rise/slow-decline asymmetry means under-spacing is far more costly than mild over-spacing, a nuance SM-2 cannot represent; it also shows optimal gaps depend on item type and delay, which a single ease factor ignores.
- **Relevance score: 9/10**

### 4. Landauer & Bjork (1978) — Optimum Rehearsal Patterns and Name Learning
- **Authors:** Thomas K. Landauer, Robert A. Bjork
- **Year:** 1978
- **Venue:** In Gruneberg, Morris & Sykes (Eds.), *Practical Aspects of Memory* (pp. 625–632), Academic Press
- **DOI / URL:** https://gwern.net/doc/psychology/spaced-repetition/1978-landauer.pdf (citation record: https://link.springer.com/article/10.3758/s13423-014-0636-z)
- **Relevance (what / why-how / weakness):** WHAT — The seminal demonstration of *expanding retrieval practice*: for test-type rehearsal (a fact presented once, then re-tested), a pattern of increasing intervals between successive tests beat uniform spacing. WHY/HOW — It supplies the original mechanistic rationale Anki embodies — a near-immediate first test succeeds and strengthens the item enough to survive a slightly longer gap, whose later (harder) retrieval is a more potent learning event, justifying the expanding interval ladder. WEAKNESS re scheduling — Its expanding advantage was strongest at short total durations and for test-type (not repeated-presentation) practice, foreshadowing that the "always expand" rule SM-2 generalizes does not hold universally across timescales (see #5).
- **Relevance score: 9/10**

### 5. Karpicke & Roediger (2007) — Expanding Retrieval Practice Promotes Short-Term Retention, but Equally Spaced Retrieval Enhances Long-Term Retention
- **Authors:** Jeffrey D. Karpicke, Henry L. Roediger III
- **Year:** 2007
- **Venue:** *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 33(4), 704–719
- **DOI / URL:** https://doi.org/10.1037/0278-7393.33.4.704 (open PDF: https://learninglab.psych.purdue.edu/downloads/2007/2007_Karpicke_Roediger_JEPLMC.pdf)
- **Relevance (what / why-how / weakness):** WHAT — A direct test of expanding vs. equal-interval retrieval finding expanding wins at ~10 minutes but *equal* spacing wins after 2 days. WHY/HOW — It reframes the driver of long-term gains as the *difficulty of the first retrieval*: delaying (and thus making harder) the initial test, not the expansion of later gaps per se, is what builds durable memory — a crucial correction to the naive expanding-ladder logic. WEAKNESS re scheduling — It is the strongest evidence *against* assuming expanding intervals are inherently optimal, exposing a theoretical hole in SM-2's expand-on-success design and arguing for schedulers that target a desired retrieval difficulty (low success probability) rather than blindly multiplying intervals.
- **Relevance score: 9/10**

### 6. Bjork & Bjork (1992) — A New Theory of Disuse and an Old Theory of Stimulus Fluctuation
- **Authors:** Robert A. Bjork, Elizabeth L. Bjork
- **Year:** 1992
- **Venue:** In Healy, Kosslyn & Shiffrin (Eds.), *From Learning Processes to Cognitive Processes: Essays in Honor of William K. Estes* (Vol. 2, pp. 35–67), Erlbaum
- **DOI / URL:** https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/07/RBjork_EBjork_1992.pdf (modern restatement: Bjork & Bjork 2020, https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2021/01/RABjorkELBjorkJARMAC2020ForPostingSingleSpaced.pdf)
- **Relevance (what / why-how / weakness):** WHAT — The "New Theory of Disuse" distinguishing *storage strength* (durable, ever-growing) from *retrieval strength* (volatile, current accessibility), the theoretical backbone of "desirable difficulties." WHY/HOW — It explains *why* spacing works: gains in storage strength are largest when retrieval strength is *low*, so letting a card partly fade before review (an expanding interval) maximizes durable learning — the precise mechanism Anki exploits by reviewing near the edge of forgetting. WEAKNESS re scheduling — Because storage gains require *low* retrieval strength, scheduling reviews too early (high desired retention / short intervals, as SM-2 often does for mature cards) wastes effort; the theory implies an optimal "forgetting allowance" that simple ease-factor scheduling does not explicitly target.
- **Relevance score: 8/10**

### 7. Pavlik & Anderson (2008) — Using a Model to Compute the Optimal Schedule of Practice
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** *Journal of Experimental Psychology: Applied*, 14(2), 101–117
- **DOI / URL:** https://doi.org/10.1037/1076-898X.14.2.101 (open PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf)
- **Relevance (what / why-how / weakness):** WHAT — An ACT-R-based computational model that turns the spacing effect into an explicit optimization, scheduling each item at the gap where long-term gain per unit study time is maximized. WHY/HOW — It is the conceptual bridge from psychology to algorithm: by balancing spacing (helps long-term recall) against recency/frequency and the time cost of failures, it derives that optimal intervals should *grow as repetitions accumulate and the item stabilizes* — formalizing the lengthening-interval idea that SM-2 approximates with heuristics and that FSRS pursues with fitted memory models. WEAKNESS re scheduling — It shows that doing this *well* requires per-item parameters and a fitted forgetting model, highlighting that SM-2's fixed formulas leave large efficiency gains (large effect sizes for optimized schedules) on the table.
- **Relevance score: 9/10**

### 8. Bahrick, Bahrick, Bahrick & Bahrick (1993) — Maintenance of Foreign Language Vocabulary and the Spacing Effect
- **Authors:** Harry P. Bahrick, Lorraine E. Bahrick, Audrey S. Bahrick, Phyllis E. Bahrick
- **Year:** 1993
- **Venue:** *Psychological Science*, 4(5), 316–321
- **DOI / URL:** https://doi.org/10.1111/j.1467-9280.1993.tb00571.x (record: https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.1993.tb00571.x/)
- **Relevance (what / why-how / weakness):** WHAT — A rare 9-year longitudinal study of relearning 300 word pairs at 14-, 28-, or 56-day intersession intervals, with retention tested 1–5 years later. WHY/HOW — It provides real-world, long-horizon proof that *wider* spacing yields dramatically better durable retention — 13 sessions at 56 days matched 26 sessions at 14 days — validating Anki's premise that long, expanding gaps are worth the slower initial acquisition. WEAKNESS re scheduling — The result that longer gaps slow acquisition but pay off only over years implies the "right" interval depends on the learner's true retention horizon (often unknown to the app), a parameter SM-2 never asks for and FSRS only approximates via a desired-retention setting.
- **Relevance score: 8/10**

### 9. Roediger & Karpicke (2006) — Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention
- **Authors:** Henry L. Roediger III, Jeffrey D. Karpicke
- **Year:** 2006
- **Venue:** *Psychological Science*, 17(3), 249–255
- **DOI / URL:** https://doi.org/10.1111/j.1467-9280.2006.01693.x (related/open: https://pubmed.ncbi.nlm.nih.gov/16507066/)
- **Relevance (what / why-how / weakness):** WHAT — The flagship demonstration of the *testing (retrieval-practice) effect*: repeated retrieval produces far better long-term retention than repeated restudy, even though restudy feels more effective in the short term. WHY/HOW — It justifies the *active-recall* half of Anki's design (cards are tested, not reread) that interacts with spacing: each spaced review is a retrieval event, and the combination of retrieval + spacing is what drives durable memory. WEAKNESS re scheduling — It shows learners' metacognition is miscalibrated (massed restudy feels best but isn't), implying schedulers should not rely on subjective ease judgments alone — yet SM-2's interval growth is driven almost entirely by the learner's self-rated grade, a known noise source FSRS tries to de-emphasize.
- **Relevance score: 7/10**

---

## Synthesis for the swarm

The spacing effect (distributed practice) is the empirical phenomenon Anki monetizes: across lab, longitudinal, and computational evidence, **memory is most durably strengthened when reviews occur at lengthening gaps timed near the edge of forgetting**, and the optimal gap *scales with the desired retention interval* (Cepeda 2006/2008/2009). The mechanism is captured by Bjork & Bjork's storage-vs-retrieval-strength distinction (gains are largest when retrieval strength is low) and operationalized by Pavlik & Anderson's optimization model. The key tension for SM-2/FSRS: the literature says the *expanding* schedule is good but **not because expansion itself is magic** — Karpicke & Roediger (2007) show the real driver is making each retrieval suitably *difficult* (a target success probability), and the optimal gap is a *ridgeline*, not a fixed multiplier. SM-2's grade-driven geometric expansion is a crude approximation of this ridgeline; FSRS's explicit desired-retention + fitted forgetting curve is the literature-aligned correction.
