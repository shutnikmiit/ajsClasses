import Character from '../character';

test('test class Character with valid values of property', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test class Character with invalid value of name', () => {
  expect(() => {
    const character = new Character('marksman', 'Daemon', 40, 20);
    return character;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Character with invalid value of type', () => {
  expect(() => {
    const character = new Character('marks', 'Slayer', 40, 20);
    return character;
  }).toThrow(new Error('Not valid character type!'));
});
