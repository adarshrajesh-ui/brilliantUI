# Iter4-A3 — Diamond #3 NOVELTY + MOAT audit (worked-example → completion → adaptive-fading trainer)

> Blunt, evidence-first, prior-art-and-moat audit. Scope: **Diamond #3 ONLY.** The brief flagged suspicion that this one may NOT be novel. It is correct. This dossier separates two claims that the ledger had been blurring: **novel-overall** vs **novel-in-the-CFA-niche.** They resolve very differently.
> The *science* leg (Barbieri 2023 g=0.48 A; Atkinson/Renkl B+; Kalyuga expertise-reversal B+/A−) was already vetted in `evidence-H3-worked-example-fading.md` and is NOT re-litigated here except to confirm it. This audit is about **prior art and defensibility**, which the H3 dossier never tested.

---

## TL;DR VERDICT

- **Novelty (overall):** **ALREADY EXISTS.** "Worked example → completion problem → independent solving, with the scaffolding faded *adaptively* as the learner's accuracy rises, explicitly to respect the expertise-reversal effect" is not just a known idea — it was **built, published, and A/B-tested inside an intelligent tutoring system 15+ years ago** (Salden, Aleven, Schwonke & Renkl 2010, Cognitive Tutor) and it **ships today at national scale** in Carnegie Learning MATHia and in Math Academy. It has a Wikipedia entry ("faded worked examples") and a named place in ITS design toolkits. This is **table-stakes ITS pedagogy**, not a discovery.
- **Novelty (in the CFA niche):** **INCREMENTAL, and eroding.** The *legacy* incumbents (Kaplan Schweser, UWorld/Wiley, AnalystPrep, Mark Meldrum, CFA Institute) are qbank + video + static post-hoc "step-by-step explanations" — they do NOT do adaptive worked-example fading. So it is genuinely new *among the legacy players*. BUT at least two 2024–25 **AI-native CFA entrants (Adaptilyst, exclam.ai)** are already shipping adaptive, step-by-step, mastery-building calculation drills + FSRS. The whitespace is real but shrinking, and it is not protected.
- **Moat:** **WEAK** (reason class: mostly **(a) lecture+qbank culture + (b) content-authoring cost**, NOT (d) "no good reason"). The mechanism is a commodity; the only defensible asset is **CFA-verified step-decomposed content + integration into the honesty/retrieval product**. That is a content/execution moat, not a technique moat, and AI-native competitors are already entering it.
- **Diamond status:** **DOES NOT deserve diamond status as a novel mechanism. Reclassify as a well-evidenced COMMODITY technique** — a strong *feature* and a legitimate procedural on-ramp that feeds Diamond #1, but its value is authoring + integration, not novelty. Keep it in the product; stop calling it a diamond.

---

## Q1 — IS IT ACTUALLY NEW? (blunt: no, not overall)

### 1a. The exact mechanism was built and RCT'd inside an ITS in 2007–2010 — this is the smoking gun
The proposed feature is, almost verbatim, **adaptive fading of worked examples in a tutored problem-solving environment, driven by the learner's demonstrated understanding, motivated by expertise reversal.** That is the literal subject of a published, peer-reviewed program of work by the same Renkl/Kalyuga lineage the ledger already cites as *evidence*:

> "One lab and one classroom experiment were conducted to investigate whether **adaptively fading worked examples** in a tutored problem-solving environment can lead to higher learning gains. Both studies compared a **standard Cognitive Tutor** with two example-enhanced versions, in which the fading of worked examples occurred either in a **fixed** manner or **adaptive to individual students' understanding** … Both experiments provide evidence of improved learning results from **adaptive fading over fixed fading over problem solving.**"
> — Salden, Aleven, Schwonke & Renkl, 2010, *Instructional Science* 38(3), 289–307. https://doi.org/10.1007/s11251-009-9107-8 · ERIC EJ880294 https://eric.ed.gov/?id=EJ880294

