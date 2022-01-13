// Imports.
import Personnage from './class/Personnage.js'
import Archer from './class/Archer.js'
import Magician from './class/Magician.js'
import Warrior from './class/Warrior.js'
import Assasin from './class/Assasin.js'

let oli = new Personnage('Oli')
let hanzo = new Archer('Hanzo', undefined, 100, 50, 2, 10, 7, 20, 1)
let muradin = new Warrior('Muradin', undefined, 200, 50, 4, 15, 5, 10, 1)
let orphea = new Magician('Orphea', undefined, 75, 100, 1, 5, 4, 35, 1)
let zeratul = new Assasin('Zeratul', undefined, 100, 60, 3, 12, 10, 17, 1)

console.log(oli)
console.log(hanzo)
console.log(muradin)
console.log(orphea)
console.log(zeratul)