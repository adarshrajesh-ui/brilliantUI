# Finder 12 — SRS in Language Learning

**Agent:** Finder 12 of 17 | **Angle:** Spaced repetition systems (SRS) in language/vocabulary learning — empirical efficacy studies of Anki, SuperMemo, Duolingo, Quizlet for vocabulary acquisition & retention, including limitations.

**Scope note:** This angle evaluates the SM-2 / FSRS / half-life-regression scheduling logic *as applied* to real vocabulary learners. The headline finding across the literature: spacing/SRS reliably beats massed practice for long-term retention (moderate-to-large effect sizes), but the *specific* scheduling algorithm matters less than (a) introducing spacing at all and (b) whether learners actually adhere to the schedule. Adherence, motivation, "review debt," and card-quality problems are the dominant real-world weaknesses, not the math.

---

## Sources

### 1. Enhancing L2 learning through a mobile assisted spaced-repetition tool: an effective but bitter pill?
- **Authors:** (Lin / Sun et al.) — published in *Computer Assisted Language Learning (CALL)*
- **Year:** 2019 (online 2018)
- **Venue:** Computer Assisted Language Learning (Taylor & Francis)
- **URL/DOI:** https://doi.org/10.1080/09588221.2018.1552975
- **Relevance (3 sentences):** A semester-long study of 62 university beginning-Spanish learners found a positive, dose-dependent relationship between days studied with Anki and end-of-semester L2 performance, even after controlling for baseline ability, motivation, and self-efficacy. The spaced-repetition scheduling helped by converting study time into durable long-term retention rather than short-term cramming gains. Crucial weakness: students were *reluctant* to use Anki and reported low enjoyment, exposing the central applied limitation that algorithmic optimality is undermined by poor adherence/affect.
- **Relevance rating:** 9/10

### 2. A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression / HLR)
- **Authors:** Burr Settles; Brendan Meeder
- **Year:** 2016
- **Venue:** Proceedings of the Association for Computational Linguistics (ACL), pp. 1848–1858
- **URL/DOI:** https://doi.org/10.18653/v1/P16-1174 (PDF: https://aclanthology.org/P16-1174.pdf)
- **Relevance (3 sentences):** Introduces half-life regression, a trainable SRS that fits an exponential forgetting model `p = 2^(−Δ/h)` to 12M+ Duolingo sessions, reducing recall-prediction error 45%+ over Leitner/Pimsleur and lifting daily engagement 12% in a live experiment. It directly demonstrates *why* the hand-tuned heuristics behind SM-2 (1980s constants) are improvable: learned, data-driven half-lives schedule reviews better than fixed multipliers. Weakness noted by the authors and follow-ups: lexeme-tag features overfit difficult words and suffered cold-start problems, so the richer model had to be simplified for production — a caution that more complex scheduling does not automatically transfer.
- **Relevance rating:** 10/10

### 3. Effects of Expanding and Equal Spacing on Second Language Vocabulary Learning
- **Authors:** Tatsuya Nakata
- **Year:** 2015
- **Venue:** Studies in Second Language Acquisition (SSLA) 37(4), 677–711
- **URL/DOI:** https://doi.org/10.1017/S0272263114000825
- **Relevance (3 sentences):** 128 Japanese college students studied 20 English–Japanese word pairs under manipulated spacing *type* (expanding vs. equal) and *amount* (massed/short/medium/long), the first L2 study to find a statistically significant advantage for expanding spacing. The benefit of expanding intervals (the core assumption behind SM-2/FSRS-style growing intervals) was real but *small*, whereas simply introducing any spacing produced large effect sizes. Weakness for algorithm design: it suggests Anki's elaborate expanding-interval scheduling captures only marginal gains over much simpler equal spacing, questioning the payoff of scheduler complexity.
- **Relevance rating:** 9/10

