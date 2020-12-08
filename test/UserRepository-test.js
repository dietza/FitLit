const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User')
const UserRepository = require('../src/UserRepository')

const users = [{
  "id": 5,
  "name": "Erick Schaden",
  "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
  "email": "Vanessa_Gerhold@gmail.com",
  "strideLength": 3.1,
  "dailyStepGoal": 8000,
  "friends": [
    13,
    44,
    49,
    33,
    10
  ]
},
{
  "id": 6,
  "name": "Jerrold Bogisich",
  "address": "8283 Carroll Harbor, Borerfort CT 69020-3448",
  "email": "Mercedes_Zboncak53@yahoo.com",
  "strideLength": 3.7,
  "dailyStepGoal": 11000,
  "friends": [
    11,
    48,
    15
  ]
},
{
  "id": 7,
  "name": "Breanne Fay",
  "address": "834 Retta Knoll, Stantonland MA 71627-4121",
  "email": "Dashawn28@gmail.com",
  "strideLength": 2.9,
  "dailyStepGoal": 8000,
  "friends": [
    12,
    27,
    22,
    30
  ]
},
{
  "id": 8,
  "name": "Laney Abshire",
  "address": "86416 Koch Inlet, North Kaciefurt MA 80635",
  "email": "Janice_Nitzsche2@yahoo.com",
  "strideLength": 2.8,
  "dailyStepGoal": 2000,
  "friends": [
    11,
    41,
    23,
    49
  ]
}]

describe('UserRepository', () => {
  let user1;
  let user2;
  let user3;
  let user4;
  let allUsers;
  let userRepo;

  beforeEach(() => {

    allUsers = users.map(userInfo => {
      const user = new User(userInfo);
      return user;
    });

    userRepo = new UserRepository(allUsers);

    user1 = userRepo[0];
    user2 = userRepo[1];
    user3 = userRepo[2];
    user4 = userRepo[3];

  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of the UserRepository class', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should create instances of the User class', () => {
    expect(userRepo.userData[1]).to.be.an.instanceof(User);
    expect(userRepo.userData[2]).to.be.an.instanceof(User);
    expect(userRepo.userData[0].friends).to.deep.equal([13, 44, 49, 33, 10]);
  });

  it('should hold the data for all users', () => {
    expect(userRepo.userData).to.deep.equal([{
      id: 5,
      name: 'Erick Schaden',
      address: '514 Mayert Walk, Jordaneside SC 55023-6523',
      email: 'Vanessa_Gerhold@gmail.com',
      strideLength: 3.1,
      dailyStepGoal: 8000,
      friends: [ 13, 44, 49, 33, 10 ]
    },
    {
      id: 6,
      name: 'Jerrold Bogisich',
      address: '8283 Carroll Harbor, Borerfort CT 69020-3448',
      email: 'Mercedes_Zboncak53@yahoo.com',
      strideLength: 3.7,
      dailyStepGoal: 11000,
      friends: [ 11, 48, 15 ]
    },
    {
      id: 7,
      name: 'Breanne Fay',
      address: '834 Retta Knoll, Stantonland MA 71627-4121',
      email: 'Dashawn28@gmail.com',
      strideLength: 2.9,
      dailyStepGoal: 8000,
      friends: [ 12, 27, 22, 30 ]
    },
    {
      id: 8,
      name: 'Laney Abshire',
      address: '86416 Koch Inlet, North Kaciefurt MA 80635',
      email: 'Janice_Nitzsche2@yahoo.com',
      strideLength: 2.8,
      dailyStepGoal: 2000,
      friends: [ 11, 41, 23, 49 ]
    }]);
    expect(userRepo.userData[1]).to.deep.equal({
      "id": 6,
      "name": "Jerrold Bogisich",
      "address": "8283 Carroll Harbor, Borerfort CT 69020-3448",
      "email": "Mercedes_Zboncak53@yahoo.com",
      "strideLength": 3.7,
      "dailyStepGoal": 11000,
      "friends": [
        11,
        48,
        15
      ]
    });
  });

});