
// go to the functions and find according result functions based on user decision to see code. e.x. function for entering haunted house will have two options, upstairs or basement, eash option will have an according function.


function startGame() { // main() function of the program, starts function calling chain
    let name = prompt("What is your name?")
    alert(`Welcome, ${name}, to the Haunted House Choose-Your-Own-Adventure Game! Follow the instructions exactly to ensure your safe escape!`)

    let userChoice = prompt("You walk through the door and BAM it slams shut, locking you inside. You must now find another escape, do you (1) go upstairs or (2) go into the basement?")
    if (userChoice == "1") {
        upstairs()
    } else  if (userChoice == "2") {
        basement()
    }
}

function die() { // user dies, gives option to play again
    alert("The ghost of the little girl jumped out and killed you! You are dead.")
    userChoice = confirm("Would you like to play again to try and escape?")
    if (userChoice == true) {
        startGame()
    } else  if (userChoice == false) {
        alert("Thanks for playing!")
    }
}

function userEscape() { // user escapes, gives option to play again
    alert("It led to an escape, you made it out! Good Job!")
    userChoice = confirm("Would you like to play again?")
    if (userChoice == true) {
        startGame()
    } else  if (userChoice == false) {
        alert("Thanks for playing!")
    }
}

function upstairs() { // go to playroom or bedroom 
    userChoice = prompt("When you go upstairs, you see two rooms. Do you go into (1) the playroom or (2) the bedroom")
    if (userChoice == "1") {
        playroom()
    } else  if (userChoice == "2") {
        bedroom()
    }
}

function playroom() { // dies or goes to front door 
    userChoice = prompt("You go into the playroom, you hear a little girl’s voice telling you to sit in the rocking chair. Do you (1) sit in the chair (2) don't listen to the voice?")
    if (userChoice == "1") {
        die()
    } else  if (userChoice == "2") {
        frontDoor()
    }
}

function bedroom() { // leads to basement or die 
    userChoice = prompt("In the bedroom, you see a bloody mirror with what appears to be a shadow standing behind you. Do you (1) smash the mirror or (2) turn around?")
    if (userChoice == "1") {
        alert("The shards form a message, telling you to go to the basement so you go down there.")
        basement()
    } else  if (userChoice == "2") {
        die()
    }
}

function frontDoor() { // leads to kitchen or bedroom 
    userChoice = prompt("The little girl's voice screams at you and you run downstairs to the front door to escape and shake it open but it's locked. You hear a creepy whistle from the kitchen, do you (1) follow it and go into the kitchen or (2) ignore it?")
    if (userChoice == "1") {
        kitchen()
    } else  if (userChoice == "2") {
        alert("You head into the bedroom to try finding escape")
        bedroom()
    }
}

function kitchen() { // uncover the rug or go to the basement 
    userChoice = prompt("The whistling leads to a sound coming from the carpet that seems to be coming from under the ground, do you (1) uncover it or (2) leave it?")
    if (userChoice == "1") {
        uncover()
    } else  if (userChoice == "2") {
        alert("You hear loud creaking from the basement so you go down there.")
        basement()
    }
}

function uncover() { // escape or go to basement 
    userChoice = prompt("You uncover the rug, and there's a cellar door, you open it and see a dimly lit tunnel, do you (1) follow it? or (2) leave it?")
    if (userChoice == "1") {
        userEscape()
    } else  if (userChoice == "2") {
        alert("You hear loud creaking from the basement so you go down there.")
        basement()
    }
}


function basement() { // switch light on or off 
    userChoice = prompt("You go downstairs, do you (1) turn on the basement light or (2) keep it off?")
    if (userChoice == "1") {
        lightOn()
    } else  if (userChoice == "2") {
        lightOff()
    }
}

function lightOn() { // die or solve a riddle 
    userChoice = prompt("You see a closet that looks like its shaking; like somethings inside, do you (1) open it or (2) ignore it?")
    if (userChoice == "1") {
        die()
    } else  if (userChoice == "2") {
        riddle()
    }
}

function lightOff() { // escape or go to front door 
    userChoice = prompt("You feel around the walls until you feel a random doorknob, do you (1) open it or (2) leave it alone?")
    if (userChoice == "1") {
        userEscape()
    } else  if (userChoice == "2") {
        alert("You head back to the front door to find another way to escape.")
        frontDoor()
    }
}

function riddle() { // answer riddle correctly and escape, answer incorrect and die
    userChoice = prompt("A little girls voice echoes in your head, she says 'Answer my riddle and you shall escape, fail to answer and you shall die a slow death. What is hippophobia the fear of? Is it (1) Horses (2) Humpback Whales (3) Hippos' ")
    if (userChoice == "1") {
        userEscape()
    } else  if (userChoice == "2") {
        die()
    }else  if (userChoice == "3") {
        die()
    }
}

