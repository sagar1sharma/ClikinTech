import NavigationLinkGroup from "../NavigationLinkGroup/NavigationLinkGroup";
import TypeText from "../TypeText/TypeText";
import "./Header.css";

const Header = (targetRef) => {
  return (
    <div className="navigation-bar-frame">
      <div className="vector-group">
        <img className="vector-icon1" alt="" src="./vector@2x.png" />
        <NavigationLinkGroup targetRef = {targetRef} />
        <TypeText
          buttonIcon="/icons8@2x.png"
          buttonText="Get In Touch"
          iconImageUrl="/icons9@2x.png"
          showLeftIcon={false}
          showRightIcon={false}
          typeTextBackgroundColor="#d9af62"
          typeTextFlexShrink="0"
          typeTextWidth="221px"
          typeTextBorder="unset"
          typeTextAlignSelf="unset"
          buttonFontFamily="'Plus Jakarta Sans'"
          buttonColor="#05162e"
        />
      </div>
    </div>
  );
};

export default Header;
