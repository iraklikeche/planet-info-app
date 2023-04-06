import React from "react";
import styled from "styled-components";
import data from "../data.json";

export default function PlanetParametersDetails() {
  const DetailedParameterItem = ({ title, value }) => (
    <DetailParamBox>
      <DetailedParameter>
        <DetailedParametersTitle>
          {title === "Rotation" || title === "Revolution"
            ? `${title} time`
            : title}
        </DetailedParametersTitle>
        <DetailedParametersFigures>{value}</DetailedParametersFigures>
      </DetailedParameter>
    </DetailParamBox>
  );

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
  justify-content: space-evenly;
`;

const DetailParamBox = styled.div`
  display: inline-block;
  padding: 1.5rem;
  width: 210px;
  height: 100px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const DetailedParameter = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailedParametersTitle = styled.span`
  color: #fff;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
`;

const DetailedParametersFigures = styled.span`
  font-size: 2.8rem;
  color: #fff;
`;
