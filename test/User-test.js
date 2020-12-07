const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User')
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

describe('User', () => {
  let user1;
  let user2;
  let user3;
  let user4;

  beforeEach(() => {
    user1 = new User(users[0]);
    user2 = new User(users[1]);
    user3 = new User(users[2]);
    user4 = new User(users[3]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should create an instance of the User class', () => {
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
    expect(user3).to.be.an.instanceof(User);
  })

  it('should have an id', () => {
    expect(user1.id).to.equal(5);
    expect(user2.id).to.equal(6);
  })

  it('should have a name', () => {
    expect(user3.name).to.equal('Breanne Fay');
    expect(user4.name).to.equal('Laney Abshire');
  })

  it('should have an address', () => {
    expect(user1.address).to.be.a('string');
    expect(user4.address).to.equal('86416 Koch Inlet, North Kaciefurt MA 80635');
  })

  it('should have an email', () => {
    expect(user2.email).to.be.a('string');
    expect(user3.email).to.equal('Dashawn28@gmail.com');
  })

  it('should have a strideLength', () => {
    expect(user1.strideLength).to.be.a('number');
    expect(user2.strideLength).to.equal(3.7);
  })

  it('should have a daily step goal', () => {
    expect(user3.dailyStepGoal).to.be.a('number');
    expect(user4.dailyStepGoal).to.equal(2000);
  })

  it('should have friends', () => {
    expect(user1.friends).to.be.an('array');
    expect(user2.friends.length).to.equal(3);
    expect(user3.friends).to.deep.equal([
      12,
      27,
      22,
      30
    ]);
  })

  it('should return the user\'s first name', () => {
    const userName = user4.returnUserFirstName();
    expect(userName).to.equal('Laney');
  })

})
