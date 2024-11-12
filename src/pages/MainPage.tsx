import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./Home";
import AboutMe1 from "./AboutMe1";
import AboutMe2 from "./AboutMe2";
import AboutMe3 from "./AboutMe3";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Contact from "./Contact";
import Sidebar from "../components/sidebar/SideBar";

function MainPage() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <PageContainer>
      <Content>
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
          <Project1 />
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
        <Section id="contact">
          <Contact />
        </Section>
      </Content>
      <Sidebar currentSection={currentSection} />
    </PageContainer>
  );
}

export default MainPage;

const PageContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  /* scroll-snap-align: start;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box; */
`;
