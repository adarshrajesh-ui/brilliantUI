# Brainlift

## Owners
*(To be filled)*

---

## Purpose

**Core Goal:** Build an app on top of Anki that overhauls test prep and enables speed-running a test, targeting a lucrative test-prep market.

**Learner outcome we sell:** *"Walk into your exam on your date knowing exactly what you can do, what you can't, and what to study next — and be measurably more ready per hour studied than any flashcard tool."* The algorithm work exists only to serve that outcome.

### In Scope
- Find a target test using willingness to pay, candidate volume, prep-market fragmentation, and fit with spaced repetition.
- Analyze SM-2, Anki, and FSRS-style scheduling to understand what they optimize for.

### Out of Scope
- Full app development architecture.
- UI/UX design.
- Mobile/desktop implementation details.

---

## Product Vision — From Insight to Learner Experience

The research is the *why*; this is the *so-what for the learner*. Every technical insight maps to a felt experience in the study session.

| Research insight (the *why*) | What we build | What the learner feels (the *so-what*) |
|---|---|---|
| FSRS optimizes indefinite retention, not a deadline | Date-aware scheduling: enter your exam date, intervals back-plan so recall peaks on exam day | *"My limited hours are aimed at exam day, not forever. I stop over-reviewing things I'll remember anyway and stop under-reviewing things that would've decayed right before the test."* |
| FSRS is tuned on language data; formulas/quant decay differently | Domain-aware weighting + a Rust "mastery query" that surfaces at-risk, high-yield cards first | *"Quant and formulas resurface before they slip. My queue shows the highest-value cards first, so no time is wasted."* |
| Recognizing a flashcard ≠ answering a new exam question | AI card generation + an active-application drill (reworded/case-style questions; voice examiner) | *"I'm not just flipping cards — I'm forced to apply and explain, the way the real exam asks. I find out where I only *think* I know it."* |
| Test-takers can't honestly gauge readiness (FSRS cold-start) | Three honest scores — Memory, Performance, Readiness — each with a range, coverage %, confidence, and a give-up rule | *"I get a straight answer to 'Am I ready?' — a projected score with a range, how sure it is, and the single best next thing to study. It tells me when it doesn't know instead of faking a number."* |

**The learner loop (the product in one line):** ingest curriculum → atomize into cards → schedule for *your* date and content type → drill for *application*, not just recall → measure readiness *honestly* → route to the next best action → repeat. Anki gives us the memory engine; we add the missing halves — **application** and **honest readiness** — and aim the whole thing at a deadline.

**Why this beats the category:** every competitor sells recognition practice optimized for indefinite memory. Learners don't need to remember facts forever — they need to *apply* them, *on a date*. We optimize the thing that actually determines the pass.

---

## DOK 4 — Spiky POV

**The Anki algorithm is unoptimized for test prep, for two reasons:**

1. **Wrong optimization target.** FSRS optimizes for *least cost for indefinite retention*, while the CFA requires *optimal retention on a single date*. These are two different optimization problems. The assumption of unlimited retention has been baked in at every stage; instead, retention must be optimized for the specific date of the test.
2. **Wrong training distribution.** FSRS was largely built from language-learning behavior data, while CFA content has different item types: formulas, ethics rules, conceptual distinctions, multi-step calculations, and case-style application.

**Source (modern algorithm, FSRS):** Jarrett Ye — *A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling.* https://dl.acm.org/doi/epdf/10.1145/3534678.3539081

---

## Knowledge Tree — The Scheduling Algorithms

### Source: Jarrett Ye (creator of the modern Anki algorithm, FSRS)

**DOK 1:** Spaced repetition was used for long-term memory, but prior techniques did not adapt to the student dynamically. Instead they used deterministic controls based on user actions to dictate scheduling. With over 200 million students' memory-behavior logs of time-ordered data (all from language-practice data), he was able to build a general model.

**DOK 1:** He used this data by grouping together words of similar difficulty based on their recall rates on the next recall after initial learning, and put together an equation with variables to encode this trend. The key variables: **half-life, recall probability, result of recall, and difficulty** (based on the next recall after initial learning). He wrote a script to evaluate the constant factors via stochastic DP, because the optimization problem relies on the expected value of future steps that are themselves probabilistic.

**DOK 2:** Using time-series data, Jarrett improved on previous spaced-repetition algorithms by solving it via stochastic DP as an optimization problem.

**DOK 3:** Through the use of data from thousands of students, this generalized algorithm is far better than the original SM-2.

### Source: Piotr Woźniak (creator of the original Anki algorithm, SM-2) — https://super-memory.com/english/ol/sm2.htm

