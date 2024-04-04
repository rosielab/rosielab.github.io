import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import shay from "images/shay.jpeg";
import lawrence from "images/LAWRENCE_KIM (3)-slim Medium.jpeg";
import paige from "images/paige.png";
import paul from "images/paul.jpeg";
import angelica from "images/angelica.jpg";
import charlotte from "images/charlotte.png";
import emma from "images/emma.png";
import marine from "images/marine.png";
import minja from "images/minja.png";
import jura from "images/jura.png";

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
        paige,
      quote:
        "Paige is a PhD sudent building adaptive voices for robotics, specifically focusing on voices for teaching and second language learners.",
      customerName: "Paige Tuttösí",
      position: "Simon Fraser University, Canada & FEMTO-ST, France"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Siyang is a PhD student working on speech and gesture synthesis.",
      customerName: "Siyang Wang",
      position: "KTH Royal Institute of Technology, Sweden"
    },
    {
      imageSrc:
        charlotte,
      quote:
        "Charlotte is a PhD student working on anthropomorphism and agency in social robots and AI's impact on human interaction.",
      customerName: "Charlotte Stinkeste",
      position: "KTH Royal Institute of Technology, Sweden"
    },
    {
      imageSrc:
        emma,
      quote:
        "Emma holds a BSc (honours) in psychology from the UVic and MSc in CS from SFU. She has 4 years of both industry and academic experience working in affective computing, human-machine interaction, cognitive science, and data science.",
      customerName: "Emma Hughson",
      position: "Cambridge Consultants, UK"
    },
    {
      imageSrc:
        paul,
      quote:
        "Paul is a PhD student in Music In the Brain Lab. His work focuses on the altered vocal feedback impacts on felt emotion.",
      customerName: "Paul Maublanc",
      position: "Aarhus University, Denmark"
    },
    {
      imageSrc:
        minja,
      quote:
        "Minja is a final year PhD student working on design, ethics and user experiences in HRI, and particularly on robots for mental wellbeing.",
      customerName: "Minja Axelsson",
      position: "University of Cambridge, UK"
    },
    {
      imageSrc:
        jura,
      quote:
        "Jūra a PhD student working on Multimodal Machine Learning and HRI.",
      customerName: "Jūra Miniota",
      position: "KTH Royal Institute of Technology, Sweden"
    },
    {
      imageSrc:
        shay,
      quote:
        "Chuxuan (Shay) is a master’s student studying human emotion and behaviors in the HCI/HRI context. Her research interests include Affective Computing, Social Robotics and Human-Centered Design.",
      customerName: "Chuxuan Zhang",
      position: "Simon Fraser University, Canada"
    },
    {
      imageSrc:
        marine,
      quote:
        "Marine has been leading the HRI team in the software department in Aldebaran for almost 7 years now, addressing the challenges of social robotics to enhance the social intelligence and the attractiveness and naturalness of our robots.",
      customerName: "Marine Chamoux",
      position: "Aldebaran, France"
    },
    {
      imageSrc:
        lawrence,
      quote:
        "Dr. Kim is an Assistant Professor in the School of Computing Science. His research includes the design and development of novel tangible user interfaces for physical and mental well-being.",
      customerName: "Dr. Lawrence Kim",
      position: "Simon Fraser University, Canada"
    },
    {
      imageSrc:
        angelica,
      quote:
        "Dr. Lim is an Assistant Professor in the School of Computing Science and Director of the Robots with Social Intelligence and Empathy (ROSIE) Lab. Her research interests include multimodal emotional intelligence, machine learning and social robotics.",
      customerName: "Dr. Angelica Lim",
      position: "Simon Fraser University, Canada"
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
