# FitLit
## Overview
FitLit allows users to track their fitness goals, by showing them logged information about their:
- Activity (measured in **steps**, **flights of stairs**, **active minutes**, and **miles**).
- Sleep (measured in **hours**, and **sleep quality**).
- and Hydration (measured in **ounces of water**).

Users are able to view data for a single day, over the course of a week based on a selected day, and compare against the averages of the app's other users.

##### Deployed Page
[FitLit](https://dietza.github.io/FitLit/src/index.html)

## Contributors
- [Allison Dietz](https://github.com/dietza)
- [Drew Bradley](https://github.com/DrewBradley)
- [Heather Faerber](https://github.com/hfaerber) - Code Reviewer (Allison's Mentor)

## Use
![Mobile View](https://media.giphy.com/media/aROQ7apiuwc5hnDzZD/giphy.gif)
![Mobile Calendar](https://media.giphy.com/media/NxVVlURhvBMpEOTQsS/giphy.gif)

![Mobile Calendar](https://media.giphy.com/media/EZz8SoKkNxLimvfaaR/giphy.gif)

## Technologies
FitLit was built using JavaScript on an HTML framework with CSS styling.

## Architecture

The JavaScript is handled by six file: ```scripts.js```, ```Users.js```, ```UserRepository.js```, ```Hydration.js```, ```Sleep.js```, and ```Activity.js```
  * ```scripts.js``` handles all DOM manipulation, and also houses all querySelectors and event listeners. Any time something changes visually on the page, that is handled by functions within ```scripts.js```. This separation prevents the DOM from being manipulated by methods that are meant to update data, and vice versa.
  * ```Users.js``` instantiates user objects from a class constructor, and uses the associated methods to find data that corresponds with the User.
  * ```UserRepository.js``` uses a class constructor to instantiate a repository of user objects. It also stores and retrieves the data associated with each user.
  * The remaining three classes house all of the methods required for retrieving the data that corresponds with each data metric.

## Download
Clone the repository to your local machine:
 - ```git clone git@github.com:dietza/FitLit.git```

Change directories:
 - ```cd FitLit```

 Download any dependencies:
 - ```npm install```

Open ```index.html``` in your browser of choice. 
 - ```open index.html```


## Wins/Challenges
Wins:
 - Building a complete JS network that uses multiple class constructors.
 - Keeping DOM and data model seperated throughout the project.
 - Getting the site to function the way it was expected to.
 - Building the HTML/CSS with "mobile first"
 - Considering accessibility when choosing fonts and color palette.

Challenges:
 - Using CSS grid to create a responsive site that adjusts to different screen sizes.
 - Writing DRY js when dealing with DOM or data for each class of data type.
 - Using media queries after having built the site for mobile, and maintaining the styling.

## Future Iterations
- Add features to increase accessability.
  - Tab indices
  - Aria role tags
- Add parent class from which Activity, Sleep, and Hydration would inherit common methods.
  - Include method to return most recent date available in data (or current date).
- Add inputs to allow a user to post daily data
- Friends challenge
  - Allow a user to view friends' stats and challenge them.
