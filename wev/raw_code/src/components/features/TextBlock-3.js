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
                <Th> Starting time CET</Th>
                <Th> Ending time CET</Th>
                <Th> Activity </Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td> 08:45 </Td>
                <Td> 09:00 </Td>
                <Td> Opening remarks & Body movement game </Td>
              </tr>
              <tr>
                <Td> 09:00 </Td>
                <Td> 09:30 </Td>
                <Td> Invited speaker: Dr. Lea Luka Sikau </Td>
              </tr>
              <tr>
                <Td> 09:30 </Td>
                <Td> 10:00 </Td>
                <Td> Invited speaker: Dr. Zhengjun Yue </Td>
              </tr>
              <tr>
                <Td> 10:00 </Td>
                <Td> 10:30 </Td>
                <Td> Coffee Break </Td>
              </tr>
              <tr>
                <Td> 10:30 </Td>
                <Td> 11:00 </Td>
                <Td> Invited speaker: Dr. Tony Belpaeme </Td>
              </tr>
              <tr>
                <Td> 11:00 </Td>
                <Td> 11:30 </Td>
                <Td> Invited speaker: Dr. Kazuhiro Nakadai </Td>
              </tr>
              <tr>
                <Td> 11:30 </Td>
                <Td> 12:15 </Td>
                <Td> Lightning talks </Td>
              </tr>
              <tr>
                <Td> 12:15 </Td>
                <Td> 13:30 </Td>
                <Td> Lunch </Td>
              </tr>
              <tr>
                <Td> 13:30 </Td>
                <Td> 14:00 </Td>
                <Td> Invited speaker: Dr. Catherine Lai </Td>
              </tr>
              <tr>
                <Td> 14:00 </Td>
                <Td> 14:30 </Td>
                <Td> Invited speaker: Dr. James P. Trujillo </Td>
              </tr>
              <tr>
                <Td> 14:30 </Td>
                <Td> 14:45 </Td>
                <Td> Voice design challenge: Intro </Td>
              </tr>
              <tr>
                <Td> 14:45 </Td>
                <Td> 15:30 </Td>
                <Td> Voice design challenge </Td>
              </tr>
              <tr>
                <Td> 15:30 </Td>
                <Td> 16:00 </Td>
                <Td> Coffee Break </Td>
              </tr>
              <tr>
                <Td> 16:00 </Td>
                <Td> 16:30 </Td>
                <Td> Voice design challenge </Td>
              </tr>
              <tr>
                <Td> 16:30 </Td>
                <Td> 17:00 </Td>
                <Td> Voice design challenge: Discussion </Td>
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
