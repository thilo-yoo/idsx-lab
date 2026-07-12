# IDSX Lab

**Structure-guided decision layer for IDS (Hunter syndrome / MPS II)**  
*구조 기반 IDS 미스센스 적합성 triage · 공개 연구 포털*

[![Site](https://img.shields.io/badge/Live_site-thilo--yoo.github.io%2Fidsx--lab-2ea44f?style=for-the-badge)](https://thilo-yoo.github.io/idsx-lab/)
[![Profile](https://img.shields.io/badge/Author-Thilo_Yoo-1B4F72?style=for-the-badge)](https://github.com/thilo-yoo)

---

## Live portal

**https://thilo-yoo.github.io/idsx-lab/**

| Page | Content |
|------|---------|
| [Home](https://thilo-yoo.github.io/idsx-lab/) | Portal entry · claim / non-claim |
| [Synthesis](https://thilo-yoo.github.io/idsx-lab/pages/synthesis.html) | Full argument map |
| [Framework](https://thilo-yoo.github.io/idsx-lab/pages/framework.html) | Network · competence · ER logic |
| [Module case](https://thilo-yoo.github.io/idsx-lab/pages/module-case.html) | Ser152 structural module |
| [Compute](https://thilo-yoo.github.io/idsx-lab/pages/compute.html) | 2-axis triage · interpretation rules |
| [AF catalog](https://thilo-yoo.github.io/idsx-lab/pages/af-catalog.html) | AlphaFold Server job index |
| [AF structures](https://thilo-yoo.github.io/idsx-lab/pages/structures.html) | Snapshots · difference maps · 3D |
| [Reference](https://thilo-yoo.github.io/idsx-lab/pages/ambroxol-gcase.html) | GCase–ambroxol success-condition library |
| [Notebook](https://thilo-yoo.github.io/idsx-lab/pages/notebook.html) | Thinking timeline |

---

## Scientific frame (one paragraph)

Missense disease in IDS is treated as a problem of **structural interaction networks** that enable folding and lysosomal delivery—not solely active-site destruction. Buried nodes such as **Ser152** are framed as *structural modules*; interventions are directed at **adjacent surface patches**, because fully buried side chains are not practical binding sites in the folded state. Success is defined as recovery of **catalytic competence**, not binding occupancy. Thermal stability is a **proxy readout**, not the project title. AlphaFold Server results (WT, S152I, multi-hotspot cocktails) show near-WT global folds and are interpreted under explicit discipline: coordinate similarity does not equal thermodynamic stability or ER passage.

---

## Non-claims

- No therapeutic product or clinical recommendation  
- No residual-activity assay panel completed on this portal  
- Ambroxol is **not** claimed as an IDS drug  
- AF RMSD alone does not rank pathogenicity or amenability  

---

## Local development

```bash
cd website   # this repository root when cloned from idsx-lab
python3 -m http.server 8765
# http://localhost:8765
```

---

## Author

**Thilo Yoo** · [github.com/thilo-yoo](https://github.com/thilo-yoo)

*Early-stage, structure-driven research documentation · 학부·예비 연구 단계의 공개 기록소*