> "while computer-based learning environments offer the possibility of **adaptively transitioning from examples to problems while tailoring to an individual learner** … Results indicate that the **adaptive fading** of worked-out examples leads to **higher transfer performance on delayed posttests** than the other two methods."
> — Schwonke/Salden/Aleven/Renkl, "Worked Examples and Tutored Problem Solving: Redundant or Synergistic Forms of Support?", *Topics in Cognitive Science*, 2009. https://doi.org/10.1111/j.1756-8765.2008.01011.x

The tutor tracks per-skill mastery with **Bayesian Knowledge Tracing** and switches a step from "shown worked" to "you solve it" once the learner demonstrates understanding of the underlying principle. That is the proposed Diamond #3 fade-state machine, described in a 2008–2010 paper. **Confidence: VERIFIED** (two independent journal venues + an ICLS 2008 poster: http://www.cs.cmu.edu/~rons/ICLS%202008%20poster%20Salden,%20Aleven,%20Schwonke%20&%20Renkl.pdf).

**Blunt implication:** the *adaptive* qualifier — the one thing that made Diamond #3 feel more sophisticated than "just show worked examples" — is precisely the part that was already invented, published, and shown to beat both plain problem-solving AND fixed fading. The strongest evidence for the adaptive version IS the prior art that kills its novelty.

### 1b. It ships commercially, at national scale, right now

- **Carnegie Learning MATHia** (the commercial descendant of Cognitive Tutor, grades 6–12, used across thousands of US districts): lists **"Worked Examples"** as one of five core instructional tools, opens workspaces with a **"Step-by-Step Example,"** and uses adaptive tech so that **scaffolds/hints decrease as students demonstrate skill mastery.** https://support.carnegielearning.com/help-center/math/home-connection/mathia-support22/key-features-of-the-student-mathia-software/ · https://www.carnegielearning.com/solutions/math/mathia
- **Math Academy** (commercial, K-12→university, marketed to adults/self-learners): states it outright —
  > "we take advantage of the **worked-example effect**, meaning that **every knowledge point starts with a fully worked out example** … After the worked example, students solve problems that are similar … only progressing … after they have demonstrated **mastery**."
  > — https://www.mathacademy.com/how-it-works
  and a third-party teardown confirms the fade:
  > "As students learn the material, **scaffolding is removed**: a review question may call upon knowledge from one or two of many different worked examples, and timed quizzes further test knowledge in a context where it is not possible to 'look at the book.'"
  > — https://frankhecker.com/2025/02/12/math-academy-part-5/

### 1c. It's a named, textbook technique — not an insight

- **"Faded worked examples"** has its own Wikipedia entry and is described exactly as proposed: "the first one or more examples are completely worked out, and the next has all but one step completed … Subsequent examples have fewer and fewer steps worked out," and it is explicitly recommended as the *remedy for expertise reversal.* https://en.wikipedia.org/wiki/Worked-example_effect
- It appears in cognitive-load design toolkits as a standard pattern ("backwards fading," when-to-fade guidance): CAFÉ Toolkit, https://www.cafedev.cognitiveload.com.au/kb/fadedworkedexamples
- **ASSISTments** (a major, free, widely-used ITS) has been the delivery platform for fading studies as recently as 2024–25 (N=114 6th graders, geometry, worked-example / faded / problem-solving arms). https://pmc.ncbi.nlm.nih.gov/articles/PMC12879535/
- **ALEKS** (knowledge-space mastery gating + step-by-step "explain" mode) and **Khan Academy** (per-step hints that assemble into a worked example) implement adjacent forms of the same scaffolding-then-fade pattern.

### Q1 answer
- **Novel overall? NO — ALREADY EXISTS.** The composed mechanism (worked→completion→solo + adaptive fade + expertise-reversal rationale) is a solved, shipped, named ITS technique with a peer-reviewed RCT lineage (Salden/Aleven/Schwonke/Renkl 2010) and two commercial deployments (MATHia, Math Academy). Any pitch that frames the *mechanism* as new is false and will be embarrassing in front of anyone who knows the ITS literature.
- **Novel in the CFA niche? INCREMENTAL / partially.** True among legacy incumbents; already being encroached by AI-native CFA startups (see Q2).

