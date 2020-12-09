class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  calculateDataAverage(userID, dataMetric) {
    const currentUserSleepData = [];
    const total = this.sleepData.reduce((sum, sleepInfo) => {
      if (sleepInfo.userID === userID) {
        currentUserSleepData.push(sleepInfo)
        sum += sleepInfo[dataMetric];
      }
      return sum;
    }, 0);
    return Math.round(total / currentUserSleepData.length);
  }

  filterDataByUser(userID) {
    const currentUserSleepData = this.sleepData.filter(sleepInfo => {
      return sleepInfo.userID === userID
    });
    return currentUserSleepData;
  }

  findDataByDate(date, currentUserData) {
    const dailyData = currentUserData.find(sleepInfo => {
      return sleepInfo.date === date
    });
    return dailyData;
  }

  returnDailySleepData(userID, date, dataMetric) {
    const currentUserData = this.filterDataByUser(userID);
    const dailySleepData = this.findDataByDate(date, currentUserData);
    return dailySleepData[dataMetric];
  }

  findSleepDataByWeek(userID, date, dataMetric) {
    const currentUserData = this.filterDataByUser(userID);
    const startDate = currentUserData.find(info => info.date === date);
    const startIndex = currentUserData.indexOf(startDate);
    const endIndex = startIndex + 7;
    const weeklyDates = currentUserData.slice(startIndex, endIndex);
    const weeklySleepData = weeklyDates.map(info => info[dataMetric])
    return weeklySleepData;
  }

  calculateAllUsersSleepDataAverage(dataMetric) {
    const dateList = this.sleepData.map(info => info.date);
    const totalDates = [...new Set(dateList)];
    const userList = this.sleepData.map(info => info.userID);
    const totalUsers = [...new Set(userList)];
    const totalSleepData = this.sleepData.reduce((acc, initial) => {
      acc += initial[dataMetric]
      return acc;
    }, 0)
    return Math.round((totalSleepData / totalDates.length) / totalUsers.length);
  }

}

module.exports = Sleep;