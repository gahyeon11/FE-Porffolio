import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Home() {
  const [showNewText, setShowNewText] = useState(false);

  const textLines = [
    { text: "안녕하세요.", x: -1000, y: -40, size: "32px" },
    { text: "프론트엔드 개발자", x: 1000, y: 60, size: "50px", isMoving: true },
    { text: "김가현입니다.", x: -1000, y: 110, size: "48px" },
  ];

  return (
    <HomeStyle>
      {textLines.map((line, index) => (
        <AnimatedText
          key={index}
          initial={{ opacity: 0, x: line.x, y: line.y, scale: 0.1 }}
          animate={{
            opacity: 1,
            x: showNewText && line.isMoving ? 250 : 0, // showNewText가 true일 때만 이동
            y: 0,
            scale: 1.5,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15, delay: index * 0.5 }}
          size={line.size}
          onAnimationComplete={() => index === 1 && setShowNewText(true)}
        >
          {line.text}
        </AnimatedText>
      ))}

      {/* showNewText가 true일 때만 새로운 텍스트를 나타냄 */}
      {showNewText && (
        <ReplacementText
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: -120 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1  }}
        >
          끊임없이 발전하는
        </ReplacementText>
      )}
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  text-align: center;
`;

const AnimatedText = styled(motion.div)`
  font-size: ${({ size }) => size};
  font-weight: bold;
  text-align: left;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const ReplacementText = styled(motion.div)`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  text-align: left;
  position: absolute;
  left: calc(50% - 250px); /* 중앙 정렬을 위한 위치 조정 */
  top: 50%; /* 텍스트 위치를 조정 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
`;

export default Home;
