# IDSX 연구 연대기 · 사고 궤적 상세 기록

**문서 지위:** 개인 기록 + 자문 전달용 원문 (과도한 요약 금지)  
**표적:** Iduronate-2-sulfatase (IDS) · UniProt P22304 · PDB 5FQL · Hunter / MPS II  
**작성 기준일:** 2026-07-17  
**대응 프레젠테이션:** `IDSX_Master_Advisor_Presentation.key` / `.pptx`  
**원천 자료 루트:** `Desktop/IDSX/`, `Desktop/idsx-lab/`

---

## 이 문서를 쓰는 이유

바탕화면과 `IDSX/` 폴더에는 이미 방대한 산출물이 있다. 문제는 **내용의 부재**가 아니라 **개발 과정·논리 선택·현재 상태·앞으로의 계획**이 한 서사로 묶이지 않았다는 점이다. 기존 키노트·PDF 일부는 시각적으로 존재하나, 다음이 부족했다.

1. **무엇을 버리고 무엇을 남겼는지** (사고의 갈림길)
2. **어느 층이 단단하고 어느 층이 가설인지** (강도 맵)
3. **Track A(amenability·모듈·표면)와 Track B(ΔΔG·CTSS·neo-pocket)의 긴장** (정직한 병행)
4. **화학공학 전공자로서의 문제 정의** (공정·수지·결함 모드)
5. **자문·협업 상대에게 넘길 수 있는 구체 계획**

이 문서는 위 다섯을 **요약으로 뭉개지 않고** 시간순·논리순으로 고정한다.

---

## 0. 한 페이지 압축 (네비게이션용 — 본문은 아래에서 풀림)

| 축 | 현재 상태 |
|----|-----------|
| **질문** | 변이 IDS가 기능 가능 구조를 얼마나 유지·회복할 수 있는가 |
| **성공 정의** | binding occupancy가 아니라 **catalytic competence** |
| **연구 단위** | 개별 잔기 라벨이 아니라 **구조 상호작용 네트워크(모듈)** |
| **1편 claim 후보** | 5FQL 기반 미스센스 **샤페론 적합성 triage 맵** (치료 성공 아님) |
| **얼굴 케이스** | Ser152 (코어 모듈) · Asp308 · 반례 Arg88 |
| **계산 현황** | AF: WT≈S152I fold · 모듈 pLDDT↓ · EvoEF2 ΔΔG · CTSS |
| **공개층** | idsx-lab 포털 · Advisor Briefing Package |
| **미완** | 잔존활성 실측 · RFdiffusion 본실행 · 구제 증명 |
| **다음** | ΔΔG 교차 · 잔존활성 문헌표 · 한 트랙 파일럿 게이트 |

---

## 1. 출발 직관 (왜 IDS인가)

### 1.1 관심의 원천

- 리소좀 축적 질환(LSD), 구조생물학, 단백질 설계에 대한 관심
- 구체 표적으로 **인간 IDS 결정구조 5FQL**을 고정
- 직관: 기질(GAG)이 안 깨지는 이유 중 상당수는 “효소가 화학적으로 존재하지 않음”만이 아니라, **변이 효소가 접히지 못하거나 리소좀에 도달하지 못함**일 수 있다

### 1.2 화학공학적 재서술 (이 프로젝트만의 렌즈)

화학공학에서 플랜트 이상을 다룰 때 하는 일과 대응시킨다.

| 화학공학 | IDSX 대응 |
|----------|-----------|
| 물질수지 (mass balance) | 기능 IDS 분자: 합성 − ERAD − 미배달 = 리소좀 재고 |
| 단위공정 흐름도 | ER 접힘 → ERQC → 골지/M6P → 리소좀 반응기 |
| 결함 모드(fault tree) | 촉매 kill / 코어 불안정 / 포켓 인접 / PTM·트래픽킹 |
| 열역학·에너지 수지 | ΔΔG · 패킹·H-bond 네트워크 교란 |
| KPI 계층 | 최종 = competence · 중간 = ER 통과 · 대리 = Tm/KD |
| 스케일업 윤리 | 계산 → 파일럿 → 검증 게이트 없이 플랜트(대량 RFdiffusion) 금지 |
| 스펙 vs 운전창 | 서열 스펙 vs 접힘 운전 조건(pH, 샤페론 점유) |

