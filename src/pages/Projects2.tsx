import React from "react";
import styled from "styled-components";
import prj3 from "../assets/img/prj3.png";
import prj3_2 from "../assets/img/prj3-2.png";
import prj4_1 from "../assets/img/prj4-1.png";
import prj4_2 from "../assets/img/prj4-2.png";


const ProjectsPart2 = () => {
    return (
      <MainContainer>
        <SectionContainer>
          {/* MeloDiary Project */}
          <ProjectContent>
            <ImageContainer>
              <ProjectImage src={prj3} alt="MeloDiary" />
              <ProjectImage src={prj3_2} alt="MeloDiary Additional" />
              <ProjectTitle>MeloDiary</ProjectTitle>
              <ProjectDate>2024.07.29 - 2024.08.29</ProjectDate>
            </ImageContainer>
            <TextContainer>
              <Description>
                MeloDiary는 매일 일기를 작성하며 그날의 기분을 음악과 이모지로 표현하고, 친구와 일기 및 음악 목록을 공유할 수 있는 웹 서비스입니다.
                사용자는 그날의 이미지, 기분, 배경, 음악 등을 활용해 일기를 작성할 수 있습니다.
              </Description>
              <Details>
                <DetailItem>1. 전체적인 웹 페이지 디자인 및 UX/UI 구성</DetailItem>
                <DetailItem>2. 사용자 맞춤형 일기 작성 기능 구현</DetailItem>
                <DetailItem>3. 친구와 일기 공유 및 음악 플레이리스트 연동</DetailItem>
                <DetailItem>4. 성능 최적화 및 반응형 디자인 적용</DetailItem>
              </Details>
              <TechStack>
                <Tech>MYSQL</Tech>
                <Tech>NODE.JS</Tech>
                <Tech>EXPRESS</Tech>
                <Tech>JavaScript</Tech>
                <Tech>HTML</Tech>
                <Tech>CSS</Tech>
                <Tech>zustand</Tech>
                <Tech>Axios</Tech>
                <Tech>REACT</Tech>
                <Tech>StyledComponent</Tech>
                <Tech>GIT</Tech>
                <Tech>GITHUB</Tech>
                <Tech>FIGMA</Tech>
              </TechStack>
            </TextContainer>
          </ProjectContent>
  
          {/* Bunny Project */}
          <ProjectContent>
            <ImageContainerBunny>
              <ImageRow>
                <ProjectImageBunny src={prj4_1} alt="Bunny" />
                <ProjectImageBunny src={prj4_2} alt="Bunny Additional" />
              </ImageRow>
              <ProjectTitle>Bunny</ProjectTitle>
              <ProjectDate>2024.09 - 진행중</ProjectDate>
            </ImageContainerBunny>
            <TextContainer>
              <Description>
                Bunny는 근무시간과 수입을 그래프로 시각화하여 사용자가 실시간으로 수입을 확인할 수 있도록 돕는 애플리케이션입니다. 사용자에게 실시간 수입 추적과 소비 관리 기능을 제공합니다.
              </Description>
              <Details>
                <DetailItem>1. 전체 페이지 UI 및 그래프 기능 구현</DetailItem>
                <DetailItem>2. 사용자 맞춤형 수입/지출 분석 기능</DetailItem>
                <DetailItem>3. 모바일 최적화 및 반응형 디자인 적용</DetailItem>
              </Details>
              <TechStack>
                <Tech>MYSQL</Tech>
                <Tech>JAVA</Tech>
                <Tech>HTML</Tech>
                <Tech>CSS</Tech>
                <Tech>ReactNative</Tech>
                <Tech>TypeScript</Tech>
                <Tech>GIT</Tech>
                <Tech>GITHUB</Tech>
                <Tech>FIGMA</Tech>
              </TechStack>
            </TextContainer>
          </ProjectContent>
        </SectionContainer>
      </MainContainer>
    );
  };
  
  export default ProjectsPart2;
  
  const MainContainer = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
  `;
  
  const ProjectContent = styled.div`
    display: flex;
    align-items: flex-start;
    background: #f9f9f9;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
  `;
  
  const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `;
  
  const ImageContainerBunny = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 10px;
  `;
  
  const ImageRow = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    height: 200px;
  `;
  
  const ProjectImage = styled.img`
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;
  
  const ProjectImageBunny = styled.img`
    width: 100px;
    height: auto;
    border-radius: 8px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  `;
  
  const ProjectTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 8px;
    text-align: center;
  `;
  
  const ProjectDate = styled.span`
    font-size: 12px;
    color: #999;
    text-align: center;
  `;
  
  const TextContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  
  const Description = styled.p`
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  `;
  
  const Details = styled.ul`
    margin: 10px 0;
    padding-left: 20px;
    font-size: 14px;
    color: #444;
  `;
  
  const DetailItem = styled.li`
    margin-bottom: 4px;
  `;
  
  const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  `;
  
  const Tech = styled.span`
    background-color: #e0e0e0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    color: #333;
  `;