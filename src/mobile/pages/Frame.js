import HeroSection from "../components/MobHeroSection/HeroSection";
import BusinessGrowthContainer from "../components/MobBusinessGrowth/BusinessGrowthContainer";
import Property1Variant2 from "../components/MobPropertyVariant/Property1Variant2";
import GeneralCard from "../components/MobGeneralCard/GeneralCard";
import TypeText from "../components/MobTypeText/TypeText";
import SAASAppContainer from "../components/MobSAASAppContainer/SAASAppContainer";
import ContainerTitle from "../components/MobContainerTitle/ContainerTitle";
import InputField from "../components/MobInputField/InputField";
import SocialMediaContainer from "../components/MobSocialMediaContainer/SocialMediaContainer";
import "./Frame.css";
import { useState } from "react";
import SideMenuBG from "../components/MobSideMenu/MobSideMenu";

const Frame = () => {
  const [hamburger, setHamburger] = useState(false)

  function handleClick(){
    setHamburger(!hamburger)
  }
  return (
    <div className="mob-rectangle-parent">
      <div className="mob-frame-child" />
      <img className="mob-vector-icon" alt="" src="/vector@2x.png" />
      <div className="mob-button2">
        <img className="mob-icons12" alt="" src="/icons@2x.png" />
        <div className="mob-text2">
          <div className="mob-get-in-touch">Get in Touch</div>
        </div>
        <img className="mob-icons13" alt="" src="/icons@2x.png" />
      </div>
      {hamburger && <SideMenuBG />}
      <HeroSection />
      <BusinessGrowthContainer />
      <Property1Variant2
        storyImageUrl="/icons@2x.png"
        titleText="Our Story"
        bodyText="From traditional to digital, Clikin Tech empowers businesses with impactful strategies. Tailoring local solutions to your goals, we stay current with the latest advancements."
        property1Variant2Border="unset"
        property1Variant2Width="318px"
        property1Variant2Position="absolute"
        property1Variant2Top="1200px"
        property1Variant2Left="calc(50% - 159px)"
        property1Variant2BackgroundColor="#d9af62"
        ourStoryFontFamily="'Plus Jakarta Sans'"
        fromTraditionalToFontFamily="'Plus Jakarta Sans'"
      />
      <Property1Variant2
        storyImageUrl="/icons@2x.png"
        titleText="Our Mission"
        bodyText="Our mission is to be trusted partners for impactful digital solutions. We turn dreams into reality, driven by success, unity, and unwavering commitment."
        property1Variant2Border="2px solid var(--foundation-yellow-yellow-900)"
        property1Variant2Width="322px"
        property1Variant2Position="absolute"
        property1Variant2Top="1650px"
        property1Variant2Left="19px"
        property1Variant2BackgroundColor="unset"
        ourStoryFontFamily="'Plus Jakarta Sans'"
        fromTraditionalToFontFamily="'Plus Jakarta Sans'"
      />
      <div className="mob-frame-wrapper">
        <div className="mob-elevate-your-business-with-cli-wrapper">
          <b className="mob-elevate-your-business">
            Elevate Your Business with Clikin Tech.
          </b>
        </div>
      </div>
      <div className="mob-we-deliver-high-quality-produc-wrapper">
        <div className="mob-we-deliver-high-container">
          <p className="mob-we-deliver-high">{`We deliver high quality products `}</p>
          <p className="mob-we-deliver-high">{`on time to makeyour business `}</p>
          <p className="mob-we-deliver-high">profitable.</p>
        </div>
      </div>
      <GeneralCard
        imageAltText="/icons@2x.png"
        headingText="Unlock Exceptional ROI"
        descriptionText="Discover innovative solutions that yield remarkable returns on investment, transforming your business outcomes."
        dynamicActionImageUrl2="/icons@2x.png"
        showIcons
        stateDefaultModeDarkBoxShadow="0px 3.1px 15.68px rgba(255, 255, 255, 0.08)"
        stateDefaultModeDarkBorder="0.8px solid var(--color-dimgray-100)"
        stateDefaultModeDarkWidth="326.5px"
        stateDefaultModeDarkPadding="37.62785339355469px"
        stateDefaultModeDarkGap="12.54px"
        stateDefaultModeDarkPosition="absolute"
        stateDefaultModeDarkTop="2249.3px"
        stateDefaultModeDarkLeft="calc(50% - 162.5px)"
        stateDefaultModeDarkBorderRadius="12.54px"
        stateDefaultModeDarkBackgroundColor="#e6e8ea"
        iconsWidth="39.2px"
        iconsHeight="39.2px"
        digitalMarketingFontSize="18.8px"
        digitalMarketingFontFamily="'Plus Jakarta Sans'"
        digitalMarketingColor="#05162e"
        weTransformDataFontSize="14.1px"
        weTransformDataFontFamily="'Plus Jakarta Sans'"
        weTransformDataColor="#374558"
        iconsWidth1="25.1px"
        iconsHeight1="25.1px"
      />
      <GeneralCard
        imageAltText="/icons@2x.png"
        headingText="Drive Strategy for Promotion"
        descriptionText=" Elevate your business through analytical strategies, propelling growth and fostering lasting success."
        dynamicActionImageUrl2="/icons@2x.png"
        showIcons
        stateDefaultModeDarkBoxShadow="0px 3.2px 15.75px rgba(255, 255, 255, 0.08)"
        stateDefaultModeDarkBorder="0.8px solid var(--color-dimgray-100)"
        stateDefaultModeDarkWidth="328px"
        stateDefaultModeDarkPadding="37.80072021484375px"
        stateDefaultModeDarkGap="12.6px"
        stateDefaultModeDarkPosition="absolute"
        stateDefaultModeDarkTop="2558.7px"
        stateDefaultModeDarkLeft="16px"
        stateDefaultModeDarkBorderRadius="12.6px"
        stateDefaultModeDarkBackgroundColor="#e6e8ea"
        iconsWidth="39.4px"
        iconsHeight="39.4px"
        digitalMarketingFontSize="18.9px"
        digitalMarketingFontFamily="'Plus Jakarta Sans'"
        digitalMarketingColor="#05162e"
        weTransformDataFontSize="14.2px"
        weTransformDataFontFamily="'Plus Jakarta Sans'"
        weTransformDataColor="#374558"
        iconsWidth1="25.2px"
        iconsHeight1="25.2px"
      />
      <img className="mob-frame-item" alt="" src="/rectangle-2@2x.png" />
      <div className="mob-frame-parent">
        <div className="mob-our-tools-and-tech-stack-wrapper">
          <div className="mob-elevate-your-business">Our Tools and Tech Stack</div>
        </div>
        <div className="mob-explore-our-toolset-and-stay-i-wrapper">
          <b className="mob-elevate-your-business">
            Explore our toolset and stay informed.
          </b>
        </div>
      </div>
      <img className="mob-icons8-flutter-1" alt="" src="/icons8-flutter-1@2x.png" />
      <img className="mob-icons8-java-1" alt="" src="/icons8-java-1@2x.png" />
      <img className="mob-icons8-figma-1" alt="" src="/icons8-figma-1@2x.png" />
      <img
        className="mob-icons8-react-native-1"
        alt=""
        src="/icons8-react-native-1@2x.png"
      />
      <img
        className="mob-icons8-adobe-illustrator-1"
        alt=""
        src="/icons8-adobe-illustrator-1@2x.png"
      />
      <img
        className="mob-icons8-adobe-photoshop-1"
        alt=""
        src="/icons8-adobe-photoshop-1@2x.png"
      />
      <img
        className="mob-icons8-adobe-xd-1"
        alt=""
        src="/icons8-adobe-xd-1@2x.png"
      />
      <div className="mob-frame-group">
        <div className="mob-our-tools-and-tech-stack-wrapper">
          <div className="mob-elevate-your-business-heading">Our Services</div>
        </div>
        <div className="mob-embark-on-a-journey-to-success-wrapper">
          <b className="mob-elevate-your-business">
            Embark on a journey to success with our services – data strategies,
            website finesse, and custom app mastery.
          </b>
        </div>
      </div>
      <GeneralCard
        imageAltText="/console.png"
        headingText="Digital Marketing"
        descriptionText="We transform data into dynamic action, forging insights into engagement, and driving business success through heightened profitability."
        dynamicActionImageUrl2="/icons@2x.png"
        showIcons
        stateDefaultModeDarkBoxShadow="0px 3.3px 16.4px rgba(255, 255, 255, 0.08)"
        stateDefaultModeDarkBorder="0.8px solid var(--color-dimgray-100)"
        stateDefaultModeDarkWidth="328px"
        stateDefaultModeDarkPadding="39.36000061035156px"
        stateDefaultModeDarkGap="19.68px"
        stateDefaultModeDarkPosition="absolute"
        stateDefaultModeDarkTop="3626.5px"
        stateDefaultModeDarkLeft="16px"
        stateDefaultModeDarkBorderRadius="13.12px"
        stateDefaultModeDarkBackgroundColor="#212428"
        iconsWidth="41px"
        iconsHeight="41px"
        digitalMarketingFontSize="19.7px"
        digitalMarketingFontFamily="'Plus Jakarta Sans'"
        digitalMarketingColor="#fff"
        weTransformDataFontSize="14.8px"
        weTransformDataFontFamily="'Plus Jakarta Sans'"
        weTransformDataColor="#fff"
        iconsWidth1="26.2px"
        iconsHeight1="26.2px"
      />
      <GeneralCard
        imageAltText="/console.png"
        headingText="Website Development"
        descriptionText="We heighten brand impact through optimized websites, driving conversions, elevating revenues, and nurturing growth with our dynamic online presence."
        dynamicActionImageUrl2="/icons@2x.png"
        showIcons
        stateDefaultModeDarkBoxShadow="0px 3.3px 16.4px rgba(255, 255, 255, 0.08)"
        stateDefaultModeDarkBorder="0.8px solid var(--color-dimgray-100)"
        stateDefaultModeDarkWidth="328px"
        stateDefaultModeDarkPadding="39.36000061035156px"
        stateDefaultModeDarkGap="19.68px"
        stateDefaultModeDarkPosition="absolute"
        stateDefaultModeDarkTop="4000px"
        stateDefaultModeDarkLeft="16px"
        stateDefaultModeDarkBorderRadius="13.12px"
        stateDefaultModeDarkBackgroundColor="#212428"
        iconsWidth="41px"
        iconsHeight="41px"
        digitalMarketingFontSize="19.7px"
        digitalMarketingFontFamily="'Plus Jakarta Sans'"
        digitalMarketingColor="#fff"
        weTransformDataFontSize="14.8px"
        weTransformDataFontFamily="'Plus Jakarta Sans'"
        weTransformDataColor="#fff"
        iconsWidth1="26.2px"
        iconsHeight1="26.2px"
      />
      <GeneralCard
        imageAltText="/console.png"
        headingText="Mobile App Development"
        descriptionText="We propel your business to the tech forefront with custom mobile apps, connecting you cost-effectively to your ideal audience while leveraging our expertise."
        dynamicActionImageUrl2="/icons@2x.png"
        showIcons
        stateDefaultModeDarkBoxShadow="0px 3.3px 16.4px rgba(255, 255, 255, 0.08)"
        stateDefaultModeDarkBorder="0.8px solid var(--color-dimgray-100)"
        stateDefaultModeDarkWidth="328px"
        stateDefaultModeDarkPadding="39.36000061035156px"
        stateDefaultModeDarkGap="19.68px"
        stateDefaultModeDarkPosition="absolute"
        stateDefaultModeDarkTop="4373px"
        stateDefaultModeDarkLeft="16px"
        stateDefaultModeDarkBorderRadius="13.12px"
        stateDefaultModeDarkBackgroundColor="#212428"
        iconsWidth="41px"
        iconsHeight="41px"
        digitalMarketingFontSize="19.7px"
        digitalMarketingFontFamily="'Plus Jakarta Sans'"
        digitalMarketingColor="#fff"
        weTransformDataFontSize="14.8px"
        weTransformDataFontFamily="'Plus Jakarta Sans'"
        weTransformDataColor="#fff"
        iconsWidth1="26.2px"
        iconsHeight1="26.2px"
      />
      <div className="mob-frame-container">
        <div className="mob-our-tools-and-tech-stack-wrapper">
          <div className="mob-elevate-your-business">Our Portfolio</div>
        </div>
        <div className="mob-discover-our-varied-portfolio-wrapper">
          <b className="mob-discover-our-varied">
            Discover our varied portfolio showcasing web, mobile, design, and
            strategy.
          </b>
        </div>
      </div>
      <div className="mob-digital-marketing-parent">
        <img
          className="mob-digital-marketing-icon"
          alt=""
          src="/digital-marketing@2x.png"
        />
        <div className="mob-elevate-your-business-with-cli-wrapper">
          <b style={{color: "black"}} className="mob-elevate-your-business">Digital Marketing</b>
        </div>
      </div>
      <TypeText
        buttonIcon="/icons@2x.png"
        buttonText="See More..."
        iconImageUrl="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        typeTextPosition="absolute"
        typeTextTop="5989px"
        typeTextLeft="69px"
        typeTextWidth="221px"
        typeTextBackgroundColor="unset"
        buttonFontSize="14px"
        buttonFontFamily="'Plus Jakarta Sans'"
      />
      <SAASAppContainer
        dimensionCode="/frame-28@2x.png"
        appDescription="SAAS App"
        propLeft="15.4px"
        propTop="5484.7px"
        propColor="#212428"
      />
      <SAASAppContainer
        dimensionCode="/frame-1000003728@2x.png"
        appDescription="Job SAAS App"
        propLeft="189.4px"
        propTop="5484.4px"
        propColor="#212428"
      />
      <SAASAppContainer
        dimensionCode="/frame-1000003728@2x.png"
        appDescription="Elysium Resort"
        propLeft="15.4px"
        propTop="5646.4px"
        propColor="#212428"
      />
      <SAASAppContainer
        dimensionCode="/frame-1000003728@2x.png"
        appDescription="Portfolio"
        propLeft="189.4px"
        propTop="5646.4px"
        propColor="#000"
      />
      <ContainerTitle propLeft="15.4px" />
      <ContainerTitle propLeft="189.4px" />
      <img className="mob-frame-inner" alt="" src="/rectangle-2@2x.png" />
      <img className="mob-frame-icon" alt="" src="/frame-16@2x.png" />
      <div className="mob-frame-div">
        <div className="mob-elevate-your-business-with-cli-wrapper">
          <div className="mob-elevate-your-business">Get In Touch With Us</div>
        </div>
        <div className="mob-we-are-here-for-you-how-can-w-wrapper">
          <b className="mob-elevate-your-business">
            We are here for you! How can we help?
          </b>
        </div>
      </div>
      <InputField
        inputId="/icons@2x.png"
        text="Enter your fullname"
        inputIconId="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        inputFieldWidth="328px"
        inputFieldPosition="absolute"
        inputFieldTop="6851px"
        inputFieldLeft="calc(50% - 164px)"
        inputFieldAlignItems="center"
        inputFieldHeight="unset"
        frameDivFlexShrink="0"
        frameDivAlignSelf="unset"
        enterEmailFontSize="14px"
        enterEmailFontFamily="'Plus Jakarta Sans'"
        enterEmailAlignSelf="unset"
      />
      <InputField
        inputId="/icons@2x.png"
        text="Enter your email"
        inputIconId="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        inputFieldWidth="328px"
        inputFieldPosition="absolute"
        inputFieldTop="6928px"
        inputFieldLeft="16px"
        inputFieldAlignItems="center"
        inputFieldHeight="unset"
        frameDivFlexShrink="0"
        frameDivAlignSelf="unset"
        enterEmailFontSize="14px"
        enterEmailFontFamily="'Plus Jakarta Sans'"
        enterEmailAlignSelf="unset"
      />
      <InputField
        inputId="/icons@2x.png"
        text="Enter your phone number"
        inputIconId="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        inputFieldWidth="328px"
        inputFieldPosition="absolute"
        inputFieldTop="7005px"
        inputFieldLeft="16px"
        inputFieldAlignItems="center"
        inputFieldHeight="unset"
        frameDivFlexShrink="0"
        frameDivAlignSelf="unset"
        enterEmailFontSize="14px"
        enterEmailFontFamily="'Plus Jakarta Sans'"
        enterEmailAlignSelf="unset"
      />
      <InputField
        inputId="/icons@2x.png"
        text="Enter your message"
        inputIconId="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        inputFieldWidth="328px"
        inputFieldPosition="absolute"
        inputFieldTop="7082px"
        inputFieldLeft="16px"
        inputFieldAlignItems="flex-start"
        inputFieldHeight="214px"
        frameDivFlexShrink="unset"
        frameDivAlignSelf="stretch"
        enterEmailFontSize="14px"
        enterEmailFontFamily="'Plus Jakarta Sans'"
        enterEmailAlignSelf="stretch"
      />
      <TypeText
        buttonIcon="/icons@2x.png"
        buttonText="Submit"
        iconImageUrl="/icons@2x.png"
        showLeftIcon={false}
        showRightIcon={false}
        typeTextPosition="absolute"
        typeTextTop="7344px"
        typeTextLeft="16px"
        typeTextWidth="328px"
        typeTextBackgroundColor="#d9af62"
        buttonFontSize="18px"
        buttonFontFamily="'Plus Jakarta Sans'"
      />
      <SocialMediaContainer />
      <div className="mob-vector-parent">
        <img className="mob-vector-icon1" alt="" src="/vector@2x.png" />
        <div className="mob-sublink">
          <div className="mob-destinations">
            <p className="mob-we-deliver-high">Barrackpore, Kolkata,</p>
            <p className="mob-we-deliver-high">West Bengal- 700 122</p>
            <p className="mob-we-deliver-high">&nbsp;</p>
            <p className="mob-we-deliver-high">+91 81001 29292</p>
            <p className="mob-we-deliver-high">&nbsp;</p>
            <p className="mob-we-deliver-high">
              <a
                className="mob-contactclikintechcom1"
                href="mailto:contact@clikintech.com"
                target="_blank"
              >
                <span className="mob-contactclikintechcom2">
                  contact@clikintech.com
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mob-group-div">
        <div className="mob-icons8-copyright-all-rights-re-parent">
          <img
            className="mob-icons8-copyright-all-rights-re"
            alt=""
            src="/icons8-copyright-all-rights-reserved-1@2x.png"
          />
          <div className="mob-destinations">
            2023 Clicktech. All rights reserved
          </div>
        </div>
        <div className="mob-line" />
      </div>
      <div className="mob-footer-link-title-parent">
        <div className="mob-sublink">
          <b className="mob-destinations">Resources</b>
        </div>
        <div className="mob-sublink-parent">
          <div className="mob-sublink">
            <div className="mob-destinations">Support</div>
          </div>
          <div className="mob-sublink">
            <div className="mob-destinations">Privacy</div>
          </div>
          <div className="mob-sublink">
            <div className="mob-destinations">{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
      <div className="mob-footer-link-title-group">
        <div className="mob-sublink">
          <b className="mob-destinations">Services</b>
        </div>
        <div className="mob-sublink-parent">
          <div className="mob-sublink">
            <div className="mob-destinations">Digital Market</div>
          </div>
          <div className="mob-sublink">
            <div className="mob-destinations">Web Development</div>
          </div>
          <div className="mob-sublink">
            <div className="mob-destinations">Mobile App Development</div>
          </div>
        </div>
      </div>
      <img
        onClick={handleClick}
        className="mob-iconsnavigationmenu"
        alt=""
        src="/sandwich.png"
      />
      <div className="mob-get-in-touch-wrapper">
        <div className="mob-get-in-touch2">Get In Touch</div>
      </div>
      <div className="mob-icons-parent">
        <img className="mob-icons14" alt="" src="/icons@2x.png" />
        <div className="mob-get-in-touch2">Our Portfolio</div>
      </div>
    </div>
  );
};

export default Frame;
