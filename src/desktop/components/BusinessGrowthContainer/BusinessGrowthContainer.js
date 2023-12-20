import TypeText from "../TypeText/TypeText";
import MissionCard from "../MissionCard/MissionCard";
import "./BusinessGrowthContainer.css";

const BusinessGrowthContainer = () => {
  return (
    <div className="frame-parent12">
      <div className="frame-parent13">
        <div className="frame-parent14">
          <div className="about-us-wrapper">
            <div className="about-us">About Us</div>
          </div>
          <div className="clikin-tech-fuels-business-gro-wrapper">
            <b className="about-us">
              Clikin Tech fuels business growth, fostering trust and
              credibility.
            </b>
          </div>
          <div className="elevate-your-business-with-cli-wrapper">
            <div className="about-us">
              Elevate your business with Clikin Tech. Our expertise fuels growth
              while fostering trust and credibility, driving you towards
              success.
            </div>
          </div>
        </div>
        <TypeText
          buttonIcon="/icons12@2x.png"
          buttonText="Book A Demo"
          iconImageUrl="/icons13@2x.png"
          showLeftIcon={false}
          showRightIcon={false}
          typeTextBackgroundColor="#d9af62"
          typeTextFlexShrink="unset"
          typeTextWidth="221px"
          typeTextBorder="unset"
          typeTextAlignSelf="unset"
          buttonFontFamily="'Plus Jakarta Sans'"
          buttonColor="#05162e"
        />
      </div>
      <div className="card-parent">
        <MissionCard
          storyImageUrl="/icons3@2x.png"
          titleText="Our Story"
          bodyText="From traditional to digital, Clikin Tech empowers businesses with impactful strategies. Elevate website traffic, sales, and income. Tailoring local solutions to your goals, we stay current with the latest advancements."
          property1Variant2Border="unset"
          property1Variant2Width="318px"
          property1Variant2BackgroundColor="#d9af62"
          property1Variant2FlexShrink="0"
          ourStoryFontFamily="'Plus Jakarta Sans'"
          fromTraditionalToFontFamily="'Plus Jakarta Sans'"
        />
        <MissionCard
          storyImageUrl="/icons4@2x.png"
          titleText="Our Mission"
          bodyText="Our mission is to be trusted partners for impactful digital solutions, unleashing creativity and data-driven strategies. We turn dreams into reality, driven by success, unity, and unwavering commitment."
          property1Variant2Border="2px solid var(--foundation-yellow-yellow-900)"
          property1Variant2Width="322px"
          property1Variant2BackgroundColor="unset"
          property1Variant2FlexShrink="0"
          ourStoryFontFamily="'Plus Jakarta Sans'"
          fromTraditionalToFontFamily="'Plus Jakarta Sans'"
        />
      </div>
    </div>
  );
};

export default BusinessGrowthContainer;
