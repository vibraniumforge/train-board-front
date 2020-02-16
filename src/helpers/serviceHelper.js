const serviceHelper = service => {
  switch (service) {
    case "Sunset Ltd.":
      return "Sunset Limited";
    case "SW Chief":
      return "Southwest Chief";
    case "Cal. Zephyr":
      return "California Zephyr";
    case "Empire Bldr.":
      return "Empire Builder";
    case "EB Portland":
      return "Empire Builder - Portland";
    case "Coast Star":
      return "Coast Starlight";
    case "Crescent":
      return "Crescent";
    case "Texas Eagle":
      return "Texas Eagle";
    case "Capitol Ltd.":
      return "Capitol Ltd";
    case "Pennsylvan.":
      return "Pennsylvanian";
    case "Lake S. Ltd.":
      return "Lake Shore";
    case "LSL Boston":
      return "Lake Shore Limited";
    case "Cardinal":
      return "Cardinal";
    case "Auto Train":
      return "Auto Train";
    case "Vermonter":
      return "Vermonter";
    case "City of N O":
      return "City of New Orleans";
    case "Maple Leaf":
      return "Maple Leaf";
    case "Adirondak":
      return "Adirondak";
    case "Piedmont":
      return "Piedmont";
    case "Carolinian":
      return "Carolinian";
    case "Palmetto":
      return "Palmetto";
    case "Sil. Star":
      return "Silver Star";
    case "Sil. Meteor":
      return "Silver Meteor";

    case "PAC SURFLNR":
      return "Pacific Surfliner";
    case "Acela Expr.":
      return "Acela Express";
    case "Lincoln S.":
      return "Lincoln Service";
    case "C. Sandburg":
      return "Carl Sandburg";
    case "Ill. Zephyr":
      return "Illinois Zephyr";
    case "Empire Serv.":
      return "Empire Service";

    case "Pere Marq.":
      return "Pere Marquette";
    case "C. Corridor":
      return "Capitol Corridor";

    case "Hoosier St.":
      return "Hoosier State";
    case "Riv. Runner":
      return "River Runner";
    case "NE Regional":
      return "Northeast Regional";
    default:
      return service;
  }
};

export { serviceHelper };
