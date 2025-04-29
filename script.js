console.log("Rock, Paper, Scissors");

//getcomputerchoice va a elegir aleatoriamente entre las opciones del juego
//math.random() da un número aleatorio entre 0 y 1
//math.random() * 3 da un número entre 0 y 3
//puede salir entre 0,1 o 2
function getComputerChoice() {
const randomNum = Math.floor(Math.random() * 3);

//ahora aqui dependiendo del numero que salio estos son los personajes lol  
//0= piedra  1= papel   2= tijeras
if (randomNum === 0) {
return "rock";} 
else if (randomNum === 1) {
return "paper"; } 
else {
return "scissors"; }    
}
// ahora cada vez q se llame a esta funcion te dara una de estas opciones al azar

// ahora aqui es lo mismo que la eleccion de la computadora pero ahora con la persona, usando el ghethumanchoice
//aqui se abre un prompt q va a preguntar a la persona que eleccion quiere
//y el tolowercase es para escribir todo en minuscula, por si el usuario escribe todo en mayuscula o mayucula convinado con minuscula
//tambien se puede usar el touppercase para hacer lo mismo pero con mayus
function getHumanChoice() {
let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();

//El while se usa para empezar un bucle, se usara en repeticion hasta que el usuario escoga la opcion correcta en el caso que lo escriba mal y repetira que eliga las 3 opciones hasta que escoja bien
while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
choice = prompt("Invalid choice! Please choose rock, paper, or scissors:").toLowerCase();
}

//y al final devolvera lo que elegiste  si todo salio bine
return choice;
}

//aqui estya opcion hara dos cosas, mostrara lo que eligio el jugador y lo que eligio la computadora, obviamente se mostraran solo en la consola
function playRound(humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();  
console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);

//y qui muestra lo mismo pero ahora dice que si las 2 opciones coinciden entonces es un empate
if (humanChoice === computerChoice) {
console.log("Its a tie");
return "tie"; }

//reglas del juego, piedra gana a tijeras, papel a piedra y tijeras a papel
if (
(humanChoice === "rock" && computerChoice === "scissors") ||
(humanChoice === "paper" && computerChoice === "rock") ||
(humanChoice === "scissors" && computerChoice === "paper")
) {
    //si ganas devuelve human
console.log(`You win! ${humanChoice} beats ${computerChoice}`);
return "human";
} 
    // si pierdes devuelve computer
else {
console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
return "computer";
    }
}
// el juego inica con jugadores en 0 
function playGame() {
let humanScore = 0;
let computerScore = 0;

//este bucle for va a repetir 5  veces pa que se juegen 5 rondas
for (let round = 1; round <= 5; round++) {
console.log(`Round ${round}`);

//aqui la funcion pedira la jugada y luego la comparara y finalmente muestra quien de los 2 gano la ronda
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
const result = playRound(humanChoice, computerChoice);

//aqui se miesra que si el resultado es human se va a sumar la puntuacion, lo mismo con computer
//y al final se imprime en la consola la puntuacion que llevan al momento de la ronda
if (result === "human") {
humanScore++; } 
else if (result === "computer") {
computerScore++;
    }
console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    }

//despues de las 5 rondas dichas  muestra el resultado final diciendo no mas rondas  y aparte dando la puntuacion acumulada en las rondas
console.log("No more ROUNDS");
console.log(`You: ${humanScore} | Computer: ${computerScore}`);

//y finalmente  muestra si ganaste perdiste o empataste  usando los mayor y menor que
if (humanScore > computerScore) {
console.log("You WON the game");
} else if (computerScore > humanScore) {
console.log("You Lose the game"); } 
else {
console.log("Its a Tie!, Play again to break the tie");
}
}

// por ultimo esta accion activba todo el juego sin esta madre solo es una pagina en blanco
playGame();