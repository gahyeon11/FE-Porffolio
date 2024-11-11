import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import prj1 from "../assets/img/prj1.png";
import {
  ProjectContent,
  ImageContainer,
  ProjectImage,
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

const Project1 = () => {
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
      <ImageContainer>
        <ProjectImage src={prj1} alt="Project 1" />
        <ProjectTitle>
              음성인식과 생성 AI를 활용한 그림 생성 및 가상공간 전시 프로젝트
            </ProjectTitle>
            <ProjectDate>
              2023.08 - 2023.11
              <IconContainer>
                <a
                  href="https://github.com/Digipro02-meta/MEMUSE"
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
          </ImageContainer>

          <TextContainer>
            <DetailTitle>프로젝트 설명</DetailTitle>
            <Description>
              생성형 AI를 활용하여 그림을 생성하고, 생성된 그림을 가상 공간에
              전시할 수 있습니다. 특히 베리어프리를 주제로 모든 사용자가 접근
              가능하도록 음성인식과 생성형 AI 기술을 결합하여 개발되었습니다.
              사용자들은 AI가 단순히 그림을 생성하는 것이 아니라, 그림의 수정
              추가 삭제 필터링 등의 과정에도 적극적으로 참여하도록 하여, AI의
              그림이 아닌 자신만의 독창적인 작품으로 완성할 수 있습니다. 생성한
              그림은 기본 테마와 바다 테마로 구성된 가상 전시관에 전시할 수
              있으며, 실제로 자신이 만든 작품을 전시하는 특별한 경험을
              제공합니다.
            </Description>
            <DetailTitle>프로젝트 기여 내용</DetailTitle>
            <Details>
              <DetailItem>
                1. 전반적인 페이지 디자인 및 UI 구현 <br />
                  사용자들이 직관적으로
                그림을 생성하고 전시할 수 있도록 페이지 전체의 디자인과 UI를
                설계하고 구현하였습니다. 사용자 전체의 접근성을 높이기 위해
                음성, 마우스 모두의 동작이 수월한 UI를 구현하기 위해
                노력하였습니다.
              </DetailItem>
              <DetailItem>
                2. 음성인식을 활용한 로그인 기능 구현 <br />
                 음성인식 기술을 사용하여
                로그인 기능을 개발하였습니다.
              </DetailItem>
              <DetailItem>
                3. 음성인식과 OpenCV를 활용한 이미지 수정 및 필터 기능 구현  <br />
                음성인식을 통해 사용자가 그림을 수정, 추가, 삭제하거나 필터를
                적용하는 기능을 구현했습니다. 이를 통해 사용자가 직접 자신의
                스타일대로 그림을 꾸밀 수 있도록 하였으며, OpenCV를 활용하여
                다양한 이미지 처리 및 필터링 기능을 적용했습니다.
              </DetailItem>
            </Details>
            <DetailTitle>STACK</DetailTitle>
            <TechStack>
              <div>
                <Tech>FLASK</Tech>
                <Tech>MYSQL</Tech>
                <Tech>PYTHON</Tech>
              </div>
              <div>
                <Tech>HTML</Tech>
                <Tech>CSS</Tech>
                <Tech>JavaScript</Tech>
              </div>
              <div>
                <Tech>UnrealEngine</Tech>
                <Tech>StableDiffusion</Tech>
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

export default Project1;