
jest.mock('../lib/Potion.js');
const Potion = require('../lib/Potion');
const PotionMock = require('../lib/_mocks_/Potion.js');
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

test("gets player's stats as an object", ()=>{
    const player = new Player('Dave');
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () =>{
    const player = new Player('Dave');
    
    expect(player.getInventory()).toEqual(expect.any(Array));
    
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});