import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
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
  return (
    <div id="aboutme" style={{ minHeight: "100vh" }}>
      <SectionContainer>
        <Title>SKILL</Title>
        <SkillCategory>Familiar</SkillCategory>
        <SkillContainer>
          {familiarSkills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </SkillContainer>

        <SkillCategory>Tried</SkillCategory>
        <SkillContainer>
          {triedSkills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </SkillContainer>
      </SectionContainer>
    </div>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      controls.start({ rotateY: 180 });
      setTimeout(() => {
        controls.start({ rotateY: 0 });
        setIsFlipped(false);
      }, 2000);
    }
  };

  return (
    <SkillIconContainer onMouseEnter={handleMouseEnter}>
      <SkillCard
        as={motion.div}
        animate={controls}
        initial={{ rotateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 앞면 */}
        <CardFront>
          <SkillIcon src={skill.icon} alt={skill.name} />
        </CardFront>

        {/* 뒷면 */}
        <CardBack>
          <SkillName>{skill.name}</SkillName>
        </CardBack>
      </SkillCard>
    </SkillIconContainer>
  );
};
export default AboutMe3;

interface Skill {
  name: string;
  icon: string;
}

const familiarSkills: Skill[] = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "React", icon: react },
  { name: "React Native", icon: RN },
];

const triedSkills: Skill[] = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C / C++", icon: c },
  { name: "Node.js", icon: node },
];

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
  perspective: 1000px;
`;

const SkillIcon = styled.img`
  width: 100%;
  height: 100%;
  /* backface-visibility: hidden; */
`;

const SkillName = styled.div`
  /* position: absolute;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  transform: none;  */
  color: #323131aa;
  font-size: 14px;
  font-weight: bold;
`;

const SkillCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #8080804d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
