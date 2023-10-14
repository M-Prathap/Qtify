import React from "react";
import "./Card.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

function Card(data) {
  const type = data.type;
  const getCard = (type) => {
    const { image, follows, title, songs } = data.data;
    return (
      <>
        {type !== "Jaz" && (
          <Tooltip title={`${songs.length}songs`} placement="top" arrow>
            <div className="wrapper">
              <div className="card">
                <img src={image} alt="ima" height={230} />
                <div className="banner">
                  <Chip
                    label={`${follows} follows`}
                    size="small"
                    className="chip"
                  ></Chip>
                </div>
                <div className="titleWrapper">
                  <p className="para">{title}</p>
                </div>
              </div>
            </div>
          </Tooltip>
        )}
      </>
    );
  };
  return getCard(type);
}
export default Card;
