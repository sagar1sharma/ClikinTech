import HeroSection from "../components/HeroSection/HeroSection";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import HelpCard1 from "../components/HelpCard/HelpCard1";
import BusinessGrowthContainer from "../components/BusinessGrowthContainer/BusinessGrowthContainer";
import ElevateYourBusinessCard from "../components/ElevateYourBusinessCard/ElevateYourBusinessCard";
import ToolsetContainer1 from "../components/ToolsetContainer/ToolsetContainer1";
import ServicesContainer from "../components/ServicesContainer/ServicesContainer";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Home.css";
import { useRef } from "react";

const LP = () => {
  const targetRef = useRef(null)
  return (
    <div className="lp">
      <div className="text3" />
      <Header targetRef={targetRef}/>
      <HeroSection ref={targetRef} />
      <PortfolioCard />
      <HelpCard1 />
      <div className="technology">
        <div className="frame-parent">
          <BusinessGrowthContainer />
          <ElevateYourBusinessCard />
          <ToolsetContainer1 />
        </div>
      </div>
      <ServicesContainer />
      <Footer />
    </div>
  );
};

export default LP;
