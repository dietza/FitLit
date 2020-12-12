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

  filterDataByDate(date) {
    const dailyActivityData = this.activityData.filter(activityInfo => {
      return activityInfo.date === date
    });
    return dailyActivityData;
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

  calculateStepGoalSuccess(userID, date, repository) {
    const currentUserActivityData = this.filterDataByUser(userID);
    const dailyActivityData = this.findDataByDate(date, currentUserActivityData);
    const currentUser = repository.userData.find(user => user.id === userID);
    if (dailyActivityData.numSteps >= currentUser.dailyStepGoal) {
      return true
    } else {
      return false
    }
  }

  returnSuccessfulStepDates(userID, repository) {
    const currentUserActivityData = this.filterDataByUser(userID);
    const stepGoalSuccessDates = [];
    currentUserActivityData.forEach(activityInfo => {
      if (this.calculateStepGoalSuccess(userID, activityInfo.date, repository)) {
        stepGoalSuccessDates.push(activityInfo.date);
      }
    });
    return stepGoalSuccessDates;
  }

  findUserStairClimbingRecord(userID) {
    const currentUserActivityData = this.filterDataByUser(userID);
    const sortedByStairsClimbed = currentUserActivityData.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })
    return {[sortedByStairsClimbed[0].date]: sortedByStairsClimbed[0].flightsOfStairs}
  }

  findAllUsersAverageByDate(date, dataMetric) {
    const dailyActivityData = this.filterDataByDate(date);
    const allUsersDailyTotal = dailyActivityData.reduce((sum, activityInfo) => {
      sum += activityInfo[dataMetric];
      return sum;
    }, 0);
    const allUsersDailyAverage = allUsersDailyTotal / dailyActivityData.length;
    return allUsersDailyAverage;
  }
}

module.exports = Activity

