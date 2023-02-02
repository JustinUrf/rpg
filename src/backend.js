export default function NewCharacter(name, profession) {
  this.name = name;
  this.profession = profession;
  this.stats = { dex: 0, int: 0, wis: 0, str: 0, charisma: 0, con: 0, luck:0, hp:10};
  this.inventory = [];
  this.equipment = {armament:"", chestpiece: "nothing", legging:"", headgear: "", gloves: "",};
}

NewCharacter.prototype.rollStats = (characterToRollStats) => {
  let charStats = Object.keys(characterToRollStats.stats);
  charStats.forEach((stat) => {
    characterToRollStats.stats[stat] += Math.floor(Math.random() * 5) + 1;
  });
};

NewCharacter.prototype.applyBonuses = (characterToApplyBonus) => {
  if (characterToApplyBonus.profession === "Warrior") {
    characterToApplyBonus.stats["str"] += 2;
    characterToApplyBonus.stats["con"] += 2;
    characterToApplyBonus.stats["wis"] += -2;
    characterToApplyBonus.equipment["chestpiece"] = "chain vest";
  }

  if (characterToApplyBonus.profession === "Priest") {
    characterToApplyBonus.stats["wis"] += 1;
    characterToApplyBonus.stats["int"] += 1;
  }

  if (characterToApplyBonus.profession === "Thief") {
    characterToApplyBonus.stats["dex"] += 2;
    characterToApplyBonus.stats["charisma"] += 1;
  }

  if (characterToApplyBonus.profession === "Mage") {
    characterToApplyBonus.stats["int"] += 2;
    characterToApplyBonus.stats["wis"] += 2;
    characterToApplyBonus.stats["con"] += -1;
  }

  if (characterToApplyBonus.profession === "Assassin") {
    characterToApplyBonus.stats["dex"] += 2;
    characterToApplyBonus.stats["str"] += 1;
    characterToApplyBonus.stats["con"] -= 2;
  }

};

