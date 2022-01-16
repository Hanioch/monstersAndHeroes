class StyleCard {
  createCard = (character, type) => {
    const { name, role, hp, mana, atk, atkSpell, armor, armorSpell, lvl } =
      character;
    let html = "";

    html += `<div class="${type}-card inactive-${type}" id="${name}">`;
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
}

export default StyleCard;
