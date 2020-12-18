const userFirstName = document.querySelector('.user-info__greeting');
const userInfoDisplay = document.querySelector('.user-info__basic-display');
const currentDate = document.querySelector('.user-info__date-input');
const dateButton = document.querySelector('.user-info__date-button');
const hydrationCurrentCount = document.querySelector('.hydration__current');
const hydrationDate = document.querySelector('.hydration__date');
const sleepCurrentHours = document.querySelector('.sleep__current-hours');
const sleepCurrentQuality = document.querySelector('.sleep__current-quality');
const sleepAveragesHours = document.querySelector('.sleep__averages-hours');
const sleepAverageQuality = document.querySelector('.sleep__averages-quality');
const activityCurrentSteps = document.querySelector('.activity__current-steps');
const activityCurrentMinutes = document.querySelector('.activity__current-minutes');
const activityCurrentMiles = document.querySelector('.activity__current-miles');
const activityAverageSteps = document.querySelector('.activity__current-average-steps');
const activityAverageMinutes = document.querySelector('.activity__current-average-minutes');
const activityAverageMiles = document.querySelector('.activity__current-average-miles');

const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

let allUsers;
let userRepo;
let today;
let currentUser;
let activityInfo;
let hydrationInfo;
let sleepInfo;
let thisWeeksDates;

const randomUser = () => {
  return Math.floor(Math.random() * 50)
};

const pageLoad = () => {
  allUsers = userData.map(userInfo => {
    const user = new User(userInfo);
    return user;
  });
  userRepo = new UserRepository(allUsers);
  currentUser = userRepo.userData[randomUser()];
  userFirstName.innerText = `Hello, ${currentUser.returnUserFirstName()}!`;
  activityInfo = new Activity(activityData);
  hydrationInfo = new Hydration(hydrationData);
  sleepInfo = new Sleep(sleepData);
  today = activityInfo.returnLatestDate();
  currentDate.value = today.replaceAll("/", "-");
  generatePageDisplay();
};

const generatePageDisplay = () => {
  thisWeeksDates = activityInfo.findWeeklyActivityCounts(currentUser.id, today, 'date');
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
  });
};


const showUserInfo = () => {
  const userFriends = currentUser.friends.map(friend => {
    const userFriend = userRepo.findUser(friend);
    return userFriend.name;
  });
  let userFriendsDisplay = document.querySelector('.user-info__friends');
  userFriendsDisplay.innerText = "FRIENDS";
  userInfoDisplay.innerHTML = `<li class="user-info__stride-length">Stride: ${currentUser.strideLength} feet </li>
  <li class="user-info__step-goal">Daily Step Goal: ${currentUser.dailyStepGoal}</li>
  <li class="user-info__average-step-goal">Average Daily Step Goal: ${userRepo.calculateAverageStepGoal()}</li>
  `;
  userFriendsDisplay = printList(userFriendsDisplay, userFriends);
};

const showActivityInfo = () => {
  const currentUserActivity = activityInfo.filterDataByUser(currentUser.id);
  const currentUserCurrentActivity = activityInfo.findDataByDate(today, currentUserActivity);
  const averageUserSteps = activityInfo.findAllUsersAverageByDate(today, 'numSteps');
  const averageUserMinutes = activityInfo.findAllUsersAverageByDate(today, 'minutesActive');
  const userWeeklySteps = activityInfo.findWeeklyActivityCounts(currentUser.id, today, 'numSteps');
  const userWeeklyStairs = activityInfo.findWeeklyActivityCounts(currentUser.id, today, 'flightsOfStairs');
  const userWeeklyMinutes = activityInfo.findWeeklyActivityCounts(currentUser.id, today, 'minutesActive');
  activityCurrentSteps.innerText = `${currentUserCurrentActivity.numSteps} steps`;
  activityCurrentMinutes.innerText = `${currentUserCurrentActivity.minutesActive} minutes`;
  activityCurrentMiles.innerText = `${activityInfo.calculateMiles(currentUser.id, today, userRepo)} miles`;
  activityAverageSteps.innerText = `${averageUserSteps} steps`;
  activityAverageMinutes.innerText = `${averageUserMinutes} minutes`;
  let activityWeekSteps = document.querySelector('.activity__week-steps');
  let activityWeekStairs = document.querySelector('.activity__week-stairs');
  let activityWeekMinutes = document.querySelector('.activity__week-minutes');
  let activityWeekDates = document.querySelector('.activity__week-dates');
  activityWeekSteps.innerText = "Steps";
  activityWeekStairs.innerText = "Flights of Stairs";
  activityWeekMinutes.innerText = "Minutes";
  activityWeekDates.innerText = "Dates";
  activityWeekDates = printList(activityWeekDates, thisWeeksDates);
  activityWeekSteps = printList(activityWeekSteps, userWeeklySteps);
  activityWeekStairs = printList(activityWeekStairs, userWeeklyStairs);
  activityWeekMinutes = printList(activityWeekMinutes, userWeeklyMinutes);
}

const showHydrationInfo = () => {
  const currentUserHydration = hydrationInfo.findDailyWaterIntake(currentUser.id, today);
  const userWeeklyDrank = hydrationInfo.findWeeklyHydrationCounts(currentUser.id, today, 'numOunces');
  let hydrationWeek = document.querySelector('.hydration__week-list');
  let hydrationWeekDates = document.querySelector('.hydration__week-dates');
  hydrationWeekDates.innerText = "Dates";
  hydrationWeek.innerText = "You Drank";
  hydrationCurrentCount.innerText = currentUserHydration;
  hydrationDate.innerText = `on ${today}`;
  hydrationWeek = printList(hydrationWeek, userWeeklyDrank);
  hydrationWeekDates = printList(hydrationWeekDates, thisWeeksDates);
}

const showSleepInfo = () => {
  const currentSleepHours = sleepInfo.returnDailySleepData(currentUser.id, today, 'hoursSlept');
  const currentSleepQuality = sleepInfo.returnDailySleepData(currentUser.id, today, 'sleepQuality');
  const weeklySleepHours = sleepInfo.findWeeklySleepCounts(currentUser.id, today, 'hoursSlept');
  const weeklySleepQuality = sleepInfo.findWeeklySleepCounts(currentUser.id, today, 'sleepQuality');
  const hoursAverage = sleepInfo.calculateUserDataAverage(currentUser.id, 'hoursSlept', sleepInfo.sleepData);
  const qualityAverage = sleepInfo.calculateUserDataAverage(currentUser.id, 'sleepQuality', sleepInfo.sleepData);
  sleepCurrentHours.innerText = `${currentSleepHours} hours`;
  sleepCurrentQuality.innerText = `${currentSleepQuality} quality`;
  let sleepWeekHours = document.querySelector('.sleep__week-hours');
  let sleepWeekQuality = document.querySelector('.sleep__week-quality');
  let sleepWeekDates = document.querySelector('.sleep__week-dates');
  sleepWeekDates.innerText = "Dates";
  sleepWeekHours.innerText = "Hours";
  sleepWeekQuality.innerText = "Quality";
  sleepWeekDates = printList(sleepWeekDates, thisWeeksDates);
  sleepWeekHours = printList(sleepWeekHours, weeklySleepHours);
  sleepWeekQuality = printList(sleepWeekQuality, weeklySleepQuality);
  sleepAveragesHours.innerText = `${hoursAverage} hours`;
  sleepAverageQuality.innerText = `${qualityAverage} quality`;
};

const selectDate = () => {
  today = currentDate.value.replaceAll("-", "/");
  generatePageDisplay();
};

window.onload = pageLoad();
dateButton.addEventListener('click', selectDate);