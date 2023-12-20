import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopHome from "./desktop/pages/Home";
import MobileHome from "./mobile/pages/Frame"
import Privacy from "./desktop/pages/Privacy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if((window.innerWidth) < 720){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
  },[window.innerWidth])
  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={!isMobile ? <DesktopHome />: <MobileHome />} />
      <Route path="/privacy" element={!isMobile && <Privacy />} />
    </Routes>
  );
}
export default App;
