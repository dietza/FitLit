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

  returnHoursSlept(userID, date) {
    const currentUserData = this.filterDataByUser(userID);
    const dailyHoursSlept = this.findDataByDate(date, currentUserData);
    return dailyHoursSlept.hoursSlept;
  }

  returnSleepQuality(userID, date) {
    const currentUserData = this.filterDataByUser(userID);
    const dailySleepQuality = this.findDataByDate(date, currentUserData);
    return dailySleepQuality.sleepQuality;
  }

}

module.exports = Sleep;