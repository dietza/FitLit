class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  // calculateAverageHoursSlept(userID) {
  //   const currentUserSleepData = [];
  //   const totalHoursSlept = this.sleepData.reduce((sum, sleepInfo) => {
  //     if (sleepInfo.userID === userID) {
  //       currentUserSleepData.push(sleepInfo)
  //       sum += sleepInfo.hoursSlept;
  //     }
  //     return sum;
  //   }, 0);
  //   return Math.floor(totalHoursSlept / currentUserSleepData.length);
  // }

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

}

module.exports = Sleep;