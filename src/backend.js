
export default function NewCharacter(name, profession) {
  this.name = name;
  this.profession = profession;
  this.stats = {"dex":0, "int":0, "wis":0, "str":0, "charisma":0, "con":0}
};

NewCharacter.prototype.RollStats = (characterToRollStats) => {
  let charStats = Object.keys(characterToRollStats.stats);
  charStats.forEach((stat) => {
    characterToRollStats.stats[stat] += Math.floor(Math.random() * 5) + 1;
  })
}

