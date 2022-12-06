import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="title">Front&mdash;end</div>
      <div className="heroDescription">
        <div className="title subTitle">Developer</div>
        <div className="heroAbout">
          <span>ABOUT</span>
          <p>
            I am a developer based in Mumbai, India focused on creating
            interactive digital experiences on the web, working with brands and
            industry leaders such as Bayer, Bristol Myers Squibb, Intercept, and
            ROKiT Games amongst others to achieve this.
          </p>
        </div>
      </div>

      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