---

## Q2 — IF IT'S SO GOOD, WHY HASN'T A CFA COMPETITOR DONE IT?

### 2a. What the CFA competitors actually do (evidence)
Across the recognized field — **UWorld/Wiley, Kaplan Schweser, AnalystPrep, Mark Meldrum, CFA Institute Learning Ecosystem** — the product is uniformly **video lectures + a large MCQ/vignette question bank + mock exams + performance analytics + FSRS-ish flashcards.** "Step-by-step" appears everywhere, but it means a **static, post-hoc answer explanation shown after you attempt a full question** — NOT a worked-example→completion→solo progression whose scaffolding fades with your rising accuracy. Sources: UWorld QBank comparison table (Kaplan "text-heavy," UWorld "visual + step-by-step" *explanations*, adaptive = "generate quizzes based on performance/weak areas") https://finance.uworld.com/cfa/best-cfa-question-bank/ ; efficientlearning.com course comparison https://www.efficientlearning.com/cfa/best-cfa-prep-courses/.
**So among legacy players, adaptive worked-example fading is genuinely absent.**

### 2b. …but AI-native CFA entrants are already moving into this exact space (the moat leak)
- **Adaptilyst** (practiceworks.io, AI-native CFA prep, 2024–25): "uses AI and adaptive learning to help you master content … **We'll also run through calculations step-by-step with you** … drills follow **Bloom's taxonomy**, helping you **build recall, understanding, and application skills step by step** … **Adaptive AI intelligently sequences questions** … we emphasise smaller drills that **build up mastery from the ground up.**" https://www.practiceworks.io/adaptilyst/ — this is adaptive, step-decomposed, mastery-building calc drilling. It is not branded "faded worked examples," but it occupies the same territory Diamond #3 claims.
- **exclam.ai**: **FSRS** spaced repetition + AI-generated flashcards/quizzes + **click-through tutorial "steps"** on TVM/bond calculators, with an adaptive plan that re-weights on quiz results. https://exclam.ai/cfa/ · https://exclam.ai/cfa/ba-ii-plus-calculator/

**Implication:** the "no CFA competitor has done it" premise is **already only true of the incumbents**, and the barrier is visibly falling in 2025 as AI-native startups arrive.

### 2c. Reason classification (why the incumbents skipped it)
- **(a) Lecture + qbank culture — PRIMARY, real.** The incumbents' entire business, brand, and cost structure is built on star instructors (Olinto, Meldrum, Forjan) + question volume. ITS-style adaptive scaffolding is a different engineering and pedagogy discipline they have no muscle for. This is a genuine cultural/organizational reason, not laziness. **True barrier, but not a barrier that protects *us* — it protects nobody once an AI-native entrant shows up.**
- **(b) Content-authoring cost — PRIMARY, real.** A faded trainer needs each procedure decomposed into *correct, ordered solution steps* with principle-prompts and fade states, human-verified for finance correctness — far more authoring per LOS than writing an MCQ + a paragraph explanation. This is the same content cost the ledger already flags. Real, and it's the one thing that could become a moat *if* the authored bank is large and verified.
- **(c) Business-model — SECONDARY.** Incumbents monetize video + qbank subscriptions; a calc-fluency trainer is a feature, not a SKU, so there's weak incentive to build it standalone.
- **(d) NO GOOD REASON → moat weak — PARTIALLY TRUE and the honest verdict.** There is no *technical* or *IP* reason it hasn't been done; the technique is public and commoditized. The only reasons are cultural + authoring cost (a, b), both of which AI lowers. That is the definition of a **weak moat**: the gap exists because of incumbent inertia and grind, not because the thing is hard to copy or protected.

