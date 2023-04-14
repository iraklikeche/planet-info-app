import React from "react";
import styled from "styled-components";
import mediaQuery from "./mediaQuery";

export default function Buttons({ onButtonClick, currentPlanet }) {
  function handleClick(value, content, source) {
    const imgArr = [
      currentPlanet.images.planet,
      currentPlanet.images.internal,
      currentPlanet.images.geology,
    ];

    onButtonClick(imgArr[value - 1], content, source);
  }
  const Foo = ({ btn, index, content, source }) => (
    <ButtonBox>
      <StyledBtn onClick={() => handleClick(index + 1, content, source)}>
        <Index>0{index + 1}</Index>
        {btn}
      </StyledBtn>
    </ButtonBox>
  );
  return (
    <StyledMappedBtnBox>
      {["Overview", "Structure", "Geology"].map((btn, index) => {
        const key = btn.toLowerCase();
        return (
          <Foo
            key={index}
            btn={btn}
            index={index}
            value={currentPlanet[key]}
            content={currentPlanet[key].content}
            source={currentPlanet[key].source}
          />
        );
      })}
    </StyledMappedBtnBox>
  );
}

const StyledMappedBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mediaQuery.sm`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  border-bottom:1px solid rgba(255, 255, 255, 0.2);
`}
`;

const Index = styled.span`
  color: #fff;
  opacity: 0.5;
  font-weight: 700;
  font-family: Spartan;

  ${mediaQuery.sm`
  display:none;
  `}
`;

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
  width: 100%;

  &: hover {
    background-color: ${(props) => props.theme.colors.darkGrey};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.marine};
  }

  ${mediaQuery.sm`
  padding: 2rem;
  border:none;  
  `}
`;
