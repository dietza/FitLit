class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  calculateAverageWaterIntake(userID) {
    const currentUserHydrationData = [];
    const totalWaterIntake = this.hydrationData.reduce((sum, hydrationInfo) => {
      if(hydrationInfo.userID === userID) {
        currentUserHydrationData.push(hydrationInfo)
        sum += hydrationInfo.numOunces;
        }
      return sum;
    }, 0);
    return Math.floor(totalWaterIntake / currentUserHydrationData.length);
  }

  findDataByUser(userID) {
    const currentUserHydrationData = this.hydrationData.filter(hydrationInfo => {
      return hydrationInfo.userID === userID
    });
    return currentUserHydrationData;
  }

  findDataByDate(date, currentUserData) {
    const dailyData = currentUserData.find(hydrationInfo => {
      return hydrationInfo.date === date
    });
    return dailyData;
  }

  findDailyWaterIntake(userID, date) {
    const currentUserData = this.findDataByUser(userID);
    const dailyIntake = this.findDataByDate(date, currentUserData);
    return dailyIntake.numOunces;
  }

  findWeeklyWaterIntake(userID, date) {
    const currentUserData = this.findDataByUser(userID);
    const startDate = currentUserData.find(info => info.date === date);
    const startIndex = currentUserData.indexOf(startDate);
    const endIndex = startIndex + 7;
    const weeklyDates = currentUserData.slice(startIndex, endIndex);
    const weeklyOunceCounts = weeklyDates.map(info => info.numOunces)
    return weeklyOunceCounts;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}