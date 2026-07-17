# 논문/보고서 IMRaD 골격 (1편 claim)

**가제 (EN):** Structure-guided triage of IDS missense variants for pharmacological-chaperone amenability using the Hunter syndrome crystal structure 5FQL  

**가제 (KO):** 헌터 증후군 효소 IDS 결정구조 5FQL에 기반한 미스센스 변이의 약리 샤페론 적합성 구조 분류  

**목표 저널 톤:** MGM / JIMD Reports / Proteins / PLOS ONE 급 — 치료 성공 없이 통과 가능한 방법·자원 논문

---

## Title / Authors / Affiliations
- 학부 소속 · 공동지도 공란 · 이해상충 없음

## Abstract (~180 words) — 영어 초안

Iduronate-2-sulfatase (IDS) deficiency causes mucopolysaccharidosis type II. Many alleles are missense changes that may retain latent catalytic capacity if folding and lysosomal trafficking can be improved, motivating pharmacological-chaperone (PC) strategies. Using the 2.3 Å crystal structure of human IDS (PDB 5FQL) and 797 public variants mapped onto experimental coordinates, we annotate solvent accessibility, distance to the catalytic pocket and Ca²⁺ site, disulfide/glycosylation context, and clinical labels. We apply a pre-specified triage that excludes hard-null and catalytic-geometry alleles, flags near-pocket positions (<6.5 Å), and ranks core/surface destabilization alleles as **chaperone-amenability proxies**. Buried sites including Ser152 and Asp308 emerge as high-priority nodes whose **adjacent surface patches**—not the mutated side chains themselves—constitute candidate stabilizer epitopes; Arg88 illustrates that high pathogenicity frequency does not imply binder suitability. We separate structural inference from unmeasured residual activity and transfer success-condition checklists from PC literature without claiming IDS efficacy of non-IDS drugs. This map is a decision layer for subsequent PC and binder campaigns, not a clinical amenability list.

**KO 한 줄:** 약은 안 만들었고, **누구에게 어떤 논리로 시도할 가치가 있는지** 5FQL 위에서 가른 지도다.

---

## 1. Introduction (4단락 골격)

1. MPS II · IDS · 표준 치료(ERT) 한계 · 미스센스 비중  
2. PC 개념 (migalastat amenable logic; GCase–ABX는 **조건 레퍼런스**)  
3. 문제: 빈도 랭킹·docking 중심 접근의 실패 모드; IDS에 구조 triage 지도 부족  
4. 본 연구 기여: 5FQL×797 규칙 기반 amenability proxy + 에피토프 분리 원칙 + 공개 자원

**마지막 문장 claim:** We provide a reproducible structure-guided triage…  
**넣지 말 것:** we designed a therapeutic binder / rescued activity

---

## 2. Methods

### 2.1 Structure and variant assembly
- 5FQL, UniProt P22304, ClinVar 병합, 번호 체계 (34–550 등 명시)

### 2.2 Structural annotations
- RSA, SS, dist catalytic, Ca, disulfide, glyco  
- 실측 vs 추론 라벨

### 2.3 Pre-registered triage rules
- Hard EXCLUDE H1–H6  
- CAUTION <6.5 Å  
- Score 0–10 components  
- Tier cuts **사전 고정** (결과 본 뒤 변경 금지 — 변경 시 version)

### 2.4 Position collapse
- 위치 단위 집계 규칙 (문서 10)

### 2.5 Case studies
- Ser152, Asp308, Tyr108, Arg88  
- (보충) AF Server 해석 규율 — 본문 짧게, 보충 길게

### 2.6 Non-claims / limitations subsection
- residual activity not measured  
- forcefield scores not clinical  

### 2.7 Data availability
- sheets, scripts, portal URL

---

## 3. Results

### 3.1 Funnel counts
EXCLUDE / CAUTION / TIER1–3 / NEG (숫자 표)

### 3.2 Landscape plots
- dist vs RSA, score vs dist  
- Ser152/308/88 하이라이트

### 3.3 Position collapse Top N table
- 문서 10 표

### 3.4 Face cases
- Ser152 구조 수치 (RSA, H-bond, ΔV)  
- Asp308 정전기  
- Tyr108 경계  
- Arg88 반례

### 3.5 (Optional short) AF concordance
- RMSD 0.37 Å, pLDDT drop — **해석 규율 동반**

### 3.6 (Optional) Energy lens sensitivity
- EvoEF2/CTSS는 **별 렌즈** — Track B와 혼동 없이 “sensitivity analysis”로만

---

## 4. Discussion

1. 맵의 의미: decision layer  
2. 변이≠결합 자리  
3. 빈도≠적합성  
4. PC 성공 조건 이식 (체크리스트)  
5. IDS-native 문헌 (Hoshina, Demydchuk)  
6. 한계: residual, dynamics, CNS  
7. 다음: 문헌 매트릭스, ΔΔG 교차, 패치 파일럿  

---

## 5. Figures / Tables plan

| ID | 내용 |
|----|------|
| Fig1 | 5FQL + 촉매/이황화/안전권 hotspot |
| Fig2 | 필터 깔때기 |
| Fig3 | 산점도 dist–RSA–score |
| Fig4 | Ser152 모듈 + 표면 패치 |
| Fig5 | 모달리티 트리 |
| Table1 | Position collapse top 12–20 |
| Table2 | Face 변이 상세 |
| Suppl | 전량 점수, 규칙 전문, AF, 실패 모드 |

---

## 6. 작성 순서 (시간 절약)

1. Methods 2.3–2.4 (규칙 복붙 가능)  
2. Results 3.1–3.4  
3. Figures  
4. Introduction  
5. Discussion  
6. Abstract 최종 검열 (동사)

---

## 7. 금지 단어 리스트 (셀프 검열)

rescue (실험 전), cure, drug candidate confirmed, ambroxol treats Hunter, AF proves pathogenicity, TIER1 patients should receive…

**허용:** prioritize, triage, proxy, candidate epitope, hypothesis, decision layer

---

*골격만으로도 자문에 “1편이 무엇인지” 보여줄 수 있다.*