이 렌즈의 함의: **측정 활성 저하 = 반드시 k_cat = 0이 아니다.** 분자 수 유량의 붕괴만으로도 활성은 급감할 수 있다.

### 1.3 초기에 의식적으로 거부한 길

| 유혹 | 위험 | 선택 |
|------|------|------|
| AI 단백질 설계 플랫폼부터 구축 | 질문 없는 도구 수집 | 단일 단백질·단일 질병 고정 |
| RFdiffusion 선실행 | 예쁜 복합체 ≠ 생물학 | 변이–구조 분류·적합성 규칙 선행 |
| 암브록솔을 IDS에 직적용 | 표적 효소 상이 (GCase vs IDS) | 성공 **조건**만 레퍼런스로 이식 |
| 병원성 빈도 = 설계 우선순위 | null·촉매파괴도 빈도 높을 수 있음 | Hard EXCLUDE + amenability 점수 |
| 매장 잔기(Ser152)에 바인더 “부착” | RSA 0%면 접힌 상태에서 결합면 아님 | **인접 표면 에피토프** 원칙 |

---

## 2. 개발 연대기 (산출물 단위로 풀어 씀)

### Phase 0 — 표적 고정과 자료 확보

- `5FQL.pdb` 확보 및 Demydchuk et al. 2017 (PMID 28593992) 맥락 확인
- UniProt P22304, ClinVar 기반 변이 원천 수집
- 촉매 잔기·Ca 배위·이황화·글리코실화 등 **실측 구조 앵커** 정의

**이 단계에서 확정된 것:** “무엇을 설계할까”보다 “어떤 구조 좌표계 위에 변이를 올릴까”.

### Phase 1 — 변이–구조 데이터베이스 (797)

산출물: `IDS_P22304_Mutation_Structural_Database.xlsx`

주요 시트 논리:

- Mutation_Master: HGVS/ClinVar/dbSNP 등 원본
- Structural_Annotation: RSA, 이차구조, 촉매포켓 거리, Ca/이황화/글리코 플래그
- Structural_Classification: 구조 결함 범주 + 근거 + 신뢰도 라벨
- AI_Rescue_Assessment: 이후 구조/서열/바인더 적합성 평가 자리

**방법론 원칙:** 실측 좌표 기반 값과 전산 추론을 구분하는 라벨을 유지 (README_Methodology 정신).

### Phase 2 — Binder shortlist (안전권 / 주의권)

산출물: `IDS_Chaperone_Binder_Target_Shortlist.xlsx`, `IDS_Chaperone_Binder_RD_Roadmap.md`

- Core destabilization 후보 축출 후, 동일 위치 병원성 반복을 hotspot 신호로 사용
- **촉매포켓 6.5 Å** 컷오프: ≥6.5 안전권, <6.5 주의권
- 최우선 논의: **Ser152, Asp308, Tyr108, Pro469** 등
- **Arg88 (2.77 Å)** 는 빈도 높아도 주의/배제 — “빈도 ≠ 적합성” 교육용 반례로 격상

에피토프 정의(당시): 표적 잔기 10 Å 이내 RSA≥25% 잔기 집합.

### Phase 3 — Amenability 재필터 (규칙 v1) — 프로젝트의 학술 claim 축

산출물:

- `IDS_Chaperone_Amenability_Rules_Claim_Ambroxol_v1.md`
- `Advisor_Briefing_Package/IDS_Chaperone_Amenability_Prototype_v1.xlsx`

**shortlist와의 결정적 차이:**

| 이전 shortlist | amenability v1 |
|----------------|----------------|
| 위치 빈도 중심 | **개별 변이** 단위 점수 |
| hotspot ≈ 붙일 자리로 읽힐 위험 | **변이 자리 ≠ 결합 자리** 강제 |
| 바인더 안전권 중심 | 소분자 PC / 바인더 / 비구제 **3갈래** |

Hard EXCLUDE 예: frameshift/stop, 촉매 잔기, Ca 리간드, 이황화 Cys, 구조 미해석, benign(음성 대조로 분리).

점수 축: 구조 범주 + 임상 라벨 + 촉매 이격 + RSA + 에피토프 가용성 − 패널티.