### Q2 answer
Reason class: **(a) + (b), NOT (d)-as-strength.** The absence among incumbents is explained by lecture/qbank culture and authoring cost — but neither defends the idea, and AI-native CFA startups are already crossing that moat. **Moat = WEAK.** "Novel in CFA" is a claim about *incumbent inertia*, not about a defensible innovation.

---

## Q3 — SAME METRICS (evidence pillars + buildability), re-checked

### Evidence — UNCHANGED and STRONG (this was never the weak spot)
The three A/B pillars from the H3 dossier stand, and the prior-art search actually *adds* evidence for the adaptive variant:
- **Barbieri, Miller-Cotto, Clerjuste & Chawla 2023** — worked-example effect in math, **g=0.48 [0.36, 0.60], GRADE A** (55 studies, to adulthood). https://doi.org/10.1007/s10648-023-09745-1
- **Atkinson, Renkl & Merrill 2003** — fading + principle-prompts → medium–large near AND far transfer, no extra time, **B+.** https://doi.org/10.1037/0022-0663.95.4.774
- **Kalyuga et al. 2003 (review, B+) + Kalyuga et al. 2001 (adult trade apprentices, B+/A−)** — expertise reversal = *when* to fade.
- **NEW / reinforcing:** **Salden, Aleven, Schwonke & Renkl 2010** (lab + classroom) — *adaptive* fading beats fixed fading beats problem-solving on delayed-posttest transfer. This is A−/B evidence that the specific adaptive design works. **The cruel irony: the best evidence FOR the adaptive version is simultaneously the prior art that voids its novelty.**
- Caveats unchanged: A-tier win is **procedural / near transfer** (exactly the CFA calc pain), not far transfer; generic self-explanation prompts backfire (Barbieri 2023 negative moderator) — use targeted principle-prompts only; **no CFA/finance-specific RCT → domain remains UNVERIFIED.**

**≥3 A/B pillars: YES, comfortably.** Evidence is not the problem. Novelty and moat are.

### Buildability — UNCHANGED: no new Rust
Confirmed buildable on native Anki: cloze deletion to blank trailing steps (backward fading) + card-template HTML/JS for the worked→completion→solo render + a light front-end fade-state machine keyed to correctness (increment on success, degrade on error = the adaptive rule). **No `rslib`/scheduler change** → does not compete with Diamond #1 for the Rust budget; competes for **content-authoring** time. Real cost = authoring correct, step-decomposed, human-verified CFA solutions (reuse Diamond #1's offline-draft + verify pipeline). This is consistent with the H3 buildability finding; nothing new to flag.

---

## FINAL CALLS

**NOVELTY VERDICT:** **ALREADY EXISTS (overall); INCREMENTAL & eroding (in-CFA).**
- Novel-overall: **NO.** Built/RCT'd in a Cognitive Tutor (Salden/Aleven/Schwonke/Renkl 2010); ships in MATHia + Math Academy; named "faded worked examples" (Wikipedia, CAFÉ toolkit); delivered via ASSISTments in current studies. Table-stakes ITS pedagogy.
- Novel-in-CFA: **partially** — absent from legacy incumbents (Kaplan/UWorld/AnalystPrep/Meldrum/CFAI), but AI-native entrants (Adaptilyst, exclam.ai) are already building adaptive step-by-step mastery calc drills. The niche whitespace is real but shrinking and unprotected.

**MOAT VERDICT:** **WEAK.** Reason class **(a) lecture+qbank culture + (b) content-authoring cost** — explicitly **NOT (d) "no good reason,"** but also not a defensible barrier: the technique is public/commoditized, there's no IP, and competitors are already entering. The only durable asset is a **large, CFA-verified, step-decomposed content bank tightly integrated with Diamond #1's retrieval/honesty loop** — a content + execution moat, not a mechanism moat.

