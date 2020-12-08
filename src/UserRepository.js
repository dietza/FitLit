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

}

module.exports = UserRepository;