# Brainlift — CFA Feature Bake-off

## Purpose

Pick the headline feature(s) for the Anki-fork CFA study app. Below are the top 5 candidates that survived a blunt, evidence-first mining loop (3 iterations, 13 agents, graded evidence pool + a hostile novelty/moat audit). Each one is written so I can grade it: a spiky POV up top, the real evidence with methodology grades and links underneath, and — because I don't want to lie to myself — an honest read that states plainly where it's *not novel*, *unverified*, or a *weak moat*. I'll score each of the 5.

### In Scope
- Choosing which learning-science mechanism(s) become the headline of the fork, and which are supporting.
- The evidence behind each (grades A–D), the real prior art, and an honest moat read.

### Out of Scope
- Full app development architecture.
- UI/UX design.
- Mobile/desktop implementation details.

**One thing to keep in mind while grading:** for a 4-day comp judged by technical founders, defensibility isn't the axis being graded. The working Rust engine fork is the one credible hard artifact, evidence-grounded design is the differentiator, and the honest refusal to fake a readiness number is the stance. So a "weak moat" is not disqualifying — overclaiming a calibrated number I can't back with data is the real risk.

---

## Idea 1 — Transfer-Honesty Engine (the headline candidate)

Two separate scores — **Memory** (can you recall the fact, straight from FSRS retrievability `R`) vs **Performance** (can you answer a NEW exam-style question on the same idea) — shown as an honest GAP, never blended into one comforting readiness number. Plus a deadline-aware review queue (`topic_weight × (1−R) × time-to-exam`) which is the real change inside Anki's Rust engine (`BuildExamQueue` RPC in `rslib`).

**DOK 4: Spiky POV** — Remembering a flashcard ≠ being able to use it. Anki's core loop measures the wrong thing for a timed exam, and every incumbent then hides the problem behind one reassuring number. Honest prep does the inverse: it SHOWS the recognize-vs-apply gap instead of blending it away.

**Source:** Soderstrom & Bjork 2015, *Learning versus Performance: An Integrative Review*, *Perspectives on Psychological Science* — doi:10.1177/1745691615569000. Supporting: PSKT, *"Remembering is Not Applying: Interpretable Knowledge Tracing for Problem-solving Processes"* (2024, OpenReview).

**DOK 1:** Retrieval practice transfers to genuinely NOVEL applied problems — Kromann 2009 RCT (d=0.93), Larsen 2013 (medical simulated-patient), a key-feature clinical-reasoning RCT (2016), Samani & Pan 2021 (physics, N≈350). Generative retrieval beats recognition — Adesope 2017 meta (g=0.61, A−); Karpicke & Blunt 2011, *Science* (d≈1.5 on inference tests, A−).

**DOK 1:** Spacing scaled to the exam date improves delayed retention — Cepeda 2006/2008 (A−, the rare adult + months-long studies; optimal gap ≈ 10–20% of time-to-test); Lindsey et al. 2014, *Psychological Science* (deployed cumulative-exam course, d=0.88–1.42, doi:10.1177/0956797613504302) — a personalized memory-model review schedule, which is literally this feature's Rust half.

**DOK 2:** Separately, these are all A/B-grade. Together they say: force generative retrieval of the exam's actual computations *after* the learner hits accuracy, schedule it to peak on exam day, and keep the memory and performance numbers apart. Format doesn't need to match the exam (McDermott 2014 A−, BMC 2024 B — format-congruency is unnecessary), so plain novel MCQs suffice for the Performance score — no live generation, no free-response grading needed.

**DOK 3:** The non-obvious move isn't measuring either score — it's *refusing to combine them*. The whole industry converged on the opposite (Surgent ReadySCORE "builds confidence you'll pass," UWorld "Probability of Passing") because a single reassuring number is what anxious candidates buy. Headlining the gap is the one unshipped position.

**DOK 3 / honest read (blunt):** It's NOT novel. Every piece is prior art — memory score ships in FSRS/Duolingo, accuracy ships in every QBank, memory≠application is a famous 2015 review AND a 2024 paper literally titled "Remembering is Not Applying," and Amplifire holds a two-score-from-one-answer patent (US8165518B2, though on confidence×correctness, not memory×application). The gap widget itself is UNVERIFIED on whether showing it improves outcomes (grade D on that specific claim). A calibrated P(pass) needs real student→exam data I don't have and can never match incumbents on — so show the gap, label it UNCALIBRATED, and don't fake a probability. Moat is WEAK (a competitor already computes both numbers and could add a toggle in a sprint) — but per the note above, that's fine here. The A-grade evidence backs the transfer-hardened retrieval + deadline scheduling; those are exactly the parts that aren't novel, and that's the honest tension.

---

## Idea 2 — Ethics Contrastive Minimal-Pairs

Co-present two near-identical ethics vignettes that differ by ONE decisive fact that flips conform↔violate. Force the learner to NAME the decisive fact, then reveal the Standard after the attempt.

**DOK 4: Spiky POV** — You don't learn ethics by memorizing the Code, you learn it by seeing exactly where the line sits. Single scenarios teach labels; near-miss pairs teach the boundary — which is the actual tested skill.

