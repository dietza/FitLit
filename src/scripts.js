const User = require("./User");
const UserRepository = require("./UserRepository");
const userData = require("../data/users");
const Hydration = require("./Hydration")
const hydrationData = require("../data/hydration");
const Activity = require("./Activity")
const activityData = require("../data/activity")

const userFirstName = document.querySelector('.user-info__greeting');
const userInfoDisplay = document.querySelector('.user-info__basic-display');

const hydrationCurrentCount = document.querySelector('.hydration__current');
const hydrationDate = document.querySelector('.hydration__date');
const hydrationWeek = document.querySelector('.hydration__week');

const sleepCurrentHours = document.querySelector('.sleep__current-hours');
const sleepCurrentQuality = document.querySelector('.sleep__current-quality');
const sleepWeekHours = document.querySelector('.sleep__week-hours');
const sleepWeekQuality = document.querySelector('.sleep__week-quality');
const sleepAveragesHours = document.querySelector('.sleep__averages-hours');
const sleepAverageQuality = document.querySelector('.sleep__averages-quality');

const activityCurrentSteps = document.querySelector('.activity__current-steps');
const activityCurrentMinutes = document.querySelector('.activity__current-minutes');
const activityCurrentMiles = document.querySelector('.activity__current-miles');
const activityWeekSteps = document.querySelector('.activity__week-steps');
const activityWeekStairs = document.querySelector('.activity__week-stairs');
const activityWeekMinutes = document.querySelector('.activity__week-minutes');

let allUsers = users.map(userInfo => {
  const user = new User(userInfo);
  return user;
});

let userRepo = new UserRepository(allUsers);

let today;
let currentUser;
let activityInfo;
let hydrationInfo;

const pageLoad = () => {
  currentUser = userRepo[0];
  userFirstName.innerText = `Hello! ${currentUser.returnUserFirstName()}!`;
  showUserInfo();
  showActivityInfo();
  showHydrationInfo();
};

const showUserInfo = () => {
  userInfoDisplay.innerHTML = `<li class="user-info__stride-length">Stride: ${currentUser.strideLength}</li>
  <li class="user-info__friends"> Friends
    <ul>
      <li class="friend1">${currentUser.friend[0]}</li>
      <li class="friend2">${currentUser.friend[1]}</li>
      <li class="friend3">${currentUser.friend[2]}</li>
    </ul>
  </li>
  <li class="user-info__step-goal">Daily Step Goal: ${currentUser.dailyStepGoal}</li>
  <li class="user-info__average-step-goal">Average Daily Step Goal: ${userRepo.calculateAverageStepGoal()}</li>`
};

const showActivityInfo = () => {
  activityInfo = new Activity(activityData);
  today = activity.returnLatestDate();
  const currentUserActivity = activityInfo.findDataByDate(today, currentUser);
  activityCurrentSteps.innerText = currentUserActivity.numSteps;
  activityCurrentMinutes.innerText = currentUserActivity.minutesActive;
  activityCurrentMiles.innerText = activityInfo.calculateMiles(currentUser.id, today, userRepo);
  activityWeekSteps.innnerHTML = `<li class="activity__steps-day1">${}</li>
  <li class="activity__steps-day2">9.2</li>
  <li class="activity__steps-day3">9.2</li>
  <li class="activity__steps-day4">3.8</li>
  <li class="activity__steps-day5">7.5</li>
  <li class="activity__steps-day6">8</li>
  <li class="activity__steps-day7">9.2</li>`
}

const showHydrationInfo = () => {
  hydrationInfo = new Hydration(hydrationData);
  currentUserHydration = hydrationInfo.findDailyWaterIntake(currentUser.id, today)
}