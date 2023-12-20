import InputField from "../InputField/InputField";
import TypeText from "../TypeText/TypeText";
import "./HelpCard1.css";

const HelpCard1 = () => {
  return (
    <div className="desktop-5">
      <img className="desktop-5-child" alt="" src="/frame-16@2x.png" />
      <div className="frame-parent9">
        <div className="frame-parent10">
          <div className="get-in-touch-with-us-wrapper">
            <div className="get-in-touch">Get In Touch With Us</div>
          </div>
          <div className="we-are-here-for-you-how-can-w-wrapper">
            <b className="get-in-touch">
              We are here for you! How can we help?
            </b>
          </div>
        </div>
        <div className="frame-parent11">
          <div className="input-field-parent">
            <InputField
              inputId="/icons4@2x.png"
              text="Enter your fullname"
              inputLabelId="/icons4@2x.png"
              showLeftIcon={false}
              showRightIcon={false}
              inputFieldAlignItems="center"
              inputFieldHeight="unset"
              frameDivFlexShrink="0"
              frameDivAlignSelf="unset"
              enterEmailFontFamily="'Plus Jakarta Sans'"
              enterEmailAlignSelf="unset"
            />
            <InputField
              inputId="/icons4@2x.png"
              text="Enter your email"
              inputLabelId="/icons4@2x.png"
              showLeftIcon={false}
              showRightIcon={false}
              inputFieldAlignItems="center"
              inputFieldHeight="unset"
              frameDivFlexShrink="0"
              frameDivAlignSelf="unset"
              enterEmailFontFamily="'Plus Jakarta Sans'"
              enterEmailAlignSelf="unset"
            />
            <InputField
              inputId="/icons4@2x.png"
              text="Enter your phone number"
              inputLabelId="/icons4@2x.png"
              showLeftIcon={false}
              showRightIcon={false}
              inputFieldAlignItems="center"
              inputFieldHeight="unset"
              frameDivFlexShrink="0"
              frameDivAlignSelf="unset"
              enterEmailFontFamily="'Plus Jakarta Sans'"
              enterEmailAlignSelf="unset"
            />
            <InputField
              inputId="/icons11@2x.png"
              text="Enter your message"
              inputLabelId="/icons11@2x.png"
              showLeftIcon={false}
              showRightIcon={false}
              inputFieldAlignItems="flex-start"
              inputFieldHeight="214px"
              frameDivFlexShrink="unset"
              frameDivAlignSelf="stretch"
              enterEmailFontFamily="'Plus Jakarta Sans'"
              enterEmailAlignSelf="stretch"
            />
          </div>
          <TypeText
            buttonIcon="/icons12@2x.png"
            buttonText="Submit"
            iconImageUrl="/icons13@2x.png"
            showLeftIcon={false}
            showRightIcon={false}
            typeTextBackgroundColor="#d9af62"
            typeTextFlexShrink="unset"
            typeTextWidth="unset"
            typeTextBorder="unset"
            typeTextAlignSelf="stretch"
            buttonFontFamily="'Plus Jakarta Sans'"
            buttonColor="#05162e"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpCard1;
