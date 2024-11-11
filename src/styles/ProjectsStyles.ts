import styled from "styled-components";

// export const MainContainer = styled.div`
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const SectionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
//   width: 100%;
//   max-width: 1200px;
// `;

export const ProjectContent = styled.div`
  display: flex;
  align-items: center; // Vertically center items within ProjectContent
  background: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 20px;
  margin: 25px auto;
  max-width: 1200px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // Vertically center content within ImageContainer
  gap: 10px;
  height: 100%; // Allow full height to ensure proper vertical alignment
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  a {
    color: #333;
    font-size: 25px;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const ProjectDate = styled.span`
  font-size: 12px;
  color: #999;
`;

export const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.8;
`;

export const DetailTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2e2e2e;
  line-height: 1.8;
`;

export const Details = styled.ul`
  /* padding-left: 20px; */
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  
`;

export const DetailItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.8;

`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  /* margin-top: 12px; */

  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-top: 12px;
  width: fit-content; 
  margin-left: auto;
  margin-right: auto;  */

`;

export const Tech = styled.span`
  background-color: #e0e0e0;
  padding: 4px 8px;
  margin: 4px;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
`;
