const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const UserRepository = require('../src/UserRepository')
const User = require('../src/User')

const users = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      19,
      11,
      42,
      33
    ]
  },
  {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
      48,
      7,
      44,
      8
    ]
  }
]

const sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 4.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 3.8
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.7,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 8.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 2.6
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 5.3,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 10.4,
    "sleepQuality": 3.1
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 10.8,
    "sleepQuality": 3.2
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 9.8,
    "sleepQuality": 2.6
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 5.9,
    "sleepQuality": 2.5
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 10.7,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 9.6,
    "sleepQuality": 2.5
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 7.2,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 5.2,
    "sleepQuality": 2.3
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 9.3,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 10.1,
    "sleepQuality": 2.4
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 9.4,
    "sleepQuality": 1.2
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 8.3,
    "sleepQuality": 1.9
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 7.8,
    "sleepQuality": 4.2
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 4.3,
    "sleepQuality": 4.8
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 8.9,
    "sleepQuality": 3.7
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 10.6,
    "sleepQuality": 2.7
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "hoursSlept": 7,
    "sleepQuality": 3
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "hoursSlept": 4.8,
    "sleepQuality": 3.3
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "hoursSlept": 9.8,
    "sleepQuality": 2.1
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 7.7,
    "sleepQuality": 1.5
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "hoursSlept": 7.8,
    "sleepQuality": 1.5
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "hoursSlept": 8,
    "sleepQuality": 4.9
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "hoursSlept": 4.7,
    "sleepQuality": 3.9
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "hoursSlept": 9.9,
    "sleepQuality": 2.6
  }
];

