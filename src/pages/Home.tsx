import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Home() {
  const mainRef = useRef(null);
  const isIntersecting = useIntersectionObserver(mainRef);

  const [showNewText, setShowNewText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 초기 화면 크기 판단

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      if (isNowMobile !== isMobile) {
        window.location.reload(); // 화면 크기 변경 시 새로고침
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // 모든 텍스트 (모바일 포함)
  const textLines = isMobile
    ? [
        { text: "안녕하세요.", size: "25px"},
        { text: "끊임없이 발전하는", size: "32px" },
        { text: "프론트엔드 개발자", size: "32px" },
        { text: "김가현입니다.", size: "25px" },
      ]
    : [
        { text: "안녕하세요.", size: "20px" },
        { text: "프론트엔드 개발자", size: "32px", isMoving: true },
        { text: "김가현입니다.", size: "25px" },
      ];

  return (
    <motion.div
      ref={mainRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <HomeStyle>
        {textLines.map((line, index) => (
          <AnimatedTextContainer key={index}>
            <AnimatedText
              initial={{ opacity: 0, y: isMobile ? 30 : 0 }}
              animate={{
                opacity: 1,
                y: 0,
                x: isMobile
                  ? 0
                  : showNewText && line.isMoving
                  ? 270 // 데스크탑: 오른쪽으로 이동
                  : 0,
                scale: isMobile ? 1 : 1.5,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: index * 0.5,
              }}
              size={line.size}
              text={line.text}
              onAnimationComplete={() => !isMobile && index === 1 && setShowNewText(true)} // 데스크탑: 상태 변경
            >
              {line.text}
            </AnimatedText>
            {!isMobile && line.isMoving && showNewText && (
              <ReplacementText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.5,
                }}
              >
                끊임없이 발전하는
              </ReplacementText>
            )}
          </AnimatedTextContainer>
        ))}
      </HomeStyle>
    </motion.div>
  );
}

export default Home;

// 스타일 정의
const HomeStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center; /* 텍스트를 수평 중앙으로 */
  justify-content: center; /* 텍스트를 수직 중앙으로 */
  height: 100vh;
  padding: 20px;
  gap: 30px;
  margin: 0 auto;
  text-align: left; /* 텍스트는 왼쪽 정렬 */

  @media (max-width: 768px) {
    gap: 10px;
    padding: 10px;
  }
`;

const AnimatedTextContainer = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  /* margin: ${({ margin }) => margin || "0"};  */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const AnimatedText = styled(motion.div)<{ size: string;margin?: string; text: string  }>`
  font-size: ${({ size }) => size};
  font-weight: bold;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  margin-left: ${({ text }) =>
      text === "프론트엔드 개발자" ? "28px" : text === "안녕하세요." ? "-6px" : "0px"};

  @media (max-width: 768px) {
    font-size: ${({ size }) => size};
    margin-left: ${({ text }) =>
      text === "프론트엔드 개발자" ? "0px" : text === "안녕하세요." ? "0px" : "0px"};
    color: ${({ text, theme }) =>
      text === "끊임없이 발전하는" ? theme.color.primary : theme.color.black};
  }
`;

const ReplacementText = styled(motion.span)`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  /* position: absolute; */
  /* left: 10px; */
  margin-left: -35px;
  margin-top: -40px; 

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 ReplacementText 비활성화 */
  }
`;
