// Contact.tsx
import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const Contact = () => {
    // Function to copy text to clipboard
    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      alert("복사되었습니다.");
    };
  
    return (
      <Container>
        <Title>CONTACT</Title>
        <Content>
          <ContactItem>
            <Icon>
              <FaGithub size={50} />
            </Icon>
            <TextContainer>
              <Label>UserName</Label>
              <Link href="https://github.com/gahyeon11" target="_blank">
              <CopyIcon><FaLink /></CopyIcon> gahyeon11
            </Link>
            </TextContainer>
          </ContactItem>
  
          <ContactItem>
            <Icon>
              <FaEnvelope size={50} />
            </Icon>
            <TextContainer>
              <Label>MAIL</Label>
              <CopyText onClick={() => copyToClipboard("keh5667@gmail.com")}>
                <CopyIcon><MdContentCopy /></CopyIcon> keh5667@gmail.com
              </CopyText>
            </TextContainer>
          </ContactItem>
        </Content>
      </Container>
    );
  };

export default Contact;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  position: relative;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const Content = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Link = styled.a`
  font-size: 14px;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  &:hover {
    color: ${({theme})=> theme.color.primary};
  }
`;

const CopyIcon = styled.span`
  font-size: 18px;
`;

const CopyText = styled.p`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  &:hover {
    color: ${({theme})=> theme.color.primary};

  }
`;