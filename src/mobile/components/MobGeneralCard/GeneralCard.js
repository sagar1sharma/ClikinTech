import { useMemo } from "react";
import "./GeneralCard.css";

const GeneralCard = ({
  imageAltText,
  headingText = "Digital Marketing",
  descriptionText = "We transform data into dynamic action, forging insights into engagement, and driving business success through heightened profitability.",
  dynamicActionImageUrl2,
  showIcons = true,
  stateDefaultModeDarkBoxShadow,
  stateDefaultModeDarkBorder,
  stateDefaultModeDarkWidth,
  stateDefaultModeDarkPadding,
  stateDefaultModeDarkGap,
  stateDefaultModeDarkPosition,
  stateDefaultModeDarkTop,
  stateDefaultModeDarkLeft,
  stateDefaultModeDarkBorderRadius,
  stateDefaultModeDarkBackgroundColor,
  iconsWidth,
  iconsHeight,
  digitalMarketingFontSize,
  digitalMarketingFontFamily,
  digitalMarketingColor,
  weTransformDataFontSize,
  weTransformDataFontFamily,
  weTransformDataColor,
  iconsWidth1,
  iconsHeight1,
}) => {
  const stateDefaultModeDarkStyle = useMemo(() => {
    return {
      boxShadow: stateDefaultModeDarkBoxShadow,
      border: stateDefaultModeDarkBorder,
      width: stateDefaultModeDarkWidth,
      padding: stateDefaultModeDarkPadding,
      gap: stateDefaultModeDarkGap,
      position: stateDefaultModeDarkPosition,
      top: stateDefaultModeDarkTop,
      left: stateDefaultModeDarkLeft,
      borderRadius: stateDefaultModeDarkBorderRadius,
      backgroundColor: stateDefaultModeDarkBackgroundColor,
    };
  }, [
    stateDefaultModeDarkBoxShadow,
    stateDefaultModeDarkBorder,
    stateDefaultModeDarkWidth,
    stateDefaultModeDarkPadding,
    stateDefaultModeDarkGap,
    stateDefaultModeDarkPosition,
    stateDefaultModeDarkTop,
    stateDefaultModeDarkLeft,
    stateDefaultModeDarkBorderRadius,
    stateDefaultModeDarkBackgroundColor,
  ]);

  const iconsStyle = useMemo(() => {
    return {
      width: iconsWidth,
      height: iconsHeight,
    };
  }, [iconsWidth, iconsHeight]);

  const digitalMarketingStyle = useMemo(() => {
    return {
      fontSize: digitalMarketingFontSize,
      fontFamily: digitalMarketingFontFamily,
      color: digitalMarketingColor,
    };
  }, [
    digitalMarketingFontSize,
    digitalMarketingFontFamily,
    digitalMarketingColor,
  ]);

  const weTransformDataStyle = useMemo(() => {
    return {
      fontSize: weTransformDataFontSize,
      fontFamily: weTransformDataFontFamily,
      color: weTransformDataColor,
    };
  }, [
    weTransformDataFontSize,
    weTransformDataFontFamily,
    weTransformDataColor,
  ]);

  const icons1Style = useMemo(() => {
    return {
      width: iconsWidth1,
      height: iconsHeight1,
    };
  }, [iconsWidth1, iconsHeight1]);

  return (
    <div className="mob-statedefault-modedark" style={stateDefaultModeDarkStyle}>
      <img className="mob-icons4" alt="" src={imageAltText} style={iconsStyle} />
      <div className="mob-digital-marketing-wrapper">
        <b className="mob-digital-marketing" style={digitalMarketingStyle}>
          {headingText}
        </b>
      </div>
      <div className="mob-we-transform-data-into-dynamic-wrapper">
        <div className="mob-digital-marketing" style={weTransformDataStyle}>
          {descriptionText}
        </div>
      </div>
      {showIcons && (
        <img
          className="icons5"
          alt=""
          src={dynamicActionImageUrl2}
          style={icons1Style}
        />
      )}
    </div>
  );
};

export default GeneralCard;
