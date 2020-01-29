const remarksHelper = remark => {
  const trimmedRemark = remark.trim();
  if (trimmedRemark.indexOf("E") > -1) {
    return "green";
  }
  switch (trimmedRemark) {
    case "On Time":
      return "green";
    case "Boarding":
      return "green boarding";
    case "Arrived":
      return "green";
    default:
      return "red";
  }
};

export { remarksHelper };
