# Finder 14 — Leitner & Scheduling Lineage

**Agent:** Finder 14 of 17 | **Angle:** The historical & algorithmic lineage of flashcard scheduling — the Leitner system, expanding retrieval scheduling, and early algorithmic SRS that preceded/inspired SM-2 and Anki.

**Scope:** This document traces the intellectual ancestry of Anki's scheduler. Anki implements a modified SM-2 (Wozniak, 1987) and, since 2021, optionally FSRS. SM-2 did not appear from nowhere: it sits at the end of a ~100-year chain — Ebbinghaus's forgetting curve (1885) → the spacing/distributed-practice effect → Pimsleur's "graduated interval recall" (1967) → Leitner's physical box system (1972) → Landauer & Bjork's expanding-retrieval evidence (1978) → Wozniak's computerized optimal-interval algorithms (1985–1994). Later work (Cepeda 2006 meta-analysis; Pavlik & Anderson 2005 ACT-R model; Karpicke & Roediger 2007 critique) both validates and complicates the "expanding interval" assumption baked into SM-2/Leitner, which is why FSRS exists.

---

## Sources

### 1. Ebbinghaus, H. — *Memory: A Contribution to Experimental Psychology* (Über das Gedächtnis)
- **Authors:** Hermann Ebbinghaus (trans. Ruger & Bussenius, 1913)
- **Year:** 1885 (English translation 1913)
- **Venue:** Monograph, Leipzig: Duncker & Humblot; English ed. Teachers College, Columbia University
- **URL/DOI:** https://psycnet.apa.org/fulltext/2004-16275-000-FRM.pdf | Classics introduction: https://www.yorku.ca/pclassic/Ebbinghaus/wozniak.htm
- **Relevance (mechanism / SM-2 link / weakness):** Using nonsense syllables and the "savings method," Ebbinghaus established the *forgetting curve* (retention decays sharply then levels off) and the *distributed-practice effect* (spacing repetitions beats massing them). This is the root assumption every later scheduler encodes: review just before forgetting. The work is the empirical bedrock SM-2 optimizes against — but its weakness is that it is a single-subject self-experiment on meaningless material, so the exact curve shape and parameters don't transfer cleanly to real flashcards, a gap SM-2's fixed formula inherits.
- **Relevance score:** 7/10

### 2. Pimsleur, P. — "A Memory Schedule"
- **Authors:** Paul Pimsleur (Ohio State University)
- **Year:** 1967
- **Venue:** *The Modern Language Journal*, Vol. 51, No. 2, pp. 73–75
- **URL/DOI:** https://doi.org/10.1111/j.1540-4781.1967.tb06700.x | ERIC: https://eric.ed.gov/?id=ED012150 | PDF: https://files.eric.ed.gov/fulltext/ED012150.pdf
- **Relevance (mechanism / SM-2 link / weakness):** Pimsleur proposed "graduated interval recall," an explicitly *exponential* review schedule (e.g., intervals multiplying by ~5: 5s, 25s, 2min, 10min, … days, months, years) designed to re-expose an item just as recall probability drops toward ~60%. This is arguably the first published *algorithmic* (formula-driven) spacing schedule and a direct conceptual predecessor of SM-2's geometric interval growth `I(n)=I(n-1)·EF`. Its weakness is that the schedule is fixed and item-agnostic — every item follows the same curve regardless of difficulty or the learner's actual performance, exactly the rigidity SM-2 later softened with the per-item E-Factor.
- **Relevance score:** 9/10

### 3. Leitner, S. — *So lernt man lernen: Der Weg zum Erfolg* (How to Learn to Learn)
- **Authors:** Sebastian Leitner
- **Year:** 1972 (Herder Verlag, Freiburg; ISBN 3-451-05060-9)
- **Venue:** Popular non-fiction book; system documented in English at the Leitner-system encyclopedia entry
- **URL/DOI:** https://en.wikipedia.org/wiki/Leitner_system | Author: https://en.wikipedia.org/wiki/Sebastian_Leitner
- **Relevance (mechanism / SM-2 link / weakness):** Leitner formalized spaced repetition as a *physical box algorithm*: cards live in numbered compartments; a correct answer promotes a card to a less-frequently-reviewed box, an incorrect answer demotes it to Box 1, so review effort concentrates on weak items. This box-promotion logic is the direct conceptual ancestor of SM-2/Anki — Anki's "learning steps" and graduated/ease behavior are a continuous-valued generalization of discrete Leitner boxes. Its weaknesses are coarse, discrete intervals (originally governed by physical partition sizes 1/2/5/8/14 cm rather than a memory model), no per-item difficulty estimate, and binary correct/incorrect grading — limitations SM-2 addressed with the 0–5 quality grade and E-Factor.
- **Relevance score:** 10/10

