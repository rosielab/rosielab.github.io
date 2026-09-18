import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import patricia from "images/patricia-alves-oliveira-portrait.jpg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`mb-4 uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mb-4 text-xl font-medium text-gray-900`}
  }
  .title {
    ${tw`mt-2 text-lg font-bold text-primary-700`}
  }
  .description {
    ${tw`font-medium text-gray-600 text-justify mx-6`}
  }
`

export default ({
  heading = "Panel",
  description = "The panel will bring together practitioners across academia, industry and policymaking. Further panellists will be announced.",
  cards = [
    {
      imageSrc: patricia,
      name: "Prof. Patrícia Alves-Oliveira",
      position: "University of Michigan, USA",
      description: (
        <>
          Patrícia is an Assistant Professor of Robotics at the University of Michigan, where she
          leads Robot Studio, a research lab focused on creating robots for human health and
          creativity. Her research unifies the fields of Robotics, Design, and Psychology.

          <br />

          <a href="https://patricialvesoliveira.com/" target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </>
      ),
    },
    {
      name: "Prof. Serena Booth",
      position: "Brown University, USA",
      description: (
        <>
          Serena Booth is an Assistant Professor at Brown University. Booth studies how humans
          provide specifications to AI systems and robots, and how to assess the consequences of the
          design choices therein. She also studies the governance of AI and robots, and has
          previously served as an AI Policy Advisor in the United States Senate.

          <br />

          <a href="https://giraffe.cs.brown.edu" target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </>
      ),
    },
  ]
}) => {
  return (
    <Container id="invited">
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              {card.imageSrc && <CardImage imageSrc={card.imageSrc} />}
              <CardContent>
                <span className="name">{card.name}</span>
                <span className="position">{card.position}</span>
                <span className="description">{card.description}</span>
                <span className="title">{card.title}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
