import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center `;
const HeadingMinor = tw.p`mt-0 mb-0 font-medium text-gray-600 text-center `;

const List = tw.ul`mt-4`;
const ListItem = tw.li`mt-3 font-medium text-gray-600`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;


const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer id = "cfp">
          <HeadingTitle>Call for Papers</HeadingTitle>
          <HeadingMinor>
          Papers are to be maximum 4 pages plus references and should adhere to the RSS format 
          found <Link href="https://roboticsconference.org/information/authorinfo/">HERE</Link>
          </HeadingMinor>
          <HeadingMinor>
          Papers are to be submitted via Microsoft CMT here: <Link href="https://cmt3.research.microsoft.com/wev2024/Submission/Index">HERE</Link>
          </HeadingMinor>
          <HeadingDescription>
          We aim to bring together robot designers, interaction scholars and those working in speech and 
          sound synthesis. We challenge those working in speech synthesis and sound generation to consider 
          the challenges of working within the constraints of embodiment and context, and those designing 
          robots to consider the benefits of embedding state of the art generative models.
          </HeadingDescription>
          <HeadingMinor>
          <b>Important Dates</b>
          </HeadingMinor>
          <List>
            <ListItem>
              Early-bird submission deadline: <b>April 24th, 2024</b>
            </ListItem>
            <ListItem>
              Early-bird notification of acceptance: <b>May 22nd, 2024</b>
            </ListItem>
            <ListItem>
              General submission deadline: <b>May 15th, 2024</b>
            </ListItem>
            <ListItem>
              General notification of acceptance: <b>June 15th, 2024</b>
            </ListItem>
            <ListItem>
              Camera-ready deadline: <b>July 10th, 2024</b>
            </ListItem>
          </List>
          <HeadingMinor>
          All deadlines are at 23:59 AOE.
          </HeadingMinor>

        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
    </Container>
  );
};
