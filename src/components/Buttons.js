import React from "react";
import styled from "styled-components";
import data from "../data.json";

export default function Buttons({ onButtonClick, currentPlanet }) {
  function handleClick(value, content, source) {
    const imgArr = [
      currentPlanet.images.planet,
      currentPlanet.images.internal,
      currentPlanet.images.geology,
    ];

    // const imgArr = [
    //   require("../" + currentPlanet.images.planet).default,
    //   require("../" + currentPlanet.images.internal).default,
    //   require("../" + currentPlanet.images.geology).default,
    // ];

    onButtonClick(imgArr[value - 1], content, source);
  }
  const Foo = ({ btn, index, content, source }) => (
    <ButtonBox>
      <StyledBtn onClick={() => handleClick(index + 1, content, source)}>
        <Index>0{index + 1}</Index>
        {btn}
      </StyledBtn>
      ;
    </ButtonBox>
  );
  return (
    <div>
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
    </div>
  );
}

const Index = styled.span`
  color: #fff;
  opacity: 0.5;
  font-weight: 700;
  font-family: Spartan;
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

  &: hover {
    background-color: ${(props) => props.theme.colors.darkGrey};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.marine};
  }
`;
