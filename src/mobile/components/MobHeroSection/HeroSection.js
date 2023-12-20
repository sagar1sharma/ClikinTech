import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="mob-frame-parent1">
      <img className="mob-frame-child1" alt="" src="/frame-61@2x.png" />
      {/* <img className="mob-frame-child2" alt="" src="/frame-16@2x.png" /> */}
      <div className="mob-rectangle-div" />
      <div className="mob-frame-wrapper1">
        <div className="mob-header-parent">
          <div className="mob-header">
            <b className="mob-we-help-businesses-container">
              <span>{`We Help `}</span>
              <span className="mob-businesses">Businesses</span>
              <span>{` To Be `}</span>
              <span className="mob-businesses">Digitally Visible!</span>
            </b>
          </div>
          <div className="mob-body">
            <div className="mob-empowering-your-digital">
              Empowering your digital success is our priority. As a trusted
              global software agency, we elevate brands worldwide. Scale your
              business digitally with our innovative solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
