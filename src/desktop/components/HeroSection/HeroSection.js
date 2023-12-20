import TypeText from "../TypeText/TypeText";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="frame-group">
      <img className="frame-child" alt="" src="./frame-61@2x.png" />
      <img
        className="memphics-011-copy-1"
        alt=""
        src="./memphics-011-copy-1@2x.png"
      />
      <img
        className="memphics-010-copy-1"
        alt=""
        src="./memphics-010-copy-1@2x.png"
      />
      <div className="frame-container">
        <div className="header-parent">
          <div className="header">
            <b className="we-help-businesses-container">
              <span>{`We Help `}</span>
              <span className="businesses">Businesses</span>
              <span>{` To Be `}</span>
              <span className="businesses">Digitally Visible!</span>
            </b>
          </div>
          <div className="body">
            <div className="we-help-businesses-container">
              Empowering your digital success is our priority. As a trusted
              global software agency, we elevate brands worldwide. Scale your
              business digitally with our innovative solutions.
            </div>
          </div>
        </div>
        <div className="button-parent">
          <TypeText
            buttonIcon="/icons8@2x.png"
            buttonText="Get In Touch"
            iconImageUrl="/icons9@2x.png"
            showLeftIcon={false}
            showRightIcon={false}
            typeTextBackgroundColor="#d9af62"
            typeTextFlexShrink="0"
            typeTextWidth="221px"
            typeTextBorder="unset"
            typeTextAlignSelf="unset"
            buttonFontFamily="'Plus Jakarta Sans'"
            buttonColor="#05162e"
          />
          <TypeText
            buttonIcon="/icons@2x.png"
            buttonText="Our Portfolio"
            iconImageUrl="/icons7@2x.png"
            showLeftIcon
            showRightIcon={false}
            typeTextBackgroundColor="unset"
            typeTextFlexShrink="0"
            typeTextWidth="225px"
            typeTextBorder="2px solid var(--foundation-yellow-yellow-500)"
            typeTextAlignSelf="unset"
            buttonFontFamily="'Plus Jakarta Sans'"
            buttonColor="#d9af62"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
