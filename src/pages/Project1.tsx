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
  EmphasizedText,
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
        <DetailTitle>프로젝트 소개</DetailTitle>
        <Description>
          본 프로젝트는 생성형 AI를 활용하여 그림을 생성하고, 생성된 그림을 가상
          공간에 전시하도록 하는 프로젝트 입니다. 특히 베리어프리를 주제로 하여
          모든 사용자가 이용 가능하도록 제작하였습니다. 이를 위해 음성인식과
          생성형 AI 기술을 결합하여, 모든 과정은 음성과 마우스 모두 동작
          가능하도록 개발 하였습니다.
          <br /> 사용자들은 AI로 단순히 그림을 생성하는 것이 아니라, 그림의
          수정, 추가, 삭제, 필터링 등의 과정에도 적극적으로 참여할 수 있습니다.
          이를 통해 AI의 그림이 아닌 자신만의 독창적인 작품을 완성할 수
          있습니다. <br />
          생성한 그림은 언리얼 엔진으로 제작된 가상의 공간에 전시할 수 있습니다.
          전시관은 기본 테마와 바다 테마가 제공되며, 사용자는 본인의 그림을
          특별한 공간에 전시해보는 색다른 경험을 즐길 수 있습니다.
        </Description>
        <DetailTitle>프로젝트 기여 내용</DetailTitle>
        <Details>
          <DetailItem>
            <EmphasizedText>
              1. 전반적인 페이지 디자인 및 UI 구현
            </EmphasizedText>
            <br />
            사용자들이 직관적으로 그림을 생성하고 전시할 수 있도록 페이지 전체의
            디자인과 UI를 설계하고 구현하였습니다. <br />
            사용자 전체의 접근성을 높이기 위해 음성, 마우스 모두의 동작이 수월한
            UI를 구현하기 위해 노력하였습니다.
          </DetailItem>
          <DetailItem>
            <EmphasizedText>
              2. 음성인식을 활용한 로그인 기능 구현
            </EmphasizedText>
            <br />
            음성인식 기술을 사용하여 로그인 기능을 개발하였습니다.
          </DetailItem>
          <DetailItem>
            <EmphasizedText>
              3. 음성인식과 OpenCV를 활용한 이미지 수정 및 필터 기능 구현
            </EmphasizedText>
            <br />
            음성인식을 통해 사용자가 그림을 수정, 추가, 삭제하거나 필터를
            적용하는 기능을 구현했습니다. <br />
            이를 통해 사용자가 직접 자신의 스타일대로 그림을 꾸밀 수 있도록
            하였으며, OpenCV를 활용하여 다양한 이미지 처리 및 필터링 기능을
            적용했습니다.
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
