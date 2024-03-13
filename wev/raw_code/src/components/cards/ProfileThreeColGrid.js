import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import lealuka from "images/lea-luka.png";
import zhengjun from "images/zhengjun.png";

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
    ${tw`mb-4 uppercase font-bold tracking-widest text-xs text-primary-500 text-center`}
  }
  .name {
    ${tw`mb-4 text-xl font-medium text-gray-900`}
  }
  .title {
    ${tw`mt-2 text-lg font-medium text-gray-700`}
  }
`

export default ({
  heading = "Invited Speakers",
  description = "We are excited to present our lineup of excellent speakers.",
  cards = [
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Catherine Lai",
      position: "University of Edinburgh, UK",
      description: "Bio",
    },
    {
      imageSrc: lealuka,
      name: "Dr. Lea Luka Sikau",
      position: "University of Cambridge, UK",
      description: "Lea Luka (she/her) is an artist-researcher with a PhD on critical posthumanism, new music and rehearsal ethnography from the University of Cambridge. She teaches on artistic research processes at Humboldt University Berlin and Seoul National University. Sikau has been a Bavarian American Academy Fellow at Harvard University’s Mellon School for Performance and Theater Research and was awarded with the Bavarian Cultural Award for her research at MIT’s Center for Art, Science and Technology. She has worked with some of the most sought-after visionaries in the arts such as Romeo Castellucci, Marina Abramović, Lotte de Beer and Stefan Kaegi (Rimini Protokoll). As a media artist and mezzosoprano, Sikau was commissioned by S+T+ARTS (European Commission), the Ars Electronica Festival, transmediale Berlin, Impakt Utrecht, Ensemble Modern and Climate Week NYC. Image : Patrick Münnich",
    },
    {
      imageSrc: zhengjun,
      name: "Dr. Zhengjun Yue",
      position: "Delft University of Technology, Netherlands",
      description: "Zhengjun Yue is an Assistant Professor at the Multimedia Computing Group working on speech technology for healthcare. Her interests are atypical speech processing and recognition.  She is also interested in building conversation AI medical systems for healthcare, and using heart sounds and brain signals for medical care and treatment.",
      title : "Title: Speech Technology for Healthcare in Robotics"
    },
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Kazuhiro Nakadai",
      position: "Tokyo Institute of Technology, Japan",
      description: "Bio",
    },
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Tony Belpaeme",
      position: "Ghent University, Belgium",
      description: "Bio",
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
