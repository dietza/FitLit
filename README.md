# FitLit
## Overview

### Features

## Technologies
FitLit was built using JavaScript on an HTML framework with CSS styling.

## Architecture

The JavaScript is handled by six file: ```scripts.js```, ```Users.js```, ```UserRepository.js```, ```Hydration.js```, ```Sleep.js```, and ```Activity.js```
  * ```scripts.js``` handles all DOM manipulation, and also houses all querySelectors and event listeners. Any time something changes visually on the page, that is handled by functions within ```scripts.js```. This separation prevents the DOM from being manipulated by methods that are meant to update data, and vice versa.
  * ```Users.js``` instantiates a User class, and uses the associated methods to find date that corresponds with the User.
  * ```UserRepository.js``` uses a class constructor to instantiate a repository class. It also stores and retrieves the data associated with each user.
  * The remaining three classes house all of the methods required for retrieving the data that corresponds with each class.

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

Challenges:
 - Using CSS grid to create a responsive site that adjusts to different screen sizes.
 - Writing DRY js when dealing with DOM or data for each class of data type.
 - Using media queries after having built the site for mobile, and maintaining the styling.

## Images
