const remarksClassHelper = remark => {
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
    case "S. Disrupt":
      return "red";
    default:
      return "red";
  }
};

export { remarksClassHelper };
