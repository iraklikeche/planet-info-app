import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PlanetParametersDetails from "./PlanetParametersDetails";
import Buttons from "./Buttons";
import mediaQuery from "./mediaQuery";

export default function MainDisplay({ currentPlanet }) {
  const [planetImage, setPlanetImage] = useState(currentPlanet.images.planet);
  const [showGeology, setShowGeology] = useState(false);
  const [description, setDescription] = useState(
    currentPlanet.overview.content
  );
  const [source, setSource] = useState(currentPlanet.overview.source);

  useEffect(() => {
    setPlanetImage(currentPlanet.images.planet);
    setShowGeology(false);
    setDescription(currentPlanet.overview.content);
    setSource(currentPlanet.overview.source);
  }, [currentPlanet]);

  function handleButtonClick(src, content, source) {
    setPlanetImage(src);
    setShowGeology(src === currentPlanet.images.geology);
    setDescription(content);
    setSource(source);
  }

  if (!currentPlanet) {
    return null;
  }

  return (
    <Center>
      <BtnForMobile>
        <Buttons
          onButtonClick={handleButtonClick}
          currentPlanet={currentPlanet}
        />
      </BtnForMobile>
      <ImageBox>
        <PlanetImage
          src={
            planetImage === currentPlanet.images.geology
              ? currentPlanet.images.planet
              : planetImage
          }
        />
        {showGeology && <Geology src={currentPlanet.images.geology} />}
      </ImageBox>
      <PlanetDescriptionBox>
        <NameOfPlanet>{currentPlanet.name}</NameOfPlanet>
        <PlanetDescription>{description}</PlanetDescription>

        <Source>
          Source :{" "}
          <SourceLink href={source} target="_blank">
            Wikipedia
          </SourceLink>
        </Source>
        <BtnForDesktop>
          <Buttons
            onButtonClick={handleButtonClick}
            currentPlanet={currentPlanet}
          />
        </BtnForDesktop>
      </PlanetDescriptionBox>
      <PlanetParameters>
        <PlanetParametersDetails currentPlanet={currentPlanet} />
      </PlanetParameters>
    </Center>
  );
}

const BtnForMobile = styled.div`
  display: none;

  ${mediaQuery.sm`

  display:block;

  `}
`;

const BtnForDesktop = styled.div`
  display: block;
  ${mediaQuery.sm`
    display:none;
  `}

  ${mediaQuery.md`
  
  grid-row: 2 / 3;
    grid-column: 2; // Update this line

  `}
`;

const Geology = styled.img`
  width: 10%;
  position: absolute;
  top: 50%;

  ${mediaQuery.sm`
  top: 60%;
  transform: translateY(60%);

  `}
`;

const Source = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  opacity: 0.3;

  ${mediaQuery.md`
  
  grid-row:3/4;

  `}
`;

const SourceLink = styled.a`
  font-size: 1.4rem;
  color: #fff;
  font-weight: 700;
`;

const PlanetDescription = styled.p`
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.7;
  line-height: 1.5;
  height: 100px;

  ${mediaQuery.sm`
    height:150px;
  `}

  ${mediaQuery.md`

  grid-row:2/3;
  width:300px
  `}
`;

const NameOfPlanet = styled.h2`
  font-size: 6.2rem;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;

  ${mediaQuery.md`
  align-self:end;
  font-size: 4.2rem;
  `}
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQuery.sm`
  margin:7.2rem 0;
  `}

  ${mediaQuery.md`
  
    grid-column:1/-1;
  `}
`;

const Center = styled.div`
  margin: 4rem 15rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-item: flex-end;
  row-gap: 5rem;

  ${mediaQuery.sm`
    grid-template-columns: 1fr;
    justify-item: center;
    margin:0;
  `}

  ${mediaQuery.md`
  grid-template-columns: 1fr;
  margin:4rem 5.2rem 0;
  `}
`;

const PlanetImage = styled.img`
  width: 60%;
  position: relative;

  ${mediaQuery.sm`
  width: 30%;
  `}

  ${mediaQuery.md`
    width:30%
  `}
`;

const PlanetParameters = styled.div`
  grid-column: 1/-1;
  ${mediaQuery.sm`
    grid-column: 1;
    padding:0 5rem;
  `}
`;

const PlanetDescriptionBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
  gap: 2.4rem;
  align-items: flex-start;
  justify-content: flex-start;

  ${mediaQuery.sm`
  width:100%;
  margin:0 auto;
  align-items: center;
  text-align:center;
  padding:0 5rem;

  `}

  ${mediaQuery.md`
    margin-left:0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 5.4rem;
    height:300px;


    & > ${NameOfPlanet}, & > ${PlanetDescription}, & > ${Source} {
      grid-column: 1;
    }

    `}
`;
