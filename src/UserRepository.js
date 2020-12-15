class UserRepository {
  constructor(userData) {
    this.userData = userData || [];
  }

  calculateAverageStepGoal() {
    const stepGoalsTotal = this.userData.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum;
    }, 0);
    const stepGoalAverage = stepGoalsTotal / this.userData.length;
    return stepGoalAverage;
  }

  findUser(userID) {
    const targetUser = this.userData.find(user => {
      return user.id === userID;
    });
    return targetUser;
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}