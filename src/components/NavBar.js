import React from "react";
import styled from "styled-components";
import data from "../data.json";

export default function NavBar({ onPlanetClick }) {
  return (
    <Nav>
      <ThePlanets>The planets</ThePlanets>
      <ListOfPlanets>
        {data.map((planet, index) => {
          return (
            <li key={index}>
              <PerPlanet
                href={`#${planet.name.toLowerCase()}`}
                onClick={() => onPlanetClick(planet)}
              >
                {planet.name}
              </PerPlanet>
            </li>
          );
        })}
      </ListOfPlanets>
    </Nav>
  );
}

const PerPlanet = styled.a`
  color: #fff;
  font-size: 1.1rem;
  font-family: "Spartan";
  font-weight: 700;
  text-decoration: none;
  opacity: 0.5;
`;

const ListOfPlanets = styled.ul`
  display: flex;
  gap: 5rem;
  list-style: none;
`;

const ThePlanets = styled.h4`
  color: #fff;
  font-family: Antonio;
  font-weight: 400;
  font-size: 2.4rem;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
`;
