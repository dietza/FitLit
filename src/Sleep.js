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

  findBestQualitySleepers(date) {
    // Input: date, userArray, sleepData
    // Out: array of userIDs with sleep quality average above 3 for a given week
    // dataset of the week
    // calculate sleep quality ave of all users
    // return userID of users with sleep quality > 3
    // const usersWeeklyData = userArray.iterate(user => user[userID] this.findSleepDataByWeek(userID, date, 'sleepQuality')
    // usersWeeklyData.calculateAllUsersSleepDataAverage(dataMetric)
    const startDate = this.sleepData.find(info => info.date === date);
    const startIndex = this.sleepData.indexOf(startDate);
    const endIndex = startIndex + 7;
    const weeklyDates = this.sleepData.slice(startIndex, endIndex);
    // const weeklySleepData = weeklyDates.map(info => info.sleepQuality);
    const userList = weeklyDates.map(info => info.userID);
    const totalUsers = [...new Set(userList)];
    const topSleepers = totalUsers.reduce((overThree, userID) => {
      console.log(weeklyDates)
      const userWeeklyAverage = this.calculateDataAverage(user.userID, 'sleepQuality');
      if (userWeeklyAverage > 3) {
        overThree.push(user.userID);
      }
      console.log(userWeeklyAverage)
      return overThree;
    },[]);
    return topSleepers;
  }

}

module.exports = Sleep;