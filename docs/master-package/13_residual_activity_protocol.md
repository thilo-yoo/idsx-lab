# 잔존활성 문헌 매트릭스 — 작성 프로토콜

**산출 파일:** `data_derived/residual_activity_matrix_TEMPLATE.csv` (30행 시드)  
**목표:** TIER1 face/body 위치의 `UNKNOWN`을 체계적으로 줄인다.  
**지위:** 문헌 추출. 자체 assay 아님.

---

## 1. 왜 이 작업이 P0인가

PC/샤페론 논리의 **전제 1번**은 잔존 촉매 능력이다.  
구조 triage만으로 “구제 가능”을 말하면 claim 위반이다.  
문헌 매트릭스는 그 전제를 **투명하게 표시**하는 최소 장치다.

---

## 2. 검색 쿼리 키트 (복붙)

### 2.1 일반
```
IDS OR "iduronate-2-sulfatase" OR "iduronate 2-sulfatase" OR "MPS II" OR "Hunter syndrome" mutation residual activity
```

### 2.2 위치 특이 (예: 152)
```
"Ser152" OR "S152" OR "p.Ser152" OR "c.455" IDS Hunter
"Asp308" OR "D308" IDS
"Tyr108" OR "Y108" IDS
```

### 2.3 데이터베이스
- ClinVar (이미 있음) — 기능 데이터 링크 확인  
- PubMed / Google Scholar  
- LOVD / 유전자 특이 DB (있으면)  
- UniProt P22304 variants  

### 2.4 리뷰 우선
MPS II genotype–phenotype, IDS mutation spectrum 리뷰를 **먼저** 읽고 표로 내린 뒤 원저 추적.

---

## 3. 행 채우기 규칙

| 컬럼 | 규칙 |
|------|------|
| residual_activity | `YES` / `NO` / `LOW` / `UNKNOWN` / `CONFLICT` |
| activity_percent_or_qual | 숫자% 또는 “barely detectable”, “comparable to WT” 등 원문 표현 |
| assay_system | 예: patient fibroblast, COS expression, leukocyte, artificial substrate |
| PMID | 필수 (없으면 URL + 접근일) |
| phenotype | neuronopathic / attenuated / intermediate / UNKNOWN |
| trafficking_note | ER retention, secretion 등 원문이 있을 때만 |
| source_notes | 인용 문장 짧은 발췌 (표절 주의, 개인 노트) |

### 판정 가이드
- **YES:** 저자가 residual / measurable activity 명시  
- **LOW:** 검출되나 WT 대비 명확히 감소  
- **NO:** null-like, undetectable  
- **CONFLICT:** 논문 간 불일치 → 양쪽 PMID  
- **UNKNOWN:** 검색 후에도 기능 데이터 없음 (정직한 최종값 가능)

---

## 4. 작업 스프린트 (6시간 패키지)

| 블록 | 시간 | 내용 |
|------|------|------|
| 1 | 90분 | 리뷰 2–3편 → face 3위치 초벌 |
| 2 | 90분 | Ser152 계열 원저 |
| 3 | 90분 | Asp308 + Tyr108 |
| 4 | 60분 | body 469/502/71/485 |
| 5 | 30분 | UNKNOWN 확정 · 버전 날짜 |

완료 정의: face 3 위치의 **모든 TIER1 치환 행**에 residual_activity ∈ {YES,NO,LOW,UNKNOWN,CONFLICT}.

---

## 5. 표와 amenability의 연결

| residual | amenability 해석 |
|----------|------------------|
| YES/LOW | TIER1 유지 · 구제 논리 **시도 가치↑** |
| NO | TIER 유지 가능하나 PC 우선↓ · 지도에 표시 |
| UNKNOWN | proxy only 라벨 고정 |
| CONFLICT | 본문 각주 |

**점수를 residual로 재계산하지 말 것** (버전 변경 없으면).  
별도 컬럼 `rescue_priority_note`만 추가.

---

## 6. 인용 카드 템플릿

```
PMID:
변이:
시스템:
활성 결과:
트래픽킹:
한계(세포수/assay):
IDSX 위치 반영:
```

---

## 7. 윤리
- 환자 식별 정보 금지  
- “이 변이는 치료 가능” 문구 금지  
- 미발표 임상 데이터 사용 시 허가 확인  

---

*템플릿 CSV를 복사해 `residual_activity_matrix_v1.csv`로 저장하며 채운다.*
