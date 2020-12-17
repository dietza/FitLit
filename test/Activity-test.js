const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
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

const activityData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numSteps": 3486,
    "minutesActive": 114,
    "flightsOfStairs": 32
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 6637,
    "minutesActive": 175,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 4112,
    "minutesActive": 220,
    "flightsOfStairs": 37
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 12304,
    "minutesActive": 152,
    "flightsOfStairs": 8
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 14329,
    "minutesActive": 168,
    "flightsOfStairs": 18
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 13750,
    "minutesActive": 65,
    "flightsOfStairs": 4
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numSteps": 4547,
    "minutesActive": 97,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "numSteps": 8160,
    "minutesActive": 72,
    "flightsOfStairs": 25
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numSteps": 4419,
    "minutesActive": 165,
    "flightsOfStairs": 33
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numSteps": 4662,
    "minutesActive": 181,
    "flightsOfStairs": 31
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numSteps": 2546,
    "minutesActive": 274,
    "flightsOfStairs": 26
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "numSteps": 10056,
    "minutesActive": 120,
    "flightsOfStairs": 34
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numSteps": 8429,
    "minutesActive": 275,
    "flightsOfStairs": 2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numSteps": 9858,
    "minutesActive": 243,
    "flightsOfStairs": 44
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numSteps": 10961,
    "minutesActive": 188,
    "flightsOfStairs": 17
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "numSteps": 13451,
    "minutesActive": 203,
    "flightsOfStairs": 2
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numSteps": 14478,
    "minutesActive": 140,
    "flightsOfStairs": 12
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numSteps": 8153,
    "minutesActive": 74,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numSteps": 5369,
    "minutesActive": 129,
    "flightsOfStairs": 46
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "numSteps": 3314,
    "minutesActive": 240,
    "flightsOfStairs": 6
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numSteps": 6760,
    "minutesActive": 135,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numSteps": 10225,
    "minutesActive": 174,
    "flightsOfStairs": 26
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numSteps": 7498,
    "minutesActive": 199,
    "flightsOfStairs": 13
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "numSteps": 11807,
    "minutesActive": 142,
    "flightsOfStairs": 46
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numSteps": 10289,
    "minutesActive": 119,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numSteps": 3605,
    "minutesActive": 124,
    "flightsOfStairs": 31
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numSteps": 11342,
    "minutesActive": 53,
    "flightsOfStairs": 17
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "numSteps": 3595,
    "minutesActive": 243,
    "flightsOfStairs": 19
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "numSteps": 13928,
    "minutesActive": 218,
    "flightsOfStairs": 21
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numSteps": 4148,
    "minutesActive": 142,
    "flightsOfStairs": 0
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "numSteps": 4665,
    "minutesActive": 219,
    "flightsOfStairs": 9
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "numSteps": 12134,
    "minutesActive": 99,
    "flightsOfStairs": 3
  }
]

describe('Activity', () => {
  let activity;
  let user1;
  let user2;
  let user3;
  let user4;
  let allUsers;
  let userRepo;
  
  beforeEach(() => {
    activity = new Activity(activityData)

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

  it('should be an instance of the Activity class', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should calculate the number of miles a user has walked in a day', () => {
    const dailyMilesWalked = activity.calculateMiles(2, '2019/06/15', userRepo);
    expect(dailyMilesWalked).to.be.a('number');
    expect(dailyMilesWalked).to.equal(3.66);
  });

  it('should return a user\'s number of active minutes for a given day', () => {
    const dailyActiveMinutes = activity.returnActiveMinutes(3, '2019/06/19');
    expect(dailyActiveMinutes).to.be.a('number');
    expect(dailyActiveMinutes).to.equal(188);
  });
  
  it('should calculate a user\'s weekly average number of active minutes based on a given day', () => {
    const weeklyAverageActiveMinutes = activity.calculateWeeklyAverageActiveMinutes(2, '2019/06/15');
    expect(weeklyAverageActiveMinutes).to.be.a('number');
    expect(weeklyAverageActiveMinutes).to.equal(138);
    const weeklyAverageActiveMinutes2 = activity.calculateWeeklyAverageActiveMinutes(3, '2019/06/20');
    expect(weeklyAverageActiveMinutes2).to.be.a('number');
    expect(weeklyAverageActiveMinutes2).to.equal(159.33);
  });

  it('should return if a user reached their step goal on a specific date', () => {
    const stepGoalSuccess = activity.calculateStepGoalSuccess(4, '2019/06/16', userRepo);
    expect(stepGoalSuccess).to.be.a('boolean');
    expect(stepGoalSuccess).to.equal(true);
    const stepGoalSuccess2 = activity.calculateStepGoalSuccess(4, '2019/06/15', userRepo);
    expect(stepGoalSuccess2).to.be.a('boolean');
    expect(stepGoalSuccess2).to.equal(false);
  });

  it('should return an array of dates a user successfully met their step goal (for all time)', () => {
    const stepGoalSuccessDates = activity.returnSuccessfulStepDates(1, userRepo);
    expect(stepGoalSuccessDates).to.be.an('array');
    expect(stepGoalSuccessDates).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23']);
  });

  it('should return the highest number of flights of stairs a user has climbed in one day', () => {
    const stairClimbingRecord = activity.findUserStairClimbingRecord(3);
    expect(stairClimbingRecord).to.be.an('object');
    expect(stairClimbingRecord).to.deep.equal({ '2019/06/20': 46 });
  });

  it('should calculate the average number of flights of stairs climbed by all users on a specific date', () => {
    const allUsersStairsAverage1 = activity.findAllUsersAverageByDate("2019/06/15", "flightsOfStairs");
    const allUsersStairsAverage2 = activity.findAllUsersAverageByDate("2019/06/22", "flightsOfStairs");
    expect(allUsersStairsAverage1).to.be.a('number');
    expect(allUsersStairsAverage1).to.equal(22.75);
    expect(allUsersStairsAverage2).to.be.a('number');
    expect(allUsersStairsAverage2).to.equal(18.25);
  });

  it('should calculate the average step count for all users on a specific date', () => {
    const allUsersStepsAverage1 = activity.findAllUsersAverageByDate("2019/06/17", "numSteps");
    const allUsersStepsAverage2 = activity.findAllUsersAverageByDate("2019/06/23", "numSteps");
    expect(allUsersStepsAverage1).to.be.a('number');
    expect(allUsersStepsAverage1).to.equal(10196.5);
    expect(allUsersStepsAverage2).to.be.a('number');
    expect(allUsersStepsAverage2).to.equal(8718.75);
  });

  it('should calculate the average active minutes for all users on a specific date', () => {
    const allUsersActiveMinutesAverage1 = activity.findAllUsersAverageByDate("2019/06/18", "minutesActive");
    const allUsersActiveMinutesAverage2 = activity.findAllUsersAverageByDate("2019/06/21", "minutesActive");
    expect(allUsersActiveMinutesAverage1).to.be.a('number');
    expect(allUsersActiveMinutesAverage1).to.equal(185);
    expect(allUsersActiveMinutesAverage2).to.be.a('number');
    expect(allUsersActiveMinutesAverage2).to.equal(162.5);

    activity.returnLatestDate();
  });

});