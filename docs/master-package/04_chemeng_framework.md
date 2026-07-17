# IDSX × 화학공학 접목 프레임 (심화)

**문서 지위:** 신규 분석·방향 설정용 심화 노트 (2026-07-17 자율 분석 세션)  
**목적:** 화학공학 전공 정체성을 “비유 한 줄”이 아니라 **설계 가능한 정량 프레임**으로 끌어올린다.  
**전제:** 치료 claim 없음. 공정 모델은 사고·우선순위 도구이지 임상 예측기가 아니다.

---

## 0. 왜 화학공학인가 (정당화)

단백질 질병을 의·약학만의 언어로 두면, 학부 연구자는 실험 인프라 부재 시 **서술만 늘리게** 된다.  
화학공학은 이미 다음을 다룬다.

| 화공 개념 | 단백질 질병 대응 | IDSX에서의 쓰임 |
|-----------|------------------|-----------------|
| 물질수지 | 기능 효소 분자 수 | assay 활성 = 유량 KPI |
| 단위공정 | ER→QC→골지→리소좀 | 개입 지점 선택 |
| 열역학 | ΔG, 평형, 안정도 | ΔΔG·Tm 해석 |
| 반응공학 | k_cat, 저해, 경쟁 | inhibitory PC 창 |
| 전달 현상 | 확산, 구획, BBB | CNS overclaim 금지 |
| 공정 제어 | 운전창, 스펙 | PC = 운전창 보조 |
| 스케일업 | 파일럿→플랜트 | 계산→wet 게이트 |
| 고장 분석 | HAZOP / FTA | 결함 모드 triage |
| 분리공정 | 선택적 회수 | genotype triage |

**한 줄:** IDSX는 “단백질 신약 프로젝트”라기보다 **기능 효소 생산 공정의 고장 모드 분류와 구제 논리 사전설계**에 가깝다.

---

## 1. 정상 상태 물질수지 (Steady-state mass balance)

### 1.1 정의

리소좀 구획에서 **기능 가능 IDS 농도** \(C_{\mathrm{lys}}\) 에 대한 개념 수지:

\[
\frac{dC_{\mathrm{lys}}}{dt}
= r_{\mathrm{syn}} \cdot \eta_{\mathrm{fold}} \cdot \eta_{\mathrm{QC}} \cdot \eta_{\mathrm{traf}}
- k_{\mathrm{deg,lys}} C_{\mathrm{lys}}
- r_{\mathrm{consumption}}
\]

| 기호 | 의미 | IDSX 데이터 층 |
|------|------|----------------|
| \(r_{\mathrm{syn}}\) | 번역·유입 | 발현 시스템 (미측정) |
| \(\eta_{\mathrm{fold}}\) | 접힘 수율 | 구조 모듈 안정성 프록시, ΔΔG |
| \(\eta_{\mathrm{QC}}\) | ERQC 통과 분율 | 클래스 문헌 (ERAD) |
| \(\eta_{\mathrm{traf}}\) | 골지·M6P 배달 효율 | PTM/글리코 플래그 |
| \(k_{\mathrm{deg,lys}}\) | 리소좀 내 분해 | pH·프로테아제 환경 |
| 측정 활성 \(A\) | \(\propto C_{\mathrm{lys}} \cdot k_{\mathrm{cat}}^{\mathrm{eff}}\) | assay |

### 1.2 미스센스의 분류를 수지 파라미터로 재배치

| 결함 모드 | 주로 깨지는 항 | 샤페론 논리 적합성 |
|-----------|----------------|-------------------|
| 촉매 kill (Arg88 일부, 활성 잔기) | \(k_{\mathrm{cat}}\) | 낮음 (접힘 구제로 부족) |
| 코어 모듈 (Ser152) | \(\eta_{\mathrm{fold}},\eta_{\mathrm{QC}}\) | 높음 (프록시) |
| 이황화 파괴 (C184, C422) | \(\eta_{\mathrm{fold}}\) 극단 | 구제 난이도 높음 / EXCLUDE 긴장 |
| 글리코/트래픽 | \(\eta_{\mathrm{traf}}\) | 샤페론 단독 약함 |
| null | \(r_{\mathrm{syn}}\approx 0\) | 무의미 |

