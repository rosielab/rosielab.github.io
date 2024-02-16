import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Invited Speakers",
  description = "We are excited to present our lineup of excellent speakers.",
  cards = [
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Catherine Lai",
      position: "University of Edinburgh",
      description: "Bio",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Lea Luka Sikau",
      position: "University of Cambridge",
      description: "Bio",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Zhengjun Yue",
      position: "TU Delft",
      description: "Bio",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Kazuhiro Nakadai",
      position: "Tokyo Institute of Technology",
      description: "Bio",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Dr. Tony Belpaeme",
      position: "Ghent University",
      description: "Bio",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    //{
    //  imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
    //  position: "Quality Assurance",
    //  name: "Holo Wo",
    //  links: [
    //    {
    //      url: "https://twitter.com",
    //      icon: TwitterIcon,
    //    },
    //    {
    //      url: "https://linkedin.com",
    //      icon: LinkedinIcon,
    //    },
    //    {
    //      url: "https://github.com",
    //      icon: GithubIcon,
    //    },
    //  ],
    //},
  ]
}) => {
  return (
    <Container id="invited">
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="name">{card.name}</span>
                <span className="position">{card.position}</span>
                <span className="description">{card.description}</span>
                <CardLinks>
                  {/*card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))*/}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
