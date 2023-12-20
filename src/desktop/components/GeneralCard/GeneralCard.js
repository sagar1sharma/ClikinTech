import { useMemo } from "react";
import "./GeneralCard.css";

const GeneralCard = ({
  imageId,
  headingText = "Digital Marketing",
  descriptionText = "We transform data into dynamic action, forging insights into engagement, and driving business success through heightened profitability.",
  imageThumbnailUrl,
  showIcons = true,
  stateDefaultModeDarkBackgroundColor,
  stateDefaultModeDarkGap,
  digitalMarketingFontFamily,
  digitalMarketingColor,
  weTransformDataFontFamily,
  weTransformDataColor,
}) => {
  const stateDefaultModeDarkStyle = useMemo(() => {
    return {
      backgroundColor: stateDefaultModeDarkBackgroundColor,
      gap: stateDefaultModeDarkGap,
    };
  }, [stateDefaultModeDarkBackgroundColor, stateDefaultModeDarkGap]);

  const digitalMarketingStyle = useMemo(() => {
    return {
      fontFamily: digitalMarketingFontFamily,
      color: digitalMarketingColor,
    };
  }, [digitalMarketingFontFamily, digitalMarketingColor]);

  const weTransformDataStyle = useMemo(() => {
    return {
      fontFamily: weTransformDataFontFamily,
      color: weTransformDataColor,
    };
  }, [weTransformDataFontFamily, weTransformDataColor]);

  return (
    <div className="statedefault-modedark" style={stateDefaultModeDarkStyle}>
      <img className="icons2" alt="" src={imageId} />
      <div className="digital-marketing-wrapper">
        <b className="digital-marketing" style={digitalMarketingStyle}>
          {headingText}
        </b>
      </div>
      <div className="we-transform-data-into-dynamic-wrapper">
        <div className="digital-marketing" style={weTransformDataStyle}>
          {descriptionText}
        </div>
      </div>
      {showIcons && <img className="icons3" alt="" src={imageThumbnailUrl} />}
    </div>
  );
};

export default GeneralCard;
