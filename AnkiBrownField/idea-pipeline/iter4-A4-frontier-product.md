# Iter 4 · Agent A4 — Frontier Collector (PRODUCT + COMMUNITY)

> **Mission:** hunt a **DIAMOND AMONG DIAMONDS** — a feature/mechanism that would *dominate* the existing 3 grounded diamonds (D1 two-score honesty engine + deadline queue; D2 ethics contrastive minimal-pairs; D3 worked-example adaptive fading) on draw, novelty, defensibility — while staying learning-science-grounded and 4-day-buildable on a forked Anki.
> **Method:** scan the product + community frontier (Product Hunt, HN, indie edtech, Reddit r/CFA + r/Anki, AI tutors: Riiid/Santa, Speak, Math Academy, Khanmigo, Duolingo Max, 2025-26 launches). Apply pipeline metrics + two new lenses: **(1) Is it ACTUALLY new?** (cite prior art) **(2) If it's so good, why hasn't a competitor done it?** (technically hard / needs data / business-model conflict / legal / NO GOOD REASON → MOAT WEAK).

---

## ⏱️ TL;DR VERDICT (blunt)

**NO DIAMOND-AMONG-DIAMONDS FOUND. The existing 3 hold.**

The product/community frontier splits cleanly into two buckets, **neither of which yields a dominator:**

1. **Commodity red ocean (no mechanism edge).** Every 2025-26 launch I found — Space, Nebulearn, Scholium, Laxu AI, Shepherd, QuizLink, Socra — is the *same recipe*: **AI-generates-flashcards-from-your-PDF + FSRS + gamification (+ maybe a Socratic LLM chat)**. They compete on card-creation convenience and UI polish, **not on any learning mechanism.** None of the three diamonds' mechanisms (honest two-score gap, contrastive minimal-pairs, worked-example fading) appear in *any* of them. → This is good news for the *moat of our 3*, but there's no new diamond here.
2. **Real adaptive engines (moats we can't cross in 4 days, + already prior art).** Riiid/Santa (deep knowledge tracing + score prediction) and Math Academy (FIRe hierarchical spacing) are genuinely sophisticated — and are exactly the prior art the ledger already flagged. Their moats are **NEEDS-DATA** (Riiid: EdNet ~100M interactions) and **TECHNICALLY-HARD/CONTENT-HEAVY** (Math Academy: hand-curated encompassing graph). Both are un-buildable in 4 days and already shipped by an incumbent.

**The one genuinely under-shipped A-grade mechanism** I surfaced is **pretesting / errorful generation** ("guess before you're taught"). It is real (B+/A− for *specific-item* memory) but **(a)** its *transfer/general* effect is near-null (meta general effect **g = 0.06**), **(b)** it's **already shipped** (Unisium's whole product; Duolingo's word-picture guessing), and **(c)** it lands on the *same endpoint* as D1's retrieval loop. → A cheap, worthwhile **4th SUPPORTING feature**, **not** a dominator.

**Recommendations that fall out of this scan (both are amplifiers, not new diamonds):**
- **Promote the "exam-day simulation harness" as the product CAPSTONE / demo centerpiece** — it's the highest-draw thing in the whole space, but it is the *integration* of D1+D2+D3 (already in the ledger's FINAL SYNTHESIS), not a new mechanism.
- **Fold "Expected Knowledge Gain" opportunity-cost ordering into D1's `BuildExamQueue`** — r/Anki power users are *explicitly begging* for this natively; it strengthens D1's Rust engine.
- **Bolt pretesting onto D3** ("predict the next step before it's revealed") and D1 topic-intros — cheap, evidence-informed, zero Rust.

Do not invent a winner. **The bar "bigger draw AND more novel AND more defensible AND grounded AND 4-day-buildable" is met by none of the candidates below.**

---

## Ranked summary (Top 5 + verdict)

