import React from "react";
import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Projects2";

const Projects = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <Project1 />
        <Project2 />
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
  width: 80%;

`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* width: 80%; */
  max-width: 1200px;
`;
