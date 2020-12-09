const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');

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
  
  beforeEach(() => {
    sleep = new Sleep(sleepData)
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

    const averageHoursSlept1 = sleep.calculateDataAverage(3, 'hoursSlept');
    expect(averageHoursSlept1).to.be.a('number');
    expect(averageHoursSlept1).to.equal(9);
    const averageHoursSlept2 = sleep.calculateDataAverage(4, 'hoursSlept');
    expect(averageHoursSlept2).to.be.a('number');
    expect(averageHoursSlept2).to.equal(7);

  });

  it('should calculate a user\'s average sleep quality', () => {

    const averageSleepQuality1 = sleep.calculateDataAverage(1, 'sleepQuality');
    expect(averageSleepQuality1).to.be.a('number');
    expect(averageSleepQuality1).to.equal(3);
    const averageSleepQuality2 = sleep.calculateDataAverage(2, 'sleepQuality');
    expect(averageSleepQuality2).to.be.a('number');
    expect(averageSleepQuality2).to.equal(4);

  });

});