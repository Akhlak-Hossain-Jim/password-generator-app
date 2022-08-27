import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default function Info() {
  return (
    <Container className="info">
      <h1>password generator</h1>
      <p>
        by{" "}
        <Link href="http://ahjim.com" target="_blank">
          Akhlak Hossain Jim
        </Link>
      </p>
    </Container>
  );
}

const Container = styled.section`
  & > h1,
  & > p {
    text-align: center;
    text-transform: capitalize;
    color: var(--gray);
  }
`;
