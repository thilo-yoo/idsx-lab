# 샤페론 전 단계(S1–S8) 구체 시뮬레이션 총괄

**프로젝트:** IDSX · IDS / MPS II / 5FQL  
**날짜:** 2026-07-17  
**지위:** 다단 동역학·열역학 **스케치 시뮬레이션**. 세포·임상 효능 입증 아님.

---

## 0. 전체 흐름 (공정 관점)

```
S1 합성 공급
 → S2 접힘 핵형성(경로 분배)
 → S3 Native 선택 안정화(평형)
 → S4 ERQC/ERAD 경쟁(수출 효율)
 → S5 M6P 표지
 → S6 리소좀 배달(수송 ODE)
 → S7 pH 창 해리·촉매 가용
 → S8 기질(GAG) 제거 반응기
```

**처리량(개념):**  
\[
\Theta \propto r_{\mathrm{syn}}\cdot f_{\mathrm{nuc}}\cdot f_{\mathrm{fold}}\cdot\eta_{\mathrm{exp}}\cdot\eta_{\mathrm{M6P}}\cdot\eta_{\mathrm{del}}\cdot v_{\mathrm{cat}}
\]

---

## 1. 단계별 모델 · PC 역할 · 수치 결과

### S1 — 번역·합성 공급
| 항목 | 내용 |
|------|------|
| **모델** | \(\dot P = r_{\mathrm{syn}} - k_{\mathrm{clear}} P\), 정상상태 \(P=r/k\) |
| **PC 역할** | **없음** (null/NMD는 샤페론 대상 아님) |
| **결과** | missense 공급 ≈ WT; null NMD 정상상태 ~**15%** 천장 |
| **IDSX 함의** | Hard EXCLUDE(null) 정당화 |
| **데이터** | `S1_synthesis.csv` · `figS1_synthesis.png` |

### S2 — ER 접힘 핵형성 / 경로 분배
| 항목 | 내용 |
|------|------|
| **모델** | 생산적 경로 vs 트랩: \(k=k_0 e^{-\Delta G^\ddagger/RT}\), \(f_{\mathrm{prod}}=k_p/(k_p+k_t)\) |
| **PC 역할** | 생산적 장벽 \(\Delta G^\ddagger\) 감소 (핵형성 보조) |
| **결과** | \(f_{\mathrm{prod}}\) **0.081 → 0.919** (장벽 −3 kcal/mol) |
| **데이터** | `S2_nucleation.csv` · `figS2_nucleation.png` |

### S3 — Native 선택 안정화
| 항목 | 내용 |
|------|------|
| **모델** | \(U\rightleftharpoons N\), \(N+C\rightleftharpoons NC\), \(U+C\rightleftharpoons UC\), \(K_{d,N}\ll K_{d,U}\) |
| **PC 역할** | Native 선호 결합 → folded pool 질량작용 농축 |
| **결과** | folded **0.580 → 0.922** @10 μM (**1.59×**); 비선호 대조 실패 |
| **데이터** | `S3_native_stabilization.csv` · `figS3_folded.png` |
| **전용 덱** | `IDSX_Chaperone_STEP3_Simulation_Proof.key` |

### S4 — ERQC / ERAD 경쟁
| 항목 | 내용 |
|------|------|
| **모델** | \(\eta_{\mathrm{exp}}=k_{\mathrm{exp}}/(k_{\mathrm{exp}}+k_{\mathrm{ERAD}})\), \(k_{\mathrm{exp}}\propto f_{\mathrm{fold}}\), \(k_{\mathrm{ERAD}}\propto(1-f)\) |
| **PC 역할** | \(f_{\mathrm{fold}}\) 상승 + (선택) ERAD 인식 차폐 \(\sigma\) |
| **결과** | \(\eta(0.58)=0.33\); \(\eta(0.92)=0.72\); +shield **0.78** |
| **데이터** | `S4_ERAD_export.csv` · `figS4_export.png` |

### S5 — 골지 성숙 / M6P 표지
| 항목 | 내용 |
|------|------|
| **모델** | \(\eta_{\mathrm{M6P}}=\eta_{\max} f/(K+f)\) (Michaelis형 화물 품질) |
| **PC 역할** | 간접 — 접힌 화물↑; **글리코 사이트 null은 구제 불가** |
| **결과** | \(\eta(0.58)=0.63\); \(\eta(0.92)=0.71\); glyco-dead **0.05** 고정 |
| **데이터** | `S5_M6P.csv` · `figS5_M6P.png` |

