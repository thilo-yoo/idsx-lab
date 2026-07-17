# IDSX 데이터 사전 (Data Dictionary)

**목적:** 컬럼·용어·파일 간 조인 키를 고정해 재현성과 협업 오류를 줄인다.

---

## 1. 식별 키

| 키 | 정의 | 주의 |
|----|------|------|
| `position` | UniProt P22304 아미노산 번호 | PDB 5FQL과 정렬 확인 |
| `HGVS_protein` | p.RefPosAlt | 중복 행 가능 → ClinVar_id로 해소 |
| `HGVS_cdna` | c. 표기 | 152 계열 정리 숙제 |
| `Mutation` (EvoEF2/CTSS) | 예: S152I | position+WT+Alt 파싱 |
| `model_res` (AF) | AF 모델 잔기 번호 | UniProt = model+33 (34–550 입력 시) |

---

## 2. 구조 주석 필드

| 필드 | 단위 | 의미 |
|------|------|------|
| `RSA_pct` | % | 상대 용매 접근성 |
| `core_surface` | cat | 코어/표면 분류 |
| `dist_to_catalytic_pocket_A` | Å | 촉매 포켓 거리 |
| `is_catalytic_residue` | bool | 촉매 기하 |
| `is_direct_Ca_ligand` | bool | Ca 배위 |
| `is_disulfide_cys` | bool | 이황화 Cys |
| `is_glycosylation_site` | bool | N-글리코 사이트 |
| `ss` / DSSP | code | 이차구조 |

---

## 3. Amenability 필드

| 필드 | 값 | 의미 |
|------|-----|------|
| `amenability_score` | 0–10 | 규칙 v1 합산 |
| `amenability_tier` | TIER1/2/3/CAUTION_POCKET/EXCLUDE/NEG_CTRL | 버킷 |
| `score_version` | v1.0-2026-07-11 | 규칙 동결 ID |
| `epitope_count` | int | 10Å·RSA≥25% 개수 |
| `modality` | binder_… / sm_… / none | 모달리티 힌트 |

---

## 4. 에너지·CTSS 필드

| 필드 | 의미 | 한계 |
|------|------|------|
| `ddG` | EvoEF2 ΔΔG (kcal/mol), + = 불안정 | 실험 ΔΔG 아님 |
| `Mutant_SASA` | 변이 모델링 후 SASA | 프로토콜 의존 |
| `Hydrophobicity_Multiplier` | CTSS 가중 | 휴리스틱 |
| `CTSS` | 접근성 휴리스틱 점수 | 구제 점수 아님 |

---

## 5. 문헌 매트릭스 필드

| 필드 | 허용 값 |
|------|---------|
| `residual_activity` | YES/NO/LOW/UNKNOWN/CONFLICT |
| `PMID` | 정수 또는 비움 |
| `assay_system` | 자유 텍스트 통제 어휘 권장 |

---

## 6. 파일 맵

| 파일 | 키 | 행 개념 |
|------|-----|---------|
| Mutation structural DB xlsx | position+HGVS | 변이 |
| Amenability prototype | 동 | 변이 |
| Position hotspots | position | 위치 |
| full_ddg_results.csv | Mutation | 변이 |
| comprehensive_ctss_results.csv | Mutation | 변이 |
| focus_multimetric.csv | Mutation | 선별 변이 |
| position_collapse_top20.csv | position | 위치 |

---

## 7. 조인 레시피

```
amenability (variant) 
  --group by position--> position_collapse
ddG/CTSS (Mutation=S152I)
  --parse position 152--> join position_collapse
literature matrix
  --on position+HGVS--> amenability
```

---

## 8. 결측·UNKNOWN 정책

- 구조 미해석: EXCLUDE  
- residual 공백: **UNKNOWN** (0으로 채우지 않음)  
- epitope_count 공란: 설계 전 재계산  

---

*사전 없는 숫자는 논문에 넣지 않는다.*