| # | Candidate | New? (prior art) | Why-not-done → moat | Evidence | 4-day build | Demo draw | Dominates the 3? |
|---|-----------|------------------|---------------------|----------|-------------|-----------|------------------|
| 1 | **Exam-day simulation harness** (timed, integrated multi-topic vignettes uniting D1 perf-items + D2 ethics pairs + D3 quant → honest memory-vs-performance gap + calibration-under-time-pressure diagram) | Integration is semi-new; pieces exist (mocks everywhere, Riiid predicts scores). | Competitors sell a *predicted pass number* (needs data) / avoid honest "we won't fake a number." → **MOAT MEDIUM (positioning, not tech)** | B (calibration/CBM, Gardner-Medwin); C for the *learning-gain* claim; "target confident errors → efficiency" **UNVERIFIED** | Mostly yes (rides D1 Rust; calibration diagram trivial; real timed harness doable) | **HIGH** | ❌ No — it's the *integration* of the 3, not a new mechanism. **Promote as capstone.** |
| 2 | **Pretesting / errorful-generation loop** ("guess-first" before a card/LOS/worked-step is taught) | **Partly OLD.** Unisium ships it as its whole product; Duolingo word-picture guessing = pretesting (NUS 2025). Concept from Kornell 2009. → **NOVELTY MEDIUM-LOW** | Some already did it; for SRS the card-front is *already* a retrieval attempt (partly redundant). → **MOAT WEAK (no good reason / already done)** | **Split grade:** g=0.70 for *specific* tested items (guessing), but **general/transfer g=0.06** (St. Hilaire/Chan/Ahn 2023 meta). B+/A− for memory, ~D for transfer. | **YES**, trivially (zero Rust) | LOW-MODERATE | ❌ No — memory-encoding aid, same endpoint as D1. **Add as 4th supporting feature.** |
| 3 | **Expected-Knowledge-Gain opportunity-cost queue** (order reviews by knowledge gain vs retention; deadline+topic-weighted) | Semi — exists as Anki addon "Review Order by Knowledge Gain" (215758055); not native, not exam-aware | Anki maintainer deprioritizes (sync-conflict worry) + philosophy = retention not gain. On a fork, anyone could add it. → **MOAT WEAK (NO GOOD REASON)** | Heuristic; **no A/B learning-gain RCT.** Grade C. | YES | LOW | ❌ No — **fold into D1's `BuildExamQueue`.** |
| 4 | **Knowledge-graph / FIRe hierarchical implicit spacing** (Math Academy-style; concept-DAG "trickle-down" credit) | **OLD.** Math Academy ships FIRe; Rabbithole/Smart-Study-Agent do concept-DAGs. Prior art strong. | Needs hand-curated encompassing graph = huge content build. → **MOAT: TECHNICALLY-HARD + NEEDS-CONTENT** (legit — it's Math Academy's real edge) | Spacing A-tier, but FIRe-specific gain not independently RCT'd (efficiency optimization) | **NO** (DAG authoring blows 4-day budget) | MODERATE | ❌ No — prior art + un-buildable. Ledger already flagged as also-ran. |
| 5 | **Riiid/Santa deep-knowledge-tracing readiness score** (predict exam score from mastery state) | **OLD.** Santa ships SAINT/SAINT+ on EdNet; +176% claimed. Prior art strong. | Needs EdNet-scale data (~100M interactions). → **MOAT: NEEDS-DATA** (fatal for us) | Prediction accuracy fine, but it's adaptive item selection, not a *learning* edge | **NO** (needs data + model) | MODERATE-HIGH | ❌ No — prior art + data-starved (ledger candidate #4/#6 already rejected). |

