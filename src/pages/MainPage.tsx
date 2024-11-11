import React from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import AboutMe3 from "./AboutMe3";
import Project1 from "./Project1";
import Project2 from "./Projects2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Contact from "./Contact";

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
        <Project1/>
      </Section>
      <Section id="project">
        <Project2 />
      </Section>
      <Section id="project">
        <Project3 />
      </Section>
      <Section id="project">
        <Project4 />
      </Section>
      <Section id="Contact">
        <Contact />
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
