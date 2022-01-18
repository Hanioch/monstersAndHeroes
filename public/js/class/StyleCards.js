import Game from "./Game.js";
class StyleCard {
  createCard = (character, type) => {
    const { name, role, hp, mana, atk, atkSpell, armor, armorSpell, lvl } =
      character;
    let html = "";

    html += `<div class="${type}-card inactive-${type}" id="${name}">`;
    html += `<div class="bar"><progress id="hpBar" max="100" value="100" data-label="${hp}"> ${hp} </progress><br>`;
    html += `<progress id="manaBar" max="100" value="100" data-label="${mana}" data-manaMax="${mana}"> ${mana} </progress></div>`;
    html += `<img src="./public/img/${name.toLowerCase()}.jpg" alt="${name} portrait">`;
    html += `<div class="${type}-name">${name}</div>`;
    html += `<div class="hero-role">${role}</div>`;
    html += `<div class="hero-hp">hp : ${hp}</div>`;
    html += `<div class="hero-mana">mana : ${mana}</div>`;
    html += `<div class="hero-atk">attack : ${atk}</div>`;
    html += `<div class="hero-atk">attack spell : ${atkSpell}</div>`;
    html += `<div class="hero-armor">armor : ${armor}</div>`;
    html += `<div class="hero-armor">armor Spell : ${armorSpell}</div>`;
    html += `<div class="hero-armor">level : ${lvl}</div>`;
    html += `</div>`;

    return html;
  };

  createCardForFight = (character, type, enemy) => {
    const game = new Game();

    const elem = this.createCard(character, "in-game");
    const divElem = document.createElement("div");
    const titleHp = document.createElement("h3");
    const hpValue = document.createElement("span");
    const divBtn = document.createElement("div");
    const btnAtk = document.createElement("button");
    const btnAtkSpe = document.createElement("button");

    divBtn.classList.add("button-atq");
    btnAtk.innerHTML = "Attack";
    btnAtk.setAttribute("id", `button-atk-${type}`);
    btnAtk.addEventListener("click", () => {
      game.doAtk("atk", character, enemy);
    });
    btnAtkSpe.innerHTML = "Attack Spe";
    btnAtkSpe.setAttribute("id", `button-atk-spe-${type}`);
    btnAtkSpe.addEventListener("click", () => {
      game.doAtk("atkSpe", character, enemy);
    });

    if (type === "monster") {
      btnAtk.setAttribute("disabled", true);
      btnAtkSpe.setAttribute("disabled", true);
    }

    hpValue.setAttribute("id", `hp-${type}`);

    hpValue.innerHTML = character.hp;
    //titleHp.innerHTML = `HP : `;
    //document.querySelector(".bar").style.display = 'block';    

    titleHp.appendChild(hpValue);
    divBtn.appendChild(btnAtk);
    divBtn.appendChild(btnAtkSpe);

    divElem.innerHTML = elem;
    divElem.insertBefore(titleHp, divElem.firstChild);
    divElem.appendChild(divBtn);

    return divElem;
  };
}

export default StyleCard;
