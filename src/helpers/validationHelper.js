const validationHelper = (inputFormField, inputValue) => {
  const value = inputValue.trim();
  const formField = inputFormField.trim();
  switch (formField) {
    case "destination":
      return value.length === 0 ? "errors" : "";
    case "newtime":
      return ![0, 4].includes(value.length) ? "errors" : "";
    case "newtime24":
      return ![0, 4].includes(value.length) ? "errors" : "";
    case "origin":
      return value.length === 0 ? "errors" : "";
    case "remarks_boarding":
      return value.length === 0 ? "errors" : "";
    case "scheduled":
      return value.length !== 4 ? "errors" : "";
    case "scheduled24":
      return value.length !== 4 ? "errors" : "";
    case "service":
      return value.length === 0 ? "errors" : "";
    case "trainno":
      return value.length === 0 ? "errors" : "";
    default:
      return "";
  }
};

export { validationHelper };
