import React from "react";
import styled from "styled-components";
import planet from "../assets/planet-earth.svg";
import PlanetParametersDetails from "./PlanetParametersDetails";

export default function MainDisplay() {
  return (
    <Center>
      <ImageBox>
        <PlanetImage src={planet} />
      </ImageBox>
      <PlanetDescriptionBox>
        <NameOfPlanet>PLANET</NameOfPlanet>
        <PlanetDescription>
          der text commonly used in the graphic, print, and publishing
          industries for previewing layouts and visual mockups. LOREM IPSUM
          GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </PlanetDescription>

        <span style={{ color: "#fff" }}>SOURCE</span>
      </PlanetDescriptionBox>
      <PlanetParameters>
        <PlanetParametersDetails />
      </PlanetParameters>
    </Center>
  );
}

const PlanetDescriptionBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PlanetDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  opacity: 0.5;
`;

const NameOfPlanet = styled.h2`
  font-size: 6.2rem;
  font-weight: 400;
  color: #fff;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  margin: 10rem 15rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-item: flex-end;
  row-gap: 5rem;
`;

const PlanetImage = styled.img`
  width: 60%;
`;

const PlanetParameters = styled.div`
  grid-column: 1/-1;
`;
