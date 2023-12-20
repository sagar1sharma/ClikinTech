import { useMemo } from "react";
import "./ContainerTitle.css";

const ContainerTitle = ({ propLeft }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="mob-frame-parent5" style={frameDiv2Style}>
      <div className="mob-frame-child4" />
      <div className="mob-title-wrapper">
        <div className="mob-title">Title</div>
      </div>
    </div>
  );
};

export default ContainerTitle;
