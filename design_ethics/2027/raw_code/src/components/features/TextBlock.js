import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.div`lg:mx-24 mt-2 mb-2 font-medium text-gray-600 text-center `;
const AbstractDescription = tw.p`lg:mx-24 mt-2 mb-2 font-medium text-gray-600 text-justify `;
const HeadingMinor = tw.p`mt-6 mb-2 font-bold text-gray-600 text-center text-3xl`;
const AbstractTitle = tw.p`mt-12 font-bold text-primary-500 text-center`;
const CenteredList = tw.div`w-full flex justify-center`;
const ListInner = tw.div`text-left`; // max-w-prose is optional
const Divider = tw.hr`my-12 w-24 mx-auto border-t-4 border-primary-800`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'grey'
};


const List = tw.ul`mt-2 mb-2`;
const ListItem = tw.li`mt-0 font-medium text-gray-600`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;


const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 opacity-25 text-primary-500 fill-current w-24`;

export default () => {

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer id = "cfp">
          <HeadingTitle>Call For Papers</HeadingTitle>
          <HeadingDescription>
            <b>We invite position papers, to be presented as lightning talks with a dedicated poster session.</b>

            <p><b>List of topics:</b></p>

            <CenteredList>
              <ListInner>
              <ul>
                <li>Ethical design methods, e.g., design justice, participatory design, value sensitive design</li>
                <li>Frameworks and tools for ethical HRI design</li>
                <li>Manipulation, deceptive design, and “dark patterns” in HRI</li>
                <li>Surveillance and privacy by design in HRI</li>
                <li>Philosophy and theory of ethical HRI design</li>
                <li>Ethical tensions in HRI design, e.g., human control vs. robot autonomy, personalisation vs. privacy</li>
                <li>Anticipatory and speculative ethical design</li>
                <li>Ethical design futures in HRI</li>
                <li>Ethical evaluation in HRI design</li>
                <li>Moral judgement and ethical decision-making in HRI</li>
                <li>User and stakeholder perspectives on ethical design</li>
                <li>Intersectionality and marginalised groups in HRI design</li>
                <li>Stereotypes, normativity, and status quo disruption in HRI</li>
                <li>Power, policy, and socio-technical aspects in HRI design</li>
                <li>Power dynamics of HRI design with and for vulnerable populations</li>
                <li>Human rights and values in HRI design</li>
                <li>Challenges and limitations of ethical design in HRI</li>
              </ul>
              </ListInner>
            </CenteredList>

            <b>Submission format:</b> TBD.

          <p>Please submit your works to <a href="mailto:ethicaldesigninhri@gmail.com">ethicaldesigninhri@gmail.com</a></p>

          <Divider />

          <p><b>Submission and notification schedule:</b> TBD</p>

          <Divider />

        <p><b>Position papers:</b> We invite contributions of 3&ndash;4 pages (excluding references and appendices),
        related to Ethical Design in HRI, including but not limited to the list of topics above.
        Works can include experimental results, case studies, design explorations, and ethical analysis of ongoing HRI work.
        Submissions will be peer-reviewed for quality, relevance, novelty and contribution to the field.</p>

        <Divider />

        <p>With their authors&rsquo; agreement, accepted papers will be published in the workshop proceedings.</p>

        <p>We will also gather the insights generated during the workshop and publish them on the workshop website.</p>

        <p>We aim to create a summative publication based on the submissions and trends of this workshop iteration.</p>
          </HeadingDescription>
        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
    </Container>
  );
};
