import NewCharacter from "./../src/backend"

describe('NewCharacter', () => {

  test('Should make a new character given parameters', () => {
    const newCharacter = new NewCharacter("Justin", "Wizard")
    expect(newCharacter.name).toEqual("Justin");
    expect(newCharacter.profession).toEqual("Wizard");
  })

})