describe('Sleep', () => {
  let sleep;
  let user1;
  let user2;
  let user3;
  let user4;
  let allUsers;
  let userRepo;
  
  beforeEach(() => {
    sleep = new Sleep(sleepData)

    allUsers = users.map(userInfo => {
      const user = new User(userInfo);
      return user;
    });

    userRepo = new UserRepository(allUsers);

    user1 = userRepo.userData[0];
    user2 = userRepo.userData[1];
    user3 = userRepo.userData[2];
    user4 = userRepo.userData[3];
  });

  it('should be an instance of Sleep class', ()=> {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should contain an array of sleep data objects', () => {
    expect(sleep.sleepData).to.be.an('array');
    expect(sleep.sleepData).to.deep.equal([
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7 },
      {
        userID: 3,
        date: '2019/06/15',
        hoursSlept: 10.8,
        sleepQuality: 4.7
      },
      { userID: 4, date: '2019/06/15', hoursSlept: 5.4, sleepQuality: 3 },
      { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 2, date: '2019/06/16', hoursSlept: 7.5, sleepQuality: 3.8 },
      {
        userID: 3,
        date: '2019/06/16',
        hoursSlept: 10.7,
        sleepQuality: 3.4
      },
      { userID: 4, date: '2019/06/16', hoursSlept: 8.3, sleepQuality: 4.5 },
      { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
      { userID: 2, date: '2019/06/17', hoursSlept: 5.7, sleepQuality: 3 },
      { userID: 3, date: '2019/06/17', hoursSlept: 5.3, sleepQuality: 4.9 },
      { userID: 4, date: '2019/06/17', hoursSlept: 5.7, sleepQuality: 1.1 },
      {
        userID: 1,
        date: '2019/06/18',
        hoursSlept: 10.4,
        sleepQuality: 3.1
      },
      {
        userID: 2,
        date: '2019/06/18',
        hoursSlept: 10.8,
        sleepQuality: 3.2
      },
      { userID: 3, date: '2019/06/18', hoursSlept: 9.8, sleepQuality: 2.6 },
      { userID: 4, date: '2019/06/18', hoursSlept: 5.9, sleepQuality: 2.5 },
      {
        userID: 1,
        date: '2019/06/19',
        hoursSlept: 10.7,
        sleepQuality: 1.2
      },
      { userID: 2, date: '2019/06/19', hoursSlept: 9.6, sleepQuality: 2.5 },
      { userID: 3, date: '2019/06/19', hoursSlept: 7.2, sleepQuality: 3.4 },
      { userID: 4, date: '2019/06/19', hoursSlept: 5.2, sleepQuality: 2.3 },
      { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
      {
        userID: 2,
        date: '2019/06/20',
        hoursSlept: 10.1,
        sleepQuality: 2.4
      },
      { userID: 3, date: '2019/06/20', hoursSlept: 9.4, sleepQuality: 1.2 },
      { userID: 4, date: '2019/06/20', hoursSlept: 8.3, sleepQuality: 1.9 },
      { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
      { userID: 2, date: '2019/06/21', hoursSlept: 4.3, sleepQuality: 4.8 },
      { userID: 3, date: '2019/06/21', hoursSlept: 8.9, sleepQuality: 3.7 },
      {
        userID: 4,
        date: '2019/06/21',
        hoursSlept: 10.6,
        sleepQuality: 2.7
      },
      { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
      { userID: 2, date: '2019/06/22', hoursSlept: 4.8, sleepQuality: 3.3 },
      { userID: 3, date: '2019/06/22', hoursSlept: 9.8, sleepQuality: 2.1 },
      { userID: 4, date: '2019/06/22', hoursSlept: 7.7, sleepQuality: 1.5 },
      { userID: 1, date: '2019/06/23', hoursSlept: 7.8, sleepQuality: 1.5 },
      { userID: 2, date: '2019/06/23', hoursSlept: 8, sleepQuality: 4.9 },
      { userID: 3, date: '2019/06/23', hoursSlept: 4.7, sleepQuality: 3.9 },
      { userID: 4, date: '2019/06/23', hoursSlept: 9.9, sleepQuality: 2.6 }
    ]);
  });

  it('should calculate the average number of hours a user has slept', () => {
    const averageHoursSlept1 = sleep.calculateUserDataAverage(3, 'hoursSlept', sleep.sleepData);
    expect(averageHoursSlept1).to.be.a('number');
    expect(averageHoursSlept1).to.equal(8.51);

    const averageHoursSlept2 = sleep.calculateUserDataAverage(4, 'hoursSlept', sleep.sleepData);
    expect(averageHoursSlept2).to.be.a('number');
    expect(averageHoursSlept2).to.equal(7.44);
  });

  it('should calculate a user\'s average sleep quality', () => {
    const averageSleepQuality1 = sleep.calculateUserDataAverage(1, 'sleepQuality', sleep.sleepData);
    expect(averageSleepQuality1).to.be.a('number');
    expect(averageSleepQuality1).to.equal(2.53);

    const averageSleepQuality2 = sleep.calculateUserDataAverage(2, 'sleepQuality', sleep.sleepData);
    expect(averageSleepQuality2).to.be.a('number');
    expect(averageSleepQuality2).to.equal(3.62);
  });

  it('should return a user\'s number of hours slept for a given date', () => {
    const hoursSlept = sleep.returnDailySleepData(1, '2019/06/17', 'hoursSlept');
    expect(hoursSlept).to.be.a('number');
    expect(hoursSlept).to.equal(8);
  });

  it('should return a user\'s sleep quality for a given date', () => {
    const sleepQuality = sleep.returnDailySleepData(user3.id, '2019/06/20', 'sleepQuality');
    expect(sleepQuality).to.be.a('number');
    expect(sleepQuality).to.equal(1.2);
  });

  it('should return list of a user\'s sleep hours for a week', () => {
    const weeklySleepTimes = sleep.findWeeklySleepCounts(user4.id, '2019/06/15', 'hoursSlept');
    expect(weeklySleepTimes).to.be.an('array');
    expect(weeklySleepTimes).to.deep.equal([5.4]);
  })

  it('should return a list of a user\'s sleep quality for a week', () => {
    const weeklySleepQuality = sleep.findWeeklySleepCounts(1, '2019/06/22', 'sleepQuality');
    expect(weeklySleepQuality).to.be.an('array');
    expect(weeklySleepQuality).to.deep.equal([3.8, 2.6, 3.1, 1.2, 1.2, 4.2, 3]);
  })

  it('should calculate the average sleep quality of all users (over all time)', () => {
    const allUserSleepQualityAverage = sleep.calculateAllUsersSleepAverage('sleepQuality');
    expect(allUserSleepQualityAverage).to.be.a('number');
    expect(allUserSleepQualityAverage).to.equal(2.98)
  })

  it('should calculate the average sleep hours of all users (over all time)', () => {
    const allUsersAverageHoursSlept = sleep.calculateAllUsersSleepAverage('hoursSlept');
    expect(allUsersAverageHoursSlept).to.be.a('number');
    expect(allUsersAverageHoursSlept).to.equal(7.85)
  })

  it('should return all users with a sleep quality average above 3 in a given week', () => {
    const bestQualitySleepers = sleep.findBestQualitySleepers('2019/06/15');
    expect(bestQualitySleepers).to.be.an('array');
    expect(bestQualitySleepers).to.deep.equal([{2: 3.62}, {3: 3.32}]);
  })

  it('should find the user who slept the most on a given date', () => {
    const longestSleeper = sleep.findLongestNightlySleeper('2019/06/20');
    expect(longestSleeper).to.be.an('object');
    expect(longestSleeper).to.deep.equal({ '2': 10.1 });
  })

});