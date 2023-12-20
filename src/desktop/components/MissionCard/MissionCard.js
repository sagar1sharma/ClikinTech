import { useMemo } from "react";
import "./MissionCard.css";

const MissionCard = ({
  storyImageUrl,
  titleText = "Our Story",
  bodyText = "From traditional to digital, Clikin Tech empowers businesses with impactful strategies. Elevate website traffic, sales, and income. Tailoring local solutions to your goals, we stay current with the latest advancements.",
  property1Variant2Border,
  property1Variant2Width,
  property1Variant2BackgroundColor,
  property1Variant2FlexShrink,
  ourStoryFontFamily,
  fromTraditionalToFontFamily,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      border: property1Variant2Border,
      width: property1Variant2Width,
      backgroundColor: property1Variant2BackgroundColor,
      flexShrink: property1Variant2FlexShrink,
    };
  }, [
    property1Variant2Border,
    property1Variant2Width,
    property1Variant2BackgroundColor,
    property1Variant2FlexShrink,
  ]);

  const ourStoryStyle = useMemo(() => {
    return {
      fontFamily: ourStoryFontFamily,
    };
  }, [ourStoryFontFamily]);

  const fromTraditionalToStyle = useMemo(() => {
    return {
      fontFamily: fromTraditionalToFontFamily,
    };
  }, [fromTraditionalToFontFamily]);

  return (
    <div className="property-1variant2" style={property1Variant2Style}>
      <img className="icons6" alt="" src={storyImageUrl} />
      <div className="our-story-wrapper">
        <b className="our-story" style={ourStoryStyle}>
          {titleText}
        </b>
      </div>
      <div className="from-traditional-to-digital-c-wrapper">
        <div className="our-story" style={fromTraditionalToStyle}>
          {bodyText}
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
