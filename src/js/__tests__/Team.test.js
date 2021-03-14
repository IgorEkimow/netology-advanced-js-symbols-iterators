import Team from '../Team';
import Character from '../Character';

test('shoul test Team', () => {
  const team = new Team();
  team.add(new Character('Alex'));
  team.add(new Character('Ben'));
  team.add(new Character('Dan'));
  team.add(new Character('John'));
  team.add(new Character('Anna'));
  team.add(new Character('Elizabeth'));
  for (const pers of team) {
    expect(pers).toEqual({
      name: pers.name,
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    });
  }
});