**Dropped without ranking (commodity / trap):**
- **AI-cardgen + FSRS apps** (Space, Nebulearn, Scholium, Laxu, Shepherd, QuizLink): zero mechanism edge, **MOAT: NONE** (everyone does it). Confirms *our mechanisms* are the differentiator, not card generation.
- **LLM Socratic/roleplay tutors** (Khanmigo, Duolingo Max, Socra, Speak's "Apply"): prior art + it's the **LLM generation/grading trap** the ledger already cut (research-scope + finance-hallucination risk in 4 days).
- **Ello** (kids' oral-reading AI tutor): out of scope for an adult high-stakes finance exam.

---

## Frontier scan — evidence log

### 1. Riiid / Santa (TOEIC, SAT, professional certs) — the "score prediction" incumbent
- **Mechanism (verified):** deep knowledge tracing (LSTM → Transformer SAINT/SAINT+), real-time mastery over 300+ concept nodes, next-item chosen by max expected information gain, **real-time predicted score at target exam date**. Trained on **EdNet** (the Kaggle Riiid dataset — one of the largest public KT datasets). Claimed +176% score gain vs non-adaptive. (agixtech case study; arXiv 2005.5021 A/B test CF→deep attentive; SAINT+ arXiv 2010.12042.)
- **Is it new?** No. This is the canonical prior art for "measure mastery → predict readiness number." The ledger's META-FINDING already identified this as the market's favorite *trap*.
- **Why hasn't a small competitor matched it?** **NEEDS DATA** (EdNet-scale interaction logs) + model infra. Legit strong moat *for Riiid*; **fatal for a 4-day fork with no user base.**
- **Implication for us:** validates D1's decision to keep memory & performance **honestly separate** and **refuse a fake predicted-pass number** rather than compete on a data-starved prediction. Riiid is the reason D1's honesty framing is defensible positioning, not a me-too.

### 2. Math Academy — FIRe (Fractional Implicit Repetition)
- **Mechanism (verified):** spaced repetition over a **hierarchical knowledge graph**; a rep on an advanced topic "trickles down" fractional credit to prerequisite sub-skills, and reviews are chosen so implicit reps "knock out" other due reviews like dominoes; calibrated per student-topic speed + intrinsic topic difficulty. (mathacademy.com/how-our-ai-works; justinmath.com; Anna Stokke ep.42.)
- **Is it new?** No — shipped and documented; concept-DAG variants also in Rabbithole & Smart-Study-Agent (GitHub, 2026 hackathon builds).
- **Why hasn't a small competitor matched it?** **TECHNICALLY-HARD + CONTENT-HEAVY** — requires a hand-curated encompassing graph with fractional weights. That authoring *is* the moat.
- **Implication for us:** the ledger already lists "knowledge-graph mastery gating" as an also-ran (heavy DAG build). Confirmed **not 4-day-buildable.** Do not attempt a rigorous version; D1's flat `los::x::y` topic weighting is the right scoped compromise.

### 3. Speak — voice-first Learn → Practice → Apply
- **Mechanism (verified):** cascaded VAD→ASR→LLM→TTS voice agent; core pedagogy = Learn → Practice → **Apply** (free-form conversation, no script, immediate elaborated feedback + retry). (speak.com blogs.)
- **Is it new?** The *voice* pipeline is impressive but language-specific. The transferable idea = **generative production under realistic conditions + immediate elaborated feedback + retry.**
- **Relevance:** this is essentially D1's generative-then-MCQ performance flow, minus voice. The only net-new-for-CFA element ("timed, integrated conditions") is captured by the **exam-simulation harness (candidate #1)** — an *integration*, not a new mechanism. Feedback-quality evidence (Van der Kleij 2015 elaborated 0.49 vs 0.05) is already in our pool.

### 4. Khanmigo / Duolingo Max / Socra — LLM Socratic tutors + roleplay
- **Mechanism (verified):** GPT-4 Socratic guidance (Khanmigo: hints-as-questions, never gives answer), Duolingo Max "Roleplay" + "Explain My Answer." Premium ($30/mo Duolingo Max). Both stress guardrails + human content review to fight hallucination.
- **Is it new?** No — shipped since 2023. Socra (PH Mar 2026, #4 of day) is the indie clone.
- **Why we don't chase it:** it *is* the **live-LLM generation/grading trap** the ledger explicitly cut (research scope in 4 days + finance-fact hallucination risk). Business-model note: premium pricing shows appetite, but the mechanism isn't defensible or safe for us to ship deterministically in 4 days.

### 5. 2025-26 indie launches (Product Hunt / marketing pages) — the commodity red ocean
- **Space** (getspace.app): "Anki alternative that looks good" — FSRS-6 + AI card extraction from PDF/URL/photo + native cross-platform UI. Mechanism = FSRS (public) + LLM card-gen (commodity).
- **Nebulearn**, **Scholium** (beta 2026), **Laxu AI**, **Shepherd** (100k+ users), **QuizLink**: all = AI card-gen + FSRS/SM-2 + gamification/analytics. Scholium notably name-drops **successive relearning** and the **testing effect** in marketing but ships generic FSRS.
- **Blunt read:** the *entire* consumer SRS frontier is converging on "remove the card-creation chore + polish the UI." **Nobody is shipping a differentiated learning mechanism.** → the 3 diamonds' mechanisms remain genuine whitespace; **MOAT of our 3 confirmed strong.** But no dominator lives here.

### 6. HN / GitHub frontier — "memory-native learning OS"
- **Rabbithole** (EverMemOS, Mar 2026 hackathon) & **Smart-Study-Agent** (POMDP belief state + Q-learning/LinUCB bandit + concept DAG + SM-2): the "agent that remembers you + adapts what to study next" pattern. Interesting but **needs-data / research-y**, not 4-day-shippable, and not evidence-graded.
- **Read:** the ambitious frontier is "persistent learner model + adaptive policy" — i.e., a lighter Riiid. Same **needs-data** wall.

### 7. r/CFA — real candidate pain (matched against mechanisms)
- Dominant, repeated pain: **QBank tests single concepts; the real exam integrates/synthesizes across topics** (analystprep; salt solutions). "Failures usually tied to not practicing synthesis." → this is the **memory→performance/transfer gap** = **D1's exact thesis**, and argues for the **integrated exam-simulation harness (candidate #1)**.
- Mock **calibration is noisy & panic-inducing**: third-party mocks miscalibrated (Kaplan long/calc-heavy; MM narrow-aggressive; CFAI closest); "averaged 60, passed"; "never passed a mock, exam easier." → strong pull for **honest calibration** (D1 honesty spine), and a caution that a *predicted pass %* would be dishonest with our data → reinforces D1's refusal.
- Final-month behavior: **question-led, not content-led**; "take a mock immediately to find weak areas"; "review every wrong answer 48h, understand WHY." → supports D1's deadline queue + a wrong-answer remediation loop (ledger already has error-bucket #5 as a workflow, not a diamond).
- **No new mechanism surfaced here** — the pain maps onto D1 + the capstone harness.

### 8. r/Anki — power-user frontier (what FSRS still can't do)
- **Biggest signal:** an explicit, upvoted request for a **native "Expected Knowledge Gain" review-ordering** option (Anki forum #67322): with a huge queue, default FSRS "burns my best mental energy on low-yield high-R cards, leaving less bandwidth for high-yield question practice." Exists only as addon 215758055. → **directly validates D1's `BuildExamQueue`** (which already scores `topic_weight × (1−R) × deadline_urgency`); fold EKG/opportunity-cost in.
- Other asks: automatic FSRS re-optimization (blocked by sync conflicts), native sibling-card awareness, simpler settings. All incremental; none a diamond.

### 9. Pretesting / errorful generation — the one genuinely under-shipped A-grade mechanism
- **Evidence:** Pan & Carpenter 2023 review (60+ studies; benefits memory *and* transfer "but varies"); **St. Hilaire, Chan & Ahn 2023 meta (Psychon Bull Rev): guessing g=0.70 for the *specific tested item*, but the *general* effect g=0.06** (near-null); Kornell et al. 2009 (foundational); NUS 2025 (adult L2 vocab, word-picture guess+feedback). Robust across ages; learners *underestimate* it (metacognitive gap).
- **The decisive caveat (blunt):** the large effect is on **memory for the exact pre-tested content**, NOT broad **transfer** (general g=0.06). CFA needs *application/transfer*, so pretesting's load-bearing benefit is **weak for our headline goal** and lands on the **same endpoint as D1's retrieval loop.**
- **Is it new?** **No, only semi.** **Unisium** already makes "try before you know" its entire product ("every study card asks for a cold, closed-book attempt"); **Duolingo's** word-picture guessing is pretesting (per NUS). → **NOVELTY MEDIUM-LOW.**
- **Why hasn't a competitor done it (more)?** Some have; and in SRS the card-front is *already* a retrieval attempt, so systematic pretesting is **partly redundant** → **MOAT WEAK (no good reason / already done).**
- **Verdict:** **Best net-new mechanism I found, but not a dominator.** Add cheaply as a **4th supporting feature**, highest-value bolted onto **D3** ("predict the next solution step before it's revealed" = pretesting at the step scale, which is exactly where Unisium says it compounds with self-explanation) and onto **D1 topic intros**. Zero Rust. Frame honestly: boosts *encoding of specific items*, not far-transfer.

---

## The two new lenses, applied to the whole field

**Lens 1 — Is it actually new?**
Almost nothing on the *product* frontier is mechanism-new. The consumer layer is commodity FSRS+AI-cardgen; the sophisticated layer (Riiid, Math Academy) is well-established prior art. The three diamonds' specific mechanisms — **honest two-score memory-vs-performance gap**, **contrastive minimal-pairs**, **worked-example adaptive fading** — remain **absent from every product I scanned.** That absence is the finding: our differentiation is real *because* the frontier converged elsewhere.

**Lens 2 — If it's so good, why hasn't a competitor done it?**
- Riiid readiness score → **NEEDS DATA** (strong moat, not ours to take).
- Math Academy FIRe → **TECHNICALLY-HARD / CONTENT-HEAVY** (strong moat, not ours to take).
- LLM Socratic tutor → **business/technical** (generation-grading trap; unsafe deterministically in 4 days).
- EKG native ordering + pretesting-in-SRS → **NO GOOD REASON → MOAT WEAK** (so we *can* grab them cheaply, but *because* the moat is weak they're commodity features, not diamonds).
- **Our 3 diamonds** sit in the sweet spot the field left open: mechanisms with **A/B evidence** that are **deterministic + 4-day-buildable** and that incumbents skipped because they chased data-hungry prediction and card-gen convenience instead. That's the defensible position — and nothing I found beats it.

---

## What to actually do with this scan (no new diamond, three amplifiers)

1. **Keep the 3 diamonds as-is.** Nothing dominates them.
2. **Build the exam-day simulation harness as the demo capstone** (integration of D1+D2+D3 under timed/integrated conditions + honest gap + calibration diagram). Highest draw in the space; it's the product's money shot. Not a new diamond — it's the ledger's FINAL SYNTHESIS made tangible. Ride it with the honesty spine (no fake pass %).
3. **Fold Expected-Knowledge-Gain / opportunity-cost ordering into D1's `BuildExamQueue`** — r/Anki users are explicitly asking for it; it's a native-fork win.
4. **Add pretesting cheaply** — "predict the next step" on D3's faded steps + guess-first on D1 topic intros. Grounded, zero-Rust, honest framing (specific-item memory, not transfer).

**FINAL: No diamond-among-diamonds found. The existing 3 hold.** The frontier is either commodity (no edge) or data/graph-heavy (un-buildable + already owned). Mark as UNVERIFIED any future claim that the exam-simulation harness or pretesting produces *transfer/pass-rate* gains — the evidence supports honesty/measurement and specific-item memory respectively, not far-transfer.
