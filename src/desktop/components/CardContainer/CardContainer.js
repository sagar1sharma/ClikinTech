import { useMemo } from "react";
import "./CardContainer.css";

const CardContainer = ({
  imageDimensions,
  appDescription,
  imageDimensionsId,
  appTitle,
  propColor,
}) => {
  const jobSAASAppStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="frame-div">
      <div className="frame-parent1">
        <img className="frame-item" alt="" src={imageDimensions} />
        <div className="saas-app-wrapper">
          <div className="saas-app">{appDescription}</div>
        </div>
      </div>
      <div className="frame-parent1">
        <img className="frame-item" alt="" src={imageDimensionsId} />
        <div className="saas-app-wrapper">
          <div className="saas-app" style={jobSAASAppStyle}>
            {appTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