러프 적용 결과(경향): EXCLUDE ~210–231, CAUTION ~106, TIER1 proxy ~146–163, TIER2 ~227–244.

**해석 규율 (문서에 이미 박혀 있음):** TIER1 n ≠ 치료 후보 n. 위치 collapse + 잔존활성 문헌으로 축소. 1편 강조는 15–30 위치 + 심화 2–3개.

### Phase 4 — Ser152 모듈 기전 전수 검토

산출물: `Ser152Ile_Mechanism_Review/` 전체 (기전 문서 + Fig1–4)

구조 앵커 (5FQL):

- RSA **0%**, 촉매거리 **10.27 Å**
- Ser-OH H-bond: Asp148 ~2.53 Å, Thr118 ~2.85 Å
- Ser→Ile 부피 ≈ +77.7 Å³, 소수성 증가

기전 개연성 순위(요지, 상세는 원문):

1. 측쇄 부피/패킹  
2. H-bond 네트워크 상실  
3. 소수성·극성 불일치  
4. 열역학 불안정  
5–6. ERQC / ERAD (클래스 문헌)  
하류: 성숙·배달 실패 → 측정 활성 저하

**환자·비전문가 문장 (과신 금지):**  
“칼날이 부러졌다”기보다 “공장에서 조립이 안 되어 폐기·미배달”에 **가깝다고 읽을 구조적 이유**가 있다. 개인 잔존활성은 UNKNOWN.

### Phase 5 — AlphaFold Server와 해석 규율

산출물: `fold_ids_wild_type/`, `fold_s152i_ids/`, `AF2_runs/AF3_analysis/00_AF3_WT_vs_S152I_분석보고서.md`

핵심 수치:

| 지표 | 값 |
|------|-----|
| Global Cα RMSD WT vs S152I | ~0.372 Å |
| pTM | 0.97 vs 0.96 |
| pLDDT U152 | 98.8 → 84.2 |
| 창 U110–160 mean pLDDT | 98.15 → 91.38 |

**지지하는 것:** 접힌 native-like 좌표는 양쪽에 존재 가능. “모델이 붕괴로 그려진다” 유형은 아님.  
**기각하지 못하는 것:** ERAD, ΔΔG, 잔존활성, 배달.  
**금지 해석:** RMSD 작다 = 무해 / pLDDT 높다 = 치료 불필요.

#### 사고의 전환 — AF 한계 인식

문서: `Advisor_Briefing_Package/07_AlphaFold_한계점과_패러다임_전환.md`

핵심: AF는 점 돌연변이 붕괴를 MSA 합의 fold로 덮을 수 있다. 물리학 ΔG 엔진이 아니다.  
→ hotspot 검증 중심축을 **backbone RMSD 비교**에서 **구조 주석 + 열역학 + 세포 전제**로 이동.

이 전환은 “AF를 돌려 실패한 경험”이 아니라 **도구 작동 원리를 이해한 뒤의 방법론 선택**으로 기록한다.

### Phase 6 — EvoEF2 ΔΔG · CTSS · neo-pocket (Track B의 등장)

산출물: `ddG_results.md`, `thermodynamic_analysis.md`, `final_target_selection.md`, `chaperone_strategy.md`, `ctss_scatter.png`, `c422f_pocket.png`, `presentation_slide_deck.md`

EvoEF2 일부:

| 변이 | ΔΔG (kcal/mol) |
|------|----------------|
| C422F | +121.62 |
| C184W | +111.32 |
| S152I | +46.02 |
| … | … |

CTSS 논리: 불안정성만이 아니라 **표면 노출(SASA) × 소수성**을 곱해 “약물이 물리적으로 접근 가능한 틈”을 본다.  
그 렌즈에서 C422F/Y가 상위로 뜨고, S152I·C184W는 SASA≈0으로 “직접 소분자 타겟”에서는 불리하게 읽힌다.

#### 반드시 남길 긴장 (Track A vs Track B)

| | Track A | Track B |
|--|---------|---------|
| 질문 | 누구에게 구제 **논리**를 시도할 가치가 있는가 | 어느 변이가 **소분자 클램프**에 유리한 neo-pocket을 만드는가 |
| 대표 | Ser152 모듈 + 표면 패치 | C422F/Y 등 |
| 위험 | 매장 노드에 직접 결합 착각 | 이황화 파괴형은 amenability Hard EXCLUDE와 충돌 가능 |
| 상태 | 1편 claim 축에 가깝 | 탐색·파일럿 후보, 규칙과 화해 필요 |

