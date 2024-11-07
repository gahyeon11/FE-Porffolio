import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import react from "../assets/icons/react.png";
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
        <SkillIcon src={html} alt="HTML" />
        <SkillIcon src={css}  alt="CSS" />
        <SkillIcon src={js}  alt="JavaScript" />
        <SkillIcon src={ts}  alt="TypeScript" />
        <SkillIcon src={react}  alt="React" />
        <SkillIcon src={RN}  alt="React Native" />
      </SkillContainer>

      <SkillCategory>tried</SkillCategory>
      <SkillContainer>
        <SkillIcon src={python} alt="Python" />
        <SkillIcon src={java} alt="Java" />
        <SkillIcon src={c} alt="C++" />
        <SkillIcon src={node} alt="Node.js" />
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
  margin-bottom: 20px;
`;

const SkillCategory = styled.h4`
  font-size: 16px;
  font-weight: bold;
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

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
