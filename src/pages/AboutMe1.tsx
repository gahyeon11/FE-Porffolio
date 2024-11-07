import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Profile from "../assets/img/ME.png";

const AboutMe1 = () => {
  return (
    <div id="aboutme" style={{ minHeight: "100vh" }}>
    <SectionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileContainer />
      <TextContainer>
        <TitlePrimary>끊임없이 발전하는</TitlePrimary>
        <TitleSecondary>프론트엔드 개발자 김가현입니다.</TitleSecondary>
        <Description>
          배움의 즐거움을 아는 소통하는 개발자입니다.
          <br />
          새로운 도전을 두려워하지 않습니다.
          <br />
          사용자 입장에서 생각합니다.
        </Description>
      </TextContainer>
    </SectionContainer>
    </div>
  );
};

export default AboutMe1;

const SectionContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const ProfileContainer = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${Profile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Apply a gradient mask for the fade-out effect */
  mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
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
  color: #3366ff;
  margin-bottom: 8px;
`;

const TitleSecondary = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;
