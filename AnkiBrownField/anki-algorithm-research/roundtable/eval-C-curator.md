# Evaluator C — The Curator

**Judging lens:** Variety & narrative coverage. The winning set of 5 must, *together*, tell the complete story of Anki's algorithm across five distinct facets — (1) exact mechanics, (2) the psychological/theoretical WHY, (3) documented weaknesses, (4) the modern data-driven alternative / state of the art, (5) real-world applied evidence. I reward sources that *uniquely* fill a facet and penalize redundancy. A second excellent paper on a facet already covered is worth less to me than a merely-good paper that opens a facet no one else fills.

**Facet legend:**
- **F1** — Exact algorithm mechanics (SM-2 / what Anki actually runs)
- **F2** — Theoretical/psychological WHY (spacing effect, retrieval practice, forgetting curve)
- **F3** — Documented weaknesses / critiques
- **F4** — Modern data-driven alternative / state of the art (FSRS & its lineage)
- **F5** — Real-world applied evidence (medicine / language)

---

## RANKED BALLOT — TOP 8

> Note: ranks 1–5 are deliberately *one per facet* — they ARE my proposed balanced final-5. Ranks 6–8 are the strongest alternates/backups in case the moderator wants a peer-reviewed swap or a second angle on a facet.

### Rank 1 — F4 — Score 10
**The Algorithm (FSRS wiki)** — Jarrett Ye & open-spaced-repetition contributors (2022–2026)
URL: https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm
Finder: `finder-02-fsrs-dsr.md` (#1)
*Round-table argument:* This is the single canonical specification of the DSR (Difficulty–Stability–Retrievability) equations that Anki actually runs today — without it the reader cannot answer "what does Anki's modern algorithm do," and no other source documents the deployed power-law forgetting curve and stability-update formulas this precisely.

### Rank 2 — F1 — Score 10
**What spaced repetition algorithm does Anki use?** — Anki / Damien Elmes & contributors (2023–present)
URL: https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html
Finder: `finder-01-sm2-origins.md` (#4)
*Round-table argument:* The authoritative bridge between textbook SM-2 and Anki's real implementation (ease factor, interval × ease × modifier, fuzz, 130% ease floor, learning steps) — it is the most Anki-specific "exact mechanics" source and even points to the actual scheduler code.

### Rank 3 — F3 — Score 9
**Issues with Anki SM-2 (Anki SRS Kai documentation)** — kuroahna (2024)
URL: https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html
Finder: `finder-09-sm2-critiques.md` (#1)
*Round-table argument:* The most mechanistic, formula-level catalogue of SM-2's failure modes — "ease hell," the one-way ease ratchet, and intervals that are simultaneously too short for floored cards and too long for mature cards — backed by in-app diagnostic evidence (the Card Ease graph), which makes the weaknesses concrete rather than rhetorical.

### Rank 4 — F2 — Score 10
**Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis** — Cepeda, Pashler, Vul, Wixted & Rohrer (2006), *Psychological Bulletin*
DOI: https://doi.org/10.1037/0033-2909.132.3.354
Finder: `finder-04-spacing-effect.md` (#1)
*Round-table argument:* The canonical empirical foundation for the entire enterprise — 839 assessments across 317 experiments proving the spacing effect is real and large, and establishing the key design law that the optimal gap scales with the desired retention interval, which is exactly the behavior Anki's expanding intervals approximate.

### Rank 5 — F5 — Score 9
**The Effectiveness of Spaced Repetition in Medical Education: A Systematic Review and Meta-Analysis** — Maye et al. (2026), *The Clinical Teacher*
DOI: https://doi.org/10.1111/tct.70353
Finder: `finder-11-medical-education.md` (#5)
*Round-table argument:* The highest-quality aggregate real-world evidence in the corpus — a PRISMA meta-analysis of 13 studies / 21,415 learners (pooled SMD = 0.78) — proving the spacing principle behind Anki improves objective performance, while honestly flagging that specific interval parameters remain unvalidated.

### Rank 6 — F1 — Score 9
**SuperMemo 2: Algorithm (Optimization of Learning, §3.2)** — Piotr A. Woźniak (1990)
URL: http://super-memory.com/english/ol/sm2.htm
Finder: `finder-01-sm2-origins.md` (#1)
*Round-table argument:* The primary, canonical source for the exact SM-2 formula (I(1)=1, I(2)=6, I(n)=I(n-1)·EF; EF update; q<3 reset) — indispensable as the *origin* document, and the best backup/companion to the Anki FAQ if the moderator wants the unfiltered original rather than Anki's derivative.

### Rank 7 — F2 — Score 9
**Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention** — Roediger & Karpicke (2006), *Psychological Science*
DOI: https://doi.org/10.1111/j.1467-9280.2006.01693.x
Finder: `finder-05-retrieval-practice.md` (#1)
*Round-table argument:* Covers the *other half* of the WHY that Cepeda omits — the testing/retrieval-practice effect (the active-recall engine of every flashcard) — making it the ideal F2 substitute if the panel decides retrieval practice deserves the F2 seat over the spacing effect.

### Rank 8 — F4 — Score 9
**A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (SSP-MMC)** — Ye, Su & Cao (2022), ACM SIGKDD (KDD '22)
DOI: https://doi.org/10.1145/3534678.3539081
Finder: `finder-02-fsrs-dsr.md` (#3)
*Round-table argument:* The peer-reviewed academic backbone of the modern lineage (DHP model on 220M logs → FSRS's DSR), available as a citable, rigorous F4 alternate to the FSRS wiki, which is engineering documentation rather than peer-reviewed research.

---

## PROPOSED BALANCED FINAL-5 (one per facet)

My recommendation to the moderator is precisely ranks 1–5 — a set with zero facet overlap that walks the reader through the entire story end to end:

| Facet | Source | Why it earns the seat |
|-------|--------|----------------------|
| **F1 — Mechanics** | **Anki FAQ — "What spaced repetition algorithm does Anki use?"** (`finder-01`) | Authoritative description of what Anki *actually* runs (SM-2 derivative + deliberate deviations + ease floor) — answers "exactly what does it do." |
| **F2 — Why / Theory** | **Cepeda et al. 2006, Distributed Practice meta-analysis** (`finder-04`) | The robust empirical bedrock of the spacing effect and the "optimal gap scales with retention horizon" law that justifies expanding intervals. |
| **F3 — Weaknesses** | **Issues with Anki SM-2 (Anki SRS Kai)** (`finder-09`) | Formula-level, mechanistic account of ease hell and interval miscalibration, with in-app evidence — the clearest critique. |
| **F4 — Modern alternative** | **The Algorithm (FSRS wiki)** (`finder-02`) | The canonical spec of the DSR/FSRS model Anki now ships — the data-driven state of the art. |
| **F5 — Applied evidence** | **Maye et al. 2026 meta-analysis, medical education** (`finder-11`) | Strongest-design real-world proof (21,415 learners, SMD 0.78) that the method works in practice. |

**Curator's note on balance:** This set is deliberately non-redundant. F1 (Anki FAQ) and F4 (FSRS wiki) split the "old engine vs. new engine" so the reader sees both algorithms Anki has ever used; F2 supplies the *why it should work*, F5 supplies the *evidence it does work*, and F3 supplies the *where it breaks*. If the panel wants a single peer-reviewed anchor inside the set, swap F4's FSRS wiki for **SSP-MMC (KDD '22, rank 8)**; if the panel prefers retrieval practice as the theoretical pillar, swap F2's Cepeda 2006 for **Roediger & Karpicke 2006 (rank 7)**. I would resist any swap that doubles up a facet (e.g., adding the SRS Benchmark, which mostly re-covers F3/F4 already held).
