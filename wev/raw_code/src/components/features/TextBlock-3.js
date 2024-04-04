import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingMinor = tw.p`mt-0 mb-0 font-medium text-gray-600 text-center `;

const Table = tw.table`table-auto text-gray-600 lg:w-2/3`;

const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer id = "schedule">
          <HeadingTitle>Schedule</HeadingTitle>
          <Table>
            <thead>
              <tr>
                <th> Starting time </th>
                <th> Ending time </th>
                <th> Activity </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 09:00 </td>
                <td> 09:15 </td>
                <td> Opening remarks </td>
              </tr>
              <tr>
                <td> 09:15 </td>
                <td> 09:30 </td>
                <td> Body movement game </td>
              </tr>
              <tr>
                <td> 09:30 </td>
                <td> 10:00 </td>
                <td> Invited Speaker 1 </td>
              </tr>
              <tr>
                <td> 10:00 </td>
                <td> 10:30 </td>
                <td> Lightning talks 1 (3-5mins + panel Q&A) </td>
              </tr>
              <tr>
                <td> 10:30 </td>
                <td> 10:45 </td>
                <td> Break </td>
              </tr>
              <tr>
                <td> 10:45 </td>
                <td> 11:15 </td>
                <td> Invited Speaker 2 </td>
              </tr>
              <tr>
                <td> 11:15 </td>
                <td> 11:45 </td>
                <td> Lightning talks 2 (3-5mins + panel Q&A) </td>
              </tr>
              <tr>
                <td> 11:45 </td>
                <td> 12:15 </td>
                <td> Invited Speaker 3 </td>
              </tr>
              <tr>
                <td> 12:15 </td>
                <td> 12:45 </td>
                <td> Invited Speaker 4 </td>
              </tr>
              <tr>
                <td> 12:45 </td>
                <td> 13:30 </td>
                <td> Lunch </td>
              </tr>
              <tr>
                <td> 13:30 </td>
                <td> 14:00 </td>
                <td> Invited Speaker 5 </td>
              </tr>
              <tr>
                <td> 14:00 </td>
                <td> 14:15 </td>
                <td> Voice task Intro </td>
              </tr>
              <tr>
                <td> 14:15 </td>
                <td> 16:00 </td>
                <td> Voice task </td>
              </tr>
              <tr>
                <td> 16:00 </td>
                <td> 16:15 </td>
                <td> Break </td>
              </tr>
              <tr>
                <td> 16:15 </td>
                <td> 16:45 </td>
                <td> Voice task discussion </td>
              </tr>
              <tr>
                <td> 16:45 </td>
                <td> 17:00 </td>
                <td> Closing remarks </td>
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
