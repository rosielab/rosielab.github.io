import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center `;
const HeadingMinor = tw.p`mt-0 mb-0 font-medium text-gray-600 text-center `;


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
          <HeadingDescription>
          We challenge those working in behavior generation to consider the challenges of working 
          within the constraints of embodiment and context, and those designing robots to consider 
          the benefits of embedding state of the art generative models. We strongly encourage 
          submissions from researchers at any stage of their career.
          </HeadingDescription>
          <HeadingMinor>
          Papers are to be maximum 4 pages plus references and should adhere to the RSS format 
          found <a href="https://roboticsconference.org/information/authorinfo/">HERE</a>
          </HeadingMinor>
          <HeadingMinor>
          Papers are to be submitted via Microsoft CMT here: TBA
          </HeadingMinor>
          <HeadingMinor>
          Deadline for submission is <b>May 15th 2024</b>
          </HeadingMinor>
          <HeadingMinor>
          Notification of acceptance is <b>June 15th 2024</b>
          </HeadingMinor>
        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
    </Container>
  );
};
