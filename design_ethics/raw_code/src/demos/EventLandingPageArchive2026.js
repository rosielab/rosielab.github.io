import React from "react";
import {StyledDiv} from "helpers/AnimationRevealPage.js";
import Hero from "archive/2026_components/hero/BackgroundAsImageWithCenteredContent.js";
import Intro from "archive/2026_components/features/VerticalWithAlternateImageAndText.js";
import Call from "archive/2026_components/features/TextBlock.js";
/*import Voices from "archive/2026_components/features/TextBlock-2.js";*/
/* Need to find a component to add a nice schedule */
import Schedule from "archive/2026_components/features/TextBlock-3.js";
import Speakers from "archive/2026_components/cards/ProfileThreeColGrid.js";
import Organizers from "archive/2026_components/testimonials/ThreeColumnWithProfileImage.js";
/* this needs to be added when we have a PC, it will just be a list of names so find a simple component*/
/*import PC from "archive/2026_components/features/TextBlock-4.js"; */
import Contact from "archive/2026_components/forms/SimpleContactUs.js";
import { BrowserRouter } from "react-router-dom";

export default ({basePath}) => (
  <StyledDiv className="App">
      <Hero basePath={basePath}/>
      <Intro />
      <Schedule />
      <Speakers />
      <Call />
      <Organizers />
      <Contact />
  </StyledDiv>
);