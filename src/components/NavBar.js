import React, { useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import mediaQuery from "./mediaQuery";
import hamburger from "../mediaQueryAssets/icon-hamburger.svg";
import chevron from "../mediaQueryAssets/icon-chevron.svg";

export default function NavBar({ onPlanetClick, onMenuClick }) {
  const [showNavbar, setShowNavbar] = useState(false);

  function handleClick() {
    setShowNavbar(!showNavbar);
    onMenuClick();
  }

  return (
    <div>
      <Nav>
        <ThePlanets>The planets</ThePlanets>
        <NavigationForDesktop>
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
        </NavigationForDesktop>
        <HamburgerIcon src={hamburger} alt="menu-icon" onClick={handleClick} />
      </Nav>
      <NavigationForMobile
        style={showNavbar ? { display: "block" } : { display: "none" }}
      >
        <ListOfPlanets>
          {data.map((planet, index) => {
            return (
              <PlanetsLi key={index}>
                <PlanetXNameXIcon>
                  <PlanetImgXName>
                    <PlanetImgMobile src={planet.images.planet} />

                    {/* <PerPlanet
                      href={`#${planet.name.toLowerCase()}`}
                      onClick={() => onPlanetClick(planet)}
                    > */}
                    <PerPlanet
                      href={`#${planet.name.toLowerCase()}`}
                      onClick={() => {
                        onPlanetClick(planet);
                        handleClick(); // Close the menu when a planet is clicked
                      }}
                    >
                      {planet.name}
                    </PerPlanet>
                  </PlanetImgXName>
                  <ChevronIcon src={chevron} alt="chevron" />
                </PlanetXNameXIcon>
              </PlanetsLi>
            );
          })}
        </ListOfPlanets>
      </NavigationForMobile>
    </div>
  );
}

const PlanetXNameXIcon = styled.div`
  display: flex;
  justify-center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1.5rem;

`;

const NavigationForDesktop = styled.div`
  display: block;

  ${mediaQuery.sm`
  display:none;
`}
`;

const NavigationForMobile = styled.div`
  display: none;

  ${mediaQuery.sm`
    display:none;
  `}
`;

const HamburgerIcon = styled.img`
  display: none;

  ${mediaQuery.sm`

    display:block;

  `}
`;

const ChevronIcon = styled.img`
  width: 8px;
  height: 9px;
`;

const PlanetImgXName = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const PlanetsLi = styled.li`
  padding: 3.2rem;
  padding-bottom: 1.6rem;

  display: flex;
  justify-content: space-between;
`;

const PlanetImgMobile = styled.img`
  width: 5%;
`;

const PerPlanet = styled.a`
  color: #fff;
  font-size: 1.1rem;
  font-family: "Spartan";
  font-weight: 700;
  text-decoration: none;
  opacity: 0.5;

  ${mediaQuery.sm`
  font-size:1.6rem;
  opacity:1;
  text-transform:uppercase;
  letter-spacing:1.5px;
  `}
`;

const ListOfPlanets = styled.ul`
  display: flex;
  gap: 5rem;
  list-style: none;

  ${mediaQuery.sm`
  flex-direction:column;
  gap:0;
  `}
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
  position: relative;

  ${mediaQuery.sm`
  
  padding: 2rem 3.2rem

  `}
`;
