import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const AboutMe2 = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
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
        variants={containerVariants}
      >
        <Title>EDUCATION</Title>
        <EducationContainer>
          <EducationCard
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <span>덕성여자대학교</span>
            <span>IT미디어공학과</span>
            <span>2020.02 - 2025.02</span>
          </EducationCard>
          <EducationCard
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <span>프로그래머스</span>
            <span>웹 풀스택 데브코스</span>
            <span>2024.02 - 2024.09</span>
          </EducationCard>
        </EducationContainer>
      </SectionContainer>
    </div>
  );
};

export default AboutMe2;

// 애니메이션 Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

// 스타일 정의
const SectionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const EducationContainer = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
    align-items: center;
  }
`;

const EducationCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 350px;
  height: 200px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;
