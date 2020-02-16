const remarksHelper = remark => {
  const trimmedRemark = remark.trim();

  switch (trimmedRemark) {
    case "S. Disrupt":
      return "Service Disrupt";
    default:
      return trimmedRemark;
  }
};

export { remarksHelper };
