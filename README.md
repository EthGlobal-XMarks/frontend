## Description
- The frontend architecture that helps the user interact with the game.

### Frontend / Game Client :-
* Core Functions 
   - *submitCoordinate* : Submits the guessed co-ordinates to the smart-contract, processes the transaction, and updates the user's guess count. 
   - *handleGlobeClick* : records the guess of the user on double click on the same location under 300 ms or times-out.
   - *fetchPastGames* : Retrieves details of all past games from the smartcontract and displays to the user.
   - *fetchCurrentGameData* : Fetches current game details, including image, total guesses, user's guesses, and verification status, to use for the current game details 
   - *fetchProfileData* : Queries and displays an user's winning games from the smartcontract. 

* WorldCoin Integration
  - The app seamlessly integrates Worldcoin's IDKit for secure and privacy-preserving user verification, ensuring we reward genuinity by utilizing WorldCoins genuine userbase and fairly giving an edge of extra chances to enter their guess 3 times while a normal user just gets a single guess.


* Dynamic Integration
    - Integrates Dynamic's SDK to enhance user onboarding with a seamless, authenticated, frictionless wallet connection experience for all kinds of users and further enhancing their gaming-experience while abstracting the complexities of crypto.
