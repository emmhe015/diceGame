

# READ ME
### Dice game

![Dice game](assets/images/screenshotDiceGame.png)

## Overview
This Dice Game is a simple web-based game driven by JavaScript. Two players can take turns rolling a dice, and the score for each player is tracked. The game provides a visual representation of the dice rolls and updates the scores dynamically.


## Features
- **Header:** The header displays a dynamic message indicating which player is currently winning or if there is a tie. This is updated in real-time based on the scores.
- **Images:** Each player has a dice image that changes to reflect the result of their dice roll. The images are updated dynamically through JavaScript.
- **Player Labels:** Clear labels indicate which dice belongs to Player 1 and Player 2.  

### Testing
When I first inserted the images, they didn't show at the page. I fixed it by adding "assets" in the variabel randomImageSource.

### Functionality Testing
The following table summarizes the testing of the main functionalities of the Dice Game:

| Functionality             | Expected Outcome                                | Result          |
|---------------------------|--------------------------------------------------|-----------------|
| Dice roll for Player 1    | Dice image updates to a random number            | Pass            |
| Dice roll for Player 2    | Dice image updates to a random number            | Pass            |
| Score update for Player 1 | Player 1's score increases by the rolled number  | Pass            |
| Score update for Player 2 | Player 2's score increases by the rolled number  | Pass            |
| Header update             | Displays the correct game status                 | Pass            |


- **HTML test**, [v3 validator](https://validator.w3.org/nu/) got following result;
![html testing](assets/images/htmlTestingError.png)
Fixed the errors and got this result;
![html testing clear](assets/images/htmlClear.png)

- **CSS testing** [W3C CSS validator](https://jigsaw.w3.org/css-validator/) 
got this result;
  - Error with google font link (not working)
  Got a new link, and got this result;
  ![CSS testing clear](assets/images/cssClear.png)

- **Javascript Testing** [JShint](https://jshint.com/)
  - No errors 

- **Lighthouse testing**
![Lighthouse test](assets/images/lighthouseTesting.png)

### Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

### Credits
- The structure to the overall code and the dice images are from a course on [Udemy](https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=KEEPLEARNING)
- The text from the Deployment section is from [This README example](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md)