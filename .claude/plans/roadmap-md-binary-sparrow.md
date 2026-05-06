# UI 수정 계획 - 컨테이너 폭 & 이미지 교체

## Context

웹 이력서가 화면에 너무 넓게 표시되어 가독성이 낮고, via.placeholder.com 이미지가 로드되지 않는 문제가 있습니다.
두 가지를 동시에 수정합니다.

---

## 수정 파일

`C:\study\claude-code-mastery\index.html` — 단일 파일 수정

---

## 변경 사항 1: 컨테이너 폭 축소

`max-w-7xl` (1280px) → `max-w-4xl` (896px) 전체 일괄 교체

해당 위치 (총 7곳):
- 헤더 (line 53)
- 히어로 섹션 (line 92)
- 소개 섹션 (line 142)
- 기술 스택 섹션 (line 163)
- 경력 섹션 (line 251)
- 프로젝트 섹션 (line 292)
- 학력 섹션 (line 399)
- 연락처 섹션 (line 440)
- 푸터 (line 519)

→ `replace_all: true`로 한 번에 교체

---

## 변경 사항 2: 이미지 URL 교체

`via.placeholder.com` → `picsum.photos` (실제 샘플 이미지, 외부 의존성 없이 항상 로드됨)

| 위치 | 기존 URL | 변경 URL |
|------|---------|---------|
| 프로필 이미지 | `via.placeholder.com/150?text=Profile` | `picsum.photos/seed/profile/150/150` |
| 할 일 관리 앱 | `via.placeholder.com/400x250?text=Todo+App` | `picsum.photos/seed/todo/400/250` |
| 날씨 대시보드 | `via.placeholder.com/400x250?text=Weather+Dashboard` | `picsum.photos/seed/weather/400/250` |
| 포트폴리오 사이트 | `via.placeholder.com/400x250?text=Portfolio+Site` | `picsum.photos/seed/portfolio/400/250` |
| 쇼핑몰 프론트 | `via.placeholder.com/400x250?text=E-commerce+UI` | `picsum.photos/seed/ecommerce/400/250` |
| OG 이미지 (메타) | `via.placeholder.com/1200x630?text=Kim+Gaebael` | `picsum.photos/seed/ogimage/1200/630` |

→ 각 이미지마다 개별 Edit 호출로 URL 교체

---

## 검증

브라우저에서 http://localhost:8000 새로고침 후:
- 각 섹션 콘텐츠가 화면 중앙 896px 이내로 정렬되는지 확인
- 프로필 이미지와 프로젝트 카드 이미지가 실제 사진으로 보이는지 확인
