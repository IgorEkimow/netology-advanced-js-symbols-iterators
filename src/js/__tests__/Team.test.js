import Team from '../Team';
import Character from '../Character';

test('Expect to form the Team', () => {
  const team = new Team();
  team.add(new Character('Alex'));
  team.add(new Character('Ben'));
  team.add(new Character('Dan'));
  team.add(new Character('John'));
  team.add(new Character('Anna'));
  team.add(new Character('Elizabeth'));
  for (const character of team) {
    expect(character).toEqual({
      name: character.name,
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  }
});