**DOK 1:** The key ideas SM-2 was based on: apply the optimization procedure to the smallest unit (individual problems on individual pages), and differentiate between items on the basis of their different difficulty.

**DOK 1:** He derived the values for the E-Factor purely through his own use of the scheduling tool to memorize 10,000 items of English vocabulary.

**DOK 2:** The original algorithm improved on SM-0, which scheduled future reviews by a constant multiple of the previous inter-repetition interval. He refactored it so future scheduling is based on the previous inter-repetition interval, how many times the item has already been reviewed, and the quality of the user response in the current and previous session. He also made items rated below 3/5 on the response scale get added back to the current session queue.

**DOK 3:** The original Anki algorithm — based on predicting review time right before catastrophic forgetting by aligning with the Ebbinghaus forgetting curve — is built on an assumption that doesn't align for most users and is unoptimized even for the creator himself, since it was tweaked purely based on his own feeling.

### Source Expert: Alec Palmerton, MD — *How To Use Anki Like A Pro: Full Step-by-Step Walkthrough*

**DOK 2:** Keep settings mostly default — cap new cards at 50/day total across decks and set max reviews very high (e.g. 9,999) so nothing gets hidden; use Basic + reversed cards for bidirectional recall, and understand New / Learn / Due so you don't drown in reviews. Use Browse, Stats, and Sync deliberately — Browse is your searchable knowledge base; Stats show why long intervals keep ~24k cards manageable in under an hour/day; when syncing, always upload from the device with the latest reviews, never blindly download from AnkiWeb or you can wipe progress.

---

## How CFA Was Chosen

### DOK 3 — Insights
First, tests bought by companies or entities such as bodies or universities are more lucrative to produce, due to the price elasticity of companies: they can and will pay more. The med market is already very saturated despite being so big, due to the sheer amount med students must learn, so many products already exist. The CFA credential is worldwide, unlike most post-grad tests in the US, and is growing greatly in the number of takers in Asia. CFA prep is fragmented and hasn't yet adapted to improved test prep, where AI can implement parts of learning science that were not implementable at scale before. As such, CFA test prep is a key entry.

### DOK 2 — Knowledge Tree (Market Discovery)

**Source: College Test Preparation Market Research Report 2034 — MarketIntelo, 2026**
- **DOK 1 (Facts):** GRE leads post-grad prep at 15.2% share; GMAT 12.8%, LSAT 7.1%, MCAT 3.8%. Graduate tests carry higher price points due to content complexity and admission stakes.
- **DOK 2 (Summary):** Among grad-school admissions tests, GRE is the largest prep market, followed by GMAT, LSAT, and MCAT.
- Link: https://marketintelo.com/report/college-test-preparation-market

**CFA exam prep market size (total spend) — Winning Source: Navagant (2024), *Growth and Innovation in Exam & Test Preparation Industry* — Score 8/10**
- **DOK 1 (Facts):** U.S. exam prep ≈ $3.44B; certifications ≈ 20% ($690M); CFA FY2024: 208,300 administrations. Derived global CFA prep ~$400–600M; ranks ~5th post-grad; per-user ~$1,000–$3,000 (3 levels).
- **DOK 2 (Summary):** Mid-tier total dollars but high per-candidate spend. Derived from Navigant segment shares plus CFA Institute volume.
- Link: https://navagant.com/wp-content/uploads/2024/08/Test-Prep-Industry-Report_vF.pdf

**The NASBA Report: Candidate Performance on the Uniform CPA Examination — 2024 Edition**
- **DOK 1 (Facts):** 74,165 unique CPA candidates (2024); ~148,000 section sittings (128k Core + 19.9k Discipline). Derived global CPA prep ~$700M–$1.0B; ranks #2 post-grad; per-user ~$1,200–$4,000 (4 sections).
- **DOK 2 (Summary):** Smaller candidate pool than CFA, but higher per-user spend and mandatory licensure. #2 on total prep dollars among post-grad certifications.
- Link: https://nasba.org/wp-content/uploads/2025/08/The-NASBA-Report-2024-Edition-Now-Available_Final-19Aug25.pdf

**Tests with the highest amount spent per user — Winning Source: Bhatnagar et al. (2019) + AAMC PMQ (2023) — Score 9/10**
- **DOK 1 (Facts):** #1 USMLE/board: Bhatnagar (2019) $4,129 mean prep, $7,499 with fees (three steps). #2 MCAT $1,000–$7,000; #3 Bar/CPA/CFA ~$1,200–$4,000; #4 LSAT/SAT $1,500–$6,900.
- **DOK 2 (Summary):** The medical pipeline wins on cumulative spend per person. Admissions tests have high tutoring ceilings but lower typical spend.
- Link: https://doi.org/10.7759/cureus.4168 — Supporting: AAMC PMQ https://www.aamc.org/media/50146/download | Buchmann (2010) https://doi.org/10.1353/sof.2010.0105

