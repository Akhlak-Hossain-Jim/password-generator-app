import React from "react";
import styled from "styled-components";

export default function PasswordLengthView({ PasswordLength }) {
  return (
    <Container>
      <p>Character Length</p>
      <h2>{PasswordLength}</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;
