import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`lg:mx-24 mt-2 mb-2 font-medium text-gray-600 text-center `;
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
            <b>We invite contributions as extended abstracts to be presented as talks.</b>

            <p><b>List of topics:</b></p>

            <CenteredList>
              <ListInner>
              <ul>
                <li>Ethically-engaged design methods (design justice, value sensitive design)</li>
                <li>Frameworks and tools for ethical HRI design</li>
                <li>Deceptive design in HRI scenarios</li>
                <li>Philosophy and theory of ethical design</li>
                <li>Ethical tensions (user control vs. robot autonomy, personalizing vs. privacy)</li>
                <li>Anticipatory and speculative ethical design</li>
                <li>Evaluating robots for ethics in HRI design</li>
                <li>Robots, moral judgement, and ethical decision-making</li>
                <li>User and stakeholder perspectives on ethical design</li>
                <li>Intersectionality and marginalised groups in HRI design</li>
                <li>Stereotypes, tensions, and normativity against disruption of the status quo</li>
                <li>Power, policy, and socio-technical aspects in HRI design</li>
                <li>Power effects of design for HRI with vulnerable populations</li>
              </ul>
              </ListInner>
            </CenteredList>

            By default, please use the ICSR conference format for your submissions.
            Authors are invited to submit the complete article in PDF format, following the Instructions for Authors provided <a href="https://icsr2026.uk/wp-content/uploads/2025/10/Springer_Instructions_for_Authors_of_Proceedings_CS.pdf">here</a>.
            For detailed guidance, please refer to <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Springer’s author guidelines</a>, available for both LaTeX and Word submissions.
            Springer’s proceedings LaTeX templates are also available in <a href="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WsdHOy5uZpg">Overleaf</a>. 
            For designerly works, please include any additional design materials as appendices.
          
          <p>Please submit your works to <a href="mailto:ethicaldesigninhri@gmail.com">ethicaldesigninhri@gmail.com</a></p>

          <Divider />

          <b>Submission and notification schedule:</b>

         <CenteredList>
          <ListInner>
              <ul>
                <li>Extended abstract Submission Deadline: May 20th, 2026</li>
                <li>Notification of Paper Acceptance: June 6th, 2026 (Please note that this is after the earlybird registration deadline)</li>
                <li>Camera-ready Deadline: June 20th, 2026</li>
                <li>Workshop: July 3rd, 2026, 14:00-17:00</li>
              </ul>
          </ListInner>
         </CenteredList>

         <Divider />


        <p><b>Extended abstracts:</b> We invite contributions of 3–5 pages (excluding references and appendices). Works will receive a light peer-review. 
        Selected works will be presented at the workshop as a talk. We invite works highlighting Ethical HRI Design, especially in relation to but not limited to the list of topics. 
        Works can include position papers, experimental results, case studies, design explorations, and ethical analysis of ongoing HRI work. </p>

        <Divider />

        <p>Accepted papers will be published here on the workshop website. 
          Authors can opt out of this, please notify us of this upon possible acceptance of your paper.</p>

        <p>Accepted authors will be given the option to include their submissions within proceedings, which we will compile and make available on arXiv.
          We will also gather the insights generated during the workshop and publish them on the workshop website. </p>

        <p>Participants of the workshop will be invited to collaborate on a paper scoping ethical design in HRI.</p>
          </HeadingDescription>
        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
    </Container>
  );
};
