import React from "react";
import styled from "styled-components";
import DetailedParameterItem from "./DetailedParameterItem";
import mediaQuery from "./mediaQuery";

export default function PlanetParametersDetails({ currentPlanet }) {
  const parameters = [
    { title: "Rotation", key: "rotation" },
    { title: "Revolution", key: "revolution" },
    { title: "Radius", key: "radius" },
    { title: "Temperature", key: "temperature" },
  ];

  if (!currentPlanet) {
    return null;
  }

  return (
    <PlanetParameterDetailsBox>
      {parameters.map(({ title, key }) => (
        <DetailedParameterItem
          key={title}
          title={title}
          value={`${currentPlanet[key]}`}
        />
      ))}
    </PlanetParameterDetailsBox>
  );
}

const PlanetParameterDetailsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  ${mediaQuery.sm`
    flex-direction:column;
    align-items:center;
    gap: 1.5rem;

    & > :last-child {
    margin-bottom: 5rem; 
  }
  `}

  ${mediaQuery.md`
  
  gap:1rem;
  `}
`;
