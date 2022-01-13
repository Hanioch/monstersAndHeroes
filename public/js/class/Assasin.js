import Personnage from "./Personnage.js"

class Assasin extends Personnage {

    constructor(name, role = 'Assasin', hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    {
        super(name, role, hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    }

}

export default Assasin