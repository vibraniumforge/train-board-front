const serviceClassHelper = service => {
  switch (service) {
    // long distance
    case "Sunset Ltd.":
      return "default-amtrak-long-distance";
    case "SW Chief":
      return "default-amtrak-long-distance";
    case "Cal. Zephyr":
      return "default-amtrak-long-distance";
    case "California Zephyr":
      return "default-amtrak-long-distance";
    case "Empire Bldr.":
      return "default-amtrak-long-distance";
    case "EB Portland":
      return "default-amtrak-long-distance";
    case "Coast Star":
      return "default-amtrak-long-distance";
    case "Coast Starlight":
      return "default-amtrak-long-distance";
    case "Crescent":
      return "default-amtrak-long-distance";
    case "Texas Eagle":
      return "default-amtrak-long-distance";
    case "Capitol Ltd.":
      return "default-amtrak-long-distance";
    case "Pennsylvan.":
      return "default-amtrak-long-distance";
    case "Lake S. Ltd.":
      return "default-amtrak-long-distance";
    case "LSL Boston":
      return "default-amtrak-long-distance";
    case "Cardinal":
      return "default-amtrak-long-distance";
    case "Auto Train":
      return "Auto Train";
    case "Vermonter":
      return "default-amtrak-long-distance";
    case "City of N O":
      return "default-amtrak-long-distance";
    case "Maple Leaf":
      return "maple-leaf";
    case "Adirondack":
      return "default-amtrak-long-distance";
    case "Piedmont":
      return "Piedmont";
    case "Carolinian":
      return "default-amtrak-long-distance";
    case "Palmetto":
      return "palmetto";
    case "Silver Star":
      return "silver-services";
    case "Sil. Meteor":
      return "silver-services";
    case "Ethan Allen":
      return "default-amtrak-medium-distance";

    // corridors west
    case "PAC SURFLNR":
      return "pacific-surfliner";
    case "C. Corridor":
      return "capitol-corridor";
    case "San Joaquin":
      return "san-joaquin";
    case "Cascades":
      return "cascades";

    // corridors Midwest
    case "Riv. Runner":
      return "river-runner";
    case "Lincoln S.":
      return "midwest";
    case "C. Sandburg":
      return "midwest";
    case "Pere Marq.":
      return "midwest";
    case "Blue Water":
      return "midwest";
    case "Illini":
      return "midwest";
    case "Hiawatha":
      return "midwest";
    case "Ill. Zephyr":
      return "midwest";
    case "Wolverine":
      return "midwest";
    case "Saluki":
      return "midwest";

    // case "Hoosier St.":
    //   return "Hoosier State";

    // NE corridors
    case "Acela Expr.":
      return "acela-express";
    case "NE Regional":
      return "default-amtrak-medium-distance";
    case "Keystone":
      return "keystone";
    case "Empire Serv.":
      return "empire-service";

    // international
    case "Eurostar":
      return "eurostar";
    case "Thalys":
      return "thalys";
    case "Railjet":
      return "railjet";
    case "TGV":
      return "tgv";
    case "EuroNight":
      return "euro-night";
    case "EuroCity":
      return "euro-city";
    case "InterCity":
      return "inter-city";
    case "Intercity Express":
      return "inter-city-express";
    default:
      return "";
  }
};

export { serviceClassHelper };
