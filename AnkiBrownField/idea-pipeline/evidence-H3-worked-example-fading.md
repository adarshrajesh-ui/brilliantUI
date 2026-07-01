# H3 Evidence — Worked-Example → Completion → Independent-Problem FADING trainer (candidate Diamond #3)

> Blunt, evidence-first dossier. Goal H3 of Iteration 3: vet a genuinely INDEPENDENT third mechanism (distinct from retrieval practice = Diamond #1).
> Candidate feature: a scaffolding-fading trainer for CFA multi-step quantitative procedures (TVM/bond pricing, FCFF/FCFE, swap valuation, multi-stage DDM, regression) that walks the learner **worked example → completion problem (blank a step) → independent problem**, fading scaffolding as skill rises. Roots: worked-example effect + completion-problem effect + guidance-fading, all from Cognitive Load Theory. Targets PROCEDURAL EXECUTION under time pressure — the thing flashcards and retrieval-of-facts don't build.
>
> Format per finding: **VERBATIM quote (author, year, locator)** → 2–3 sentence methodology summary → **METHODOLOGY GRADE (A–D)**.
> Grade key (same rubric as G3): **A** = meta / large RCT, adult+applied quantitative, effect+CI, replicated, ecologically valid for exam prep · **B** = solid controlled design + replication but lab-leaning or K-12/undergrad or proxy task · **C** = single small paradigm / correlational / undergrad-only · **D** = anecdote or unreplicated. Nothing fabricated; anything I could not source is marked **UNVERIFIED**.

---

## PILLAR 1 — The worked-example effect (does studying worked-out solutions beat problem-solving practice for acquiring a procedure?)

### Finding 1-1 — The seminal demonstration (Sweller & Cooper 1985)
> "It was found that not only did worked examples, as expected, require considerably less time to process than conventional problems, but that subsequent problems similar to the initial ones also were solved more rapidly. Furthermore, decreased solution time was accompanied by a decrease in the number of mathematical errors. Both of these findings were specific to problems identical in structure to the initial ones."
> — **Sweller & Cooper, 1985**, *Cognition and Instruction*, 2(1), 59–89, abstract (doi:10.1207/s1532690xci0201_3).

**Methodology:** Five experiments in algebra with Year 9, Year 11, and university mathematics students; time-controlled comparison of studying worked examples vs. solving conventional problems, then a post-test of similar problems. Worked-example groups solved similar post-test problems ~½ the time with ~1/5 the errors — but the benefit was confined to problems structurally identical to those studied.
**GRADE: B.** Foundational, replicated hundreds of times, quantitative (algebra) — but 1980s lab/classroom, adolescent/undergrad, and it explicitly finds the benefit does **not** extend to structurally varied problems. Establishes the mechanism, not adult/applied magnitude.

### Finding 1-2 — The headline pillar: a proper meta-analysis in mathematics (Barbieri et al. 2023)
> "the average effect size of worked examples on mathematics performance outcomes was medium with g=0.48 … with a 95% CI from 0.36 to 0.60, p=0.01, 𝜏² =0.5854. According to Cohen's standards, worked examples have a medium effect on mathematics outcomes."
> — **Barbieri, Miller-Cotto, Clerjuste & Chawla, 2023**, *Educational Psychology Review*, 35(1), Art. 11, Results (doi:10.1007/s10648-023-09745-1; ERIC EJ1364058).

**Methodology:** First published meta-analysis of the worked-example effect in math; screened 8,033 abstracts → 43 articles / 55 studies / 181 effect sizes, elementary grades **through postsecondary/adulthood**, experimental + quasi-experimental, robust variance estimation (RVE) to handle clustered effect sizes. Worked examples beat problem-solving controls by g=0.48 [0.36, 0.60] (a UD press summary frames this as ≈18 percentile points; secondary, not primary).
**GRADE: A.** Meta, quantitative (math = the CFA-relevant content type), spans to adulthood, CI reported, publication-bias/heterogeneity handled. Held marginally shy of "A+" only because it is K-12-weighted and no study is CFA/finance-specific. **This is the load-bearing pillar for the mechanism.**

### Finding 1-3 — Blunt caveat baked into the same meta: don't naively bolt on self-explanation prompts
> "The inclusion of self-explanation prompts significantly moderated the effect of examples yielding a negative effect in comparison to worked examples conditions that did not include self-explanation prompts. … pairing examples with self-explanation prompts may not be a fruitful design modification."
> — **Barbieri et al., 2023**, *Educ. Psychol. Rev.*, 35(1), Art. 11, abstract.

**Import:** Directly tensions Pillar 3 below. In the *aggregate math meta*, adding SE prompts to worked examples **hurt** relative to plain worked examples. So the popular "worked example + self-explanation" combo is NOT a free win; it interacts with content and design (see the Atkinson 2003 nuance in Pillar 3).
**GRADE: A (as a caveat, same meta).** Must temper any "add explain-your-step prompts" product claim.

**Sub-verdict (P1):** Worked-example effect for acquiring quantitative procedures = **STRONGLY supported, A-tier** (Barbieri 2023 meta + Sweller & Cooper 1985 seminal + thousands of replications). Caveat: benefit is strongest for near-structural problems, and bolt-on SE prompts can backfire.

---

## PILLAR 2 — The completion-problem effect (partial worked example the learner finishes)

### Finding 2-1 — The origin of "completion" (van Merriënboer 1990)
> "After the course, the completion group was superior to the generation group in measures concerning the construction of programs; furthermore, it was characterized by a lower mortality. The data indicated that the completion strategy facilitated the use of templates; however, this does not necessarily seem to imply that the students actually understood the working of those templates, because no differences occurred in the ability to interpret programs."
> — **van Merriënboer, 1990**, *Journal of Educational Computing Research*, 6(3), 265–285, abstract (doi:10.2190/4NK5-17L7-TWQV-1EHL).

**Methodology:** Two matched high-school groups (N=28 vs 29, grades 10–12) in a 10-lesson programming course; completion strategy (modify/extend existing programs) vs. generation strategy (design/code from scratch). Completion group built programs better and had lower dropout — but showed no advantage in *interpreting* programs (procedural fluency ↑, conceptual understanding not shown).
**GRADE: B−.** Clean quasi-experiment, but single study, N≈57 adolescents, programming (not quantitative calc), and the effect is on construction/fluency, not understanding. Establishes completion as a viable scaffold, not a strong applied claim.

### Finding 2-2 — Completion + worked BEAT conventional practice for TRANSFER (Paas 1992, statistics)
> "The completion strategy and, in particular, the worked strategy proved to be superior to the conventional strategy for attaining transfer."
> — **Paas, 1992**, "Training Strategies for Attaining Transfer of Problem-Solving Skill in Statistics: A Cognitive-Load Approach," *Journal of Educational Psychology*, 84(4), 429–434, abstract.

**Methodology:** Three computer-based training conditions in **statistics** (a quantitative domain) — conventional problems vs. worked examples vs. partly-worked completion problems — with transfer performance and cognitive load (mental effort) measured. Worked and completion conditions produced higher and less effort-demanding transfer performance; the practice-type→transfer relation was mediated by cognitive load, as CLT predicts. (Exact N/population **UNVERIFIED** from abstract — treat as small controlled experiment.)
**GRADE: B.** Directly on-point: quantitative domain, **transfer** outcome, cognitive-load mediation, worked/completion > conventional. Downgraded for single study and unverified sample details.

**Sub-verdict (P2):** Completion-problem effect = **moderately supported (B-tier)**. It is the natural middle rung of the fading ladder and has a quantitative-transfer study (Paas 1992) plus the original programming study (van Merriënboer 1990). Not A — the completion-specific literature is thinner and older than the worked-example base.

---

## PILLAR 3 — Guidance fading: the "worked example → problem" transition (the core of the proposed feature)

### Finding 3-1 — Fading works, but reliably only for NEAR transfer (Renkl, Atkinson, Maier & Staley 2002)
> "we found that the fading procedure fosters learning, at least when near transfer performance is considered. Moreover, this effect is mediated by a lower number of errors under the fading condition as compared to the example-problem condition."
> — **Renkl, Atkinson, Maier & Staley, 2002**, "From Studying Examples to Solving Problems: Fading Worked-Out Solution Steps Helps Learning," *Journal of Experimental Education*, 70(4), abstract.
> Field exp: near transfer **F(1,32)=4.44, p<.05**; far transfer **F(1,32)=2.28, p>.10 (n.s.)**. Lab exp (replication, different population/domain/fade direction): near transfer **F(1,51)=4.58, p<.05**; far transfer **F<1 (n.s.)**.

**Methodology:** Two studies — a classroom field quasi-experiment ("low-track" students, physics/electricity, backward fading) and a controlled lab experiment (university students, probability, forward fading) — comparing successive fading of worked steps against static example–problem pairs, ANCOVA controlling for prior knowledge. Fading beat example–problem pairs on **near** transfer in both; **far** transfer was numerically higher but non-significant in both; the near-transfer gain was fully mediated by fewer errors during learning.
**GRADE: B.** Genuine replication across two populations, two quantitative domains, two fade directions, with prior-knowledge control — solid. But the effect is **near-transfer only** and the samples are adolescents/undergrads. Blunt: fading alone buys procedural (near) transfer, not novel-structure (far) transfer.

### Finding 3-2 — Fading + principle-prompts rescues FAR transfer too, at no extra time (Atkinson, Renkl & Merrill 2003)
> "successively fading … reliably fosters performance on near-transfer tasks … this effect is not reliable on far-transfer tasks. To address this, the authors combined fading with the introduction of prompts designed to encourage learners to identify the underlying principle illustrated in each worked-out solution step. Across 2 experiments, this combination produced medium to large effects on near and far transfer without requiring additional time on task."
> — **Atkinson, Renkl & Merrill, 2003**, *Journal of Educational Psychology*, 95(4), 774–783, abstract (doi:10.1037/0022-0663.95.4.774).

**Methodology:** Two experiments combining backward fading with principle-identification prompts vs. control instructional materials (college students, well-structured math/probability). The fading+prompt combination yielded medium-to-large effects on **both** near and far transfer with no increase in learning time (near transfer main effect e.g. F(1,73)=5.99; far transfer F(1,73)=4.50, p<.05).
**GRADE: B+.** The strongest single fading study for the feature: it directly tests the exact "worked→faded→independent" transition, resolves the far-transfer weakness, and reports it's cheap to implement. Downgraded from A only for undergrad samples and being one lab program (Renkl/Atkinson).

**⚠️ Cross-pillar tension to flag loudly:** Atkinson 2003 says **fading + principle-prompts** helps far transfer; the Barbieri 2023 math meta (Finding 1-3) says **SE prompts on worked examples hurt on average**. Reconciliation: Atkinson's prompts are *targeted principle-identification tied to the faded step* (anticipation-inducing), not generic "explain this." The design lesson is precise: prompts must force principle-based anticipation at the faded step, not open-ended self-talk — otherwise they're net-negative. Do not hand-wave this.

**Sub-verdict (P3):** Fading transition = **STRONGLY supported for procedural/near transfer (B/B+), replicated**, and there's a concrete recipe (fade + principle-prompt) to extend it to far transfer. This is exactly the CFA use case: executing a known multi-step procedure faster and more accurately under pressure = near/procedural transfer.

---

## PILLAR 4 — Self-explanation during worked examples (transfer of procedures)

### Finding 4-1 — The seminal self-explanation study (Chi et al. 1989)
> "'Good' students learn with understanding: They generate many explanations which refine and expand the conditions for the action parts of the example solutions, and relate these actions to principles in the text. … 'Poor' students do not generate sufficient self-explanations, monitor their learning inaccurately, and subsequently rely heavily on examples."
> — **Chi, Bassok, Lewis, Reimann & Glaser, 1989**, *Cognitive Science*, 13(2), 145–182, abstract (doi:10.1016/0364-0213(89)90002-5).

**Methodology:** Talk-aloud protocol study, **N=8** undergraduates studying worked mechanics examples then solving isomorphic + transfer problems; split post hoc into "Good" (82%) vs "Poor" (46%) solvers. Good solvers spontaneously generated more, more principle-based self-explanations and used examples for targeted reference rather than search-and-copy.
**GRADE: C+.** Enormously influential and mechanistically clarifying, but N=8, correlational/observational (not a manipulation), undergrad physics. Establishes *why* self-explanation matters; not evidence of a causal training effect.

### Finding 4-2 — Self-explanation meta (already in the ledger pool)
> **Bisra, Liu, Nesbit et al., 2018** (meta) — self-explanation prompts **g=0.55 [.45, .65]** (already graded **B+** in LEDGER evidence pool).

**Import + blunt reconciliation:** Self-explanation *as a general strategy* is B+ and positive; but *bolting SE prompts onto worked examples specifically* was **negative** in the Barbieri 2023 math meta (Finding 1-3), and Atkinson 2003 only got value from *targeted principle-anticipation* prompts at faded steps.
**GRADE (SE-during-worked-examples specifically): B− / conditional.** Net design rule: prompt principle-identification at the faded step (Atkinson recipe); do NOT sprinkle generic "explain your reasoning" prompts across fully-worked examples.

**Sub-verdict (P4):** Self-explanation is a **supporting** mechanism, not an independent pillar for this feature. It's the lever that can extend fading to far transfer — but only in the narrow, targeted form, and it can backfire otherwise. Treat as a design detail, not a headline claim.

---

## PILLAR 5 — Expertise reversal (WHEN to fade — so the feature adapts, not shows examples forever)

### Finding 5-1 — The effect itself (Kalyuga, Ayres, Chandler & Sweller 2003)
> "Instructional techniques that are highly effective with inexperienced learners can lose their effectiveness and even have negative consequences when used with more experienced learners. We call this phenomenon the expertise reversal effect."
> — **Kalyuga, Ayres, Chandler & Sweller, 2003**, *Educational Psychologist*, 38(1), 23–31, abstract (doi:10.1207/s15326985ep3801_4).

**Methodology:** Peer-reviewed review synthesizing a body of controlled CLT experiments on the instruction × prior-knowledge interaction. Guidance (incl. worked examples) that helps novices becomes redundant — even harmful (redundancy effect) — as expertise grows.
**GRADE: B+ (review).** Broad, replicated, foundational; not a single primary study, hence not tagged A.

### Finding 5-2 — The ADULT / APPLIED anchor: mechanical trade apprentices (Kalyuga, Chandler, Tuovinen & Sweller 2001, as reported in the 2003 review)
> "Inexperienced mechanical trade apprentices were presented with either a series of worked examples to study or problems to solve. On subsequent tests, inexperienced trainees benefitted most from the worked examples condition. … With more experience in the domain, the superiority of worked examples disappeared. Eventually, with sufficient experience, additional learning was facilitated more by problem solving than through studying worked examples. The worked examples became redundant and problem solving proved superior."
> — **Kalyuga et al., 2003**, *Educ. Psychologist*, 38(1), describing **Kalyuga, Chandler, Tuovinen & Sweller, 2001**, *Journal of Educational Psychology*, 93(3), 579–588 (doi:10.1037/0022-0663.93.3.579).

**Methodology:** Controlled experiments with **adult vocational trainees** (mechanical/electrical trade apprentices) crossing instruction format (worked examples vs. problem solving) with measured expertise. Clean crossover: worked examples win for novices; problem-solving wins for the more experienced — a within-domain expertise reversal, with mental-load ratings tracking the switch.
**GRADE: B+ (borderline A− for applied fit).** This is the rare **adult, applied, quantitative-technical** anchor the rubric rewards, and it directly justifies the *adaptive* fade schedule. Held below A only because it's the Kalyuga/Sweller program (limited independence) and vocational, not financial.

**Sub-verdict (P5):** Expertise reversal is **well-supported (B+)** and, crucially, it is not just a caveat — it is the *design requirement*: the feature MUST fade guidance as the learner's per-procedure skill rises, or it will actively harm improving learners (redundancy). The adult trade-apprentice evidence is the closest thing to a professional/applied analogue for CFA candidates.

---

## INDEPENDENCE CHECK — is this distinct from Diamond #1 (retrieval practice)?

**YES, genuinely independent.** Retrieval practice (Diamond #1) strengthens memory by *withholding* the answer and forcing effortful recall (a "desirable difficulty"). The worked-example/fading mechanism does the near-opposite during *skill acquisition*: it *supplies* the solution to eliminate means–ends search and build procedural schemas under low cognitive load, then *withdraws* it as skill grows. Different learning stage (acquisition of a multi-step procedure vs. maintenance/strengthening of an item), different dependent construct (procedural execution speed/accuracy vs. retention), different theory family (Cognitive Load Theory vs. retrieval-based memory). They are complementary, not redundant — and the fading endpoint (independent problem) naturally hands off into Diamond #1's generative-retrieval loop.

---

## BUILDABILITY SANITY CHECK (4-day sprint, alongside Diamond #1)

**Verdict: BUILDABLE — and it very likely needs NO new Rust change (flagged: mainly front-end + content).** Unlike Diamond #1, which required a new `BuildExamQueue` RPC in `rslib`, the fading trainer maps cleanly onto capabilities Anki already ships:

- **Note types + card templates (front-end):** author each CFA procedure (TVM, bond pricing, multi-stage DDM chosen as the ~3 types) as an ordered sequence of solution steps in fields; use Anki's native **cloze deletion** to blank steps, and custom **HTML/JS/CSS in the card template** to render the worked → completion → independent progression. Backward fading = progressively cloze more trailing steps.
- **Fading progression / gating (light front-end logic, or a companion add-on):** advance a per-procedure "fade level" on correct completion; this can piggyback on ordinary answer-correctness — **no scheduler/engine change**. Expertise-adaptive fading (Pillar 5) = increment fade level as the learner nails steps; degrade on error. This is a UI state machine, not a Rust change.
- **Principle-prompt at the faded step (content):** the Atkinson-2003 recipe (principle-identification prompt at the blanked step) is a template/content addition.
- **Real cost is CONTENT, not code:** authoring *correct* multi-step CFA solutions (finance correctness matters — same discipline as Diamond #1's verified item bank) is the critical path. Reuse the offline-LLM-draft + human-verify pipeline already planned for Diamond #1. Scope to ~3 calculation types for the sprint.

**Flag:** because there's no Rust/`rslib` change, this does NOT compete with Diamond #1 for the scarce/risky Rust engineering budget — it competes for **content-authoring** time. That's the real integration constraint to note for the sprint.

---

## H3 — BLUNT VERDICT

**Does worked-example + fading reach ≥3 INDEPENDENT A/B pillars for improving PROCEDURAL transfer? — YES.**
1. **Worked-example effect** → **Barbieri 2023 meta, GRADE A** (math, g=0.48 [0.36,0.60], to adulthood) + Sweller & Cooper 1985 (B). ✅
2. **Guidance fading → transfer** → **Atkinson, Renkl & Merrill 2003, GRADE B+** (fading+prompt, medium–large on near AND far) + Renkl et al. 2002 (B, replicated near transfer). ✅
3. **Expertise reversal = when to fade** → **Kalyuga et al. 2003 review B+ + Kalyuga et al. 2001 adult trade apprentices (B+/A−, applied)**. ✅
   (Plus supporting: completion-problem effect Paas 1992 / van Merriënboer 1990 = B/B−; self-explanation Bisra 2018 = B+ but conditional.)

Three distinct, independently-evidenced mechanisms, each with A/B support, and it is a *different* mechanism from Diamond #1.

**Independent Diamond #3 candidate: YES.** Blunt honest caveats that must ride with it:
- The A-tier win is for **procedural / near transfer** — which is *exactly* the CFA pain (execute a known multi-step calc fast and correctly under time pressure). **FAR/novel-structure transfer is weaker**: fading alone is near-transfer-only (Renkl 2002); far transfer needs the *targeted* principle-prompt (Atkinson 2003), and generic SE prompts can *backfire* (Barbieri 2023 meta). Do not overclaim far transfer.
- **Adult/professional evidence is thin**: the best applied anchor is vocational trade apprentices (Kalyuga 2001). **No CFA/finance-specific RCT located → UNVERIFIED for the exact domain.** The generalization from math/physics/programming to CFA quant is reasonable but not directly demonstrated.
- The feature **must adapt** (fade with rising skill) or it violates expertise reversal and harms improving learners. This is a build requirement, not optional polish.

**More or less defensible than an ESL language-load feature? — MORE defensible.** The ESL "reduce exam-English extraneous load for non-native candidates" idea rests on CLT's extraneous-load principle (A-tier as *theory*), but the specific applied claim ("stripping language load raises CFA scores for non-native speakers") is largely inferential/UNVERIFIED and addresses a narrower market segment. The worked-example/fading trainer has (a) a **dedicated quantitative meta-analysis (A)**, (b) a **replicated, named instructional procedure** with a concrete recipe, (c) direct hit on the **core** CFA pain for **all** candidates (not just ESL), and (d) an adult/applied anchor. It is the stronger Diamond #3 bet.

**Net recommendation:** promote "worked-example → completion → adaptive-fading procedural trainer for ~3 CFA calc types" to **Diamond #3 candidate (strong)**; scope it as front-end + content (no Rust); market it as **procedural-execution / near-transfer** training, explicitly NOT as far-transfer or a readiness score.

---

## Corpus additions proposed for LEDGER.md evidence pool
| Ref | Finding | Grade | Use |
|-----|---------|-------|-----|
| Barbieri, Miller-Cotto, Clerjuste & Chawla 2023 (meta, 55 studies, 181 ES) | Worked-example effect in math g=0.48 [0.36,0.60]; SE prompts NEGATIVELY moderate | **A** | Headline pillar for procedural acquisition; SE-prompt guardrail |
| Sweller & Cooper 1985 (5 exp, algebra) | Worked examples faster, ~1/5 errors — but only for structurally identical problems | B | Seminal mechanism; near-transfer-only caveat |
| van Merriënboer 1990 (programming, N≈57 HS) | Completion > generation for program construction; not for interpretation | B− | Completion rung of the ladder |
| Paas 1992 (statistics, computer-based) | Worked & completion > conventional for TRANSFER; mediated by cognitive load | B | Quantitative transfer + CLT mediation |
| Renkl, Atkinson, Maier & Staley 2002 (field+lab) | Fading fosters NEAR transfer (replicated); far transfer n.s.; mediated by fewer errors | B | Fading transition; near-transfer-only honesty |
| Atkinson, Renkl & Merrill 2003 (2 exp) | Fading + principle-prompts → medium–large near AND far transfer, no extra time | **B+** | The concrete "worked→faded→independent" recipe |
| Chi, Bassok, Lewis, Reimann & Glaser 1989 (N=8 protocol) | Good solvers self-explain principle-based; poor solvers search-and-copy | C+ | Mechanism only (tiny N, correlational) |
| Kalyuga, Ayres, Chandler & Sweller 2003 (review) | Expertise reversal: novice-helpful guidance harms experts | B+ | Fade must adapt (redundancy) |
| Kalyuga, Chandler, Tuovinen & Sweller 2001 (adult trade apprentices) | Worked examples win for novices; problem-solving wins with expertise | B+/A− | Adult/applied anchor; when-to-fade |
| "Adding self-explanation prompts to worked examples always helps" | CONTRADICTED for math (Barbieri 2023 negative moderator) | — | Guardrail: only targeted principle-prompts at faded step |
| "Fading produces FAR transfer to novel-structure problems" | POORLY supported alone (near-transfer-only; far needs targeted prompts) | — | Do not overclaim; market procedural/near transfer |
| CFA/finance-specific worked-example or fading RCT | Not located | **UNVERIFIED** | Domain generalization is inferred, not demonstrated |
