// Imports.
import Personnage from "./class/Personnage.js";
import Archer from "./class/Archer.js";
import Magician from "./class/Magician.js";
import Warrior from "./class/Warrior.js";
import Assasin from "./class/Assasin.js";
import Monster from "./class/Monster.js";
import SubmitHero from "./class/SubmitHero.js";
import Game from "./class/Game.js";
import StyleCard from "./class/StyleCards.js";
const styleCard = new StyleCard();

// Default personnage test.
let oli = new Personnage("Oli");
console.log(oli);

//Default Monster
const levelHero = 1; // va etre changer par le niveau du hero selectioner (complement de l'amelioration 1)
const monsterClasse = new Monster(levelHero);

// Create heroes.
let hanzo = new Archer("Hanzo", undefined, 100, 50, 2, 10, 7, 20, 1);
let muradin = new Warrior("Muradin", undefined, 200, 50, 4, 15, 5, 10, 1);
let orphea = new Magician("Orphea", undefined, 75, 100, 1, 5, 4, 35, 1);
let zeratul = new Assasin("Zeratul", undefined, 100, 60, 3, 12, 10, 17, 1);

//Create Monsters
const monster1 = monsterClasse.generateMonster("Hades");
const monster2 = monsterClasse.generateMonster("Julien");
const monster3 = monsterClasse.generateMonster("Monstre3");
const monster4 = monsterClasse.generateMonster("Méchant");

// Add heroes and Monsters to array.
let heroes = [hanzo, muradin, orphea, zeratul];
const monsters = [monster1, monster2, monster3, monster4];

// Variable to insert into HTML.
let htmlHeroes = "";
let htmlMonster = "";

for (const hero of heroes) {
  htmlHeroes += styleCard.createCard(hero, "hero");
}

for (const monster of monsters) {
  htmlMonster += styleCard.createCard(monster, "monster");
}

// Select Element.
const heroesElem = document.querySelector("#heroes");
const monsterElem = document.querySelector("#monsters");

// Insert heroes cards into HTML element.
heroesElem.innerHTML = htmlHeroes;
monsterElem.innerHTML = htmlMonster;

// addEvent SElect HEro / submit Hero
const submitHero = new SubmitHero();
const game = new Game();

const buttonChoice = document.querySelector("#buttonChoice");
let listHeroes = document.querySelectorAll(".hero-card");

listHeroes.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (!submitHero.isLoading) {
      submitHero.selectHero(heroes, elem.id);
      buttonChoice.removeAttribute("disabled");
    }
  });
});

buttonChoice.addEventListener("click", () => {
  buttonChoice.setAttribute("disabled", true);
  submitHero.selectRandomMonster(monsters);
});
