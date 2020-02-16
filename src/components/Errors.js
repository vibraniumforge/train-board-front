import React from "react";

const Errors = props => {
  return (
    <div id="errors">
      <textarea
        id="errorsArea"
        name="errors"
        placeholder=""
        disabled
        value={props.trainErrors.join("\n")}
      ></textarea>
    </div>
  );
};

export default Errors;