### S6 — 리소좀 배달
| 항목 | 내용 |
|------|------|
| **모델** | Golgi→Endosome→Lysosome ODE + 누설 \(k_{\mathrm{leak}}\) |
| **PC 역할** | 수송 중 안정화 → \(k_{\mathrm{leak}}\)↓ → 도착분율↑ |
| **결과** | Lys 도착: 변이 **0.44** → PC **0.73** (WT 0.80) |
| **데이터** | `S6_delivery.csv` · `figS6_delivery.png` |

### S7 — 리소좀 pH 창 · 촉매 가용
| 항목 | 내용 |
|------|------|
| **모델** | \(K_d(\mathrm{pH})\) log-linear + MM, EC 비활성 |
| **PC 역할** | 억제형: 중성 점유 / 산성 해리 |
| **결과** | C=5 μM: ER occ **0.89**, lys \(v\) **0.94**; 무창 강결합 \(v\) **0.01** |
| **데이터** | `S7_pH_window.csv` · `figS7_pHwindow.png` |
| **전용 덱** | `IDSX_Chaperone_STEP7_pHWindow_Proof.key` |

### S8 — 기질(GAG) 제거
| 항목 | 내용 |
|------|------|
| **모델** | \(\dot S = \mathrm{load} - v_{\max}E\frac{S}{K_m+S} - k_{\mathrm{out}}S\) |
| **PC 역할** | 상류 \(E_{\mathrm{lys}}\)·\(v_{\mathrm{cat}}\) 의 **종점 결과** |
| **결과** | 최종 GAG: 질병 **38.3** → S3+S7 **32.9** (WT 23.2); 무창 강결합 **40.9**(악화) |
| **데이터** | `S8_GAG_clearance.csv` · `figS8_GAG.png` |

---

## 2. 결합 시나리오 처리량 \(\Theta\)

| 시나리오 | \(\Theta\) (상대) | 해석 |
|----------|-------------------|------|
| null_allele | **0** | 전 구간 차단 |
| disease_baseline | **0.013** | 다단 손실 누적 |
| PC_S3_only | 중간 | 재고·수출 개선 |
| PC_S3_S7 | 더 개선 | +촉매 창 |
| PC_full_stack | **0.187** | S2–S7 동시 개선 가정 |
| WT | **0.453** | 상한 벤치마크 |

→ 단일 스텝 개입만으로는 WT에 못 미치며, **다단 동시 개선**이 개념적으로 필요.  
→ 반대로 **한 스텝이라도 0이면 전체 0** (null, glyco-dead, 과억제).

`cascade_throughput.csv` · `fig99_cascade_throughput.png`

---

## 3. 스텝별 “샤페론이 하는 일 / 못 하는 일”

| Step | 하면 | 못 함 |
|------|------|-------|
| S1 | — | null 공급 복구 |
| S2 | 핵형성 경로 편향 | 서열 자체 교정 |
| S3 | folded 분율↑ | 배달 보장 |
| S4 | 수출 η↑ | ERAD 기구 전면 차단 주장 금지 |
| S5 | 간접 M6P↑ | 글리코 사이트 파괴 구제 |
| S6 | 수송 안정화 | BBB/조직 분포 |
| S7 | 리소좀 촉매 가용 | 재고 0에서 기적 |
| S8 | 축적 완화(종점) | 단독 기전 증명 |

---

## 4. 재현

```bash
# 수치·그림 재생성은 패키지 내 파이썬 실행 이력 참고
# 출력: data/*.csv, figures/*.png, all_steps_summary.json
```

---

## 5. Non-claim (모든 스텝 공통)

- 치료제 확정·환자 투여 근거 아님  
- IDS 특이 화합물 구조 도킹 아님  
- 파라미터는 교육·우선순위용 **대표값**  
- 실제 residual activity·세포 실험으로 교정 필요  

---

*다단을 한 장에 펼쳐야 “한 스텝 성공 = 치료” 오류를 막을 수 있다.*
