import { motion } from "framer-motion";
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
      <SectionContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>SKILL</Title>
        <SkillCategory>familiar</SkillCategory>
        <SkillContainer>
          <SkillIconContainer>
            <SkillIcon src={html} alt="HTML" />
            <SkillName>HTML</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={css} alt="CSS" />
            <SkillName>CSS</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={js} alt="JavaScript" />
            <SkillName>JavaScript</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={ts} alt="TypeScript" />
            <SkillName>TypeScript</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={react} alt="React" />
            <SkillName>React</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={RN} alt="React Native" />
            <SkillName>React Native</SkillName>
          </SkillIconContainer>
        </SkillContainer>

        <SkillCategory>tried</SkillCategory>
        <SkillContainer>
          <SkillIconContainer>
            <SkillIcon src={python} alt="Python" />
            <SkillName>Python</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={java} alt="Java" />
            <SkillName>Java</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={c} alt="C++" />
            <SkillName>C / C++</SkillName>
          </SkillIconContainer>
          <SkillIconContainer>
            <SkillIcon src={node} alt="Node.js" />
            <SkillName>Node.js</SkillName>
          </SkillIconContainer>
        </SkillContainer>
      </SectionContainer>
    </div>
  );
};

export default AboutMe3;

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
  /* font-weight: bold; */
  color: #666;
  margin: 20px 0 10px;
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const SkillIconContainer = styled.div`
  position: relative;
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
  /* backface-visibility: hidden; */

  ${SkillIconContainer}:hover & {
    opacity: 1;
  }
`;
