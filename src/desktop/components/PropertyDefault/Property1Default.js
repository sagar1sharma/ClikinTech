import { useMemo } from "react";
import "./Property1Default.css";
import { useNavigate } from "react-router-dom";

const Property1Default = ({
  text = "Home",
  iconImageUrl,
  showIcons = true,
  property1DefaultFlexShrink,
  homeFontFamily,
  homeColor,
  homeFontWeight,
  targetRef
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultFlexShrink]);

  const homeStyle = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
      color: homeColor,
      fontWeight: homeFontWeight,
    };
  }, [homeFontFamily, homeColor, homeFontWeight]);

  const navigate = useNavigate();

  function handleClick(text){
    if(text == "Privacy & Policy"){
      navigate("/privacy")
    }
    else{
      alert(text + " Clicked!")
    }
  }

  return (
    <div onClick={() => handleClick(text)} className="property-1default" style={property1DefaultStyle}>
      <div className="home-wrapper">
        <div className="home" style={homeStyle}>
          {text}
        </div>
      </div>
      {showIcons && <img className="icons" alt="" src={iconImageUrl} />}
    </div>
  );
};

export default Property1Default;
