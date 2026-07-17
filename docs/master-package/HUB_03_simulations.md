# HUB 03 · 시뮬레이션 가이드

**원칙:** 다단(S1–S8) 중 **한 밸브씩** 입증. 전 경로 치료 성공 ≠.

---

## 추천 읽기/발표

| 우선 | 자료 | 내용 |
|:----:|------|------|
| **1** | `키노트/02_전단계_S1-S8_시뮬` + `chaperone_all_steps_sim/00_…총괄.md` | 전단 통합 |
| 2 | STEP3 폴더/덱 | Native 선택 안정화 · folded 0.58→0.92 (1.59×) |
| 3 | STEP7 폴더/덱 | pH 창 · ER occ 0.89 & lys v 0.94 vs 과억제 0.01 |

STEP3·7 상세 수치·CSV는 각 폴더 `data/` · 그림 `figures/`.

---

## S1–S8 한 장

| Step | 모델 요지 | 핵심 숫자 | PC 역할 |
|------|-----------|-----------|---------|
| S1 합성 | r/k 수지 | null 천장 ~15% | 없음 |
| S2 핵형성 | 경로 분배 | f_prod 0.08→0.92 | 장벽↓ |
| S3 Native | Kd_N≪Kd_U | 1.59× folded | 본진 |
| S4 ERAD | η_export | 0.33→0.78 | f↑/차폐 |
| S5 M6P | η(f) | glyco-dead 0.05 | 간접 |
| S6 배달 | ODE+leak | 0.44→0.73 | k_leak↓ |
| S7 pH창 | Ki(pH)+MM | v 0.94 vs 0.01 | 억제 창 |
| S8 GAG | 반응기 수지 | 축적 완화/악화 | 종점 |

**결합:** Θ ∝ Π η_i · 한 단 0 → 전체 0 · S3만 되고 S7 과억제면 S8 악화 가능.

---

## 화공 기호 연결

| 시뮬 | 기호 |
|------|------|
| STEP3 | 선택도 S, 수율 Y |
| STEP7 | Ki 창, TOF |
| S1–S8 | 직렬 X_i |
| 고분자 L2 | 리폴딩 수율 (공정 시뮬과 동형) |

---

## 폴더 위치

```
chaperone_all_steps_sim/   ← 통합 본선
chaperone_step_sim/        ← STEP3 심화
chaperone_step7_sim/       ← STEP7 심화
```
