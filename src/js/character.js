export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length must be in [2;10] interval!');
    }

    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!types.includes(type)) {
      throw new Error('Not valid character type!');
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
