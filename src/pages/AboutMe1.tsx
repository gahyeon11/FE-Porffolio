import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import Profile from "../assets/img/me 1.png";

const AboutMe1 = () => {
  const controls = useAnimation(); // 애니메이션 제어 훅
  const ref = useRef(null);

  const isMobile = window.innerWidth <= 768; // 모바일 환경 판단

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible"); // 뷰포트에 들어오면 애니메이션 실행
        }
      },
      { threshold: 0.3 } // 요소의 30%가 화면에 보일 때 트리거
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div id="aboutme" style={{ minHeight: "100vh" }}>
      <SectionContainer
        ref={ref}
        initial="hidden"
        animate={controls}
        exit="hidden"
        variants={isMobile ? mobileContainerVariants : containerVariants}
      >
        <ProfileContainer
          variants={isMobile ? mobileImageVariants : imageVariants}
        />
        <TextContainer>
          <TitlePrimary>끊임없이 발전하는</TitlePrimary>
          <TitleSecondary>프론트엔드 개발자 김가현입니다.</TitleSecondary>
          <Description>
            <DescriptionLine>
              배움의 즐거움을 아는 소통하는 개발자입니다.
            </DescriptionLine>
            <DescriptionLine>
              새로운 도전을 두려워하지 않습니다.
            </DescriptionLine>
            <DescriptionLine>사용자 입장에서 생각합니다.</DescriptionLine>
          </Description>
        </TextContainer>
      </SectionContainer>
    </div>
  );
};

export default AboutMe1;

// 애니메이션 Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const mobileImageVariants = {
  hidden: { opacity: 0.2 }, // 모바일 환경에서 낮은 투명도
  visible: { opacity: 0.2 }, // 항상 일정하게 유지
};

// 스타일 정의
const SectionContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ProfileContainer = styled(motion.div)`
  flex: 1;
  height: 100vh;
  background-image: url(${Profile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 30%,
    black 70%,
    transparent
  );
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1px); /* 약간 흐릿하게 */
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitlePrimary = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 8px;
`;

const TitleSecondary = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DescriptionLine = styled.span`
  position: relative;
  padding-left: 24px;

  &::before {
    content: "✅";
    position: absolute;
    left: 0;
    top: 0;
  }
`;
