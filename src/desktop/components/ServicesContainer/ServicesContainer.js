import GeneralCard from "../GeneralCard/GeneralCard";
import "./ServicesContainer.css";

const ServicesContainer = () => {
  return (
    <div className="desktop-3">
      <div className="frame-parent19">
        <div className="frame-parent20">
          <div className="our-services-wrapper">
            <div className="our-services">Our Services</div>
          </div>
          <div className="embark-on-a-journey-to-success-wrapper">
            <b className="our-services">
              Embark on a journey to success with our services – data
              strategies, website finesse, and custom app mastery.
            </b>
          </div>
        </div>
        <div className="card-container">
          <GeneralCard
            imageId="/icons19@2x.png"
            headingText="Digital Marketing"
            descriptionText="We transform data into dynamic action, forging insights into engagement, and driving business success through heightened profitability."
            imageThumbnailUrl="/icons16@2x.png"
            showIcons
            stateDefaultModeDarkBackgroundColor="#212428"
            stateDefaultModeDarkGap="24px"
            digitalMarketingFontFamily="'Plus Jakarta Sans'"
            digitalMarketingColor="#fff"
            weTransformDataFontFamily="'Plus Jakarta Sans'"
            weTransformDataColor="#fff"
          />
          <GeneralCard
            imageId="/icons19@2x.png"
            headingText="Website Development"
            descriptionText="We heighten brand impact through optimized websites, driving conversions, elevating revenues, and nurturing growth with our dynamic online presence."
            imageThumbnailUrl="/icons16@2x.png"
            showIcons
            stateDefaultModeDarkBackgroundColor="#212428"
            stateDefaultModeDarkGap="24px"
            digitalMarketingFontFamily="'Plus Jakarta Sans'"
            digitalMarketingColor="#fff"
            weTransformDataFontFamily="'Plus Jakarta Sans'"
            weTransformDataColor="#fff"
          />
          <GeneralCard
            imageId="/icons19@2x.png"
            headingText="Mobile App Development"
            descriptionText="We propel your business to the tech forefront with custom mobile apps, connecting you cost-effectively to your ideal audience while leveraging our expertise."
            imageThumbnailUrl="/icons16@2x.png"
            showIcons
            stateDefaultModeDarkBackgroundColor="#212428"
            stateDefaultModeDarkGap="24px"
            digitalMarketingFontFamily="'Plus Jakarta Sans'"
            digitalMarketingColor="#fff"
            weTransformDataFontFamily="'Plus Jakarta Sans'"
            weTransformDataColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
