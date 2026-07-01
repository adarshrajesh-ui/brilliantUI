# Finder 11 — Anki in Medical Education

**Angle:** Empirical studies of Anki specifically in medical education (med students, USMLE, residency) — efficacy, retention outcomes, and observed limitations of its spaced-repetition algorithm in real-world use.

**Bottom line up front:** Anki's algorithm (a modified SM-2 in the period these studies cover) is one of the most widely adopted study tools in medical training. The empirical literature consistently shows a *positive, dose-dependent association* between Anki use and standardized exam scores (especially USMLE Step 1 and specialty in-service exams), but almost all of it is observational/cross-sectional and self-selected — so it demonstrates that *spaced retrieval works*, not that Anki's specific scheduling algorithm is optimal. Real-world weaknesses repeatedly surface: no benefit shown for clinically-reasoning-heavy exams (Step 2 CK), null results in short-duration or low-N cohorts, heavy review burden / "Anki treadmill," and confounding by motivation and total study time.

---

## Sources

### 1. Lu, Farhat & Beck Dallaghan (2021) — the canonical Anki–Step 1 study
- **Title:** Enhanced Learning and Retention of Medical Knowledge Using the Mobile Flash Card Application Anki
- **Authors:** Marvin Lu; Joseph H. Farhat; Gary L. Beck Dallaghan
- **Year:** 2021
- **Venue:** Medical Science Educator, 31(6):1975–1981
- **URL/DOI:** https://pubmed.ncbi.nlm.nih.gov/34956708/ · https://doi.org/10.1007/s40670-021-01386-9
- **Relevance:** Surveyed MS2–MS4 students who had taken Step 1 and found Anki users scored significantly higher than non-users (241.1 ± 13.2 vs. 235.5 ± 17.7; p = 0.012), with the most consistent users reaching ~248.7 (p < 0.001). Users also self-reported better retention and less relearning during dedicated study (χ² = 38.7, p < 0.001), showing the spaced-retrieval schedule "held" knowledge across months. Weakness in practice: purely cross-sectional and self-reported, so the dose-response likely reflects self-selection (more motivated / more study time) rather than proof the algorithm itself caused the gains.

### 2. Deng, Gluckstein & Larsen (2015) — the dose-response "1,700 cards = 1 point" study
- **Title:** Student-directed retrieval practice is a predictor of medical licensing examination performance
- **Authors:** Francis Deng; Jeffrey A. Gluckstein; Douglas P. Larsen
- **Year:** 2015 (erratum 2016)
- **Venue:** Perspectives on Medical Education, 4(6):308–313
- **URL/DOI:** https://pmc.ncbi.nlm.nih.gov/articles/PMC4673073/ · https://doi.org/10.1007/s40037-015-0220-x
- **Relevance:** In a 72-student multivariate model, *unique Anki flashcards seen* independently predicted Step 1 score (B = 5.9 × 10⁻⁴, p = 0.024) — roughly each additional 1,700 unique cards = +1 point — even after controlling for MCAT, grades, and test anxiety. Notably, commercial Firecracker flashcards did *not* predict Step 1, suggesting the benefit tracks with self-directed spaced retrieval volume rather than flashcards per se. Weakness: single institution, small N, observational; cannot separate the scheduling algorithm from sheer retrieval volume or learner motivation.

### 3. Wothe et al. / Satin group (2023) — Step 1 yes, Step 2 no, plus wellness
- **Title:** Academic and Wellness Outcomes Associated with Use of Anki Spaced Repetition Software in Medical School
- **Authors:** Jacob K. Wothe et al. (corresponding: David Satin), University of Minnesota
- **Year:** 2023
- **Venue:** Journal of Medical Education and Curricular Development, vol. 10
- **URL/DOI:** https://doi.org/10.1177/23821205231173289
- **Relevance:** Among 165 students, daily Anki use was associated with higher USMLE Step 1 scores (median 238 vs. 233.5; p = 0.039) and better self-reported sleep quality, but showed **no association with Step 2 CK** scores. This is a key real-world limitation signal: the algorithm's fact-retention strength maps onto fact-dense Step 1 but not the clinical-reasoning-heavy Step 2. The authors explicitly caution daily users may simply study more, and conclude Anki is beneficial but "not crucial."

