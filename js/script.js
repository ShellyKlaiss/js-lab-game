
const startFight = () => {
    let play = prompt("Do you want to start?");
    let name;
    if (play === "yes") {
      name = prompt("Enter your name")
      startBattle(play, name);
    } else if (play === "no") {
      console.log("GOODBYE.")
    }
  };
  
 
  const reduceHealth = () => {
    return Math.floor(Math.random() * 5) + 1;
  };
  
  const startBattle = (play, name) => {
    let grantHealth = 10;
    let playerHealth = 40;
    let userWins = 0;
  
    while (play === "yes") {
      if (grantHealth <= 0) {
        userWins++;
        grantHealth = 10;
        if (userWins === 3) {
          console.log(`${name} WINS!`);
          break;
        } else {
          console.log(`${name} has beaten Grant. ${name} must win ${3 - userWins} more time(s).`);
        }
      }
      if (playerHealth <= 0) {
        console.log("GRANT WINS.");
        break;
      }
  
      playerHealth -= reduceHealth();
      grantHealth -= reduceHealth();
      console.log(`${name} was attacked. ${name} has ${playerHealth} health points left.`);
      console.log(`Grant was attacked. Grant has ${grantHealth} health points left.`);
    }
  };
  
  startFight();