import React from "react";
import { headerData } from "../../data/headerData";


function Footer() {

  const shortName = (name) => {
    if(name.length > 10){
      return name.split(" ")[0];
    } else {
      return name
    }
  }

  return (
    <div className="footer">
      <p>
        Made with 
        <span role="img" aria-label="love">
          ❤️
        </span>
          by {shortName(headerData.name)}
      </p>
    </div>
  );
}

export default Footer;