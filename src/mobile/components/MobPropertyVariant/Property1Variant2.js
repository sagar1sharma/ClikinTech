import { useMemo } from "react";
import "./Property1Variant2.css";

const Property1Variant2 = ({
  storyImageUrl,
  titleText = "Our Story",
  bodyText = "From traditional to digital, Clikin Tech empowers businesses with impactful strategies. Elevate website traffic, sales, and income. Tailoring local solutions to your goals, we stay current with the latest advancements.",
  property1Variant2Border,
  property1Variant2Width,
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
  property1Variant2BackgroundColor,
  ourStoryFontFamily,
  fromTraditionalToFontFamily,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      border: property1Variant2Border,
      width: property1Variant2Width,
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
      backgroundColor: property1Variant2BackgroundColor,
    };
  }, [
    property1Variant2Border,
    property1Variant2Width,
    property1Variant2Position,
    property1Variant2Top,
    property1Variant2Left,
    property1Variant2BackgroundColor,
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
    <div className="mob-property-1variant2" style={property1Variant2Style}>
      <img className="mob-icons8" alt="" src={storyImageUrl} />
      <div className="mob-our-story-wrapper">
        <b className="mob-our-story" style={ourStoryStyle}>
          {titleText}
        </b>
      </div>
      <div className="mob-from-traditional-to-digital-c-wrapper">
        <div className="mob-our-story" style={fromTraditionalToStyle}>
          {bodyText}
        </div>
      </div>
    </div>
  );
};

export default Property1Variant2;