**설계 함의:** amenability triage = **어느 효율 항을 올리는 개입이 의미 있는가**를 가르는 공정 진단.

### 1.3 화학공학자가 말하는 “성공”

약한 목표: 결합 occupancy ↑  
강한 목표 (IDSX): \(C_{\mathrm{lys}} \cdot k_{\mathrm{cat}}^{\mathrm{eff}}\) ↑  
대리 지표: Tm, ΔΔG, 성숙 밴드 = **온도계/유량계**, 최종 생산량이 아님.

---

## 2. 단위공정 흐름도 (PFD)와 개입 밸브

```
[전사·번역] ──r_syn──► [ER 접힘 반응기]
                              │ η_fold
                              ▼
                        [ERQC 분리기]
                         /        \
                   합격 η_QC    폐기(ERAD)
                         │
                         ▼
                   [골지 가공 / M6P 표지] η_traf
                         │
                         ▼
                   [리소좀 반응기] ──► GAG 분해 (제품)
```

### 2.1 개입 = 제어 밸브

| 개입 유형 | 밸브 위치 | 화공 비유 | Track |
|-----------|-----------|-----------|-------|
| Inhibitory PC (활성부위) | ER 접힘 반응기 내 결합 | 촉매 독 넣었다가 하류에서 제거 | 소분자 A (주의) |
| Allosteric / 표면 클램프 | 접힘 반응기 외벽 보강 | 재킷 가열·지지 구조 | Track A 바인더/알로스테릭 |
| Neo-pocket 클램프 | 변이로 노출된 국소 패치 | 파열 지점 외부 밴드 | Track B |
| ERT | 리소좀에 외부 공급 | 완제품 수입 | 표준 치료 (범위 밖) |
| 유전자 치료 | \(r_{\mathrm{syn}}\) 교체 | 원료 공정 교체 | 범위 밖 |

### 2.2 HAZOP식 질문 (자문·설계 체크)

각 단위공정에 대해:

1. **No / Less** — 접힘이 안 되면? → ERAD  
2. **More** — 과도 억제 PC면? → 리소좀 활성 0  
3. **Other than** — 잘못된 에피토프면? → 촉매 차폐 (Arg88)  
4. **As well as** — 응집 유발 결합?  
5. **Part of** — 일부 도메인만 안정?  

이 질문지가 **RFdiffusion 전에** 문서화되어야 한다.

---

## 3. 열역학과 운전창 (Operating window)

### 3.1 접힘 평형

\[
K_{\mathrm{fold}} = \frac{[\mathrm{N}]}{[\mathrm{U}]} \propto e^{-\Delta G_{\mathrm{fold}}/RT}
\]

변이: \(\Delta\Delta G = \Delta G_{\mathrm{mut}} - \Delta G_{\mathrm{WT}}\)  
양(+)의 \(\Delta\Delta G\) → 네이티브 분율 감소 → \(\eta_{\mathrm{fold}}\) 하락.

### 3.2 IDSX 데이터의 위치

| 도구 | 측정에 가까운 것 | 한계 |
|------|------------------|------|
| 5FQL 주석 | 구조 기하, 네트워크 | 에너지 직접 아님 |
| AF | 좌표 가능 여부 | MSA 합의, ΔG 없음 |
| EvoEF2 ΔΔG | 상대 불안정 순위 | forcefield 한계, **이상치 주의** |
| CTSS | “약물이 붙을 틈” 휴리스틱 | 구제 가능성과 동일시 금지 |
| Tm (미래) | 열 운전창 | 최종 KPI 아님 |

### 3.3 운전창 그림 (개념)