**DOES THIS STILL DESERVE DIAMOND STATUS, OR IS IT A COMMODITY TECHNIQUE? — COMMODITY TECHNIQUE. Demote.**
- As a *mechanism*, it is a commodity: known, shipped, evidence-backed, and copyable. Calling it a "diamond" (a rare, defensible, novel find) is **wrong** on the two axes a diamond must clear — novelty and moat — even though it clears evidence and buildability.
- It remains a **legitimate, high-quality FEATURE**: the best-evidenced way to build the procedural fluency (fast, accurate multi-step CFA calcs under time pressure) that flashcards don't, and a natural **on-ramp that hands the learner into Diamond #1's generative-retrieval loop.** Keep it. Build it. Just market it honestly as *applied learning science executed well for CFA quant*, not as an invention.
- **Recommended ledger action:** reclassify Diamond #3 from "⭐ DIAMOND (novel, defensible)" to **"COMMODITY-BUT-CORRECT feature / procedural on-ramp to Diamond #1."** If the pipeline's stop-condition requires *three genuinely novel + defensible* diamonds, **#3 no longer qualifies** and the search for a third true diamond should reopen. If the bar is "three evidence-grounded mechanisms that compose into the product," #3 stays — but under an honest label.

### Blunt one-liner
It's real science and it works — but it's someone else's 2010 ITS feature with a CFA skin. Ship it as competent execution, not as a diamond, and never claim the *mechanism* is novel.

---

## Citations (all VERIFIED unless marked)
- Salden, Aleven, Schwonke & Renkl 2010, *Instructional Science* 38(3):289–307 — adaptive fading of worked examples in a Cognitive Tutor > fixed fading > problem-solving. https://doi.org/10.1007/s11251-009-9107-8 · ERIC EJ880294 https://eric.ed.gov/?id=EJ880294
- Schwonke/Salden/Aleven/Renkl 2009, *Topics in Cognitive Science* — "Worked Examples and Tutored Problem Solving: Redundant or Synergistic?" (adaptive fading → higher delayed-posttest transfer). https://doi.org/10.1111/j.1756-8765.2008.01011.x
- Salden, Aleven, Schwonke & Renkl, ICLS 2008 poster (adaptive fading in tutored geometry). http://www.cs.cmu.edu/~rons/ICLS%202008%20poster%20Salden,%20Aleven,%20Schwonke%20&%20Renkl.pdf
- Carnegie Learning MATHia — worked examples + step-by-step example + adaptive scaffold reduction. https://support.carnegielearning.com/help-center/math/home-connection/mathia-support22/key-features-of-the-student-mathia-software/ · https://www.carnegielearning.com/solutions/math/mathia
- Math Academy — "every knowledge point starts with a fully worked out example"; scaffolding removed with mastery. https://www.mathacademy.com/how-it-works · teardown: https://frankhecker.com/2025/02/12/math-academy-part-5/
- Worked-example effect / "faded worked examples" (named technique + expertise-reversal remedy). https://en.wikipedia.org/wiki/Worked-example_effect
- CAFÉ Toolkit — faded worked examples / backward fading design pattern. https://www.cafedev.cognitiveload.com.au/kb/fadedworkedexamples
- ASSISTments fading study (2024–25), 6th-grade geometry, N=114. https://pmc.ncbi.nlm.nih.gov/articles/PMC12879535/
- CFA incumbents (qbank+video, static step-by-step explanations, no adaptive fading): https://finance.uworld.com/cfa/best-cfa-question-bank/ · https://www.efficientlearning.com/cfa/best-cfa-prep-courses/
- AI-native CFA entrants encroaching on the niche: Adaptilyst https://www.practiceworks.io/adaptilyst/ · exclam.ai https://exclam.ai/cfa/
- Evidence pillars (unchanged): Barbieri et al. 2023 https://doi.org/10.1007/s10648-023-09745-1 · Atkinson, Renkl & Merrill 2003 https://doi.org/10.1037/0022-0663.95.4.774 · Kalyuga et al. 2003 https://doi.org/10.1207/s15326985ep3801_4
- **UNVERIFIED:** No CFA/finance-specific worked-example-fading RCT located (domain generalization inferred, not demonstrated).
