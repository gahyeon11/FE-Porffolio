import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import prj3 from "../assets/img/prj3.png";
import prj3_2 from "../assets/img/prj3-2.png";
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

const Project3 = () => {
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
        <ProjectImage src={prj3} alt="MeloDiary" />
        <ProjectImage src={prj3_2} alt="MeloDiary Additional" />
        <ProjectTitle>MeloDiary</ProjectTitle>
        <ProjectDate>
          2024.07.29 - 2024.08.29
          <IconContainer>
            <a
              href="https://github.com/MeloDiary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://melodiary.site/"
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
          MeloDiary는 매일 일기를 작성하며 그날의 기분을 음악과 이모지로
          표현하고, 친구와 일기 및 음악 목록을 공유할 수 있는 웹 서비스입니다.
          사용자는 그날의 이모지, 기분, 배경, 이미지, 다양한 폰트 테마, 음악
          등을 활용해서 일기를 작성합니다. 작성된 일기는 친구 혹은 다른 사람들과
          공유할 수 있고 나만 볼 수 있도록 관리할 수도 있습니다. 사용자의 기분
          그래프나 플레이리스트를 통해서도 일기를 확인하고 그날을 돌아볼 수 있는
          서비스를 제공합니다.
        </Description>
        <DetailTitle>프로젝트 기여 내용</DetailTitle>
        <Details>
          <DetailItem>
            1. 전반적인 페이지 디자인 <br />
            사용자가 직관적이고 쉽게 사이트를 이용할 수 있도록 사용자 경험을
            최우선으로 고려하여 프로젝트 전체 페이지의 디자인을 담당하였습니다.
          </DetailItem>
          <DetailItem>
            2. 홈 일기 페이지 및 일기 상세 페이지 구현
            <br />
            사용자가 일기를 쉽게 작성하고 관리할 수 있도록, 홈 일기 페이지와
            일기 상세 페이지의 UI와 기능을 구현하였습니다. 특히 재활용 가능한
            일기 컴포넌트를 개발하여 다양한 페이지에서 효율적으로 사용할 수
            있도록 하였습니다.
          </DetailItem>
          <DetailItem>
            3. 공개 소통 페이지 및 친구 소통 페이지 구현 <br />
            EXPLORE 페이지: 다른 사용자들과 일기와 음악을 공유하며 소통할 수
            있는 전체 공개 소통 페이지를 구현하였습니다. MATES 페이지:
            친구들끼리만 공유하는 소통 페이지를 구현하여 개인화된 소통 경험을
            제공하였습니다.
          </DetailItem>
          <DetailItem>
            4. 뮤직바 및 친구 관리 기능 구현
            <br />
            사용자가 일기 작성 중 또는 감상할 때 음악을 선택하고 재생할 수
            있도록 뮤직바 기능을 구현하였습니다. 친구를 신청, 추가, 삭제하는
            기능을 통해 사용자 간의 상호작용을 돕고, 소셜 기능을 강화하였습니다.
          </DetailItem>
          <DetailItem>
            5. 에러 핸들링 <br />
            예상치 못한 에러 발생 시에도 사용자 경험이 방해받지 않도록 ERROR
            BOUNDARY를 적용하여 방어 로직을 구현하였습니다. 에러가 발생하면
            사용자에게 적절한 알림을 제공하고, 앱이 중단되지 않도록 에러 처리
            방식을 설계하였습니다.
          </DetailItem>
          <DetailItem>
            6. 성능 최적화
            <br />
            Lighthouse 를 사용하여 페이지 성능을 분석하고, 이를 기반으로 최적화
            작업을 수행하였습니다. 페이지 로딩 속도, 인터랙션 성능 등을 향상시켜
            사용자 경험을 개선하고, 최종적으로 성능 점수를 높이는 결과를
            도출하였습니다.
          </DetailItem>
        </Details>
        <DetailTitle>STACK</DetailTitle>
        <TechStack>
          <div>
            <Tech>MYSQL</Tech>
            <Tech>NODE.JS</Tech>
            <Tech>EXPRESS</Tech>
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

export default Project3;