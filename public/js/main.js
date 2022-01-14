// Imports.
import Personnage from "./class/Personnage.js";
import Archer from "./class/Archer.js";
import Magician from "./class/Magician.js";
import Warrior from "./class/Warrior.js";
import Assasin from "./class/Assasin.js";
import Monster from "./class/Monster.js";
import SubmitHero from "./class/SubmitHero.js";

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
let html = "";
let htmlMonster = "";

for (const hero of heroes) {
  console.log(hero);
  const { name, role, hp, mana, atk, atkSpell, armor, armorSpell, lvl } = hero;

  html += `<div class="hero-card inactive" id='${name}' >`;
  html += `<img src="./public/img/${name.toLowerCase()}.jpg" alt="${name} portrait">`;
  html += `<div class="hero-name">${name}</div>`;
  html += `<div class="hero-role">${role}</div>`;
  html += `<div class="hero-hp">hp : ${hp}</div>`;
  html += `<div class="hero-mana">mana : ${mana}</div>`;
  html += `<div class="hero-atk">attack : ${atk}</div>`;
  html += `<div class="hero-atk">attack spell : ${atkSpell}</div>`;
  html += `<div class="hero-armor">armor : ${armor}</div>`;
  html += `<div class="hero-armor">armor Spell : ${armorSpell}</div>`;
  html += `<div class="hero-armor">level : ${lvl}</div>`;
  html += `</div>`;
}

for (const monster of monsters) {
  const { name, role, hp, mana, atk, atkSpell, armor, armorSpell, lvl } =
    monster;

  htmlMonster += `<div class="monster-card inactive-monster" id="${monster.name}">`;
  htmlMonster += `<img src="./public/img/${role.toLowerCase()}.jpg" alt="${name} portrait">`;
  htmlMonster += `<div class="monster-name">${name}</div>`;
  htmlMonster += `<div class="hero-role">${role}</div>`;
  htmlMonster += `<div class="hero-hp">hp : ${hp}</div>`;
  htmlMonster += `<div class="hero-mana">mana : ${mana}</div>`;
  htmlMonster += `<div class="hero-atk">attack : ${atk}</div>`;
  htmlMonster += `<div class="hero-atk">attack spell : ${atkSpell}</div>`;
  htmlMonster += `<div class="hero-armor">armor : ${armor}</div>`;
  htmlMonster += `<div class="hero-armor">armor Spell : ${armorSpell}</div>`;
  htmlMonster += `<div class="hero-armor">level : ${lvl}</div>`;
  htmlMonster += `</div>`;
}

// Select Element.
const heroesElem = document.querySelector("#heroes");
const monsterElem = document.querySelector("#monsters");

// Insert heroes cards into HTML element.
heroesElem.innerHTML = html;
monsterElem.innerHTML = htmlMonster;

// addEvent SElect HEro / submit Hero
const submitHero = new SubmitHero();

const buttonChoice = document.querySelector("#buttonChoice");
let listHeroes = document.querySelectorAll(".hero-card");

listHeroes.forEach((elem) => {
  elem.addEventListener("click", () => {
    submitHero.selectHero(heroes, elem.id);
    buttonChoice.removeAttribute("disabled");
  });
});

buttonChoice.addEventListener("click", () => {
  submitHero.selectRandomMonster(monsters);
});
