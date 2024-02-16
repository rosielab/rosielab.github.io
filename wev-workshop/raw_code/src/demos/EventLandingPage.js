import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/cards/ProfileThreeColGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import { BrowserRouter } from "react-router-dom";

export default () => (
  <AnimationRevealPage>
    <BrowserRouter>
      <Hero />
      <Features />
      <Blog />
      <Testimonial />
    </BrowserRouter>
  </AnimationRevealPage>
);
