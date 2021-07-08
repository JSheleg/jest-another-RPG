
jest.mock('../lib/Potion.js');
const Potion = require('../lib/Potion');
const PotionMock = require('../lib/_mocks_/Potion.js');
// console.log(Potion)
// const PotionTest = jest.spyOn(Potion)
Potion.mockImplementation(() => PotionMock());


const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');
    console.log(Potion());
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});