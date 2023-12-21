import { useMemo } from "react";
import "./InputField.css";

const InputField = ({
  inputId,
  text = "Enter Email",
  inputIconId,
  showLeftIcon = true,
  showRightIcon = true,
  inputFieldWidth,
  inputFieldPosition,
  inputFieldTop,
  inputFieldLeft,
  inputFieldAlignItems,
  inputFieldHeight,
  frameDivFlexShrink,
  frameDivAlignSelf,
  enterEmailFontSize,
  enterEmailFontFamily,
  enterEmailAlignSelf,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      width: inputFieldWidth,
      position: inputFieldPosition,
      top: inputFieldTop,
      left: inputFieldLeft,
      alignItems: inputFieldAlignItems,
      height: inputFieldHeight,
    };
  }, [
    inputFieldWidth,
    inputFieldPosition,
    inputFieldTop,
    inputFieldLeft,
    inputFieldAlignItems,
    inputFieldHeight,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      flexShrink: frameDivFlexShrink,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlexShrink, frameDivAlignSelf]);

  const enterEmailStyle = useMemo(() => {
    return {
      fontSize: enterEmailFontSize,
      fontFamily: enterEmailFontFamily,
      alignSelf: enterEmailAlignSelf,
    };
  }, [enterEmailFontSize, enterEmailFontFamily, enterEmailAlignSelf]);

  return (
    <div className="mob-input-field" style={inputFieldStyle}>
      {showLeftIcon && <img className="mob-icons" alt="" src={inputId} />}
      <div className="mob-enter-email-wrapper" style={frameDivStyle}>
        {text !== "Enter your message" ? <input type="text" placeholder={text} className="enter-email" style={enterEmailStyle} /> :
         <textarea placeholder={text} className="enter-email" style={enterEmailStyle} />}
      </div>
      {showRightIcon && <img className="mob-icons" alt="" src={inputIconId} />}
    </div>
  );
};

export default InputField;
