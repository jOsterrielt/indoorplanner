import { useState } from "react";

import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Video from "./components/Video/Video";
import Links from "./components/Links/Links";

import "./App.css";

const App = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = ({ tentWidth, tentLength, potDiameter }) => {
    const maxPots =
      Math.floor(tentWidth / potDiameter) *
      Math.floor(tentLength / potDiameter);
    setResults({ tentWidth, tentLength, potDiameter, maxPots });
  };

  return (
    <div className="App">
      <h1>Indoor planner</h1>
      <div className="mainContainer">
        <div className="sectionContainer">
          <div className="section">
            <Info />
            <Form onCalculate={handleCalculate} />
          </div>
          <Results {...results} />
        </div>
        <section className="section2">
          <Content />
          <Video />
        </section>
        <section className="section3">
          <Links />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