### 4. Gilbert / Frommeyer et al. (2023) — objective embedded-stats cohort
- **Title:** A Cohort Study Assessing the Impact of Anki as a Spaced Repetition Tool on Academic Performance in Medical School
- **Authors:** Michael M. Gilbert; Timothy C. Frommeyer; Grant V. Brittain; et al.
- **Year:** 2023
- **Venue:** Medical Science Educator, 33:955–962
- **URL/DOI:** https://doi.org/10.1007/s40670-023-01826-8
- **Relevance:** Used Anki's own embedded usage statistics (not just self-report) for ~58% of a first-year class against in-house, NBME, and CBSE exams, finding significantly higher in-house (6.2–7.0%) and CBSE (~12.9%) scores among users. Strengthens the evidence base by tying objective review behavior to objective outcomes during the preclinical phase where the algorithm is most heavily used. Weakness: still observational within one institution and one academic year, with confounding by baseline ability and study time.

### 5. Maye et al. (2026) — systematic review & meta-analysis (strongest aggregate evidence)
- **Title:** The Effectiveness of Spaced Repetition in Medical Education: A Systematic Review and Meta-Analysis
- **Authors:** Maye et al.
- **Year:** 2026 (search conducted Feb 2025)
- **Venue:** The Clinical Teacher (ASME/Wiley), tct.70353
- **URL/DOI:** https://pubmed.ncbi.nlm.nih.gov/41601436/ · https://doi.org/10.1111/tct.70353
- **Relevance:** PRISMA meta-analysis of 13 studies / 21,415 learners found a large, significant pooled effect favoring spaced repetition over standard studying (SMD = 0.78; 95% CI 0.56–0.99; p < 0.0001), spanning Anki, emailed MCQs, and spaced classroom quizzes. This is the highest-quality quantitative confirmation that the *spacing principle underlying Anki's algorithm* improves objective test performance. Weakness it flags: included studies vary widely in design, and there is little evidence on optimal interval design or long-term/clinical-behavior outcomes — i.e., the spacing effect is proven but the specific scheduling parameters are not validated.

### 6. Anki Use and Academic Performance: Systematic Review (2026) — Anki-specific synthesis
- **Title:** Anki Use and Academic Performance in Medical Education: A Systematic Review of Evidence and Learning Theory
- **Authors:** (Med Sci Educ review team, 2026)
- **Year:** 2026
- **Venue:** Medical Science Educator
- **URL/DOI:** https://doi.org/10.1007/s40670-026-02643-5
- **Relevance:** Synthesizes 11 studies on Anki and UME performance, concluding regular use yields modest but consistent, dose-dependent gains (notably Step 1), while evidence for Step 2 CK and course exams is mixed. Crucially names the central methodological weakness: because Anki use was never randomized, the dose-response may reflect *self-selection* (higher baseline ability/motivation/time). It extends the picture across the training continuum (residency in-service, a 26,000-physician spaced-repetition RCT) to argue spaced retrieval has enduring value beyond board prep.

### 7. Kuperstock, Horný & Platt (2019) — residency in-service, with adjusted estimates
- **Title:** Mobile app technology is associated with improved otolaryngology resident in-service performance
- **Authors:** Jacob E. Kuperstock; Michal Horný; Michael P. Platt
- **Year:** 2019
- **Venue:** The Laryngoscope, 129(1):E15–E20
- **URL/DOI:** https://pubmed.ncbi.nlm.nih.gov/30151970/ · https://doi.org/10.1002/lary.27299
- **Relevance:** Tracked 11–12 ENT residents using a spaced-repetition question app for ~6 months; controlling for PGY and prior performance, usage improved overall in-service score by 2.92 pp (95% CI 0.14–5.70) and ~0.008 pp per minute of use, with large gains in allergy/pediatrics subsections. One of the few studies to *adjust for prior performance*, making the association more credible than raw cross-sectional comparisons. Weakness: tiny N and huge usage variance (3 to 1,020 minutes), so estimates are imprecise (level-4 evidence).

