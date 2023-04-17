import React from "react";
import styled from "styled-components";
import mediaQuery from "./mediaQuery";

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
  width: 250px;
  height: 110px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${mediaQuery.sm`
  width:100%;
  height:100%;
  `}

  ${mediaQuery.md`
  
  width: 140px;
  height: 80px;
  margin-bottom:5rem;
  `}

  ${mediaQuery.lg`
  width:165px;
  height: 90px;
  `}
`;

const DetailedParameter = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.sm`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
  `}
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

  ${mediaQuery.sm`
    font-size:9px;
    margin-bottom: 0;
  `}
`;

const DetailedParametersFigures = styled.span`
  font-size: 2.8rem;
  color: #fff;

  ${mediaQuery.sm`
    font-size:2rem;
  `}

  ${mediaQuery.md`
  font-size:1.8rem;
  `}

  ${mediaQuery.lg`
  font-size:2.2rem;
  `}
`;
