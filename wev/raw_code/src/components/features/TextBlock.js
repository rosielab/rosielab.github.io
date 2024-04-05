import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div` max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`lg:mx-24 mt-2 mb-2 font-medium text-gray-600 text-center `;
const HeadingMinor = tw.p`mt-6 mb-2 font-bold text-gray-600 text-center `;

const List = tw.ul`mt-2 mb-2`;
const ListItem = tw.li`mt-0 font-medium text-gray-600`;
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
          <HeadingDescription>
            We aim to bring together robot designers, interaction scholars and those working in speech and 
            sound synthesis. We challenge those working in speech synthesis and sound generation to consider 
            the challenges of working within the constraints of embodiment and context, and those designing 
            robots to consider the benefits of embedding state of the art generative models.
          </HeadingDescription>
          <HeadingDescription>
            Papers are to be submitted via Microsoft CMT here: <Link href="https://cmt3.research.microsoft.com/wev2024/Submission/Index">HERE</Link>
          </HeadingDescription>
          <HeadingMinor>
            Important Dates
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
          <HeadingDescription>
            All deadlines are at 23:59 AOE.
          </HeadingDescription>
          <HeadingMinor>
            Topics
          </HeadingMinor>
          <HeadingDescription>
            We are seeking topics including, but not limited to, the following:
          </HeadingDescription>
          <List>
            <ListItem>
              <b>Robotic Sound Design</b>
              <List>
                <ListItem>
                  Assessment and validation of appriopriateness of embodied sounds
                </ListItem>
                <ListItem>
                  In the wild deployment of embodied sounds
                </ListItem>
                <ListItem>
                  Uncanny Valley voice
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <b>Contextual Sound Synthesis</b>
              <List>
                <ListItem>
                  Contextual speech synthesis
                </ListItem>
                <ListItem>
                  Contextual non-speech sounds
                </ListItem>
                <ListItem>
                  Adaptive sound generation
                </ListItem>
                <ListItem>
                  Controllable TTS
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <b>Human Studies of Vocal Adaptation</b>
              <List>
                <ListItem>
                  Linguisitic and psychological studies of vocal adaptation in context
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <b>Ethics in Sound Design</b>
              <List>
                <ListItem>
                  Voice vs. sound
                </ListItem>
                <ListItem>
                  Perception difficulties and accessibility
                </ListItem>
                <ListItem>
                  Reinforcement of bias (gender, accents, jobs)
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <b>Embodied Interaction</b>
              <List>
                <ListItem>
                  Robotic conversation systems
                </ListItem>
                <ListItem>
                  Acoustic processing
                </ListItem>
                <ListItem>
                  Speech processing
                </ListItem>
              </List>
            </ListItem>
          </List>
          <HeadingMinor>
            Submission Guidelines
          </HeadingMinor>
          <HeadingDescription>
            We invite papers of 2-4 pages (excluding references).
          </HeadingDescription>
          <HeadingDescription>
            Please follow the style and submission 
            <Link href="https://roboticsconference.org/information/authorinfo/"> guidelines for RSS </Link> 
            (<Link href="https://www.overleaf.com/latex/templates/robotics-science-and-systems-conference
            /yjqvxxpznptx">Overleaf template</Link>), reviews will be double bind so all submissions must 
            be anonymized.
          </HeadingDescription>

        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
    </Container>
  );
};
