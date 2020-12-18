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
  {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 61
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 70
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 40
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "numOunces": 93
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 91
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 76
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numOunces": 85
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "numOunces": 21
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 71
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numOunces": 51
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "numOunces": 95
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 27
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numOunces": 41
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "numOunces": 91
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 43
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 58
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numOunces": 78
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "numOunces": 34
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "numOunces": 39
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numOunces": 44
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "numOunces": 35
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "numOunces": 62
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
    expect(hydration.hydrationData).to.deep.equal([{
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
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 61
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numOunces": 70
    },
    {
      "userID": 3,
      "date": "2019/06/18",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2019/06/18",
      "numOunces": 93
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 91
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numOunces": 76
    },
    {
      "userID": 3,
      "date": "2019/06/19",
      "numOunces": 85
    },
    {
      "userID": 4,
      "date": "2019/06/19",
      "numOunces": 21
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 50
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numOunces": 71
    },
    {
      "userID": 3,
      "date": "2019/06/20",
      "numOunces": 51
    },
    {
      "userID": 4,
      "date": "2019/06/20",
      "numOunces": 95
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 50
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numOunces": 27
    },
    {
      "userID": 3,
      "date": "2019/06/21",
      "numOunces": 41
    },
    {
      "userID": 4,
      "date": "2019/06/21",
      "numOunces": 91
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "numOunces": 43
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "numOunces": 58
    },
    {
      "userID": 3,
      "date": "2019/06/22",
      "numOunces": 78
    },
    {
      "userID": 4,
      "date": "2019/06/22",
      "numOunces": 34
    },
    {
      "userID": 1,
      "date": "2019/06/23",
      "numOunces": 39
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "numOunces": 44
    },
    {
      "userID": 3,
      "date": "2019/06/23",
      "numOunces": 35
    },
    {
      "userID": 4,
      "date": "2019/06/23",
      "numOunces": 62
    }, ]);
  })

  it('should calculate the average amount of water consumed by a user', () => {
    const averageWaterIntake1 = hydration.calculateAverageWaterIntake(1);
    const averageWaterIntake2 = hydration.calculateAverageWaterIntake(2);
    expect(averageWaterIntake1).to.equal(59);
    expect(averageWaterIntake2).to.equal(67);
  })

  it('should find a user\'s water intake on a given day', () => {
    const dailyWaterIntake = hydration.findDailyWaterIntake(2, '2019/06/17');
    expect(dailyWaterIntake).to.equal(96);
  })

  it('should return a list of the user\'s water intake for a week', () => {
    const weekWaterIntake = hydration.findWeeklyWaterIntake(4, '2019/06/15');
    const weekWaterIntake2 = hydration.findWeeklyWaterIntake(2, '2019/06/22');
    expect(weekWaterIntake.length).to.equal(1);
    expect(weekWaterIntake).to.deep.equal([85]);
    expect(weekWaterIntake2.length).to.equal(7);
    expect(weekWaterIntake2).to.deep.equal([91, 96, 70, 76, 71, 27, 58]);
  })

})