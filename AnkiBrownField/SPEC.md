# CFA Test-Prep on Anki — Feature Spec

> **Status:** Draft v0.1
> **Built on top of:** this repository — the Anki-algorithm research in
> [`anki-algorithm-research/FINAL-top5.md`](anki-algorithm-research/FINAL-top5.md)
> and the market thesis in [`Brainlift.md`](Brainlift.md).

---

## 1. Problem & Goal

**Goal.** Build an app on top of Anki that speed-runs CFA prep by combining
LLM-generated flashcards with a scheduling layer tuned for a fixed exam date.

**Why Anki alone is insufficient (grounded in the research):**

- **FSRS/DSR is data-biased toward language learning.** Anki's modern engine fits
  ~19–21 weights to review logs, and the public benchmark corpus (~350M reviews,
  see `FINAL-top5.md` §5) is dominated by vocabulary/language decks. Language and
  humanities material empirically tolerates *larger* spacing between reviews, so
  the fitted defaults under-serve quantitative, formula-heavy CFA content.
- **FSRS treats cards as independent** and ignores semantic/prerequisite links
  (`FINAL-top5.md` §2, "Weakness").
- **FSRS/SM-2 optimize steady-state long-term retention, not a deadline.** The
  spacing-effect literature (Cepeda 2006, `FINAL-top5.md` §3) shows the optimal
  review gap scales with the *retention interval* — the "temporal ridgeline."
  Neither SM-2 nor stock FSRS back-plans toward a specific test date.
- **Cold start.** FSRS needs review history to personalize (`FINAL-top5.md` §2).

**Atomic unit.** Everything reduces to a **fact** — one atomic piece of learning
per card. Diagnostics, scheduling, and generation all operate on facts.

---

## 2. The Five Features

### Feature 1 — Auto-Generated Flashcards (fact atomization)

**What.** Ingest CFA curriculum content (LOS statements, readings, notes) and
decompose it into atomic flashcards where **each card encodes exactly one fact**.

**Behavior**
- Segment source material into candidate facts (definitions, formulas, ranges,
  relationships, ethics rules).
- Enforce one-fact-per-card; split compound statements automatically.
- Emit cards into an Anki-compatible deck/note structure.

**Acceptance criteria**
- Given a reading, produces a deck of atomic cards with no compound-fact cards.
- Each card carries provenance (source LOS / section) for later routing.

---

### Feature 2 — LLM Term Population

**What.** An LLM API call takes each generated fact and fills in the card
surface: term ↔ definition, cloze deletions, worked-formula prompts, and tags
(topic area, difficulty class, quantitative vs. definitional).

**Behavior**
- Call an LLM to render front/back (or cloze) text for each atomic fact.
- Attach structured metadata: `topic`, `content_type ∈ {quantitative,
  definitional, ethics, conceptual}`, `estimated_difficulty`.
- This metadata is the input signal for Feature 3.

**Acceptance criteria**
- Every generated card is populated with front/back text and a `content_type` tag.
- Deterministic, re-runnable given the same fact (idempotent card IDs).

---

### Feature 3 — Domain-Difficulty Weighting (heuristic layer on FSRS)

**What.** A heuristic layer *on top of* Anki/FSRS that adjusts scheduling by
`content_type`, correcting for FSRS's language-data bias.

**Rationale.** Because the fitted FSRS weights skew toward language decks (larger
optimal gaps), quantitative/formula CFA facts are scheduled with intervals that
are too long. This layer re-scales intervals per domain rather than replacing the
engine.

**Behavior**
- Keep FSRS as the base scheduler (do not fork the engine).
- Apply a per-`content_type` interval multiplier / difficulty prior
  (e.g. shorter multipliers for quantitative, closer to default for definitional).
- Multipliers are configurable and eventually fit from the app's own review logs.

**Acceptance criteria**
- Two identical-grade cards of different `content_type` receive measurably
  different next intervals.
- The layer is a wrapper; disabling it reverts to stock FSRS behavior.

---

### Feature 4 — Exam-Date Retention Maximization

**What.** A deadline-aware scheduler that maximizes retrievability `R` **on the
CFA exam date**, not indefinitely.

**Rationale.** Cepeda's temporal ridgeline (`FINAL-top5.md` §3): the optimal gap
depends on the target retention interval. With a known test date, we can
back-plan reviews so recall probability peaks on exam day.

**Behavior**
- Take exam date as input; compute time-to-exam per review.
- Bias intervals so the last productive review lands near the exam and predicted
  `R(exam_date)` is maximized across the deck (a light "ridgeline"/deadline
  heuristic layered over FSRS's `R = (1 + FACTOR·t/S)^DECAY`).
- Trade long-term stability for peak exam-day retrievability as the date nears.

**Acceptance criteria**
- Given an exam date, per-card schedules concentrate reviews approaching the date.
- Predicted deck-average `R(exam_date)` is higher than stock FSRS for the same
  study budget.

---

### Feature 5 — Diagnostic Routing (switch cards by retention level)

**What.** A diagnostic that measures the learner's current **memory-retention
level** per topic and switches which flashcards are served based on the result.

**Rationale.** Solves FSRS cold-start (`FINAL-top5.md` §2) and avoids wasting
study budget on already-mastered facts.

**Behavior**
- Run a short diagnostic per topic to estimate mastery/retention level.
- Seed initial FSRS difficulty/stability priors from diagnostic results.
- Route cards: suppress mastered facts, surface weak facts, and feed the
  measured level into Features 3 and 4.

**Acceptance criteria**
- A diagnostic produces a per-topic retention estimate before any review history.
- Card selection changes as a function of diagnosed level (weak topics surfaced
  first).

---

## 3. How the Features Compose

```
Content ──▶ [F1 atomize into facts] ──▶ [F2 LLM populates cards + tags]
                                              │
                     [F5 diagnostic] ──▶ seeds retention level / priors
                                              │
                                              ▼
                         FSRS base engine (Anki)
                                              │
                 [F3 domain-difficulty weights] + [F4 exam-date maximization]
                                              │
                                              ▼
                        Daily review queue tuned for exam day
```

## 4. Open Questions

- Source format for CFA content ingestion (PDF, text, official LOS list)?
- Which LLM provider/API for Features 1–2?
- Delivery: Anki add-on, a fork, or a companion app driving AnkiConnect?
- How is diagnostic "retention level" scored (accuracy, latency, confidence)?
