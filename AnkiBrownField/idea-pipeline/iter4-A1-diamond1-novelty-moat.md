# Iteration 4 · A1 — Diamond #1 Novelty + Moat Audit

> Blunt, evidence-first prior-art & moat audit of **DIAMOND #1**.
> Feature under audit (as re-stated for this pass): keep **TWO separate scores** — **Memory** (FSRS
> retrievability of a fact) vs **Performance** (accuracy on NEW exam-style questions testing the same
> idea) — surface the **honest GAP** between them; force **generative retrieval** of the exam's actual
> computations; **reorder review by topic-weight × weakness × time-to-exam** (deadline-aware);
> **refuse a single fake readiness number.**
> Grade key: **A** = meta/large RCT, adult+applied, replicated · **B** = solid but lab-leaning/proxy ·
> **C** = single/small/correlational · **D** = anecdote. Unconfirmable claims marked **UNVERIFIED**.
> Nothing fabricated. This audit is deliberately hostile to the idea.

---

## 0. TL;DR (the three verdicts up front)

1. **NOVELTY: INCREMENTAL.** Every ingredient is prior art and mostly *commoditized*. A per-item **memory-strength** score ships in Duolingo (half-life regression) and Anki/FSRS. A **performance/application** accuracy score ships in every QBank (UWorld, Surgent, CFA LES). The **memory≠application** distinction is a famous review (Soderstrom & Bjork 2015) and is now an explicit design target in academic knowledge tracing (**PSKT — "Remembering is Not Applying," 2024**). Deadline/topic-weighted weakness scheduling ships in Surgent and Math Academy. The **only** thing I could **not** find shipped anywhere is the exact *inversion*: presenting the two scores **separately with the gap as the headline and deliberately refusing a composite readiness number.** That is a **product/positioning novelty, not a technical or scientific one.**
2. **MOAT: WEAK / easily copied.** The reason no incumbent ships it is class **(c) business-model conflict** — an honest "your recall is high but your application is low, you are **not** ready" number is the opposite of the reassurance product incumbents sell ("ReadySCORE… builds confidence you'll pass," "know the moment you're ready"). That explains the whitespace but is a **disinclination, not a barrier.** Surgent/UWorld/Riiid already compute both underlying numbers; any of them can add a "Recall vs Application" toggle in a sprint. No technical, data, or legal barrier exists. **The idea is trivially copyable the day it demos well.**
3. **STILL A DIAMOND? Only if you stop calling the two-score gap the diamond.** The gap dashboard is an honesty gimmick with **no outcome evidence** (UNVERIFIED that showing a gap improves scores). The parts that carry A/B evidence — transfer-hardened generative retrieval + deadline-aware spacing — are exactly the parts that are **not novel**. The only defensible asset in the whole bundle is the **curated, human-verified, leakage-controlled novel-item bank** (months of SME labor) + trust earned over exam cycles. That is an **execution/brand moat, not an idea moat.**

---

## 1. PRIOR-ART SCAN — does anyone ship "two separate scores + honest gap"?

