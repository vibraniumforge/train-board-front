const stationHelper = station => {
  const trimmedStation = station.trim();
  switch (trimmedStation) {
    case "Oakland Jack London Sq":
      return "Oakland - JLS";
    case "Oakland Coliseum Airport":
      return "Oak Coliseum";
    case "Albany Rensselaer":
      return "Albany-Res";
    default:
      return trimmedStation;
  }
};

export { stationHelper };
