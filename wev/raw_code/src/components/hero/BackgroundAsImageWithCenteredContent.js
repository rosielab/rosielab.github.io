import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

import Header, { NavLinks, PrimaryLink as NavToggle, DesktopNavLinks } from "../headers/light.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

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

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://www.digitaltrends.com/wp-content/uploads/2017/08/pepper-softbank.jpg?fit=1500%2C1000&p=1");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-3 px-0 text-xl no-underline`;
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
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default ({
  primaryButtonUrl = "https://forms.gle/w8fWkMFqQgnXQCC8A",
  primaryButtonText = "Attend",
  buttonRounded = true,
  }) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavHashLink smooth to="/#about"
      style= {linkStyle}>
        About
      </NavHashLink>
      <NavHashLink smooth to ="/#activities"
      style= {linkStyle}>
        Activities
      </NavHashLink>
      <NavHashLink smooth to ="/#schedule"
      style= {linkStyle}>
        Schedule
      </NavHashLink>
      <NavHashLink smooth to="/#invited"
      style= {linkStyle}>
        Invited Speakers
      </NavHashLink>
      <NavHashLink smooth to ="/#cfp"
      style= {linkStyle}>
        Lightning Talks
      </NavHashLink>
      <NavHashLink smooth to="/#organizers"
      style= {linkStyle}>
        Organizing Committee
      </NavHashLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Para>
              July 15th 2024, Full day: 8:45-17:00, Hybrid
          </Para>
          <Heading>
              WEV: Workshop on Embodied Voices
          </Heading>
          <Para>
              Workshop at : <a href="https://roboticsconference.org/">RSS 2024</a>, Delft University of Technology, Netherlands
          </Para>
          <Para>
            <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGlrZ2M0amQxajQ2anQyOWNiaXVjbWRwdW4gcGFpZ2VAcm9zaWVsYWIuY2E&tmsrc=paige%40rosielab.ca">
              Google Calendar Link
            </a>
          </Para>
          <PrimaryButton as="a" href ={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
          </PrimaryButton>

        </Content>
      </HeroContainer>
    </Container>
  );
};