**The Impact of Test Preparation on Performance of Large-Scale Educational Tests — Meta-analysis**
- **DOK 1 (Facts):** Most memory-heavy: #1 USMLE Step 1, #2 MCAT science, #3 CPA, #4 CFA L1. Least memory-heavy: LSAT, GRE verbal, GMAT reasoning; prep effect g ≈ 0.26 (Hao 2025).
- **DOK 2 (Summary):** Content-heavy, high-coachability certs reward flashcard-style prep. Reasoning-dominant tests resist drill-and-memorize gains.
- Link: https://doi.org/10.3102/00346543251360775 — Supporting: Kann et al. (2024) https://doi.org/10.1186/s12909-024-05517-9 | Mackey et al. (2013) https://doi.org/10.1523/JNEUROSCI.4141-12.2013

**CFA Institute Prep Provider Program / Multi-vendor official ecosystem**
- **DOK 1:** The CFA Institute Prep Provider Program shows multiple providers and an official multi-vendor ecosystem. Kann, Huang et al. (2024) reviewed med-market concentration.
- Link: https://link.springer.com/article/10.1007/s40670-024-02116-7

---

## Working Notes & Backlog

### Candidate AI features
- Use AI as an **interviewer** (voice examiner).
- Use AI to **find sources and experts**.
- Get a **preview of a source** via an AI-generated summary.
- **Open question / pivot:** Add an AI voice feature and change the spiky POV to *"application is required for knowledge"* — then add DOK 3/2/1 on how explaining a concept helps internalize it.

### Feature ideas (DOK 3)
- **You can only connect the dots if you know what the dots are.** Make mini practice tests from the topics that have already been somewhat/fully memorized via spaced repetition.
- **Deadline-aware scheduling.** Let users add a test date and alter the algorithm to maximize retention of content for that specific day.
- **Domain-aware spacing.** Spacing effects tend to be shorter for mathematics than English/humanities, but the exact magnitude is not precisely known. Use an LLM to measure/rate each card in the user's deck (or group cards into two decks when spacing behavior differs a lot), then deterministically modify the weights.

### Proposed user flow
1. User logs on and enters their **test date**.
2. User creates their own flashcards (or uses my generated deck).
3. An LLM assesses the **complexity of the content** and modifies the algorithm accordingly.
4. Whatever content the user has learned moderately-to-very well, I generate a **mini practice test** over.
5. A **full practice-test feature** with the same UI that looks exactly like the real test.

### Validation advice (from Ash)
- Write a prototype of the algorithm, then run **10 minutes on original Anki** and **10 minutes on your own algorithm**, and track the differences in the data as a **"gut test."**

### Supporting learning-science sources
- **Donoghue & Hattie (2021):** spacing-effect sizes are larger for English/Humanities than for mathematics — i.e., formula/procedure-heavy content behaves differently from verbal content.
- **van Gog & Sweller (2015):** the testing/retrieval effect shrinks as material complexity rises — directly relevant to multi-step-calc and case-application card types.

### Scheduling approaches considered

| Approach | Paper(s) | What it gives you | Build cost |
|---|---|---|---|
| Empirical spacing ridgeline | Cepeda, Vul, Rohrer, Wixted, Pashler (2008), *Psych Science* | Optimal gap ≈ 10–20% of the retention interval, so gap scales with days-to-exam → directly deadline-aware, zero ML | Days |
| Model-based optimal practice (peak-on-date) | Pavlik & Anderson (2008), *J. Exp. Psych: Applied* — via ACT-R | The literal academic version of the idea: maximize gain at a fixed test point under a budget; greedy marginal-gain allocation | 1–2 weeks |
| Trainable memory model | Settles & Meeder (2016) ACL — Half-Life Regression (Duolingo); Ye / L-M-Sherlock et al. (2023, IEEE TKDE) — the FSRS paper | The fitted forgetting/stability model you optimize over | Reuse FSRS |
| Stochastic optimal control | Tabibian et al. (2019), PNAS — MEMORIZE | Continuous-time optimal reviewing rate; adaptable to a finite horizon; closed-form optimal review intensity | 3–4 weeks |
| Deep RL over point processes | Reddy et al. (2016) KDD; Upadhyay et al. (2018) NeurIPS | Learns a policy; the "impractical in Anki" version FSRS devs mentioned | Months |
| Multiscale memory / optimal spacing | Mozer, Lindsey, Khajah (MCM) | Richer multi-timescale forgetting; better long schedules | Research |

---

## Appendices

### Ephor Link
*(To be filled)*

### TAM Analysis
*(To be filled)*
