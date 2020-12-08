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

  findDataByUser(userID){
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

}

module.exports = Hydration;