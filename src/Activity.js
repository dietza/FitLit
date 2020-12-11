const UserRepository = require("./UserRepository");

class Activity {
  constructor(activityData) {
    this.activityData = activityData
  }
  
  filterDataByUser(userID) {
    const currentUserActivityData = this.activityData.filter(activityInfo => {
      return activityInfo.userID === userID
    });
    return currentUserActivityData;
  }

  findDataByDate(date, currentUserData) {
    const dailyData = currentUserData.find(activityInfo => {
      return activityInfo.date === date
    });
    return dailyData;
  }

  calculateMiles(userID, date, repository) {
    const currentUserActivityData = this.filterDataByUser(userID);
    const dailyActivityData = this.findDataByDate(date, currentUserActivityData);
    const currentUser = repository.findUser(userID);
    const totalStepsInFeet = currentUser.strideLength * dailyActivityData.numSteps
    const totalMiles = (totalStepsInFeet / 5280).toFixed(2)
    return parseFloat(totalMiles)
  }



}

module.exports = Activity