### 4. A Meta-analysis Examining Technology-assisted L2 Vocabulary Learning
- **Authors:** (Lee, Warschauer & Lee / and colleagues)
- **Year:** 2022 (online 2021)
- **Venue:** ReCALL (Cambridge University Press)
- **URL/DOI:** https://doi.org/10.1017/S0958344021000239
- **Relevance (3 sentences):** Aggregating 34 studies (2,511 participants, 49 effect sizes), technology-assisted L2 vocabulary learning yielded a moderate overall effect (d = 0.64), with mobile-assisted (d = 0.85) outperforming computer-assisted (d = 0.46) delivery. Spacing/SRS-equipped tools helped most when target and first language were close and for college (vs. K-12) learners, indicating scheduling gains interact with learner and linguistic factors. Weakness: significant heterogeneity and the finding that *incidental* beat *intentional* instruction imply SRS flashcard drilling is not uniformly optimal across contexts.
- **Relevance rating:** 8/10

### 5. A Meta-analysis on Mobile-assisted Vocabulary Learning: Do Mobile Applications Help?
- **Authors:** (Bayesian meta-analysis team) — published in ReCALL
- **Year:** 2025
- **Venue:** ReCALL (Cambridge University Press)
- **URL/DOI:** https://doi.org/10.1017/S0958344025100335
- **Relevance (3 sentences):** A Bayesian synthesis of 65 (quasi-)experimental studies (2010–2024) found a large effect (≈1.28) for mobile vocabulary apps when treatment lasted 10+ weeks, with a sustained advantage in *delayed* retention versus conventional methods. This supports the SRS premise that repeated, spaced mobile exposure consolidates vocabulary into long-term memory over time. Weakness: the large effect was conditional on long treatment duration and only a few moderators were significant, implying short-term or low-adherence use yields much weaker, less reliable benefits.
- **Relevance rating:** 8/10

### 6. The Influence of Practice Distribution (1-day vs 7-day Spacing) on L2 Vocabulary Learning with Quizlet
- **Authors:** Muqaibal; Kasprowicz; Tissot
- **Year:** 2022 (University of Reading / CALL)
- **Venue:** Computer Assisted Language Learning (author final version, CentAUR repository)
- **URL/DOI:** https://centaur.reading.ac.uk/109724/1/Muqaibal_Kasprowicz_Tissot_AuthorFinal%20version.pdf
- **Relevance (3 sentences):** A high-ecological-validity classroom study of 96 low-proficiency Omani learners compared 1-day vs 7-day spacing of Quizlet practice against a test-only control on 34 target nouns. Both spaced groups significantly beat the control, but the 1-day and 7-day schedules performed *equally*, so the spacing *interval* did not mediate success. Weakness for adaptive schedulers: this null result for interval length suggests the precise inter-session gap (the variable FSRS/SM-2 optimize) may not matter much, and Quizlet's task-design features may drive gains more than the schedule.
- **Relevance rating:** 8/10

### 7. Effectiveness of Spaced Repetition Techniques for Vocabulary Acquisition for English Language Learners in the Maritime Industry
- **Authors:** (ESP/maritime English research team)
- **Year:** 2023
- **Venue:** (Maritime English / applied linguistics journal)
- **URL/DOI:** https://doi.org/10.54389/goja3394
- **Relevance (3 sentences):** A mixed-method pre/post/delayed-post design with 20 adult ESL maritime learners compared an Anki SRS group against a rote-memorization group. Rote learners matched or beat Anki on *immediate* exact-definition recall, but at the one-month delayed test the Anki group retained far more and showed deeper conceptual understanding, demonstrating spacing's transfer of words into long-term memory. Weakness: very small convenience sample limits generalizability, and rote's immediate-recall parity warns that SRS's advantage only emerges over delay, not for imminent tests.
- **Relevance rating:** 7/10

