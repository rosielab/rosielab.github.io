import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingMinor = tw.p`mt-0 mb-0 font-medium text-gray-600 text-center `;

const Table = tw.table`table-auto text-gray-600 lg:w-2/3 border-collapse`;
const Th = tw.th`text-left h-8 lg:h-6`
const Td = tw.td`h-8 lg:h-6 border-solid border-0 border-t border-primary-100 md:border-0`


const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 opacity-25 text-primary-500 fill-current w-20 lg:w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 opacity-25 text-primary-500 fill-current w-20 lg:w-24`;

export default () => {

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer id = "schedule">
          <HeadingTitle>Schedule</HeadingTitle>
          <Table>
            <thead>
              <tr>
                <Th> Starting time GMT</Th>
                <Th> Ending time GMT</Th>
                <Th> Activity </Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td> 09:00 </Td>
                <Td> 09:10 </Td>
                <Td> Introduction </Td>
              </tr>
              <tr>
                <Td> 09:10 </Td>
                <Td> 09:40 </Td>
                <Td> Keynote speaker: Prof. Michio Okada </Td>
              </tr>
              <tr>
                <Td> 09:40 </Td>
                <Td> 10:40 </Td>
                <Td> Contributed talks </Td>
              </tr>
              <tr>
                <Td> 10:40 </Td>
                <Td> 11:00 </Td>
                <Td> Coffee Break </Td>
              </tr>
              <tr>
                <Td> 11:00 </Td>
                <Td> 11:30 </Td>
                <Td> Keynote speaker: Dr. Paulina Yurman </Td>
              </tr>
              <tr>
                <Td> 11:30 </Td>
                <Td> 12:00 </Td>
                <Td> Poster presentations and collaborative critique </Td>
              </tr>
              <tr>
                <Td> 12:00 </Td>
                <Td> 12:30 </Td>
                <Td> Keynote speaker: Prof. Marina Jirotka </Td>
              </tr>
              <tr>
                <Td> 12:30 </Td>
                <Td> 12:50 </Td>
                <Td> Structured group discussions and insights generation </Td>
              </tr>
              <tr>
                <Td> 12:50 </Td>
                <Td> 13:00 </Td>
                <Td> Sharing insights and closing workshop </Td>
              </tr>
            </tbody>
          </Table>
        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
