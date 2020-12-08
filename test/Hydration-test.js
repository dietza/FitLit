const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration')

const hydrationData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numOunces": 85
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 69
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 91
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numOunces": 99
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "numOunces": 95
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numOunces": 28
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "numOunces": 82
  },
]

describe('Hydration', () => {
  let hydration;
  
  beforeEach(() => {
    hydration = new Hydration(hydrationData)
  });

  it('should be an instance of Hydration class', ()=> {
    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('should contain an array of hydration data objects', () => {
    expect(hydration.hydrationData).to.be.an('array');
    expect(hydration.hydrationData).to.deep.equal([  {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    },
    {
      "userID": 4,
      "date": "2019/06/15",
      "numOunces": 85
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 69
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 91
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "numOunces": 99
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "numOunces": 95
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numOunces": 28
    },
    {
      "userID": 4,
      "date": "2019/06/17",
      "numOunces": 82
    },])
  })

  it('should calculate the average amount of water consumed by a user', () => {
    const averageWaterIntake1 = hydration.calculateAverageWaterIntake(1)
    const averageWaterIntake2 = hydration.calculateAverageWaterIntake(2)
    expect(averageWaterIntake1).to.equal(67);
    expect(averageWaterIntake2).to.equal(87);
  })

  it('should find a user water intake on a given day', () => {
    const dailyWaterIntake = hydration.calculateDailyWaterIntake(2, '2019/06/17');
    expect(dailyWaterIntake).to.equal(96);
  })

  it('should return a list of the user\'s water intake for a week', () => {
    const weekWaterIntake = hydration.findWeeklyWaterIntake(4, '2019/06/15');
    expect(weekWaterIntake.length).to.equal(7)
    expect(weekWaterIntake).to.deep.equal([96, 88, 32, 14, 96, 88, 32]);
  })

})