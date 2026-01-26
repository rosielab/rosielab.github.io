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

const ImageHeader = styled.h2`
  ${tw`text-lg text-center items-center lg:text-xl xl:text-xl md:text-left lg:text-left font-thin text-primary-700 leading-snug ml-auto`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const TwoColumn = tw.div`flex flex-col items-center lg:flex-row md:flex-row`;
const LeftColumn = tw.div`lg:w-1/4 md:w-1/4`;
const RightColumn = tw.div`lg:w-1/4 md:w-1/4`;
const CenterColumn = tw.div`lg:w-1/2 md:w-1/2`;
const ImageRobot = tw.img`lg:w-48 w-32 items-center mr-2`;
const ImageSponsor= tw.img`lg:w-72 items-center w-56`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Keynote Talks",
      description:
        "Keynotes will focus on bringing together insights from ethics and design research, HRI practice, responsible technology, and the arts. To contribute towards an interdisciplinary understanding and critical investigation of ethical HRI",
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/6476779/pexels-photo-6476779.jpeg?_gl=1*1uwec43*_ga*MTM2NjQyNDI1Mi4xNzY4OTU4ODY3*_ga_8JE65Q40S6*czE3Njg5NTg4NjYkbzEkZzEkdDE3Njg5NTkzMzMkajQ3JGwwJGgw",
      title: "Contributed Talks",
      description:
        "Authors of accepted papers  will present their work: 8 minutes  with a 2-minute Q&A. See the Call for Papers for additional information.",
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/12319354/pexels-photo-12319354.jpeg?_gl=1*r0owtu*_ga*MTM2NjQyNDI1Mi4xNzY4OTU4ODY3*_ga_8JE65Q40S6*czE3Njg5NTg4NjYkbzEkZzEkdDE3Njg5NTkyNzMkajQxJGwwJGgw",
      title: "Poster Session and Collaborative Critique",
      description:
        "Authors with accepted posters will be invited to present in the poster session. Other participants will be invited to discuss the posters with the presenters from a critical, ethical lens. See the Call for Papers for additional information.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8117466/pexels-photo-8117466.jpeg?_gl=1*rr1w2w*_ga*MTM2NjQyNDI1Mi4xNzY4OTU4ODY3*_ga_8JE65Q40S6*czE3Njg5NTg4NjYkbzEkZzEkdDE3Njg5NTkxNDEkajU5JGwwJGgw",
      title: "Group Discussion and Insights Generation",
      description:
          " In groups of 4--5, participants will discuss: (1) What does ethical design mean in HRI today?, (2) What are the primary roadblocks and challenges to more meaningful engagement with ethics in HRI design practice? (3), How can we be more ethically engaged? Each group will share their insights at the end of the workshop. The discussion will be recorded and shared on the website with the consent of all participants.",
    },
  ];

  return (
    <Container>
        <TwoColumn>
          <LeftColumn>
          </LeftColumn>
          <CenterColumn>
          </CenterColumn>
          <RightColumn>
          </RightColumn>
        </TwoColumn>
      <SingleColumn>
        <HeadingInfoContainer id = "about">
          <HeadingTitle>About</HeadingTitle>
          <HeadingDescription>
          The design of human-robot interactions (HRI) in social robotics carries profound ethical implications for 
          normativity, justice, and social well-being. Yet, the ethical dimensions often remain underexplored or 
          constrained by technical priorities. This raises an urgent question: How can designers include rather than 
          marginalise, protect rather than manipulate, and empower rather than exploit? This half-day workshop will 
          bring together researchers curious about design ethics. There will be three keynotes, participant-contributed 
          talks, a design critique-inspired poster session, and discussion groups. Participants will address key 
          questions in a discussion format, with the outcomes published on the work- shop website and refined into a 
          publication with workshop participants. Through critique and discussion, the workshop will cultivate a 
          diverse community of inquiry, generate a shared map of current challenges, and identify pathways for 
          advancing ethical design in HRI. The workshop <b>objectives</b> are:
           <ol>
            <li>understanding the current state of ethical design in Human-Robot Interaction (HRI)</li>
            <li>identifying the challenges of ethical design in HRI</li>
            <li>shaping future directions for ethical design in HRI</li>
          </ol> 
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
