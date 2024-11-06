import styled from "styled-components";
// import SideBar from "../sidebar/SideBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

  return (
    <LayoutWrapper>
        {/* <SideBar /> */}
        {children}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
