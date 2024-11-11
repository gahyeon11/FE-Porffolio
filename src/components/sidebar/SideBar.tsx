import React, { ReactNode } from "react";
import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection";

function SideBar() {
  const sectionIds = ["home", "aboutme", "project", "contact"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <SideBarWrapper>
      <SidebarItem to="/home" isActive={activeSection === "home"}>
        HOME
      </SidebarItem>
      <SidebarItem to="/aboutme" isActive={activeSection === "aboutme"}>
        ABOUT ME
      </SidebarItem>
      <SidebarItem to="/project" isActive={activeSection === "project"}>
        PROJECT
      </SidebarItem>
      <SidebarItem to="/contact" isActive={activeSection === "contact"}>
        CONTACT
      </SidebarItem>
    </SideBarWrapper>
  );
}

export default SideBar;

const SideBarWrapper = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 20px;
  background: transparent; /* 배경 제거 */
  z-index: 10; /* 다른 콘텐츠 위에 표시되도록 설정 */
`;

interface SidebarItemProps extends NavLinkProps {
  children: ReactNode;
  isActive: boolean;
}

const SidebarItem = ({ children, to, isActive }: SidebarItemProps) => (
  <StyledNavLink to={to} className={isActive ? "active" : ""}>
    {String(children)
      .split("")
      .map((char: string, index: number) => (
        <span key={index}>{char}</span>
      ))}
  </StyledNavLink>
);

const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  font-weight: bold;
  margin: 20px 0;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b3b3b3;

  &.active {
    color: #006ad7;
  }

  span {
    display: block;
    line-height: 1.2em;
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
