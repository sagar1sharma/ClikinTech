import { useMemo } from "react";
import "./TypeText.css";

const TypeText = ({
  buttonIcon,
  buttonText = "Button",
  iconImageUrl,
  showLeftIcon = true,
  showRightIcon = true,
  typeTextPosition,
  typeTextTop,
  typeTextLeft,
  typeTextWidth,
  typeTextBackgroundColor,
  buttonFontSize,
  buttonFontFamily,
}) => {
  const typeTextStyle = useMemo(() => {
    return {
      position: typeTextPosition,
      top: typeTextTop,
      left: typeTextLeft,
      width: typeTextWidth,
      backgroundColor: typeTextBackgroundColor,
    };
  }, [
    typeTextPosition,
    typeTextTop,
    typeTextLeft,
    typeTextWidth,
    typeTextBackgroundColor,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      fontFamily: buttonFontFamily,
    };
  }, [buttonFontSize, buttonFontFamily]);

  return (
    <div className="mob-typetext" style={typeTextStyle}>
      {showLeftIcon && <img className="mob-icons2" alt="" src={buttonIcon} />}
      <div className="mob-text">
        <div className="mob-button" style={buttonStyle}>
          {buttonText}
        </div>
      </div>
      {showRightIcon && <img className="mob-icons2" alt="" src={iconImageUrl} />}
    </div>
  );
};

export default TypeText;
