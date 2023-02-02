export default function NewCharacter(name, profession) {
  this.name = name;
  this.profession = profession;
  this.stats = { dex: 0, int: 0, wis: 0, str: 0, charisma: 0, con: 0, luck:0, hp:10, weightClass:0, protectionValue:0};
  this.inventory = [];
  this.equipment = {weapon:"nothing", chestpiece: "nothing", legging:"nothing", headgear: "nothing", gloves: "nothing",};
}

function NewItem(name, weightClass, protectionValue, damageValue) {
  this.name = name;
  this.weightClass = weightClass;
  this.protectionValue = protectionValue;
  this.damageValue = damageValue
}

NewCharacter.prototype.rollStats = (characterToRollStats) => {
  let charStats = Object.keys(characterToRollStats.stats);
  charStats.forEach((stat) => {
    characterToRollStats.stats[stat] += Math.floor(Math.random() * 5) + 1;
  });
};

NewCharacter.prototype.applyBonuses = (characterToApplyBonus) => {
  if (characterToApplyBonus.profession === "Warrior") {
    const chainVest = {name:"Chain Vest", protectionValue:20, weightClass:15}
    const chainLeggings = {name:"Chain Leggings", protectionValue:15, weightClass:10}
    const chainGloves = {name:"Chain Gloves", protectionValue:5, weightClass:5}
    const chainHelmet = {name:"Chain Helmet", protectionValue:10, weightClass:8}
    const greatSword = new NewItem("Greatsword", 20, 0, 12);
    
    characterToApplyBonus.stats["str"] += 2;
    characterToApplyBonus.stats["con"] += 2;
    characterToApplyBonus.stats["wis"] += -2;
    characterToApplyBonus.equipment["chestpiece"] = chainVest;
    characterToApplyBonus.equipment["legging"] = chainLeggings;
    characterToApplyBonus.equipment["gloves"] = chainGloves;
    characterToApplyBonus.equipment["headgear"] = chainHelmet;
    characterToApplyBonus.equipment["weapon"] = greatSword
  }

  if (characterToApplyBonus.profession === "Priest") {
    const holyCloak = {name:"Holy Cloak", protectionValue: 5, weightClass: 5}
    const holyPants = {name:"Holy Pants", protectionValue: 5, weightClass: 5}
    const holyGloves = {name:"Holy Gloves", protectionValue: 5, weightClass: 3}
    const halo = {name: "Halo", protectionValue: 25, weightClass: 3}
    const holyBook = new NewItem("Holy Book", 5, 0, );

    characterToApplyBonus.stats["wis"] += 1;
    characterToApplyBonus.stats["int"] += 1;
    characterToApplyBonus.equipment["chestpiece"] = holyCloak;
    characterToApplyBonus.equipment["legging"] = holyPants;
    characterToApplyBonus.equipment["gloves"] = holyGloves;
    characterToApplyBonus.equipment["headgear"] = halo;
    characterToApplyBonus.equipment["weapon"] = holyBook;
  
  }

  if (characterToApplyBonus.profession === "Thief") {
    const leatherVest = {name:"Leather Vest", protectionValue: 10, weightClass: 10}
    const leatherLeggings = {name:"Leather Leggings", protectionValue: 8, weightClass: 8}
    const leatherGloves = {name:"Leather Gloves", protectionValue: 3, weightClass: 3}
    const leatherHat = {name: "Leather Hat", protectionValue: 5, weightClass: 5}

    characterToApplyBonus.stats["dex"] += 2;
    characterToApplyBonus.stats["charisma"] += 1;
    characterToApplyBonus.equipment["chestpiece"] = leatherVest;
    characterToApplyBonus.equipment["legging"] = leatherLeggings;
    characterToApplyBonus.equipment["gloves"] = leatherGloves;
    characterToApplyBonus.equipment["headgear"] = leatherHat;
  
  }

  if (characterToApplyBonus.profession === "Mage") {
    const silkRobe = {name:"Silk Robe", protectionValue:6, weightClass:10}
    const silkPants = {name:"Silk Pants", protectionValue:4, weightClass:4}
    const whiteGloves = {name:"White Gloves", protectionValue:5, weightClass:5}
    const pointyHat = {name:"Pointy Hat", protectionValue:3, weightClass:4}
    
    characterToApplyBonus.stats["int"] += 2;
    characterToApplyBonus.stats["wis"] += 2;
    characterToApplyBonus.stats["con"] += -1;
    characterToApplyBonus.equipment["chestpiece"] = silkRobe;
    characterToApplyBonus.equipment["legging"] = silkPants;
    characterToApplyBonus.equipment["gloves"] = whiteGloves;
    characterToApplyBonus.equipment["headgear"] = pointyHat;
    characterToApplyBonus.equipment["arm"]
  }

  if (characterToApplyBonus.profession === "Assassin") {
    const nightCloak = {name:"Night Cloak", protectionValue:10, weightClass:8}
    const nightTrouser = {name:"Night Trouser", protectionValue:10, weightClass:6}
    const nightGloves = {name:"Night Glove", protectionValue:7, weightClass:5}
    const nightHead = {name:"Night Head", protectionValue:5, weightClass:5}

    characterToApplyBonus.stats["dex"] += 2;
    characterToApplyBonus.stats["str"] += 1;
    characterToApplyBonus.stats["con"] -= 2;
    characterToApplyBonus.equipment["chestpiece"] = nightCloak;
    characterToApplyBonus.equipment["legging"] = nightTrouser;
    characterToApplyBonus.equipment["gloves"] = nightGloves;
    characterToApplyBonus.equipment["headgear"] = nightHead;
  }

};

