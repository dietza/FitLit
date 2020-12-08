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

}

module.exports = Hydration;