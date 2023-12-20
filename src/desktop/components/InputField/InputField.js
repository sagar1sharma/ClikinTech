import { useMemo } from "react";
import "./InputField.css";

const InputField = ({
  inputId,
  text = "Enter Email",
  inputLabelId,
  showLeftIcon = true,
  showRightIcon = true,
  inputFieldAlignItems,
  inputFieldHeight,
  frameDivFlexShrink,
  frameDivAlignSelf,
  enterEmailFontFamily,
  enterEmailAlignSelf,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      alignItems: inputFieldAlignItems,
      height: inputFieldHeight,
    };
  }, [inputFieldAlignItems, inputFieldHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      flexShrink: frameDivFlexShrink,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlexShrink, frameDivAlignSelf]);

  const enterEmailStyle = useMemo(() => {
    return {
      fontFamily: enterEmailFontFamily,
      alignSelf: enterEmailAlignSelf,
    };
  }, [enterEmailFontFamily, enterEmailAlignSelf]);

  return (
    <div className="input-field" style={inputFieldStyle}>
      {showLeftIcon && <img className="icons8" alt="" src={inputId} />}
      <div className="enter-email-wrapper" style={frameDivStyle}>
        <input type="text" placeholder={text} className="enter-email" style={enterEmailStyle}>
        </input>
      </div>
      {showRightIcon && <img className="icons8" alt="" src={inputLabelId} />}
    </div>
  );
};

export default InputField;
