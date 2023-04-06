import React from "react";
import styled from "styled-components";
import data from "../data.json";

export default function Buttons() {
  const Foo = ({ btn, value }) => (
    <ButtonBox>
      <StyledBtn>
        <span>01</span> {btn}
      </StyledBtn>
      ;
    </ButtonBox>
  );
  return (
    <div>
      {["Overview", "Structure", "Geology"].map((btn, index) => {
        const key = btn.toLowerCase();
        return <Foo key={index} btn={btn} value={data[2][key]} />;
      })}
    </div>
  );
}

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBtn = styled.button`
  display: flex;
  gap: 4rem;
  padding: 1.5rem;
  padding-right: 15rem;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  letter-spacing: 1.2px;

  &: hover {
    background-color: ${(props) => props.theme.colors.darkGrey};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.marine};
  }
`;
