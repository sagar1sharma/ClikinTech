import GeneralCard from "../GeneralCard/GeneralCard";
import "./ElevateYourBusinessCard.css";

const ElevateYourBusinessCard = () => {
  return (
    <div className="frame-parent15">
      <div className="frame-parent16">
        <div className="elevate-your-business-with-cli-container">
          <b className="we-deliver-high">
            Elevate Your Business with Clikin Tech.
          </b>
        </div>
        <div className="we-deliver-high-quality-produc-wrapper">
          <div className="we-deliver-high">
            We deliver high quality products on time to makeyour business
            profitable.
          </div>
        </div>
      </div>
      <div className="card-group">
        <GeneralCard
          imageId="/icons15@2x.png"
          headingText="Unlock Exceptional ROI"
          descriptionText="Discover innovative solutions that yield remarkable returns on investment, transforming your business outcomes."
          imageThumbnailUrl="/icons16@2x.png"
          showIcons
          stateDefaultModeDarkBackgroundColor="#e6e8ea"
          stateDefaultModeDarkGap="16px"
          digitalMarketingFontFamily="'Plus Jakarta Sans'"
          digitalMarketingColor="#05162e"
          weTransformDataFontFamily="'Plus Jakarta Sans'"
          weTransformDataColor="#374558"
        />
        <GeneralCard
          imageId="/icons17@2x.png"
          headingText="Drive Strategy for Promotion"
          descriptionText=" Elevate your business through analytical strategies, propelling growth and fostering lasting success."
          imageThumbnailUrl="/icons16@2x.png"
          showIcons
          stateDefaultModeDarkBackgroundColor="#e6e8ea"
          stateDefaultModeDarkGap="16px"
          digitalMarketingFontFamily="'Plus Jakarta Sans'"
          digitalMarketingColor="#05162e"
          weTransformDataFontFamily="'Plus Jakarta Sans'"
          weTransformDataColor="#374558"
        />
      </div>
    </div>
  );
};

export default ElevateYourBusinessCard;
