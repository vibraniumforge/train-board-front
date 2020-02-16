const timeHelper = (time, time24) => {
  const newTime = time ? time.toString().trim() : null;
  const time24Integer = parseInt(time24, 10);
  if (newTime && time24Integer) {
    if (time24Integer < 1200) {
      if (newTime.charAt(0) === "0") {
        return `${newTime.slice(1, 2)}:${newTime.slice(2)}`;
      } else {
        return `${newTime.slice(0, 2)}:${newTime.slice(2)}`;
      }
    } else {
      return `${newTime.slice(0, 2)}:${newTime.slice(2)} p`;
    }
  } else {
    return null;
  }
};

export { timeHelper };
