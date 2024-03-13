import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Intro from "components/features/VerticalWithAlternateImageAndText.js";
import Call from "components/features/TextBlock.js";
import Voices from "components/features/TextBlock-2.js";
/* Need to find a component to add a nice schedule */
import Schedule from "components/features/TextBlock-3.js";
import Speakers from "components/cards/ProfileThreeColGrid.js";
import Organizers from "components/testimonials/ThreeColumnWithProfileImage.js";
/* this needs to be added when we have a PC, it will just be a list of names so find a simple component*/
import PC from "components/testimonials/ThreeColumnWithProfileImage.js";
import Contact from "components/forms/SimpleContactUs";
import { BrowserRouter } from "react-router-dom";

export default () => (
  <AnimationRevealPage>
    <BrowserRouter>
      <Hero />
      <Intro />
      <Call />
      <Voices />
      <Schedule />
      <Speakers />
      <Organizers />
      <Contact />
    </BrowserRouter>
  </AnimationRevealPage>
);