- **ER (중성 pH):** 안정화 결합 유리 → 합격 분율 ↑  
- **리소좀 (산성):** 억제형 PC는 해리 또는 기질 경쟁 필요  
- 화공 비유: **온도·pH에 따른 흡착 등온선 이동**

암브록솔 레퍼런스는 이 **pH-의존 운전창**의 교과서 사례이지, IDS 공정 레시피가 아니다.

---

## 4. 반응공학: 억제–구제 창 (Therapeutic window)

Inhibitory PC를 단순 반응식으로:

\[
\mathrm{E}_{\mathrm{mut}} + \mathrm{L} \underset{k_{-1}}{\stackrel{k_1}{\rightleftharpoons}} \mathrm{EL}
\quad\text{(안정, 수송 가능)}
\]

리소좀:

\[
\mathrm{EL} \rightarrow \mathrm{E} + \mathrm{L},\quad
\mathrm{E} + \mathrm{S} \rightarrow \mathrm{E} + \mathrm{P}
\]

**창 조건:**  
ER에서 EL 형성이 충분하고, 리소좀에서 E가 기질과 반응할 시간이 있을 것.

| 너무 센 결합 | 너무 약한 결합 |
|--------------|----------------|
| 리소좀에서 못 뗌 → 기능 0 | ER에서 안정화 실패 |

학부 1편에서는 이 식을 **개념 층**으로만 두고, 수치 피팅은 협업 후.

---

## 5. 전달 현상 (Transport) — overclaim 차단

| 스케일 | 문제 | IDSX 규율 |
|--------|------|-----------|
| 세포 내 구획 | ER vs 리소좀 | 성공 지표 분리 |
| 조직 | 간·비 vs 뇌 | 신경형 MPS II 별 프로젝트 |
| BBB | 소분자/바인더 투과 | 1편 non-claim |
| 바인더 전달 | M6P, CPP, 유전자 발현 | 로드맵 Phase 4, 지금 비주력 |

**화공 교훈:** 반응기 설계가 완벽해도 **배관·펌핑(전달)** 이 없으면 플랜트는 실패한다.  
구조 triage는 반응기 쪽 문제이고, CNS는 배관 문제다. 섞지 말 것.

---

## 6. 다목적 최적화 (Pareto) — Track A vs B를 수식으로

두 목적함수를 동시에 최대화하려 하면 모순이 생긴다.

\[
\begin{aligned}
J_1 &= \text{clinical burden proxy (빈도·병원성 라벨)} \\
J_2 &= \text{structural amenability proxy (이격·에피토프·비촉매)} \\
J_3 &= \text{druggability proxy (SASA·ΔΔG·소수성 = CTSS류)}
\end{aligned}
\]

- **Ser152:** \(J_1, J_2\) 높음, \(J_3\)(직접 소분자) 낮음  
- **C422F:** \(J_3\) 높음, amenability EXCLUDE(이황화)와 \(J_2\) 충돌 가능  
- **Arg88:** \(J_1\) 높음, \(J_2\) 바인더 축 실패  

**올바른 태도:** 단일 랭킹 1위를 강요하지 말고 **Pareto 전선 위의 서로 다른 파일럿**을 유지.

---

## 7. 스케일업 게이트 (Technology readiness)

| TRL(비유) | IDSX 단계 | 진입 조건 |
|-----------|-----------|-----------|
| 1 | 개념·용어 | claim/non-claim 문서 |
| 2 | 구조 맵 | 797 DB + 규칙 v1 |
| 3 | 가설 검증 계산 | AF + ΔΔG 교차 (진행 중) |
| 4 | 파일럿 설계 | 패치 1 + 성공 기준 사전등록 |
| 5 | 최소 wet | Tm 또는 활성 1지표 |
| 6+ | 치료 개발 | 학부 범위 밖 |

**금지:** TRL2에서 TRL5 언어 사용 (“rescue”, “치료 후보 확정”).

---

## 8. 신규 정량 제안 — “공정 적합성 지수” (PFI, 초안)

