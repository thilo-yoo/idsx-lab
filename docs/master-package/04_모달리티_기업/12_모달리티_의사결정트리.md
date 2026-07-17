# 모달리티 의사결정 트리

**용도:** 변이 하나 / 위치 하나를 받았을 때 **어느 트랙으로 보낼지** 30초–2분 판정  
**입력:** 5FQL 주석 + amenability 규칙 v1 + (가능 시) 잔존활성 문헌

```
START: 변이/위치 X
│
├─ [Q0] 단백질 산물 없음?
│     (fs, stop, canonical splice, large del)
│     YES → EXCLUDE · 샤페론 무의미 · ERT/GT 서사만
│     NO  ↓
│
├─ [Q1] 결정구조에서 resolve?
│     NO → EXCLUDE/보류 (5FQL 주장 불가)
│     YES ↓
│
├─ [Q2] 촉매 잔기 / Ca 직접 리간드 / 이황화 Cys 파괴형?
│     YES → EXCLUDE (또는 Track B 별도 가설 파일 ONLY)
│     NO  ↓
│
├─ [Q3] dist_to_catalytic_pocket < 6.5 Å ?
│     YES → CAUTION_POCKET
│           ├─ 잔존활성 문헌 YES → 소분자 inhibitory PC 트랙 검토
│           │     (억제–해리 창 필수 · 바인더 1순위 금지)
│           └─ 잔존활성 UNKNOWN/NO → 우선순위 낮춤 · 교육용 반례 가능
│     NO  ↓
│
├─ [Q4] amenability_score (규칙 v1)
│     ≤3 → TIER3 · 비우선
│     4–6 → TIER2 · 탐색
│     ≥7 → TIER1 후보 ↓
│
├─ [Q5] RSA < 10% (매장 코어) ?
│     YES → 바인더 직접 결합 금지
│           → 인접 표면 에피토프 존재하는가? (n≥4 권장)
│                 YES → Track A: 표면/알로스테릭 안정화
│                 NO  → Track A-weak: 소분자 allosteric 탐색 또는 재설계 연구용
│     NO (표면) → 표면 불안정 / 응집 논리
│                 → 패치 품질 카드 후 바인더 or 소분자
│
├─ [Q6] (선택) CTSS/SASA 높고 변이 자체 노출?
│     YES → Track B 검토 큐 (1편 본선 아님)
│           → 이황화? YES → 충돌 문서 필수
│     NO  → Track B 비대상
│
└─ [Q7] 잔존활성 문헌
      YES known residual → 구제 논리 강화 (여전히 실험 전)
      NO / UNKNOWN → “proxy only” 라벨 유지
```

---

## 한 장 요약 표

| 판정 | 다음 행동 | 말하지 말 것 |
|------|-----------|--------------|
| EXCLUDE | 맵에 배제 표시 | 샤페론 후보 |
| CAUTION | 소분자 PC 조건 검토 only | 바인더 1순위 |
| TIER1 + 매장 + epi≥4 | 패치 사양 → (게이트 후) 설계 | 152에 붙인다 |
| TIER1 + 표면 | 패치 품질 카드 | 무조건 약 된다 |
| Track B 큐 | QC·EXCLUDE 화해 | 최종 타겟 확정 |
| UNKNOWN residual | 문헌 매트릭스 우선 | rescue 동사 |

---

## 워크 예제

| 입력 | 경로 | 출력 |
|------|------|------|
| p.Ser152Ile | Q0N Q1Y Q2N Q3N Q4≥7 Q5Y epi11 Q6N Q7U | **Track A face** · residual 조사 |
| p.Arg88Cys | Q3Y | **CAUTION** · 바인더 금지 |
| p.C422F | Q2Y(이황화) | **EXCLUDE 기본** + Track B 파일 분리 |
| p.Tyr108Cys | Q3N Q4 high Q5 경계 epi14 | **Track A face_3** |
| null fs | Q0Y | EXCLUDE |

---

## 자동화 의사코드

```text
function assign_track(v):
  if is_null(v): return EXCLUDE
  if not in_crystal(v): return EXCLUDE
  if catalytic or ca_ligand or disulfide_break(v): return EXCLUDE
  if dist(v) < 6.5: return CAUTION_POCKET
  s = amenability_score(v)
  if s >= 7 and RSA(v) < 10 and epitope_n(v) >= 4: return TRACK_A_BINDER
  if s >= 7 and RSA(v) >= 10: return TRACK_A_SURFACE
  if s >= 4: return TIER2
  return TIER3
```

---

*트리는 속도를 위한 것이지, 잔존활성 문헌을 대체하지 않는다.*
