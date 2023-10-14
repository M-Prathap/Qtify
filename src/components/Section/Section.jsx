import React, { useState } from "react";
import "./Section.css";
import Card from "../card/Card";

const Section = (data, title) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="main">
      <div className="header"></div>
      {data && data.data.length > 0 && (
        <div className="cardWrapper">
          {!toggle ? (
            <div className="wrapper">
              {data.data.map((item) => {
                return <Card data={item} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};
export default Section;
