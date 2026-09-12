import React from "react";
import tw from "twin.macro";

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion";
import useInView from "helpers/useInView";

export const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px` });

  // If the page loaded with a URL hash (e.g. #organizers), skip the
  // slide-in animation entirely — sections above the target may never
  // be observed intersecting, since the browser jumps straight past them.
  const [hasAppeared, setHasAppeared] = React.useState(
    () => typeof window !== "undefined" && !!window.location.hash
  );

  React.useEffect(() => {
    if (inView) setHasAppeared(true);
  }, [inView]);

  const x = { target: "0%", initial: direction === "left" ? "-150%" : "150%" };

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: hasAppeared ? x.target : x.initial }}
        animate={{ x: hasAppeared ? x.target : x.initial }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default props => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
