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
const activityAverageSteps = document.querySelector('.activity__current-average-steps')
const activityAverageMinutes = document.querySelector('.activity__current-average-minutes')
const activityAverageMiles = document.querySelector('.activity__current-average-miles')
const activityWeekSteps = document.querySelector('.activity__week-steps');
const activityWeekStairs = document.querySelector('.activity__week-stairs');
const activityWeekMinutes = document.querySelector('.activity__week-minutes');


let allUsers = userData.map(userInfo => {
  const user = new User(userInfo);
  return user;
});

let userRepo = new UserRepository(allUsers);

let today;
let currentUser;
let activityInfo;
let hydrationInfo;
let sleepInfo

const pageLoad = () => {
  currentUser = userRepo.userData[47];
  userFirstName.innerText = `Hello! ${currentUser.returnUserFirstName()}!`;
  showUserInfo();
  showActivityInfo();
  showHydrationInfo();
  showSleepInfo();
};

const showUserInfo = () => {
  const userFriends = currentUser.friends.map(friend => {
    const userFriend = userRepo.findUser(friend)
    return userFriend.name
  })
  userInfoDisplay.innerHTML = `<li class="user-info__stride-length">Stride: ${currentUser.strideLength}</li>
  <li class="user-info__friends"> Friends
    <ul>
      <li class="friend1">${userFriends[0]}</li>
      <li class="friend2">${userFriends[1]}</li>
      <li class="friend3">${userFriends[2]}</li>
    </ul>
  </li>
  <li class="user-info__step-goal">Daily Step Goal: ${currentUser.dailyStepGoal}</li>
  <li class="user-info__average-step-goal">Average Daily Step Goal: ${userRepo.calculateAverageStepGoal()}</li>`
};

const showActivityInfo = () => {
  activityInfo = new Activity(activityData);
  today = activityInfo.returnLatestDate();
  const currentUserActivity = activityInfo.filterDataByUser(currentUser.id);
  const currentUserCurrentActivity = activityInfo.findDataByDate(today, currentUserActivity)
  const averageUserSteps = activityInfo.findAllUsersAverageByDate(today, 'numSteps');
  const averageUserMinutes = activityInfo.findAllUsersAverageByDate(today, 'minutesActive');
  console.log(currentUserCurrentActivity)
  // const userWeeklySteps = activityInfo.returnUserWeeklyData(today, currentUser, 'numSteps');
  activityCurrentSteps.innerText = `${currentUserCurrentActivity.numSteps} steps`;
  activityCurrentMinutes.innerText = `${currentUserCurrentActivity.minutesActive} minutes`;
  activityCurrentMiles.innerText = `${activityInfo.calculateMiles(currentUser.id, today, userRepo)} miles`;
  activityAverageSteps.innerText = `${averageUserSteps} steps`
  activityAverageMinutes.innerText = `${averageUserMinutes} minutes`
  activityAverageMiles.innerText = `${averageUserSteps} steps`
  // activityWeekSteps.innnerHTML = `
  // <li class="activity__steps-day1">${userWeeklySteps[0]}</li>
  // <li class="activity__steps-day2">${userWeeklySteps[1]}</li>
  // <li class="activity__steps-day3">${userWeeklySteps[2]}</li>
  // <li class="activity__steps-day4">${userWeeklySteps[3]}</li>
  // <li class="activity__steps-day5">${userWeeklySteps[4]}</li>
  // <li class="activity__steps-day6">${userWeeklySteps[5]}</li>
  // <li class="activity__steps-day7">${userWeeklySteps[6]}</li>
  // `
}

const showHydrationInfo = () => {
  hydrationInfo = new Hydration(hydrationData);
  const currentUserHydration = hydrationInfo.findDailyWaterIntake(currentUser.id, today)
  const userWeeklyDrank = hydrationInfo.findWeeklyWaterIntake(currentUser.id, today)
  hydrationCurrentCount.innerText = currentUserHydration;
  hydrationDate.innerText = `on ${today}`;
  hydrationWeek.innerHTML = `
    <li class="hydration__week1">${userWeeklyDrank[0]}</li>
    <li class="hydration__week2">${userWeeklyDrank[1]}</li>
    <li class="hydration__week3">${userWeeklyDrank[2]}</li>
    <li class="hydration__week4">${userWeeklyDrank[3]}</li>
    <li class="hydration__week5">${userWeeklyDrank[4]}</li>
    <li class="hydration__week6">${userWeeklyDrank[5]}</li>
    <li class="hydration__week7">${userWeeklyDrank[6]}</li>
  `;
}

const showSleepInfo = () => {
  sleepInfo = new Sleep(sleepData)
  const currentSleepHours = sleepInfo.returnDailySleepData(currentUser.id, today, 'hoursSlept')
  const currentSleepQuality = sleepInfo.returnDailySleepData(currentUser.id, today, 'sleepQuality')
  const weeklySleepHours = sleepInfo.findSleepDataByWeek(currentUser.id, today, 'hoursSlept')
  const weeklySleepQuality = sleepInfo.findSleepDataByWeek(currentUser.id, today, 'sleepQuality')
  const hoursAverage = sleepInfo.calculateDataAverage(currentUser.id, 'hoursSlept')
  const qualityAverage = sleepInfo.calculateDataAverage(currentUser.id, 'sleepQuality')
  sleepCurrentHours.innerText = `${currentSleepHours} hours`
  sleepCurrentQuality.innerText = `${currentSleepQuality} quality`
  sleepWeekHours.innerHTML = `Hours
    <li class="sleep__hours-day1">${weeklySleepHours[0]}</li>
    <li class="sleep__hours-day2">${weeklySleepHours[1]}</li>
    <li class="sleep__hours-day3">${weeklySleepHours[2]}</li>
    <li class="sleep__hours-day4">${weeklySleepHours[3]}</li>
    <li class="sleep__hours-day5">${weeklySleepHours[4]}</li>
    <li class="sleep__hours-day6">${weeklySleepHours[5]}</li>
    <li class="sleep__hours-day7">${weeklySleepHours[6]}</li>
    `
  sleepWeekQuality.innerHTML = `Quality
    <li class="sleep__quality-day1">${weeklySleepQuality[0]}</li>
    <li class="sleep__quality-day2">${weeklySleepQuality[1]}</li>
    <li class="sleep__quality-day3">${weeklySleepQuality[2]}</li>
    <li class="sleep__quality-day4">${weeklySleepQuality[3]}</li>
    <li class="sleep__quality-day5">${weeklySleepQuality[4]}</li>
    <li class="sleep__quality-day6">${weeklySleepQuality[5]}</li>
    <li class="sleep__quality-day7">${weeklySleepQuality[6]}</li>
  `
  sleepAveragesHours.innerText = `${hoursAverage} hours`
  sleepAverageQuality.innerText = `${qualityAverage} quality`
}

window.onload = pageLoad()