| Product / system | What it actually surfaces | Two separate memory-vs-application scores? | Honest gap headline? | Refuses single readiness #? |
|---|---|---|---|---|
| **UWorld CFA** | "Exam-day Ready **Probability of Passing** Score"; topic performance, time/question, peer percentile | No — one blended accuracy engine | No | **No — the single number IS the product** |
| **Surgent ReadySCORE** (CPA/CFA/etc.) | Predicted exam **score** if you tested today; updates real-time; topic-weighted; "green = ready" | No — one predicted score (per topic + overall) | No | **No — explicitly a single "stop studying now" number** |
| **CFA Institute LES** | Progress dashboard: **accuracy + self-reported confidence + topic proficiency**, percentile rank, adaptive plan | Partial (accuracy × confidence) — **not** recall-of-fact vs novel-application | No | No composite, but no gap framing either |
| **Riiid / Santa (TOEIC)** | Deep knowledge tracing (SAINT/SAINT+); **predicted TOEIC score** from ~6–10 items; patented score prediction | No — one predicted score | No | **No — predicting the single score is the pitch** |
| **Math Academy** | Mastery-gating (master prereqs before advancing) + FIRe spaced repetition + interleaving | Partial (mastery vs retention) but **integrated into one knowledge profile**; not novel-transfer-item accuracy | No | N/A (learning-rate optimizer, not a readiness #) |
| **Anki / FSRS** | Per-card **retrievability R** (memory strength) | Only the memory half | No | N/A |
| **Duolingo** | Per-word **strength meter** via half-life regression | Only the memory half | No | N/A |
| **Amplifire / Knowledge Factor (US8165518B2)** | Confidence-based: "one answer → **two metrics** (confidence + knowledge)"; quadrants incl. "misinformation" | Two scores, but **confidence × correctness**, NOT memory × application | Quadrant, not a memory-vs-transfer gap | N/A |

**Blunt read of the table:** the market has universally converged on the **opposite** of Diamond #1 — collapse everything into **one** readiness/probability/predicted-score number, because that is the thing anxious paying candidates want to buy. Nobody ships the honest two-score gap. That is real whitespace — but see §2 for why it is not a moat.

---

## 2. DETAILED FINDINGS + CITATIONS

### 2.1 Incumbent exam-prep — all single-number, all reassurance-positioned

**Surgent ReadySCORE** (the cleanest counter-example to the idea, and the best evidence for moat-class (c)):
> "Surgent's ReadySCORE is an industry-leading score prediction metric. With extreme accuracy, you'll know the moment you're ready to take your exam… **Tells you exactly when to stop studying and take the exam / Builds confidence you'll pass.**" — surgent.com/exam-review/readyscore/
> "Once the dashboard reflects a ReadySCORE of at least 80 across all question types and content areas, the student can feel confident that he or she is ready to sit." — surgent.com/blog/readyscore-press-release/

**Grade of relevance: A (direct, primary).** This is a shipped, marketed, single composite readiness number whose *entire value proposition is reassurance*. It computes topic-weighted proficiency across question types in real time — i.e., **it already has all the raw material** to display a memory-vs-application split and chooses not to. Diamond #1 is literally "do the inverse of ReadySCORE." (https://www.surgent.com/exam-review/readyscore/)

**UWorld CFA** ships an "Exam-day Ready **Probability of Passing** Score" plus topic performance and peer percentile (finance.uworld.com/cfa/level-1/courses/). Single number. **A (direct).**

**CFA Institute LES** surfaces "accuracy, confidence, and topic proficiency," percentile rank, adaptive study plan, countdown calendar, confidence levels (cfainstitute.org LES + the "new Canvas Learning Ecosystem features" PDF). This is the closest incumbent to a *two-dimensional* view — but the second axis is **self-reported confidence**, not **accuracy on novel transfer items**, and there is no gap headline and no refusal of a composite. **B (adjacent).**

### 2.2 Adaptive learning / ITS — score prediction & mastery, not memory-vs-transfer gap

**Riiid / Santa (TOEIC):** deep attentive knowledge tracing (SAINT/SAINT+), predicts a TOEIC score from a handful of items, patented score prediction ("recommends optimal problems to improve learner's score prediction accuracy," patent granted 2020). Purpose = **predict the single score accurately**; the paper explicitly frames accuracy of the predicted score as the driver of user trust/engagement (arXiv 2005.05021). **A (direct, but opposite philosophy).** (https://ar5iv.labs.arxiv.org/html/2005.05021)

**Math Academy:** the one incumbent that genuinely separates two constructs — **mastery** (must master prerequisites before advancing) vs **retention** (Fractional Implicit Repetition spaced review + interleaving). But (i) it **integrates** them into a single knowledge profile rather than surfacing a gap, and (ii) "mastery" is measured on the *same* skill, not on *novel exam-style transfer items* distinct from the studied fact. It is a learning-throughput optimizer, not an honesty dashboard. **B (adjacent — closest ITS, still not the feature).** (https://mathacademy.com/how-our-ai-works, justinmath.com FIRe writeup)

### 2.3 Academic — the memory-vs-application distinction is old, famous, and now explicitly modeled

**Soderstrom & Bjork 2015, "Learning versus Performance: An Integrative Review"** (*Perspectives on Psychological Science*):
> "what we can observe and measure is **performance**, which is often an **unreliable index** of whether the relatively long-term changes that constitute **learning** have taken place… improvements in performance can fail to yield significant learning… certain manipulations can have **opposite effects** on learning and performance."
> — doi:10.1177/1745691615569000

**Grade: A (theory) / B− (as support for the *shipped feature*).** This is the **intellectual core of Diamond #1** — and it is a widely cited, public, non-proprietary review already in the ledger's evidence pool. The idea "memory ≠ application, and conflating them is dangerous" is textbook, not novel. It backs *why the distinction matters*; it does **not** establish that *showing users two scores + a gap improves exam outcomes* (that leap is UNVERIFIED).

**PSKT — "Remembering is Not Applying: Interpretable Knowledge Tracing for Problem-solving Processes" (2024, OpenReview):**
> "existing KT methods… **equat[e] memorized knowledge with acquired** [application]… the entire problem-solving process involves the **acquisition, application, internalization, and forgetting** of memorized knowledge." PSKT models "goal-oriented knowledge **application**" separately from "knowledge **acquisition**," then a post-solving module quantifies **internalization and forgetting.**
> — openreview.net (PSKT)

**Grade: A− (as prior art for the concept).** This is the strongest single prior-art hit: an academic knowledge-tracing model whose *entire thesis is the title of Diamond #1* — remembering ≠ applying — and which maintains **separate internal states** for memory vs application vs forgetting. It is not a shipped consumer two-score dashboard, but it **fully anticipates the conceptual separation** and even the forgetting/memory-decay half. Related: **KTLT** (IEEE) tracks "abstract principle mastery" and "knowledge proficiency" simultaneously with a learning+forgetting-curve prior.

**Rate-of-forgetting predicts exam performance (Journal of Learning Analytics):** an ACT-R fact-learning system's per-fact rate-of-forgetting, estimated during study, "was **predictive of learners' performance on the associated exam questions**" up to two weeks out. **B.** Shows the *memory* score already forecasts the *performance* score — which undercuts the premise that they are wildly divergent for well-scheduled facts (the gap may be smaller/less actionable than the pitch implies).

### 2.4 Patents — "two scores from one answer" is already patented (different axes)

**US8165518B2 — "Method and system for knowledge assessment using confidence-based measurement"** (Knowledge Factor / Amplifire):
> "the confidence-based assessment can apply to adaptive learning approaches in which **one answer generates two metrics** with regard to **confidence and knowledge**… a composite knowledge profile… show[s]… the areas and degrees of mistakes (**misinformation**), unknowns, doubts and mastery."
> — patents.google.com/patent/US8165518B2

**Grade: B (adjacent prior art, patent-live).** A shipped, patented **two-metric-from-one-answer** system with a **quadrant** dashboard. The two axes are **confidence × correctness**, NOT **memory × novel-application** — so it does **not** read directly on Diamond #1's specific pair. But it establishes that "two honest scores + a diagnostic quadrant instead of one blended number" is **well-trodden, patented terrain**, which further weakens any claim to a defensible/patentable inversion. Also relevant: **"Confidence-Calibrated Adaptive Learning" (Perry, 2026 Zenodo preprint)** claims "**multi-factor readiness prediction**" deployed across "20 production applications… over 55,000 items" — i.e., multi-factor (not single-number) readiness is already in production somewhere. **C (preprint, 0 citations, self-reported).**

### 2.5 The "Memory score" half is fully commoditized

**Duolingo half-life regression** ships a per-item **memory strength meter** ("indirectly estimating the half-life of words… in a student's long-term memory"; deployed to all users after A/B tests) — Settles & Meeder 2016, github.com/duolingo/halflife-regression. Anki/FSRS surfaces per-card **retrievability R**. So Diamond #1's "Memory = FSRS R" leg is **off-the-shelf**; there is zero novelty in the memory score itself, and the performance/accuracy score is a counter. The gap is a subtraction.

---

## 3. Q1 — IS IT ACTUALLY NEW?

**Verdict: INCREMENTAL** (leaning toward "already exists in parts").

- **Memory-strength score:** ALREADY EXISTS (Duolingo HLR, FSRS R).
- **Performance/application-accuracy score:** ALREADY EXISTS (every QBank; IRT-scored in CFA LES / Duolingo DET / Riiid).
- **memory ≠ application as a first-class, separately-tracked construct:** ALREADY EXISTS conceptually (Soderstrom & Bjork 2015) and computationally (**PSKT 2024**, KTLT).
- **Two-honest-scores-instead-of-one-blend + diagnostic quadrant:** ALREADY EXISTS in patent/product form on a *different axis pair* (Amplifire US8165518B2, confidence×correctness).
- **Deadline/topic-weighted, weakness-weighted reordering:** ALREADY EXISTS (Surgent topic-weighted real-time; Math Academy weakness+prereq; Cepeda deadline-scaled spacing, A−).
- **Generative retrieval before reveal:** ALREADY EXISTS and is already absorbed into the ledger (Bertsch/Yu/Adesope).

**The single thing not found shipped anywhere:** the deliberate **inversion** — surface Memory and Performance **separately**, make the **gap the headline**, and **refuse** a composite readiness number. This is a **framing/positioning choice**, not a new mechanism, not new science, not new tech, and (given US8165518B2) not cleanly patentable. **Novelty is real but shallow and non-technical.**

Citations: Surgent ReadySCORE (surgent.com/exam-review/readyscore/); UWorld (finance.uworld.com/cfa/level-1/courses/); CFA LES (cfainstitute.org/programs/cfa-program/learning-ecosystem); Riiid/Santa (arXiv 2005.05021, apps.apple.com Santa); Math Academy (mathacademy.com/how-our-ai-works); Soderstrom & Bjork 2015 (doi:10.1177/1745691615569000); PSKT (OpenReview "Remembering is Not Applying"); Amplifire patent (patents.google.com/patent/US8165518B2); Duolingo HLR (github.com/duolingo/halflife-regression).

---

## 4. Q2 — IF IT'S SO GOOD, WHY HASN'T A COMPETITOR DONE IT?

**Reason class: (c) conflicts with their business model — and it is a WEAK, easily-copied moat.**

- **Not (a) technically hard.** It is two accuracy/retrievability numbers and a subtraction, plus a queue sort. Surgent/Riiid run far heavier models (DKT, real-time predictive AI) already.
- **Not (b) data they lack.** Incumbents have *orders of magnitude more* item-response data than a new Anki fork will ever have. If anything, the new entrant is the one lacking data.
- **Not (d) legal.** No licensing barrier to displaying your own two numbers. (Ironically the *only* patent in the neighborhood, US8165518B2, is a mild hazard for the *entrant*, not a shield for it.)
- **It is (c).** The incumbent product is *reassurance*: "know the moment you're ready," "builds confidence you'll pass," "green = go." A metric engineered to say **"your recall looks great but your application on novel items is weak — you are NOT ready"** is **directly hostile to the thing that closes the sale** and would *raise* pre-exam anxiety and refund/complaint risk. So incumbents are **disinclined**, not incapable.

**Why that makes the moat WEAK, bluntly:** a moat built on a competitor's *unwillingness* evaporates the moment the feature demos well, because there is no barrier behind the unwillingness. Surgent already computes topic-level proficiency and could ship a "Recall vs Application" toggle beside ReadySCORE in a single sprint; CFA LES already has an accuracy+confidence dashboard one field away from it. **This is an (e)-adjacent situation: the reason is real but thin, so DECLARE THE MOAT WEAK / EASILY COPIED.** The only durable defensibility is (i) the **curated, human-verified, leakage-controlled novel-transfer item bank** mapped to source cards — a genuine multi-month SME content asset the ledger already flags — and (ii) **brand trust for honesty earned over exam cycles** (matching the pipeline's own Iteration-1 competition finding that "most of the moat is trust/calibration earned over exam cycles, not tech"). Both are **execution/GTM moats, not idea moats.**

---

## 5. Q3 — SAME METRICS: re-grade evidence + buildability where novelty changes the picture

**Evidence re-grade (only where novelty moves it):**

- The mechanism pillars are **unchanged** from the ledger and remain the strong legs: retrieval→novel-applied transfer (≥4 A/B), generative retrieval > recognition (Adesope A−, Karpicke&Blunt A−), deadline spacing (Cepeda 2006/2008 A−). Novelty analysis does not touch these — but note these are precisely the **non-novel** parts.
- **New, load-bearing, and weak:** the claim that **displaying two separate scores + the gap improves outcomes (learning, calibration, or pass rate)** has **NO supporting A/B evidence. Grade: D / UNVERIFIED.** Soderstrom & Bjork (A as theory) says performance mis-indexes learning — it does **not** say a two-number dashboard fixes that. Worse, the metacognition literature it rests on shows learners *systematically misread* their own state; there's no evidence a gap widget corrects that behaviorally.
- **Weakest-link, re-applied:** by the pipeline's own weakest-link rule, the *headline* framing ("two scores + honest gap = the diamond") is capped at **D/UNVERIFIED on outcome.** The idea only scores well if you re-anchor the diamond on the transfer-hardening + deadline-scheduling legs — which are A/B **but not novel.** So novelty and evidence pull in opposite directions: the novel bit is unproven; the proven bit isn't novel.
- **≥3 independent A/B pillars for the *novel* claim? NO.** Zero. The A/B pillars all support the generic mechanism, not the two-score-gap inversion.

**Buildability in a 4-day sprint (reality check):**

- **The two scores + gap + deadline reorder: trivially buildable — which is the whole problem.** FSRS `R` already exists; performance accuracy is a per-LOS counter; the gap is subtraction; the deadline reorder is the already-scoped `BuildExamQueue` Rust RPC (`topic_weight × (1−R) × deadline_urgency`, non-mutating). The UI is a two-bar chart. **GO, easily, in 4 days.** Its cheapness is exactly why it's not a moat.
- **The one expensive, load-bearing dependency: the NOVEL-ITEM BANK.** The entire "Performance ≠ Memory" claim is only valid if the exam-style questions are **genuinely novel and leakage-controlled** relative to the studied card. Without a curated, human-verified, held-out bank (embedding-cosine + n-gram leakage audit before scoring — already in the ledger's eval plan), "Performance" degenerates into "a second accuracy number on the same material," the gap becomes noise, and the diamond is hollow. Authoring that bank is **months of SME labor, not 4 days** — it is the real cost and the real (execution) moat. Live LLM generation and verified free-response grading remain correctly **CUT** (research traps).

**Net:** buildability of the *demo* is GO; buildability of the *valid* feature is gated on the item-bank content asset, exactly as the ledger already records.

---

## 6. BLUNT CALL — should this still count as a diamond, and is it beatable?

**It is beatable, and the "two scores + honest gap" framing is NOT a diamond — it's a tagline.** Strip the marketing and Diamond #1 is an assembly of commoditized parts: a memory-strength score (Duolingo/FSRS), an accuracy score (every QBank), a distinction that's a famous 2015 review and a 2024 knowledge-tracing paper literally titled *"Remembering is Not Applying,"* a two-scores-not-one-blend idea already patented by Amplifire on a neighboring axis, and a deadline/weakness sort already shipped by Surgent and Math Academy. The one genuinely-unshipped move — refusing the single readiness number and headlining the gap — is a **positioning inversion** an incumbent can copy in a sprint because they already compute both numbers; they simply *choose* the reassuring single score because it sells. That makes the moat **WEAK (reason class c: business-model conflict, no real barrier behind it).** The idea only deserves "diamond" status if you **re-anchor it on the two assets that are actually hard**: (1) a curated, human-verified, **leakage-controlled** novel-transfer item bank (a real multi-month content moat, and the only thing that makes "Performance ≠ Memory" a valid measurement rather than a gimmick), and (2) **trust earned by being honest across real exam cycles** (a brand/GTM moat, per the pipeline's own competition finding). Neither is the "gap dashboard." **Recommendation: keep Diamond #1 in the product, but demote the "two scores + honest gap" from its headline claim to a UI expression of the real diamond (transfer-hardened generative retrieval on a verified novel-item bank, deadline-scheduled). Grade the honesty-gap widget itself D/UNVERIFIED on outcome, and stop treating "no single readiness number" as a moat — it is a copyable stance, not a wall.**
