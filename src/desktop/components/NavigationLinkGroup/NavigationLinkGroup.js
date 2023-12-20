import Property1Default from "../PropertyDefault/Property1Default";
import "./NavigationLinkGroup.css";

const NavigationLinkGroup = () => {
  return (
    <div className="navigation-link-group">
      <Property1Default
        text="Home"
        iconImageUrl="/icons21@2x.png"
        showIcons={false}
        property1DefaultFlexShrink="0"
        homeFontFamily="'Plus Jakarta Sans'"
        homeColor="#fff"
        homeFontWeight="500"
      />
      <Property1Default
        text="Services"
        iconImageUrl="/icons22@2x.png"
        showIcons={false}
        property1DefaultFlexShrink="0"
        homeFontFamily="'Plus Jakarta Sans'"
        homeColor="#e6e8ea"
        homeFontWeight="unset"
      />
      <Property1Default
        text="Portfolio"
        iconImageUrl="/icons22@2x.png"
        showIcons={false}
        property1DefaultFlexShrink="0"
        homeFontFamily="'Plus Jakarta Sans'"
        homeColor="#e6e8ea"
        homeFontWeight="unset"
      />
      <Property1Default
        text="About"
        iconImageUrl="/icons22@2x.png"
        showIcons={false}
        property1DefaultFlexShrink="0"
        homeFontFamily="'Plus Jakarta Sans'"
        homeColor="#e6e8ea"
        homeFontWeight="unset"
      />
      <Property1Default
        text="Privacy & Policy"
        iconImageUrl="/icons22@2x.png"
        showIcons={false}
        property1DefaultFlexShrink="0"
        homeFontFamily="'Plus Jakarta Sans'"
        homeColor="#e6e8ea"
        homeFontWeight="unset"
      />
      
    </div>
  );
};

export default NavigationLinkGroup;
