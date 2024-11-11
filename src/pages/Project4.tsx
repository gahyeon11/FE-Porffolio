import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import prj4_1 from "../assets/img/prj4-1.png";
import prj4_2 from "../assets/img/prj4-2.png";

import {
  ProjectContent,
  ProjectTitle,
  ProjectDate,
  IconContainer,
  TextContainer,
  DetailTitle,
  Description,
  Details,
  DetailItem,
  TechStack,
  Tech,
} from "../styles/ProjectsStyles";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const Project4 = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [controls]);

  return (
    <ProjectContent
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <ImageContainerBunny>
        <ImageRow>
          <ProjectImageBunny src={prj4_1} alt="Bunny" />
          <ProjectImageBunny src={prj4_2} alt="Bunny Additional" />
        </ImageRow>
        <ProjectTitle>Bunny</ProjectTitle>
        <ProjectDate>
          2024.09 - 진행중
          <IconContainer>
            <a
              href="https://github.com/BunnyProject/bunnyFE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            {/* <a
              href="https://your-website-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a> */}
          </IconContainer>
        </ProjectDate>
      </ImageContainerBunny>
      <TextContainer>
        <DetailTitle>프로젝트 설명</DetailTitle>
        <Description>
          Bunny는 근무시간과 수입을 그래프로 시각화하여 사용자가 실시간으로
          수입을 명확하게 확인할 수 있도록 돕는 애플리케이션입니다. 뿐만 아니라
          사용자의 커피, 간식 등의 일상적인 소소한 소비를 수입과 비교하여
          즉각적으로 반영함으로써, 경각심을 갖고 소비를 관리하며 저축을 도울 수
          있는 기능을 제공합니다.
        </Description>
        <DetailTitle>프로젝트 기여 내용</DetailTitle>
        <Details>
          <DetailItem>
            전체 페이지 UI 구현과 기능 구현을 진행 중입니다.{" "}
          </DetailItem>
        </Details>
        <DetailTitle>STACK</DetailTitle>
        <TechStack>
          <div>
            <Tech>MYSQL</Tech>
            <Tech>JAVA</Tech>
          </div>
          <div>
            <Tech>HTML</Tech>
            <Tech>CSS</Tech>
            <Tech>ReactNative</Tech>
            <Tech>TypeScript</Tech>
          </div>
          <div>
            <Tech>GIT</Tech>
            <Tech>GITHUB</Tech>
            <Tech>FIGMA</Tech>
          </div>
        </TechStack>
      </TextContainer>
    </ProjectContent>
  );
};

export default Project4;

const ImageContainerBunny = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 10px;
  gap: 10px;

`;

const ImageRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  max-height: 180px;
`;

const ProjectImageBunny = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;

  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
`;
