import { useMemo } from "react";
import "./TypeText.css";

const TypeText = ({
  buttonIcon,
  buttonText = "Button",
  iconImageUrl,
  showLeftIcon = true,
  showRightIcon = true,
  typeTextBackgroundColor,
  typeTextFlexShrink,
  typeTextWidth,
  typeTextBorder,
  typeTextAlignSelf,
  buttonFontFamily,
  buttonColor,
}) => {
  const typeTextStyle = useMemo(() => {
    return {
      backgroundColor: typeTextBackgroundColor,
      flexShrink: typeTextFlexShrink,
      width: typeTextWidth,
      border: typeTextBorder,
      alignSelf: typeTextAlignSelf,
    };
  }, [
    typeTextBackgroundColor,
    typeTextFlexShrink,
    typeTextWidth,
    typeTextBorder,
    typeTextAlignSelf,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      fontFamily: buttonFontFamily,
      color: buttonColor,
    };
  }, [buttonFontFamily, buttonColor]);

  function handleClick(buttonText){
    alert(buttonText + " Clicked!")
  }

  return (
    <div onClick={() => handleClick(buttonText)} className="typetext" style={typeTextStyle}>
      {showLeftIcon && <img className="icons10" alt="" src={buttonIcon} />}
      <div className="text">
        <div className="button" style={buttonStyle}>
          {buttonText}
        </div>
      </div>
      {showRightIcon && <img className="icons10" alt="" src={iconImageUrl} />}
    </div>
  );
};

export default TypeText;
