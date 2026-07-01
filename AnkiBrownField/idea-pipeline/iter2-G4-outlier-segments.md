# Iteration 2 · G4 — Outlier Idea Scrape: Underserved CFA Segments

**Mandate:** find OUTLIER feature ideas tied to a SPECIFIC underserved CFA user base with a big, sharp draw. Do NOT repeat Iteration-1 mainstream (vignette SRS, transfer scoring, honest readiness, error-buckets, deadline scheduling).

**Method:** scraped r/CFA discussion, 300Hours forum + guides, AnalystForum threads, prep-provider blogs (Schweser/AnalystPrep/UWorld/FinQuiz), and practitioner posts. Each idea graded for (a) one-liner, (b) segment + pain, (c) level, (d) source, (e) blunt differentiation + whether a real learning-science mechanism plausibly grounds it (so it survives later evidence vetting).

**BLUF — sharpest, most defensible opportunity:** the **Ethics contrastive minimal-pair deck** (Segment 5). It is the one outlier whose core mechanism sits on the *strongest* evidence we already hold (Rohrer 2015 interleaving of confusable categories, d=0.79 — the exact case where interleaving works instead of backfiring), is buildable as card construction with **no risky LLM grading**, and is decision-relevant to pass/fail at *all three levels* via the ethics adjustment. Runner-up sharpest draw: the **Level III command-word rubric drill** (biggest emotional pull, but capped by the LLM-grading build trap already flagged as ledger #9).

---

## Segment 1 — RETAKERS / resitters

**Segment psychology (scraped):** a failer already holds a *real diagnostic* — the CFA score report with banded topic scores (>70% / 50–70% / <50%) and an overall band (1–10). Band 10 = "closest to passing," which every source frames as a motivator but is also a specific heartbreak. The universal expert advice is "attack weak bands," but Schweser explicitly warns retakers **not to ignore strong areas or they will atrophy** — and the inter-attempt gap is 3–12 months, i.e. a full forgetting cycle on the topics they *already passed*.

### 1A. Score-report import → asymmetric "re-fail radar" (decay guard on formerly-strong topics)
- **(a) Idea:** Ingest the candidate's prior CFA topic-band breakdown; drill weak bands *and* run a decay-aware maintenance queue on the topics they previously scored >70%, so they don't re-fail on knowledge that atrophied during the gap.
- **(b) Segment + pain:** Retakers over-focus on weak bands and let strong topics rot over a 6–12 month gap — the silent re-fail vector nobody schedules for.
- **(c) Level:** All (I/II/III); most valuable at I/II where topic count is high.
- **(d) Source:** Schweser "Designing a Strategy to Retake" (https://www.schweser.com/cfa/blog/how-to-pass-the-cfa-exam/designing-a-strategy-to-retake-the-cfa-exam) — "Be very careful that you do not ignore your stronger areas entirely." AnalystPrep retake guide (https://analystprep.com/blog/cfa-retake-strategy/). 300Hours retake thread (https://300hours.com/f/cfa/general/t/re-take-advice/).
- **(e) Differentiation + mechanism:** No incumbent uses the *actual prior score report* as a diagnostic seed — this directly solves FSRS cold-start (spec F5) with real per-topic priors instead of a fresh diagnostic. Grounds in **A/A− evidence**: forgetting curve + spacing scaled to a deadline (Cepeda 2006/2008) — formerly-strong topics predictably decay across the inter-attempt interval and need a maintenance ridgeline. **Defensible.** This is the strongest retaker idea because the mechanism (decay of unrehearsed strong topics) is real and the diagnostic input is free and unique to this segment.

### 1B. Band-anchored confidence ledger (anti-demoralization readiness)
- **(a) Idea:** A calibrated, retaker-framed readiness tracker that shows objective proof the gap from last band is closing (e.g., "you were band 10; your weak-band accuracy is now +18pp").
- **(b) Segment + pain:** Band-10 heartbreak + fear of a repeat failure drives anxiety/avoidance; retakers lack objective evidence they've actually improved.
- **(c) Level:** All.
- **(d) Source:** Zell "Overcome CFA Exam Anxiety" (https://www.zelleducation.com/blog/how-to-overcome-cfa-exam-anxiety/) — anxiety hits repeat sitters too; 300Hours retake thread (self-efficacy language, "I refuse to fail again").
- **(e) Differentiation + mechanism:** Grounds in self-efficacy / test-anxiety literature (softer, B−/C tier) and calibration. **Blunt verdict: this mostly dresses up the mainstream "honest readiness" thesis** with retaker framing. Keep as UX skin, not a headline.

---

## Segment 2 — WORKING PROFESSIONALS, 5–15 min gaps

**Segment pain (scraped):** the real behavior is studying "cooking, gym, laundry, restroom," "if I get 5 mins I do one question," commute bursts. Two hard constraints the market ignores: (1) **no-calculator contexts** (standing on a train, no BA II Plus) make quant cards unusable exactly when the micro-window exists; (2) fixed queues drop you into a 12-min item set with 4 min left.

### 2A. No-calculator conceptual twin of every quant card
- **(a) Idea:** Auto-generate a paired "setup + interpretation" version of each quantitative card (name the formula, identify the driver, predict direction/sign, read the result) that is thumbable without a calculator.
- **(b) Segment + pain:** Quant is the biggest topic weight but is dead weight in the 5–15 min no-calculator windows professionals actually have.
- **(c) Level:** I/II (quant-heavy).
- **(d) Source:** Adaptilyst "CFA L1 While Working Full Time" (https://www.practiceworks.io/adaptilyst/research/cfa-level-1-while-working-full-time/) — micro-sessions "cooking, gym, laundry, restroom," "5 mins → one question"; UWorld 90-day plan (mobile 10–15 Qs commuting).
- **(e) Differentiation + mechanism:** Incumbents serve the *same* QBank on mobile; nobody splits quant into a calculator-free conceptual layer. Directly reuses spec F2 `content_type` tagging. Grounds in **B+ evidence**: self-explanation (Bisra g=0.55) + worked-example/setup–execution separability — arithmetic is separable from the reasoning the exam actually rewards. **Defensible and buildable.** Strongest working-pro idea.

### 2B. Eyes-free audio active-recall (spoken retrieval, not passive lecture)
- **(a) Idea:** Spoken prompt → candidate answers aloud → audio reveal; a hands-free *generative retrieval* loop for commutes.
- **(b) Segment + pain:** The entire audio market for commuters is passive lectures/podcasts (re-encoding), which feels productive but doesn't build recall.
- **(c) Level:** All (best for definitional/ethics).
- **(d) Source:** AnalystPrep 300-hours tips + joystakes commute routine (https://joystakes.com/cfa-study-routine/) — "audio lectures/podcasts on the commute" is the default advice.
- **(e) Differentiation + mechanism:** Sharp contrast to the market's passive audio. Grounds in **A−** generative-retrieval-beats-restudy (Adesope g=0.61; Karpicke & Blunt). **Defensible mechanism**, but capped by TTS/ASR build cost and self-grading reliability hands-free.

### 2C. Elastic session packer (never strands you mid-vignette)
- **(a) Idea:** Scheduler packs an atomic, *completable* unit into the window you declare (3 min → 3 resolving cards), never opening a 12-min item set with 4 min left.
- **(b) Segment + pain:** Fixed queues waste fragmented windows and create abandon-anxiety.
- **(c) Level:** All.
- **(d) Source:** UWorld 90-day plan; Adaptilyst micro-session section (both above).
- **(e) Differentiation + mechanism:** Real UX pain, but the headline is scheduling/UX, not a learning-science mechanism. **Blunt: incremental; a queue-shaping tweak, not an outlier.**

---

## Segment 3 — LEVEL III ESSAY-PANIC (the AM/constructed-response failure mode)

**Segment pain (scraped):** candidates who cleared two MCQ levels *freeze* on constructed response. The dominant failure is **time + format**, not knowledge: "completed only 2/3 of morning questions in 3 hours… failed last year for the same reason." Passers converge on a counterintuitive motor pattern — **answer in ≤2 lines, hit the bolded command word, move on**, because "writing too much is a guaranteed way to fail." Grading is a **published rubric with 2–6 discrete points per part; partial credit for correct method even with wrong numbers; only the first-N responses are graded.**

### 3A. Command-word rubric drill (constrained-format retrieval + self-scored rubric points)
- **(a) Idea:** Essay micro-drills that force an answer to the *bolded command word* within a strict line/word budget, then self-score against the published-rubric bullet checklist ("did you state the recommendation? did you tie one vignette fact? stop at N reasons").
- **(b) Segment + pain:** MCQ-trained candidates have no *trained format*; they freeze, over-write, mismatch the command word, and leave questions blank.
- **(c) Level:** III (constructed response).
- **(d) Source:** 300Hours L3 essay guide + 17-command-word table (https://300hours.com/cfa-level-3-essay-constructed-response/); "Frustrated after first practice test" thread (https://300hours.com/f/cfa/level-3/t/frustrated-after-first-practice-test/); TestPrepNation scoring rubric (https://testprepnation.com/blog/cfa-level-iii/cfa-level-3-scoring-rubric-minimum-passing-score); Iyengar practitioner post ("one line, 6–7 words").
- **(e) Differentiation + mechanism:** Incumbents ship MCQ QBanks; essay prep is just *reading* guideline answers (passive). This is the purest instance of **response congruency — retrieval in the exact output format — which is Pan & Rickard's (A-tier) #1 required moderator for transfer.** It also converts choking into an overlearned procedure (test-anxiety/choking literature). **Biggest emotional draw of any segment.** Capped by: rubric matching = the LLM-grading build trap (ledger #9); mitigate by **self-scoring against published rubric bullets** rather than free-text LLM grading (deterministic, buildable).

### 3B. Pacing metronome / panic-reset reflex trainer
- **(a) Idea:** Timed drills that train the "mark your move-on time, aim for 70% of allotted, guess-and-advance" reflex with a visible clock.
- **(b) Segment + pain:** Panic spiral + poor pacing is the named #1 reason for L3 failure.
- **(c) Level:** III.
- **(d) Source:** 300Hours essay guide ("1 min = 1 point," "aim for 70% of allotted"); FinQuiz exam-day reset routine (https://www.finquiz.com/blog/10-ways-to-relax-on-cfa-exam-day/).
- **(e) Differentiation + mechanism:** Grounds weakly in choking-under-pressure/desensitization. **Blunt: a timer feature, incremental** — bundle into 3A, not standalone.

---

## Segment 4 — NON-NATIVE ENGLISH speakers (huge in Asia)

**Segment pain (scraped):** the exam is English-only; efinancialcareers argues this is the "elephant in the room" behind low pass rates as candidate volume shifts to Asia. Item sets are multi-paragraph with ~12 min each; slow readers "can't read fast and grab all necessary info." The pain is **language parsing consuming working memory that should go to finance reasoning** — a distinct bottleneck from not knowing the content.

### 4A. Exam-English layer (train the language load as its own skill)
- **(a) Idea:** A separately-trainable micro-deck of high-frequency *exam English*: the 17 command words, distractor trigger phrases ("always/never/failed to"), and finance idioms/collocations — plus glossable dense vignettes — so language stops stealing working memory from reasoning.
- **(b) Segment + pain:** ESL candidates lose points to *parsing*, not finance; no incumbent treats exam-English as a trainable skill separate from content.
- **(c) Level:** All; acute at II (dense vignettes) and III (essays).
- **(d) Source:** efinancialcareers "real reason the pass rate is so low" (https://www.efinancialcareers.com.au/news/2019/09/the-real-reason-the-cfa-pass-rate-is-so-low); UWorld "Best CFA Prep for International Candidates" (https://finance.uworld.com/blog/cfa/best-cfa-prep-for-international-students/) — "curriculum and language barriers for ESL"; AnalystForum slow-reader item-set thread (https://300hours.com/f/cfa/general/t/right-way-to-practice-and-approach-item-set-questions-in-exams/).
- **(e) Differentiation + mechanism:** The one **genuinely orthogonal wedge** here — grounds in **cognitive load theory**: lexical automaticity frees working memory for reasoning. Bonus irony: vocabulary SRS is exactly what FSRS is empirically *best* at (spec §1 concedes the engine is language-biased) — so this segment turns the engine's documented weakness into a strength. **Defensible + big underserved market.** Second-sharpest opportunity after Ethics.

### 4B. Reading-speed / language-vs-reasoning bottleneck diagnostic
- **(a) Idea:** Time vignette reading vs answering separately and flag when *reading* (not reasoning) is the constraint, prescribing skim-the-question-first drills.
- **(b) Segment + pain:** Slow readers can't tell whether they're losing to language or content.
- **(c) Level:** II.
- **(d) Source:** UWorld L2 item-set strategy (https://finance.uworld.com/blog/cfa/best-strategies-to-solve-cfa-level-2-item-set-questions/); AnalystForum slow-reader thread (above).
- **(e) Differentiation + mechanism:** Diagnostic is novel but the intervention (skim question first) is generic test technique. **Blunt: interesting diagnostic, thin mechanism** — fold into 4A.

---

## Segment 5 — ETHICS plateau (judgment, not memorization)

**Segment pain (scraped):** candidates re-read the Code and *don't improve* because ethics tests applied judgment on gray-area fact patterns, not recall. Sources are blunt: "stop asking 'what would I do' and start asking 'which Standard is at play and what does it require'"; passing = "recognize which Standard is at play before you finish reading the vignette," within ~45–90 sec. The traps are **confusable Standards** (III(C) Suitability vs II(A) MNPI vs V(A) Diligence) and **one decisive fact** flipping conform↔violate. The **ethics adjustment** can decide pass/fail on the margin.

### 5A. Ethics contrastive minimal-pair deck (near-miss discrimination) — SHARPEST
- **(a) Idea:** Serve *minimal-pair* vignettes where a single decisive fact flips conform↔violate (or flips which Standard applies), interleaving confusable Standards so the candidate trains the discrimination — not one isolated scenario at a time.
- **(b) Segment + pain:** The plateau is a discrimination problem (confusable Standards, decisive-fact detection); re-reading and isolated scenarios don't build it.
- **(c) Level:** All I/II/III (ethics + the ethics adjustment appears at every level).
- **(d) Source:** TestPrepInsight ethics guide (https://testprepinsight.com/resources/cfa-level-1-ethics/) — "recognize which Standard is at play before you finish reading"; Analyst Mastery "Guidance for Standards I–VII in Scenarios" (https://analystmastery.com/cfa-level-1/ethical-and-professional-standards/guidance-for-standards-i-vii-in-scenarios/) — "recognize recurring fact patterns," decisive-fact + primary-standard framework; UWorld ethics strategy (https://finance.uworld.com/blog/cfa/best-practices-to-master-cfa-level-1-ethics/).
- **(e) Differentiation + mechanism:** Incumbents serve isolated scenario→Standard; **nobody builds contrastive minimal pairs.** Grounds in the pipeline's **strongest interleaving evidence — Rohrer, Dedrick & Stershic 2015 (A−, delayed-test d=0.79), whose effect is specifically about discriminating *confusable categories*.** Critically, this is the case where the ledger's interleaving *guardrail* (Brunmair: interleaving backfires on rote vocab) does **not** apply — ethics is category discrimination, the textbook win condition for interleaving. **No LLM grading needed** (answers are conform/violate + which Standard = deterministic MCQ). **Sharpest + most defensible: A-tier mechanism, buildable, pass/fail-relevant at every level, universal frustration.**

### 5B. Decision-framework forcing function
- **(a) Idea:** Before reveal, force the actor → harmed party → decisive fact → primary Standard steps.
- **(b) Segment + pain:** Candidates jump to the answer on gut feel and pick attractive distractors.
- **(c) Level:** All.
- **(d) Source:** Analyst Mastery decision-framework table (above); TestPrepInsight ("gut consistently picks wrong").
- **(e) Differentiation + mechanism:** Grounds in self-explanation (Bisra g=0.55, B+). Solid but more workflow than outlier; **strong complement to 5A, not a standalone headline.**

---

## Sharpest-opportunity ranking (blunt)

1. **Ethics contrastive minimal-pairs (5A)** — A− mechanism (interleaving-for-discrimination, the one place it works), buildable with no LLM-grading risk, pass/fail-relevant at all three levels via the ethics adjustment. **The defensible diamond candidate from this scrape.**
2. **Level III command-word rubric drill (3A)** — biggest emotional draw and pure response-congruency (A-tier transfer moderator), but capped by the rubric-grading build trap; de-risk via self-scored published-rubric checklists.
3. **Exam-English layer (4A)** — only genuinely orthogonal wedge (cognitive load, not transfer), large underserved Asian market, and it plays *to* FSRS's language strength.
4. **Retaker score-report seed / re-fail radar (1A)** — free unique diagnostic input + real decay mechanism, but strategically a seeding wrapper on mainstream.
5. **No-calculator quant twin (2A)** — nice buildable content-layer win, moderate draw.

---

## 3-LINE HONEST NOTE — does any niche beat "transfer + honest readiness," or dress it up?

1. Segments 1–2 (retakers, working-pros) mostly **dress up** the mainstream thesis — they're delivery/seeding skins over transfer + honest readiness, not new mechanisms.
2. Segments 3 and 5 don't *beat* the thesis so much as **sharpen and instantiate its already-identified diamond** ("build the conditions for transfer"): the L3 rubric drill is response-congruency made concrete, and Ethics minimal-pairs is interleaving-for-discrimination — both target the two spots (the AM essay, the ethics adjustment) where CFA's own structure makes the payoff outsized, on evidence we already hold.
3. Only Segment 4 (exam-English) is a **genuinely orthogonal wedge** — cognitive-load, not transfer — and it uniquely converts FSRS's documented language bias from a liability into an asset, making it the one niche that adds a new axis rather than refining the existing one.
