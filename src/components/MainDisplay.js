import React from "react";
import styled from "styled-components";
import planet from "../assets/planet-earth.svg";
import PlanetParametersDetails from "./PlanetParametersDetails";
import data from "../data.json";
import Buttons from "./Buttons";

export default function MainDisplay() {
  console.log(data[2].images.planet === "../assets/planet-earth.svg");
  return (
    <Center>
      <ImageBox>
        <PlanetImage src={planet} />
      </ImageBox>
      <PlanetDescriptionBox>
        <NameOfPlanet>{data[2].name}</NameOfPlanet>
        <PlanetDescription>{data[2].overview.content}</PlanetDescription>

        <Source style={{ color: "#fff" }}>
          Source :{" "}
          <SourceLink href={data[2].overview.source}>Wikipedia</SourceLink>
        </Source>
        <Buttons />
      </PlanetDescriptionBox>
      <PlanetParameters>
        <PlanetParametersDetails />
      </PlanetParameters>
    </Center>
  );
}

const Source = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  opacity: 0.3;
`;

const SourceLink = styled.a`
  font-size: 1.4rem;
  color: #fff;
  font-weight: 700;
`;

const PlanetDescriptionBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
  gap: 2.4rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PlanetDescription = styled.p`
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.7;
  line-height: 1.5;
`;

const NameOfPlanet = styled.h2`
  font-size: 6.2rem;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  margin: 4rem 15rem 0;
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
