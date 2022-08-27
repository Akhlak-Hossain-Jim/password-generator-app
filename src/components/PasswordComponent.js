import React from "react";
import styled from "styled-components";
import { FaRegCopy } from "react-icons/fa";

export default function PasswordComponent({ Password }) {
  const handleCopy = (toCopy) => {
    if (toCopy !== "" && toCopy !== undefined && toCopy !== null) {
      navigator.clipboard.writeText(toCopy);
      alert("Password copied successfully");
    } else {
      alert("Password haven't been generated");
    }
  };
  return (
    <Container>
      <h2
        className={
          Password !== undefined &&
          Password !== null &&
          Password !== "" &&
          Password.length > 0
            ? "active"
            : ""
        }
      >
        {Password !== undefined &&
        Password !== null &&
        Password !== "" &&
        Password.length > 0
          ? Password
          : "P@$W0RD!"}
      </h2>
      <FaRegCopy onClick={() => handleCopy(Password)} />
    </Container>
  );
}

const Container = styled.section`
  padding: 16px 24px;
  background-color: var(--normal-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  &:hover {
    color: var(--secondary);
  }
  & > h2 {
    width: max-content;
    background: transparent;
    font-size: 20px;
    color: var(--gray);
    word-wrap: break-word;
    word-break: break-all;
    &.active {
      color: var(--secondary);
    }
  }
`;
