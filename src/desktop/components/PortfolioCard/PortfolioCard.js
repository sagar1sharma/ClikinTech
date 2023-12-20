import CardContainer from "../CardContainer/CardContainer";
import ContainerCard from "../ContainerCard/ContainerCard";
import TypeText from "../TypeText/TypeText";
import "./PortfolioCard.css";

const PortfolioCard = () => {
  return (
    <div className="portfolio">
      <div className="frame-parent4">
        <div className="frame-parent5">
          <div className="our-portfolio-wrapper">
            <div className="our-portfolio">Our Portfolio</div>
          </div>
          <div className="discover-our-varied-portfolio-wrapper">
            <b className="our-portfolio">
              Discover our varied portfolio showcasing web, mobile, design, and
              strategy.
            </b>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="digital-marketing-parent">
            <img
              className="digital-marketing-icon"
              alt=""
              src="/digital-marketing@2x.png"
            />
            <div className="digital-marketing-frame">
              <b className="our-portfolio">Digital Marketing</b>
            </div>
          </div>
          <div className="frame-parent7">
            <CardContainer
              imageDimensions="/frame-28@2x.png"
              appDescription="SAAS App"
              imageDimensionsId="/frame-1000003728@2x.png"
              appTitle="Job SAAS App"
              propColor="#212428"
            />
            <CardContainer
              imageDimensions="/frame-10000037281@2x.png"
              appDescription="Elysium Resort"
              imageDimensionsId="/frame-10000037282@2x.png"
              appTitle="Portfolio"
              propColor="#000"
            />
            <div className="frame-parent8">
              <ContainerCard />
              <ContainerCard />
            </div>
          </div>
        </div>
        <TypeText
          buttonIcon="/icons8@2x.png"
          buttonText="See More..."
          iconImageUrl="/icons9@2x.png"
          showLeftIcon={false}
          showRightIcon={false}
          typeTextBackgroundColor="unset"
          typeTextFlexShrink="unset"
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

export default PortfolioCard;
