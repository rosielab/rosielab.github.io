import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import paige from "images/paige.png";
import minja from "images/minja.png";
import joel from "images/profile_joel.jpeg";
import jiaee from "images/jiaee_headshot_0 (1).jpg";
import katie from "images/katie.jpeg";
import shalaleh from "images/SR-scaled.jpg";
import anastasia from "images/anastasia.jpg";


const Testimonials = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-normal`;
const Position = tw.div`uppercase font-bold tracking-widest text-xs text-primary-500`
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  heading = "Organizing Committee",
  testimonials = [
    {
      imageSrc:
        minja,
      quote:
        "Minja Axelsson is an assistant professor in Computer Science at the Heriot-Watt University in Edinburgh. She researches the design and ethics of social robots and social AI, particularly in the context of wellbeing. She previously completed her PhD and postdoctoral research at the University of Cambridge, and was a visiting PhD student at MIT Media Lab.",
      customerName: "Minja Axelsson",
      position: "Heriot-Watt University, UK"
    },
    {
      imageSrc:
        shalaleh,
      quote:
        "Shalaleh Rismani is a postdoctoral researcher at McGill University and Mila Quebec AI Institute studying how people can exercise meaningful control when co-creating with AI systems, especially when such systems generate harmful output. She is also the Executive Director of the Open Roboethics Institute, a Canadian non-profit focused on the ethics of embodied AI and robotics.",
      customerName: "Shalaleh Rismani",
      position: "McGill University & Open Roboethics Institute, Canada"
    },
    {
      imageSrc:
        paige,
      quote:
        "Paige is an AI Engineer at Enchanted Tools and Post Doctoral Researcher Assistant for Simon Fraser University Linguistics. Her work focuses on building adaptive voices for robotics, specifically focusing on voices for teaching and second language learners.",
      customerName: "Paige Tuttösí",
      position: "Enchanted Tools, France & Simon Fraser University, Canada"
    },
    {
      imageSrc:
        jiaee,
      quote:
        "Jiaee Cheong completed her doctoral studies at the University of Cambridge and is currently pursuing her postdoctoral studies at Harvard University. She is interested in advancing responsible and equitable AI systems for healthcare and human wellbeing.",
      customerName: "Jiaee Cheong",
      position: "Harvard University, USA & University of Cambridge, UK"
    },
    {
      imageSrc:
        joel,
      quote:
        "Joel Currie is a PhD student at the University of Aberdeen. He investigates the cognitive processes involved in human-robot interaction and develops cognitive models for robots, with a specific interest in social abilities such as visual perspective-taking in embodied, face-to-face interactions.",
      customerName: "Joel Currie",
      position: "University of Aberdeen, UK"
    },
    {
      quote:
        "Cheng Lin is a doctoral student at McGill University and Mila Quebec AI Institute and a researcher at Open Roboethics Institute. She studies the social and physical safety risks of robotics.",
      customerName: "Cheng Lin",
      position: "McGill University & Open Roboethics Institute, Canada"
    },
    {
      imageSrc:
        anastasia,
      quote:
        "Dr. Anastasia Kouvaras Ostrowski is an Assistant Professor in the School of Applied and Creative Computing with a courtesy appointment in the School of Mechanical Engineering. Her work supports design and implementation processes in HCI and HRI, focusing on robots and AI in industrial, manufacturing, and home contexts, among others. She incorporates human-centered approaches, including co-design and participatory design, in her work.",
      customerName: "Anastasia Kouvaras Ostrowski",
      position: "Purdue University, USA"
    },
    {
      imageSrc:
        katie,
      quote:
        "Associate Professor Katie Seaborn is a researcher in HCI and critical computing. In HRI, they apply critical theories from feminism and gender studies, queer theory, intersectionality and critical race theory, and inclusive design and crip studies to robotics practice. Dr. Seaborn is invested in correcting user-decentred technologies.",
      customerName: "Katie Seaborn",
      position: "University of Cambridge, UK & Institute of Science Tokyo, Japan"
    }
  ]
}) => {
  return (
    <Container id="organizers">
      <ContentWithPaddingXl>
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                {testimonial.imageSrc && <Image src={testimonial.imageSrc} />}
                <CustomerName> {testimonial.customerName}</CustomerName>
                <Position>{testimonial.position}</Position>
                <Quote>{testimonial.quote}</Quote>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
