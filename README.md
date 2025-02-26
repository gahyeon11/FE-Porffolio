## 📌 Portfolio Website

**포트폴리오 사이트**
퍼포먼스 최적화, 반응형 UI, 인터랙티브한 애니메이션을 통해 사용자 경험을 극대화하는 데 집중했습니다.  

🔗 **배포 링크**: [https://www.gahyeon.site/](https://www.gahyeon.site/)

---

이제 **스크린샷 파일을 추가하면 완벽한 README**가 될 것 같아!  
혹시 GIF(움직이는 미리보기)로 만들고 싶다면 말해줘! 😊🚀
## ✨ 주요 기능

- **📱 반응형 디자인**  
  - 다양한 디바이스에서 최적화된 UI 제공  
  - 모바일 및 데스크탑 환경에서 다른 애니메이션 적용  

- **🎬 인터랙티브 애니메이션**  
  - `framer-motion`을 활용한 자연스러운 UI 트랜지션  
  - 스크롤 위치에 따라 동적으로 변화하는 요소  

- **⚡ 성능 최적화**  
  - Lighthouse 점수 개선을 위한 최적화  
  - `IntersectionObserver`를 활용한 렌더링 최적화  

---

## 🛠 기술 스택

- **Frontend**
  - React, TypeScript  
  - Styled-Components, Framer Motion  
  - IntersectionObserver API 활용  

- **Deployment**
  - Vercel  

---


## 📂 폴더 구조
```
📦 src
 ┣ 📂 assets            # 이미지 및 아이콘 파일
 ┃ ┣ 📂 icons          # 사용된 아이콘 파일
 ┃ ┗ 📂 img            # 프로필 및 기타 이미지 파일
 ┣ 📂 components        # 재사용 가능한 UI 컴포넌트 모음
 ┃ ┣ 📂 sidebar        # 사이드바 컴포넌트
 ┃ ┃ ┗ 📜 SideBar.tsx  
 ┃ ┣ 📂 ErrorBoundary  # 에러 핸들링 컴포넌트
 ┃ ┃ ┗ 📜 ErrorBoundary.tsx  
 ┣ 📂 hooks             # 커스텀 훅 모음
 ┃ ┣ 📜 useActiveSection.ts         # 현재 활성화된 섹션 감지 훅
 ┃ ┗ 📜 useIntersectionObserver.ts  # 인터섹션 옵저버 훅
 ┣ 📂 pages             # 개별 페이지 컴포넌트
 ┃ ┣ 📜 Home.tsx         # 메인 페이지 (인트로)
 ┃ ┣ 📜 MainPage.tsx     # 전체 페이지를 감싸는 메인 레이아웃
 ┃ ┣ 📜 AboutMe1.tsx     # 자기소개 페이지 1
 ┃ ┣ 📜 AboutMe2.tsx     # 자기소개 페이지 2 (학력)
 ┃ ┣ 📜 AboutMe3.tsx     # 자기소개 페이지 3 (기술 스택)
 ┃ ┣ 📜 Contact.tsx      # 연락처 페이지
 ┃ ┣ 📜 Projects.tsx     # 프로젝트 리스트 페이지
 ┃ ┣ 📜 Project1.tsx     # 프로젝트 1 상세 페이지
 ┃ ┣ 📜 Project2.tsx     # 프로젝트 2 상세 페이지
 ┃ ┣ 📜 Project3.tsx     # 프로젝트 3 상세 페이지
 ┃ ┣ 📜 Project4.tsx     # 프로젝트 4 상세 페이지
 ┃ ┗ 📜 NotFound.tsx     # 404 페이지 (잘못된 경로)
 ┣ 📂 styles            # 스타일 관련 파일
 ┃ ┣ 📜 global.ts       # 전역 스타일 정의
 ┃ ┣ 📜 theme.ts        # 다크/라이트 테마 설정
 ┃ ┗ 📜 ProjectsStyles.ts # 프로젝트 페이지 스타일
 ┣ 📜 App.tsx           # 애플리케이션 루트 컴포넌트
 ┗ 📜 main.tsx          # 앱의 진입점
```

---

## 📬 연락처

- **GitHub**: [github.com/gahyeon11](https://github.com/gahyeon11)  
- **Email**: keh5667@gmail.com  
