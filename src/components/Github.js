import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export default function Github() {
  return (
    <Container>
      <a
        href="https://github.com/Akhlak-Hossain-Jim/password-generator-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </Container>
  );
}

const Container = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: clamp(120px, 10vw, 150px);
  aspect-ratio: 1/1;
  background-color: var(--normal-dark);
  font-size: 32px;
  display: flex;
  justify-content: flex-end;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
  & > a {
    margin: auto;
    margin-top: 25%;
    margin-right: 25px;
    color: var(--primary);
    &:hover {
      transform: scale(1.1);
      transform-origin: center;
    }
  }
`;
