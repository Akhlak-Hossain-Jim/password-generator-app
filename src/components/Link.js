import React from "react";
import styled from "styled-components";

export default function Link({ href, target, children }) {
  return (
    <Container
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
    >
      {children}
    </Container>
  );
}
const Container = styled.a`
  color: var(--primary);
  text-decoration: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: var(--primary);
    height: 1px;
    left: 0;
    transform-origin: left;
    transform: scale(0);
    width: 100%;
  }
  &:hover::after {
    transform: scale(1);
  }
`;
