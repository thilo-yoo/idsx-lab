# 샤페론 적용 스텝 시뮬레이션 — STEP 7 시사

**날짜:** 2026-07-17  
**선택 스텝:** **STEP 7 — Lysosomal pH-window release & catalytic availability**  
**이전 덱과의 관계:** STEP 3(Native 선택 안정화)과 **다른 단** — 본 덱은 억제형 PC의 **리소좀 해리·촉매 가용** 에만 초점.

---

## 1. 다단 중 어디인가

| Step | 내용 | 본 시뮬 | 이전 덱 |
|------|------|---------|---------|
| 3 | Native 선택 안정화 (U⇌N) | ✗ | ✓ |
| **7** | **리소좀 pH 창 해리·촉매** | **✓** | ✗ |

---

## 2. 메커니즘

억제형 약리 샤페론의 고전적 하류 조건:

- **ER (pH≈7.4):** \(E+C\rightleftharpoons EC\), \(K_d\) 작음 → 점유↑ (접힘/통과에 유리할 수 있음)  
- **Lysosome (pH≈4.8):** \(K_d\) 큼 → 해리 → **유리 E** 가 기질과 반응  

\[
\log_{10} K_d(\mathrm{pH}) = \log_{10} K_{d,\mathrm{ref}} + \alpha\,(\mathrm{pH_{ref}}-\mathrm{pH})
\]

\[
v = k_{\mathrm{cat}}\,[E]_{\mathrm{free}}\,\frac{[S]}{K_m+[S]}
\quad (EC\text{ 활성 }0\text{ 가정})
\]

**Window index** \(= \mathrm{occupancy}_{ER} \times v_{\mathrm{lys}}\)

---

## 3. 파라미터 (사전 명시)

| 기호 | 값 | 의미 |
|------|-----|------|
| \(K_{d,\mathrm{ref}}\) | 0.5 μM | pH 7.4 기준 |
| \(\alpha\) | 0.85 | pH 민감도 |
| \(K_m\) | 50 μM | 기질 친화 (상대) |
| \([S]\) | 100 μM | 모델 기질 |
| \(E_{\mathrm{tot}}\) | 1 | 정규화 재고 |

**음성 대조:** \(\alpha=0\), \(K_d=0.05\) μM (pH 무관 초강결합) → 리소좀에서도 억제 유지.

---

## 4. 핵심 결과

| 지표 | 값 |
|------|-----|
| \(K_d(\mathrm{pH}4.8)/K_d(\mathrm{pH}7.4)\) | **≈ 162×** |
| [PC]=5 μM, ER occupancy | **0.89** |
| [PC]=5 μM, lysosomal \(v/v_{\max}\) | **0.94** |
| 동일 농도, 무창 강결합 \(v/v_{\max}\) | **≈ 0.01** |
| Window index 최적 [C] | **≈ 7.9 μM** |

**한 줄 시사**  
> pH-민감 억제형 샤페론 모델은 **같은 농도**에서 ER 점유를 유지하면서도 리소좀 촉매 속도를 회복시킨다. pH 창이 없는 강결합 대조는 리소좀 활성을 짓누른다. 따라서 다단 경로 중 **STEP 7** 에 이 개입 논리가 적용된다.

### STEP 3 × STEP 7 결합 스케치 (개념)
- 재고만 높고 창 없음 → throughput ≈ 0.01  
- 재고(0.92)×리소좀 활성(0.94) → throughput ≈ **0.87**  
- PC 없음(재고 0.58) → 0.58  

→ 두 스텝은 **서로 다른 밸브**이며 둘 다 필요할 수 있다.

---

## 5. 한계 · Non-claim

- 현상론적 pH–Kd 연결 (원자 수준 양성자화 경로 아님)  
- 실제 IDS 기질·공결정 없음  
- 세포 배달·GAG 제거 미포함  
- STEP 3 재입증 아님  

---

## 6. 파일

`figures/fig0–8`, `data/*.csv`, `simulation_summary.json`, Keynote/PPTX
