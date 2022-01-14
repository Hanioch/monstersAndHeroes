// Imports.
import Personnage from './class/Personnage.js'
import Archer from './class/Archer.js'
import Magician from './class/Magician.js'
import Warrior from './class/Warrior.js'
import Assasin from './class/Assasin.js'

// Default personnage test.
let oli = new Personnage('Oli')
console.log(oli)

// Create heroes.
let hanzo = new Archer('Hanzo', undefined, 100, 50, 2, 10, 7, 20, 1)
let muradin = new Warrior('Muradin', undefined, 200, 50, 4, 15, 5, 10, 1)
let orphea = new Magician('Orphea', undefined, 75, 100, 1, 5, 4, 35, 1)
let zeratul = new Assasin('Zeratul', undefined, 100, 60, 3, 12, 10, 17, 1)

// Add heroes to array.
let heroes = [hanzo, muradin, orphea, zeratul]

// Variable to insert into HTML.
let html = ''

for (const hero of heroes) {
    console.log(hero)
        html += `<div class="hero-card">`
        html += `<img src="./public/img/${hero.name.toLowerCase()}.jpg" alt="${hero.name} portrait">`
        html += `<div class="hero-name">${hero.name}</div>`
        html += `<div class="hero-role">${hero.role}</div>`
        html += `<div class="hero-hp">hp : ${hero.hp}</div>`
        html += `<div class="hero-mana">mana : ${hero.mana}</div>`
        html += `<div class="hero-atk">attack : ${hero.atk}</div>`
        html += `<div class="hero-atk">attack spell : ${hero.atkSpell}</div>`
        html += `<div class="hero-armor">armor : ${hero.armor}</div>`
        html += `<div class="hero-armor">armor Spell : ${hero.armorSpell}</div>`
        html += `<div class="hero-armor">level : ${hero.lvl}</div>`
        html += `</div>`
}

// Select Element.
const heroesElem = document.querySelector('#heroes')
// Insert heroes cards into HTML element.
heroesElem.innerHTML = html
