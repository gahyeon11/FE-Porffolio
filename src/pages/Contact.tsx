import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
  const controls = useAnimation(); // 애니메이션 제어 훅
  const ref = useRef(null);

  // IntersectionObserver 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible"); // 뷰포트에 들어오면 애니메이션 실행
        }
      },
      { threshold: 0.1 } // 요소의 10%가 화면에 보일 때 트리거
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <Container
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Title>CONTACT</Title>
      <Content>
        <ContactItem>
          <Icon>
            <FaGithub size={50} />
          </Icon>
          <TextContainer>
            <Label>UserName</Label>
            <Link href="https://github.com/gahyeon11" target="_blank">
              <CopyIcon>
                <FaLink />
              </CopyIcon>{" "}
              gahyeon11
            </Link>
          </TextContainer>
        </ContactItem>

        <ContactItem>
          <Icon>
            <FaEnvelope size={50} />
          </Icon>
          <TextContainer>
            <Label>MAIL</Label>
            <CopyText onClick={() => copyToClipboard("keh5667@gmail.com")}>
              <CopyIcon>
                <MdContentCopy />
              </CopyIcon>{" "}
              keh5667@gmail.com
            </CopyText>
          </TextContainer>
        </ContactItem>
      </Content>
    </Container>
  );
};

// Function to copy text to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("복사되었습니다.");
};

export default Contact;

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // 아래에서 시작
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // 위로 올라오며 나타남
};

// Styled Components
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  position: relative;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const Content = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10%;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Link = styled.a`
  font-size: 14px;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const CopyIcon = styled.span`
  font-size: 18px;
`;

const CopyText = styled.p`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
