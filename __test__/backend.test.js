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

  test('Should loop through characters stats and add a number to them', () => {
    const newCharacter = new NewCharacter("Justin", "Wizard");
    newCharacter.RollStats(newCharacter);
    expect(newCharacter.stats.dex).toEqual(4);
    expect(newCharacter.stats.int).toEqual(4);
    expect(newCharacter.stats.wis).toEqual(4);
    expect(newCharacter.stats.str).toEqual(4);
    expect(newCharacter.stats.charisma).toEqual(4);
    expect(newCharacter.stats.con).toEqual(4);

  })
})