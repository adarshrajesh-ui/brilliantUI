# Finder 03 — Forgetting Curve Foundations

**Agent:** Finder 03 of 17 (research swarm)
**Angle:** The forgetting-curve foundations — Ebbinghaus's original work and the modern replications / quantifications of memory decay that explain *why* spaced-repetition scheduling (Anki's SM-2 / FSRS) works at all.
**Collective goal:** Find papers explaining EXACTLY what Anki's algorithm does, WHY/HOW, and its WEAKNESSES.

## Why this angle matters for Anki

Anki's schedulers (SM-2 and FSRS) are, at heart, attempts to *predict the forgetting curve* for each individual card and then schedule the next review at the moment recall probability drops to a target retention threshold. Every assumption baked into those algorithms — that memory decays as a smooth, negatively-accelerated function of time; that each successful review flattens (lengthens) the curve; that an optimal review gap exists; that retrievability can be modeled with one or two parameters — descends directly from the empirical forgetting-curve literature below. The weaknesses of Anki's algorithms are largely the weaknesses of these underlying models (wrong functional form, averaging artifacts, ignoring item-level variance, asymptotic "permastore" effects, etc.).

---

## Sources

### 1. Memory: A Contribution to Experimental Psychology
- **Authors:** Hermann Ebbinghaus (trans. Henry A. Ruger & Clara E. Bussenius)
- **Year:** 1885 (German, *Über das Gedächtnis*) / 1913 (English translation, Teachers College, Columbia University)
- **Venue:** Monograph; English edition Teachers College, Columbia University (Dover reprint 1964)
- **URL:** https://archive.org/details/memorycontributi00ebbiuoft (full text) · Online Books Page: https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp16360
- **Relevance:** *What* — This is the founding experiment: Ebbinghaus learned and relearned lists of nonsense syllables on himself and used the "method of savings" (time saved on relearning) to quantify retention over delays from 20 min to 31 days, producing the original forgetting curve. *Why/how it relates to scheduling* — He was the first to fit an equation to forgetting data and to demonstrate that repeated relearning ("repetitions") slows the decay, the empirical seed of every spaced-repetition algorithm including Anki's notion that each review lengthens the next interval. *Weakness* — N=1 (himself), artificial nonsense-syllable material, and he fit two different functions (power in 1880, logarithmic in 1885) while explicitly downplaying the equation's theoretical meaning, so the *form* of the curve Anki must model was left unresolved from the start.
- **Relevance score (theoretical basis of Anki's algorithm): 9/10**

### 2. Replication and Analysis of Ebbinghaus' Forgetting Curve
- **Authors:** Jaap M. J. Murre & Joeri Dros
- **Year:** 2015
- **Venue:** PLOS ONE, 10(7): e0120644
- **URL/DOI:** https://doi.org/10.1371/journal.pone.0120644 · PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC4492928/ (data: osf.io/6kfrp)
- **Relevance:** *What* — A careful modern replication (one subject, 70 hours of learning/relearning, intervals 20 min → 31 days) confirming Ebbinghaus's savings curve in a non-German language for the first time. *Why/how it relates to scheduling* — It validates that the forgetting curve is a real, reproducible phenomenon and compares candidate equations (power, logarithmic, exponential, and a new model), directly informing which decay function a scheduler should assume. *Weakness* — It finds the curve is *not* perfectly smooth (an upward "jump" beginning at the 24-hour point, plausibly a sleep/consolidation effect), which schedulers like SM-2 ignore by assuming clean monotonic decay; it is also still effectively N=1.
- **Relevance score: 10/10**

### 3. One Hundred Years of Forgetting: A Quantitative Description of Retention
- **Authors:** David C. Rubin & Amy E. Wenzel
- **Year:** 1996
- **Venue:** Psychological Review, 103(4), 734–760
- **URL/DOI:** https://doi.org/10.1037/0033-295X.103.4.734 · PDF: https://cenl.ucsd.edu/Jclub/Rubin_Wenzel_1996.pdf
- **Relevance:** *What* — A meta-analysis fitting 210 published retention data sets against 105 two-parameter mathematical functions to find which best describes forgetting. *Why/how it relates to scheduling* — It establishes that only four functions (logarithmic, power, exponential-in-√t, hyperbola-in-√t) reliably fit human forgetting, constraining the math any retention-prediction engine (SM-2's heuristics, FSRS's power-function memory model) should use. *Weakness* — The data could not distinguish among the four best functions, meaning the exact decay law underlying Anki's interval math is empirically underdetermined; autobiographical memory was a notable exception that fits none of them.
- **Relevance score: 9/10**

### 4. On the Form of Forgetting
- **Authors:** John T. Wixted & Ebbe B. Ebbesen
- **Year:** 1991
- **Venue:** Psychological Science, 2(6), 409–415
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.1991.tb00175.x
- **Relevance:** *What* — Across three experiments (word recall, face recognition, pigeon delayed-matching) the authors show forgetting is best fit by a simple power function of time, beating exponential, hyperbolic, logarithmic, and linear alternatives, and they re-derive a power fit even for Ebbinghaus's savings data. *Why/how it relates to scheduling* — The power-law claim is the explicit modeling backbone of modern schedulers (FSRS uses a power forgetting curve for retrievability), justifying why intervals can expand multiplicatively. *Weakness* — The power-law result was derived from data *averaged across subjects/items*, which (see #8/#9) can manufacture a spurious power law even when individuals forget exponentially — a foundational caveat for any algorithm that schedules a single card from population-derived curves.
- **Relevance score: 9/10**

### 5. The Form of the Forgetting Curve and the Fate of Memories
- **Authors:** Lee Averell & Andrew Heathcote
- **Year:** 2011
- **Venue:** Journal of Mathematical Psychology, 55(1), 25–35
- **URL/DOI:** https://doi.org/10.1016/j.jmp.2010.08.009 · PDF: https://www.ampl-psych.com/wp-content/uploads/2021/05/Averell-and-Heathcote-2011-The-form-of-the-forgetting-curve-and-the-fate-of-m.pdf
- **Relevance:** *What* — Using a longitudinal design (1 min → 28 days), hierarchical models to avoid averaging artifacts, and Bayesian model selection, they separate the "function" question (power vs. exponential vs. Pareto) from the "fate" question (does retention decay to zero?). *Why/how it relates to scheduling* — They find strong evidence for an **above-chance asymptote** — some memories become effectively permanent after brief study — which is exactly the long-term "stability"/permastore behavior a good scheduler should exploit by pushing intervals toward effectively infinite. *Weakness* — Individual data actually fit *exponential* best while model selection favored power, exposing that the curve form Anki relies on is sensitive to analysis method and individual variation, not a settled constant.
- **Relevance score: 8/10**

### 6. Spacing Effects in Learning: A Temporal Ridgeline of Optimal Retention
- **Authors:** Nicholas J. Cepeda, Edward Vul, Doug Rohrer, John T. Wixted & Harold Pashler
- **Year:** 2008
- **Venue:** Psychological Science, 19(11), 1095–1102
- **URL/DOI:** https://doi.org/10.1111/j.1467-9280.2008.02209.x · PDF: https://www.yorku.ca/ncepeda/publications/CVRWP2008.pdf
- **Relevance:** *What* — Over 1,350 participants learned facts, reviewed after a gap of up to 3.5 months, and were tested after delays up to 1 year, mapping how the inter-study gap interacts with the retention interval. *Why/how it relates to scheduling* — It demonstrates an *optimal* review gap for any target retention horizon (≈20–40% of delay for short horizons, dropping to ≈5–10% for a 1-year horizon) — the empirical justification for expanding-interval schedules and for FSRS's idea of scheduling at a chosen desired-retention level. *Weakness* — It shows the optimal gap is **not** a fixed multiplier of the previous interval (SM-2's core assumption), since the optimal gap-to-delay ratio shrinks as the horizon grows, implying SM-2's constant ease-factor expansion is systematically suboptimal.
- **Relevance score: 8/10**

