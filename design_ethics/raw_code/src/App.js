/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 * 
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

/* Ready Made Pages (from demos folder) */
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import EventLandingPage from "demos/EventLandingPage.js";
import EventLandingPageArchive2026 from "demos/EventLandingPageArchive2026";

export default () => (
  <BrowserRouter basename="/design_ethics">
    <Routes>
            {/* We need to keep the original /design_ethics URL reserved for 2026 content because
            it is referenced in proceedings and elsewhere. However, to avoid confusing on
            which year is being shown, always re-direct immediately to the 2026 page
            */}
      <Route path="/" element={<Navigate to="/archive/2026" replace />} />
      <Route path="/archive/2026" element={<EventLandingPageArchive2026 basePath="/archive/2026" />} />
      <Route path="/2027" element={<EventLandingPage basePath="/2027" />} />
    </Routes>
  </BrowserRouter>
);