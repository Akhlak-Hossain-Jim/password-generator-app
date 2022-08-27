import React, { useEffect } from "react";
import styled from "styled-components";

export default function WhatToInclude({
  name,
  state,
  setState,
  CHARS,
  setChar,
  Char,
}) {
  useEffect(() => {
    state ? setChar(Char + CHARS) : setChar(Char && Char.replace(CHARS, ""));
  }, [state]);
  return (
    <Container
      className={`what_to_include ${state ? "active" : ""}`}
      onClick={() => setState(!state)}
    >
      <div className="what_to_include__box">{state && "✓"}</div>
      <div className="what_to_include__label">Include {name}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--gray);
  cursor: pointer;
  .what_to_include__box {
    border: 2px solid var(--gray);
    aspect-ratio: 1/1;
    font-size: 12px;
    line-height: 100%;
    width: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: max-content;
  }
  &:hover {
    color: var(--primary);
    .what_to_include__box {
      border-color: var(--primary);
    }
  }
  &.active {
    color: var(--secondary);
    .what_to_include__box {
      border-color: var(--primary);
      background-color: var(--primary);
      color: var(--bold-dark);
    }
  }
`;
