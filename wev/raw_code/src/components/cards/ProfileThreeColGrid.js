import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import lealuka from "images/lea-luka.png";
import zhengjun from "images/zhengjun.png";
import tony from "images/tony.jpeg";
import kazuhiro from "images/kazuhiro.png";
import catherine from "images/catherine.png";
import james from "images/james.jpg"

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
  heading = "Invited Speakers",
  description = "We are excited to present our lineup of excellent speakers.",
  cards = [
    {
      imageSrc: catherine,
      name: "Dr. Catherine Lai",
      position: "University of Edinburgh, UK",
      description: "Dr. Lai is a Lecturer in Speech and Language Technology, based in the Centre for Speech Technology Research. She will discuss recent work exploring prosodic variation in conversational (English) speech using text-to-speech synthesis models. She argues that there are a  lot of benefits to be had from new self-supervised methods for representation learning on speech and text datasets, but we still need linguistic knowledge to actually make use of the true richness of spoken communication. Her research focuses on speech prosody,  spoken language understanding and generation, and affective computing.",
      title: "Title: Watch your tone! Understanding prosodic variation in synthetic speech"
    },
    {
      imageSrc: lealuka,
      name: "Dr. Lea Luka Sikau",
      position: "University of Cambridge, UK",
      description: "Dr. Sikau (she/her) is an artist-researcher with a PhD on critical posthumanism, new music and rehearsal ethnography from the University of Cambridge. She teaches on artistic research processes at Humboldt University Berlin and Seoul National University. Sikau has been a Bavarian American Academy Fellow at Harvard University’s Mellon School for Performance and Theater Research and was awarded with the Bavarian Cultural Award for her research at MIT’s Center for Art, Science and Technology. She has worked with some of the most sought-after visionaries in the arts such as Romeo Castellucci, Marina Abramović, Lotte de Beer and Stefan Kaegi (Rimini Protokoll). As a media artist and mezzosoprano, Sikau was commissioned by S+T+ARTS (European Commission), the Ars Electronica Festival, transmediale Berlin, Impakt Utrecht, Ensemble Modern and Climate Week NYC. Image : Patrick Münnich",
    },
    {
      imageSrc: zhengjun,
      name: "Dr. Zhengjun Yue",
      position: "Delft University of Technology, Netherlands",
      description: "Dr. Yue is an Assistant Professor at the Multimedia Computing Group working on speech technology for healthcare. Her interests are atypical speech processing and recognition.  She is also interested in building conversation AI medical systems for healthcare, and using heart sounds and brain signals for medical care and treatment.",
      title: "Title: Speech Technology for Healthcare in Robotics"
    },
    {
      imageSrc: kazuhiro,
      name: "Dr. Kazuhiro Nakadai",
      position: "Tokyo Institute of Technology, Japan",
      description: "Dr. Nakadai has been a pioneer in the field of robot audition for more than 20 years since Prof. Okuno and he proposed it in 2000, both as a JST and HRI scientist and, since 2022, as a professor in Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology. In addition to robot audition, his main research interests include AI, robotics, signal processing, computational auditory scene analysis, and multimodal integration. IEEE Fellow. RSJ Fellow. This talk will introduce robot audition techniques, mainly related to human-robot interaction, accompanied with demonstrations. In addition, machine learning and deep learning-based robot audition techniques, which have been developed rapidly in recent years, will be introduced and their advantages and disadvantages will be discussed from the perspective of robot audition.",
      title: "Title: Robot Audition for Human Robot Interaction"
    },
    {
      imageSrc: tony,
      name: "Dr. Tony Belpaeme",
      position: "Ghent University & imec, Belgium",
      description: "Dr. Belpaeme is professor and senior researcher. His team studies human-robot interaction and applications of social robotics, with a specific focus on building autonomous robots for applications such as education, healthcare and entertainment. Spoken language is the most natural and, once sufficiently mature and robust, will likely be the most common interface for robot applications. Interacting using language requires efforts across the whole chain of processing, which needs speech recognition, multimodal interpretation, dialogue management and speech production to all singing together. However, the speech of a robot is often an afterthought and all too often relies on bland out-of-the-box text-to-speech solutions. This talk argues that robot voices merit more attention and scopes the challenges and possible solutions to give robots the voice they deserve.",
      title: "Title: Giving Robots a Voice"
    },
    {
      imageSrc: james,
      name: "Dr. James P. Trujillo",
      position: "University of Amsterdam, Netherlands",
      description: "Dr.Trujillo's research aims to understand how we use the ensemble of visual and vocal modalities available to us in order to communicate. How do we orchestrate, face, head, body, hands, and speech together into one multimodal whole, and how do others make sense of this? How do we adapt this complex array of behaviors to different contexts? How is neurodiversity reflected in different styles of communication, and how does this impact social interaction? To this end, he uses motion tracking, acoustic analysis, qualitative coding, and virtual agents to study both what people do in naturalistic settings, and to design experiments to test the hypotheses generated from studying more unconstrained behavior.",
      title: "Facial Signals Combine to Influence the Interpretation of Speech"
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
