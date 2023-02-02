import NewCharacter from "./../src/backend.js"

describe('NewCharacter', () => {

  test('Should make a new character given parameters', () => {
    const newCharacter = new NewCharacter("Justin", "Wizard")
    expect(newCharacter.name).toEqual("Justin");
    expect(newCharacter.profession).toEqual("Wizard");
  });

  test('Should check characters stats', () => {
    const newCharacter = new NewCharacter("Justin", "Wizard")
    expect(newCharacter.stats.dex).toEqual(0);
    expect(newCharacter.stats.int).toEqual(0);
    expect(newCharacter.stats.wis).toEqual(0);
    expect(newCharacter.stats.str).toEqual(0);
    expect(newCharacter.stats.charisma).toEqual(0);
    expect(newCharacter.stats.con).toEqual(0);
  });

  test('Should loop through characters stats and add a number to them, should fail at some point unless they all randomly turn to 4', () => {
    const newCharacter = new NewCharacter("Justin", "Wizard");
    newCharacter.rollStats(newCharacter);
    expect(newCharacter.stats.dex).toEqual(4);
    expect(newCharacter.stats.int).toEqual(4);
    expect(newCharacter.stats.wis).toEqual(4);
    expect(newCharacter.stats.str).toEqual(4);
    expect(newCharacter.stats.charisma).toEqual(4);
    expect(newCharacter.stats.con).toEqual(4);

  })

  test('Should loop through a characters stats and give random integers never lower than 1 or above 5', () => {
    const newCharacter = new NewCharacter("Justin", "Fencer");
    newCharacter.rollStats(newCharacter);
    expect(newCharacter.stats.dex >=1 && newCharacter.stats.dex <=5).toEqual(true);
    expect(newCharacter.stats.int>=1 && newCharacter.stats.int <=5).toEqual(true);
    expect(newCharacter.stats.wis >=1 && newCharacter.stats.wis <=5).toEqual(true);
    expect(newCharacter.stats.str >=1 && newCharacter.stats.str <=5).toEqual(true);
    expect(newCharacter.stats.charisma >=1 && newCharacter.stats.charisma <=5).toEqual(true);
    expect(newCharacter.stats.con >=1 && newCharacter.stats.con <=5).toEqual(true);
  });

  test('Should check user class and change stats by a certain amount', () => {
    let newWarrior = new NewCharacter("Justin", "Warrior");
    newWarrior.applyBonuses(newWarrior);
    expect(newWarrior.stats.str).toEqual(2);
    expect(newWarrior.stats.con).toEqual(2);
    expect(newWarrior.stats.wis).toEqual(-2);
  })

  test('Should check user to be assassin class and change stats by a certain amount', () => {
    let newAssassin = new NewCharacter("Justin1", "Assassin");
    newAssassin.applyBonuses(newAssassin);
    expect(newAssassin.stats.dex).toEqual(2);
    expect(newAssassin.stats.str).toEqual(1);
    expect(newAssassin.stats.con).toEqual(-2);
  })

  test('Should check the user to be a warrior with the applied bonus equipment to be chain vest', () => {
    let newWarriorChest = new NewCharacter("warrior1", "Warrior");
    newWarriorChest.applyBonuses(newWarriorChest);
    expect(newWarriorChest.equipment.chestpiece.name).toEqual("Chain Vest");
    expect(newWarriorChest.equipment.legging.name).toEqual("Chain Leggings");
    expect(newWarriorChest.equipment.gloves.name).toEqual("Chain Gloves");
    expect(newWarriorChest.equipment.headgear.name).toEqual("Chain Helmet");
    expect(newWarriorChest.equipment.weapon.name).toEqual("Greatsword");

    let newPriestGear = new NewCharacter("Priest1", "Priest");
    newPriestGear.applyBonuses(newPriestGear);
    expect(newPriestGear.equipment.chestpiece.name).toEqual("Holy Cloak");
    expect(newPriestGear.equipment.legging.name).toEqual("Holy Pants");
    expect(newPriestGear.equipment.gloves.name).toEqual("Holy Gloves");
    expect(newPriestGear.equipment.headgear.name).toEqual("Halo");
    expect(newPriestGear.equipment.weapon.name).toEqual("Holy Book");
    

    let newThiefGear = new NewCharacter("Thief1", "Thief");
    newThiefGear.applyBonuses(newThiefGear);
    expect(newThiefGear.equipment.legging.name).toEqual("Leather Leggings");
    expect(newThiefGear.equipment.legging.name).toEqual("Leather Leggings");
    expect(newThiefGear.equipment.legging.name).toEqual("Leather Leggings");
    expect(newThiefGear.equipment.legging.name).toEqual("Leather Leggings");

  })
  
})