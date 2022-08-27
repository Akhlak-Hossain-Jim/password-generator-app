import React from "react";
import styled from "styled-components";

export default function PasswordRange({ PasswordLength, setPasswordLength }) {
  return (
    <Container value={PasswordLength}>
      <div className="thumb"></div>
      <input
        type="range"
        value={PasswordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        step="1"
        max="30"
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: var(--bold-dark);
  width: 100%;
  height: 10px;
  border-radius: 4px;
  & > .thumb {
    background-color: var(--primary);
    height: 100%;
    width: ${({ value }) => (value ? (value / 30) * 100 : 0)}%;
    border-radius: 4px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      border: 2px solid var(--primary);
      background-color: var(--bold-dark);
      bottom: 50%;
      right: 0;
      transform: translateX(50%) translateY(50%);
    }
  }
  input {
    position: absolute;
    width: 100%;
    background-color: var(--bold-dark);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    opacity: 0;
    z-index: 10;
  }
`;
