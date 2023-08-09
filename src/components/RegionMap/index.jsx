import { useState } from "react";
import { SVGMap } from "react-svg-map";
import Temp from "../../temp";

function RegionMap() {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");

  function onLocationClick(e) {
    setStateCode(e.target.id);
    setStateName(e.target.getAttribute("name"));
  }

  return (
    <>
      <div className="map">
        <SVGMap
          map={Temp}
          //onLocationClick={onLocationClick}
          //onLocationMouseOver={onLocationClick}
        />
      </div>
      <div>
        <p>{stateName}</p>
        <p>{stateCode}</p>
      </div>
    </>
  );
}

export default RegionMap;
