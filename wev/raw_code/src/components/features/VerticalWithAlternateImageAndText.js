import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`lg:mx-24 mt-4 font-medium text-gray-600 text-justify `;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center font-medium text-gray-600`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h2`text-4xl  text-gray-700`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Guest = tw.p`mt-2 font-bold text-base leading-loose`;
const Price = tw.p`mt-2 underline font-bold leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Invited Speakers",
      description:
        "We have invited speakers with a broad range of backgrounds including: human robot interaction, AI, music, acting and speech synthesis. The invited speakers bring different perspectives from diverse disciples and varying applications including entertainment and academia with multiple career stages being represented by the academics.",
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/680940/pexels-photo-680940.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lightning Talks",
      description:
        "Lightning talks will be 8 minutes long followed by panel Q&A. We aim to bring together robot designers, interaction scholars and those working in generative sound and voice that can be embedded into robotic systems. See the Call for Papers for additional information.",
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Activities",
      description:
        "To get everyone thinking about embodiment, we will start with a robot body movement game. To finish of the workshop we will have an embodied voice design challenge. Participants will be organized into teams and will be assigned a physical robot and/or an avatar. Each of the robots will have a short personal story to provide context such as their job, where they are, and who will be using them. Working through a co-design canvas, participants will brainstorm an appropriate voice for their robots. They will then be provided with a state-of-the-art TTS system with which they will attempt to generate their desired voices and send them to the robots. We will finish up with demos where each of the teams present their design process and selection.",
      guest:  "Guest Judge : Dr. Roger K. Moore",
      price: "Prize : 250€"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer id = "about">
          <HeadingTitle>About</HeadingTitle>
          <HeadingDescription>
          Communication between humans is driven by language and voice. As such, to improve 
          interaction between humans and robots we must improve robot voices. Research in 
          generative voices (Glow-TTS, VITS, Matcha-TTS) has been advancing at an 
          unprecedented rate. Yet, even though these models exist, they have seen little deployment 
          in robotics, with roboticists often opting for out-of-the-box voices from large 
          companies, or voices custom designed to a single robot. Appropriateness of a robot’s 
          voice requires considering a wide range of contextual factors including their appearance, 
          task, location, the culture and abilities of the people they interact with. At the same time, 
          the field of HRI is concerned with designing robots to interact with humans, often by 
          studying human behavior to replicate appropriate behaviour in robots. Yet, simply 
          applying human-like voices to a robot can result in uncanniness and may actually 
          reduce human comfort. The first question to consider is whether the robot even needs 
          a voice; will sounds, e.g. beeps and boops, suffice, or should there be no sound at all? 
          When we decide to use a voice how do we choose the right one; how will this choice affect 
          user comfort and perception, what ethical problems could result from vocal interaction, 
          e.g. affirming gender bias in tasks, difficulties in perception for second language speakers, 
          both on the side of the human and the robot, and increasing the humanlikess of the robot, 
          which could lead to attachment issues and personification. Consider, for example, a 
          robot dog approaching you while working in a warehouse. If it speaks, how do you expect 
          it to sound? If it had the voice of a 5 year old child, would this affect the trust you 
          have in this robot as a working companion? 
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content id="activities">
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Guest>{card.guest}</Guest>
                <Price>{card.price}</Price>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
