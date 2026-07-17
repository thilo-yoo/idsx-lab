# IDSX Lab

**Structure-guided decision layer for IDS (Hunter syndrome / MPS II)**  
*구조 기반 IDS 미스센스 적합성 triage · 공개 연구 포털*

[![Site](https://img.shields.io/badge/Live_site-thilo--yoo.github.io%2Fidsx--lab-2ea44f?style=for-the-badge)](https://thilo-yoo.github.io/idsx-lab/)
[![Profile](https://img.shields.io/badge/Author-Thilo_Yoo-1B4F72?style=for-the-badge)](https://github.com/thilo-yoo)
[![Master](https://img.shields.io/badge/Master_Package-2026--07-6B4C9A?style=for-the-badge)](https://thilo-yoo.github.io/idsx-lab/pages/master-package.html)

---

## Live portal

**https://thilo-yoo.github.io/idsx-lab/**

| Page | Content |
|------|---------|
| [Home](https://thilo-yoo.github.io/idsx-lab/) | Portal entry · claim / non-claim |
| [Synthesis](https://thilo-yoo.github.io/idsx-lab/pages/synthesis.html) | Full argument map |
| [**Master package**](https://thilo-yoo.github.io/idsx-lab/pages/master-package.html) | **2026-07 archive: chronicle · 12-mo plan · advisor deck** |
| [Framework](https://thilo-yoo.github.io/idsx-lab/pages/framework.html) | Network · competence · ER logic |
| [Module case](https://thilo-yoo.github.io/idsx-lab/pages/module-case.html) | Ser152 structural module |
| [Compute](https://thilo-yoo.github.io/idsx-lab/pages/compute.html) | 2-axis triage · interpretation rules |
| [AF catalog](https://thilo-yoo.github.io/idsx-lab/pages/af-catalog.html) | AlphaFold Server job index |
| [AF structures](https://thilo-yoo.github.io/idsx-lab/pages/structures.html) | Snapshots · difference maps · 3D |
| [Reference](https://thilo-yoo.github.io/idsx-lab/pages/ambroxol-gcase.html) | GCase–ambroxol success-condition library |
| [Notebook](https://thilo-yoo.github.io/idsx-lab/pages/notebook.html) | Thinking timeline |

---

## Master package (2026-07-17)

Advisor-grade + personal research archive. Fixed narrative of **what was built, how it was reasoned, current strength map, and gated plans**.

| File | Role |
|------|------|
| [`docs/master-package/00_README.md`](docs/master-package/00_README.md) | Package index |
| [`docs/master-package/01_research_chronicle.md`](docs/master-package/01_research_chronicle.md) | Development chronicle · thinking trail (detail-preserving) |
| [`docs/master-package/02_12month_plan.md`](docs/master-package/02_12month_plan.md) | 90-day / 12-month plan · gates |
| [`docs/master-package/03_talk_scripts.md`](docs/master-package/03_talk_scripts.md) | 60s · 5min · 20min talk scripts |
| [`docs/master-package/IDSX_Master_Advisor_Presentation.pptx`](docs/master-package/IDSX_Master_Advisor_Presentation.pptx) | 30-slide advisor deck (PPTX) |
| [`docs/master-package/IDSX_Master_Advisor_Presentation.key`](docs/master-package/IDSX_Master_Advisor_Presentation.key) | Same deck (Keynote) |
| [`04_chemeng_framework.md`](docs/master-package/04_chemeng_framework.md) | ChemE mass balance · PFD · Pareto · PFI |
| [`05_chaperone_directions.md`](docs/master-package/05_chaperone_directions.md) | Directions D1–D8 |
| [`06_gap_checklist.md`](docs/master-package/06_gap_checklist.md) | **What still needed (P0–P3)** |
| [`07_trackB_critical_review.md`](docs/master-package/07_trackB_critical_review.md) | Neo-pocket track critique |
| [`08_epitope_quality_cards.md`](docs/master-package/08_epitope_quality_cards.md) | Patch quality cards |
| [`09_session_synthesis.md`](docs/master-package/09_session_synthesis.md) | Session findings + numbers |
| [Process KPI page](https://thilo-yoo.github.io/idsx-lab/pages/process-kpi.html) | Conceptual process dashboard |
| [`10`–`21` templates](docs/master-package/00_README.md) | Collapse table, prereg, decision tree, IMRaD, HAZOP, wet menu, PFI, weekly ops |

Portal page: **[Master package](https://thilo-yoo.github.io/idsx-lab/pages/master-package.html)**

### Snapshot of status

| Layer | Status |
|-------|--------|
| Question | Can mutant IDS maintain/recover a functionally competent fold? |
| Success | **Catalytic competence**, not binding occupancy |
| Unit of analysis | Structural interaction **module**, not single-residue worship |
| Built | 797-variant×5FQL DB · amenability rules · Ser152 case · AF · ΔΔG/CTSS lens |
| Open | Residual activity wet panel · rescue proof · binder pilot |
| Tracks | **A** surface-patch stabilizer logic · **B** neo-pocket small molecule — do not collapse into one story |

---

## Scientific frame (one paragraph)

Missense disease in IDS is treated as a problem of **structural interaction networks** that enable folding and lysosomal delivery—not solely active-site destruction. Buried nodes such as **Ser152** are framed as *structural modules*; interventions are directed at **adjacent surface patches**, because fully buried side chains are not practical binding sites in the folded state. Success is defined as recovery of **catalytic competence**, not binding occupancy. Thermal stability is a **proxy readout**, not the project title. AlphaFold Server results (WT, S152I, multi-hotspot cocktails) show near-WT global folds and are interpreted under explicit discipline: coordinate similarity does not equal thermodynamic stability or ER passage.

Chemical-engineering lens: mass balance of functional enzyme molecules, unit-operation flowsheet (ER→QC→Golgi→lysosome), fault-mode classification, and gated scale-up ethics (no mass RFdiffusion without a pilot success criterion).

---

## Non-claims

- No therapeutic product or clinical recommendation  
- No residual-activity assay panel completed on this portal  
- Ambroxol is **not** claimed as an IDS drug  
- AF RMSD alone does not rank pathogenicity or amenability  
- TIER1 amenability proxy ≠ “drug will work” list  

---

## Local development

```bash
cd idsx-lab   # repository root
python3 -m http.server 8765
# http://localhost:8765
```

---

## Author

**Thilo Yoo** · [github.com/thilo-yoo](https://github.com/thilo-yoo)

*Early-stage, structure-driven research documentation · 학부·예비 연구 단계의 공개 기록소*
