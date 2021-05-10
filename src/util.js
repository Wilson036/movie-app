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
        typeObj[type].sort((a, b) => a.show_time.localeCompare(b.show_time));
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

const vaildateStateFun = (e, setErrorState, errorState) => {
  const value = e.target.value;
  const name = e.target.name;
  let errorMsg = null;
  switch (name) {
    case 'username':
      if (!value.trim()) {
        errorMsg = '請輸入姓名';
      }
      break;
    case 'password':
      if (value.trim().length < 8) {
        errorMsg = '密碼長度需大於8';
      }
      break;
    case 'email':
      if (
        !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(
          value
        )
      ) {
        errorMsg = 'email格式不對';
      }
      break;
    case 'comfiredPassword':
      // @ts-ignore
      const pwd = document.querySelector('#password').value;
      // @ts-ignore
      const comfiredPwd = document.querySelector('#comfiredPassword').value;
      if (pwd !== comfiredPwd) {
        errorMsg = '密碼不吻合';
      }
      break;
    case 'readTerms':
      errorMsg = !errorState[name];
      break;
  }
  setErrorState({ ...errorState, [name]: errorMsg });
};

export { showTimeListGroupByType, setDateFormat, vaildateStateFun };
