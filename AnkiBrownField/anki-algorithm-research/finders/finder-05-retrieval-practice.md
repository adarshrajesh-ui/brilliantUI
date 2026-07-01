# Finder 05 — Retrieval Practice

**Swarm angle:** The testing effect / retrieval practice — why *active recall* (the engine of every flashcard) physically strengthens memory, and how that benefit compounds with *spacing*. This is the "WHY Anki works" half of the story; the spacing/SM-2/FSRS scheduling literature is the "WHEN" half that sister finders cover.

**Why this matters for Anki/SM-2/FSRS:** Anki is fundamentally a *retrieval* machine. Every card forces you to generate an answer from memory *before* flipping it — that act of effortful, successful recall is what the testing-effect literature shows to be a learning event, not merely an assessment. SM-2 and FSRS only schedule *when* the retrieval happens; the retrieval itself is the causal mechanism. The sources below establish (a) that testing beats restudy for durable retention, (b) the size/robustness of the effect, (c) the mechanisms (effortful retrieval, "desirable difficulty," consolidation), and (d) the key interaction: retrieval is most powerful when *spaced and effortful but still successful* — which is precisely the regime a good scheduler tries to keep cards in (the ~80–90% target retention idea). Weaknesses for flashcard design are noted per source.

---

## Sources

### 1. Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention
- **Authors:** Henry L. Roediger III; Jeffrey D. Karpicke
- **Year:** 2006
- **Venue:** *Psychological Science*, 17(3), 249–255
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.2006.01693.x
- **Relevance (what / why-how / weakness):** *What:* The foundational modern demonstration of the testing effect with educationally realistic prose — students who repeatedly tested recalled ~61% after a week vs ~40% for repeated rereading. *Why-how:* Crucially, repeated *studying* won at a 5-minute delay but lost badly at 2-day and 1-week delays, proving the test produces *durable* learning, not just short-term fluency — exactly the long-delay regime Anki operates in, and why "rereading feels better but recall sticks better." *Weakness re scheduling:* It also shows the metacognitive trap baked into flashcard use — restudy *raised confidence* while lowering retention, so learners (and naive schedulers) can be fooled by short-term performance; the study used free recall of passages, not Q→A cards, so transfer to atomized flashcards is by extension.
- **Relevance score (WHY Anki works): 10/10**

### 2. The Critical Importance of Retrieval for Learning
- **Authors:** Jeffrey D. Karpicke; Henry L. Roediger III
- **Year:** 2008
- **Venue:** *Science*, 319(5865), 966–968
- **URL/DOI:** https://doi.org/10.1126/science.1152408
- **Relevance (what / why-how / weakness):** *What:* Foreign-language vocab pairs (the canonical flashcard task) learned to one correct recall, then items were either repeatedly studied or repeatedly tested; repeated testing produced large gains (up to >150% better one-week retention) while repeated study after the first success did essentially *nothing*. *Why-how:* This directly justifies Anki's core design decision — once you can recall a card, *re-reading it is wasted effort; re-testing it is the whole point* — i.e., retrieval, not re-exposure, is the active ingredient the scheduler should keep delivering. *Weakness re scheduling:* Students' predictions of their own performance were uncorrelated with reality, showing humans cannot self-schedule reliably — motivating algorithmic scheduling, but also implying users may resist or "leech-mismanage" hard cards because the effort feels unproductive.
- **Relevance score (WHY Anki works): 10/10**

