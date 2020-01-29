const stationHelper = station => {
  const trimmedStation = station.trim();
  switch (trimmedStation) {
    case "Oakland Jack London Sq":
      return "Oakland - JLS";
    default:
      return trimmedStation;
  }
};

export { stationHelper };
