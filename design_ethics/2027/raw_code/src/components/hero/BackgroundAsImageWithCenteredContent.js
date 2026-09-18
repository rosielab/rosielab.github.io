import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLinks, PrimaryLink as NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLinks}{
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'grey'
};

const SectionLink = styled.a`
  ${tw`no-underline`}
`;

const EditionsContainer = tw.div`relative inline-block`;

const EditionsLabel = tw.span`cursor-pointer`;

const EditionsMenu = styled.div`
  ${tw`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50`}
  ${tw`opacity-0 invisible transition-all duration-200`}
  top: 100%;

  ${EditionsContainer}:hover &,
  ${EditionsContainer}:focus-within & {
    ${tw`opacity-100 visible`}
  }
`;

const EditionsItem = styled.a`
  ${tw`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-primary-500 no-underline`}
  ${props => props.current && tw`font-bold text-primary-500`}
`;

const EditionsDropdown = ({ editions, current }) => (
  <EditionsContainer>
    <EditionsLabel tabIndex={0} style={linkStyle}>Editions</EditionsLabel>
    <EditionsMenu>
      {editions.map((edition) => (
        <EditionsItem
          key={edition.value}
          href={edition.href}
          current={edition.value === current}
        >
          {edition.label}
        </EditionsItem>
      ))}
    </EditionsMenu>
  </EditionsContainer>
);

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://www.digitaltrends.com/wp-content/uploads/2017/08/pepper-softbank.jpg?fit=1500%2C1000&p=1");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
/*const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;*/
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;


const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Para = styled.h2`
  ${tw`text-sm text-center sm:text-lg lg:text-xl xl:text-2xl font-thin text-gray-100 leading-snug`}
  a {
    ${tw`text-gray-100 underline hocus:text-primary-100 transition duration-300`}
  }
  span {
    ${tw`inline-block mt-2`}
  }
`;


export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <SectionLink href="#about"
      style= {linkStyle}>
        About
      </SectionLink>
      <SectionLink href="#schedule"
      style= {linkStyle}>
        Schedule
      </SectionLink>
      <SectionLink href="#invited"
      style= {linkStyle}>
        Panel
      </SectionLink>
      <SectionLink href="#cfp"
      style= {linkStyle}>
        Call for Papers
      </SectionLink>
      <SectionLink href="#organizers"
      style= {linkStyle}>
        Organizing Committee
      </SectionLink>
      <EditionsDropdown
        current="2027"
        editions={[
          { label: "2027", href: "/design_ethics/2027/", value: "2027" },
          { label: "2026", href: "/design_ethics/", value: "2026" },
        ]}
      />
    </NavLinks>,
  ];


  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Para>
              Date: TBD
          </Para>
          <Heading>
              Ethical Design in Human-Robot Interaction: Ethical Innovation Across Academia, Industry, and Policy
          </Heading>
          <Para>
              Venue: coming soon
          </Para>
        </Content>
      </HeroContainer>
    </Container>
  );
};
