# 위치 단위 Collapse — 논문 Table 후보 (Top 20)

**버전:** v1.0-draft · 2026-07-17  
**원천:** `IDS_Chaperone_Amenability_Prototype_v1.xlsx` → `03_Position_Hotspots`  
**CSV:** `data_derived/position_collapse_top20.csv`  
**지위:** 구조 프록시. 잔존활성·치료 적합성 실측 아님.

---

## 0. Collapse 규칙 (사전등록)

1. 단위 = **아미노산 위치** (UniProt/5FQL 번호).  
2. 같은 위치의 missense 중 **TIER1 개수** `n_TIER1` 로 1차 정렬.  
3. 동점 시 `max_score` ↓, 그다음 `epitope_count` ↓.  
4. null/fs/stop은 위치 hotspot 합산에 **넣지 않음** (EXCLUDE 별도).  
5. 본문 강조: **face 3 + body ≤12 + caution 교육 1** 권장.  
6. 부록: `position_collapse_all_TIER1_positions.csv` 전체.

---

## 1. Top 20 표 (본문/부록 후보)

| rank | pos | WT | n_TIER1 | max | dist(Å) | RSA% | epi n | 논문 역할 | 모달리티 힌트 |
|-----:|----:|:--:|--------:|----:|--------:|-----:|------:|-----------|---------------|
| 1 | 152 | S | 5 | 10 | 10.27 | 0 | 11 | **face_1** | 인접 에피토프 바인더 |
| 2 | 469 | P | 4 | 10 | 12.02 | 5.7 | 10 | body | 인접 에피토프 |
| 3 | 308 | D | 4 | 10 | 10.87 | 0 | 6 | **face_2** | 인접 에피토프·정전기 |
| 4 | 108 | Y | 4 | 9 | 8.11 | 6.8 | 14 | **face_3** | 인접 에피토프 (풍부) |
| 5 | 502 | W | 4 | 9 | 9.29 | 0.4 | 11 | body | 방향족/패킹 |
| 6 | 480 | P | 4 | 9 | 9.76 | 0.6 | 9 | body | Pro 계열 |
| 7 | 485 | I | 3 | 10 | 12.91 | 0.5 | **17** | body | 에피토프 최다군 |
| 8 | 95 | R | 3 | 10 | 10.64 | 0.4 | 11 | body | |
| 9 | 493 | R | 3 | 10 | 13.53 | 5.8 | 11 | body | |
| 10 | 521 | E | 3 | 10 | 11.78 | 2.7 | 11 | body | |
| 11 | 71 | S | 3 | 10 | 17.09 | 0 | 8 | body | Ser71 — 152와 유사 패턴 |
| 12 | 102 | L | 3 | 9 | **6.81** | 0 | 10 | body_border | 컷오프 근접 재검토 |
| 13 | 340 | G | 3 | 9 | 9.44 | 0 | 10 | body | |
| 14 | 342 | H | 3 | 9 | 9.91 | 0.9 | 10 | body | |
| 15 | 465 | Q | 3 | 9 | 9.0 | 6.7 | **4** | body | 에피토프 빈약 |
| 16–20 | 61,64,120,121,196… | — | 2 | 8 | ≥10 | — | 부분 | supplement | 자동 순위 |

**교육용 반례 (본문 figure, TIER1 아님):** Arg88 · dist 2.77 · CAUTION_POCKET.

---

## 2. Face 케이스 변이 리스트 (중복 HGVS 정리 필요)

### Ser152
| HGVS | ClinVar (시트) | score |
|------|----------------|------:|
| p.Ser152Ile | Pathogenic | 10 |
| p.Ser152Asn | Pathogenic | 10 |
| p.Ser152Arg | Pathogenic | 10 |
| c.454A>T | (라벨 공란 행) | 9 |

→ **숙제:** c.454A>T ≡ 어느 단백질 치환인지 ClinVar_id로 병합, Arg 중복 행 제거.

### Asp308
p.Asp308Glu / Gly / His / Asn — 점수 10대.

### Tyr108
p.Tyr108Cys / Asp / Ser (9) · His VUS (7).

### 신규 body 우선 관찰
- **Pro469, Pro480, Trp502** — 얼굴 3 다음 문헌 매핑 우선.  
- **Ile485** — epi 17, 설계 손잡이 풍부.  
- **Ser71** — Ser→I/N/R 패턴이 152와 유사 → 모듈 일반화 논거.

---

## 3. 본문 배치 제안

| 섹션 | 위치 |
|------|------|
| Fig main | 152, 308, 108 + Arg88 반례 |
| Table 1 | rank 1–12 (또는 1–15) |
| Suppl Table | 전 TIER1 위치 CSV |
| Discussion | 469/502/71 “왜 face가 아닌가” 한 단락 (데이터 깊이 차이) |

---

## 4. 아직 비어 있는 열 (채우면 Table이 논문급)

- `residual_activity_lit` — 전원 UNKNOWN → `11` 매트릭스  
- 표현형 neuro/attenuated  
- ΔΔG (위치 대표 치환 1개)  
- Track 태그 (A/B/C)

---

*Collapse는 후보를 줄이는 작업이지, 구제를 약속하는 작업이 아니다.*
