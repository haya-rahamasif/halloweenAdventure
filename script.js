function startGame() {
    let name = prompt("What is your name?")
    alert("Welcome to the Haunted House Choose-Your-Own-Adventure Game! Follow the instructions exactly to ensure your safe escape!")

    let userChoice = prompt("You walk through the door and BAM it slams shut, locking you inside. You must now find another escape, do you (1) go upstairs or (2) go into the basement?")
    if (userChoice == "1") {
        console.log("upstairs")
    } else  if (userChoice == "2") {
        console.log("basement")
    }
}

startGame()