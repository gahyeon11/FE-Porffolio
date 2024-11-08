import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import prj1 from "../assets/img/prj1.png";
import prj2 from "../assets/img/prj2.png";

const Projects = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <ProjectContent>
          <ImageContainer>
            <ProjectImage src={prj1} alt="Project 1" />
            <ProjectTitle>음성인식과 생성 AI를 활용한 그림 생성 및 가상공간 전시 프로젝트</ProjectTitle>
            <ProjectDate>2023.08 - 2023.11</ProjectDate>
          </ImageContainer>
          <TextContainer>
            <Description>
              생성형 AI를 활용하여 그림을 생성하고, 생성된 그림을 가상 공간에 전시할 수 있습니다. 특히 메타버스와 같은 환경에서 사용자가 직접적으로 참여할 수 있도록 설계되었습니다.
            </Description>
            <Details>
              <DetailItem>1. 웹페이지 전시관의 디자인 및 UI 구현</DetailItem>
              <DetailItem>2. 음성인식을 통한 그림 생성 기능 구현</DetailItem>
              <DetailItem>3. OpenCV를 사용하여 이미지 필터 및 변환 기능 구현</DetailItem>
              <DetailItem>4. 음성인식을 통해 사용자가 직접 작품을 완성</DetailItem>
            </Details>
            <TechStack>
              <Tech>FLASK</Tech>
              <Tech>MYSQL</Tech>
              <Tech>PYTHON</Tech>
              <Tech>HTML</Tech>
              <Tech>CSS</Tech>
              <Tech>JavaScript</Tech>
              <Tech>UnrealEngine</Tech>
              <Tech>StableDiffusion</Tech>
              <Tech>GIT</Tech>
              <Tech>GITHUB</Tech>
              <Tech>FIGMA</Tech>
            </TechStack>
          </TextContainer>
        </ProjectContent>

        <ProjectContent>
          <ImageContainer>
            <ProjectImage src={prj2} alt="Project 2" />
            <ProjectTitle>DEVSIMPLEQUIZ</ProjectTitle>
            <ProjectDate>2024.06.24 - 2024.07.16</ProjectDate>
          </ImageContainer>
          <TextContainer>
            <Description>
              심심할 때 재미있게 퀴즈를 즐길 수 있는 웹 애플리케이션으로, 약 3500개의 퀴즈가 등록되어 있으며 다양한 주제의 퀴즈를 제공합니다.
            </Description>
            <Details>
              <DetailItem>1. 간단한 UI 디자인과 테마 구현</DetailItem>
              <DetailItem>2. 퀴즈 페이지 및 기능 구현</DetailItem>
              <DetailItem>3. 랭킹 시스템과 로그인 기능</DetailItem>
              <DetailItem>4. 성능 최적화 및 오류 처리</DetailItem>
            </Details>
            <TechStack>
              <Tech>MYSQL</Tech>
              <Tech>NODE.JS</Tech>
              <Tech>EXPRESS</Tech>
              <Tech>JavaScript</Tech>
              <Tech>HTML</Tech>
              <Tech>CSS</Tech>
              <Tech>REACT</Tech>
              <Tech>TypeScript</Tech>
              <Tech>zust</Tech>
              <Tech>Axios</Tech>
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

export default Projects;

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
  padding: 20px;
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

const ProjectImage = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const ProjectDate = styled.span`
  font-size: 12px;
  color: #999;
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
