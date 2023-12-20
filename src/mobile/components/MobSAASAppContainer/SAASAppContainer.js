import { useMemo } from "react";
import "./SAASAppContainer.css";

const SAASAppContainer = ({
  dimensionCode,
  appDescription,
  propLeft,
  propTop,
  propColor,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const sAASAppStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="mob-frame-parent4" style={frameDiv1Style}>
      <img className="mob-frame-child3" alt="" src={dimensionCode} />
      <div className="mob-saas-app-wrapper">
        <div className="mob-saas-app" style={sAASAppStyle}>
          {appDescription}
        </div>
      </div>
    </div>
  );
};

export default SAASAppContainer;
