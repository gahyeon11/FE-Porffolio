// Sidebar.tsx

import styled from "styled-components";
import React from "react";

interface SidebarProps {
  currentSection: string;
}

function Sidebar({ currentSection }: SidebarProps) {
  return (
    <SidebarContainer>
      <NavItem href="#aboutme" isActive={currentSection === "aboutme"}>
        {splitText("About Me")}
      </NavItem>
      <NavItem href="#project" isActive={currentSection === "project"}>
        {splitText("Projects")}
      </NavItem>
      <NavItem href="#contact" isActive={currentSection === "contact"}>
        {splitText("Contact")}
      </NavItem>
    </SidebarContainer>
  );
}

// Helper function to split text into vertical letters
function splitText(text: string) {
  return text.split("").map((char, index) => (
    <span key={index} style={{ display: "block" }}>
      {char}
    </span>
  ));
}

export default Sidebar;

interface NavItemProps {
  isActive: boolean;
}

const SidebarContainer = styled.div`
  position: fixed;
  right: 10px;
  top: 15%;
  width: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: #f8f9fa; */
`;

const NavItem = styled.a<NavItemProps>`
  margin: 20px 0;
  color: ${(props) => (props.isActive ? props.theme.color.primary : "black")};
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
  text-align: center;
  
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
