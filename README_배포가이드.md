# IDSX Lab Website v3

정적 연구 포털 — **종합(synthesis)** 이 전 논의의 입구.

## 정보 구조

| 경로 | 역할 |
|------|------|
| `index.html` | 홈 · claim/non-claim |
| `pages/synthesis.html` | **전 논의 통합 (추천 시작)** |
| `pages/framework.html` | 프레임 · ER · 열안정 계층 |
| `pages/module-case.html` | Ser152 모듈 사례 |
| `pages/compute.html` | AF3 · 2축 맵 |
| `pages/af-catalog.html` | **AF job 목록** (WT/S152I/MULTI) |
| `pages/structures.html` | AF 구조 뷰·차이·3D |
| `pages/ambroxol-gcase.html` | GCase 레퍼런스 |
| `pages/data-audit.html` | 데이터 검증 |
| `pages/notebook.html` | 사고 궤적 |
| `pages/update.html` | 운영 |

내비: `assets/js/nav.js`

## 로컬

```bash
cd ~/Desktop/IDSX/website
python3 -m http.server 8765
```

GitHub 배포는 선택(필수 아님).

## 버전

- v1 초판 (Ser152 중심)
- v2 프레임 재정렬 + AF3
- **v3** 전 논의 종합 페이지 · ER/열안정/용어/ABX/Baker 렌즈 전면 반영
