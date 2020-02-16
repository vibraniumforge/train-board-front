const validationHelper = newTrain => {
  for (let key in newTrain) {
    // console.log(key);
    switch (key) {
      case "destination":
        if (newTrain.destination.length === 0) {
          return false;
        } else {
          break;
        }
      case "newtime":
        if (![0, 4].includes(newTrain.newtime.length)) {
          return false;
        } else {
          break;
        }
      case "newtime24":
        if (![0, 4].includes(newTrain.newtime24.length)) {
          return false;
        } else {
          break;
        }
      case "origin":
        if (newTrain.origin.length === 0) {
          return false;
        } else {
          break;
        }
      case "remarks_boarding":
        if (newTrain.remarks_boarding.length === 0) {
          return false;
        } else {
          break;
        }
      case "scheduled":
        if (newTrain.scheduled.length === 0) {
          return false;
        } else {
          break;
        }
      case "scheduled24":
        if (newTrain.scheduled24.length === 0) {
          return false;
        } else {
          break;
        }
      case "service":
        if (newTrain.service.length === 0) {
          return false;
        } else {
          break;
        }
      case "trainno":
        if (newTrain.trainno.length === 0) {
          return false;
        } else {
          break;
        }
      default:
        return false;
    }
    return true;
  }
};

export { validationHelper };
