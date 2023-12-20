import TypeText from "../MobTypeText/TypeText";
import "./BusinessGrowthContainer.css";

const BusinessGrowthContainer = () => {
  return (
    <div className="mob-frame-parent2">
      <div className="mob-frame-parent3">
        <div className="mob-about-us-wrapper">
          <div className="mob-about-us">About Us</div>
        </div>
        <div className="mob-clikin-tech-fuels-business-gro-wrapper">
          <b className="mob-about-us">
            Clikin Tech fuels business growth, fostering trust and credibility.
          </b>
        </div>
        <div className="mob-elevate-your-business-with-cli-container">
          <div className="mob-about-us">
            Elevate your business with Clikin Tech. Our expertise fuels growth
            while fostering trust and credibility, driving you towards success.
          </div>
        </div>
      </div>
      <TypeText
        buttonIcon="/icons@2x.png"
        buttonText="Book A Demo"
        iconImageUrl="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        typeTextPosition="unset"
        typeTextTop="unset"
        typeTextLeft="unset"
        typeTextWidth="221px"
        typeTextBackgroundColor="#d9af62"
        buttonFontSize="16px"
        buttonFontFamily="'Plus Jakarta Sans'"
      />
    </div>
  );
};

export default BusinessGrowthContainer;
