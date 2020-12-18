class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }

  filterDataByUser(userID, dataSet) {
    const currentUserSleepData = dataSet.filter(sleepInfo => {
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
    const currentUserData = this.filterDataByUser(userID, this.sleepData);
    const dailySleepData = this.findDataByDate(date, currentUserData);
    return dailySleepData[dataMetric];
  }

  findWeeklyDataByDate(date, dataSet) {
    const endDate = new Date(date);
    const startDate = new Date(Number(endDate));
    startDate.setDate(startDate.getDate() - 6);
    const weeklyData = dataSet.filter(dataEntry => {
      const dataEntryDate = new Date(dataEntry.date);
      return ((dataEntryDate >= startDate) && (dataEntryDate <= endDate))
    });
    return weeklyData;
  }

  findWeeklySleepCounts(userID, date, dataMetric) {
    const currentUserData = this.filterDataByUser(userID, this.sleepData);
    const weeklyData = this.findWeeklyDataByDate(date, currentUserData);
    const weeklySleepCounts = weeklyData.map(sleepInfo => {
      return this.returnDailySleepData(userID, sleepInfo.date, dataMetric);
    })
    return weeklySleepCounts;
  }

  calculateUserDataAverage(userID, dataMetric, dataSet) {
    const currentUserSleepData = this.filterDataByUser(userID, dataSet);
    const total = dataSet.reduce((sum, sleepInfo) => {
      if (sleepInfo.userID === userID) {
        sum += sleepInfo[dataMetric];
      }
      return sum;
    }, 0);
    return parseFloat((total / currentUserSleepData.length).toFixed(2));
  }

  getTotalDates() {
    const dateList = this.sleepData.map(info => info.date);
    const totalDates = [...new Set(dateList)];
    return totalDates;
  }

  getTotalUsers() {
    const userList = this.sleepData.map(info => info.userID);
    const totalUsers = [...new Set(userList)];
    return totalUsers;
  }

  calculateAllUsersSleepAverage(dataMetric) {
    const totalDates = this.getTotalDates();
    const totalUsers = this.getTotalUsers();
    const totalSleepData = this.sleepData.reduce((sum, initial) => {
      sum += initial[dataMetric]
      return sum;
    }, 0)
    return parseFloat(((totalSleepData / totalDates.length) / totalUsers.length).toFixed(2));
  }

  findBestQualitySleepers(date) {
    const weeklySleepData = this.findWeeklyDataByDate(date, this.sleepData)
    const userList = weeklySleepData.map(info => info.userID);
    const totalUsers = [...new Set(userList)];
    const bestQualitySleepers = totalUsers.reduce((topSleepers, userID) => {
      const qualityAverage = this.calculateUserDataAverage(userID, 'sleepQuality', this.sleepData);
      if (qualityAverage >= 3) {
        topSleepers.push({[userID]: qualityAverage});
      }
      return topSleepers; 
    }, []);
    return bestQualitySleepers;
  }

  findLongestNightlySleeper(date) {
    const nightlyData = this.sleepData.filter(sleepDataOb => {
      return sleepDataOb.date === date
    });
    const sortedByHours = nightlyData.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept
    });
    const winnerID =  sortedByHours[0].userID;
    const winnerHours = sortedByHours[0].hoursSlept;
    return { [winnerID]: winnerHours }
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}