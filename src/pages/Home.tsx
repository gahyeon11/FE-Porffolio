import { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Home() {
  const mainRef = useRef(null);
  const isIntersecting = useIntersectionObserver(mainRef);

  const [showNewText, setShowNewText] = useState(false);

  const textLines = [
    { text: "안녕하세요.", x: 0, y: -40, size: "20px" },
    { text: "프론트엔드 개발자", x: 0, y: 60, size: "32px", isMoving: true, marginLeft: "32px" }, // marginLeft 추가
    { text: "김가현입니다.", x: 0, y: 110, size: "25px" , marginLeft: "7px"},
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
              initial={{ opacity: 0, x: line.x, y: line.y, scale: 0.1 }}
              animate={{
                opacity: 1,
                x: showNewText && line.isMoving ? 280 : 0, // 오른쪽으로 이동
                y: 0,
                scale: 1.5,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: index * 0.5,
              }}
              size={line.size}
              marginLeft={line.marginLeft} // Pass marginLeft prop here
              text={line.text}
              onAnimationComplete={() => index === 1 && setShowNewText(true)}
            >
              {line.text}
            </AnimatedText>
            {line.isMoving && showNewText && (
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

// const HomeStyle = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   overflow: hidden;
//   padding: 20px;
//   gap: 30px;
//   margin: 0 auto;
// `;

// const AnimatedTextContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   width: 100%;
//   max-width: 500px;
//   position: relative;
//   text-align: left;
// `;

// const AnimatedText = styled(motion.div)<{ size: string }>`
//   font-size: ${({ size }) => size};
//   font-weight: bold;
//   display: inline-block;
//   min-width: fit-content;
//   text-align: left;
// `;

// const ReplacementText = styled(motion.span)`
//   font-size: 32px;
//   font-weight: bold;
//   color: ${({ theme }) => theme.color.primary};
//   position: absolute;
//   left: -27px;
// `;
const HomeStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* overflow: hidden; */
  padding: 20px;
  gap: 30px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) { /* Mobile view adjustments */
    padding: 10px 0;
    gap: 15px; /* Reduce gap for smaller screens */
  }
`;

const AnimatedTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 500px;
  position: relative;
  text-align: center; /* Center text within each line */

  @media (max-width: 768px) {
    justify-content: start;
    /* max-width: 100%; */
    padding: 10px;
    gap: 15px;
    /* max-width: 100%; */
  }
`;
const AnimatedText = styled(motion.div)<{ size: string; marginLeft?: string; text: string }>`
  font-size: ${({ size }) => size};
  font-weight: bold;
  display: inline-block;
  min-width: fit-content;
  text-align: center;
  margin-left: ${({ marginLeft }) => marginLeft || "0px"}; /* 기본 marginLeft 값 */

  @media (max-width: 768px) {
    font-size: ${({ text, theme, size }) =>
      text === "프론트엔드 개발자"
        ? theme.responsiveTitle.title3
        : size === "25px"
        ? theme.responsiveTitle.title3
        : theme.responsiveText.title4};
        
    margin-left: ${({ text }) =>
      text === "프론트엔드 개발자" ? "4px" : text === "안녕하세요." ? "-10px" : "0px"};
  }
`;



const ReplacementText = styled(motion.span)`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  position: absolute;
  left: -30px;
  

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.responsiveTitle.title3};
    max-width: 100%;
    flex-direction: column; /* Stack text vertically on smaller screens */
    align-items: center; /* Center-align on mobile */
    /* position: relative; */
    /* left: 0; */
    margin-left: 2px;
  }
`;
