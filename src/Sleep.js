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
    // RETURN TO FIX ENDINDEX CALUCULATION
    const weeklyDates = currentUserData.slice(startIndex, endIndex);
    // CHECK WEEKLYDATES IS RETURNING EXPECTED
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
    const startDate = new Date(date);
    const endDate = new Date(Number(startDate));
    endDate.setDate(endDate.getDate() + 7);
    const weeklySleepData = this.sleepData.filter(sleepInfo => {
      const sleepInfoDate = new Date(sleepInfo.date);
      return ((sleepInfoDate >= startDate) && (sleepInfoDate <= endDate))
    })
    const userList = weeklySleepData.map(info => info.userID);
    const totalUsers = [...new Set(userList)];
    const topSleepers = totalUsers.reduce((topSleepers, userID) => {
      const currentUserData = weeklySleepData.filter(sleepInfo => {
        return sleepInfo.userID === userID;
      });
      const userTotal = currentUserData.reduce((total, userSleepData) => {
        total += userSleepData.sleepQuality
        return total;
      }, 0);
      const qualityAverage = userTotal / currentUserData.length;
      if (qualityAverage > 3) {
        topSleepers.push({[userID] : qualityAverage});
      }
      return topSleepers; 
    }, []);
    return topSleepers;
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
    return { [winnerID] : winnerHours }
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}