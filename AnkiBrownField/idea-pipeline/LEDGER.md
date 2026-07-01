# Idea-Mining Pipeline — Persistent Ledger

> Blunt, evidence-first idea-mining loop for a CFA-on-Anki brownfield study app.
> Stop condition: **3 true diamonds saturate**, or the user says **STOP**.
> This file is the source of truth and is updated after every stage so results survive a stop.

---

## Status

- **Current iteration:** 4 COMPLETE — novelty/moat audit + "diamonds among diamonds" hunt (6 agents). **RESULT: no dominating idea exists; all 3 originals are strong-science but NOT genuinely novel and have WEAK moats. D3 demoted (commodity, already shipped).**
- **Diamonds found:** **3 / 3 ✅**
- **DIAMOND #1 (SATURATED, 9.0):** Transfer-hardened retrieval + deadline-aware memory-vs-performance engine (≥4 A/B transfer pillars; buildability GO-WITH-CUTS + Rust plan). Owns the required Rust change.
- **DIAMOND #2 (SATURATED, 8.5):** Ethics contrastive minimal-pair deck (≥5 A/B contrastive-comparison pillars; distinct from interleaving; deterministic, zero new Rust). Asterisk: ethics-domain evidence transferred-by-analogy (C).
- **DIAMOND #3 (SATURATED, 8.0):** Worked-example → completion → adaptive-fading trainer for CFA quant (Barbieri 2023 meta g=0.48 grade-A; fading + expertise-reversal pillars; independent mechanism; no new Rust). Caveat: procedural/NEAR transfer only + must adapt (expertise reversal) + no CFA-specific RCT (UNVERIFIED for domain).
- **Rejected as diamond:** ESL exam-English axis (WEAK — direct simplification evidence null; keep as small Asia supporting layer only).
- **Last updated:** Iteration 4 — novelty/moat verdict recorded (see next section).

---

## ITERATION 4 VERDICT — novelty & moat (the blunt truth)

**No "diamond among diamonds" exists.** Both frontier hunts (product + academic) came back empty: the consumer frontier is a commodity red ocean (AI-card-gen + FSRS + gamification, zero mechanism edge), and the real adaptive engines (Riiid/Santa, Math Academy FIRe) are prior art that needs data/graphs a 4-day fork can't build. Nothing dominates the three.

**All three "diamonds" are strong science but NOT genuinely novel, and all have WEAK moats:**
- **D3 → DEMOTED (not a diamond).** Worked-example adaptive fading was built + RCT'd inside a Cognitive Tutor (Salden/Aleven 2010) and ships in MATHia / Math Academy. Commodity technique; only incremental in CFA and eroding. Reclassify as a procedural on-ramp into D1.
- **D1 → INCREMENTAL, moat WEAK.** Every part is prior art (FSRS memory; QBank accuracy; Soderstrom&Bjork; the 2024 KT paper *"Remembering is Not Applying"*; Amplifire two-score patent US8165518B2; Surgent/Math Academy weakness-weighted reordering). Only unshipped move = the *inversion* (headline the gap, refuse a single readiness number) = positioning, not tech. Gap-widget is D/UNVERIFIED on outcome.
- **D2 → INCREMENTAL, moat WEAK.** Minimal-pair loop productized in language apps; "one fact flips the ethics answer" ships for USMLE (mdsteps.com); confusable-Standard pairs are publicly tabulated. Only unshipped = the SRS packaging.

**Why haven't incumbents done it? → mostly WEAK reasons (per your own rule, noted):**
- (d) culture / don't-think-in-learning-science + (f) nobody bothered → copyable in weeks.
- (c) business-model conflict: an honest "you may fail" undercuts the reassurance incumbents sell (Surgent ReadySCORE "builds confidence you'll pass"; UWorld "Probability of Passing"). Disinclination, not a barrier.
- The ONE durable moat — a readiness number **calibrated against real pass/fail outcomes** — is a **DATA moat incumbents own and a student project can NEVER match.** So do NOT claim calibrated readiness; show the gap, label it uncalibrated.

