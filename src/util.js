const showTimeListGroupByType = (theaterArray, showTime) => {
  return theaterArray.reduce((obj, theater) => {
    const showTimeInfo = showTime.filter(
      ({ theater_id }) => theater.theater_id === theater_id
    );
    if (showTimeInfo.length > 0) {
      obj[theater.theater_name] = showTimeInfo.reduce((typeObj, timeObj) => {
        const { type } = timeObj;
        if (!typeObj[type]) {
          typeObj[type] = [];
        }
        typeObj[type].push(timeObj);

        return typeObj;
      }, {});
    }
    return obj;
  }, {});
};

const setDateFormat = (date) => {
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

export { showTimeListGroupByType, setDateFormat };
