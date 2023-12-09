let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

const choreDoorPath = "chore_door.jpg";
const closedDoorPath = "closed_door.jpg";

const randomChoreGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0) {
        openDoor1 = choreDoorPath;
        openDoor2 = closedDoorPath;
        openDoor3 = closedDoorPath;
    } else if(choreDoor === 1) {
        openDoor2 = choreDoorPath;
        openDoor1 = closedDoorPath;
        openDoor3 = closedDoorPath;
    } else {
        openDoor3 = choreDoorPath;
        openDoor1 = closedDoorPath;
        openDoor2 = closedDoorPath;
    }
}

const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    } else if(door === 1 && openDoor1 === choreDoorPath ||
              door === 2 && openDoor2 === choreDoorPath ||
              door === 3 && openDoor3 === choreDoorPath) {
        gameOver();
    }
}

const startGame = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    randomChoreGenerator();
}

const gameOver = (status) => {
    if(status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
}

startGame();
