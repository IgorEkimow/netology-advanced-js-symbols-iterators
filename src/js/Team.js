export default class Team {
  constructor() {
    this.team = [];
  }

  add(characters) {
    this.team.push(characters);
  }

  [Symbol.iterator]() {
    const characters = this.team;
    let index = -1;
    return {
      next() {
        if (index < characters.length - 1) {
          index += 1;
          return {
            done: false,
            value: characters[index],
          };
        }
        return {
          done: true,
          value: characters[index],
        };
      },
    };
  }
}
