import React from "react";
import styled from "styled-components";

export default function PlanetParametersDetails() {
  return (
    <div>
      <Foo>
        <DetailedParameter>
          <DetailedParametersTitle>Rotation Time</DetailedParametersTitle>
          <DetailedParametersFigures>0.99 Days</DetailedParametersFigures>
        </DetailedParameter>
      </Foo>
    </div>
  );
}

const Foo = styled.div`
  display: inline-block;
  padding: 2rem;
  padding-right: 8.4rem;
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

const DetailedParametersFigures = styled()`
  font-size: 2.8rem;
`;
