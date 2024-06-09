import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Table = tw.table`table-auto text-gray-600 lg:w-1/5 border-collapse`;
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
          <HeadingTitle>Program Commitee</HeadingTitle>
          <Table>
            <tbody>
              <tr>
                <Td> Dr. Eric Nichols </Td>
              </tr>
              <tr>
                <Td> Hideki García Goo </Td>
              </tr>
              <tr>
                <Td> Joel Currie </Td>
              </tr>
              <tr>
                <Td> Nathaniel Dennler </Td>
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
