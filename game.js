var champPick = document.getElementById("champions")
var enemyPick = document.getElementById("enemyChampion")
var enemyHealth = 100
var totalMod = 1

function ItemBuilder (name, modifier, description, img) {
	this.name = name;
	this.modifier = modifier;
    this.description = description;
    this.img = img;
}

var items = {
    attPotion:new ItemBuilder("Attack Potion", 1.5, "A glass bottle with a strange green liquid.",),
    berPotion:new ItemBuilder("Berserker Potion", 2, "A glass bottle with a glowing yellow liquid.",),
    helPotion:new ItemBuilder("Juggernaut Potion", 3, "A glass bottle with a bubbling red liquid.",)
}

var fighter = {
    champion: "Fighter",
    img:"https://vignette.wikia.nocookie.net/fireemblem/images/f/fb/Guy.png/revision/latest/scale-to-width-down/280?cb=20151016051200",
    playerHealth: 100,
    lightWep: "Fists",
    midWep: "Spear",
    heavyWep: "Sword",
    items:[]
}

var wizard = {
    champion: "Wizard",
    img:"https://cdn.gamer-network.net/2014/usgamer/FFXIV-Conjurer.jpg" ,
    playerHealth: 100,
    lightWep: "Fireball",
    midWep: "Ice Spike",
    heavyWep: "Lightning Bolt",
    items:[]
}

var ranger = {
    champion: "Ranger",
    img:"https://www.midgard-community.com/forums/uploads/monthly_2016_06/ranger-alternate-male.png.66beca2f38e34cd8e637c49d041299ea.png",
    playerHealth: 100,
    lightWep: "Poison Dart",
    midWep: "Throwing Knives",
    heavyWep: "Longbow",
    items:[]
}

var ninja = {
    champion: "Ninja",
    img:"https://i.pinimg.com/474x/41/19/58/411958a943d028d83f7856bc536c8faa--female-ninja-ninja-art.jpg",
    playerHealth: 100,
    lightWep: "Kunai",
    midWep: "Grenade",
    heavyWep: "Katanas",
    items:[]
}

var champions = [];
champions.push(fighter, wizard, ranger, ninja);

function drawChamp (playerChoice) {
    var champ = champions[playerChoice];
    
    var template ="";
    
    template = `
    <h1>${champ.champion}</h1>
    <img src='${champ.img}' class="imgFormat"/>
    <p>Champion Health: ${champ.playerHealth}</p>
    <div class="col">
        <div class="btn-group btn-group-vertical button-format">
            <button type="button" class="btn btn-default btn-block" onclick="attack(1)">${champ.lightWep}</button>
            <button type="button" class="btn btn-success btn-block" onclick="attack(3)">${champ.midWep}</button>
            <button type="button" class="btn btn-danger btn-block" onclick="attack(5)">${champ.heavyWep}</button>
        </div>
    </div>
    <div class="col">
        <div class="btn-group btn-group-vertical button-format">
            <button type="button" class="btn btn-success btn-block" onclick="usePotion('attPotion')">${items.attPotion.name}</button>
            <button type="button" class="btn btn-warning btn-block" onclick="usePotion('berPotion')">${items.berPotion.name}</button>
            <button type="button" class="btn btn-danger btn-block" onclick="usePotion('helPotion')">${items.helPotion.name}</button>
    </div>
    `;
    champPick.innerHTML = template
    enemyPick.innerHTML = "Enemy Health: "+enemyHealth
}

function attack(damage) { 
    enemyHealth -= damage*totalMod
    if (enemyHealth < 0) {
        enemyHealth = 0

    }
    enemyPick.innerHTML = "Enemy Health: "+enemyHealth
}

function usePotion(propertyName) {
    var potion = items[propertyName]
    totalMod = potion.modifier
}


