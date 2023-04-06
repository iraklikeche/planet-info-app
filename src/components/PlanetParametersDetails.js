import React from "react";
import styled from "styled-components";
import data from "../data.json";
import DetailedParameterItem from "./DetailedParameterItem";

export default function PlanetParametersDetails() {
  return (
    <PlanetParameterDetailsBox>
      {["Rotation", "Revolution", "Radius", "Temperature"].map(
        (title, index) => {
          const key = title.toLowerCase();
          return (
            <DetailedParameterItem
              key={index}
              title={title}
              value={data[2][key]}
            />
          );
        }
      )}
    </PlanetParameterDetailsBox>
  );
}

const PlanetParameterDetailsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;
