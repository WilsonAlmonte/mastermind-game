# Mastermind game

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### To run the unit tests
```
npm run test:unit
```
## Important terms

1. Code: The color combination you have to guess
2. Guess: The color combination that you build in order to try to guess the "Code"

## To play the game

1. Select a color from the bottom of the gamesquare:

![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/1.png?raw=true)

    Click on one of the options,
    Now you should have a 'Selected' label with the color you've selected behind

![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/2.png?raw=true)

2. Fill the row with your guess (color combination): 

    2.A Once you have a color selected click into the dark circle and it will be filled with this color

![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/3.png?raw=true)

    2.B Repeat 2.A step to fill the whole row, now you should see "Try" button

![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/4.png?raw=true)
    
3. Click "Try" button to make your guess, you'll receive the results for your guess (red for color and position and white for color only)

![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/5.png?raw=true)

4. Repeat the from 1 to 3 steps until 
    You win: guessing all the colors and positions.
    You lose: spending all the attempts you have (8)

5. After these steps you should receive:

If you lost:
![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/6.png?raw=true)

If you won:
![alt text](https://github.com/WilsonAlmonte/mastermind-game/blob/main/steps-to-play/7.png?raw=true)


## Game Options

1. Restart the game: It should restart the whole game, with ampty guesses and a new Code

2. Difficulty: You can switch the difficulty of the game between Normal (Code length: 4) and Hard (Code length: 6)

3. Allow Duplications: It enables or disables color duplications in the Code 

4. Surrender: you can surrender anytime you want to, it deffers from just restart because with surrender you can see the Code. You should receive an alert like if you lost

## More info
If you need more info about this game [click here](https://en.wikipedia.org/wiki/Mastermind_(board_game)) 
