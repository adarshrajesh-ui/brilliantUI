# Finder 17 — Recent Advances (2023-2026)

**Angle:** The most recent (2023–2026) advances in spaced-repetition scheduling — large-scale FSRS evaluations, neural/transformer forgetting models, content-aware schedulers, deep-RL interval optimizers, and forgetting-aware knowledge tracing — i.e., the state of the art *beyond* Anki's SM-2 and the frontier *around/past* FSRS.

**Context for the swarm:** Anki historically shipped a hand-tuned SM-2 variant (fixed ease-factor heuristics, no per-user memory model, no probabilistic recall prediction). Since late 2023 Anki ships **FSRS** (Free Spaced Repetition Scheduler), which fits a per-user DSR (Difficulty–Stability–Retrievability) memory model and schedules to hit a target retention. The papers below represent the frontier that FSRS itself is benchmarked against and the research directions that aim to beat it.

---

## Source 1 — The SRS Benchmark (open-spaced-repetition)

- **Title:** SRS Benchmark: A Benchmark for Spaced Repetition Schedulers/Algorithms (FSRS-Anki-20k / anki-revlogs-10k dataset)
- **Authors:** Jarrett Ye, Expertium, and the open-spaced-repetition community
- **Year:** continuously updated (2023–2026)
- **Venue:** Open-source project (GitHub) + Hugging Face Datasets
- **URL:** https://github.com/open-spaced-repetition/srs-benchmark — dataset: https://huggingface.co/datasets/open-spaced-repetition/anki-revlogs-10k
- **Relevance:** This is the largest public head-to-head evaluation of spaced-repetition algorithms, scoring FSRS (v3 → v7), SM-2, HLR, Ebisu, and neural baselines (LSTM, GRU, RWKV, Transformer) on ~350M real Anki reviews from ~10k users using Log Loss, RMSE(bins), and AUC. It improves on Anki's SM-2 framing by treating scheduling as a *probabilistic recall-prediction* problem and showing FSRS-6 has ~99.6% per-user superiority over SM-2 in calibration. Remaining weakness: it ranks predictive accuracy on logged reviews, not *causal* learning efficiency — a better calibrated predictor does not provably produce an optimal *schedule*, and same-day/short-interval behaviour and selection bias in user-chosen review times remain confounders.
- **Novelty:** 7/10 — **Frontier relevance:** 10/10

## Source 2 — KARL: content-aware flashcard scheduling