### 4. Landauer, T. K., & Bjork, R. A. — "Optimum Rehearsal Patterns and Name Learning"
- **Authors:** Thomas K. Landauer, Robert A. Bjork
- **Year:** 1978
- **Venue:** In Gruneberg, Morris & Sykes (Eds.), *Practical Aspects of Memory*, pp. 625–632. London: Academic Press
- **URL/DOI:** Scanned original: https://gwern.net/doc/psychology/spaced-repetition/1978-landauer.pdf | Citation: https://link.springer.com/article/10.3758/s13423-014-0636-z
- **Relevance (mechanism / SM-2 link / weakness):** This is the canonical experimental demonstration that an *expanding* retrieval schedule (immediate first test, then successively longer gaps) beats uniform spacing for test-type practice, with a single presentation + four expanding tests outperforming five massed presentations. It provided the cognitive-science justification for the increasing intervals that Pimsleur, Leitner, and SM-2 all use. Its weakness — later exposed by Karpicke & Roediger (#9) — is that the "expanding is optimal" finding was short-retention-interval and lab-bound; over longer intervals equal spacing can match or beat it, undermining a core SM-2/Leitner assumption.
- **Relevance score:** 9/10

### 5. Woźniak, P. — "SuperMemo 2: Algorithm" (Algorithm SM-2)
- **Authors:** Piotr A. Woźniak
- **Year:** 1987 (program); algorithm description published 1990 / archived online
- **Venue:** SuperMemo / super-memory.org technical documentation
- **URL/DOI:** https://www.super-memory.org/archive/english/ol/sm2.htm | Blog: https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method
- **Relevance (mechanism / SM-2 link / weakness):** The primary-source specification of the exact algorithm Anki adopted: per-item E-Factor updated by a 0–5 self-graded quality `EF' = EF + (0.1 − (5−q)(0.08 + (5−q)0.02))` (floored at 1.3), intervals `I(1)=1, I(2)=6, I(n)=I(n−1)·EF`, and a full reset on lapse (q<3). This is the bridge document — it shows precisely how Leitner-style promotion plus Pimsleur-style geometric growth were merged into a computable per-item rule. Its acknowledged weaknesses (constructed by trial-and-error, no true forgetting-curve fit, harsh lapse reset, hand-tuned constants) are exactly the deficiencies FSRS was built to fix.
- **Relevance score:** 10/10

### 6. Woźniak, P. A., & Gorzelańczyk, E. J. — "Optimization of Repetition Spacing in the Practice of Learning"
- **Authors:** Piotr A. Woźniak, Edward J. Gorzelańczyk
- **Year:** 1994
- **Venue:** *Acta Neurobiologiae Experimentalis*, 54(1), 59–62 (PMID: 8023714)
- **URL/DOI:** https://doi.org/10.55782/ane-1994-1003 | Journal: https://ane.pl/index.php/ane/article/view/1003 | Europe PMC: https://europepmc.org/article/med/8023714
- **Relevance (mechanism / SM-2 link / weakness):** The first *peer-reviewed* spaced-repetition algorithm publication; it formalizes the Optimal Factor (OF) matrix indexed by easiness factor and repetition number, optimized to hold knowledge retention at ~95%. It is the scientific maturation of SM-2 (toward SM-5/SM-6) and demonstrates the move from a static EF formula to a *data-driven, adaptive* interval table — the same direction FSRS later took with machine learning. Its weakness is the strong paired-associate, single-target-retention (95%) framing and reliance on self-reported grades, which limits generality and remains a quality-of-input problem in all SM-2 descendants including Anki.
- **Relevance score:** 8/10

### 7. Pavlik, P. I., Jr., & Anderson, J. R. — "Practice and Forgetting Effects on Vocabulary Memory: An Activation-Based Model of the Spacing Effect"
- **Authors:** Philip I. Pavlik Jr., John R. Anderson (Carnegie Mellon)
- **Year:** 2005
- **Venue:** *Cognitive Science*, 29(4), 559–586
- **URL/DOI:** https://doi.org/10.1207/s15516709cog0000_14 | PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/409s15516709cog0000_14.pdf
- **Relevance (mechanism / SM-2 link / weakness):** Embeds the spacing effect in the ACT-R declarative-memory architecture: each practice lays a trace that decays as a power function of time, and crucially the *decay rate depends on the item's activation at the moment of practice* — explaining why widely spaced practice produces more durable memory. This is the principled, mechanistic memory model SM-2 lacks, and its descendants (Pavlik & Anderson 2008's optimal-schedule algorithm; later half-life regression and FSRS's DSR model) are what eventually displaced SM-2's hand-tuned heuristics. Its "weakness" relative to the lineage is that it predicts *contracting* (not expanding) optimal spacing under some parameters, directly challenging the expanding-interval orthodoxy SM-2 inherited from Leitner/Landauer-Bjork.
- **Relevance score:** 8/10

### 8. Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. — "Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis"
- **Authors:** Nicholas J. Cepeda, Harold Pashler, Edward Vul, John T. Wixted, Doug Rohrer
- **Year:** 2006
- **Venue:** *Psychological Bulletin*, 132(3), 354–380
- **URL/DOI:** https://doi.org/10.1037/0033-2909.132.3.354 | PDF: https://www.yorku.ca/ncepeda/publications/CPVWR2006.pdf
- **Relevance (mechanism / SM-2 link / weakness):** A meta-analysis of 839 assessments across 317 experiments establishing that the spacing/lag benefit is real and large, and that the *optimal inter-study interval scales with the desired retention interval* (the optimal gap grows the longer you want to remember). This quantifies the relationship SM-2 only approximates with its fixed multiplier and gives FSRS its empirical target (interval as a function of desired retention). Its caution for the lineage: it shows no single fixed schedule (Pimsleur/Leitner/SM-2 style) can be optimal across retention goals, since the best gap depends on how long you need to retain — a fundamental limit of SM-2's one-size interval growth.
- **Relevance score:** 8/10

### 9. Karpicke, J. D., & Roediger, H. L., III — "Expanding Retrieval Practice Promotes Short-Term Retention, but Equally Spaced Retrieval Enhances Long-Term Retention"
- **Authors:** Jeffrey D. Karpicke, Henry L. Roediger III
- **Year:** 2007
- **Venue:** *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 33(4), 704–719
- **URL/DOI:** https://learninglab.psych.purdue.edu/downloads/2007/2007_Karpicke_Roediger_JEPLMC.pdf
- **Relevance (mechanism / SM-2 link / weakness):** Directly tests the Landauer & Bjork (1978) expanding-retrieval claim and finds that expanding schedules help short-term (10-min) retention but *equal spacing wins at 2 days*; what matters most is delaying the first test to make initial retrieval difficult ("desirable difficulty"). This is the key *weakness paper* for the whole lineage: it shows the expanding-interval principle baked into Leitner boxes and SM-2 is not universally optimal, and that retrieval difficulty/timing of the first test matters more than the expanding pattern itself. It motivates adaptive, retrievability-targeting schedulers (FSRS) over fixed-multiplier expansion.
- **Relevance score:** 8/10

---

## Lineage summary (how it feeds SM-2 / Anki)

```
Ebbinghaus 1885 (forgetting curve, spacing effect)
        │
        ├─ Pimsleur 1967 (graduated interval recall: first exponential formula)
        ├─ Leitner 1972 (physical box promotion/demotion algorithm)
        ├─ Landauer & Bjork 1978 (evidence: expanding retrieval is optimal)
        │
        ▼
Wozniak SM-0 (1985, paper) → SM-2 (1987, computerized; E-Factor + geometric intervals)  ← ADOPTED BY ANKI
        │
        ├─ Wozniak & Gorzelanczyk 1994 (peer-reviewed OF matrix, adaptive intervals → SM-5/6/17)
        │
        ▼
Modern critiques / models that expose SM-2 weaknesses and motivate FSRS:
        ├─ Pavlik & Anderson 2005 (ACT-R activation model; mechanistic, sometimes contracting spacing)
        ├─ Cepeda et al. 2006 (optimal gap depends on target retention interval)
        └─ Karpicke & Roediger 2007 (equal spacing > expanding for long-term; first-test difficulty matters)
```

**Key weaknesses of the inherited lineage that Anki/SM-2 carry forward:** (1) fixed multiplicative interval growth assumes one expansion pattern fits all items and all retention goals (contradicted by Cepeda 2006); (2) the "expanding is best" axiom from Landauer & Bjork is only short-term true (Karpicke & Roediger 2007); (3) SM-2 has no real forgetting-curve/memory model and uses hand-tuned constants and a harsh full-reset-on-lapse (Wozniak 1987), whereas principled models (Pavlik & Anderson 2005; later DSR/FSRS) fit memory dynamics from data; (4) all of these depend on noisy self-graded recall as input.