**연구 원칙:** 두 트랙을 한 문장의 치료 스토리로 포장하지 않는다. 결함 모드가 다르면 모달리티와 성공 기준이 다르다.

### Phase 7 — 공개 층 · 자문 층 · 웹 포털

- `Advisor_Briefing_Package/` (한페이지 브리핑, 고민 궤적, 질문지, 이메일 초안, Table1 미리보기)
- `idsx-lab` GitHub Pages: framework, module-case, compute, AF catalog/structures, ambroxol reference, notebook
- 용어 통일: Hotspot ≠ Epitope ≠ RF interface hotspot
- 암브록솔·열안정 논의 정리: 열안정은 **온도계**, 목표는 **네트워크 → competence**

### Phase 8 — 본 마스터 패키지 (2026-07-17)

목적: 흩어진 자료를 **개발 과정 + 논리 + 현황 + 계획**으로 재조립하여 교수·전문가 자문과 개인 기록이 동시에 가능하게 함.

---

## 3. 로직 프레임 (전문 — 축약하지 않음)

### 3.1 4단 추론

1. 효소는 잔기 집합이 아니라 **구조 네트워크** 위에서 기능한다.  
2. 일부 미스센스는 활성부위를 부수기보다 **코어 패킹·H-bond**를 흔든다.  
3. 접힘·ERQC·배달이 깨지면 측정 활성은 **분자 수 손실**만으로도 급감할 수 있다.  
4. 개입은 고장 노드에 직접 붙이지 말고, **연결된 표면**을 안정화해 **competence**를 본다.

### 3.2 성공의 계층

```
[최종] 리소좀 competence (분자 수 × 활성)
   ↑
[세포] ERQC 통과 · 배달 ↑ / ERAD ↓
   ↑
[분자] interaction network 유지
   ↑
[대리] Tm, ΔΔG, KD, 성숙 밴드, 국재 …
```

### 3.3 암브록솔의 올바른 위치

- IDS 치료제 **아님**
- GCase에서 보고된 **ER 안정화 → 트래픽킹 → 활성** 서사의 **성공 조건 체크리스트 레퍼런스**
- docking ≠ 기능 사례(D2S0 등)를 한계 섹션의 핵심으로 유지

### 3.4 용어

| 용어 | 의미 | 아닌 것 |
|------|------|---------|
| Hotspot/TIER1 | 구제 논리를 시도할 가치가 있는 구조 노드 | 결합 자리, “약 된다” |
| Module | 노드+이웃 네트워크 | 단일 잔기 숭배 |
| Epitope/패치 | 바인더가 닿을 표면 손잡이 | 변이 잔기 자체 |
| Amenability proxy | 구조 규칙 점수 | 잔존활성·임상 반응 |
| Competence | 기능 구조 회복 | 결합 occupancy |
| Tm | 대리 지표 | 프로젝트 제목 |

---

## 4. 현재 개발 상태 체크리스트

### 완료에 가까운 것

- [x] 표적·구조 좌표계 고정 (P22304 / 5FQL)
- [x] 797 변이–구조 DB
- [x] shortlist + amenability 규칙 v1 + 프로토타입 시트
- [x] Ser152 기전 전수 및 시각 자료
- [x] AF WT vs S152I (+ multi-hotspot 일부)
- [x] EvoEF2 ΔΔG 패널 및 CTSS 탐색
- [x] 자문 패키지·공개 포털·claim/non-claim 문서화
- [x] 마스터 프레젠테이션·연대기·플랜 패키지 (본 작업)

### 의도적으로 아직 안 한 것

- [ ] 잔존 활성 wet assay 패널
- [ ] 세포 트래픽킹/ERAD 실측
- [ ] RFdiffusion 본실행 및 실험 바인더
- [ ] 치료 claim
- [ ] 환자 대상 처방 안내

### 다음에 열 게이트 (하나만 깊게)

우선순위 후보 (자문 전 추천):

