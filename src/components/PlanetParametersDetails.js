import React from "react";
import styled from "styled-components";
import DetailedParameterItem from "./DetailedParameterItem";

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
`;
