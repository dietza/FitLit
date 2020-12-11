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

  returnActiveMinutes(userID, date) {
    const currentUserActivityData = this.filterDataByUser(userID);
    const dailyActivityData = this.findDataByDate(date, currentUserActivityData);
    return dailyActivityData.minutesActive;
  }

  calculateWeeklyAverageActiveMinutes(userID, date) {
    const startDate = new Date(date);
    const endDate = new Date(Number(startDate));
    endDate.setDate(endDate.getDate() + 7);
    const weeklyActivityData = this.activityData.filter(activityInfo => {
      const activityInfoDate = new Date(activityInfo.date);
      return ((activityInfoDate >= startDate) && (activityInfoDate <= endDate))
    })
    const userWeeklyActivityData = weeklyActivityData.filter(activityInfo => activityInfo.userID === userID);
    const totalActiveMinutes = userWeeklyActivityData.reduce((total, activityInfo) => {
      total += activityInfo.minutesActive;
      return total;
    }, 0)
    const averageActiveMinutes = (totalActiveMinutes / userWeeklyActivityData.length).toFixed(2);
    return parseFloat(averageActiveMinutes);
  }
}

module.exports = Activity

