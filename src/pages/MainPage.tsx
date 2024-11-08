import React from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import AboutMe3 from "./AboutMe3";
import SideBar from "../components/sidebar/SideBar";
import Projects1 from "./Projects1";
import Projects2 from "./Projects2";

function MainPage() {
  return (
    <PageContainer>
      <Section id="home">
        <Home />
      </Section>
      <Section id="aboutme">
        <AboutMe1 />
      </Section>
      <Section id="aboutme">
        <AboutMe2 />
      </Section>
      <Section id="aboutme">
        <AboutMe3 />
      </Section>
      <Section id="project">
        <Projects1 />
      </Section>
      <Section id="project">
        <Projects2 />
      </Section>
      {/* <SideBar /> */}
    </PageContainer>
  );
}

export default MainPage;

const PageContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Section = styled.div`
  /* scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box; */
`;
