import { motion } from "framer-motion";
import styled from "styled-components";
import Profile from "../assets/img/me 1.png";

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

const SectionContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;

  position: relative; /* Profile 이미지와 텍스트를 겹치기 위해 */
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ProfileContainer = styled.div`
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

  opacity: 1; /* 기본 데스크탑 투명도 */

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3; /* 모바일에서 아주 옅게 표시 */
    filter: blur(2.5px); /* 약간 흐릿하게 표시 */
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
    content: "✅"; // 아이폰 체크 이모지 추가
    position: absolute;
    left: 0;
    top: 0;
  }
`;