### 3. Rethinking the Use of Tests: A Meta-Analysis of Practice Testing
- **Authors:** Olusola O. Adesope; Dominic A. Trevisan; Narayankripa Sundararajan
- **Year:** 2017
- **Venue:** *Review of Educational Research*, 87(3), 659–701
- **URL/DOI:** https://doi.org/10.3102/0034654316689306
- **Relevance (what / why-how / weakness):** *What:* Large meta-analysis (118 articles, 272 effect sizes, ~15,427 participants) finding practice testing beats restudy (g ≈ 0.51) and beats filler/no-activity controls (g ≈ 0.93). *Why-how:* Establishes the *generality and robustness* of the testing effect across formats and populations — the empirical warrant that Anki's recall-based method isn't a niche lab curiosity, and notably found *production* formats (recall/short-answer, like Anki cards) and *feedback* (Anki's answer flip) moderate the effect upward. *Weakness re scheduling:* Effects are moderated by format and retention interval, so a poorly designed card (recognition-style, ambiguous cue) captures far less benefit — card *quality* gates the algorithm's payoff, something neither SM-2 nor FSRS can fix.
- **Relevance score (WHY Anki works): 9/10**

### 4. The Critical Role of Retrieval Practice in Long-Term Retention
- **Authors:** Henry L. Roediger III; Andrew C. Butler
- **Year:** 2011
- **Venue:** *Trends in Cognitive Sciences*, 15(1), 20–27
- **URL/DOI:** https://doi.org/10.1016/j.tics.2010.09.003
- **Relevance (what / why-how / weakness):** *What:* Authoritative review synthesizing the conditions under which retrieval practice works best and the mechanisms behind it. *Why-how:* Names the two levers Anki actually pulls — retrieval works even *without* feedback but feedback enhances it (Anki always shows the answer), and retrieval promotes *transferable, flexibly retrievable* knowledge, addressing the "Anki only teaches rote facts" critique. *Weakness re scheduling:* Emphasizes that benefits depend on retrieval *succeeding* — failed retrievals without feedback can entrench errors, and the review's transfer claims are stronger for richly encoded material than for isolated cue-target pairs, a real limit for minimalist flashcards.
- **Relevance score (WHY Anki works): 9/10**

### 5. Retrieval Practice Produces More Learning than Elaborative Studying with Concept Mapping
- **Authors:** Jeffrey D. Karpicke; Janell R. Blunt
- **Year:** 2011
- **Venue:** *Science*, 331(6018), 772–775
- **URL/DOI:** https://doi.org/10.1126/science.1199327
- **Relevance (what / why-how / weakness):** *What:* Retrieval practice beat elaborative concept mapping (a "deep," active study technique) on *both* verbatim and inference questions, even when the final test was itself concept-map creation. *Why-how:* Refutes the strongest objection to flashcards — that recall is shallow — by showing the *act of retrieval itself* drives meaningful, inference-supporting learning more than elaborative encoding, supporting Anki's bet on recall over re-organizing notes. *Weakness re scheduling:* The retrieval condition here used a single delayed free-recall episode rather than spaced multi-trial scheduling, and results are for coherent science texts; how much inference-level benefit survives when content is shredded into thousands of tiny independent cards is untested.
- **Relevance score (WHY Anki works): 8/10**

### 6. The Effect of Testing Versus Restudy on Retention: A Meta-Analytic Review of the Testing Effect
- **Authors:** Christopher A. Rowland
- **Year:** 2014
- **Venue:** *Psychological Bulletin*, 140(6), 1432–1463
- **URL/DOI:** https://doi.org/10.1037/a0037559
- **Relevance (what / why-how / weakness):** *What:* Meta-analysis (61 studies) confirming testing > restudy and probing *why*. *Why-how:* Finds the strongest mechanistic support for *effortful processing* — recall tests beat recognition tests, and harder-but-successful retrieval yields bigger gains; this is the theoretical bridge to spacing, because spacing is what *creates* retrieval difficulty in Anki. *Weakness re scheduling:* Support for the popular "semantic elaboration" account was weak (Rowland points to episodic/context mechanisms and the bifurcation model), meaning the field still lacks a unified theory — so FSRS's success is empirical curve-fitting, not derived from a settled mechanism of *why* a given interval is optimal.
- **Relevance score (WHY Anki works): 8/10**

### 7. Testing the Retrieval Effort Hypothesis: Does Greater Difficulty Correctly Recalling Information Lead to Higher Levels of Memory?
- **Authors:** Mary A. Pyc; Katherine A. Rawson
- **Year:** 2009
- **Venue:** *Journal of Memory and Language*, 60(4), 437–447
- **URL/DOI:** https://doi.org/10.1016/j.jml.2009.01.004 — (full text: https://www.sciencedirect.com/science/article/abs/pii/S0749596X09000138)
- **Relevance (what / why-how / weakness):** *What:* Directly tests the *retrieval effort hypothesis* — that difficult-but-successful retrievals beat easy ones — by varying inter-stimulus interval and recall criterion. *Why-how:* This is the single best mechanistic justification for *why spacing amplifies retrieval*: longer intervals make each recall harder, and harder successful recalls produced better final memory — i.e., Anki's expanding intervals aren't just convenient, the difficulty *is* the benefit (the rationale behind FSRS targeting a sub-100% retention rate rather than reviewing too early). *Weakness re scheduling:* The benefit holds only for *successful* retrievals — push the interval too far and recall fails, capturing little; defining the sweet spot of "hard but still recallable" is exactly the unsolved optimization SM-2 approximates crudely and FSRS approximates better.
- **Relevance score (WHY Anki works): 9/10**

### 8. Spaced Retrieval: Absolute Spacing Enhances Learning Regardless of Relative Spacing
- **Authors:** Jeffrey D. Karpicke; Althea Bauernschmidt
- **Year:** 2011
- **Venue:** *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 37(5), 1250–1257
- **URL/DOI:** https://doi.org/10.1037/a0023436
- **Relevance (what / why-how / weakness):** *What:* Crosses retrieval practice with spacing schedules — massed vs spaced, and expanding vs equal vs contracting intervals. *Why-how:* The clearest evidence on the retrieval×spacing interaction Anki depends on: long *absolute* spacing of repeated retrievals gave a ~200% retention gain over massed retrieval, so the combination — not retrieval alone — is what produces Anki-scale results. *Weakness re scheduling:* Strikingly, the *relative* schedule (expanding vs equal vs contracting) made *no* difference, despite expanding schedules being the intuitive basis of SM-2's growing intervals — implying Anki's signature expanding-interval design may be over-engineered, and that simply spacing reviews far apart matters more than the exact growth curve.
- **Relevance score (WHY Anki works): 9/10**

### 9. Making Things Hard on Yourself, But in a Good Way: Creating Desirable Difficulties to Enhance Learning
- **Authors:** Elizabeth L. Bjork; Robert A. Bjork
- **Year:** 2011
- **Venue:** Chapter in *Psychology and the Real World* (M. A. Gernsbacher et al., Eds.), FABBS / Worth Publishers, pp. 56–64
- **URL/DOI:** https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/11/Making-Things-Hard-on-Yourself-but-in-a-Good-Way-20111.pdf
- **Relevance (what / why-how / weakness):** *What:* The framing chapter that unifies testing, spacing, interleaving, and variation as "desirable difficulties," built on the *storage strength vs retrieval strength* distinction. *Why-how:* Provides the overarching theory for Anki: letting retrieval strength *drop* before reviewing (spacing) makes the subsequent successful recall boost *storage strength* more — so the forgetting Anki deliberately allows is a feature, and the "test, don't reread" rule is one named desirable difficulty among several. *Weakness re scheduling:* The framework stresses difficulties are only *desirable* if the learner can still succeed — too-long intervals or too-hard cards flip into *undesirable* difficulties, exposing the core scheduling risk SM-2/FSRS must manage and the reason "ease hell" / leech cards are genuine failure modes, not user error.
- **Relevance score (WHY Anki works): 8/10**

---

## Cross-cutting synthesis (for the swarm)

1. **Retrieval is the cause; scheduling is the delivery.** (#1, #2, #4) Active recall — not re-exposure — is the learning event. Anki's value lives in the moment you try to answer before flipping; SM-2/FSRS just decide when that moment recurs.
2. **The effect is large and robust.** (#3, #6) Meta-analytic g ≈ 0.5 vs restudy, ≈ 0.9 vs nothing, strongest for *recall/production with feedback* — i.e., the exact Anki card format.
3. **Effort is the mechanism, spacing is the amplifier.** (#6, #7, #8, #9) Harder-but-successful retrievals help more; spacing manufactures that difficulty; the retrieval×spacing combination (not either alone) drives the biggest gains. This is the theoretical heart of FSRS targeting an optimal (sub-100%) retention probability.
4. **Open weaknesses Anki inherits:** no settled mechanistic theory (#6); *relative* interval shape may not matter, questioning SM-2's expanding-interval dogma (#8); benefits require *successful* retrieval, so mis-scheduling or bad cards convert desirable into undesirable difficulty (#7, #9); and lab evidence is strongest for coherent material, leaving transfer/inference from atomized cards partly extrapolated (#4, #5).