### 8. Recent Developments in Mobile-assisted Vocabulary Learning: A Mini Review of Studies Focusing on Digital Flashcards
- **Authors:** (MAVL review authors)
- **Year:** 2024
- **Venue:** Frontiers in Education
- **URL/DOI:** https://doi.org/10.3389/feduc.2024.1496578
- **Relevance (3 sentences):** This synthesis of recent EFL studies argues digital flashcards (with spaced repetition + gamification) promote learner autonomy, engagement, and long-term retention beyond paper flashcards and word lists. It frames the scheduling algorithm as one of several reinforcing features (alongside multimedia and gamification) that drive MAVL gains. Weakness explicitly flagged: a research gap on *productive* vocabulary use and true long-term retention, since most evidence concerns receptive recognition under short treatments.
- **Relevance rating:** 7/10

### 9. Investigating the Impact of Mobile-assisted Language Learning on Vocabulary Retention among Saudi EFL High School Students
- **Authors:** (Saudi EFL MALL research team)
- **Year:** 2024
- **Venue:** (peer-reviewed MALL journal)
- **URL/DOI:** https://doi.org/10.52710/cfs.323
- **Relevance (3 sentences):** A post-test-only randomized design with 120 students found the mobile vocabulary-app (spaced-repetition) group outscored a conventional-teaching control on both immediate and delayed post-tests, with a ~38% pre-to-post gain. The spaced-repetition scheduling is credited with revisiting terms at intervals that counter the forgetting curve, plus higher reported motivation. Weakness: post-test-only design (no pre-test equivalence check on the outcome) and self-reported motivation limit causal strength about the scheduler specifically.
- **Relevance rating:** 6/10

### 10. Spaced Repetition and Virtual Flashcards: MALL for English Vocabulary and Grammar (Anki, ESP)
- **Authors:** (ESP software-engineering EFL study)
- **Year:** 2025
- **Venue:** Pakistan Journal of Life and Social Sciences (PJLSS)
- **URL/DOI:** https://doi.org/10.57239/pjlss-2025-23.2.00188
- **Relevance (3 sentences):** A 6-week quasi-experiment (n=40) had an Anki group study daily vs a note-based control, with the Anki group gaining significantly more on low-frequency academic vocabulary, grammar accuracy, and immediate retention. Daily spaced reviews are credited with prioritizing rarely-seen specialist terms that conventional note-taking under-rehearses. Weakness explicitly admitted: *no delayed retention test* was administered, so the study measures only end-of-treatment retention — the weakest test of an SRS whose whole value is durability.
- **Relevance rating:** 6/10

---

## Cross-cutting weaknesses for the algorithm (applied-learning lens)
- **Adherence > optimality:** Source 1's "bitter pill" result and the well-known "review debt"/"Anki jail" phenomenon show the scheduler's theoretical efficiency is routinely defeated by learners abandoning the app. An algorithm that maximizes retention-per-review but maximizes drop-out is a net loss.
- **Interval precision is often marginal:** Sources 3 and 6 find expanding vs equal (and 1-day vs 7-day) spacing differences are small or null — questioning how much SM-2/FSRS's interval-tuning actually buys over naive spacing in real classrooms.
- **Receptive bias & card quality:** Sources 8 (and the broader literature) note most gains are for receptive recognition of isolated word-pairs; SRS does little for productive use, collocation, or context, and rewards "easy" recognition cards.
- **Delay-dependence:** Sources 7, 5, and 10 show SRS's advantage appears only at delayed testing and long treatment durations; for imminent exams, rote/massed practice can match it, and short studies (like #10, no delayed test) can't even detect the benefit.

---

## Return — Top 3 Summary
1. A Trainable Spaced Repetition Model for Language Learning (Settles & Meeder, 2016) — https://doi.org/10.18653/v1/P16-1174 — Score 10/10
2. Enhancing L2 learning through a mobile assisted spaced-repetition tool: an effective but bitter pill? — https://doi.org/10.1080/09588221.2018.1552975 — Score 9/10
3. Effects of Expanding and Equal Spacing on L2 Vocabulary Learning (Nakata, 2015) — https://doi.org/10.1017/S0272263114000825 — Score 9/10