기존 점수(amenability) + CTSS를 대체하지 않고 **병기**하는 인덱스:

\[
\mathrm{PFI} = w_1 \tilde{S}_{\mathrm{amen}} + w_2 \tilde{S}_{\mathrm{network}} + w_3 \tilde{S}_{\mathrm{sep}} - w_4 P_{\mathrm{exclude}}
\]

| 항 | 내용 | 데이터 원천 |
|----|------|-------------|
| \(\tilde{S}_{\mathrm{amen}}\) | 0–10 점수 정규화 | Prototype xlsx |
| \(\tilde{S}_{\mathrm{network}}\) | contact·H-bond 모듈 점수 | Hotspot map 10기준 |
| \(\tilde{S}_{\mathrm{sep}}\) | 촉매 이격 정규화 (dist≥10 유리) | 5FQL |
| \(P_{\mathrm{exclude}}\) | 촉매/Ca/이황화/null | Hard EXCLUDE |

**CTSS는 PFI에 넣지 않는다.** 대신 Track B 전용 \(\mathrm{Druggability}\) 축으로 유지.

가중치 \(w_i\)는 자문 전 **사전등록** 후 고정. 결과 보고 조정 금지.

---

## 9. 실험 설계를 화공 DOE로

| 인자 | 수준 예 | 응답 |
|------|---------|------|
| 변이 genotype | S152I / D308G / R88C / WT | — |
| 개입 | 없음 / 후보1 / 후보2 | — |
| pH | 7.4 / 5.0 | Tm, 활성 |
| 온도 램프 | DSF | Tm |

출력: 주효과 = genotype×개입 상호작용이 **구제 창**의 핵심.

---

## 10. 교육·포트폴리오 산출물로 쓰는 법

1. **1장 PFD 포스터** — 단위공정 + 밸브(개입)  
2. **물질수지 박스** — 활성↓의 두 경로 (k_cat vs \(C_{\mathrm{lys}}\))  
3. **Pareto 산점도** — 빈도 vs 이격 vs CTSS 3D 또는 2×2  
4. **HAZOP 표** — Arg88 실패 모드  
5. **TRL 로드맵** — 12개월 게이트와 동일 언어

이 다섯이 화학공학 면접·연구 지원서에서 “남이 요약해준 바이오”가 아니라 **내 프레임**이 된다.

---

## 11. 이 문서에서 파생되는 다음 작업

- [ ] PFI v0 가중치 사전등록 1페이지  
- [ ] amenability × ΔΔG × CTSS 조인 테이블 (위치 단위)  
- [ ] Ser152 / C422 / Arg88 3점을 Pareto figure로 고정  
- [ ] 자문용 “화공 1장” 슬라이드 3장 추가 (마스터 덱 부록)

---

## 12. 업데이트 — 반응공학 · 촉매공학 심화 (2026-07-17)

본 문서 §0–10이 **공정·수지·단위공정** 층이라면, 아래는 **반응·촉매 설계 방정식** 층이다.  
상세 덱·노트:

| 산출 | 경로 |
|------|------|
| 키노트 | `chemeng_rxn_cat_chaperone/IDSX_ChemE_Rxn_Catalysis_Chaperone_Design.key` |
| 노트 | `chemeng_rxn_cat_chaperone/00_반응공학_촉매공학_샤페론설계.md` |

**핵심 정렬**

| 반응/촉매 기호 | IDSX 대응 |
|----------------|-----------|
| 선택도 S | Kd_N/Kd_U, 에피토프 특이, 6.5Å |
| 전환율 X · Da | η_fold, k_fold·τ_ER, STEP3 |
| Ki 창 · TOF | STEP7 pH-window, 4MU |
| 비활성화 k_d | ERAD·수송 수명, S6 |
| 활성점 vs 담지체 | inhibitory PC vs 표면 바인더 |
| max Y·S·a | competence 사전등록 |

---

*끝 — 04 화학공학 접목 프레임 심화 (+ §12 반응/촉매 융합)*
