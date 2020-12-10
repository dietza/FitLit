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
    // Input: date
    // Out: array of userIDs with sleep quality average above 3 for a given week
    // dataset of the week

    // calculate sleep quality ave of all users
    // return userID of users with sleep quality > 3
    // const usersWeeklyData = userArray.iterate(user => user[userID] this.findSleepDataByWeek(userID, date, 'sleepQuality')
    // usersWeeklyData.calculateAllUsersSleepDataAverage(dataMetric)

    const startDate = new Date(date);
    const endDate = new Date(Number(startDate));
    endDate.setDate(endDate.getDate() + 7);

    const weeklySleepData = this.sleepData.filter(sleepInfo => {

      const sleepInfoDate = new Date(sleepInfo.date);

      return ((sleepInfoDate >= startDate) && (sleepInfoDate <= endDate))

    })

    console.log('weeklySleepData OUT REDUCE >>>>>>>>', weeklySleepData);

    const userList = weeklySleepData.map(info => info.userID);
    const totalUsers = [...new Set(userList)];

    const topSleepers = totalUsers.reduce((topSleepers, userID) => {

      const currentUserData = weeklySleepData.filter(sleepInfo => {

        return sleepInfo.userID === userID;
      });

      console.log('userData >>>>>>>>', currentUserData);

      const userTotal = currentUserData.reduce((total, userSleepData) => {
        total += userSleepData.sleepQuality
        return total;
      }, 0);

      const qualityAverage = userTotal / currentUserData.length;

      console.log('qualityAverage >>>>>>>>', qualityAverage);

      if (qualityAverage > 3) {
        topSleepers.push(userID);

        // Do we actually want to return key: value pairs to include the user's average for that week? {userID: qualityAverage}

      }

      console.log('topSleepers >>>>>>>>', topSleepers);

      return topSleepers; 
    }, []);

    console.log('topSleepers >>>>>>>>', topSleepers);

    return topSleepers;

  }

}

module.exports = Sleep;