### 7. Semantic Memory Content in Permastore: Fifty Years of Memory for Spanish Learned in School
- **Authors:** Harry P. Bahrick
- **Year:** 1984
- **Venue:** Journal of Experimental Psychology: General, 113(1), 1–29
- **URL/DOI:** https://doi.org/10.1037/0096-3445.113.1.1 · PubMed: https://pubmed.ncbi.nlm.nih.gov/6242406/
- **Relevance:** *What* — Tested retention of school Spanish in 733 people over 50 years, finding an exponential decline for the first 3–6 years followed by a long, stable "permastore" plateau lasting up to 30 years, largely independent of rehearsal. *Why/how it relates to scheduling* — It is the empirical basis for the idea that sufficiently well-learned/over-learned items reach near-permanent stability — the long-tail behavior schedulers aim to reach so reviews can stop, and a real-world counterpart to FSRS's high-stability states. *Weakness* — The discontinuous "permastore" transition (no items with 6–25-year lifespans) is not captured by the smooth single-curve models Anki uses, suggesting algorithms may misestimate very-long intervals where memory either vanishes early or becomes permanent.
- **Relevance score: 7/10**

### 8. Power Laws from Individual Differences in Learning and Forgetting: Mathematical Analyses
- **Authors:** Jaap M. J. Murre & Antonio G. Chessa
- **Year:** 2011
- **Venue:** Psychonomic Bulletin & Review, 18(3), 592–597
- **URL/DOI:** https://doi.org/10.3758/s13423-011-0076-y
- **Relevance:** *What* — A mathematical proof that averaging *exponential* individual forgetting curves over a population whose decay rates follow a gamma/uniform/half-normal distribution produces an aggregate curve that looks like a *power* function. *Why/how it relates to scheduling* — It directly challenges the "memory decays as a power law" premise that schedulers inherit from averaged data (#3, #4): the population-level curve a scheduler is tuned on may not describe any individual card's true (exponential) decay. *Weakness* — Implication for Anki: a one-size-fits-all curve fit to aggregate data can systematically mis-time reviews for individual users/cards — the motivation for FSRS's per-card parameterization and for skepticism toward population-derived constants.
- **Relevance score: 8/10**

### 9. How Averaging Individual Curves Transforms Their Shape: Mathematical Analyses with Application to Learning and Forgetting Curves
- **Authors:** Jaap M. J. Murre & Antonio G. Chessa
- **Year:** 2023
- **Venue:** Journal of Mathematical Psychology, 116, 102816
- **URL/DOI:** https://doi.org/10.1016/j.jmp.2023.102816
- **Relevance:** *What* — Extends the 2011 result, proving more generally how averaging transforms curve shape (exponential→power, power→log-power, log→log) and discussing remedies, while revisiting Ebbinghaus's own 1880/1885 differential-equation derivation of the forgetting law. *Why/how it relates to scheduling* — It clarifies *which* functional form a scheduler should fit at the individual vs. group level — essential for correctly estimating per-card retrievability/stability rather than fitting an artifact. *Weakness* — Reinforces that the canonical forgetting-curve shape used to justify interval growth is partly a statistical artifact of aggregation, so naive curve-fitting (as in SM-2's fixed heuristics) rests on shaky theoretical ground.
- **Relevance score: 8/10**

