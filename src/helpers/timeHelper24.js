const timeHelper24 = time => {
  const newTime = time ? time.toString().trim() : null;
  if (newTime) {
    return `${newTime.slice(0, 2)}h${newTime.slice(2)}`;
  } else {
    return null;
  }
};

export { timeHelper24 };
