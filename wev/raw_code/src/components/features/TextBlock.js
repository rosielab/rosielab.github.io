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
          <HeadingTitle>Lightning Talks</HeadingTitle>
          <HeadingDescription>
            We aim to bring together robot designers, interaction scholars and those working in speech and 
            sound synthesis. We encourage those working in speech synthesis and sound generation to consider 
            the challenges of working within the constraints of embodiment and context, and those designing 
            robots to consider the benefits of embedding state of the art generative models.
          </HeadingDescription>
          <HeadingMinor>
            Abstracts
          </HeadingMinor>
          <AbstractTitle>
            Virtual Datasets for Spatial Hearing in Robotics
          </AbstractTitle>
          <AbstractDescription>
            In artificial systems and robotics, much attention has been placed on machine vision. However, 
            robot hearing is relatively less explored. In recent years, deep neural networks have become one 
            of the most used approaches in intelligent systems. This is due to the high performance they 
            achieve compared to traditional approaches in computer vision, and language processing. However, 
            their dependency on large datasets that properly represent the spatial and temporal complexity of 
            a robot's sensory inputs is a major challenge for the development of human-robot interactions in 
            real scenarios. This is compounded by the small size of available datasets for human-robot interaction 
            and limitations in hardware, such as the use of a spatially constrained onboard CPU in a robot. 
            In this paper, we propose a method that tackles these challenges in the context of robot spatial hearing. 
            We recorded a robot-specific Head Related Transfer Function (HRTF), which we use to spatially render 
            large datasets of auditory scenes with multiple talkers. We then use this dataset to train both supervised 
            and self-supervised learning models that can be fine-tuned for a variety of downstream tasks.
          </AbstractDescription>
          <HeadingDescription>
            Authors: Omar Eldardeer, Lukas Grasse, Matthew Tata, Francesco Rea 
          </HeadingDescription>
          <AbstractTitle>
            No More Mumbles: Enhancing Robot Intelligibility through Speech Adaptation
          </AbstractTitle>
          <AbstractDescription>
            Spoken language interaction is at the heart of interpersonal communication, and people flexibly adapt 
            their speech to different individuals and environments. It is surprising that robots, and by extension 
            other digital devices, are not equipped to adapt their speech and instead rely on fixed speech parameters, 
            which often hinder comprehension by the user. We conducted a speech comprehension study involving 39 
            participants who were exposed to different environmental and contextual conditions. During the experiment, 
            the robot articulated words using different vocal parameters, and the participants were tasked with both 
            recognising the spoken words and rating their subjective impression of the robot's speech. The experiment's 
            primary outcome shows that spaces with good acoustic quality positively correlate with intelligibility and 
            user experience. However, increasing the distance between the user and the robot exacerbated the user 
            experience, while distracting background sounds significantly reduced speech recognition accuracy and user 
            satisfaction. We next built an adaptive voice for the robot. For this, the robot needs to know how 
            difficult it is for a user to understand spoken language in a particular setting. We present a prediction 
            model that rates how annoying the ambient acoustic environment is and, consequentially, how hard it is to 
            understand someone in this setting. Then, we develop a convolutional neural network model to adapt the 
            robot's speech parameters to different users and spaces, while taking into account the influence of ambient 
            acoustics on intelligibility. Finally, we present an evaluation with 27 users, demonstrating superior 
            intelligibility and user experience with adaptive voice parameters compared to fixed voice.
          </AbstractDescription>
          <HeadingDescription>
            Authors: Qiaoqiao Ren, Yuanbo Hou, Dick Botteldooren, Tony Belpaeme
          </HeadingDescription>
          <AbstractTitle>
            Hey, OK, Play! A rough guide for the dynamic design and interplay of multimodal, nonverbal communication signals in embodied voice assistants
          </AbstractTitle>
          <AbstractDescription>
            Voice assistants initially gained popularity for performing straightforward tasks such as setting reminders, 
            playing music, and providing weather updates. Over time, their functionalities have expanded to encompass smart 
            home control, personalized recommendations, and managing complex schedules. This evolution has been significantly 
            driven by advancements in natural language processing, machine learning and, ultimately, embodiment that made the 
            assistants more intuitive and efficient to use. Despite these technological advancements, embodiment also posed 
            new challenges that are still insufficiently addressed: the incorporation of non-verbal communication skills in 
            voice assistants. There is a need for a deeper understanding of how these signals should be shaped in terms of visual 
            and auditory design, and how they must be tailored to various factors such as the assistant's size, the specific 
            task, the interlocutor, and the communicative context. As speech scientists we summarize empirical results, insights, 
            and observations from our field to help engineers create suitable, meaningful, and coherent communication strategies 
            for embodied voice assistants that enhance the overall interaction experience
          </AbstractDescription>
          <HeadingDescription>
            Authors: Oliver Niebuhr, Io Valls-Ratés
          </HeadingDescription>
          <AbstractTitle>
            CANELA: Creating Audio-based Novel Engineered LAnguages for HRI
          </AbstractTitle>
          <HeadingDescription>
            Authors: Hideki Garcia Goo & Khiet Truong
          </HeadingDescription>
        </HeadingInfoContainer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
    </Container>
  );
};
