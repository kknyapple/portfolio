import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import Header from "./Header";

import "./styles.css";

let fullpageOptions = {
  //sectionClassName: "section",
  anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  //scrollBar: false,
  navigation: true,
  verticalAlign: true,
  //sectionPaddingTop: "80px",
  //sectionPaddingBottom: "50px",
  //arrowNavigation: true,
  //css3: true,
  //showActiveTooltip: true,
  autoScrolling: true,
  navigationTooltips: ["Home", "Projects", "Contact"],
  controlArrow: false,
  slidesNavigation: true,
  navigationPosition: "right",
  sectionsColor: ["#69d2e7", "#A7DBD8", "#E0E4CC"],
  paddingTop: "15px",
  fixedElements: "#header",
};

const FullpageWrapper = (fullpageProps) => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      //console.log("render prop change", state); // eslint-disable-line no-console
      return (
        <div>
          <div id="header">
            <Header></Header>
          </div>
          <div id="fullpage-wrapper">
            <div className="section">
              <Home></Home>
            </div>
            <div className="section">
              <Project></Project>
            </div>
            <div className="section">
              <Contact></Contact>
            </div>
          </div>
        </div>
      );
    }}
  />
);

function App() {
  return (
    <>
      <FullpageWrapper {...fullpageOptions} />
    </>
  );
}

export default App;
