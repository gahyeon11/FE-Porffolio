import { motion } from "framer-motion";
import styled from "styled-components";

const AboutMe2 = () => {
  return (
    <div id="aboutme" style={{ minHeight: "100vh" }}>
    <SectionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>EDUCATION</Title>
      <EducationContainer>
        <EducationCard>
          <span>덕성여자대학교</span>
          <span>IT미디어공학과</span>
          <span>2020.02 - 2025.02</span>
        </EducationCard>
        <EducationCard>
          <span>프로그래머스</span>
          <span>웹 풀사이클 데브코스</span>
          <span>2024.02 - 2024.09</span>
        </EducationCard>
      </EducationContainer>
    </SectionContainer>
    </div>
  );
};

export default AboutMe2;

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
`;

const EducationCard = styled.div`
  /* background: #DAD7D7;
  padding: 30px 80px;
  border-radius: 20px;
  box-shadow: 2px 6px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 150px; */

  align-items: center; 
  background: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 60px;
  /* margin: 25px auto; */
  max-width: 1200px;
  text-align: center;


  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
`;
