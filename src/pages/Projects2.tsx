import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import prj2 from "../assets/img/prj2.png";
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

const Project2 = () => {
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
        <ProjectImage src={prj2} alt="Project 2" />
        <ProjectTitle>DEVSIMPLEQUIZ</ProjectTitle>
        <ProjectDate>
          2024.06.24 - 2024.07.16
          <IconContainer>
            <a
              href="https://github.com/DevSimpleQuiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://devsimplequiz.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          </IconContainer>
        </ProjectDate>
      </ImageContainer>
      <TextContainer>
        <DetailTitle>프로젝트 설명</DetailTitle>
        <Description>
              심심할 때 재미있게 두뇌를 자극하며 즐길 수 있는 어휘 퀴즈 웹
              사이트입니다. 사용자는 약 3500개의 랜덤한 한국어 어휘 퀴즈를 풀며
              여가시간을 활용할 수 있습니다. 10개씩 세트로 구성 된 퀴즈와 오답이
              나올 때 까지 무한으로 즐길 수 있는 퀴즈 두가지 테마가 제공되며,
              로그인 한 사용자의 경우 랭킹 시스템도 이용 가능하도록
              구현되었습니다.
            </Description>
            <DetailTitle>프로젝트 기여 내용</DetailTitle>
            <Details>
              <DetailItem>
                1. 전반적인 페이지 디자인 및 UI/기능 구현 - 사용자가 직관적이고
                쉽게 사이트를 이용할 수 있도록 사용자 경험을 중점적으로 고려하여
                전체 페이지의 인터페이스 디자인을 담당하였습니다.
              </DetailItem>
              <DetailItem>
                2. 메인 페이지 - 어휘 퀴즈 사이트의 첫인상을 결정짓는 메인
                페이지의 UI와 기능을 설계하고 구현하였습니다. 사용자들이 쉽게
                퀴즈에 접근할 수 있도록 직관적이고 깔끔한 디자인을 적용하였으며,
                퀴즈 주제 선택 등 주요 기능을 명확하게 배치하여 편리한 사용자
                경험을 제공했습니다. 또한 상단에 베너를 크게 배치하여 다양한
                정보를 효율적으로 보일 수 있도록 하였습니다.
              </DetailItem>
              <DetailItem>
                3. 퀴즈 결과 페이지 - 사용자가 퀴즈를 완료한 후, 결과를 한눈에
                확인할 수 있는 UI를 설계하였습니다. 퀴즈 점수, 맞춘 단어 수,
                틀린 단어 등에 대한 정보를 시각적으로 쉽게 파악할 수 있도록
                구성하였으며, 결과에 따라 랭킹 시스템과 연결되는 기능을
                구현하였습니다.
              </DetailItem>
              <DetailItem>
                4. 마이페이지 - 사용자가 자신의 퀴즈 기록 및 랭킹, 설정 등을
                확인하고 관리할 수 있는 마이페이지 UI를 구현하였습니다. 사용자
                맞춤형 정보를 제공하기 위해 직관적인 인터페이스와 기능을
                배치하였으며, 사용자의 퀴즈 통계 및 정보 관리 기능을
                추가하였습니다.
              </DetailItem>
              <DetailItem>
                5. 비밀번호 재설정 페이지 - 사용자가 비밀번호를 재설정할 수 있는
                페이지를 구현하였습니다. 비밀번호 재설정 과정이 복잡하지 않도록
                직관적이고 단순한 UI를 설계하고, 사용자 경험을 개선하기 위한
                로직을 포함하였습니다.
              </DetailItem>
              <DetailItem>
                6. 상태 관리 - 사용자 로그인 상태를 관리하기 위해 Zustand를
                활용한 상태 관리 로직을 구현하였습니다. 상태 관리를 통해 각
                페이지가 사용자별로 적절한 데이터를 표시할 수 있도록 하여 일관된
                사용자 경험을 제공하였습니다.
              </DetailItem>
              <DetailItem>
                7.에러 핸들링 - 예상치 못한 에러 발생 시에도 사용자 경험이
                방해받지 않도록 Error Boundary 적용하여 방어 로직을
                구현하였습니다. 에러가 발생하면 사용자에게 적절한 알림을
                제공하고, 앱이 중단되지 않도록 에러 처리 방식을 설계하였습니다.
              </DetailItem>
              <DetailItem>
                8. 성능 최적화 - Lighthouse 를 사용하여 페이지 성능을 분석하고,
                이를 기반으로 최적화 작업을 수행하였습니다. 페이지 로딩 속도,
                인터랙션 성능 등을 향상시켜 사용자 경험을 개선하고, 최종적으로
                성능 점수를 높이는 결과를 도출하였습니다.
              </DetailItem>
            </Details>
            <DetailTitle>STACK</DetailTitle>
            <TechStack>
              <div>
                <Tech>MYSQL</Tech>
                <Tech>Node.JS</Tech>
                <Tech>Express</Tech>
                <Tech>JavaScript</Tech>
              </div>
              <div>
                <Tech>HTML</Tech>
                <Tech>CSS</Tech>
                <Tech>REACT</Tech>
                <Tech>TypeScript</Tech>
              </div>
              <div>
                <Tech>Zustand</Tech>
                <Tech>Axios</Tech>
                <Tech>Styled-Component</Tech>
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

export default Project2;