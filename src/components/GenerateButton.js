import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

export default function GenerateButton({ Char, PasswordLength, setPassword }) {
  const handleGenerate = () => {
    if (
      Char !== undefined &&
      Char !== null &&
      Char !== "" &&
      PasswordLength !== undefined &&
      PasswordLength !== null &&
      PasswordLength !== "" &&
      PasswordLength > 0
    ) {
      let pas = "";
      for (let i = 0; i < Number(PasswordLength) + 1; i++) {
        pas += Char.charAt(Math.floor(Math.random() * Char.length));
      }
      setPassword(pas);
    } else {
      alert("Make sure to select, characters to include and password length.");
    }
  };
  return (
    <Container onClick={() => handleGenerate()}>
      Generate <FiArrowRight />
    </Container>
  );
}

const Container = styled.button`
  border: 3px solid var(--primary);
  background-color: var(--primary);
  padding: 16px 24px;
  color: var(--normal-dark);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`;