**Source:** Alfieri, Nokes-Malach & Schunn 2013, *Learning Through Case Comparisons: A Meta-Analytic Review*, *Educational Psychologist* — doi:10.1080/00461520.2013.775712.

**DOK 1:** The meta (57 experiments / 336 tests) finds case-comparison beats sequential/single-case study, d=0.50 [.44, .56] (A−). Moderators matter: prompt learners to find the similarity/difference, and present the governing principle AFTER the comparison.

**DOK 1:** Gentner, Loewenstein & Thompson 2003 (doi:10.1037/0022-0663.95.2.393) — with the SAME two cases, learners who compared transferred the principle at 48% vs 19% for study-separately, and the 2–3× effect replicated in ADULT professionals (MBAs, accountants, consultants). Corral, Kurtz & Jones 2020 (doi:10.1037/xge0000517) — between-category contrast beats within-category comparison specifically for discriminating *confusable* categories. Plus Rittle-Johnson & Star 2007 (classroom RCT, doi:10.1037/0022-0663.99.3.561) and Schwartz et al. 2011 (RCT d=0.31, doi:10.1037/a0025140).

**DOK 2:** ≥5 independent A/B pillars, from separate research groups and domains (education meta, negotiation, category learning, math, physics). And it's mechanistically distinct from interleaving — the content-matched compare-vs-separate studies hold the items constant and vary ONLY co-presentation, so the win can't be a spacing effect. It's structural alignment / diagnostic-feature discovery, and it's deterministic to score (two conform/violate calls + a which-Standard MCQ), so zero new Rust.

**DOK 3:** The confusable-Standard clusters (e.g. Suitability vs MNPI vs Diligence) are exactly where candidates lose points, and the minimal pair is engineered to teach the discrimination rather than the label.

**DOK 3 / honest read (blunt):** The mechanism is proven in math/negotiation/category-learning and only transferred BY ANALOGY to CFA ethics — no CFA-specific study exists, so mark it UNVERIFIED for this domain (grade C on the ethics application specifically). It's also INCREMENTAL, not novel: the minimal-pair loop already ships in language apps, "one fact flips the answer" already ships for USMLE ethics (mdsteps.com), and confusable-Standard pairs are publicly tabulated. Moat = content authoring only — weak and copyable.

---

## Idea 3 — Worked-Example Adaptive Fading (CFA quant)

For multi-step calcs (TVM, bond pricing, multi-stage DDM): show it fully worked, then blank a step (completion), then solo — fade the help as accuracy rises.

**DOK 4: Spiky POV** — For multi-step calcs, throwing beginners at full problems is inefficient and lectures don't build the procedure. The faded middle — worked → completion → independent — is the missing piece nobody drills.

**Source:** Barbieri, Miller-Cotto, Clerjuste & Chawla 2023, *A Meta-Analysis of the Worked Examples Effect on Mathematics Performance*, *Educational Psychology Review* — doi:10.1007/s10648-023-09745-1.

**DOK 1:** The meta (55 studies, 181 effect sizes, elementary through adulthood) finds worked examples beat problem-solving controls by g=0.48 [0.36, 0.60] — grade **A**, and math is the CFA-relevant content type. Same meta's blunt caveat: bolt-on self-explanation prompts NEGATIVELY moderated the effect, so generic "explain your reasoning" prompts backfire.

**DOK 1:** Atkinson, Renkl & Merrill 2003 (doi:10.1037/0022-0663.95.4.774, B+) — fading worked steps + *targeted principle-prompts at the faded step* produced medium-to-large gains on near AND far transfer, no extra time. Kalyuga et al. 2001/2003 (expertise reversal, B+/A− with adult trade apprentices, doi:10.1037/0022-0663.93.3.579) — guidance that helps novices HARMS experts, so the fade must adapt to rising skill.

**DOK 2:** Three distinct A/B-evidenced mechanisms (worked-example → completion → adaptive fading), and it's a different construct from Idea 1 — Cognitive Load skill-acquisition (supply then withdraw the solution) vs retrieval-practice memory. Buildable on native cloze + template progression, no new Rust; the cost is authoring correct step-by-step solutions.

**DOK 3:** Its endpoint (independent problem) hands the learner straight into Idea 1's generative-retrieval loop — so it's the on-ramp that feeds the headline, not a rival to it.

**DOK 3 / honest read (be blunt):** This is NOT novel at all — it's a standard intelligent-tutoring technique, built + RCT'd inside a Cognitive Tutor (Salden/Aleven 2010) and shipping today in MATHia and Math Academy. It's a commodity technique with a CFA skin. It only builds NEAR/procedural transfer (execute a known calc fast and accurately — which IS the real quant pain), not novel-problem solving, and it MUST keep adapting or expertise reversal makes it actively harmful. No CFA/finance-specific RCT → UNVERIFIED for the exact domain. Frame it honestly as a well-executed on-ramp into Idea 1, not an original edge.

---

## Idea 4 — Exam-Day Simulation Harness (the capstone / demo centerpiece)