---

## Synthesis for the swarm

The forgetting curve is the *raison d'être* of spaced repetition: memory decays in a negatively-accelerated way over time (Ebbinghaus 1885; replicated by Murre & Dros 2015), and well-timed reviews reset/flatten that decay (Cepeda et al. 2008). Anki's SM-2 encodes this crudely with a fixed ease-factor multiplier; FSRS encodes it more faithfully with an explicit power forgetting curve and per-card stability/retrievability. The strongest *theoretical critiques* of Anki's foundations also come from this literature: (a) the true functional form (power vs. exponential vs. log) is empirically underdetermined (Rubin & Wenzel 1996; Averell & Heathcote 2011); (b) the population "power law" may be an averaging artifact masking individual exponential decay (Murre & Chessa 2011, 2023), undermining one-size-fits-all schedules; (c) optimal gaps are not a constant multiplier of the prior interval (Cepeda et al. 2008), so SM-2's constant expansion is suboptimal; and (d) real memory has discontinuous permastore plateaus (Bahrick 1984) that smooth single-curve models miss.

---

## RETURN — Top 3 (title | URL | score)

1. Murre & Dros 2015, Replication and Analysis of Ebbinghaus' Forgetting Curve | https://doi.org/10.1371/journal.pone.0120644 | 10/10
2. Rubin & Wenzel 1996, One Hundred Years of Forgetting | https://doi.org/10.1037/0033-295X.103.4.734 | 9/10
3. Ebbinghaus 1885/1913, Memory: A Contribution to Experimental Psychology | https://archive.org/details/memorycontributi00ebbiuoft | 9/10
