import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Testimonials = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
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
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Paige Tuttösí",
      position: "Simon Fraser University & FEMTO-ST"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Siyang Wang",
      position: "KTH Royal Institute of Technology"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Minja Axelsson",
      position: "University of Cambridge"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Paul Maublanc",
      position: "Aarhus University"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Charlotte Stinkeste",
      position: "KTH Royal Institute of Technology"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Jūra Miniota",
      position: "KTH Royal Institute of Technology"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Chuxuan Zhang",
      position: "Simon Fraser University"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Emma Hughson",
      position: "Cambridge Consultants"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Marine Chamoux",
      position: "Aldebaran"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Lawrence Kim",
      position: "Simon Fraser University"
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote:
        "Bio",
      customerName: "Angelica Lim",
      position: "Simon Fraser University"
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
