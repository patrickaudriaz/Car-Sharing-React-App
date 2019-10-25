import React from "react";
import OutsideOptions from "./OutsideOptions";

const OutsideChoice = () => (
  <div>
    <div className="direction">
      <div className="direction-label ">
        Choix de l'arrêt à l'extérieur de la commune ?
      </div>
    </div>
    <div className="reservation-destination">
      <OutsideOptions />
    </div>
  </div>
);

export default OutsideChoice;