A timed, mixed run that pulls Ideas 1–3 into one honest dress rehearsal, and ends by showing the memory-vs-performance gap + an uncertainty-first readiness band (a wide range, labeled "not validated against real exams").

**DOK 4: Spiky POV** — The only honest readiness check is a full dress rehearsal under real conditions — and then telling the truth about the result, uncertainty and all, instead of handing back a flattering score.

**Source:** integration of Ideas 1–3; on the measurement side, Gardner-Medwin certainty-based marking (raises reliability in applied/adult summative exams, B+) and McDermott 2014 (A−) / BMC 2024 (B) on format not mattering for transfer.

**DOK 1:** Matching the exam's exact question FORMAT is NOT necessary for transfer (McDermott 2014; BMC 2024) — so simulate the conditions and time pressure, don't fetishize pixel-perfect format. Calibration/CBM under time pressure is measurable and evidenced (Gardner-Medwin).

**DOK 2:** This is INTEGRATION, not a new mechanism. Its value is the demo draw + the honesty rule (show the gap, refuse the fake number), not a new learning effect. That's a MEDIUM moat — positioning, not tech.

**DOK 3:** It's the highest-draw artifact for the demo precisely because it makes the honest stance visible and felt — a candidate finishes a timed mixed run and gets a straight, uncertainty-first answer instead of a green "you're ready."

**DOK 3 / honest read (blunt):** Any "this raises pass rates" claim is UNVERIFIED — the evidence supports honesty/measurement, NOT a transfer or pass-rate lift. Don't print a confident P(pass); the readiness band must carry a wide CI and a "not validated against real exams" label. Its worth is entirely as the capstone that composes the three real mechanisms into one honest run.

---

## Idea 5 — Pretesting / Errorful Generation ("guess before you're taught")

Make the learner attempt an answer before the instruction, then teach — bolt it onto Idea 3's faded steps ("predict the next step before it's revealed") and Idea 1's topic intros.

**DOK 4: Spiky POV** — Struggling and guessing wrong before you're taught primes you to actually learn it. Being handed the answer first feels good and teaches less.

**Source:** St. Hilaire, Chan & Ahn 2023 meta (*Psychonomic Bulletin & Review*); Kornell et al. 2009 (foundational); Pan & Carpenter 2023 review.

**DOK 1:** Real A-grade lab support for the pretesting effect on the specific tested item — guessing-then-feedback yields g≈0.70 for that exact content (B+/A− for memory).

**DOK 1:** BUT the *general/transfer* effect is near-null — meta g≈0.06 (vs ~0.70 for the specific tested item). CFA needs application/transfer, so the load-bearing benefit for my goal is weak.

**DOK 2:** So it's a cheap, evidence-informed encoding aid: zero Rust, lands on the same endpoint as Idea 1's retrieval loop, and is worth adding as a 4th SUPPORTING feature — framed honestly as specific-item memory, not far-transfer.

**DOK 3:** Learners systematically UNDERESTIMATE pretesting (the metacognitive gap) — being made to guess-first feels worse and works better, which is on-thesis with the whole app's honesty stance.

**DOK 3 / honest read (blunt):** It already ships — Unisium's entire product is "try before you know," and Duolingo's word-picture guessing is pretesting. In an SRS the card front is *already* a retrieval attempt, so systematic pretesting is partly redundant. Novelty MEDIUM-LOW, moat WEAK. Keep it as a cheap supporting feature, not a headline.

---

## How I'd rank these (and why) — my read, you grade

My gut order for a 4-day, technically-judged comp:

1. **Idea 1 (Transfer-Honesty Engine)** — the headline. It's the only one that owns a real Rust engine change (`BuildExamQueue`), rests on ≥4 A/B transfer pillars, and carries the honesty stance that differentiates the whole product. I'd grade it high *despite* the weak moat and the UNVERIFIED gap-widget, because for this comp the working fork + honest refusal is the win — as long as I never fake a calibrated number.
2. **Idea 4 (Exam-Day Simulation Harness)** — the capstone/demo. Not a new mechanism, but the highest-draw way to show 1–3 working together honestly. Its whole value is integration + the honesty rule.
3. **Idea 2 (Ethics Minimal-Pairs)** — the standalone showpiece for the highest-judgment topic, on a genuinely distinct A-tier mechanism, deterministic, zero extra Rust. Docked only by the ethics-domain UNVERIFIED asterisk.
4. **Idea 3 (Worked-Example Fading)** — strongest single meta (A, g=0.48) but the most commodity of the five; best framed as the quant on-ramp feeding Idea 1, not an original edge.
5. **Idea 5 (Pretesting)** — cheapest, real for specific-item memory but near-null for transfer and already shipped. A nice-to-have bolt-on, not a headline.

Grade each below — I want your independent take, especially on 1 vs 4 for the headline.

| # | Idea | My lean | Your grade |
|---|------|---------|-----------|
| 1 | Transfer-Honesty Engine | Headline | |
| 2 | Ethics Minimal-Pairs | Showpiece | |
| 3 | Worked-Example Fading | On-ramp | |
| 4 | Exam-Day Simulation Harness | Capstone/demo | |
| 5 | Pretesting / Errorful Generation | Supporting | |
