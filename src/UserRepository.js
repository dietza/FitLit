class UserRepository {
  constructor(userData) {
    this.userData = userData || [];
  }

  calculateAverageStepGoal() {
    const stepGoalsTotal = this.userData.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum;
    }, 0);
    return stepGoalsTotal / this.userData.length;
  }

  findUser(userID) {
    const targetUser = this.userData.find(user => {
      return user.id === userID;
    });
    return targetUser;
  }

}

module.exports = UserRepository;