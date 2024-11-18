import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import react from "../assets/icons/image.png";
import RN from "../assets/icons/RN.png";
import python from "../assets/icons/python.png";
import java from "../assets/icons/java.png";
import node from "../assets/icons/node.png";
import c from "../assets/icons/c.png";

const AboutMe3 = () => {
  const controls = useAnimation(); // Framer Motion 애니메이션 제어
  const sectionRef = useRef(null); // 섹션 참조

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [controls]);

  return (
    <div id="aboutme" style={{ minHeight: "100vh" }} ref={sectionRef}>
      <SectionContainer
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <Title>SKILL</Title>
        <SkillCategory>Familiar</SkillCategory>
        <SkillContainer>
          {familiarSkills.map((skill) => (
            <SkillIconContainer key={skill.name}>
              <SkillIcon src={skill.icon} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillIconContainer>
          ))}
        </SkillContainer>

        <SkillCategory>Tried</SkillCategory>
        <SkillContainer>
          {triedSkills.map((skill) => (
            <SkillIconContainer key={skill.name}>
              <SkillIcon src={skill.icon} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillIconContainer>
          ))}
        </SkillContainer>
      </SectionContainer>
    </div>
  );
};

export default AboutMe3;

// 애니메이션 variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// 데이터 배열
const familiarSkills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "React", icon: react },
  { name: "React Native", icon: RN },
];

const triedSkills = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C / C++", icon: c },
  { name: "Node.js", icon: node },
];

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

const SkillCategory = styled.h4`
  font-size: 16px;
  color: #666;
  margin: 20px 0 10px;
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SkillIconContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: perspective(1000px);
  transition: transform 0.5s, background 0.5s;

  &:hover {
    transform: rotateY(180deg);
    background: rgba(0, 0, 0, 0.3);
  }

  &:hover img {
    opacity: 0.3;
  }
`;

const SkillIcon = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  position: absolute;
  backface-visibility: hidden;
`;

const SkillName = styled.div`
  position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: rotateY(180deg);

  ${SkillIconContainer}:hover & {
    opacity: 1;
  }
`;
