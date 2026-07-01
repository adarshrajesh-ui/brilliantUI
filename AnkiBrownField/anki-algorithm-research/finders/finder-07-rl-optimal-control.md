# Finder 07 — RL / Optimal Control

**Swarm role:** Finder Agent 07 of 17. **Angle:** Reinforcement learning, optimal control, and deep learning approaches to spaced repetition scheduling — i.e., treating review scheduling as a stochastic optimal control / Markov Decision Process (MDP) problem, in contrast to Anki's hand-tuned SM-2 heuristic and the regression/DSR-based FSRS.

## Framing: why this angle matters for understanding Anki

Anki's SM-2 (and to a large extent FSRS) are **prediction-first heuristics**: they estimate a memory state and then apply fixed rules (multiply the interval by an ease factor; or pick the interval that hits a target retention). The literature below reframes scheduling as a **sequential decision / control problem**: given a stochastic model of human memory (forgetting curve), find the *policy* (when to review, what to review) that optimizes a long-horizon objective (maximize recall / knowledge subject to a cost on review effort). This exposes exactly what SM-2 leaves on the table — it is a static, myopic, per-card rule with no explicit objective function, no notion of review-budget allocation across a deck, and no optimality guarantee. The sources span three sub-families: (a) **continuous-time optimal control** (MEMORIZE), (b) **MDP / RL policy learning** (Reddy, Upadhyay, Yang/TADS, Xiao DRL-SRS, KARL), and (c) **dynamic-programming / shortest-path control** (Ye SSP-MMC, which directly underlies FSRS's optimal-retention computation).

---

## Sources

### 1. Enhancing human learning via spaced repetition optimization (MEMORIZE)
- **Authors:** Behzad Tabibian, Utkarsh Upadhyay, Abir De, Ali Zarezade, Bernhard Schölkopf, Manuel Gomez-Rodriguez
- **Year:** 2019
- **Venue:** Proceedings of the National Academy of Sciences (PNAS), 116(10):3988–3993
- **URL/DOI:** https://doi.org/10.1073/pnas.1815156116 · PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC6410796/ · Code: https://github.com/Networks-Learning/memorize
- **Relevance (what / why-how / weakness):** *What:* Formalizes spaced repetition as a **stochastic optimal control problem** over marked temporal point processes with jumps, solving for the optimal continuous-time *reviewing intensity* rather than a discrete next-interval. *Why/how:* Solving the resulting Hamilton-Jacobi-Bellman PDE yields an elegant closed-form optimal policy — review intensity ∝ q^(−1/2)·(1 − m(t)), i.e. urgency is proportional to the probability of forgetting; validated on Duolingo data showing learners on the MEMORIZE schedule recall more than heuristic schedules. *Weakness:* Relies on a specific exponential forgetting-curve memory model and a single tunable cost parameter q, assumes the learner is available exactly when the (stochastic) policy fires, and optimizes per-item intensity rather than allocating a fixed daily review budget across a whole deck the way Anki users actually study.
- **Relevance score: 10/10**

