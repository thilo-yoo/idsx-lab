# 샤페론 적용 스텝 시뮬레이션 — STEP 3 입증

**날짜:** 2026-07-17  
**표적 맥락:** IDS S152I · PDB 5FQL  
**선택 스텝:** **STEP 3 — Native-state preferential stabilization**  
(접힘 평형 \(U \rightleftharpoons N\) 을, Native에 더 세게 붙는 샤페론이 질량작용으로 이동)

---

## 1. 왜 “한 스텝”만 고르는가

약리 샤페론(PC) 경로는 다단이다.

| Step | 내용 | 본 시뮬 |
|------|------|---------|
| 1 | 번역·합성 | ✗ |
| 2 | ER 접힘 핵형성 | ✗ |
| **3** | **Native 선택 안정화 (U⇌N 이동)** | **✓** |
| 4 | ERQC 통과 / ERAD 감소 | ✗ |
| 5 | 골지·M6P | ✗ |
| 6 | 리소좀 배달 | ✗ |
| 7 | 리소좀 해리·촉매 (pH 창) | ✗ |
| 8 | GAG 제거 | ✗ |

**Non-claim:** STEP 3 입증 ≠ 세포 구제 ≠ 임상 효능.  
다단 중 **한 밸브**가 물리적으로 열릴 수 있음을 보인 것이다.

---

## 2. 선택 스텝의 화학공학·물리 의미

공정 비유: ER 접힘 반응기의 **평형 조성 제어**.

\[
U \underset{K_{\mathrm{fold}}}{\rightleftharpoons} N,\quad
N + C \underset{K_{d,N}}{\rightleftharpoons} NC,\quad
U + C \underset{K_{d,U}}{\rightleftharpoons} UC
\]

조건 \(K_{d,N} \ll K_{d,U}\) (Native 선호 결합)이면  
질량수지상 **folded pool** \(f_N + f_{NC}\) 가 샤페론 농도에 따라 증가한다.

---

## 3. 방법

### 3.1 구조 앵커 (5FQL, chain A)
- Ser152 OG–Asp148 OD2 ≈ **2.53 Å**  
- Ser152 OG–Thr118 OG1 ≈ **2.85 Å**  
- CB 4.5 Å 내 heavy atom **26** (조밀 패킹)

### 3.2 국소 변형 에너지 (S152I 필요성)
- H-bond 상실 (OG 소실)  
- CA→CB 방향 부피 확장 probe의 soft clash  
- 소수성 보상 소항  
→ WT 대비 국소 페널티 방향 확인 (절대 kcal은 조대 모델)

### 3.3 열역학 집단 모델 (본 입증 본체)
| 파라미터 | 값 | 의미 |
|----------|-----|------|
| \(\Delta G_{\mathrm{fold,WT}}\) | −3.0 kcal/mol | WT 접힘 유리 |
| \(\Delta\Delta G_{\mathrm{mut}}\) | **+2.8** kcal/mol | 생물리 스케일 변이 페널티 |
| \(K_{d,N}\) | 1 μM | N에 세게 |
| \(K_{d,U}\) | 50 μM | U에 약하게 |
| \(T\) | 310 K | ER 유사 |

※ EvoEF2 raw S152I +46 kcal/mol은 **순위용 forcefield 스케일**이 커서 집단 모델에 그대로 넣지 않음 (문서에 명시).

### 3.4 음성 대조
- \(K_{d,N} = K_{d,U}\) → 접힘 분율 **농축 없음** (선호 결합이 핵심임을 입증)

### 3.5 구조 프록시 (표면 클램프)
- 표면 패치(P150, Y151, S154…)에 조화 구속 \(k_{\mathrm{clamp}}\)  
- 네트워크 결합 γ=0.45로 코어 152 RMSF 감소  
- 바인더/클램프형 개입이 **같은 STEP 3**을 구조적으로 보조할 수 있는 경로

---

## 4. 핵심 결과 (Proof metrics)

| 지표 | 값 |
|------|-----|
| 변이, PC 없음 folded 분율 | **0.580** |
| 변이, [PC]=10 μM folded 분율 | **0.922** |
| **농축 배율** | **1.59×** |
| 비선호 대조 (Kd 동일) | 농축 ≈ 1 (실패 대조) |
| 표면 클램프: RMSF_152 | **1.24 → 0.62 Å** (k_clamp 0→8) |

**한 줄 입증 문장**  
> Native에 선택적으로 결합하는 샤페론 모델은, S152I형 접힘 페널티가 있는 조건에서 folded pool을 유의미하게 농축한다. 비선택 결합 대조는 농축하지 못한다. 따라서 **다단 경로 중 STEP 3(Native 선택 안정화)** 에는 이 개입 논리가 물리적으로 적용된다.

---

## 5. 한계

1. 2-상태 모델 (중간체 생략)  
2. \(\Delta\Delta G\) 는 생물리 스케일 가정  
3. 국소 clash 항은 soft-sphere 조대  
4. 세포 ERAD·배달·활성 **미포함**  
5. 특정 화합물 구조 도킹 아님  

---

## 6. 파일

| 경로 | 내용 |
|------|------|
| `figures/fig0–6_*.png` | 발표 그림 |
| `data/simulation_summary.json` | 수치 요약 |
| `data/dose_response_*.csv` | 용량–반응 |
| `data/clamp_scan.csv` | 클램프 스캔 |
| `run_step3_simulation.py` | 재현 스크립트 |

---

*치료 claim 없음 · STEP 3 한정 입증*
