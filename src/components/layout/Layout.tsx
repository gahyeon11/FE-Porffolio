import styled from "styled-components";
import SideBar from "../sidebar/SideBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <SideBar />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh; // 화면을 최소 100vh로 차지하도록 설정
`;

const ContentWrapper = styled.div`
  flex: 1; // 남은 공간을 차지하도록 설정
  padding: 20px;
  overflow-y: auto; // 스크롤 활성화
`;
