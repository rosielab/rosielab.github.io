import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.div`lg:mx-24 mt-4 font-medium text-gray-600 text-justify `;

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
      title: "Panel Discussion",
      description:
        "A panel that will bring together experts across academia, industry and policymaking, to contribute towards a cohesive community and practice in ethical HRI design.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/6476779/pexels-photo-6476779.jpeg?_gl=1*1uwec43*_ga*MTM2NjQyNDI1Mi4xNzY4OTU4ODY3*_ga_8JE65Q40S6*czE3Njg5NTg4NjYkbzEkZzEkdDE3Njg5NTkzMzMkajQ3JGwwJGgw",
      title: "Contributed Lightning Talks and Posters",
      description:
        "Authors of accepted papers will present their work in a lightning talk and a dedicated poster session. See the Call for Papers for further information.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8117466/pexels-photo-8117466.jpeg?_gl=1*rr1w2w*_ga*MTM2NjQyNDI1Mi4xNzY4OTU4ODY3*_ga_8JE65Q40S6*czE3Njg5NTg4NjYkbzEkZzEkdDE3Njg5NTkxNDEkajU5JGwwJGgw",
      title: "Group Discussion and Action Points",
      description:
        "Participants will be split into groups of 4 to 5 to discuss how the ethical HRI design community can build bridges across practices. Each group will develop action points addressing the workshop questions and share them after each discussion session. The points will be compiled into a report and published on the workshop website.",
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
          <p>
          How can we build robots that build better futures for humanity? How can we design robots
          that strengthen rather than undermine community? How can we collaborate across
          Human-Robot Interaction (HRI) practices to create more ethical HRI?
          </p>
          <p>
          This <b>half-day, hybrid workshop</b> will explore <i>Ethical Design in HRI</i>. This second
          workshop iteration focuses on <i>ethical innovation across academia, industry, and policy</i>,
          by bringing together researchers, industry practitioners, and policymakers contributing to
          HRI design. We think that all those designing HRI have a stake in creating more ethical
          robotics futures. Ethical HRI design can build robots that enable people to flourish, and
          prevent harms such as robotic deception, robots that exacerbate inequality, and robots that
          exploit people. To achieve ethical HRI design, shared knowledge and practices across
          research, industry and policy are needed. This workshop aims to bridge this gap between
          practitioners.
          </p>
          <p>
          The workshop will include a panel discussion with practitioners across academia, industry
          and policymaking. We also invite position papers from participants, which will be presented
          in lightning talks and a poster session. Throughout the workshop, we will organise group
          discussions, which will generate action points to unite ethical HRI design across academia,
          industry and policy.
          </p>
          <p>Workshop participants will collaboratively address these <b>key questions</b>:</p>
           <ol>
            <li>How can we align ethics with the fast AI and robotics development?</li>
            <li>Who is responsible for creating, updating, and being accountable for these ethics?</li>
            <li>Should there be universal design for HRI ethics?</li>
            <li>Should ethics be different across academia, industry, and policymaking?</li>
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