### 8. UNLV preclinical CBSE study (2025) — objective "matured cards" metric
- **Title:** Exploring the Impact of Spaced Repetition Through Anki Usage on Preclinical Exam Performance
- **Authors:** (Kirk Kerkorian School of Medicine, UNLV team)
- **Year:** 2025
- **Venue:** (PMC) PMC12357012
- **URL/DOI:** https://pmc.ncbi.nlm.nih.gov/articles/PMC12357012/
- **Relevance:** Used the Stat Scraper add-on to extract objective Anki metrics (matured cards >21-day interval, study hours, unsuspended cards) from 36 students and correlated them with CBSE scores; students with ≥9,390 matured cards scored 71.5 ± 10.7 vs. 60.0 ± 9.7 (p = 0.002). Directly ties the algorithm's *interval-maturation mechanic* (cards surviving to >21-day intervals = durable memory) to a standardized outcome. Weakness: very small, self-selected sample collected post-Step-1-pass/fail change, limiting generalizability.

### 9. Rocky Vista cohort / IJMS (2023) — a NULL result (important counter-evidence)
- **Title:** The Effect of Spaced Repetition Learning Through Anki on Medical Board Exam Performance
- **Authors:** (Rocky Vista University, Class of 2023 cohort)
- **Year:** 2023
- **Venue:** International Journal of Medical Students
- **URL/DOI:** https://ijms.info/IJMS/article/view/1549
- **Relevance:** Retrospective cohort (35 Anki vs. 268 non-Anki) found the Anki group had numerically higher mean Step 1 (223.7 vs. 222.6) and COMLEX Level 1 (569.5 vs. 560.0) and fewer Step 1 failures, but **none of the licensing-exam differences were statistically significant** — and the non-Anki group actually had a higher GPA (p < 0.01). A valuable corrective: when N is modest and confounders aren't controlled, the much-touted Anki advantage can vanish, suggesting reported effects elsewhere may be inflated by selection and publication bias.

### 10. Phillips et al. (2020) — scoping review situating Anki in spacing theory
- **Title:** Conceptualising spaced learning in health professions education: A scoping review
- **Authors:** Phillips et al. (HPE scoping-review team)
- **Year:** 2020
- **Venue:** Medical Education, 54(3)
- **URL/DOI:** https://doi.org/10.1111/medu.14025
- **Relevance:** Maps how "spaced learning" is defined and applied across health-professions education, grounding Anki-style tools in the Ebbinghaus spacing effect — "one of the most robust phenomena in the science of learning." Useful for the swarm because it separates the well-established *principle* (spacing/expanding intervals improve retention) from the under-studied *implementation details* (optimal interval length, algorithm parameters). Its weakness-relevant point: the field lacks consensus on optimal inter-study intervals, which is exactly the gap SM-2's fixed heuristics and FSRS's data-driven scheduling try to fill.

---

## Strength of real-world evidence about Anki's algorithm: **6 / 10**

**Why not higher:** The evidence that *spaced retrieval* improves medical-exam performance is strong and convergent (large meta-analytic SMD = 0.78; multiple positive cohorts; dose-response in Lu and Deng). For Anki *as a tool* in medical education, the evidence is consistent and multi-setting (UME, residency in-service).

**Why not lower / capped at 6:** Almost every Anki-specific study is observational, cross-sectional, single-institution, small-N, and reliant on self-report, with heavy confounding by motivation and total study time. There are explicit null results (Rocky Vista/IJMS; Step 2 CK across studies; Sun et al. psychiatry). Critically, *no study isolates Anki's scheduling algorithm itself* — they measure cards seen or minutes used, so they validate the spacing principle, not SM-2's (or FSRS's) specific interval math. Real-world weaknesses (review-burden "treadmill," no Step 2/clinical-reasoning benefit, self-selection) are well documented but rarely quantified rigorously.

---

## 5-LINE SUMMARY — TOP 3

1. Lu, Farhat & Beck Dallaghan (2021), *Enhanced Learning and Retention…Anki* — https://doi.org/10.1007/s40670-021-01386-9 — Score: 7/10
2. Maye et al. (2026), *Effectiveness of Spaced Repetition in Medical Education: Systematic Review & Meta-Analysis* (21,415 learners, SMD 0.78) — https://doi.org/10.1111/tct.70353 — Score: 8/10
3. Deng, Gluckstein & Larsen (2015), *Student-directed retrieval practice predicts licensing exam performance* (1,700 cards ≈ +1 Step 1 point) — https://doi.org/10.1007/s40037-015-0220-x — Score: 7/10