1. **FoldX/Rosetta ΔΔG** (S152I 등) — 네트워크 불안정 숫자  
2. **잔존활성 문헌 표** — 생물 전제  
3. **표면 패치 확정 + 성공 기준 사전등록** — 설계 전 질문 고정  

하지 말 것: 전 변이 설계 대량 생산, 암브록솔 IDS claim, AF만으로 결론.

---

## 5. 유의미성 (왜 이 기록이 필요한가)

1. **과학:** PC 캠페인 실패 모드의 상당 부분은 “누구에게 시도할지”의 사전 분리 부재. triage 맵은 그 의사결정 층.  
2. **방법:** MSA-AI 착시를 문서화하고 열역학·구조 주석으로 이동한 궤적 자체가 학습 산출물.  
3. **소통:** 환자·가족·비전공 동료에게 “칼날 vs 배달”을 구조 언어로 설명.  
4. **전공 정체성:** 화학공학의 공정·수지·결함 모드 사고가 단백질 질병 연구에 이식됨.  
5. **협업 준비:** 랩에 들어갈 때 “아이디어 한 줄”이 아니라 **critique 가능한 패키지**를 들고 감.

---

## 6. 리스크 레지스터 (상세)

1. ClinVar 라벨 노이즈 → 병원성 가점 오류  
2. Core destabilization 규칙 ≠ 실측 ΔΔG  
3. 에피토프 개수 ≠ 결합 가능 패치 품질  
4. 리소좀 산성 pH·프로테아제에서 바인더 전략 붕괴  
5. 신경형 MPS II 전달 문제 → 치료 overclaim  
6. 계산만 축적 시 리뷰어 불신  
7. Track A/B 혼동 및 EXCLUDE 규칙 충돌  
8. 6.5 Å 컷오프의 자의성 (작업값이지 자연법칙 아님)

---

## 7. 자문용 고정 세 문장

1. 우리는 IDS 미스센스를 독립 라벨이 아니라 **기능 구조를 떠받치는 네트워크의 교란**으로 읽는다.  
2. Ser152 계열은 촉매 자리가 아니라 **코어 모듈 사례**이며, 개입은 변이 원자가 아니라 **인접 표면 패치**를 향한다.  
3. 성공은 결합이 아니라 **catalytic competence**이며, 현재 구조·계산은 우선순위를 주지만 **구제 증명 전**이다.

---

## 8. 원천 파일 색인 (깊이 파고들 때)

| 목적 | 경로 |
|------|------|
| 로직 나침반 | `IDSX/IDSX_한눈에_로직맵_다음스텝.md` |
| 규칙·claim | `IDSX/IDS_Chaperone_Amenability_Rules_Claim_Ambroxol_v1.md` |
| 사고 궤적 | `IDSX/Advisor_Briefing_Package/02_고민의_궤적_논리메모.md` |
| 질문지 | `IDSX/Advisor_Briefing_Package/03_교수_학자_질문지.md` |
| Ser152 | `IDSX/Ser152Ile_Mechanism_Review/00_Ser152Ile_분자기전_전수검토.md` |
| AF | `IDSX/AF2_runs/AF3_analysis/00_AF3_WT_vs_S152I_분석보고서.md` |
| ER·ABX | `IDSX/IDSX_대화정리_안정성_ER_암브록솔_2026-07-11.md` |
| AF 한계 | `IDSX/Advisor_Briefing_Package/07_AlphaFold_한계점과_패러다임_전환.md` |
| 로드맵 | `IDSX/IDS_Chaperone_Binder_RD_Roadmap.md` |
| 포털 | https://thilo-yoo.github.io/idsx-lab/ |
| 본 패키지 | `Desktop/IDSX_Master_Package_2026/` |

---

## 9. 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-07-09~12 | DB·shortlist·규칙·Ser152·AF·자문패키지·웹 구축 (원 폴더) |
| 2026-07-13 전후 | ΔΔG·CTSS·C422 시각화 층 추가 |
| 2026-07-16 | idsx-lab 배포 정리 |
| 2026-07-17 | 마스터 연대기·플랜·Advisor 프레젠테이션 패키지 작성 |

---

*이 문서는 “끝난 연구의 초록”이 아니라 “진행 중인 연구의 항해일지”이다. 새 도구를 쌓기 전에, §4 체크리스트에서 한 칸만 전진한다.*