- **Title:** KARL: Knowledge-Aware Retrieval and Representations aid Retention and Learning in Students
- **Authors:** Matthew Shu, Nishant Balepur, Shi Feng, Jordan Lee Boyd-Graber
- **Year:** 2024
- **Venue:** EMNLP 2024 (also arXiv:2402.12291)
- **URL:** https://aclanthology.org/2024.emnlp-main.784/ — DOI: 10.18653/v1/2024.emnlp-main.784 — https://arxiv.org/abs/2402.12291
- **Relevance:** KARL proposes the first *content-aware* scheduler: it uses deep knowledge tracing (DKT) plus a BERT retriever over semantically similar past cards to predict recall, rather than relying only on review timing/response history. This directly fixes a structural blind spot in FSRS and SM-2 — they treat each card as an opaque ID and cannot generalize to *unseen* cards or model semantic interference between related cards. Remaining weakness: the online learning-efficiency evidence is small-scale (32 study paths from 27 users on trivia QA), it needs card text plus a trained encoder (heavier than FSRS's local fit), and it does not yet output an optimal interval policy.
- **Novelty:** 9/10 — **Frontier relevance:** 9/10

## Source 3 — DRL-SRS: Transformer half-life + Deep-RL interval optimization

- **Title:** DRL-SRS: A Deep Reinforcement Learning Approach for Optimizing Spaced Repetition Scheduling
- **Authors:** Qinfeng Xiao, Jiazhen Wang
- **Year:** 2024
- **Venue:** Applied Sciences, 14(13):5591
- **URL:** https://www.mdpi.com/2076-3417/14/13/5591 — DOI: 10.3390/app14135591
- **Relevance:** DRL-SRS pairs a Transformer-based Half-Life Regression (THLR) memory predictor with a DQN+LSTM agent that learns the optimal *review interval* (not just which item to show), reporting an 11% lower memory-prediction MAE than the prior best. It improves on Anki/FSRS by replacing hand-designed stability-update formulas with a learned temporal encoder and by explicitly optimizing long-term retention via reinforcement learning instead of a fixed target-retention heuristic. Remaining weakness: the RL policy is trained in a simulator built from its own memory model, so gains can be optimistic and may not transfer to real students; it is also far heavier and less interpretable than FSRS.
- **Novelty:** 8/10 — **Frontier relevance:** 8/10

## Source 4 — SSP-MMC / capturing the dynamics of memory (FSRS's research lineage)

- **Title:** Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory
- **Authors:** Jingyong Su, Junyao Ye, Liqiang Nie, Yilong Cao, Yongyong Chen
- **Year:** 2023
- **Venue:** IEEE Transactions on Knowledge and Data Engineering (TKDE) — extends the KDD 2022 SSP-MMC paper
- **URL:** https://dl.acm.org/doi/10.1109/TKDE.2023.3251721 — DOI: 10.1109/TKDE.2023.3251721 — code/data: https://github.com/maimemo/SSP-MMC-Plus
- **Relevance:** This is the MaiMemo DHP line of work that FSRS's DSR memory model is descended from; it alternates a Markov-property memory model with a stochastic-shortest-path schedule optimizer to *minimize review cost* for a retention target, validated on 220M time-series review logs. It improves on SM-2 by jointly solving recall prediction *and* cost-optimal scheduling (reporting 64% lower recall-prediction error and 17% lower review cost vs. baselines), giving a principled objective that Anki's fixed multipliers lack. Remaining weakness: the optimization assumes a stationary memory model per user/item and discretized states, and was tuned for language-vocabulary review (MaiMemo) rather than Anki's heterogeneous, arbitrary-content decks.
- **Novelty:** 8/10 — **Frontier relevance:** 9/10

## Source 5 — LefoKT: relative forgetting attention

- **Title:** Rethinking and Improving Student Learning and Forgetting Processes for Attention-based Knowledge Tracing Models
- **Authors:** Yongbiao Bai, Xiang Li, Zhi Liu, Yan Huang, Mengqi Tian, Wei Luo
- **Year:** 2025
- **Venue:** AAAI 2025 (Proceedings of the AAAI Conference on Artificial Intelligence, 39(27):27822–27830)
- **URL:** https://ojs.aaai.org/index.php/AAAI/article/view/34998 — DOI: 10.1609/aaai.v39i27.34998
- **Relevance:** LefoKT introduces a *relative forgetting attention* that decouples forgetting from problem relevance and adds length-extrapolation so the model handles ever-growing review sequences. This addresses a limitation shared by FSRS and prior KT models: forgetting is handled by a single uniform time-decay term, which conflates "time since review" with "topic similarity" and degrades on very long histories (exactly the regime of long-term Anki users). Remaining weakness: it is a *recall-prediction* (knowledge-tracing) advance benchmarked on offline EdTech datasets, not a deployed scheduler, so it improves the memory model but not yet the interval policy.
- **Novelty:** 8/10 — **Frontier relevance:** 8/10

## Source 6 — MemoryKT: encoding–storage–retrieval via temporal VAE

- **Title:** MemoryKT: An Integrative Memory-and-Forgetting Method for Knowledge Tracing
- **Authors:** Min-Yin Lin, Ke Deng, Zhengyang Wu, Zetao Zheng, Jie Li
- **Year:** 2025
- **Venue:** arXiv preprint (arXiv:2508.08122)
- **URL:** https://arxiv.org/abs/2508.08122 — https://arxiv.org/pdf/2508.08122
- **Relevance:** MemoryKT uses a novel temporal variational autoencoder to model the full encoding → storage → retrieval cycle with a *personalized* forgetting module that dynamically modulates storage strength per student. It improves on FSRS's three-scalar DSR state by representing memory as a learned latent distribution that captures individual differences across all three memory stages rather than only a difficulty/stability pair. Remaining weakness: it is an unreviewed preprint evaluated only on offline public KT datasets for prediction AUC, with no scheduling deployment, no large-scale Anki-style validation, and added complexity/opacity over FSRS.
- **Novelty:** 7/10 — **Frontier relevance:** 7/10

## Source 7 — CPF: concept-driven personalized forgetting

- **Title:** Personalized Forgetting Mechanism with Concept-Driven Knowledge Tracing
- **Authors:** Shanshan Wang, Ying Hu, Xun Yang, Zhongzhou Zhang, Keyang Wang, Xingyi Zhang
- **Year:** 2024
- **Venue:** arXiv preprint (arXiv:2404.12127)
- **URL:** https://arxiv.org/abs/2404.12127 — https://arxiv.org/pdf/2404.12127
- **Relevance:** CPF integrates hierarchical precursor–successor relationships between knowledge concepts and per-student cognitive ability into both the learning and forgetting processes, so forgetting rate varies by student *and* by concept dependency. This targets a real FSRS/SM-2 gap: they assume cards forget independently, ignoring that reviewing a prerequisite concept can reinforce dependent ones (and vice versa). Remaining weakness: it requires a concept graph / skill tags that generic Anki decks rarely have, and like other KT work it predicts performance rather than emitting an optimal review schedule.
- **Novelty:** 7/10 — **Frontier relevance:** 7/10

## Source 8 — KVFKT: attention embedding + forgetting-curve integration

- **Title:** KVFKT: A New Horizon in Knowledge Tracing with Attention-Based Embedding and Forgetting Curve Integration
- **Authors:** Zhiyi Duan, Xiaoxiao Dong, Hengnian Gu, Xiong Wu, Zhibin Li, Dongdai Zhou
- **Year:** 2025
- **Venue:** COLING 2025 (Proceedings of the 31st International Conference on Computational Linguistics)
- **URL:** https://aclanthology.org/2025.coling-main.297/
- **Relevance:** KVFKT couples attention-based question/knowledge-concept embeddings with an explicit forgetting-quantification module (interval-time-based forgetting rate following the forgetting curve) plus guess/difficulty coefficients, aiming for an *interpretable* yet accurate recall predictor. It improves on SM-2 by combining a classical forgetting-curve prior with learned attention, and on black-box neural KT by keeping the forgetting term explicit and human-readable — bridging FSRS-style interpretability with deep models. Remaining weakness: still an offline prediction model on standard KT benchmarks; the forgetting curve is integrated heuristically rather than derived from a memory-stability dynamics model like FSRS's DSR.
- **Novelty:** 6/10 — **Frontier relevance:** 7/10

## Source 9 — Fast and Forgetful Memory (forgetting as inductive prior)

- **Title:** Reinforcement Learning with Fast and Forgetful Memory
- **Authors:** Steven Morad, Ryan Kortvelesy, Stephan Liwicki, Amanda Prorok
- **Year:** 2023
- **Venue:** NeurIPS 2023 (also arXiv:2310.04128)
- **URL:** https://arxiv.org/abs/2310.04128 — https://proceedings.neurips.cc/paper_files/paper/2023/file/e3bf2f0f10774c474de22a12cb060e2c-Paper-Conference.pdf
- **Relevance:** FFM is a memory architecture for RL whose key finding — drawn from computational psychology — is that an explicit *forgetting* inductive prior (context drift + composite memory) is the single most important component, outperforming GRUs while training ~2 orders of magnitude faster. Though not a spaced-repetition scheduler, it is direct, recent evidence that hard-coding human-style forgetting dynamics into a sequence model beats generic RNNs/Transformers — the same bet FSRS makes against neural baselines, and a candidate backbone for future memory-state schedulers. Remaining weakness (as a scheduling source): it is applied to POMDP control tasks, not learner memory, so its relevance is methodological/transferable rather than a deployable SRS algorithm.
- **Novelty:** 8/10 — **Frontier relevance:** 6/10

---

## Cross-cutting takeaways for the swarm

1. **FSRS is now the public baseline-to-beat**, not SM-2. The SRS Benchmark (Source 1) is the canonical large-scale evidence; SM-2 loses to FSRS-6 for ~99.6% of users on calibration.
2. **Two distinct frontiers** are advancing past FSRS: (a) better *memory/recall predictors* — content-aware (KARL), forgetting-aware attention/KT (LefoKT, MemoryKT, CPF, KVFKT); and (b) better *schedule optimizers* — deep-RL and stochastic-shortest-path interval optimization (DRL-SRS, SSP-MMC).
3. **The shared weakness of the whole field:** nearly all gains are measured as offline recall-*prediction* accuracy on logged reviews, not as *causal* improvement in learning efficiency from controlled deployment. KARL is a rare attempt at online evaluation, but tiny-scale. Content/semantic structure between cards (interference, prerequisites) is the biggest modeling gap FSRS and SM-2 both ignore.
