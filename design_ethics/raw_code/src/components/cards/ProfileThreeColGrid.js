import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import michio from "images/MichioOkada(2).jpg";
import paulina from "images/Paulina PIC.jpeg";
import marina from "images/marina.jpeg";

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
  heading = "Keynote Speakers",
  description = "We are excited to present our lineup of excellent speakers.",
  cards = [
    {
      imageSrc: michio,
      name: "Prof. Michio Okada",
      position: "Chikushi Jogakuen University",
      description: "Professor Okada is both a professor at Chikushi Jogakuen University and Professor Emeritus at Toyohashi University of Technology. Building on his research on “weak robots,” he is advancing studies on HRI design for conviviality (Convivial Robotics), in which humans and robots can engage in a loosely interdependent relationship without compromising each other’s autonomy or creativity",
      title: "Title: TBA"
    },
    {
      imageSrc: paulina,
      name: "Dr. Paulina Yurman",
      position: "Central Saint Martins, University of the Arts London",
      description: "Dr. Yurman is a Research Fellow, designer and lecturer at Central Saint Martins, University of the Arts London. Her research blends critical design, speculative design, drawing and making to question and reimagine our relationships with technology. She is investigating Maternal Machines, imagined and designed for maternal and infant care",
      title: "Title: TBA"
    },
    {
      imageSrc: marina,
      name: "Prof. Marina Jirotka",
      position: "University of Oxford",
      description: "Prof. Jirotka is a professor of Human Centred Computing in the Department of Computer Science, Director of Responsible Technology Institute, University of Oxford. She leads interdisciplinary research in technology, including the “Black Box” for robot accidents.",
      title: "Title: TBA"
    },
    //{
    //  imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
    //  position: "Quality Assurance",
    //  name: "Holo Wo",
    //  links: [
    //    {
    //      url: "https://twitter.com",
    //      icon: TwitterIcon,
    //    },
    //    {
    //      url: "https://linkedin.com",
    //      icon: LinkedinIcon,
    //    },
    //    {
    //      url: "https://github.com",
    //      icon: GithubIcon,
    //    },
    //  ],
    //},
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
              <CardImage imageSrc={card.imageSrc} />
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
