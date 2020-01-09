import React from "react";

const Errors = props => {
  console.log(props);
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
