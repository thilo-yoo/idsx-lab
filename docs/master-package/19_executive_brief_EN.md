# IDSX — One-Page Executive Brief (English)

**Author:** Thilo Yoo (Chemical Engineering track · undergraduate research frame)  
**Target protein:** Iduronate-2-sulfatase (IDS), UniProt P22304, PDB **5FQL**  
**Disease context:** Mucopolysaccharidosis II (Hunter syndrome)  
**Date:** 2026-07-17 · **Status:** Decision-layer research, **not** a therapeutic claim  

---

## What this is

A **structure-guided triage** of public IDS missense variants for *pharmacological-chaperone / stabilizer amenability as a proxy*.  
We map 797 variants onto experimental coordinates and apply pre-specified rules to separate:

- hard-null / catalytic-geometry alleles (**EXCLUDE**),  
- near-pocket positions (**CAUTION**, e.g. Arg88 at 2.77 Å),  
- core/surface destabilization alleles ranked as **TIER proxies** (e.g. Ser152, Asp308).

Buried disease nodes are **not** treated as binder attachment points. Stabilization logic targets **adjacent surface patches**.

---

## What success means here

| Not the goal | Goal |
|--------------|------|
| Binding occupancy / pretty docking | Recovery path toward **catalytic competence** |
| Thermal stability as project title | Tm / ΔΔG as **readouts** |
| “AI fixed the protein” | Honest use of AF (coordinates ≠ stability) |

---

## Key numbers (v1 prototype)

| Bucket | n (approx.) |
|--------|-------------|
| Total variants scored in DB | 797 |
| EXCLUDE | ~210 |
| CAUTION near pocket | ~106 |
| TIER1 proxy (variant-level) | ~146 → **collapse to ≤20 positions for paper body** |
| Face cases | Ser152, Asp308, Tyr108 (+ Arg88 counterexample) |

**AlphaFold Server (WT vs S152I):** global Cα RMSD ~0.37 Å; local pLDDT drop near the module — does **not** prove benignity.

---

## Chemical-engineering lens (signature)

We treat lysosomal enzyme shortage as a **mass-balance / unit-operation** problem:

`translation → ER folding (η_fold) → QC (η_QC) → trafficking (η_traf) → lysosomal inventory × k_cat`

Interventions are **control valves** on specific units. Different fault modes need different modalities. We refuse to merge “clinical frequency,” “thermodynamic blow-up,” and “ligand accessibility” into one false ranking.

---

## Tracks (do not collapse)

- **Track A:** amenability + surface-patch stabilization (main paper claim)  
- **Track B:** neo-pocket / CTSS-style accessibility (parallel critique; disulfide conflicts possible)  
- **Track C:** non-rescue / caution education  

---

## Ask for advisors

1. Is a **classification / triage map** a valid first paper claim without wet residual-activity data?  
2. Are Ser152 / Asp308 appropriate face cases?  
3. What two tasks should dominate the next 90 days?

---

## Non-claims (always attach)

No drug, no clinical amenability list, no ambroxol-as-IDS-therapy, no AF-only pathogenicity ranking, no CNS delivery solution.

**Portal:** https://thilo-yoo.github.io/idsx-lab/  
**Repo:** https://github.com/thilo-yoo/idsx-lab  

---

*One page · print or email attachment*
