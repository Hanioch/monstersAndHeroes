import Personnage from "./Personnage.js";

class Archer extends Personnage {

    constructor(name, hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    {
        super(name, hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    }
    
}

export default Archer