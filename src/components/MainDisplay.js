import React from "react";
import styled from "styled-components";
import planet from "../assets/planet-earth.svg";
import PlanetParametersDetails from "./PlanetParametersDetails";
import data from "../data.json";

export default function MainDisplay() {
  return (
    <Center>
      <ImageBox>
        <PlanetImage src={planet} />
      </ImageBox>
      <PlanetDescriptionBox>
        <NameOfPlanet>{data[2].name}</NameOfPlanet>
        <PlanetDescription>{data[2].overview.content}</PlanetDescription>

        <span style={{ color: "#fff" }}>
          Source :{" "}
          <SourceLink href={data[2].overview.source}>Wikipedia</SourceLink>
        </span>
      </PlanetDescriptionBox>
      <PlanetParameters>
        <PlanetParametersDetails />
      </PlanetParameters>
    </Center>
  );
}

const SourceLink = styled.a`
font-size:1.4rem;
color:#fff;
opacity:0.5
font-weight:400;
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
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  opacity: 0.5;
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
