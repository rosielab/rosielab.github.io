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
  heading = "Organizing Commitee",
  testimonials = [
    {
      imageSrc:
        minja,
      quote:
        "Minja is a postdoctoral researcher, Visiting Scholar at the Leverhulme Centre for the Future of Intelligence, and Teaching Fellow at the Centre of Human-Inspired AI (University of Cambridge). She researches the design and ethics of social robots. ",
      customerName: "Minja Axelsson",
      position: "University of Cambridge, UK"
    },
    {
      imageSrc:
        paige,
      quote:
        "Paige is an AI Engineer and Post-Doctoral researcher in linguistics. Her work focuses on building adaptive voices for robotics, specifically focusing on voices for teaching and second language learners.",
      customerName: "Paige Tuttösí",
      position: "Enchanted Tools, France & Simon Fraser University, Canada"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Joel is a PhD student at the University of Aberdeen. He investigates the cognitive processes involved in human-robot interaction and develops cognitive models for robots, with a specific interest in social abilities such as visual perspective-taking in embodied",
      customerName: "Joel Currie",
      position: "University of Aberdeen, UK"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Jiaee completed her doctoral studies at the University of Cambridge and is currently pursuing her postdoctoral studies at Harvard University. She is interested in advancing responsible and equitable AI systems for healthcare and human wellbeing.",
      customerName: "Jiaee Cheong",
      position: "Harvard University, USA"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Shalaleh is a postdoctoral researcher at McGill University and Mila Quebec AI Institute studying how people can exercise meaningful control when co-creating with AI systems. She is also the Executive Director of the Open Roboethics Institute, a Canadian non-profit.",
      customerName: "Shalaleh Rismani",
      position: "McGill University & Mila Québec AI Institute, Canada"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Patrícia is an Assistant Professor of Robotics at the University of Michigan, where she leads Robot Studio, a research lab focused on creating robots for human health and creativity. Her research unifies the fields of Robotics, Design, and Psychology",
      customerName: "Patrícia Alves-Oliveira",
      position: "University of Michigan, USA"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Katie is an Associate Professor and scholar of critical computing and HCI whose work spans social robotics, feminism and gender studies, queer theory, intersectionality and critical race theory, and inclusive design.",
      customerName: "Katie Seaborn",
      position: "Institute of Science Tokyo, Japan & University of Cambridge, UK"
    },
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
                <Image src={testimonial.imageSrc} />
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
