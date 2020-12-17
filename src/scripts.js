const userFirstName = document.querySelector('.user-info__greeting');
const userInfoDisplay = document.querySelector('.user-info__basic-display');
let userFriendsDisplay = document.querySelector('.user-info__friends')

const hydrationCurrentCount = document.querySelector('.hydration__current');
const hydrationDate = document.querySelector('.hydration__date');
let hydrationWeek = document.querySelector('.hydration__week-list');

const sleepCurrentHours = document.querySelector('.sleep__current-hours');
const sleepCurrentQuality = document.querySelector('.sleep__current-quality');
let sleepWeekHours = document.querySelector('.sleep__week-hours');
let sleepWeekQuality = document.querySelector('.sleep__week-quality');
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

const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

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
  currentUser = userRepo.userData[25];
  userFirstName.innerText = `Hello, ${currentUser.returnUserFirstName()}!`;
  showUserInfo();
  showActivityInfo();
  showHydrationInfo();
  showSleepInfo();
};

const printList = (parent, array) => {
  array.forEach(item => {
    let li = document.createElement('li');
    parent.appendChild(li);
    li.innerHTML += item;
  }
)}

const showUserInfo = () => {
  const userFriends = currentUser.friends.map(friend => {
    const userFriend = userRepo.findUser(friend)
    return userFriend.name
  })
  userInfoDisplay.innerHTML = `<li class="user-info__stride-length">Stride: ${currentUser.strideLength} feet </li>
  <li class="user-info__step-goal">Daily Step Goal: ${currentUser.dailyStepGoal}</li>
  <li class="user-info__average-step-goal">Average Daily Step Goal: ${userRepo.calculateAverageStepGoal()}</li>
  `;
  userFriendsDisplay = printList(userFriendsDisplay, userFriends);
};

const showActivityInfo = () => {
  activityInfo = new Activity(activityData);
  today = activityInfo.returnLatestDate();
  const currentUserActivity = activityInfo.filterDataByUser(currentUser.id);
  const currentUserCurrentActivity = activityInfo.findDataByDate(today, currentUserActivity)
  const averageUserSteps = activityInfo.findAllUsersAverageByDate(today, 'numSteps');
  const averageUserMinutes = activityInfo.findAllUsersAverageByDate(today, 'minutesActive');
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
  const currentUserHydration = hydrationInfo.calculateDailyWaterIntake(currentUser.id, today)
  const userWeeklyDrank = hydrationInfo.findWeeklyWaterIntake(currentUser.id, today)
  
  hydrationCurrentCount.innerText = currentUserHydration;
  hydrationDate.innerText = `on ${today}`;
  hydrationWeek = printList(hydrationWeek, userWeeklyDrank);
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
  sleepWeekHours = printList(sleepWeekHours, weeklySleepHours)
  sleepWeekQuality = printList(sleepWeekQuality, weeklySleepQuality)
  sleepAveragesHours.innerText = `${hoursAverage} hours`
  sleepAverageQuality.innerText = `${qualityAverage} quality`
}

window.onload = pageLoad()