### 2. Unbounded Human Learning: Optimal Scheduling for Spaced Repetition
- **Authors:** Siddharth Reddy, Igor Labutov, Siddhartha Banerjee, Thorsten Joachims
- **Year:** 2016
- **Venue:** ACM SIGKDD (KDD '16)
- **URL/DOI:** https://doi.org/10.1145/2939672.2939850 · arXiv: https://arxiv.org/abs/1602.07032 · PDF: https://www.kdd.org/kdd2016/papers/files/rpp0744-reddyAT3.pdf
- **Relevance (what / why-how / weakness):** *What:* Models the Leitner system as a **queueing network** and casts review scheduling as a tractable optimization over per-deck review rates, directly addressing the novelty-vs-reinforcement trade-off Anki finesses with its "new cards/day" cap. *Why/how:* Mines log data to fit an empirical forgetting model, derives a mean-recall approximation that makes the rate-allocation problem convex, and predicts (then experimentally confirms via Mechanical Turk) a sharp **phase transition** in learning when the new-item introduction rate exceeds a threshold. *Weakness:* The clean theory hinges on steady-state queueing assumptions and a homogeneous-deck approximation; it optimizes aggregate review *rates* rather than item-level timing, so it is more a principled diagnosis of the trade-off than a drop-in scheduler.
- **Relevance score: 9/10**

### 3. Accelerating Human Learning with Deep Reinforcement Learning (DeepTutor)
- **Authors:** Siddharth Reddy, Sergey Levine, Anca Dragan
- **Year:** 2017
- **Venue:** NeurIPS 2017 Workshop on Teaching Machines, Robots, and Humans (preprint)
- **URL/DOI:** https://siddharth.io/files/deep-tutor.pdf · Code: https://github.com/rddy/deeptutor
- **Relevance (what / why-how / weakness):** *What:* Treats review scheduling as an explicit **RL problem** and learns a *model-free* teaching policy with a neural network that operates directly on raw study-history observations, requiring no hand-built memory model. *Why/how:* Uses policy-gradient / TRPO over a POMDP formulation, training against cognitive-model student simulators, and shows the learned policy is competitive with or beats SuperMemo and Leitner across several learning objectives. *Weakness:* Evaluated only on *simulated* students (no human deployment), is sample-inefficient and sensitive to the simulator's memory model, and as a black-box policy gives none of the interpretability or guarantees of SM-2 or the control-theoretic methods.
- **Relevance score: 9/10**

### 4. A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling (SSP-MMC)
- **Authors:** Junyao (Jarrett) Ye, Jingyong Su, Yilong Cao
- **Year:** 2022
- **Venue:** ACM SIGKDD (KDD '22), pp. 4381–4390
- **URL/DOI:** https://doi.org/10.1145/3534678.3539081 · Code/data: https://github.com/maimemo/SSP-MMC
- **Relevance (what / why-how / weakness):** *What:* Builds a **DHP (Difficulty-Halflife-Probability) Markov memory model** from 220M MaiMemo review logs and frames scheduling as a **stochastic shortest path** problem that minimizes the expected number of reviews to reach a memory target. *Why/how:* Solves the SSP via dynamic programming over the discretized memory-state space to produce a provably cost-minimizing review policy, deployed in production with a 12.6% improvement over prior methods. *Weakness:* The MMC objective (minimize repetitions to a fixed target) is a different goal than maximizing retention under a daily budget; the state discretization and the assumption of a stationary, well-specified memory model limit transfer to messy real-world Anki decks with irregular intervals and lapses. **Directly underlies FSRS's optimal-retention computation, making it the bridge between this RL/control literature and the algorithm Anki users actually run.**
- **Relevance score: 10/10**

### 5. Deep Reinforcement Learning of Marked Temporal Point Processes
- **Authors:** Utkarsh Upadhyay, Abir De, Manuel Gomez-Rodriguez
- **Year:** 2018
- **Venue:** NeurIPS 2018 (Advances in Neural Information Processing Systems 31)
- **URL/DOI:** https://proceedings.neurips.cc/paper/2018/hash/71a58e8cb75904f24cde464161c3e766-Abstract.html · arXiv: https://arxiv.org/abs/1805.09360 · Code: https://github.com/Human-Centric-Machine-Learning/tpprl
- **Relevance (what / why-how / weakness):** *What:* Generalizes MEMORIZE from a fixed analytic memory model to a **deep RL framework where the policy is itself a learned point-process intensity** parameterized by an RNN, jointly choosing review *timing* and *content*. *Why/how:* Derives a policy-gradient method for the continuous-time setting that makes no assumptions on the functional form of the environment's intensity/mark distribution and allows arbitrary reward functions; applied to personalized teaching on Duolingo data. *Weakness:* Inherits the "learner available exactly when the policy fires" assumption, is harder to train and less interpretable than the closed-form MEMORIZE solution, and was not validated in a live human study for the teaching application.
- **Relevance score: 9/10**

### 6. TADS: Learning Time-Aware Scheduling Policy with Dyna-Style Planning for Spaced Repetition
- **Authors:** Zhengyu Yang, Jian Shen, Yunfei Liu, Yang Yang, Weinan Zhang, Yong Yu
- **Year:** 2020
- **Venue:** ACM SIGIR 2020, pp. 1917–1920
- **URL/DOI:** https://doi.org/10.1145/3397271.3401316 · https://dl.acm.org/doi/10.1145/3397271.3401316
- **Relevance (what / why-how / weakness):** *What:* An RL scheduler that explicitly models the **varying real-world time intervals** between learning events — a factor prior RL schedulers (which assumed uniform steps) ignored, and exactly the variable SM-2/FSRS center on. *Why/how:* Uses a **Time-LSTM policy** to encode the full learning history plus elapsed time, and integrates **Dyna-style model-based planning** to dramatically improve sample efficiency over pure model-free RL. *Weakness:* Evaluated on synthetic and cognitive-model-based simulated environments rather than real learners, and the short workshop-length treatment leaves scalability to large item pools and robustness to model misspecification underexplored.
- **Relevance score: 8/10**

### 7. DRL-SRS: A Deep Reinforcement Learning Approach for Optimizing Spaced Repetition Scheduling
- **Authors:** Qing Xiao, Jing Wang
- **Year:** 2024
- **Venue:** Applied Sciences (MDPI), 14(13):5591
- **URL/DOI:** https://doi.org/10.3390/app14135591 · https://www.mdpi.com/2076-3417/14/13/5591
- **Relevance (what / why-how / weakness):** *What:* A recent end-to-end **deep RL** scheduler that pairs a Transformer-based memory/student model with an RL agent (Tianshou) to optimize review timing, and provides a clean survey of the RL-for-SRS lineage (Reddy → Sinha → Upadhyay → Yang). *Why/how:* Trains a recall-prediction model on review logs, uses it as a differentiable simulator environment, and learns a policy that the paper reports outperforms existing spaced-repetition optimization baselines. *Weakness:* Published in a lower-tier venue with limited independent replication; like its predecessors it optimizes against a learned simulator, so gains may partly reflect the simulator rather than real human memory, and it lacks a large-scale live deployment comparison.
- **Relevance score: 7/10**

### 8. KARL / KAR3L: Knowledge-Aware Retrieval and Representations aid Retention and Learning in Students
- **Authors:** Matthew Shu, Nishant Balepur, Shi Feng, Jordan Lee Boyd-Graber
- **Year:** 2024
- **Venue:** EMNLP 2024 (Main), pp. 14161–14178
- **URL/DOI:** https://doi.org/10.18653/v1/2024.emnlp-main.784 · https://aclanthology.org/2024.emnlp-main.784/ · arXiv: https://arxiv.org/abs/2402.12291
- **Relevance (what / why-how / weakness):** *What:* Introduces **content-aware scheduling** — the first scheduler whose student model reads the *text* on the flashcard, a dimension SM-2/FSRS/MEMORIZE entirely ignore (they see only card IDs and timestamps). *Why/how:* Combines **Deep Knowledge Tracing**, a BERT retriever over semantically similar past cards, and a novel **delta-based teaching policy** that picks the card whose review most improves predicted future recall; deployed live to 500+ learners with measured efficiency gains over SOTA schedulers. *Weakness:* The online learning-efficiency evidence rests on a small sample (27 users, 32 study paths) over a medium-term horizon, and the BERT/DKT pipeline is far heavier and less transparent than Anki's arithmetic scheduler.
- **Relevance score: 8/10**

### 9. Using a model to compute the optimal schedule of practice
- **Authors:** Philip I. Pavlik Jr., John R. Anderson
- **Year:** 2008
- **Venue:** Journal of Experimental Psychology: Applied, 14(2):101–117
- **URL/DOI:** https://doi.org/10.1037/1076-898x.14.2.101 · PDF: http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/791xap-14-2-101.pdf
- **Relevance (what / why-how / weakness):** *What:* The foundational **model-based optimal-scheduling** work: uses the ACT-R activation memory equations to compute, per item, the spacing that maximizes long-term gain *per unit of study time* — an explicit optimization objective absent from SM-2. *Why/how:* Balances the spacing effect against recency/frequency and the time cost of retrieval failures, dynamically lengthening intervals as items stabilize, and shows large-effect-size gains in recall and latency in a controlled experiment. *Weakness:* It is a greedy, per-item heuristic derived from one cognitive architecture (ACT-R) rather than a true long-horizon optimal-control solution, and its "contracting spacing is best" prediction is model-dependent and contested by competing memory models (e.g., Mozer/Pashler).
- **Relevance score: 8/10**

---

## Supporting / context sources (real, used for framing)

- **A Trainable Spaced Repetition Model for Language Learning (Half-Life Regression).** Burr Settles, Brendan Meeder. ACL 2016, pp. 1848–1858. https://doi.org/10.18653/v1/P16-1174 · Code: https://github.com/duolingo/halflife-regression. *Not a control/RL method but the key ML-regression bridge between heuristics (Leitner/Pimsleur) and learned student models that the RL schedulers build their environments on; reduced recall-prediction error 45%+ on Duolingo. Score: 6/10 on this angle.*
- **FSRS — Free Spaced Repetition Scheduler (DSR / DHP model).** Jarrett Ye et al., open-spaced-repetition. https://github.com/open-spaced-repetition/fsrs4anki · optimizer mechanism (MLE + Backpropagation-Through-Time, then SSP for optimal retention): https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-mechanism-of-optimization. *The production system that actually carried this research into Anki: its optimizer trains a DSR memory model via BPTT and uses Ye's SSP-MMC (source #4) to pick the optimal retention. Score: 7/10 — the concrete RL/control-influenced replacement for SM-2.*

---

## Synthesis for the swarm: what this angle says about Anki's weaknesses

1. **No objective function.** SM-2 is a fixed rule with no optimization target; every paper here starts by *writing down* an objective (maximize recall / minimize reviews / maximize gain-per-time). Anki's heuristic is provably suboptimal because it never optimizes anything.
2. **Myopic and per-card.** SM-2 schedules each card in isolation and ignores the **budget-allocation / novelty-vs-reinforcement trade-off** that Reddy (#2) formalizes and that produces a phase transition in learning outcomes.
3. **Content-blind.** SM-2, FSRS, and even MEMORIZE see only IDs and timestamps; KARL (#8) shows the text of the card carries predictive signal they all discard.
4. **The control framing already won in practice.** Ye's SSP-MMC (#4) is the dynamic-programming control method that FSRS uses to compute optimal retention — so the modern Anki replacement (FSRS) is itself a descendant of this RL/optimal-control lineage, while SM-2 remains a 1980s hand-tuned heuristic.
5. **Open gap.** Every learned/RL method is validated mostly against *simulators or short studies*; none has SM-2's decades of robustness at billions-of-reviews scale, which is the honest counter-weakness of the RL angle.
