import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingMinor = tw.p`mt-0 mb-0 font-medium text-gray-600 text-center `;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default () => {

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer >
          <HeadingTitle>Submit Your Voice</HeadingTitle>
          <HeadingMinor>
            You can submit your TTS voice in our google form <a href="https://forms.gle/FHdYu9qVGTQhwVED6"> HERE </a>
          </HeadingMinor>
          <HeadingMinor>
            Please submit a zip file with several sample phrases in wav format.
          </HeadingMinor>
          <HeadingMinor>
            You may also submit a link to the source code via the form.
          </HeadingMinor>
        </HeadingInfoContainer>
      </SingleColumn>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
