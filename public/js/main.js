// Imports.
import Archer from "./class/Archer.js"
import Assasin from "./class/Assasin.js"
import Magician from "./class/Magician.js"
import Warrior from "./class/Warrior.js"
import Monstre from "./class/Monster.js"
import Game from "./class/Game.js"

// Create heroes.
const hanzo = new Archer("Hanzo")
const muradin = new Warrior("Muradin")
const orphea = new Magician("Orphea")
const qhira = new Assasin("Qhira")

// Create monsters.
const garrosh = new Monstre('Garrosh')
const guldan = new Monstre('Guldan')
const butcher = new Monstre('Butcher')
const deathwing = new Monstre('Deathwing')

// Add heroes and monsters to array.
const heroes = [hanzo, muradin, orphea, qhira]
const monsters = [garrosh, guldan, butcher, deathwing]

hanzo.attackSpell(garrosh)
garrosh.attack(hanzo)

console.log(heroes, monsters)

// Variable to insert into HTML.
let htmlHeroes = ''
let htmlMonsters = ''

for (const hero of heroes) {
  htmlHeroes += `<div class="hero-card" data-hero="${hero.name}">`;
  htmlHeroes += `<img src="./public/img/${hero.name.toLowerCase()}.jpg" alt="${hero.name} portrait">`
  htmlHeroes += `<div class="hero-name">${hero.name}</div>`
  htmlHeroes += `<div class="hero-role">${hero.role}</div>`
  htmlHeroes += `<div class="hero-hp">hp : ${hero.hp}</div>`
  htmlHeroes += `<div class="hero-mana">mana : ${hero.mana}</div>`
  htmlHeroes += `<div class="hero-atk">attack : ${hero.atk}</div>`
  htmlHeroes += `<div class="hero-atk">attack spell : ${hero.atkSpell}</div>`
  htmlHeroes += `<div class="hero-armor">armor : ${hero.armor}</div>`
  htmlHeroes += `<div class="hero-armor">armor Spell : ${hero.armorSpell}</div>`
  htmlHeroes += `<div class="hero-armor">level : ${hero.lvl}</div>`
  htmlHeroes += `</div>`
}

for (const monster of monsters) {
  htmlMonsters += `<div class="monster-card">`;
  htmlMonsters += `<img src="./public/img/${monster.name.toLowerCase()}.jpg" alt="${monster.name} portrait">`
  htmlMonsters += `<div class="monster-name">${monster.name}</div>`
  htmlMonsters += `<div class="monster-role">${monster.role}</div>`
  htmlMonsters += `<div class="monster-hp">hp : ${monster.hp}</div>`
  htmlMonsters += `<div class="monster-mana">mana : ${monster.mana}</div>`
  htmlMonsters += `<div class="monster-atk">attack : ${monster.atk}</div>`
  htmlMonsters += `<div class="monster-atk">attack spell : ${monster.atkSpell}</div>`
  htmlMonsters += `<div class="monster-armor">armor : ${monster.armor}</div>`
  htmlMonsters += `<div class="monster-armor">armor Spell : ${monster.armorSpell}</div>`
  htmlMonsters += `<div class="monster-armor">level : ${monster.lvl}</div>`
  htmlMonsters += `</div>`
}

// Selector.
const heroesElem = document.querySelector('#heroes')
const monstersElem = document.querySelector('#monsters')

// Insert heroes cards into HTML element.
heroesElem.innerHTML = htmlHeroes
monstersElem.innerHTML = htmlMonsters

const heroesCardsElem = document.querySelectorAll('#heroes .hero-card')
const selectElem = document.querySelector('#buttonChoice')

// For all Heroes Cards.
for (const heroCard of heroesCardsElem) {
  // On Hero Card click.
  heroCard.addEventListener('click', function(e) {

    for (const item of heroesCardsElem) {
      // Remove all 'is-selected' classes.
      item.classList.remove('is-selected')
    }
    // Add 'is-selected' class.
    this.classList.toggle('is-selected')
    // Enable select button.
    selectElem.removeAttribute('disabled')
  })
}


selectElem.addEventListener('click', function(e) {
  new Game()
})