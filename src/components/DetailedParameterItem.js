import React from "react";
import styled from "styled-components";

export default function DetailedParameterItem({ title, value }) {
  return (
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
}

const DetailParamBox = styled.div`
  display: inline-block;
  padding: 1.5rem;
  width: 210px;
  height: 90px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const DetailedParameter = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailedParametersTitle = styled.span`
  color: #fff;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  font-family: "Spartan";
  font-weight: 600;
`;

const DetailedParametersFigures = styled.span`
  font-size: 2.8rem;
  color: #fff;
`;
