const startGame = () => {
  let play = prompt('Do you want to play?');
  let name;
  if (play === 'yes') {
    name = prompt('Enter your username.')
    startCombat(play, name);
  } else if (play === 'no') {
    console.log('GOODBYE!')
  }
};

const getDamage = () => {
  return Math.floor(Math.random() * 5) + 1;
};

const startCombat = (play, name) => {
  let grantHealth = 10;
  let playerHealth = 40;
  let userWins = 0;

  while (play === 'yes') {
    const action = prompt('Would you like to "attack" or "quit"?')
    if (action === 'attack') {
      if (grantHealth <= 0) {
        userWins++;
        grantHealth = 10;
        if (userWins === 3) {
          console.log(`${name} WINS!`);
          break;
        } else {
          console.log(`${name} has beaten Grant! ${name} must win ${3 - userWins} more time(s).`);
        }
      }
      if (playerHealth <= 0) {
        console.log('GRANT WINS.');
        break;
      }

      playerHealth -= getDamage();
      grantHealth -= getDamage();
      console.log(`${name} has ${playerHealth} health point(s) left.`);
      console.log(`Grant the Might Chicken has ${grantHealth} health point(s)left.`);
    } else if (action === 'quit') {
      console.log('GAME OVER!');
      break;
    }
  }
};

startGame();