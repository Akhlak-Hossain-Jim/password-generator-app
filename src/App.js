import React, { useState } from "react";
import styled from "styled-components";
import PasswordComponent from "./components/PasswordComponent";
import Info from "./components/Info";
import GenerateButton from "./components/GenerateButton";
import PasswordRange from "./components/PasswordRange";
import WhatToInclude from "./components/WhatToInclude";
import PasswordLengthView from "./components/PasswordLengthView";
import Github from "./components/Github";

export default function App() {
  const [Password, setPassword] = useState("");

  const [Char, setChar] = useState("");
  const [PasswordLength, setPasswordLength] = useState(0);
  const [Uppercase, setUppercase] = useState(false);
  const [Lowercase, setLowercase] = useState(false);
  const [Numbers, setNumbers] = useState();
  const [Symbols, setSymbols] = useState();

  const WTIs = [
    {
      name: "Uppercase Letters",
      state: Uppercase,
      setState: setUppercase,
      CHARS: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      name: "Lowercase Letters",
      state: Lowercase,
      setState: setLowercase,
      CHARS: "abcdefghijklmnopqrstuvwxyz",
    },
    {
      name: "Numbers",
      state: Numbers,
      setState: setNumbers,
      CHARS: "01234556789",
    },
    {
      name: "Symbols",
      state: Symbols,
      setState: setSymbols,
      CHARS: "!@#$%^&*()",
    },
  ];

  return (
    <Container>
      <Card>
        <Info />
        <PasswordComponent Password={Password} />
        <PasswordGenerateCard>
          <PasswordLengthView PasswordLength={PasswordLength} />
          <PasswordRange
            PasswordLength={PasswordLength}
            setPasswordLength={setPasswordLength}
          />
          <>
            {React.Children.toArray(
              WTIs.map((data) => (
                <WhatToInclude {...data} Char={Char} setChar={setChar} />
              ))
            )}
          </>
          <GenerateButton
            Char={Char}
            PasswordLength={PasswordLength}
            setPassword={setPassword}
          />
        </PasswordGenerateCard>
      </Card>
      <Github />
    </Container>
  );
}

const PasswordGenerateCard = styled.section`
  padding: 16px 24px;
  background-color: var(--normal-dark);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Card = styled.div`
  margin: auto;
  width: min(486px, 100%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  min-height: min(100vh, 900px);
  display: flex;
  position: relative;
`;
