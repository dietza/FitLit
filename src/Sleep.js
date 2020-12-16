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

  findSleepDataByWeek(userID, date, dataMetric) {
    const currentUserData = this.filterDataByUser(userID);
    const weeklyData = this.findWeeklyDataByDate(date, currentUserData);
    const weeklyDataByMetric = weeklyData.map(sleepInfo => {
      return this.returnDailySleepData(userID, sleepInfo.date, dataMetric);
    })

    console.log('weeklyDataByMetric >>>>>>>', weeklyDataByMetric);
    return weeklyDataByMetric;
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
    const weeklySleepData = this.findWeeklyDataByDate(date, this.sleepData)
    const userList = weeklySleepData.map(info => info.userID);
    const totalUsers = [...new Set(userList)];
    const bestQualitySleepers = totalUsers.reduce((topSleepers, userID) => {
      const currentUserData = this.filterDataByUser(userID);
      const userTotal = currentUserData.reduce((total, userSleepData) => {
        total += userSleepData.sleepQuality
        return total;
      }, 0);
      const qualityAverage = userTotal / currentUserData.length;
      if (qualityAverage >= 3) {
        topSleepers.push({[userID]: parseFloat((qualityAverage).toFixed(2))});
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