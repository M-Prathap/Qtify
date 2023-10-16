import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Hero-Section/Hero-Section";
import { fetchTopAlbums } from "./api/api";
import "./index.css";
import "./styles.css";
import "./components/Section/Section";
import "./App.css";
import Section from "./components/Section/Section";

function App() {
  const [data, setData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    generateData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="sectionWrapper">
        <Section data={data} title="Top Albums" />
      </div>
    </div>
  );
}
export default App;