**Does the weak moat matter here? NO.** For a 4-day competition judged by technical founders, defensibility is not the axis graded. What wins: the working Rust engine fork (the one credible hard artifact), evidence-grounded design, and the honest refusal to fake a number. **The real risk is overclaiming calibrated readiness you can't back with data.** Build for the demo, not the moat.

**Constructive upgrades that DID fall out of Iteration 4 (fold into the build, not new diamonds):**
- **Exam-day simulation harness** = integrate D1+D2+D3 into one timed, honest run → the demo capstone / highest draw (it's integration, not a new mechanism).
- **Expected-Knowledge-Gain ordering** → fold into D1's `BuildExamQueue` (r/Anki power users explicitly want native knowledge-gain ordering).
- **Pretesting / errorful-generation** ("guess before taught") → cheap 4th supporting feature, framed honestly (specific-item memory, transfer effect g≈0.06 — NOT far-transfer).
- **New evidence pillar for D1:** Lindsey et al. 2014 (*Psych Science*, deployed course, d=0.88–1.42 — memory model + personalized deadline scheduling; it IS D1).
- **Optional honest readiness:** uncertainty-first Rasch band with a wide CI and a "not validated against real exams" label — never a flashy P(pass).

---

## BLUNT META-FINDING (Iteration 1)

The market's favorite idea is a **trap**. Every collector converged on "measure the memory→application (transfer) gap and predict readiness" — it is the biggest genuine whitespace (no incumbent ships it) and the highest demo draw. But it is **simultaneously the least-evidenced and least-buildable** thing in the whole space:

- **Science (Pan & Rickard 2018, grade A meta):** transfer to novel problems is only d=0.40 and *collapses toward zero* without three moderators — response congruency, high initial accuracy, and elaborated retrieval. Genuine far-transfer to unseen exam questions is "the least-evidenced, most over-claimed link in the chain."
- **Buildability (agent da1e0676):** "grounded + verified LLM grading" and "quality question generation" are **research projects that will blow the 4-day budget.**
- **Competition (agent 37ddfae6):** most of the moat is *trust/calibration earned over exam cycles*, not tech.

**The reframe that turns the trap into a diamond:** Don't claim to *measure far-transfer* or *predict a readiness number*. Instead, **build the three conditions the grade-A science says are REQUIRED to produce transfer** (congruent generative retrieval, mastery-gated, deadline-scheduled), keep the memory vs. performance scores honestly separate, and use the spec's own honesty rule as the feature. That version rests on A-tier evidence and safe Rust changes.

---

## Candidate ledger (Top 10, Stage 2–4 scored, weakest-link rule)

| # | Idea | CFA level | Score /10 | Weakest link (what caps it) |
|---|------|-----------|-----------|------------------------------|
| 1 | **⭐ DIAMOND #1 — Transfer-hardened retrieval + deadline-aware memory-vs-performance engine** (curated verified item bank + generative-then-MCQ performance score kept separate from FSRS memory + `BuildExamQueue` Rust RPC + honest memory-vs-performance gap dashboard) | II (core), all | **9.0 ⭐ SATURATED** | None load-bearing remain: transfer evidence ≥4 A/B pillars; buildability GO-WITH-CUTS. Non-negotiable CUTS: no live LLM generation, no verified free-response grading (fake-door both) |
| 1b | **⭐ DIAMOND #2 — Ethics contrastive minimal-pair deck** (near-miss vignette PAIRS co-presented; one decisive fact flips conform↔violate; force naming the decisive fact; reveal Standard after attempt) | all (via ethics) | **8.5 ⭐ SATURATED** | ≥5 A/B pillars (Alfieri 2013 d=0.50, Gentner 2003 adult-professional); distinct from interleaving; deterministic, zero new Rust. Asterisk: ethics-specific evidence is analogy-transferred (C) |
| 1c | **⭐ DIAMOND #3 — Worked-example → completion → adaptive-fading trainer** (for CFA multi-step calcs: TVM, bond pricing, multi-stage DDM; fade scaffolding as skill rises) | I/II (quant) | **8.0 ⭐ SATURATED** | ≥3 A/B pillars (Barbieri 2023 meta g=0.48 A; Atkinson/Renkl fading B+; Kalyuga expertise-reversal B+/A−). NEAR-transfer only; must adapt or it backfires; no CFA-specific RCT (UNVERIFIED domain). No new Rust (cloze + template progression). |
| 2 | Deadline-aware "peak on exam day" scheduler (Rust queue) | all | 7.5 | NOT independent — folded into Diamond #1 as its Rust change |
| — | ESL exam-English / cognitive-load layer | all (Asia) | 5.5 | REJECTED as diamond: direct simplification evidence NULL (Kieffer 2009); orthogonal + big market but thin intervention evidence. Keep as small supporting vocab/command-word SRS + timed-reading drill. |
| 3 | **Recognition→retrieval honesty guard** — force generative answer before reveal | all | 7.0 | Iter 2: CORE strongly supported (≥4 B+ pillars) BUT it's largely ABSORBED into Diamond #1; distinctive "latency = lie detection" claim POORLY supported/UNVERIFIED → drop it. Not a standalone diamond. |
| 4 | **Honest calibrated P(pass) + uncertainty band + give-up rule** | all | 7.0 | Memory→readiness leap is data-starved (spec itself concedes this); draw is intellectual, not flashy |
| 5 | **Error-bucket classifier + remediation router** (concept/method/execution/misread/timing) | all | 6.5 | It's a workflow, not a studied learning mechanism; classification reliability unproven |
| 6 | **Memory-vs-application "transfer" score** (standalone) | II/III | 6.5 | Far-transfer least-evidenced link + grounded LLM grading is a build trap (high risk) |
| 7 | **Confidence×correctness calibration + hypercorrection surfacing** | all | 6.5 | Iter 2: hypercorrection EXISTENCE upgraded C+→B/B+ (replicates ≥4 labs, Butler-Fazio-Marsh d≈0.86; Gardner-Medwin CBM applied-adult B+). BUT "targeting confident errors improves study efficiency" is UNVERIFIED and contradicted by region-of-proximal-learning → good supporting feature, not a headline diamond. |
| 8 | **Interleaving engine + integration score** | II/III | 6.0 | Brunmair 2019: small for math (0.34), NEGATIVE for vocab (−0.39); blanket interleaving backfires |
| 9 | **Level III free-response/essay grading** (LLM rubric) | III | 6.0 | Best demo draw, but verified grading is a flagged research trap in 4 days |
| 10 | **Source-verified card generation** | I/II | 5.5 | Generation commoditizing + finance-error risk + build trap; verification is the only real edge |

Also-rans (5.0–5.5, incremental or unproven): knowledge-graph mastery gating (anecdotal evidence, heavy DAG build), BA II Plus pacing/keystroke trainer (niche, weak learning-science headline), command-word/distractor micro-drills, "pay rent" pruning + atomicity linting, micro-lessons from wrong answers, mobile conceptual/no-calculator queue.

Status legend: `rising` · `stalled` · `killed` · `SATURATED (diamond)`

---

## Evidence pool (graded — only A/B may act as load-bearing pillars)

| Ref | Finding | Grade | Use |
|-----|---------|-------|-----|
| Adesope et al. 2017 (meta, N=15,427) | Practice testing beats restudy, g=0.61 (0.51 vs restudy) | A− | Core retrieval loop |
| Pan & Rickard 2018 (meta, 122 exp) | Transfer d=0.40 but ≈0 without congruency + high initial accuracy + elaboration | **A** | The design spec for making transfer real |
| Karpicke & Blunt 2011 (Science) | Retrieval > concept mapping on inference tests, d≈1.5 | A− | Recall beats re-encoding, even conceptual |
| Cepeda et al. 2008 (>1,350 adults, ≤1yr) | Optimal gap ≈ fraction of time-to-test (20%→wk, 5–10%→yr) | A− | Deadline-aware scheduling (rare adult+long-horizon study) |
| Cepeda et al. 2006 (meta, 317 exp) | Optimal ISI scales with retention interval | A− | Spacing justification |
| Rohrer, Dedrick & Stershic 2015 (RCT) | Interleaving, delayed test d=0.79 | A− | Interleave confusable categories |
| Brunmair & Richter 2019 (meta) | Interleave g=0.42; math 0.34; vocab −0.39 | A− | Guardrail: don't interleave rote cards |
| Roediger & Karpicke 2006 | Testing wins at delay, loses at 5 min; confidence misleads | B+ | Recall vs reread |
| Bisra et al. 2018 (meta) | Self-explanation g=0.55 [.45,.65] | B+ | "Why is this the answer?" prompts |
| Van der Kleij et al. 2015 (meta) | Elaborated feedback 0.49 vs 0.05 correctness-only | B+ | Explanations > right/wrong |
| Dunlosky et al. 2013 | Testing + spacing = "high utility"; reread/highlight = low | B+ | Design priority ranking |
| Butler 2010 | Repeated testing transfers to new inferences (but guided) | B | Application-phrased items |
| Soderstrom & Bjork 2015 | Learning ≠ performance; in-session ease misleads | B− | The three-score thesis's spine |
| Koriat & Bjork 2005 | Foresight bias: answer-visible inflates JOLs | B− | Force recall before reveal |
| Karpicke & Roediger 2008 (Science) | Retrieval, not restudy, drives retention (word pairs) | B− | Don't retire card on first success |
| Butterfield & Metcalfe 2001 + Butler/Fazio/Marsh 2011 + Metcalfe 2017 | Hypercorrection: confident errors corrected most; replicates ≥4 labs, d≈0.86 | B/B+ | Surface confident misses (existence solid; efficiency payoff UNVERIFIED) |
| Bertsch 2007 (gen meta g=0.40); Yu 2025 (overt>covert g=0.17); Rhodes&Tauber 2011 (delayed-JOL g=0.93 resolution) | Generative retrieval before reveal beats passive; delayed self-judgment well-calibrated | B+ | Honesty-guard core (absorbed into Diamond #1) |
| Gardner-Medwin CBM (17 med-school summative exams) | Certainty-based marking raises reliability (α 92.4 vs 88.7) | B+ | Applied/adult calibration pillar (measurement, not learning) |
| Bjork & Bjork 2011 | "Desirable difficulties" (needs prerequisite knowledge) | C | Conceptual frame + guardrail |
| Sweller, van Merriënboer & Paas 1998; Sweller 2019 (CLT + downstream RCTs/metas) | Reducing extraneous load frees WM for learning; worked-example/split-attention/redundancy effects | A (mechanism) | Exam-English axis mechanism — but domain-general (extraneous ≠ *linguistic* load); indirect for L2 claim |
| Kieffer, Lesaux, Rivera & Francis 2009 (RER meta, 11–16 RCTs, school-age ELL) | Of 7 accommodations, ONLY English dictionary/glossary significant (g=0.146); **Simplified English g=0.030, ns** | A− | Blunt counter: item *simplification* NULL; vocabulary support small-but-real (exam-English H2) |
| Li & Suen 2012 (HLM meta, ELL accommodations) | Overall accommodation ≈0.157 SD; only English-proficiency moderates; "no support" for linguistic simplification | A− | Confirms simplification thin; low-proficiency L2 benefit most |
| Pennock-Román & Rivera 2011 (meta, 14 studies, 50 ELL groups) | Glossary+extra-time d=0.229; pop-up glossary restricted-time 0.285; Plain English small; effects larger with extra time | A− | Vocabulary + TIME interaction (exam-English H2) |
| Abedi & Lord 2001 (field study, N=1,174 8th grade) | Linguistically-modified NAEP math items → slightly higher scores; ELL/low-track/low-SES benefit more | B | Seminal construct-irrelevant-variance; small effect, adolescents |
| Elleman et al. 2009 (vocab meta, 37 studies K-12) | Vocab instruction → comprehension d=0.50 custom, **0.10 ns standardized**; reading-difficulty d=1.23 | B (for app) | Pre-teach vocab: real but measure-dependent, collapses on standardized (=CFA-like) |
| Busby & Dahl 2021 (N=295 undergrad); Shaw & McMillion 2008; AnnRevLing 2022; ETS 1979 (GRE/TOEFL) | L2 reads slower (~25% more time at equal comprehension); speededness disproportionately hits L2 reading | B+ | Reading-speed/time-pressure×L2 leg (exam-English H2) — adult/high-stakes represented |

Deliberately excluded as pillars: retrievalpractice.org / practitioner syntheses (not peer-reviewed primary). Med-ed "Anki helps Step 1 not Step 2 CK" (observational, directional only).

---

## Top-3 candidate evidence pyramids

### #1 — Transfer-hardened retrieval + deadline-aware honesty guard (8.5 ▲, NEAR-diamond)
Load-bearing claims → support (UPDATED Iter 2):
- **Generative retrieval > recognition for durable learning** → Adesope A−, Karpicke&Blunt A−, Roediger&Karpicke B+ → **STRONG (≥3 A/B).**
- **Spacing scaled to exam date improves delayed retention** → Cepeda 2008 A−, Cepeda 2006 A− → **STRONG (adult + long horizon).**
- **Retrieval practice transfers to NOVEL APPLIED/quantitative problems** → Larsen 2013 (med SP), Kromann 2009 RCT (d=0.93), key-feature clinical-reasoning RCT 2016, Samani&Pan 2021 (physics, N≈350) → **STRONG, ≥4 INDEPENDENT A/B pillars (Iter 2 upgrade — was the weakest link, now resolved).**
- **Buildable in 4 days** → topic-weighted deadline queue = safe Rust win (agent da1e0676); reuse anki-sync-server. Novel-item risk REDUCED: format need not match (McDermott 2014 A−, BMC 2024 B → format-congruency unnecessary), so plain MCQ novel items suffice. Final buildability call pending agent 4cf7fc52. **← REMAINING WEAKEST LINK.**

DROPPED sub-claims (Iter 2, contradicted — do NOT build on these):
- "Practice must mimic the exam's QUESTION FORMAT" → POORLY supported / contradicted (McDermott 2014, BMC 2024).
- "Contextual interference / variability drives applied transfer" → POORLY supported (lab-only, motor-skill; nulls in applied fields).
- "High initial accuracy is a precondition" → TENTATIVE, single-source (Pan&Rickard) → keep as a design heuristic, not a science claim.

Refined feature statement: **force generative retrieval of the exact knowledge/computations the exam demands (answer-level, not format-level), after the learner reaches accuracy, scheduled to peak on exam day, with memory and performance scored separately and honestly.**
Verdict: not yet SATURATED, but the evidence leg is now strong. Saturation now hinges ONLY on the buildability verdict (agent 4cf7fc52) — if the curated-bank + MCQ-performance path is a GO, this becomes the first diamond.

### #2 — Deadline-aware scheduler (7.5)
Strongest single evidence base here (Cepeda 2008 is the rare adult, months-long, grade-A study) + a named safe Rust change + contrarian to Anki's infinite-retention objective. Capped only by demo flashiness and being a component, not a headline.

### #3 — Recognition→retrieval honesty guard (7.5)
A-tier grounded (force generation) + trivially buildable (typed answer + latency) + on-thesis with the spec's honesty rule. Capped by the moderate evidence for reliably *detecting* self-deception.

---

## Diamonds (saturated ideas)

### ⭐ DIAMOND #1 (1/3) — Transfer-hardened retrieval + deadline-aware memory-vs-performance engine
**What ships (4-day GO-WITH-CUTS):**
- **Curated, human/CFA-verified item bank** (~250–350 novel MCQ item-sets across ~3 topics), mapped to source cards via hierarchical `los::x::y` tags + a `CFA Item-Set` note type in a sibling `CFA::Performance` deck. Offline LLM *drafting* + human verification (NOT live generation).
- **Generative-then-MCQ performance flow:** show the novel vignette, take a typed attempt, THEN reveal choices for deterministic scoring. Preserves generative retrieval, zero runtime LLM.
- **Two honest, separate scores:** Memory = FSRS retrievability `R` of the underlying card; Performance = accuracy on novel MCQ items for that LOS. Never blended. The **money plot is the memory→performance gap** shown honestly (satisfies the spec's honesty rule without overclaiming a readiness number).
- **The Rust engine change:** new `BuildExamQueue` RPC in `rslib` (proto in `scheduler.proto`, impl in `scheduler/service/mod.rs`, config via `set_config_json`), scoring cards by `topic_weight × (1−R) × deadline_urgency`. Non-mutating (returns an ordered id list) → FSRS + undo trivially safe → propagates to AnkiDroid/iOS via shared backend. Rust unit tests + Python-facing test.
- **Held-out eval:** item-level AND whole-LOS holdout; leakage audit (embedding cosine + n-gram overlap) before scoring; AUC/log-loss + calibration (ECE reliability diagram); beats a keyword/vector baseline.
- Reuse `anki-sync-server` (do NOT build sync).

**Evidence pillars (all A/B):** retrieval→novel-applied transfer (Larsen 2013, Kromann 2009 RCT d=0.93, key-feature RCT 2016, Samani&Pan 2021 physics) · generative retrieval > recognition (Adesope A−, Karpicke&Blunt A−) · deadline spacing (Cepeda 2006/2008 A−, adult+months) · learning≠performance honesty (Soderstrom&Bjork).
**Cuts (research traps — do not put on critical path):** live question generation ❌, verified free-response LLM grading ❌ (fake-door as "Level III essay grading — coming").

### ⭐ DIAMOND #2 (2/3) — Ethics contrastive minimal-pair deck
**What ships:** curated ~150–250 human-verified vignette PAIRS across 3 confusable-Standard clusters (e.g., III(C) Suitability vs II(A) MNPI vs V(A) Diligence). Each pair is two near-miss scenarios differing by ONE decisive fact that flips conform↔violate. A `CFA Ethics Minimal-Pair` note type + `los::` tags, sibling deck, reusing Diamond #1's bank/note-type infra. **Fully deterministic scoring** (two conform/violate calls + which-Standard MCQ) → no runtime LLM, **zero new Rust**.
**Evidence-mandated design (non-negotiable):** (1) co-present the pair within a session (Alfieri immediate-comparison moderator); (2) force the learner to NAME the decisive fact; (3) reveal the Standard AFTER the attempt; (4) expect discrimination/transfer gains, not rote gains.
**Evidence pillars:** Alfieri, Nokes-Malach & Schunn 2013 (meta, d=0.50 [.44,.56], A−) · Gentner, Loewenstein & Thompson 2003 (adult professionals — MBAs/accountants/consultants, 48% vs 19% transfer, A−) · Corral/Kurtz/Jones 2020 (contrast > comparison for confusable categories, B) · Rittle-Johnson & Star 2007 (classroom RCT, B/B+) · Schwartz et al. 2011 (RCT d=0.31, B+).
**Distinct from Diamond #1:** structural alignment/discrimination ≠ retrieval+spacing. Also distinct from interleaving (simultaneous co-presentation + forced alignment, isolated by content-matched compare-vs-separate studies).
**Asterisk:** ethics/legal-application-specific A/B evidence is C/UNVERIFIED — the mechanism is proven in math/negotiation/category-learning and transferred by analogy. Pitch as grounded mechanism, not "proven for CFA ethics."

### ⭐ DIAMOND #3 (3/3) — Worked-example → completion → adaptive-fading trainer (CFA quant)
**What ships:** for ~3 multi-step calc types (TVM, bond pricing, multi-stage DDM), a progression that starts with a fully worked example, moves to completion problems (some steps blanked), then to independent solving — **fading scaffolding as the learner's accuracy rises** (adaptive, to respect expertise reversal). Built on native Anki cloze + card-template progression + a light front-end fade-state machine keyed to correctness. **No new Rust.** Content authored via Diamond #1's offline-draft + human-verify pipeline (correct step-by-step solutions).
**Evidence pillars:** Barbieri, Miller-Cotto, Clerjuste & Chawla 2023 (meta, 55 studies, math, g=0.48 [0.36,0.60], **A**) · Atkinson, Renkl & Merrill 2003 (fading + principle-prompts → near+far transfer, no extra time, B+) · Kalyuga et al. 2001/2003 (expertise reversal — WHEN to fade; adult trade apprentices, B+/A−) · supporting: completion-problem effect (Paas 1992, B), self-explanation (Bisra 2018, B+, conditional).
**Distinct from #1 and #2:** this is a Cognitive-Load skill-acquisition mechanism (supply then withdraw the solution to build a procedural schema) — different construct/stage/theory family; its endpoint hands off into Diamond #1's retrieval loop.
**Caveats (must ride with it):** the A-tier win is PROCEDURAL / NEAR transfer (execute a known calc fast + accurately under time — the real CFA quant pain), NOT far/novel transfer; generic self-explanation prompts BACKFIRE (use targeted principle-prompts at the faded step); it MUST adapt (fade with rising skill) or expertise reversal makes it harmful; no CFA/finance-specific RCT → UNVERIFIED for the exact domain.

---

## FINAL SYNTHESIS — the 3 diamonds compose into ONE product

They are not three separate apps; they are three evidence-grounded mechanisms on one Anki fork, unified by the spec's honesty spine and sharing ONE curated-bank + note-type + offline-draft/human-verify toolchain:

1. **#1 owns the required Rust engine change** (`BuildExamQueue`) and the memory-vs-performance honesty dashboard — the spine.
2. **#3 feeds #1:** worked-example fading builds the procedure, then hands the learner into #1's generative retrieval loop. (quant path)
3. **#2 is the standalone showpiece** for the highest-weight, judgment-based topic (ethics), on a distinct A-tier mechanism, deterministic, zero extra Rust.
4. Study-feature ablation (spec §8): the cleanest pre-registered test is **#3's fading on vs off vs plain Anki** on held-out near-transfer calc items at equal study time (also viable: #1's generative-MCQ vs recognition; #2's minimal-pairs vs single-scenario).
5. **Hard cuts across all three (research traps):** live LLM question generation ❌, verified free-response grading ❌ → fake-door as "Level III essay grading — coming."
6. ESL layer = optional Asia-market garnish, scoped small; NOT a headline.

---

## Iteration log

### Iteration 1 — COMPLETE
- 6 agents returned: 4 collectors (CFA pain, spaced-rep community, competitor teardown, HN/PH), 1 graded evidence pool, 1 buildability rubric.
- Convergence: memory→application gap + honest readiness = the universal wedge.
- Key correction: the naive "measure transfer/readiness" feature is the weakest-evidenced + least-buildable; the reframe (build the conditions for transfer) is A-tier grounded.
- 0/3 diamonds; one near-diamond at 8.0.

### Iteration 2 — near complete
- G1 (transfer evidence) DONE → general retrieval→novel-applied transfer STRONG (≥4 independent A/B pillars); format-congruency + contextual-interference framings CONTRADICTED and dropped. This resolved #1's evidence weak link.
- G2 (buildability) DONE → GO-WITH-CUTS with concrete file-level Rust plan; MCQ path shippable, generation + free-response grading cut. This resolved #1's buildability weak link → **#1 SATURATED = DIAMOND #1.**
- G4 (niches) DONE → best new candidate: Ethics contrastive minimal-pair deck (rides Rohrer 2015 interleaving in the case it works, deterministic, all-levels). Runners-up: L3 command-word drill (capped by grading trap), ESL "exam-English layer" (orthogonal cognitive-load axis). Full file: `idea-pipeline/iter2-G4-outlier-segments.md`.
- G3 (honesty-guard #3 + calibration #7 evidence) DONE → #3 core strong but absorbed into Diamond #1; latency-lie-detection dropped. #7 hypercorrection existence upgraded to B/B+ but efficiency payoff unverified → supporting feature, not a diamond. Full dossier: `idea-pipeline/evidence-G3-honesty-guard-and-hypercorrection.md`.

**Iteration 2 conclusion:** 1 diamond banked (#1). Candidates #3 and #7 do NOT saturate independently (#3 is a component of #1; #7's payoff is unverified). Diamonds #2 and #3 must come from genuinely INDEPENDENT mechanisms — the deadline-scheduler and honesty-guard are components of #1, not separate diamonds.

### Iteration 3 — COMPLETE → LOOP STOPPED (3/3 diamonds)
- H1 DONE → **Diamond #2 SATURATED** (≥5 A/B pillars, distinct mechanism, deterministic/zero-Rust). Dossier: `idea-pipeline/iter3-H1-contrastive-minimal-pair-evidence.md`.
- H3 DONE → **Diamond #3 SATURATED** — worked-example → completion → adaptive-fading (Barbieri 2023 meta g=0.48 A; more defensible than ESL). Dossier: `idea-pipeline/evidence-H3-worked-example-fading.md`.
- **LOOP STOPPED: 3/3 diamonds. 3 iterations, 13 agents. All persisted in this ledger + per-agent dossiers in idea-pipeline/.**
- H2 DONE → ESL axis WEAK/rejected as diamond (kept as small supporting layer). Detail below: Axis is genuinely ORTHOGONAL to #1 (real-time language-processing/WM load during reading, not memory/transfer) and does NOT collapse into it; market is HEADLINE-SCALE (CFA APAC ≈ 54–59% of all exam administrations, FY2025 107,400/200,000; India now #1 for new L1 candidates). BUT the load-bearing intervention claim "reducing extraneous language load improves NNS scores" is NOT backed by ≥3 aligned A/B pillars: the most direct meta-analytic test — linguistic *simplification* of items — is NULL (Kieffer 2009 g=0.030 ns; Li & Suen 2012 "no support"). Only VOCABULARY/glossary support survives (Kieffer g=0.146; Pennock-Román 0.229–0.285 w/ time; Elleman vocab→comp d=0.50 custom but 0.10 ns standardized) + a solid B+ time-pressure×L2 leg (L2 ~25% slower, speededness hits L2 harder; ETS 1979, Busby&Dahl 2021, BMC 2024). CLT itself is A-tier but domain-general (extraneous ≠ linguistic load) → mechanism strong, intervention thin, extrapolated from K-12 ELL to adult professionals. **Do NOT promote to Diamond #3;** keep as an orthogonal Asia-market supporting LAYER (exam-English/command-word/finance-collocation SRS deck rides FSRS's strength; reading-under-time-pressure drill), scoped to the small (~0.1–0.15 SD) evidenced effect, NOT the flashy "AI simplifies the vignette" version. Full dossier: `idea-pipeline/iter3-H2-exam-english-cognitive-load.md`.
- H3: vet a fresh independent mechanism — worked-example effect + fading/scaffolding (Sweller; A-tier, directly fits CFA multi-step quant, distinct from retrieval) → candidate Diamond #3.
