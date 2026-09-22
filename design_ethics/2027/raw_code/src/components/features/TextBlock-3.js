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
          <HeadingMinor>Tentative programme.</HeadingMinor>
          <Table>
            <thead>
              <tr>
                <Th> Starting time </Th>
                <Th> Ending time </Th>
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
                <Td> Contributed lightning talks and poster session 1 </Td>
              </tr>
              <tr>
                <Td> 09:40 </Td>
                <Td> 10:35 </Td>
                <Td> Panel discussion </Td>
              </tr>
              <tr>
                <Td> 10:35 </Td>
                <Td> 10:50 </Td>
                <Td> Coffee break </Td>
              </tr>
              <tr>
                <Td> 10:50 </Td>
                <Td> 11:30 </Td>
                <Td> Group discussion part 1: questions 1 and 2 </Td>
              </tr>
              <tr>
                <Td> 11:30 </Td>
                <Td> 11:40 </Td>
                <Td> Sharing action points from discussion 1 </Td>
              </tr>
              <tr>
                <Td> 11:40 </Td>
                <Td> 12:10 </Td>
                <Td> Contributed lightning talks and poster session 2 </Td>
              </tr>
              <tr>
                <Td> 12:10 </Td>
                <Td> 12:40 </Td>
                <Td> Group discussion part 2: questions 3 and 4 </Td>
              </tr>
              <tr>
                <Td> 12:40 </Td>
                <Td> 12:50 </Td>
                <Td> Sharing action points from discussion 2 </Td>
              </tr>
              <tr>
                <Td> 12:50 </Td>
                <Td> 13:00 </Td>
                <Td> Closing </Td>
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
