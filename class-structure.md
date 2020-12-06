Classes: 
- ```UserRepository```
- ```User```
- ```Hydration```
- ```Sleep```
- ```Activity```

```UserRepository``` will hold all ```User``` data and ```calculateAverageSteps()``` of all users.

```User``` will take in a ```userData``` object and ```returnUserFirstName()```.

```Hydration``` will take in ```hydrationData``` object and
- ```calculateAverageWaterIntake()``` by calculating the average number of fluid ounces consumed over all time (or apply specific amount of time), and 
- ```calculateDailyWaterIntake(date)``` by calculating the total number of fluid ounces consumed on a specific date. 
- ```calculateWeeklyWaterIntake(date)``` by calculating the total number of fluid ounces taken in over a week.

```Sleep``` take in ```sleepData``` object and
- ```calculateAverageHoursSlept()``` by calculating the average number of hours slept per day.
- ```calculateAverageSleepQuality()``` by calculating the average quality of sleep over a given period of time (all time).
- ```returnHoursSlept()``` will return the hours slept on a specific day
- ```returnSleepQuality()``` will return quality of sleep from a specific date.
- ```calculateWeeklySleepHourAverage(user)``` will calculate the average number of hours slept nightly over the course of a week.
- ```calculateWeeklySleepQualityAverage(user)``` will calculate the average quality of nightly sleep over the course of a week.
- ```calculateSleepQualityAverage()``` will calculate the average sleep quality for all users.
- ```findBestQualitySleepers()``` return all users who have a sleep quality greater than 3 over a week.
- ```findLongestNightlySleeper()``` return the user who slept the most hours given a specific date (or more if they tied).

```Activity``` will take in ```activityData``` object and
- ```calculateMiles()``` will calculate the number of miles moved base on the number of steps and ```strideLength```
- ```returnDailyActiveMinutes(date)``` will return number of minutes active on a given date.
- ```calculateWeeklyAverageActiveMinutes()``` calculate the average number of active minutes given a week.
- ```calculateStepGoalSuccess(date)``` calculate whether or not the user achieved their step goal given user's goal, steps achieved, date.
- ```returnSuccessFullStepDates()``` return an array of successful step goal days.
- ```findStairclimbingRecord()``` return the greatest number of flights of stairs climbed in one day.
- for ALL users:
 - ```calculateAverageStairs(date)``` calculate the average number of stairs climbed by all users on a given date.
 - ```calculateAverageSteps(date)``` calculate the average number of steps taken by all users given a specific date.
 - ```calculateAverageActivity(date)``` calculate the average number of active minutes for all users on a specific date.
