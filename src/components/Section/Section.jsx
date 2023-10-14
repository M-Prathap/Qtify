import "./Section.css";
import Card from "../card/Card";

const Section = (data, title) => {
  return (
    <div className="main">
      <div className="header"></div>
      {data && data.data.length > 0 && (
        <div className="cardWrapper">
          <div className="wrapper">
            {data.data.map((item) => {
              return <Card data={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Section;
