// ================================================
// 현대적 포트폴리오 - 메인 스크립트
// ================================================

// ================================================
// 1. 다크모드 관리
// ================================================

/**
 * 테마 초기화
 * 저장된 설정이 있으면 로드, 없으면 시스템 설정 따름
 */
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * 테마 토글
 */
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 다크모드 토글 버튼
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// 페이지 로드 시 테마 초기화
document.addEventListener('DOMContentLoaded', initTheme);

// ================================================
// 2. 모바일 메뉴 토글
// ================================================

const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded',
      mobileMenu.classList.contains('open') ? 'true' : 'false'
    );
  });
}

// 메뉴 링크 클릭 시 모바일 메뉴 닫기
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburgerBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});

// ================================================
// 3. 스무스 스크롤 및 활성 메뉴
// ================================================

// 모든 네비게이션 링크에 스무스 스크롤
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/**
 * 스크롤 위치에 따라 활성 메뉴 업데이트
 */
function updateActiveMenu() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveMenu);

// ================================================
// 4. 섹션 페이드인 애니메이션
// ================================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// 모든 페이드인 트리거 요소 옵저버 적용
document.querySelectorAll('.fade-in-trigger').forEach(element => {
  fadeInObserver.observe(element);
});

// ================================================
// 5. 상단 이동 버튼
// ================================================

const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn?.classList.add('show');
  } else {
    scrollToTopBtn?.classList.remove('show');
  }
});

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ================================================
// 6. 유틸리티 함수
// ================================================

/**
 * 외부 링크를 새 탭에서 열기
 */
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

/**
 * 초기화
 */
document.addEventListener('DOMContentLoaded', () => {
  updateActiveMenu();
});
