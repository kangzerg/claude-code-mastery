# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

**개발자 웹 이력서** - HTML, CSS, JavaScript, Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트

프로젝트 계획은 ROADMAP.md 파일을 참고하세요.

---

## 기술 스택

- **마크업**: HTML5
- **스타일링**: CSS3, Tailwind CSS (CDN 또는 빌드 방식)
- **상호작용**: Vanilla JavaScript (외부 프레임워크 미사용)
- **배포**: Netlify, Vercel, GitHub Pages 등
- **개발 방식**: 모바일 우선 접근법 (Mobile First)

---

## 프로젝트 구조

```
./
├── index.html           # 메인 HTML 파일
├── css/
│   ├── style.css        # 커스텀 스타일
│   └── tailwind.css     # Tailwind CSS 임포트
├── js/
│   └── main.js          # 자바스크립트 로직
├── assets/
│   ├── images/          # 프로필, 프로젝트 이미지
│   └── icons/           # SVG 아이콘
├── ROADMAP.md           # 프로젝트 로드맵
└── README.md            # 프로젝트 설명서
```

---

## 개발 워크플로우

### 초기 설정

```bash
# Git 저장소 초기화
git init

# Tailwind CSS 설정 (CDN 사용 또는 빌드 설정)
# CDN 방식: index.html의 <head>에 Tailwind CDN 링크 추가
# 빌드 방식: package.json, tailwind.config.js 설정
```

### 로컬 개발

```bash
# 간단한 로컬 서버 실행 (Python)
python -m http.server 8000

# 또는 Live Server 확장 프로그램 사용 (VSCode)
```

### 빌드 및 배포

```bash
# Tailwind CSS 빌드 (JIT 모드 사용 시)
npx tailwindcss -i ./css/tailwind.css -o ./css/output.css

# 배포 (Netlify CLI 예시)
npm install -g netlify-cli
netlify deploy
```

---

## 언어 및 커뮤니케이션 규칙

### 🌐 기본 응답 언어
**모든 응답과 설명은 한국어로 작성합니다.**

### 💬 코드 관련 규칙

| 항목 | 언어 | 예시 |
|------|------|------|
| **코드 주석** | 한국어 | `// 네비게이션 메뉴 토글 함수` |
| **커밋 메시지** | 한국어 | `git commit -m "feat: 헤더 네비게이션 구현"` |
| **문서화** | 한국어 | README.md, CLAUDE.md 등 |
| **변수명/함수명** | 영어 | `toggleMobileMenu()`, `profileImage` |
| **클래스명** | 영어 | `.nav-toggle`, `.hero-section` |

---

## 코딩 컨벤션

### HTML
- 시맨틱 HTML5 요소 사용 (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- 접근성 고려 (ARIA 라벨, alt 텍스트 필수)
- 반응형 메타 태그 포함: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### CSS / Tailwind CSS
- Tailwind 유틸리티 클래스 우선 사용
- 커스텀 CSS는 `css/style.css`에 작성
- 일관된 색상 팔레트 및 간격 시스템 유지
- 모바일 우선 (sm, md, lg 브레이크포인트)

### JavaScript
- 바닐라 JavaScript 사용 (프레임워크 미사용)
- 변수 선언: `const` > `let` > `var` (var 미사용)
- 화살표 함수 선호: `const handleClick = () => { }`
- 이벤트 위임(Event Delegation) 활용
- DOM 조작 최소화

---

## 주요 개발 원칙

1. **모바일 우선**: 모바일부터 시작하여 데스크톱으로 확장
2. **성능**: 이미지 최적화, 최소한의 JS 사용
3. **접근성**: 키보드 네비게이션, 스크린 리더 지원
4. **SEO**: 메타 태그, 구조화된 데이터(Schema.org)
5. **반응형**: sm(640px), md(768px), lg(1024px) 브레이크포인트

---

## 테스트 및 검증

### 브라우저 테스트
- Chrome, Firefox, Safari, Edge
- 모바일: iOS Safari, Chrome Mobile

### 성능 측정
- Lighthouse 점수 확인
- Core Web Vitals 모니터링
- 페이지 로드 시간 < 3초

### 접근성 검증
- WCAG 2.1 AA 기준 준수
- 색상 대비 비율 확인 (최소 4.5:1)
- 키보드 네비게이션 테스트

---

## 배포 가이드

### Netlify 배포 (권장)

```bash
# Netlify에 로그인 후
netlify deploy --prod
```

배포 후 확인사항:
- 도메인 설정 (또는 사용자 정의 도메인)
- SSL/TLS 인증서 활성화 (자동)
- 성능 모니터링 설정

---

## 참고 링크

- [Tailwind CSS 공식 문서](https://tailwindcss.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 주의사항

- **외부 의존성 최소화**: 필요한 경우에만 라이브러리 추가
- **성능 우선**: 무거운 라이브러리보다 바닐라 JS 선호
- **유지보수성**: 코드의 명확성과 단순성을 우선시
- **정기적 커밋**: 각 기능 완료 시 의미 있는 커밋 메시지로 커밋
