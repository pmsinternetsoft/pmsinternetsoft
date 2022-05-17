import React, { useRef } from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";

import MyBanner from "./MyBanner";
import Competition from "./Competition";
import InvestNow from "./InvestNow";
import OurTeams from "./OurTeams";
import Revolution from "./Revolution";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Partners from "./Partners";
import Slider from "react-slick";
import RoadMap from "./RoadMap";
import OwnToEarn from "./OwnToEarn";

function Home(props) {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  };

  const onButtonClick = (abc) => {
    // console.log(abc);
    // const data = refs[abc].current;
    // console.log(data);
    window.scrollTo({
      top: refs[abc].current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Page title="MetaHorse">
      <Box buttonClick={onButtonClick}>
        <MyBanner />

        {/* <Competition /> */}

        <Revolution />
        <div ref={refs.home} id="section3">
          <InvestNow />
        </div>

        <div ref={refs.home} id="section2">
          <HowItWorks />
        </div>

        {/* <OurTeams /> */}
        <Partners />
        <OwnToEarn />
        {/* <RoadMap /> */}
        <FAQ />
      </Box>
    </Page>
  );
}

export default Home;
